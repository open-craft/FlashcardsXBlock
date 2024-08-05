"""
Flashcards XBlock allowes the editor to add a list of quesitions and
answers (separated by a semicolon) which are then displayed as flashcards.
"""

import pkg_resources

from xblock.core import XBlock
from xblock.fields import Scope, Dict, String, List
from web_fragments.fragment import Fragment
from xblock.utils.resources import ResourceLoader

from jinja2 import Environment, PackageLoader

env = Environment(loader=PackageLoader("flashcards", "static/html"))


class FlashcardsXBlock(XBlock):
    """
    The content (the values between the <flashcards> tags) is saved as a
    dictionary and passed as a dictionary to the HTML template
    """

    loader = ResourceLoader(__name__)
    title = String(
        default="",
        scope=Scope.settings,
        help="Title of the flashcards block",
    )

    content = List(default=[], scope=Scope.settings, help="List of items")

    def resource_string(self, path):
        """Handy helper for getting resources from our kit."""
        data = pkg_resources.resource_string(__name__, path)
        return data.decode("utf8")

    def student_view(self, context=None):
        """Create fragment and send the appropriate context."""
        context = {
            "flashcards": self.content,
            "title": self.title,
        }

        frag = Fragment(
            self.loader.render_django_template(
                "static/html/flashcards.html", context=context
            )
        )
        # frag.add_content()
        frag.add_css(self.resource_string("static/css/flashcards.css"))
        frag.add_javascript(self.resource_string("static/js/src/flashcards.js"))
        frag.initialize_js("FlashcardsXBlock", context)
        return frag

    @classmethod
    def parse_xml(cls, node, runtime, keys, id_generator):
        """
        Parse the XML for an HTML block.

        The entire subtree under `node` is re-serialized, and set as the
        content of the XBlock.

        The content between the <flashcards> blocks is being transformed
        into a dictionary, and as such saved into the content class variable
        (which is accessable with self.content)
        """
        block = runtime.construct_xblock_from_class(cls, keys)
        flashcards = {}

        for element in node.iter("flashcard"):
            flashcards[element.attrib["front"]] = element.attrib["back"]

        block.content = flashcards
        block.title = node.attrib["title"]
        return block

    @staticmethod
    def workbench_scenarios():
        """A canned scenario for display in the workbench."""
        return [
            (
                "FlashcardsXBlock",
                """<vertical_demo>
                <flashcards title="Capital cities">
<flashcard front="Croatia" back="Zagreb" />
<flashcard front="France" back="Paris" />
                </flashcards>
                </vertical_demo>
             """,
            ),
        ]

    def studio_view(self, context):
        """Create a fragment used to display the edit view in the Studio."""

        context = {
            "flashcards": self.content,
            "title": self.title,
        }

        frag = Fragment()
        template = env.get_template("flashcards_edit.html")
        frag.add_content(template.render(**context))
        frag.add_css(self.resource_string("static/css/flashcards_edit.css"))
        frag.add_javascript(self.resource_string("static/js/src/flashcards_edit.js"))
        frag.initialize_js("FlashcardsEditXBlock", context)
        return frag

    @XBlock.json_handler
    def studio_submit(self, data, suffix=""):
        """Called when submitting the form in Studio."""
        self.title = data.get("title")
        self.content = data.get("flashcards")
        return {"result": "success"}
