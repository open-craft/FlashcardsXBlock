"""Tests for the FlashcardsXBlock."""

from lxml import etree
from xblock.fields import ScopeIds
from xblock.test.toy_runtime import ToyRuntime

from flashcards import FlashcardsXBlock


def test_student_view_json_data():
    """Test the data structure returned by student_view."""
    scope_ids = ScopeIds("1", "2", "3", "4")
    block = FlashcardsXBlock(ToyRuntime(), scope_ids=scope_ids)
    frag = block.student_view()
    as_dict = frag.to_dict()
    assert "title" in as_dict["json_init_args"]
    assert "flashcards" in as_dict["json_init_args"]
    assert "styling" in as_dict["json_init_args"]
    assert "url" in as_dict["json_init_args"]


def test_studio_view_json_data():
    """Test the data structure returned by studio_view."""
    scope_ids = ScopeIds("1", "2", "3", "4")
    block = FlashcardsXBlock(ToyRuntime(), scope_ids=scope_ids)
    frag = block.studio_view()
    as_dict = frag.to_dict()
    assert "title" in as_dict["json_init_args"]
    assert "flashcards" in as_dict["json_init_args"]
    assert "styling" in as_dict["json_init_args"]
    assert "url" in as_dict["json_init_args"]


def test_export_xml_with_list_content_succeeds():
    """
    Verify that exporting produces valid OLX for list content.

    The export should produce ``<flashcard>`` child elements rather than
    trying to assign the raw Python list to the XML node text.
    """
    scope_ids = ScopeIds("1", "flashcards", "3", "4")
    block = FlashcardsXBlock(ToyRuntime(), scope_ids=scope_ids)
    block.display_name = "Capitals"
    block.content = [
        {"front": "Croatia", "back": "Zagreb"},
        {"front": "France", "back": "Paris"},
    ]

    node = etree.Element("root")
    block.add_xml_to_node(node)  # must not raise

    assert node.tag == "flashcards"
    assert node.get("display_name") == "Capitals"
    assert node.get("xblock-family") == "xblock.v1"

    # title must not appear; display_name is the standard OLX attr
    assert node.get("title") is None

    children = list(node)
    assert len(children) == 2

    assert children[0].tag == "flashcard"
    assert children[0].get("front") == "Croatia"
    assert children[0].get("back") == "Zagreb"

    assert children[1].tag == "flashcard"
    assert children[1].get("front") == "France"
    assert children[1].get("back") == "Paris"


def test_export_xml_with_empty_content():
    """Export should also succeed when content is empty."""
    scope_ids = ScopeIds("1", "flashcards", "3", "4")
    block = FlashcardsXBlock(ToyRuntime(), scope_ids=scope_ids)
    block.content = []

    node = etree.Element("root")
    block.add_xml_to_node(node)

    assert node.tag == "flashcards"
    assert list(node) == []  # no child elements


def test_export_parse_round_trip_with_styling():
    """Export then re-parse via 3-arg calling convention recovers display_name, content, and custom styling."""
    scope_ids = ScopeIds("1", "flashcards", "3", "4")
    block = FlashcardsXBlock(ToyRuntime(), scope_ids=scope_ids)
    block.display_name = "Styled"
    block.content = [{"front": "Q", "back": "A"}]
    block.styling = {
        "fontSize": "24px",
        "backgroundColor": "#ffffff",
        "textColor": "#000000",
        "borderColor": "#cccccc",
    }

    node = etree.Element("root")
    block.add_xml_to_node(node)

    # parse_xml(node, runtime, keys) — the canonical 3-arg OLX import call
    parsed = FlashcardsXBlock.parse_xml(
        node,
        ToyRuntime(),
        ScopeIds("1", "flashcards", "3", "4"),
    )
    assert parsed.display_name == "Styled"
    assert parsed.content == [{"front": "Q", "back": "A"}]
    assert parsed.styling == {
        "fontSize": "24px",
        "backgroundColor": "#ffffff",
        "textColor": "#000000",
        "borderColor": "#cccccc",
    }


def test_import_legacy_title_attribute():
    """
    parse_xml should still handle legacy ``title`` attribute for backward compatibility.

    Old OLX files written with ``title="..."`` must import correctly by mapping
    the legacy attr to ``display_name``.
    """
    xml = '<flashcards title="Legacy Cards"><flashcard front="Q1" back="A1"/></flashcards>'
    node = etree.fromstring(xml)
    parsed = FlashcardsXBlock.parse_xml(
        node,
        ToyRuntime(),
        ScopeIds("1", "flashcards", "3", "4"),
    )
    assert parsed.display_name == "Legacy Cards"
    assert parsed.content == [{"front": "Q1", "back": "A1"}]


def test_import_display_name_trumps_legacy_title():
    """When both ``display_name`` and legacy ``title`` are present, ``display_name`` wins."""
    xml = '<flashcards display_name="New Name" title="Old Name"><flashcard front="Q" back="A"/></flashcards>'
    node = etree.fromstring(xml)
    parsed = FlashcardsXBlock.parse_xml(
        node,
        ToyRuntime(),
        ScopeIds("1", "flashcards", "3", "4"),
    )
    assert parsed.display_name == "New Name"


def test_import_no_title_fallback_default():
    """When neither display_name nor title is present, parse_xml defaults to "Flashcards"."""
    xml = '<flashcards><flashcard front="Q" back="A"/></flashcards>'
    node = etree.fromstring(xml)
    parsed = FlashcardsXBlock.parse_xml(
        node,
        ToyRuntime(),
        ScopeIds("1", "flashcards", "3", "4"),
    )
    assert parsed.display_name == "Flashcards"
