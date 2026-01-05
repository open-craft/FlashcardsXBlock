var Rc = Object.defineProperty;
var Lc = (e, n, t) => n in e ? Rc(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var Zi = (e, n, t) => Lc(e, typeof n != "symbol" ? n + "" : n, t);
function Xo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var as = { exports: {} }, cl = {}, cs = { exports: {} }, L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lr = Symbol.for("react.element"), Oc = Symbol.for("react.portal"), Mc = Symbol.for("react.fragment"), Dc = Symbol.for("react.strict_mode"), jc = Symbol.for("react.profiler"), Fc = Symbol.for("react.provider"), Ic = Symbol.for("react.context"), $c = Symbol.for("react.forward_ref"), Ac = Symbol.for("react.suspense"), Uc = Symbol.for("react.memo"), Vc = Symbol.for("react.lazy"), Ji = Symbol.iterator;
function Bc(e) {
  return e === null || typeof e != "object" ? null : (e = Ji && e[Ji] || e["@@iterator"], typeof e == "function" ? e : null);
}
var fs = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ds = Object.assign, ps = {};
function yt(e, n, t) {
  this.props = e, this.context = n, this.refs = ps, this.updater = t || fs;
}
yt.prototype.isReactComponent = {};
yt.prototype.setState = function(e, n) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, n, "setState");
};
yt.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ms() {
}
ms.prototype = yt.prototype;
function Go(e, n, t) {
  this.props = e, this.context = n, this.refs = ps, this.updater = t || fs;
}
var Zo = Go.prototype = new ms();
Zo.constructor = Go;
ds(Zo, yt.prototype);
Zo.isPureReactComponent = !0;
var qi = Array.isArray, hs = Object.prototype.hasOwnProperty, Jo = { current: null }, vs = { key: !0, ref: !0, __self: !0, __source: !0 };
function ys(e, n, t) {
  var r, l = {}, o = null, i = null;
  if (n != null) for (r in n.ref !== void 0 && (i = n.ref), n.key !== void 0 && (o = "" + n.key), n) hs.call(n, r) && !vs.hasOwnProperty(r) && (l[r] = n[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = t;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: lr, type: e, key: o, ref: i, props: l, _owner: Jo.current };
}
function Hc(e, n) {
  return { $$typeof: lr, type: e.type, key: n, ref: e.ref, props: e.props, _owner: e._owner };
}
function qo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === lr;
}
function Wc(e) {
  var n = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(t) {
    return n[t];
  });
}
var bi = /\/+/g;
function Tl(e, n) {
  return typeof e == "object" && e !== null && e.key != null ? Wc("" + e.key) : n.toString(36);
}
function zr(e, n, t, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else switch (o) {
    case "string":
    case "number":
      i = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case lr:
        case Oc:
          i = !0;
      }
  }
  if (i) return i = e, l = l(i), e = r === "" ? "." + Tl(i, 0) : r, qi(l) ? (t = "", e != null && (t = e.replace(bi, "$&/") + "/"), zr(l, n, t, "", function(c) {
    return c;
  })) : l != null && (qo(l) && (l = Hc(l, t + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(bi, "$&/") + "/") + e)), n.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", qi(e)) for (var u = 0; u < e.length; u++) {
    o = e[u];
    var s = r + Tl(o, u);
    i += zr(o, n, t, s, l);
  }
  else if (s = Bc(e), typeof s == "function") for (e = s.call(e), u = 0; !(o = e.next()).done; ) o = o.value, s = r + Tl(o, u++), i += zr(o, n, t, s, l);
  else if (o === "object") throw n = String(e), Error("Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function fr(e, n, t) {
  if (e == null) return e;
  var r = [], l = 0;
  return zr(e, r, "", "", function(o) {
    return n.call(t, o, l++);
  }), r;
}
function Qc(e) {
  if (e._status === -1) {
    var n = e._result;
    n = n(), n.then(function(t) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = t);
    }, function(t) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = t);
    }), e._status === -1 && (e._status = 0, e._result = n);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var de = { current: null }, Tr = { transition: null }, Kc = { ReactCurrentDispatcher: de, ReactCurrentBatchConfig: Tr, ReactCurrentOwner: Jo };
function gs() {
  throw Error("act(...) is not supported in production builds of React.");
}
L.Children = { map: fr, forEach: function(e, n, t) {
  fr(e, function() {
    n.apply(this, arguments);
  }, t);
}, count: function(e) {
  var n = 0;
  return fr(e, function() {
    n++;
  }), n;
}, toArray: function(e) {
  return fr(e, function(n) {
    return n;
  }) || [];
}, only: function(e) {
  if (!qo(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
L.Component = yt;
L.Fragment = Mc;
L.Profiler = jc;
L.PureComponent = Go;
L.StrictMode = Dc;
L.Suspense = Ac;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kc;
L.act = gs;
L.cloneElement = function(e, n, t) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ds({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (n != null) {
    if (n.ref !== void 0 && (o = n.ref, i = Jo.current), n.key !== void 0 && (l = "" + n.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (s in n) hs.call(n, s) && !vs.hasOwnProperty(s) && (r[s] = n[s] === void 0 && u !== void 0 ? u[s] : n[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = t;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: lr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
L.createContext = function(e) {
  return e = { $$typeof: Ic, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Fc, _context: e }, e.Consumer = e;
};
L.createElement = ys;
L.createFactory = function(e) {
  var n = ys.bind(null, e);
  return n.type = e, n;
};
L.createRef = function() {
  return { current: null };
};
L.forwardRef = function(e) {
  return { $$typeof: $c, render: e };
};
L.isValidElement = qo;
L.lazy = function(e) {
  return { $$typeof: Vc, _payload: { _status: -1, _result: e }, _init: Qc };
};
L.memo = function(e, n) {
  return { $$typeof: Uc, type: e, compare: n === void 0 ? null : n };
};
L.startTransition = function(e) {
  var n = Tr.transition;
  Tr.transition = {};
  try {
    e();
  } finally {
    Tr.transition = n;
  }
};
L.unstable_act = gs;
L.useCallback = function(e, n) {
  return de.current.useCallback(e, n);
};
L.useContext = function(e) {
  return de.current.useContext(e);
};
L.useDebugValue = function() {
};
L.useDeferredValue = function(e) {
  return de.current.useDeferredValue(e);
};
L.useEffect = function(e, n) {
  return de.current.useEffect(e, n);
};
L.useId = function() {
  return de.current.useId();
};
L.useImperativeHandle = function(e, n, t) {
  return de.current.useImperativeHandle(e, n, t);
};
L.useInsertionEffect = function(e, n) {
  return de.current.useInsertionEffect(e, n);
};
L.useLayoutEffect = function(e, n) {
  return de.current.useLayoutEffect(e, n);
};
L.useMemo = function(e, n) {
  return de.current.useMemo(e, n);
};
L.useReducer = function(e, n, t) {
  return de.current.useReducer(e, n, t);
};
L.useRef = function(e) {
  return de.current.useRef(e);
};
L.useState = function(e) {
  return de.current.useState(e);
};
L.useSyncExternalStore = function(e, n, t) {
  return de.current.useSyncExternalStore(e, n, t);
};
L.useTransition = function() {
  return de.current.useTransition();
};
L.version = "18.3.1";
cs.exports = L;
var A = cs.exports;
const D = /* @__PURE__ */ Xo(A);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yc = A, Xc = Symbol.for("react.element"), Gc = Symbol.for("react.fragment"), Zc = Object.prototype.hasOwnProperty, Jc = Yc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, qc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ws(e, n, t) {
  var r, l = {}, o = null, i = null;
  t !== void 0 && (o = "" + t), n.key !== void 0 && (o = "" + n.key), n.ref !== void 0 && (i = n.ref);
  for (r in n) Zc.call(n, r) && !qc.hasOwnProperty(r) && (l[r] = n[r]);
  if (e && e.defaultProps) for (r in n = e.defaultProps, n) l[r] === void 0 && (l[r] = n[r]);
  return { $$typeof: Xc, type: e, key: o, ref: i, props: l, _owner: Jc.current };
}
cl.Fragment = Gc;
cl.jsx = ws;
cl.jsxs = ws;
as.exports = cl;
var O = as.exports, ks = { exports: {} }, Ce = {}, Ss = { exports: {} }, Es = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function n(x, z) {
    var R = x.length;
    x.push(z);
    e: for (; 0 < R; ) {
      var X = R - 1 >>> 1, b = x[X];
      if (0 < l(b, z)) x[X] = z, x[R] = b, R = X;
      else break e;
    }
  }
  function t(x) {
    return x.length === 0 ? null : x[0];
  }
  function r(x) {
    if (x.length === 0) return null;
    var z = x[0], R = x.pop();
    if (R !== z) {
      x[0] = R;
      e: for (var X = 0, b = x.length, ar = b >>> 1; X < ar; ) {
        var xn = 2 * (X + 1) - 1, zl = x[xn], Cn = xn + 1, cr = x[Cn];
        if (0 > l(zl, R)) Cn < b && 0 > l(cr, zl) ? (x[X] = cr, x[Cn] = R, X = Cn) : (x[X] = zl, x[xn] = R, X = xn);
        else if (Cn < b && 0 > l(cr, R)) x[X] = cr, x[Cn] = R, X = Cn;
        else break e;
      }
    }
    return z;
  }
  function l(x, z) {
    var R = x.sortIndex - z.sortIndex;
    return R !== 0 ? R : x.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var i = Date, u = i.now();
    e.unstable_now = function() {
      return i.now() - u;
    };
  }
  var s = [], c = [], p = 1, h = null, m = 3, g = !1, w = !1, k = !1, F = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(x) {
    for (var z = t(c); z !== null; ) {
      if (z.callback === null) r(c);
      else if (z.startTime <= x) r(c), z.sortIndex = z.expirationTime, n(s, z);
      else break;
      z = t(c);
    }
  }
  function v(x) {
    if (k = !1, d(x), !w) if (t(s) !== null) w = !0, Wn(S);
    else {
      var z = t(c);
      z !== null && Pl(v, z.startTime - x);
    }
  }
  function S(x, z) {
    w = !1, k && (k = !1, f(N), N = -1), g = !0;
    var R = m;
    try {
      for (d(z), h = t(s); h !== null && (!(h.expirationTime > z) || x && !me()); ) {
        var X = h.callback;
        if (typeof X == "function") {
          h.callback = null, m = h.priorityLevel;
          var b = X(h.expirationTime <= z);
          z = e.unstable_now(), typeof b == "function" ? h.callback = b : h === t(s) && r(s), d(z);
        } else r(s);
        h = t(s);
      }
      if (h !== null) var ar = !0;
      else {
        var xn = t(c);
        xn !== null && Pl(v, xn.startTime - z), ar = !1;
      }
      return ar;
    } finally {
      h = null, m = R, g = !1;
    }
  }
  var _ = !1, C = null, N = -1, B = 5, T = -1;
  function me() {
    return !(e.unstable_now() - T < B);
  }
  function H() {
    if (C !== null) {
      var x = e.unstable_now();
      T = x;
      var z = !0;
      try {
        z = C(!0, x);
      } finally {
        z ? ae() : (_ = !1, C = null);
      }
    } else _ = !1;
  }
  var ae;
  if (typeof a == "function") ae = function() {
    a(H);
  };
  else if (typeof MessageChannel < "u") {
    var Ae = new MessageChannel(), Hn = Ae.port2;
    Ae.port1.onmessage = H, ae = function() {
      Hn.postMessage(null);
    };
  } else ae = function() {
    F(H, 0);
  };
  function Wn(x) {
    C = x, _ || (_ = !0, ae());
  }
  function Pl(x, z) {
    N = F(function() {
      x(e.unstable_now());
    }, z);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(x) {
    x.callback = null;
  }, e.unstable_continueExecution = function() {
    w || g || (w = !0, Wn(S));
  }, e.unstable_forceFrameRate = function(x) {
    0 > x || 125 < x ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : B = 0 < x ? Math.floor(1e3 / x) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return t(s);
  }, e.unstable_next = function(x) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var z = 3;
        break;
      default:
        z = m;
    }
    var R = m;
    m = z;
    try {
      return x();
    } finally {
      m = R;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(x, z) {
    switch (x) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        x = 3;
    }
    var R = m;
    m = x;
    try {
      return z();
    } finally {
      m = R;
    }
  }, e.unstable_scheduleCallback = function(x, z, R) {
    var X = e.unstable_now();
    switch (typeof R == "object" && R !== null ? (R = R.delay, R = typeof R == "number" && 0 < R ? X + R : X) : R = X, x) {
      case 1:
        var b = -1;
        break;
      case 2:
        b = 250;
        break;
      case 5:
        b = 1073741823;
        break;
      case 4:
        b = 1e4;
        break;
      default:
        b = 5e3;
    }
    return b = R + b, x = { id: p++, callback: z, priorityLevel: x, startTime: R, expirationTime: b, sortIndex: -1 }, R > X ? (x.sortIndex = R, n(c, x), t(s) === null && x === t(c) && (k ? (f(N), N = -1) : k = !0, Pl(v, R - X))) : (x.sortIndex = b, n(s, x), w || g || (w = !0, Wn(S))), x;
  }, e.unstable_shouldYield = me, e.unstable_wrapCallback = function(x) {
    var z = m;
    return function() {
      var R = m;
      m = z;
      try {
        return x.apply(this, arguments);
      } finally {
        m = R;
      }
    };
  };
})(Es);
Ss.exports = Es;
var bc = Ss.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ef = A, xe = bc;
function y(e) {
  for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++) n += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var xs = /* @__PURE__ */ new Set(), Vt = {};
function Vn(e, n) {
  ct(e, n), ct(e + "Capture", n);
}
function ct(e, n) {
  for (Vt[e] = n, e = 0; e < n.length; e++) xs.add(n[e]);
}
var Ze = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), no = Object.prototype.hasOwnProperty, nf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, eu = {}, nu = {};
function tf(e) {
  return no.call(nu, e) ? !0 : no.call(eu, e) ? !1 : nf.test(e) ? nu[e] = !0 : (eu[e] = !0, !1);
}
function rf(e, n, t, r) {
  if (t !== null && t.type === 0) return !1;
  switch (typeof n) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : t !== null ? !t.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function lf(e, n, t, r) {
  if (n === null || typeof n > "u" || rf(e, n, t, r)) return !0;
  if (r) return !1;
  if (t !== null) switch (t.type) {
    case 3:
      return !n;
    case 4:
      return n === !1;
    case 5:
      return isNaN(n);
    case 6:
      return isNaN(n) || 1 > n;
  }
  return !1;
}
function pe(e, n, t, r, l, o, i) {
  this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = o, this.removeEmptyString = i;
}
var le = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  le[e] = new pe(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var n = e[0];
  le[n] = new pe(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  le[e] = new pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  le[e] = new pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  le[e] = new pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  le[e] = new pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  le[e] = new pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  le[e] = new pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  le[e] = new pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var bo = /[\-:]([a-z])/g;
function ei(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var n = e.replace(
    bo,
    ei
  );
  le[n] = new pe(n, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var n = e.replace(bo, ei);
  le[n] = new pe(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var n = e.replace(bo, ei);
  le[n] = new pe(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  le[e] = new pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
le.xlinkHref = new pe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  le[e] = new pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ni(e, n, t, r) {
  var l = le.hasOwnProperty(n) ? le[n] : null;
  (l !== null ? l.type !== 0 : r || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (lf(n, t, l, r) && (t = null), r || l === null ? tf(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l.mustUseProperty ? e[l.propertyName] = t === null ? l.type === 3 ? !1 : "" : t : (n = l.attributeName, r = l.attributeNamespace, t === null ? e.removeAttribute(n) : (l = l.type, t = l === 3 || l === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var en = ef.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, dr = Symbol.for("react.element"), Kn = Symbol.for("react.portal"), Yn = Symbol.for("react.fragment"), ti = Symbol.for("react.strict_mode"), to = Symbol.for("react.profiler"), Cs = Symbol.for("react.provider"), _s = Symbol.for("react.context"), ri = Symbol.for("react.forward_ref"), ro = Symbol.for("react.suspense"), lo = Symbol.for("react.suspense_list"), li = Symbol.for("react.memo"), tn = Symbol.for("react.lazy"), Ns = Symbol.for("react.offscreen"), tu = Symbol.iterator;
function kt(e) {
  return e === null || typeof e != "object" ? null : (e = tu && e[tu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var K = Object.assign, Rl;
function zt(e) {
  if (Rl === void 0) try {
    throw Error();
  } catch (t) {
    var n = t.stack.trim().match(/\n( *(at )?)/);
    Rl = n && n[1] || "";
  }
  return `
` + Rl + e;
}
var Ll = !1;
function Ol(e, n) {
  if (!e || Ll) return "";
  Ll = !0;
  var t = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (n) if (n = function() {
      throw Error();
    }, Object.defineProperty(n.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(n, []);
      } catch (c) {
        var r = c;
      }
      Reflect.construct(e, [], n);
    } else {
      try {
        n.call();
      } catch (c) {
        r = c;
      }
      e.call(n.prototype);
    }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (var l = c.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u]; ) u--;
      for (; 1 <= i && 0 <= u; i--, u--) if (l[i] !== o[u]) {
        if (i !== 1 || u !== 1)
          do
            if (i--, u--, 0 > u || l[i] !== o[u]) {
              var s = `
` + l[i].replace(" at new ", " at ");
              return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
            }
          while (1 <= i && 0 <= u);
        break;
      }
    }
  } finally {
    Ll = !1, Error.prepareStackTrace = t;
  }
  return (e = e ? e.displayName || e.name : "") ? zt(e) : "";
}
function of(e) {
  switch (e.tag) {
    case 5:
      return zt(e.type);
    case 16:
      return zt("Lazy");
    case 13:
      return zt("Suspense");
    case 19:
      return zt("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Ol(e.type, !1), e;
    case 11:
      return e = Ol(e.type.render, !1), e;
    case 1:
      return e = Ol(e.type, !0), e;
    default:
      return "";
  }
}
function oo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Yn:
      return "Fragment";
    case Kn:
      return "Portal";
    case to:
      return "Profiler";
    case ti:
      return "StrictMode";
    case ro:
      return "Suspense";
    case lo:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case _s:
      return (e.displayName || "Context") + ".Consumer";
    case Cs:
      return (e._context.displayName || "Context") + ".Provider";
    case ri:
      var n = e.render;
      return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case li:
      return n = e.displayName || null, n !== null ? n : oo(e.type) || "Memo";
    case tn:
      n = e._payload, e = e._init;
      try {
        return oo(e(n));
      } catch {
      }
  }
  return null;
}
function uf(e) {
  var n = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (n.displayName || "Context") + ".Consumer";
    case 10:
      return (n._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = n.render, e = e.displayName || e.name || "", n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return n;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return oo(n);
    case 8:
      return n === ti ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof n == "function") return n.displayName || n.name || null;
      if (typeof n == "string") return n;
  }
  return null;
}
function gn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ps(e) {
  var n = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
}
function sf(e) {
  var n = Ps(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n];
  if (!e.hasOwnProperty(n) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
    var l = t.get, o = t.set;
    return Object.defineProperty(e, n, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(i) {
      r = "" + i, o.call(this, i);
    } }), Object.defineProperty(e, n, { enumerable: t.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[n];
    } };
  }
}
function pr(e) {
  e._valueTracker || (e._valueTracker = sf(e));
}
function zs(e) {
  if (!e) return !1;
  var n = e._valueTracker;
  if (!n) return !0;
  var t = n.getValue(), r = "";
  return e && (r = Ps(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), !0) : !1;
}
function Ur(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function io(e, n) {
  var t = n.checked;
  return K({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? e._wrapperState.initialChecked });
}
function ru(e, n) {
  var t = n.defaultValue == null ? "" : n.defaultValue, r = n.checked != null ? n.checked : n.defaultChecked;
  t = gn(n.value != null ? n.value : t), e._wrapperState = { initialChecked: r, initialValue: t, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
}
function Ts(e, n) {
  n = n.checked, n != null && ni(e, "checked", n, !1);
}
function uo(e, n) {
  Ts(e, n);
  var t = gn(n.value), r = n.type;
  if (t != null) r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  n.hasOwnProperty("value") ? so(e, n.type, t) : n.hasOwnProperty("defaultValue") && so(e, n.type, gn(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
}
function lu(e, n, t) {
  if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
    var r = n.type;
    if (!(r !== "submit" && r !== "reset" || n.value !== void 0 && n.value !== null)) return;
    n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
  }
  t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
}
function so(e, n, t) {
  (n !== "number" || Ur(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
}
var Tt = Array.isArray;
function lt(e, n, t, r) {
  if (e = e.options, n) {
    n = {};
    for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
    for (t = 0; t < e.length; t++) l = n.hasOwnProperty("$" + e[t].value), e[t].selected !== l && (e[t].selected = l), l && r && (e[t].defaultSelected = !0);
  } else {
    for (t = "" + gn(t), n = null, l = 0; l < e.length; l++) {
      if (e[l].value === t) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      n !== null || e[l].disabled || (n = e[l]);
    }
    n !== null && (n.selected = !0);
  }
}
function ao(e, n) {
  if (n.dangerouslySetInnerHTML != null) throw Error(y(91));
  return K({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function ou(e, n) {
  var t = n.value;
  if (t == null) {
    if (t = n.children, n = n.defaultValue, t != null) {
      if (n != null) throw Error(y(92));
      if (Tt(t)) {
        if (1 < t.length) throw Error(y(93));
        t = t[0];
      }
      n = t;
    }
    n == null && (n = ""), t = n;
  }
  e._wrapperState = { initialValue: gn(t) };
}
function Rs(e, n) {
  var t = gn(n.value), r = gn(n.defaultValue);
  t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r);
}
function iu(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
}
function Ls(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function co(e, n) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Ls(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var mr, Os = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, t, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(n, t, r, l);
    });
  } : e;
}(function(e, n) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = n;
  else {
    for (mr = mr || document.createElement("div"), mr.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = mr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; n.firstChild; ) e.appendChild(n.firstChild);
  }
});
function Bt(e, n) {
  if (n) {
    var t = e.firstChild;
    if (t && t === e.lastChild && t.nodeType === 3) {
      t.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var Ot = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, af = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ot).forEach(function(e) {
  af.forEach(function(n) {
    n = n + e.charAt(0).toUpperCase() + e.substring(1), Ot[n] = Ot[e];
  });
});
function Ms(e, n, t) {
  return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || Ot.hasOwnProperty(e) && Ot[e] ? ("" + n).trim() : n + "px";
}
function Ds(e, n) {
  e = e.style;
  for (var t in n) if (n.hasOwnProperty(t)) {
    var r = t.indexOf("--") === 0, l = Ms(t, n[t], r);
    t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : e[t] = l;
  }
}
var cf = K({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function fo(e, n) {
  if (n) {
    if (cf[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(y(137, e));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null) throw Error(y(60));
      if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML)) throw Error(y(61));
    }
    if (n.style != null && typeof n.style != "object") throw Error(y(62));
  }
}
function po(e, n) {
  if (e.indexOf("-") === -1) return typeof n.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var mo = null;
function oi(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ho = null, ot = null, it = null;
function uu(e) {
  if (e = ur(e)) {
    if (typeof ho != "function") throw Error(y(280));
    var n = e.stateNode;
    n && (n = hl(n), ho(e.stateNode, e.type, n));
  }
}
function js(e) {
  ot ? it ? it.push(e) : it = [e] : ot = e;
}
function Fs() {
  if (ot) {
    var e = ot, n = it;
    if (it = ot = null, uu(e), n) for (e = 0; e < n.length; e++) uu(n[e]);
  }
}
function Is(e, n) {
  return e(n);
}
function $s() {
}
var Ml = !1;
function As(e, n, t) {
  if (Ml) return e(n, t);
  Ml = !0;
  try {
    return Is(e, n, t);
  } finally {
    Ml = !1, (ot !== null || it !== null) && ($s(), Fs());
  }
}
function Ht(e, n) {
  var t = e.stateNode;
  if (t === null) return null;
  var r = hl(t);
  if (r === null) return null;
  t = r[n];
  e: switch (n) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (t && typeof t != "function") throw Error(y(231, n, typeof t));
  return t;
}
var vo = !1;
if (Ze) try {
  var St = {};
  Object.defineProperty(St, "passive", { get: function() {
    vo = !0;
  } }), window.addEventListener("test", St, St), window.removeEventListener("test", St, St);
} catch {
  vo = !1;
}
function ff(e, n, t, r, l, o, i, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(t, c);
  } catch (p) {
    this.onError(p);
  }
}
var Mt = !1, Vr = null, Br = !1, yo = null, df = { onError: function(e) {
  Mt = !0, Vr = e;
} };
function pf(e, n, t, r, l, o, i, u, s) {
  Mt = !1, Vr = null, ff.apply(df, arguments);
}
function mf(e, n, t, r, l, o, i, u, s) {
  if (pf.apply(this, arguments), Mt) {
    if (Mt) {
      var c = Vr;
      Mt = !1, Vr = null;
    } else throw Error(y(198));
    Br || (Br = !0, yo = c);
  }
}
function Bn(e) {
  var n = e, t = e;
  if (e.alternate) for (; n.return; ) n = n.return;
  else {
    e = n;
    do
      n = e, n.flags & 4098 && (t = n.return), e = n.return;
    while (e);
  }
  return n.tag === 3 ? t : null;
}
function Us(e) {
  if (e.tag === 13) {
    var n = e.memoizedState;
    if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
  }
  return null;
}
function su(e) {
  if (Bn(e) !== e) throw Error(y(188));
}
function hf(e) {
  var n = e.alternate;
  if (!n) {
    if (n = Bn(e), n === null) throw Error(y(188));
    return n !== e ? null : e;
  }
  for (var t = e, r = n; ; ) {
    var l = t.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (r = l.return, r !== null) {
        t = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === t) return su(l), e;
        if (o === r) return su(l), n;
        o = o.sibling;
      }
      throw Error(y(188));
    }
    if (t.return !== r.return) t = l, r = o;
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === t) {
          i = !0, t = l, r = o;
          break;
        }
        if (u === r) {
          i = !0, r = l, t = o;
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === t) {
            i = !0, t = o, r = l;
            break;
          }
          if (u === r) {
            i = !0, r = o, t = l;
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(y(189));
      }
    }
    if (t.alternate !== r) throw Error(y(190));
  }
  if (t.tag !== 3) throw Error(y(188));
  return t.stateNode.current === t ? e : n;
}
function Vs(e) {
  return e = hf(e), e !== null ? Bs(e) : null;
}
function Bs(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var n = Bs(e);
    if (n !== null) return n;
    e = e.sibling;
  }
  return null;
}
var Hs = xe.unstable_scheduleCallback, au = xe.unstable_cancelCallback, vf = xe.unstable_shouldYield, yf = xe.unstable_requestPaint, G = xe.unstable_now, gf = xe.unstable_getCurrentPriorityLevel, ii = xe.unstable_ImmediatePriority, Ws = xe.unstable_UserBlockingPriority, Hr = xe.unstable_NormalPriority, wf = xe.unstable_LowPriority, Qs = xe.unstable_IdlePriority, fl = null, He = null;
function kf(e) {
  if (He && typeof He.onCommitFiberRoot == "function") try {
    He.onCommitFiberRoot(fl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Fe = Math.clz32 ? Math.clz32 : xf, Sf = Math.log, Ef = Math.LN2;
function xf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Sf(e) / Ef | 0) | 0;
}
var hr = 64, vr = 4194304;
function Rt(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Wr(e, n) {
  var t = e.pendingLanes;
  if (t === 0) return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = t & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? r = Rt(u) : (o &= i, o !== 0 && (r = Rt(o)));
  } else i = t & ~l, i !== 0 ? r = Rt(i) : o !== 0 && (r = Rt(o));
  if (r === 0) return 0;
  if (n !== 0 && n !== r && !(n & l) && (l = r & -r, o = n & -n, l >= o || l === 16 && (o & 4194240) !== 0)) return n;
  if (r & 4 && (r |= t & 16), n = e.entangledLanes, n !== 0) for (e = e.entanglements, n &= r; 0 < n; ) t = 31 - Fe(n), l = 1 << t, r |= e[t], n &= ~l;
  return r;
}
function Cf(e, n) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return n + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return n + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function _f(e, n) {
  for (var t = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - Fe(o), u = 1 << i, s = l[i];
    s === -1 ? (!(u & t) || u & r) && (l[i] = Cf(u, n)) : s <= n && (e.expiredLanes |= u), o &= ~u;
  }
}
function go(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ks() {
  var e = hr;
  return hr <<= 1, !(hr & 4194240) && (hr = 64), e;
}
function Dl(e) {
  for (var n = [], t = 0; 31 > t; t++) n.push(e);
  return n;
}
function or(e, n, t) {
  e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - Fe(n), e[n] = t;
}
function Nf(e, n) {
  var t = e.pendingLanes & ~n;
  e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < t; ) {
    var l = 31 - Fe(t), o = 1 << l;
    n[l] = 0, r[l] = -1, e[l] = -1, t &= ~o;
  }
}
function ui(e, n) {
  var t = e.entangledLanes |= n;
  for (e = e.entanglements; t; ) {
    var r = 31 - Fe(t), l = 1 << r;
    l & n | e[r] & n && (e[r] |= n), t &= ~l;
  }
}
var j = 0;
function Ys(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Xs, si, Gs, Zs, Js, wo = !1, yr = [], cn = null, fn = null, dn = null, Wt = /* @__PURE__ */ new Map(), Qt = /* @__PURE__ */ new Map(), ln = [], Pf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function cu(e, n) {
  switch (e) {
    case "focusin":
    case "focusout":
      cn = null;
      break;
    case "dragenter":
    case "dragleave":
      fn = null;
      break;
    case "mouseover":
    case "mouseout":
      dn = null;
      break;
    case "pointerover":
    case "pointerout":
      Wt.delete(n.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Qt.delete(n.pointerId);
  }
}
function Et(e, n, t, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: n, domEventName: t, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, n !== null && (n = ur(n), n !== null && si(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, l !== null && n.indexOf(l) === -1 && n.push(l), e);
}
function zf(e, n, t, r, l) {
  switch (n) {
    case "focusin":
      return cn = Et(cn, e, n, t, r, l), !0;
    case "dragenter":
      return fn = Et(fn, e, n, t, r, l), !0;
    case "mouseover":
      return dn = Et(dn, e, n, t, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return Wt.set(o, Et(Wt.get(o) || null, e, n, t, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, Qt.set(o, Et(Qt.get(o) || null, e, n, t, r, l)), !0;
  }
  return !1;
}
function qs(e) {
  var n = zn(e.target);
  if (n !== null) {
    var t = Bn(n);
    if (t !== null) {
      if (n = t.tag, n === 13) {
        if (n = Us(t), n !== null) {
          e.blockedOn = n, Js(e.priority, function() {
            Gs(t);
          });
          return;
        }
      } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Rr(e) {
  if (e.blockedOn !== null) return !1;
  for (var n = e.targetContainers; 0 < n.length; ) {
    var t = ko(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (t === null) {
      t = e.nativeEvent;
      var r = new t.constructor(t.type, t);
      mo = r, t.target.dispatchEvent(r), mo = null;
    } else return n = ur(t), n !== null && si(n), e.blockedOn = t, !1;
    n.shift();
  }
  return !0;
}
function fu(e, n, t) {
  Rr(e) && t.delete(n);
}
function Tf() {
  wo = !1, cn !== null && Rr(cn) && (cn = null), fn !== null && Rr(fn) && (fn = null), dn !== null && Rr(dn) && (dn = null), Wt.forEach(fu), Qt.forEach(fu);
}
function xt(e, n) {
  e.blockedOn === n && (e.blockedOn = null, wo || (wo = !0, xe.unstable_scheduleCallback(xe.unstable_NormalPriority, Tf)));
}
function Kt(e) {
  function n(l) {
    return xt(l, e);
  }
  if (0 < yr.length) {
    xt(yr[0], e);
    for (var t = 1; t < yr.length; t++) {
      var r = yr[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (cn !== null && xt(cn, e), fn !== null && xt(fn, e), dn !== null && xt(dn, e), Wt.forEach(n), Qt.forEach(n), t = 0; t < ln.length; t++) r = ln[t], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ln.length && (t = ln[0], t.blockedOn === null); ) qs(t), t.blockedOn === null && ln.shift();
}
var ut = en.ReactCurrentBatchConfig, Qr = !0;
function Rf(e, n, t, r) {
  var l = j, o = ut.transition;
  ut.transition = null;
  try {
    j = 1, ai(e, n, t, r);
  } finally {
    j = l, ut.transition = o;
  }
}
function Lf(e, n, t, r) {
  var l = j, o = ut.transition;
  ut.transition = null;
  try {
    j = 4, ai(e, n, t, r);
  } finally {
    j = l, ut.transition = o;
  }
}
function ai(e, n, t, r) {
  if (Qr) {
    var l = ko(e, n, t, r);
    if (l === null) Wl(e, n, r, Kr, t), cu(e, r);
    else if (zf(l, e, n, t, r)) r.stopPropagation();
    else if (cu(e, r), n & 4 && -1 < Pf.indexOf(e)) {
      for (; l !== null; ) {
        var o = ur(l);
        if (o !== null && Xs(o), o = ko(e, n, t, r), o === null && Wl(e, n, r, Kr, t), o === l) break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Wl(e, n, r, null, t);
  }
}
var Kr = null;
function ko(e, n, t, r) {
  if (Kr = null, e = oi(r), e = zn(e), e !== null) if (n = Bn(e), n === null) e = null;
  else if (t = n.tag, t === 13) {
    if (e = Us(n), e !== null) return e;
    e = null;
  } else if (t === 3) {
    if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
    e = null;
  } else n !== e && (e = null);
  return Kr = e, null;
}
function bs(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (gf()) {
        case ii:
          return 1;
        case Ws:
          return 4;
        case Hr:
        case wf:
          return 16;
        case Qs:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var un = null, ci = null, Lr = null;
function ea() {
  if (Lr) return Lr;
  var e, n = ci, t = n.length, r, l = "value" in un ? un.value : un.textContent, o = l.length;
  for (e = 0; e < t && n[e] === l[e]; e++) ;
  var i = t - e;
  for (r = 1; r <= i && n[t - r] === l[o - r]; r++) ;
  return Lr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Or(e) {
  var n = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function gr() {
  return !0;
}
function du() {
  return !1;
}
function _e(e) {
  function n(t, r, l, o, i) {
    this._reactName = t, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (t = e[u], this[u] = t ? t(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? gr : du, this.isPropagationStopped = du, this;
  }
  return K(n.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var t = this.nativeEvent;
    t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = gr);
  }, stopPropagation: function() {
    var t = this.nativeEvent;
    t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = gr);
  }, persist: function() {
  }, isPersistent: gr }), n;
}
var gt = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, fi = _e(gt), ir = K({}, gt, { view: 0, detail: 0 }), Of = _e(ir), jl, Fl, Ct, dl = K({}, ir, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: di, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Ct && (Ct && e.type === "mousemove" ? (jl = e.screenX - Ct.screenX, Fl = e.screenY - Ct.screenY) : Fl = jl = 0, Ct = e), jl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Fl;
} }), pu = _e(dl), Mf = K({}, dl, { dataTransfer: 0 }), Df = _e(Mf), jf = K({}, ir, { relatedTarget: 0 }), Il = _e(jf), Ff = K({}, gt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), If = _e(Ff), $f = K({}, gt, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Af = _e($f), Uf = K({}, gt, { data: 0 }), mu = _e(Uf), Vf = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Bf = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Hf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Wf(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = Hf[e]) ? !!n[e] : !1;
}
function di() {
  return Wf;
}
var Qf = K({}, ir, { key: function(e) {
  if (e.key) {
    var n = Vf[e.key] || e.key;
    if (n !== "Unidentified") return n;
  }
  return e.type === "keypress" ? (e = Or(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Bf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: di, charCode: function(e) {
  return e.type === "keypress" ? Or(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Or(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Kf = _e(Qf), Yf = K({}, dl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), hu = _e(Yf), Xf = K({}, ir, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: di }), Gf = _e(Xf), Zf = K({}, gt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Jf = _e(Zf), qf = K({}, dl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), bf = _e(qf), ed = [9, 13, 27, 32], pi = Ze && "CompositionEvent" in window, Dt = null;
Ze && "documentMode" in document && (Dt = document.documentMode);
var nd = Ze && "TextEvent" in window && !Dt, na = Ze && (!pi || Dt && 8 < Dt && 11 >= Dt), vu = " ", yu = !1;
function ta(e, n) {
  switch (e) {
    case "keyup":
      return ed.indexOf(n.keyCode) !== -1;
    case "keydown":
      return n.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function ra(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Xn = !1;
function td(e, n) {
  switch (e) {
    case "compositionend":
      return ra(n);
    case "keypress":
      return n.which !== 32 ? null : (yu = !0, vu);
    case "textInput":
      return e = n.data, e === vu && yu ? null : e;
    default:
      return null;
  }
}
function rd(e, n) {
  if (Xn) return e === "compositionend" || !pi && ta(e, n) ? (e = ea(), Lr = ci = un = null, Xn = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
        if (n.char && 1 < n.char.length) return n.char;
        if (n.which) return String.fromCharCode(n.which);
      }
      return null;
    case "compositionend":
      return na && n.locale !== "ko" ? null : n.data;
    default:
      return null;
  }
}
var ld = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function gu(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === "input" ? !!ld[e.type] : n === "textarea";
}
function la(e, n, t, r) {
  js(r), n = Yr(n, "onChange"), 0 < n.length && (t = new fi("onChange", "change", null, t, r), e.push({ event: t, listeners: n }));
}
var jt = null, Yt = null;
function od(e) {
  ha(e, 0);
}
function pl(e) {
  var n = Jn(e);
  if (zs(n)) return e;
}
function id(e, n) {
  if (e === "change") return n;
}
var oa = !1;
if (Ze) {
  var $l;
  if (Ze) {
    var Al = "oninput" in document;
    if (!Al) {
      var wu = document.createElement("div");
      wu.setAttribute("oninput", "return;"), Al = typeof wu.oninput == "function";
    }
    $l = Al;
  } else $l = !1;
  oa = $l && (!document.documentMode || 9 < document.documentMode);
}
function ku() {
  jt && (jt.detachEvent("onpropertychange", ia), Yt = jt = null);
}
function ia(e) {
  if (e.propertyName === "value" && pl(Yt)) {
    var n = [];
    la(n, Yt, e, oi(e)), As(od, n);
  }
}
function ud(e, n, t) {
  e === "focusin" ? (ku(), jt = n, Yt = t, jt.attachEvent("onpropertychange", ia)) : e === "focusout" && ku();
}
function sd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return pl(Yt);
}
function ad(e, n) {
  if (e === "click") return pl(n);
}
function cd(e, n) {
  if (e === "input" || e === "change") return pl(n);
}
function fd(e, n) {
  return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
}
var $e = typeof Object.is == "function" ? Object.is : fd;
function Xt(e, n) {
  if ($e(e, n)) return !0;
  if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
  var t = Object.keys(e), r = Object.keys(n);
  if (t.length !== r.length) return !1;
  for (r = 0; r < t.length; r++) {
    var l = t[r];
    if (!no.call(n, l) || !$e(e[l], n[l])) return !1;
  }
  return !0;
}
function Su(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Eu(e, n) {
  var t = Su(e);
  e = 0;
  for (var r; t; ) {
    if (t.nodeType === 3) {
      if (r = e + t.textContent.length, e <= n && r >= n) return { node: t, offset: n - e };
      e = r;
    }
    e: {
      for (; t; ) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break e;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = Su(t);
  }
}
function ua(e, n) {
  return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? ua(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
}
function sa() {
  for (var e = window, n = Ur(); n instanceof e.HTMLIFrameElement; ) {
    try {
      var t = typeof n.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t) e = n.contentWindow;
    else break;
    n = Ur(e.document);
  }
  return n;
}
function mi(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
}
function dd(e) {
  var n = sa(), t = e.focusedElem, r = e.selectionRange;
  if (n !== t && t && t.ownerDocument && ua(t.ownerDocument.documentElement, t)) {
    if (r !== null && mi(t)) {
      if (n = r.start, e = r.end, e === void 0 && (e = n), "selectionStart" in t) t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
      else if (e = (n = t.ownerDocument || document) && n.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = t.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = Eu(t, o);
        var i = Eu(
          t,
          r
        );
        l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (n = n.createRange(), n.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(n), e.extend(i.node, i.offset)) : (n.setEnd(i.node, i.offset), e.addRange(n)));
      }
    }
    for (n = [], e = t; e = e.parentNode; ) e.nodeType === 1 && n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++) e = n[t], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var pd = Ze && "documentMode" in document && 11 >= document.documentMode, Gn = null, So = null, Ft = null, Eo = !1;
function xu(e, n, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  Eo || Gn == null || Gn !== Ur(r) || (r = Gn, "selectionStart" in r && mi(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Ft && Xt(Ft, r) || (Ft = r, r = Yr(So, "onSelect"), 0 < r.length && (n = new fi("onSelect", "select", null, n, t), e.push({ event: n, listeners: r }), n.target = Gn)));
}
function wr(e, n) {
  var t = {};
  return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
}
var Zn = { animationend: wr("Animation", "AnimationEnd"), animationiteration: wr("Animation", "AnimationIteration"), animationstart: wr("Animation", "AnimationStart"), transitionend: wr("Transition", "TransitionEnd") }, Ul = {}, aa = {};
Ze && (aa = document.createElement("div").style, "AnimationEvent" in window || (delete Zn.animationend.animation, delete Zn.animationiteration.animation, delete Zn.animationstart.animation), "TransitionEvent" in window || delete Zn.transitionend.transition);
function ml(e) {
  if (Ul[e]) return Ul[e];
  if (!Zn[e]) return e;
  var n = Zn[e], t;
  for (t in n) if (n.hasOwnProperty(t) && t in aa) return Ul[e] = n[t];
  return e;
}
var ca = ml("animationend"), fa = ml("animationiteration"), da = ml("animationstart"), pa = ml("transitionend"), ma = /* @__PURE__ */ new Map(), Cu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function kn(e, n) {
  ma.set(e, n), Vn(n, [e]);
}
for (var Vl = 0; Vl < Cu.length; Vl++) {
  var Bl = Cu[Vl], md = Bl.toLowerCase(), hd = Bl[0].toUpperCase() + Bl.slice(1);
  kn(md, "on" + hd);
}
kn(ca, "onAnimationEnd");
kn(fa, "onAnimationIteration");
kn(da, "onAnimationStart");
kn("dblclick", "onDoubleClick");
kn("focusin", "onFocus");
kn("focusout", "onBlur");
kn(pa, "onTransitionEnd");
ct("onMouseEnter", ["mouseout", "mouseover"]);
ct("onMouseLeave", ["mouseout", "mouseover"]);
ct("onPointerEnter", ["pointerout", "pointerover"]);
ct("onPointerLeave", ["pointerout", "pointerover"]);
Vn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Vn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Vn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Vn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Vn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Vn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Lt = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), vd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Lt));
function _u(e, n, t) {
  var r = e.type || "unknown-event";
  e.currentTarget = t, mf(r, n, void 0, e), e.currentTarget = null;
}
function ha(e, n) {
  n = (n & 4) !== 0;
  for (var t = 0; t < e.length; t++) {
    var r = e[t], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (n) for (var i = r.length - 1; 0 <= i; i--) {
        var u = r[i], s = u.instance, c = u.currentTarget;
        if (u = u.listener, s !== o && l.isPropagationStopped()) break e;
        _u(l, u, c), o = s;
      }
      else for (i = 0; i < r.length; i++) {
        if (u = r[i], s = u.instance, c = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped()) break e;
        _u(l, u, c), o = s;
      }
    }
  }
  if (Br) throw e = yo, Br = !1, yo = null, e;
}
function $(e, n) {
  var t = n[Po];
  t === void 0 && (t = n[Po] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  t.has(r) || (va(n, e, 2, !1), t.add(r));
}
function Hl(e, n, t) {
  var r = 0;
  n && (r |= 4), va(t, e, r, n);
}
var kr = "_reactListening" + Math.random().toString(36).slice(2);
function Gt(e) {
  if (!e[kr]) {
    e[kr] = !0, xs.forEach(function(t) {
      t !== "selectionchange" && (vd.has(t) || Hl(t, !1, e), Hl(t, !0, e));
    });
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[kr] || (n[kr] = !0, Hl("selectionchange", !1, n));
  }
}
function va(e, n, t, r) {
  switch (bs(n)) {
    case 1:
      var l = Rf;
      break;
    case 4:
      l = Lf;
      break;
    default:
      l = ai;
  }
  t = l.bind(null, n, t, e), l = void 0, !vo || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(n, t, { capture: !0, passive: l }) : e.addEventListener(n, t, !0) : l !== void 0 ? e.addEventListener(n, t, { passive: l }) : e.addEventListener(n, t, !1);
}
function Wl(e, n, t, r, l) {
  var o = r;
  if (!(n & 1) && !(n & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var i = r.tag;
    if (i === 3 || i === 4) {
      var u = r.stateNode.containerInfo;
      if (u === l || u.nodeType === 8 && u.parentNode === l) break;
      if (i === 4) for (i = r.return; i !== null; ) {
        var s = i.tag;
        if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
        i = i.return;
      }
      for (; u !== null; ) {
        if (i = zn(u), i === null) return;
        if (s = i.tag, s === 5 || s === 6) {
          r = o = i;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  As(function() {
    var c = o, p = oi(t), h = [];
    e: {
      var m = ma.get(e);
      if (m !== void 0) {
        var g = fi, w = e;
        switch (e) {
          case "keypress":
            if (Or(t) === 0) break e;
          case "keydown":
          case "keyup":
            g = Kf;
            break;
          case "focusin":
            w = "focus", g = Il;
            break;
          case "focusout":
            w = "blur", g = Il;
            break;
          case "beforeblur":
          case "afterblur":
            g = Il;
            break;
          case "click":
            if (t.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = pu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Df;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Gf;
            break;
          case ca:
          case fa:
          case da:
            g = If;
            break;
          case pa:
            g = Jf;
            break;
          case "scroll":
            g = Of;
            break;
          case "wheel":
            g = bf;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Af;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = hu;
        }
        var k = (n & 4) !== 0, F = !k && e === "scroll", f = k ? m !== null ? m + "Capture" : null : m;
        k = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var v = d.stateNode;
          if (d.tag === 5 && v !== null && (d = v, f !== null && (v = Ht(a, f), v != null && k.push(Zt(a, v, d)))), F) break;
          a = a.return;
        }
        0 < k.length && (m = new g(m, w, null, t, p), h.push({ event: m, listeners: k }));
      }
    }
    if (!(n & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", m && t !== mo && (w = t.relatedTarget || t.fromElement) && (zn(w) || w[Je])) break e;
        if ((g || m) && (m = p.window === p ? p : (m = p.ownerDocument) ? m.defaultView || m.parentWindow : window, g ? (w = t.relatedTarget || t.toElement, g = c, w = w ? zn(w) : null, w !== null && (F = Bn(w), w !== F || w.tag !== 5 && w.tag !== 6) && (w = null)) : (g = null, w = c), g !== w)) {
          if (k = pu, v = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (k = hu, v = "onPointerLeave", f = "onPointerEnter", a = "pointer"), F = g == null ? m : Jn(g), d = w == null ? m : Jn(w), m = new k(v, a + "leave", g, t, p), m.target = F, m.relatedTarget = d, v = null, zn(p) === c && (k = new k(f, a + "enter", w, t, p), k.target = d, k.relatedTarget = F, v = k), F = v, g && w) n: {
            for (k = g, f = w, a = 0, d = k; d; d = Qn(d)) a++;
            for (d = 0, v = f; v; v = Qn(v)) d++;
            for (; 0 < a - d; ) k = Qn(k), a--;
            for (; 0 < d - a; ) f = Qn(f), d--;
            for (; a--; ) {
              if (k === f || f !== null && k === f.alternate) break n;
              k = Qn(k), f = Qn(f);
            }
            k = null;
          }
          else k = null;
          g !== null && Nu(h, m, g, k, !1), w !== null && F !== null && Nu(h, F, w, k, !0);
        }
      }
      e: {
        if (m = c ? Jn(c) : window, g = m.nodeName && m.nodeName.toLowerCase(), g === "select" || g === "input" && m.type === "file") var S = id;
        else if (gu(m)) if (oa) S = cd;
        else {
          S = sd;
          var _ = ud;
        }
        else (g = m.nodeName) && g.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (S = ad);
        if (S && (S = S(e, c))) {
          la(h, S, t, p);
          break e;
        }
        _ && _(e, m, c), e === "focusout" && (_ = m._wrapperState) && _.controlled && m.type === "number" && so(m, "number", m.value);
      }
      switch (_ = c ? Jn(c) : window, e) {
        case "focusin":
          (gu(_) || _.contentEditable === "true") && (Gn = _, So = c, Ft = null);
          break;
        case "focusout":
          Ft = So = Gn = null;
          break;
        case "mousedown":
          Eo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Eo = !1, xu(h, t, p);
          break;
        case "selectionchange":
          if (pd) break;
        case "keydown":
        case "keyup":
          xu(h, t, p);
      }
      var C;
      if (pi) e: {
        switch (e) {
          case "compositionstart":
            var N = "onCompositionStart";
            break e;
          case "compositionend":
            N = "onCompositionEnd";
            break e;
          case "compositionupdate":
            N = "onCompositionUpdate";
            break e;
        }
        N = void 0;
      }
      else Xn ? ta(e, t) && (N = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (N = "onCompositionStart");
      N && (na && t.locale !== "ko" && (Xn || N !== "onCompositionStart" ? N === "onCompositionEnd" && Xn && (C = ea()) : (un = p, ci = "value" in un ? un.value : un.textContent, Xn = !0)), _ = Yr(c, N), 0 < _.length && (N = new mu(N, e, null, t, p), h.push({ event: N, listeners: _ }), C ? N.data = C : (C = ra(t), C !== null && (N.data = C)))), (C = nd ? td(e, t) : rd(e, t)) && (c = Yr(c, "onBeforeInput"), 0 < c.length && (p = new mu("onBeforeInput", "beforeinput", null, t, p), h.push({ event: p, listeners: c }), p.data = C));
    }
    ha(h, n);
  });
}
function Zt(e, n, t) {
  return { instance: e, listener: n, currentTarget: t };
}
function Yr(e, n) {
  for (var t = n + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = Ht(e, t), o != null && r.unshift(Zt(e, o, l)), o = Ht(e, n), o != null && r.push(Zt(e, o, l))), e = e.return;
  }
  return r;
}
function Qn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Nu(e, n, t, r, l) {
  for (var o = n._reactName, i = []; t !== null && t !== r; ) {
    var u = t, s = u.alternate, c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && c !== null && (u = c, l ? (s = Ht(t, o), s != null && i.unshift(Zt(t, s, u))) : l || (s = Ht(t, o), s != null && i.push(Zt(t, s, u)))), t = t.return;
  }
  i.length !== 0 && e.push({ event: n, listeners: i });
}
var yd = /\r\n?/g, gd = /\u0000|\uFFFD/g;
function Pu(e) {
  return (typeof e == "string" ? e : "" + e).replace(yd, `
`).replace(gd, "");
}
function Sr(e, n, t) {
  if (n = Pu(n), Pu(e) !== n && t) throw Error(y(425));
}
function Xr() {
}
var xo = null, Co = null;
function _o(e, n) {
  return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
}
var No = typeof setTimeout == "function" ? setTimeout : void 0, wd = typeof clearTimeout == "function" ? clearTimeout : void 0, zu = typeof Promise == "function" ? Promise : void 0, kd = typeof queueMicrotask == "function" ? queueMicrotask : typeof zu < "u" ? function(e) {
  return zu.resolve(null).then(e).catch(Sd);
} : No;
function Sd(e) {
  setTimeout(function() {
    throw e;
  });
}
function Ql(e, n) {
  var t = n, r = 0;
  do {
    var l = t.nextSibling;
    if (e.removeChild(t), l && l.nodeType === 8) if (t = l.data, t === "/$") {
      if (r === 0) {
        e.removeChild(l), Kt(n);
        return;
      }
      r--;
    } else t !== "$" && t !== "$?" && t !== "$!" || r++;
    t = l;
  } while (t);
  Kt(n);
}
function pn(e) {
  for (; e != null; e = e.nextSibling) {
    var n = e.nodeType;
    if (n === 1 || n === 3) break;
    if (n === 8) {
      if (n = e.data, n === "$" || n === "$!" || n === "$?") break;
      if (n === "/$") return null;
    }
  }
  return e;
}
function Tu(e) {
  e = e.previousSibling;
  for (var n = 0; e; ) {
    if (e.nodeType === 8) {
      var t = e.data;
      if (t === "$" || t === "$!" || t === "$?") {
        if (n === 0) return e;
        n--;
      } else t === "/$" && n++;
    }
    e = e.previousSibling;
  }
  return null;
}
var wt = Math.random().toString(36).slice(2), Be = "__reactFiber$" + wt, Jt = "__reactProps$" + wt, Je = "__reactContainer$" + wt, Po = "__reactEvents$" + wt, Ed = "__reactListeners$" + wt, xd = "__reactHandles$" + wt;
function zn(e) {
  var n = e[Be];
  if (n) return n;
  for (var t = e.parentNode; t; ) {
    if (n = t[Je] || t[Be]) {
      if (t = n.alternate, n.child !== null || t !== null && t.child !== null) for (e = Tu(e); e !== null; ) {
        if (t = e[Be]) return t;
        e = Tu(e);
      }
      return n;
    }
    e = t, t = e.parentNode;
  }
  return null;
}
function ur(e) {
  return e = e[Be] || e[Je], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Jn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function hl(e) {
  return e[Jt] || null;
}
var zo = [], qn = -1;
function Sn(e) {
  return { current: e };
}
function U(e) {
  0 > qn || (e.current = zo[qn], zo[qn] = null, qn--);
}
function I(e, n) {
  qn++, zo[qn] = e.current, e.current = n;
}
var wn = {}, se = Sn(wn), ye = Sn(!1), Dn = wn;
function ft(e, n) {
  var t = e.type.contextTypes;
  if (!t) return wn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === n) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in t) l[o] = n[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function ge(e) {
  return e = e.childContextTypes, e != null;
}
function Gr() {
  U(ye), U(se);
}
function Ru(e, n, t) {
  if (se.current !== wn) throw Error(y(168));
  I(se, n), I(ye, t);
}
function ya(e, n, t) {
  var r = e.stateNode;
  if (n = n.childContextTypes, typeof r.getChildContext != "function") return t;
  r = r.getChildContext();
  for (var l in r) if (!(l in n)) throw Error(y(108, uf(e) || "Unknown", l));
  return K({}, t, r);
}
function Zr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || wn, Dn = se.current, I(se, e), I(ye, ye.current), !0;
}
function Lu(e, n, t) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  t ? (e = ya(e, n, Dn), r.__reactInternalMemoizedMergedChildContext = e, U(ye), U(se), I(se, e)) : U(ye), I(ye, t);
}
var Ke = null, vl = !1, Kl = !1;
function ga(e) {
  Ke === null ? Ke = [e] : Ke.push(e);
}
function Cd(e) {
  vl = !0, ga(e);
}
function En() {
  if (!Kl && Ke !== null) {
    Kl = !0;
    var e = 0, n = j;
    try {
      var t = Ke;
      for (j = 1; e < t.length; e++) {
        var r = t[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Ke = null, vl = !1;
    } catch (l) {
      throw Ke !== null && (Ke = Ke.slice(e + 1)), Hs(ii, En), l;
    } finally {
      j = n, Kl = !1;
    }
  }
  return null;
}
var bn = [], et = 0, Jr = null, qr = 0, Ne = [], Pe = 0, jn = null, Ye = 1, Xe = "";
function _n(e, n) {
  bn[et++] = qr, bn[et++] = Jr, Jr = e, qr = n;
}
function wa(e, n, t) {
  Ne[Pe++] = Ye, Ne[Pe++] = Xe, Ne[Pe++] = jn, jn = e;
  var r = Ye;
  e = Xe;
  var l = 32 - Fe(r) - 1;
  r &= ~(1 << l), t += 1;
  var o = 32 - Fe(n) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Ye = 1 << 32 - Fe(n) + l | t << l | r, Xe = o + e;
  } else Ye = 1 << o | t << l | r, Xe = e;
}
function hi(e) {
  e.return !== null && (_n(e, 1), wa(e, 1, 0));
}
function vi(e) {
  for (; e === Jr; ) Jr = bn[--et], bn[et] = null, qr = bn[--et], bn[et] = null;
  for (; e === jn; ) jn = Ne[--Pe], Ne[Pe] = null, Xe = Ne[--Pe], Ne[Pe] = null, Ye = Ne[--Pe], Ne[Pe] = null;
}
var Ee = null, Se = null, V = !1, je = null;
function ka(e, n) {
  var t = ze(5, null, null, 0);
  t.elementType = "DELETED", t.stateNode = n, t.return = e, n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t);
}
function Ou(e, n) {
  switch (e.tag) {
    case 5:
      var t = e.type;
      return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, Ee = e, Se = pn(n.firstChild), !0) : !1;
    case 6:
      return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, Ee = e, Se = null, !0) : !1;
    case 13:
      return n = n.nodeType !== 8 ? null : n, n !== null ? (t = jn !== null ? { id: Ye, overflow: Xe } : null, e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }, t = ze(18, null, null, 0), t.stateNode = n, t.return = e, e.child = t, Ee = e, Se = null, !0) : !1;
    default:
      return !1;
  }
}
function To(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ro(e) {
  if (V) {
    var n = Se;
    if (n) {
      var t = n;
      if (!Ou(e, n)) {
        if (To(e)) throw Error(y(418));
        n = pn(t.nextSibling);
        var r = Ee;
        n && Ou(e, n) ? ka(r, t) : (e.flags = e.flags & -4097 | 2, V = !1, Ee = e);
      }
    } else {
      if (To(e)) throw Error(y(418));
      e.flags = e.flags & -4097 | 2, V = !1, Ee = e;
    }
  }
}
function Mu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ee = e;
}
function Er(e) {
  if (e !== Ee) return !1;
  if (!V) return Mu(e), V = !0, !1;
  var n;
  if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !_o(e.type, e.memoizedProps)), n && (n = Se)) {
    if (To(e)) throw Sa(), Error(y(418));
    for (; n; ) ka(e, n), n = pn(n.nextSibling);
  }
  if (Mu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(y(317));
    e: {
      for (e = e.nextSibling, n = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === "/$") {
            if (n === 0) {
              Se = pn(e.nextSibling);
              break e;
            }
            n--;
          } else t !== "$" && t !== "$!" && t !== "$?" || n++;
        }
        e = e.nextSibling;
      }
      Se = null;
    }
  } else Se = Ee ? pn(e.stateNode.nextSibling) : null;
  return !0;
}
function Sa() {
  for (var e = Se; e; ) e = pn(e.nextSibling);
}
function dt() {
  Se = Ee = null, V = !1;
}
function yi(e) {
  je === null ? je = [e] : je.push(e);
}
var _d = en.ReactCurrentBatchConfig;
function _t(e, n, t) {
  if (e = t.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (t._owner) {
      if (t = t._owner, t) {
        if (t.tag !== 1) throw Error(y(309));
        var r = t.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r, o = "" + e;
      return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === o ? n.ref : (n = function(i) {
        var u = l.refs;
        i === null ? delete u[o] : u[o] = i;
      }, n._stringRef = o, n);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!t._owner) throw Error(y(290, e));
  }
  return e;
}
function xr(e, n) {
  throw e = Object.prototype.toString.call(n), Error(y(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
}
function Du(e) {
  var n = e._init;
  return n(e._payload);
}
function Ea(e) {
  function n(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? (f.deletions = [a], f.flags |= 16) : d.push(a);
    }
  }
  function t(f, a) {
    if (!e) return null;
    for (; a !== null; ) n(f, a), a = a.sibling;
    return null;
  }
  function r(f, a) {
    for (f = /* @__PURE__ */ new Map(); a !== null; ) a.key !== null ? f.set(a.key, a) : f.set(a.index, a), a = a.sibling;
    return f;
  }
  function l(f, a) {
    return f = yn(f, a), f.index = 0, f.sibling = null, f;
  }
  function o(f, a, d) {
    return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a);
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, v) {
    return a === null || a.tag !== 6 ? (a = bl(d, f.mode, v), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function s(f, a, d, v) {
    var S = d.type;
    return S === Yn ? p(f, a, d.props.children, v, d.key) : a !== null && (a.elementType === S || typeof S == "object" && S !== null && S.$$typeof === tn && Du(S) === a.type) ? (v = l(a, d.props), v.ref = _t(f, a, d), v.return = f, v) : (v = Ar(d.type, d.key, d.props, null, f.mode, v), v.ref = _t(f, a, d), v.return = f, v);
  }
  function c(f, a, d, v) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = eo(d, f.mode, v), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
  }
  function p(f, a, d, v, S) {
    return a === null || a.tag !== 7 ? (a = Mn(d, f.mode, v, S), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function h(f, a, d) {
    if (typeof a == "string" && a !== "" || typeof a == "number") return a = bl("" + a, f.mode, d), a.return = f, a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case dr:
          return d = Ar(a.type, a.key, a.props, null, f.mode, d), d.ref = _t(f, null, a), d.return = f, d;
        case Kn:
          return a = eo(a, f.mode, d), a.return = f, a;
        case tn:
          var v = a._init;
          return h(f, v(a._payload), d);
      }
      if (Tt(a) || kt(a)) return a = Mn(a, f.mode, d, null), a.return = f, a;
      xr(f, a);
    }
    return null;
  }
  function m(f, a, d, v) {
    var S = a !== null ? a.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number") return S !== null ? null : u(f, a, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case dr:
          return d.key === S ? s(f, a, d, v) : null;
        case Kn:
          return d.key === S ? c(f, a, d, v) : null;
        case tn:
          return S = d._init, m(
            f,
            a,
            S(d._payload),
            v
          );
      }
      if (Tt(d) || kt(d)) return S !== null ? null : p(f, a, d, v, null);
      xr(f, d);
    }
    return null;
  }
  function g(f, a, d, v, S) {
    if (typeof v == "string" && v !== "" || typeof v == "number") return f = f.get(d) || null, u(a, f, "" + v, S);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case dr:
          return f = f.get(v.key === null ? d : v.key) || null, s(a, f, v, S);
        case Kn:
          return f = f.get(v.key === null ? d : v.key) || null, c(a, f, v, S);
        case tn:
          var _ = v._init;
          return g(f, a, d, _(v._payload), S);
      }
      if (Tt(v) || kt(v)) return f = f.get(d) || null, p(a, f, v, S, null);
      xr(a, v);
    }
    return null;
  }
  function w(f, a, d, v) {
    for (var S = null, _ = null, C = a, N = a = 0, B = null; C !== null && N < d.length; N++) {
      C.index > N ? (B = C, C = null) : B = C.sibling;
      var T = m(f, C, d[N], v);
      if (T === null) {
        C === null && (C = B);
        break;
      }
      e && C && T.alternate === null && n(f, C), a = o(T, a, N), _ === null ? S = T : _.sibling = T, _ = T, C = B;
    }
    if (N === d.length) return t(f, C), V && _n(f, N), S;
    if (C === null) {
      for (; N < d.length; N++) C = h(f, d[N], v), C !== null && (a = o(C, a, N), _ === null ? S = C : _.sibling = C, _ = C);
      return V && _n(f, N), S;
    }
    for (C = r(f, C); N < d.length; N++) B = g(C, f, N, d[N], v), B !== null && (e && B.alternate !== null && C.delete(B.key === null ? N : B.key), a = o(B, a, N), _ === null ? S = B : _.sibling = B, _ = B);
    return e && C.forEach(function(me) {
      return n(f, me);
    }), V && _n(f, N), S;
  }
  function k(f, a, d, v) {
    var S = kt(d);
    if (typeof S != "function") throw Error(y(150));
    if (d = S.call(d), d == null) throw Error(y(151));
    for (var _ = S = null, C = a, N = a = 0, B = null, T = d.next(); C !== null && !T.done; N++, T = d.next()) {
      C.index > N ? (B = C, C = null) : B = C.sibling;
      var me = m(f, C, T.value, v);
      if (me === null) {
        C === null && (C = B);
        break;
      }
      e && C && me.alternate === null && n(f, C), a = o(me, a, N), _ === null ? S = me : _.sibling = me, _ = me, C = B;
    }
    if (T.done) return t(
      f,
      C
    ), V && _n(f, N), S;
    if (C === null) {
      for (; !T.done; N++, T = d.next()) T = h(f, T.value, v), T !== null && (a = o(T, a, N), _ === null ? S = T : _.sibling = T, _ = T);
      return V && _n(f, N), S;
    }
    for (C = r(f, C); !T.done; N++, T = d.next()) T = g(C, f, N, T.value, v), T !== null && (e && T.alternate !== null && C.delete(T.key === null ? N : T.key), a = o(T, a, N), _ === null ? S = T : _.sibling = T, _ = T);
    return e && C.forEach(function(H) {
      return n(f, H);
    }), V && _n(f, N), S;
  }
  function F(f, a, d, v) {
    if (typeof d == "object" && d !== null && d.type === Yn && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case dr:
          e: {
            for (var S = d.key, _ = a; _ !== null; ) {
              if (_.key === S) {
                if (S = d.type, S === Yn) {
                  if (_.tag === 7) {
                    t(f, _.sibling), a = l(_, d.props.children), a.return = f, f = a;
                    break e;
                  }
                } else if (_.elementType === S || typeof S == "object" && S !== null && S.$$typeof === tn && Du(S) === _.type) {
                  t(f, _.sibling), a = l(_, d.props), a.ref = _t(f, _, d), a.return = f, f = a;
                  break e;
                }
                t(f, _);
                break;
              } else n(f, _);
              _ = _.sibling;
            }
            d.type === Yn ? (a = Mn(d.props.children, f.mode, v, d.key), a.return = f, f = a) : (v = Ar(d.type, d.key, d.props, null, f.mode, v), v.ref = _t(f, a, d), v.return = f, f = v);
          }
          return i(f);
        case Kn:
          e: {
            for (_ = d.key; a !== null; ) {
              if (a.key === _) if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                t(f, a.sibling), a = l(a, d.children || []), a.return = f, f = a;
                break e;
              } else {
                t(f, a);
                break;
              }
              else n(f, a);
              a = a.sibling;
            }
            a = eo(d, f.mode, v), a.return = f, f = a;
          }
          return i(f);
        case tn:
          return _ = d._init, F(f, a, _(d._payload), v);
      }
      if (Tt(d)) return w(f, a, d, v);
      if (kt(d)) return k(f, a, d, v);
      xr(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (t(f, a.sibling), a = l(a, d), a.return = f, f = a) : (t(f, a), a = bl(d, f.mode, v), a.return = f, f = a), i(f)) : t(f, a);
  }
  return F;
}
var pt = Ea(!0), xa = Ea(!1), br = Sn(null), el = null, nt = null, gi = null;
function wi() {
  gi = nt = el = null;
}
function ki(e) {
  var n = br.current;
  U(br), e._currentValue = n;
}
function Lo(e, n, t) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & n) !== n ? (e.childLanes |= n, r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n), e === t) break;
    e = e.return;
  }
}
function st(e, n) {
  el = e, gi = nt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & n && (ve = !0), e.firstContext = null);
}
function Re(e) {
  var n = e._currentValue;
  if (gi !== e) if (e = { context: e, memoizedValue: n, next: null }, nt === null) {
    if (el === null) throw Error(y(308));
    nt = e, el.dependencies = { lanes: 0, firstContext: e };
  } else nt = nt.next = e;
  return n;
}
var Tn = null;
function Si(e) {
  Tn === null ? Tn = [e] : Tn.push(e);
}
function Ca(e, n, t, r) {
  var l = n.interleaved;
  return l === null ? (t.next = t, Si(n)) : (t.next = l.next, l.next = t), n.interleaved = t, qe(e, r);
}
function qe(e, n) {
  e.lanes |= n;
  var t = e.alternate;
  for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; ) e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
  return t.tag === 3 ? t.stateNode : null;
}
var rn = !1;
function Ei(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function _a(e, n) {
  e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Ge(e, n) {
  return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
}
function mn(e, n, t) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, M & 2) {
    var l = r.pending;
    return l === null ? n.next = n : (n.next = l.next, l.next = n), r.pending = n, qe(e, t);
  }
  return l = r.interleaved, l === null ? (n.next = n, Si(r)) : (n.next = l.next, l.next = n), r.interleaved = n, qe(e, t);
}
function Mr(e, n, t) {
  if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194240) !== 0)) {
    var r = n.lanes;
    r &= e.pendingLanes, t |= r, n.lanes = t, ui(e, t);
  }
}
function ju(e, n) {
  var t = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, t === r)) {
    var l = null, o = null;
    if (t = t.firstBaseUpdate, t !== null) {
      do {
        var i = { eventTime: t.eventTime, lane: t.lane, tag: t.tag, payload: t.payload, callback: t.callback, next: null };
        o === null ? l = o = i : o = o.next = i, t = t.next;
      } while (t !== null);
      o === null ? l = o = n : o = o.next = n;
    } else l = o = n;
    t = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = t;
    return;
  }
  e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = n : e.next = n, t.lastBaseUpdate = n;
}
function nl(e, n, t, r) {
  var l = e.updateQueue;
  rn = !1;
  var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u, c = s.next;
    s.next = null, i === null ? o = c : i.next = c, i = s;
    var p = e.alternate;
    p !== null && (p = p.updateQueue, u = p.lastBaseUpdate, u !== i && (u === null ? p.firstBaseUpdate = c : u.next = c, p.lastBaseUpdate = s));
  }
  if (o !== null) {
    var h = l.baseState;
    i = 0, p = c = s = null, u = o;
    do {
      var m = u.lane, g = u.eventTime;
      if ((r & m) === m) {
        p !== null && (p = p.next = {
          eventTime: g,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var w = e, k = u;
          switch (m = n, g = t, k.tag) {
            case 1:
              if (w = k.payload, typeof w == "function") {
                h = w.call(g, h, m);
                break e;
              }
              h = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = k.payload, m = typeof w == "function" ? w.call(g, h, m) : w, m == null) break e;
              h = K({}, h, m);
              break e;
            case 2:
              rn = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [u] : m.push(u));
      } else g = { eventTime: g, lane: m, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, p === null ? (c = p = g, s = h) : p = p.next = g, i |= m;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null) break;
        m = u, u = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null;
      }
    } while (!0);
    if (p === null && (s = h), l.baseState = s, l.firstBaseUpdate = c, l.lastBaseUpdate = p, n = l.shared.interleaved, n !== null) {
      l = n;
      do
        i |= l.lane, l = l.next;
      while (l !== n);
    } else o === null && (l.shared.lanes = 0);
    In |= i, e.lanes = i, e.memoizedState = h;
  }
}
function Fu(e, n, t) {
  if (e = n.effects, n.effects = null, e !== null) for (n = 0; n < e.length; n++) {
    var r = e[n], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = t, typeof l != "function") throw Error(y(191, l));
      l.call(r);
    }
  }
}
var sr = {}, We = Sn(sr), qt = Sn(sr), bt = Sn(sr);
function Rn(e) {
  if (e === sr) throw Error(y(174));
  return e;
}
function xi(e, n) {
  switch (I(bt, n), I(qt, e), I(We, sr), e = n.nodeType, e) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : co(null, "");
      break;
    default:
      e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = co(n, e);
  }
  U(We), I(We, n);
}
function mt() {
  U(We), U(qt), U(bt);
}
function Na(e) {
  Rn(bt.current);
  var n = Rn(We.current), t = co(n, e.type);
  n !== t && (I(qt, e), I(We, t));
}
function Ci(e) {
  qt.current === e && (U(We), U(qt));
}
var W = Sn(0);
function tl(e) {
  for (var n = e; n !== null; ) {
    if (n.tag === 13) {
      var t = n.memoizedState;
      if (t !== null && (t = t.dehydrated, t === null || t.data === "$?" || t.data === "$!")) return n;
    } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
      if (n.flags & 128) return n;
    } else if (n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return null;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
  return null;
}
var Yl = [];
function _i() {
  for (var e = 0; e < Yl.length; e++) Yl[e]._workInProgressVersionPrimary = null;
  Yl.length = 0;
}
var Dr = en.ReactCurrentDispatcher, Xl = en.ReactCurrentBatchConfig, Fn = 0, Q = null, J = null, ee = null, rl = !1, It = !1, er = 0, Nd = 0;
function oe() {
  throw Error(y(321));
}
function Ni(e, n) {
  if (n === null) return !1;
  for (var t = 0; t < n.length && t < e.length; t++) if (!$e(e[t], n[t])) return !1;
  return !0;
}
function Pi(e, n, t, r, l, o) {
  if (Fn = o, Q = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, Dr.current = e === null || e.memoizedState === null ? Rd : Ld, e = t(r, l), It) {
    o = 0;
    do {
      if (It = !1, er = 0, 25 <= o) throw Error(y(301));
      o += 1, ee = J = null, n.updateQueue = null, Dr.current = Od, e = t(r, l);
    } while (It);
  }
  if (Dr.current = ll, n = J !== null && J.next !== null, Fn = 0, ee = J = Q = null, rl = !1, n) throw Error(y(300));
  return e;
}
function zi() {
  var e = er !== 0;
  return er = 0, e;
}
function Ve() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ee === null ? Q.memoizedState = ee = e : ee = ee.next = e, ee;
}
function Le() {
  if (J === null) {
    var e = Q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = J.next;
  var n = ee === null ? Q.memoizedState : ee.next;
  if (n !== null) ee = n, J = e;
  else {
    if (e === null) throw Error(y(310));
    J = e, e = { memoizedState: J.memoizedState, baseState: J.baseState, baseQueue: J.baseQueue, queue: J.queue, next: null }, ee === null ? Q.memoizedState = ee = e : ee = ee.next = e;
  }
  return ee;
}
function nr(e, n) {
  return typeof n == "function" ? n(e) : n;
}
function Gl(e) {
  var n = Le(), t = n.queue;
  if (t === null) throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = J, l = r.baseQueue, o = t.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      l.next = o.next, o.next = i;
    }
    r.baseQueue = l = o, t.pending = null;
  }
  if (l !== null) {
    o = l.next, r = r.baseState;
    var u = i = null, s = null, c = o;
    do {
      var p = c.lane;
      if ((Fn & p) === p) s !== null && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var h = {
          lane: p,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        s === null ? (u = s = h, i = r) : s = s.next = h, Q.lanes |= p, In |= p;
      }
      c = c.next;
    } while (c !== null && c !== o);
    s === null ? i = r : s.next = u, $e(r, n.memoizedState) || (ve = !0), n.memoizedState = r, n.baseState = i, n.baseQueue = s, t.lastRenderedState = r;
  }
  if (e = t.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, Q.lanes |= o, In |= o, l = l.next;
    while (l !== e);
  } else l === null && (t.lanes = 0);
  return [n.memoizedState, t.dispatch];
}
function Zl(e) {
  var n = Le(), t = n.queue;
  if (t === null) throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = t.dispatch, l = t.pending, o = n.memoizedState;
  if (l !== null) {
    t.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    $e(o, n.memoizedState) || (ve = !0), n.memoizedState = o, n.baseQueue === null && (n.baseState = o), t.lastRenderedState = o;
  }
  return [o, r];
}
function Pa() {
}
function za(e, n) {
  var t = Q, r = Le(), l = n(), o = !$e(r.memoizedState, l);
  if (o && (r.memoizedState = l, ve = !0), r = r.queue, Ti(La.bind(null, t, r, e), [e]), r.getSnapshot !== n || o || ee !== null && ee.memoizedState.tag & 1) {
    if (t.flags |= 2048, tr(9, Ra.bind(null, t, r, l, n), void 0, null), ne === null) throw Error(y(349));
    Fn & 30 || Ta(t, n, l);
  }
  return l;
}
function Ta(e, n, t) {
  e.flags |= 16384, e = { getSnapshot: n, value: t }, n = Q.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, Q.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e));
}
function Ra(e, n, t, r) {
  n.value = t, n.getSnapshot = r, Oa(n) && Ma(e);
}
function La(e, n, t) {
  return t(function() {
    Oa(n) && Ma(e);
  });
}
function Oa(e) {
  var n = e.getSnapshot;
  e = e.value;
  try {
    var t = n();
    return !$e(e, t);
  } catch {
    return !0;
  }
}
function Ma(e) {
  var n = qe(e, 1);
  n !== null && Ie(n, e, 1, -1);
}
function Iu(e) {
  var n = Ve();
  return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: nr, lastRenderedState: e }, n.queue = e, e = e.dispatch = Td.bind(null, Q, e), [n.memoizedState, e];
}
function tr(e, n, t, r) {
  return e = { tag: e, create: n, destroy: t, deps: r, next: null }, n = Q.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, Q.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e;
}
function Da() {
  return Le().memoizedState;
}
function jr(e, n, t, r) {
  var l = Ve();
  Q.flags |= e, l.memoizedState = tr(1 | n, t, void 0, r === void 0 ? null : r);
}
function yl(e, n, t, r) {
  var l = Le();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (J !== null) {
    var i = J.memoizedState;
    if (o = i.destroy, r !== null && Ni(r, i.deps)) {
      l.memoizedState = tr(n, t, o, r);
      return;
    }
  }
  Q.flags |= e, l.memoizedState = tr(1 | n, t, o, r);
}
function $u(e, n) {
  return jr(8390656, 8, e, n);
}
function Ti(e, n) {
  return yl(2048, 8, e, n);
}
function ja(e, n) {
  return yl(4, 2, e, n);
}
function Fa(e, n) {
  return yl(4, 4, e, n);
}
function Ia(e, n) {
  if (typeof n == "function") return e = e(), n(e), function() {
    n(null);
  };
  if (n != null) return e = e(), n.current = e, function() {
    n.current = null;
  };
}
function $a(e, n, t) {
  return t = t != null ? t.concat([e]) : null, yl(4, 4, Ia.bind(null, n, e), t);
}
function Ri() {
}
function Aa(e, n) {
  var t = Le();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && Ni(n, r[1]) ? r[0] : (t.memoizedState = [e, n], e);
}
function Ua(e, n) {
  var t = Le();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && Ni(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [e, n], e);
}
function Va(e, n, t) {
  return Fn & 21 ? ($e(t, n) || (t = Ks(), Q.lanes |= t, In |= t, e.baseState = !0), n) : (e.baseState && (e.baseState = !1, ve = !0), e.memoizedState = t);
}
function Pd(e, n) {
  var t = j;
  j = t !== 0 && 4 > t ? t : 4, e(!0);
  var r = Xl.transition;
  Xl.transition = {};
  try {
    e(!1), n();
  } finally {
    j = t, Xl.transition = r;
  }
}
function Ba() {
  return Le().memoizedState;
}
function zd(e, n, t) {
  var r = vn(e);
  if (t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }, Ha(e)) Wa(n, t);
  else if (t = Ca(e, n, t, r), t !== null) {
    var l = fe();
    Ie(t, e, r, l), Qa(t, n, r);
  }
}
function Td(e, n, t) {
  var r = vn(e), l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (Ha(e)) Wa(n, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = n.lastRenderedReducer, o !== null)) try {
      var i = n.lastRenderedState, u = o(i, t);
      if (l.hasEagerState = !0, l.eagerState = u, $e(u, i)) {
        var s = n.interleaved;
        s === null ? (l.next = l, Si(n)) : (l.next = s.next, s.next = l), n.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    t = Ca(e, n, l, r), t !== null && (l = fe(), Ie(t, e, r, l), Qa(t, n, r));
  }
}
function Ha(e) {
  var n = e.alternate;
  return e === Q || n !== null && n === Q;
}
function Wa(e, n) {
  It = rl = !0;
  var t = e.pending;
  t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
}
function Qa(e, n, t) {
  if (t & 4194240) {
    var r = n.lanes;
    r &= e.pendingLanes, t |= r, n.lanes = t, ui(e, t);
  }
}
var ll = { readContext: Re, useCallback: oe, useContext: oe, useEffect: oe, useImperativeHandle: oe, useInsertionEffect: oe, useLayoutEffect: oe, useMemo: oe, useReducer: oe, useRef: oe, useState: oe, useDebugValue: oe, useDeferredValue: oe, useTransition: oe, useMutableSource: oe, useSyncExternalStore: oe, useId: oe, unstable_isNewReconciler: !1 }, Rd = { readContext: Re, useCallback: function(e, n) {
  return Ve().memoizedState = [e, n === void 0 ? null : n], e;
}, useContext: Re, useEffect: $u, useImperativeHandle: function(e, n, t) {
  return t = t != null ? t.concat([e]) : null, jr(
    4194308,
    4,
    Ia.bind(null, n, e),
    t
  );
}, useLayoutEffect: function(e, n) {
  return jr(4194308, 4, e, n);
}, useInsertionEffect: function(e, n) {
  return jr(4, 2, e, n);
}, useMemo: function(e, n) {
  var t = Ve();
  return n = n === void 0 ? null : n, e = e(), t.memoizedState = [e, n], e;
}, useReducer: function(e, n, t) {
  var r = Ve();
  return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, r.queue = e, e = e.dispatch = zd.bind(null, Q, e), [r.memoizedState, e];
}, useRef: function(e) {
  var n = Ve();
  return e = { current: e }, n.memoizedState = e;
}, useState: Iu, useDebugValue: Ri, useDeferredValue: function(e) {
  return Ve().memoizedState = e;
}, useTransition: function() {
  var e = Iu(!1), n = e[0];
  return e = Pd.bind(null, e[1]), Ve().memoizedState = e, [n, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, n, t) {
  var r = Q, l = Ve();
  if (V) {
    if (t === void 0) throw Error(y(407));
    t = t();
  } else {
    if (t = n(), ne === null) throw Error(y(349));
    Fn & 30 || Ta(r, n, t);
  }
  l.memoizedState = t;
  var o = { value: t, getSnapshot: n };
  return l.queue = o, $u(La.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, tr(9, Ra.bind(null, r, o, t, n), void 0, null), t;
}, useId: function() {
  var e = Ve(), n = ne.identifierPrefix;
  if (V) {
    var t = Xe, r = Ye;
    t = (r & ~(1 << 32 - Fe(r) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = er++, 0 < t && (n += "H" + t.toString(32)), n += ":";
  } else t = Nd++, n = ":" + n + "r" + t.toString(32) + ":";
  return e.memoizedState = n;
}, unstable_isNewReconciler: !1 }, Ld = {
  readContext: Re,
  useCallback: Aa,
  useContext: Re,
  useEffect: Ti,
  useImperativeHandle: $a,
  useInsertionEffect: ja,
  useLayoutEffect: Fa,
  useMemo: Ua,
  useReducer: Gl,
  useRef: Da,
  useState: function() {
    return Gl(nr);
  },
  useDebugValue: Ri,
  useDeferredValue: function(e) {
    var n = Le();
    return Va(n, J.memoizedState, e);
  },
  useTransition: function() {
    var e = Gl(nr)[0], n = Le().memoizedState;
    return [e, n];
  },
  useMutableSource: Pa,
  useSyncExternalStore: za,
  useId: Ba,
  unstable_isNewReconciler: !1
}, Od = { readContext: Re, useCallback: Aa, useContext: Re, useEffect: Ti, useImperativeHandle: $a, useInsertionEffect: ja, useLayoutEffect: Fa, useMemo: Ua, useReducer: Zl, useRef: Da, useState: function() {
  return Zl(nr);
}, useDebugValue: Ri, useDeferredValue: function(e) {
  var n = Le();
  return J === null ? n.memoizedState = e : Va(n, J.memoizedState, e);
}, useTransition: function() {
  var e = Zl(nr)[0], n = Le().memoizedState;
  return [e, n];
}, useMutableSource: Pa, useSyncExternalStore: za, useId: Ba, unstable_isNewReconciler: !1 };
function Me(e, n) {
  if (e && e.defaultProps) {
    n = K({}, n), e = e.defaultProps;
    for (var t in e) n[t] === void 0 && (n[t] = e[t]);
    return n;
  }
  return n;
}
function Oo(e, n, t, r) {
  n = e.memoizedState, t = t(r, n), t = t == null ? n : K({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
}
var gl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Bn(e) === e : !1;
}, enqueueSetState: function(e, n, t) {
  e = e._reactInternals;
  var r = fe(), l = vn(e), o = Ge(r, l);
  o.payload = n, t != null && (o.callback = t), n = mn(e, o, l), n !== null && (Ie(n, e, l, r), Mr(n, e, l));
}, enqueueReplaceState: function(e, n, t) {
  e = e._reactInternals;
  var r = fe(), l = vn(e), o = Ge(r, l);
  o.tag = 1, o.payload = n, t != null && (o.callback = t), n = mn(e, o, l), n !== null && (Ie(n, e, l, r), Mr(n, e, l));
}, enqueueForceUpdate: function(e, n) {
  e = e._reactInternals;
  var t = fe(), r = vn(e), l = Ge(t, r);
  l.tag = 2, n != null && (l.callback = n), n = mn(e, l, r), n !== null && (Ie(n, e, r, t), Mr(n, e, r));
} };
function Au(e, n, t, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : n.prototype && n.prototype.isPureReactComponent ? !Xt(t, r) || !Xt(l, o) : !0;
}
function Ka(e, n, t) {
  var r = !1, l = wn, o = n.contextType;
  return typeof o == "object" && o !== null ? o = Re(o) : (l = ge(n) ? Dn : se.current, r = n.contextTypes, o = (r = r != null) ? ft(e, l) : wn), n = new n(t, o), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = gl, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), n;
}
function Uu(e, n, t, r) {
  e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && gl.enqueueReplaceState(n, n.state, null);
}
function Mo(e, n, t, r) {
  var l = e.stateNode;
  l.props = t, l.state = e.memoizedState, l.refs = {}, Ei(e);
  var o = n.contextType;
  typeof o == "object" && o !== null ? l.context = Re(o) : (o = ge(n) ? Dn : se.current, l.context = ft(e, o)), l.state = e.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (Oo(e, n, o, t), l.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (n = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), n !== l.state && gl.enqueueReplaceState(l, l.state, null), nl(e, t, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function ht(e, n) {
  try {
    var t = "", r = n;
    do
      t += of(r), r = r.return;
    while (r);
    var l = t;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: n, stack: l, digest: null };
}
function Jl(e, n, t) {
  return { value: e, source: null, stack: t ?? null, digest: n ?? null };
}
function Do(e, n) {
  try {
    console.error(n.value);
  } catch (t) {
    setTimeout(function() {
      throw t;
    });
  }
}
var Md = typeof WeakMap == "function" ? WeakMap : Map;
function Ya(e, n, t) {
  t = Ge(-1, t), t.tag = 3, t.payload = { element: null };
  var r = n.value;
  return t.callback = function() {
    il || (il = !0, Wo = r), Do(e, n);
  }, t;
}
function Xa(e, n, t) {
  t = Ge(-1, t), t.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = n.value;
    t.payload = function() {
      return r(l);
    }, t.callback = function() {
      Do(e, n);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (t.callback = function() {
    Do(e, n), typeof r != "function" && (hn === null ? hn = /* @__PURE__ */ new Set([this]) : hn.add(this));
    var i = n.stack;
    this.componentDidCatch(n.value, { componentStack: i !== null ? i : "" });
  }), t;
}
function Vu(e, n, t) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Md();
    var l = /* @__PURE__ */ new Set();
    r.set(n, l);
  } else l = r.get(n), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(n, l));
  l.has(t) || (l.add(t), e = Yd.bind(null, e, n, t), n.then(e, e));
}
function Bu(e) {
  do {
    var n;
    if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Hu(e, n, t, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = Ge(-1, 1), n.tag = 2, mn(t, n, 1))), t.lanes |= 1), e);
}
var Dd = en.ReactCurrentOwner, ve = !1;
function ce(e, n, t, r) {
  n.child = e === null ? xa(n, null, t, r) : pt(n, e.child, t, r);
}
function Wu(e, n, t, r, l) {
  t = t.render;
  var o = n.ref;
  return st(n, l), r = Pi(e, n, t, r, o, l), t = zi(), e !== null && !ve ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, be(e, n, l)) : (V && t && hi(n), n.flags |= 1, ce(e, n, r, l), n.child);
}
function Qu(e, n, t, r, l) {
  if (e === null) {
    var o = t.type;
    return typeof o == "function" && !$i(o) && o.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = o, Ga(e, n, o, r, l)) : (e = Ar(t.type, null, r, n, n.mode, l), e.ref = n.ref, e.return = n, n.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (t = t.compare, t = t !== null ? t : Xt, t(i, r) && e.ref === n.ref) return be(e, n, l);
  }
  return n.flags |= 1, e = yn(o, r), e.ref = n.ref, e.return = n, n.child = e;
}
function Ga(e, n, t, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Xt(o, r) && e.ref === n.ref) if (ve = !1, n.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (ve = !0);
    else return n.lanes = e.lanes, be(e, n, l);
  }
  return jo(e, n, t, r, l);
}
function Za(e, n, t) {
  var r = n.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(n.mode & 1)) n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, I(rt, ke), ke |= t;
  else {
    if (!(t & 1073741824)) return e = o !== null ? o.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, I(rt, ke), ke |= e, null;
    n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : t, I(rt, ke), ke |= r;
  }
  else o !== null ? (r = o.baseLanes | t, n.memoizedState = null) : r = t, I(rt, ke), ke |= r;
  return ce(e, n, l, t), n.child;
}
function Ja(e, n) {
  var t = n.ref;
  (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152);
}
function jo(e, n, t, r, l) {
  var o = ge(t) ? Dn : se.current;
  return o = ft(n, o), st(n, l), t = Pi(e, n, t, r, o, l), r = zi(), e !== null && !ve ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, be(e, n, l)) : (V && r && hi(n), n.flags |= 1, ce(e, n, t, l), n.child);
}
function Ku(e, n, t, r, l) {
  if (ge(t)) {
    var o = !0;
    Zr(n);
  } else o = !1;
  if (st(n, l), n.stateNode === null) Fr(e, n), Ka(n, t, r), Mo(n, t, r, l), r = !0;
  else if (e === null) {
    var i = n.stateNode, u = n.memoizedProps;
    i.props = u;
    var s = i.context, c = t.contextType;
    typeof c == "object" && c !== null ? c = Re(c) : (c = ge(t) ? Dn : se.current, c = ft(n, c));
    var p = t.getDerivedStateFromProps, h = typeof p == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    h || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== c) && Uu(n, i, r, c), rn = !1;
    var m = n.memoizedState;
    i.state = m, nl(n, r, i, l), s = n.memoizedState, u !== r || m !== s || ye.current || rn ? (typeof p == "function" && (Oo(n, t, p, r), s = n.memoizedState), (u = rn || Au(n, t, u, r, m, s, c)) ? (h || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = s), i.props = r, i.state = s, i.context = c, r = u) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), r = !1);
  } else {
    i = n.stateNode, _a(e, n), u = n.memoizedProps, c = n.type === n.elementType ? u : Me(n.type, u), i.props = c, h = n.pendingProps, m = i.context, s = t.contextType, typeof s == "object" && s !== null ? s = Re(s) : (s = ge(t) ? Dn : se.current, s = ft(n, s));
    var g = t.getDerivedStateFromProps;
    (p = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== h || m !== s) && Uu(n, i, r, s), rn = !1, m = n.memoizedState, i.state = m, nl(n, r, i, l);
    var w = n.memoizedState;
    u !== h || m !== w || ye.current || rn ? (typeof g == "function" && (Oo(n, t, g, r), w = n.memoizedState), (c = rn || Au(n, t, c, r, m, w, s) || !1) ? (p || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, s)), typeof i.componentDidUpdate == "function" && (n.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = w), i.props = r, i.state = w, i.context = s, r = c) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (n.flags |= 1024), r = !1);
  }
  return Fo(e, n, t, r, o, l);
}
function Fo(e, n, t, r, l, o) {
  Ja(e, n);
  var i = (n.flags & 128) !== 0;
  if (!r && !i) return l && Lu(n, t, !1), be(e, n, o);
  r = n.stateNode, Dd.current = n;
  var u = i && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return n.flags |= 1, e !== null && i ? (n.child = pt(n, e.child, null, o), n.child = pt(n, null, u, o)) : ce(e, n, u, o), n.memoizedState = r.state, l && Lu(n, t, !0), n.child;
}
function qa(e) {
  var n = e.stateNode;
  n.pendingContext ? Ru(e, n.pendingContext, n.pendingContext !== n.context) : n.context && Ru(e, n.context, !1), xi(e, n.containerInfo);
}
function Yu(e, n, t, r, l) {
  return dt(), yi(l), n.flags |= 256, ce(e, n, t, r), n.child;
}
var Io = { dehydrated: null, treeContext: null, retryLane: 0 };
function $o(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ba(e, n, t) {
  var r = n.pendingProps, l = W.current, o = !1, i = (n.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), I(W, l & 1), e === null)
    return Ro(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (n.mode & 1 ? e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = n.mode, o = n.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = Sl(i, r, 0, null), e = Mn(e, r, t, null), o.return = n, e.return = n, o.sibling = e, n.child = o, n.child.memoizedState = $o(t), n.memoizedState = Io, e) : Li(n, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return jd(e, n, i, r, u, l, t);
  if (o) {
    o = r.fallback, i = n.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(i & 1) && n.child !== l ? (r = n.child, r.childLanes = 0, r.pendingProps = s, n.deletions = null) : (r = yn(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = yn(u, o) : (o = Mn(o, i, t, null), o.flags |= 2), o.return = n, r.return = n, r.sibling = o, n.child = r, r = o, o = n.child, i = e.child.memoizedState, i = i === null ? $o(t) : { baseLanes: i.baseLanes | t, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~t, n.memoizedState = Io, r;
  }
  return o = e.child, e = o.sibling, r = yn(o, { mode: "visible", children: r.children }), !(n.mode & 1) && (r.lanes = t), r.return = n, r.sibling = null, e !== null && (t = n.deletions, t === null ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = r, n.memoizedState = null, r;
}
function Li(e, n) {
  return n = Sl({ mode: "visible", children: n }, e.mode, 0, null), n.return = e, e.child = n;
}
function Cr(e, n, t, r) {
  return r !== null && yi(r), pt(n, e.child, null, t), e = Li(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
}
function jd(e, n, t, r, l, o, i) {
  if (t)
    return n.flags & 256 ? (n.flags &= -257, r = Jl(Error(y(422))), Cr(e, n, i, r)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (o = r.fallback, l = n.mode, r = Sl({ mode: "visible", children: r.children }, l, 0, null), o = Mn(o, l, i, null), o.flags |= 2, r.return = n, o.return = n, r.sibling = o, n.child = r, n.mode & 1 && pt(n, e.child, null, i), n.child.memoizedState = $o(i), n.memoizedState = Io, o);
  if (!(n.mode & 1)) return Cr(e, n, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, o = Error(y(419)), r = Jl(o, r, void 0), Cr(e, n, i, r);
  }
  if (u = (i & e.childLanes) !== 0, ve || u) {
    if (r = ne, r !== null) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, qe(e, l), Ie(r, e, l, -1));
    }
    return Ii(), r = Jl(Error(y(421))), Cr(e, n, i, r);
  }
  return l.data === "$?" ? (n.flags |= 128, n.child = e.child, n = Xd.bind(null, e), l._reactRetry = n, null) : (e = o.treeContext, Se = pn(l.nextSibling), Ee = n, V = !0, je = null, e !== null && (Ne[Pe++] = Ye, Ne[Pe++] = Xe, Ne[Pe++] = jn, Ye = e.id, Xe = e.overflow, jn = n), n = Li(n, r.children), n.flags |= 4096, n);
}
function Xu(e, n, t) {
  e.lanes |= n;
  var r = e.alternate;
  r !== null && (r.lanes |= n), Lo(e.return, n, t);
}
function ql(e, n, t, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: l } : (o.isBackwards = n, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = t, o.tailMode = l);
}
function ec(e, n, t) {
  var r = n.pendingProps, l = r.revealOrder, o = r.tail;
  if (ce(e, n, r.children, t), r = W.current, r & 2) r = r & 1 | 2, n.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = n.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Xu(e, t, n);
      else if (e.tag === 19) Xu(e, t, n);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === n) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === n) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (I(W, r), !(n.mode & 1)) n.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (t = n.child, l = null; t !== null; ) e = t.alternate, e !== null && tl(e) === null && (l = t), t = t.sibling;
      t = l, t === null ? (l = n.child, n.child = null) : (l = t.sibling, t.sibling = null), ql(n, !1, l, t, o);
      break;
    case "backwards":
      for (t = null, l = n.child, n.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && tl(e) === null) {
          n.child = l;
          break;
        }
        e = l.sibling, l.sibling = t, t = l, l = e;
      }
      ql(n, !0, t, null, o);
      break;
    case "together":
      ql(n, !1, null, null, void 0);
      break;
    default:
      n.memoizedState = null;
  }
  return n.child;
}
function Fr(e, n) {
  !(n.mode & 1) && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2);
}
function be(e, n, t) {
  if (e !== null && (n.dependencies = e.dependencies), In |= n.lanes, !(t & n.childLanes)) return null;
  if (e !== null && n.child !== e.child) throw Error(y(153));
  if (n.child !== null) {
    for (e = n.child, t = yn(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; ) e = e.sibling, t = t.sibling = yn(e, e.pendingProps), t.return = n;
    t.sibling = null;
  }
  return n.child;
}
function Fd(e, n, t) {
  switch (n.tag) {
    case 3:
      qa(n), dt();
      break;
    case 5:
      Na(n);
      break;
    case 1:
      ge(n.type) && Zr(n);
      break;
    case 4:
      xi(n, n.stateNode.containerInfo);
      break;
    case 10:
      var r = n.type._context, l = n.memoizedProps.value;
      I(br, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = n.memoizedState, r !== null)
        return r.dehydrated !== null ? (I(W, W.current & 1), n.flags |= 128, null) : t & n.child.childLanes ? ba(e, n, t) : (I(W, W.current & 1), e = be(e, n, t), e !== null ? e.sibling : null);
      I(W, W.current & 1);
      break;
    case 19:
      if (r = (t & n.childLanes) !== 0, e.flags & 128) {
        if (r) return ec(e, n, t);
        n.flags |= 128;
      }
      if (l = n.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), I(W, W.current), r) break;
      return null;
    case 22:
    case 23:
      return n.lanes = 0, Za(e, n, t);
  }
  return be(e, n, t);
}
var nc, Ao, tc, rc;
nc = function(e, n) {
  for (var t = n.child; t !== null; ) {
    if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
    else if (t.tag !== 4 && t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === n) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === n) return;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
};
Ao = function() {
};
tc = function(e, n, t, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = n.stateNode, Rn(We.current);
    var o = null;
    switch (t) {
      case "input":
        l = io(e, l), r = io(e, r), o = [];
        break;
      case "select":
        l = K({}, l, { value: void 0 }), r = K({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = ao(e, l), r = ao(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Xr);
    }
    fo(t, r);
    var i;
    t = null;
    for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
      var u = l[c];
      for (i in u) u.hasOwnProperty(i) && (t || (t = {}), t[i] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Vt.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (u = l != null ? l[c] : void 0, r.hasOwnProperty(c) && s !== u && (s != null || u != null)) if (c === "style") if (u) {
        for (i in u) !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (t || (t = {}), t[i] = "");
        for (i in s) s.hasOwnProperty(i) && u[i] !== s[i] && (t || (t = {}), t[i] = s[i]);
      } else t || (o || (o = []), o.push(
        c,
        t
      )), t = s;
      else c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Vt.hasOwnProperty(c) ? (s != null && c === "onScroll" && $("scroll", e), o || u === s || (o = [])) : (o = o || []).push(c, s));
    }
    t && (o = o || []).push("style", t);
    var c = o;
    (n.updateQueue = c) && (n.flags |= 4);
  }
};
rc = function(e, n, t, r) {
  t !== r && (n.flags |= 4);
};
function Nt(e, n) {
  if (!V) switch (e.tailMode) {
    case "hidden":
      n = e.tail;
      for (var t = null; n !== null; ) n.alternate !== null && (t = n), n = n.sibling;
      t === null ? e.tail = null : t.sibling = null;
      break;
    case "collapsed":
      t = e.tail;
      for (var r = null; t !== null; ) t.alternate !== null && (r = t), t = t.sibling;
      r === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function ie(e) {
  var n = e.alternate !== null && e.alternate.child === e.child, t = 0, r = 0;
  if (n) for (var l = e.child; l !== null; ) t |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) t |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = t, n;
}
function Id(e, n, t) {
  var r = n.pendingProps;
  switch (vi(n), n.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ie(n), null;
    case 1:
      return ge(n.type) && Gr(), ie(n), null;
    case 3:
      return r = n.stateNode, mt(), U(ye), U(se), _i(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Er(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, je !== null && (Yo(je), je = null))), Ao(e, n), ie(n), null;
    case 5:
      Ci(n);
      var l = Rn(bt.current);
      if (t = n.type, e !== null && n.stateNode != null) tc(e, n, t, r, l), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
      else {
        if (!r) {
          if (n.stateNode === null) throw Error(y(166));
          return ie(n), null;
        }
        if (e = Rn(We.current), Er(n)) {
          r = n.stateNode, t = n.type;
          var o = n.memoizedProps;
          switch (r[Be] = n, r[Jt] = o, e = (n.mode & 1) !== 0, t) {
            case "dialog":
              $("cancel", r), $("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              $("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Lt.length; l++) $(Lt[l], r);
              break;
            case "source":
              $("error", r);
              break;
            case "img":
            case "image":
            case "link":
              $(
                "error",
                r
              ), $("load", r);
              break;
            case "details":
              $("toggle", r);
              break;
            case "input":
              ru(r, o), $("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, $("invalid", r);
              break;
            case "textarea":
              ou(r, o), $("invalid", r);
          }
          fo(t, o), l = null;
          for (var i in o) if (o.hasOwnProperty(i)) {
            var u = o[i];
            i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && Sr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && Sr(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : Vt.hasOwnProperty(i) && u != null && i === "onScroll" && $("scroll", r);
          }
          switch (t) {
            case "input":
              pr(r), lu(r, o, !0);
              break;
            case "textarea":
              pr(r), iu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Xr);
          }
          r = l, n.updateQueue = r, r !== null && (n.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ls(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(t, { is: r.is }) : (e = i.createElement(t), t === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, t), e[Be] = n, e[Jt] = r, nc(e, n, !1, !1), n.stateNode = e;
          e: {
            switch (i = po(t, r), t) {
              case "dialog":
                $("cancel", e), $("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                $("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Lt.length; l++) $(Lt[l], e);
                l = r;
                break;
              case "source":
                $("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                $(
                  "error",
                  e
                ), $("load", e), l = r;
                break;
              case "details":
                $("toggle", e), l = r;
                break;
              case "input":
                ru(e, r), l = io(e, r), $("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = K({}, r, { value: void 0 }), $("invalid", e);
                break;
              case "textarea":
                ou(e, r), l = ao(e, r), $("invalid", e);
                break;
              default:
                l = r;
            }
            fo(t, l), u = l;
            for (o in u) if (u.hasOwnProperty(o)) {
              var s = u[o];
              o === "style" ? Ds(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Os(e, s)) : o === "children" ? typeof s == "string" ? (t !== "textarea" || s !== "") && Bt(e, s) : typeof s == "number" && Bt(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Vt.hasOwnProperty(o) ? s != null && o === "onScroll" && $("scroll", e) : s != null && ni(e, o, s, i));
            }
            switch (t) {
              case "input":
                pr(e), lu(e, r, !1);
                break;
              case "textarea":
                pr(e), iu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + gn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? lt(e, !!r.multiple, o, !1) : r.defaultValue != null && lt(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Xr);
            }
            switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (n.flags |= 4);
        }
        n.ref !== null && (n.flags |= 512, n.flags |= 2097152);
      }
      return ie(n), null;
    case 6:
      if (e && n.stateNode != null) rc(e, n, e.memoizedProps, r);
      else {
        if (typeof r != "string" && n.stateNode === null) throw Error(y(166));
        if (t = Rn(bt.current), Rn(We.current), Er(n)) {
          if (r = n.stateNode, t = n.memoizedProps, r[Be] = n, (o = r.nodeValue !== t) && (e = Ee, e !== null)) switch (e.tag) {
            case 3:
              Sr(r.nodeValue, t, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Sr(r.nodeValue, t, (e.mode & 1) !== 0);
          }
          o && (n.flags |= 4);
        } else r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[Be] = n, n.stateNode = r;
      }
      return ie(n), null;
    case 13:
      if (U(W), r = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (V && Se !== null && n.mode & 1 && !(n.flags & 128)) Sa(), dt(), n.flags |= 98560, o = !1;
        else if (o = Er(n), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(y(318));
            if (o = n.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(y(317));
            o[Be] = n;
          } else dt(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
          ie(n), o = !1;
        } else je !== null && (Yo(je), je = null), o = !0;
        if (!o) return n.flags & 65536 ? n : null;
      }
      return n.flags & 128 ? (n.lanes = t, n) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (n.child.flags |= 8192, n.mode & 1 && (e === null || W.current & 1 ? q === 0 && (q = 3) : Ii())), n.updateQueue !== null && (n.flags |= 4), ie(n), null);
    case 4:
      return mt(), Ao(e, n), e === null && Gt(n.stateNode.containerInfo), ie(n), null;
    case 10:
      return ki(n.type._context), ie(n), null;
    case 17:
      return ge(n.type) && Gr(), ie(n), null;
    case 19:
      if (U(W), o = n.memoizedState, o === null) return ie(n), null;
      if (r = (n.flags & 128) !== 0, i = o.rendering, i === null) if (r) Nt(o, !1);
      else {
        if (q !== 0 || e !== null && e.flags & 128) for (e = n.child; e !== null; ) {
          if (i = tl(e), i !== null) {
            for (n.flags |= 128, Nt(o, !1), r = i.updateQueue, r !== null && (n.updateQueue = r, n.flags |= 4), n.subtreeFlags = 0, r = t, t = n.child; t !== null; ) o = t, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
            return I(W, W.current & 1 | 2), n.child;
          }
          e = e.sibling;
        }
        o.tail !== null && G() > vt && (n.flags |= 128, r = !0, Nt(o, !1), n.lanes = 4194304);
      }
      else {
        if (!r) if (e = tl(i), e !== null) {
          if (n.flags |= 128, r = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), Nt(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !V) return ie(n), null;
        } else 2 * G() - o.renderingStartTime > vt && t !== 1073741824 && (n.flags |= 128, r = !0, Nt(o, !1), n.lanes = 4194304);
        o.isBackwards ? (i.sibling = n.child, n.child = i) : (t = o.last, t !== null ? t.sibling = i : n.child = i, o.last = i);
      }
      return o.tail !== null ? (n = o.tail, o.rendering = n, o.tail = n.sibling, o.renderingStartTime = G(), n.sibling = null, t = W.current, I(W, r ? t & 1 | 2 : t & 1), n) : (ie(n), null);
    case 22:
    case 23:
      return Fi(), r = n.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (n.flags |= 8192), r && n.mode & 1 ? ke & 1073741824 && (ie(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : ie(n), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, n.tag));
}
function $d(e, n) {
  switch (vi(n), n.tag) {
    case 1:
      return ge(n.type) && Gr(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
    case 3:
      return mt(), U(ye), U(se), _i(), e = n.flags, e & 65536 && !(e & 128) ? (n.flags = e & -65537 | 128, n) : null;
    case 5:
      return Ci(n), null;
    case 13:
      if (U(W), e = n.memoizedState, e !== null && e.dehydrated !== null) {
        if (n.alternate === null) throw Error(y(340));
        dt();
      }
      return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
    case 19:
      return U(W), null;
    case 4:
      return mt(), null;
    case 10:
      return ki(n.type._context), null;
    case 22:
    case 23:
      return Fi(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var _r = !1, ue = !1, Ad = typeof WeakSet == "function" ? WeakSet : Set, E = null;
function tt(e, n) {
  var t = e.ref;
  if (t !== null) if (typeof t == "function") try {
    t(null);
  } catch (r) {
    Y(e, n, r);
  }
  else t.current = null;
}
function Uo(e, n, t) {
  try {
    t();
  } catch (r) {
    Y(e, n, r);
  }
}
var Gu = !1;
function Ud(e, n) {
  if (xo = Qr, e = sa(), mi(e)) {
    if ("selectionStart" in e) var t = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      t = (t = e.ownerDocument) && t.defaultView || window;
      var r = t.getSelection && t.getSelection();
      if (r && r.rangeCount !== 0) {
        t = r.anchorNode;
        var l = r.anchorOffset, o = r.focusNode;
        r = r.focusOffset;
        try {
          t.nodeType, o.nodeType;
        } catch {
          t = null;
          break e;
        }
        var i = 0, u = -1, s = -1, c = 0, p = 0, h = e, m = null;
        n: for (; ; ) {
          for (var g; h !== t || l !== 0 && h.nodeType !== 3 || (u = i + l), h !== o || r !== 0 && h.nodeType !== 3 || (s = i + r), h.nodeType === 3 && (i += h.nodeValue.length), (g = h.firstChild) !== null; )
            m = h, h = g;
          for (; ; ) {
            if (h === e) break n;
            if (m === t && ++c === l && (u = i), m === o && ++p === r && (s = i), (g = h.nextSibling) !== null) break;
            h = m, m = h.parentNode;
          }
          h = g;
        }
        t = u === -1 || s === -1 ? null : { start: u, end: s };
      } else t = null;
    }
    t = t || { start: 0, end: 0 };
  } else t = null;
  for (Co = { focusedElem: e, selectionRange: t }, Qr = !1, E = n; E !== null; ) if (n = E, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null) e.return = n, E = e;
  else for (; E !== null; ) {
    n = E;
    try {
      var w = n.alternate;
      if (n.flags & 1024) switch (n.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (w !== null) {
            var k = w.memoizedProps, F = w.memoizedState, f = n.stateNode, a = f.getSnapshotBeforeUpdate(n.elementType === n.type ? k : Me(n.type, k), F);
            f.__reactInternalSnapshotBeforeUpdate = a;
          }
          break;
        case 3:
          var d = n.stateNode.containerInfo;
          d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(y(163));
      }
    } catch (v) {
      Y(n, n.return, v);
    }
    if (e = n.sibling, e !== null) {
      e.return = n.return, E = e;
      break;
    }
    E = n.return;
  }
  return w = Gu, Gu = !1, w;
}
function $t(e, n, t) {
  var r = n.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && Uo(n, t, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function wl(e, n) {
  if (n = n.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
    var t = n = n.next;
    do {
      if ((t.tag & e) === e) {
        var r = t.create;
        t.destroy = r();
      }
      t = t.next;
    } while (t !== n);
  }
}
function Vo(e) {
  var n = e.ref;
  if (n !== null) {
    var t = e.stateNode;
    switch (e.tag) {
      case 5:
        e = t;
        break;
      default:
        e = t;
    }
    typeof n == "function" ? n(e) : n.current = e;
  }
}
function lc(e) {
  var n = e.alternate;
  n !== null && (e.alternate = null, lc(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[Be], delete n[Jt], delete n[Po], delete n[Ed], delete n[xd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function oc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Zu(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || oc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Bo(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = Xr));
  else if (r !== 4 && (e = e.child, e !== null)) for (Bo(e, n, t), e = e.sibling; e !== null; ) Bo(e, n, t), e = e.sibling;
}
function Ho(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Ho(e, n, t), e = e.sibling; e !== null; ) Ho(e, n, t), e = e.sibling;
}
var te = null, De = !1;
function nn(e, n, t) {
  for (t = t.child; t !== null; ) ic(e, n, t), t = t.sibling;
}
function ic(e, n, t) {
  if (He && typeof He.onCommitFiberUnmount == "function") try {
    He.onCommitFiberUnmount(fl, t);
  } catch {
  }
  switch (t.tag) {
    case 5:
      ue || tt(t, n);
    case 6:
      var r = te, l = De;
      te = null, nn(e, n, t), te = r, De = l, te !== null && (De ? (e = te, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : te.removeChild(t.stateNode));
      break;
    case 18:
      te !== null && (De ? (e = te, t = t.stateNode, e.nodeType === 8 ? Ql(e.parentNode, t) : e.nodeType === 1 && Ql(e, t), Kt(e)) : Ql(te, t.stateNode));
      break;
    case 4:
      r = te, l = De, te = t.stateNode.containerInfo, De = !0, nn(e, n, t), te = r, De = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ue && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && Uo(t, n, i), l = l.next;
        } while (l !== r);
      }
      nn(e, n, t);
      break;
    case 1:
      if (!ue && (tt(t, n), r = t.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount();
      } catch (u) {
        Y(t, n, u);
      }
      nn(e, n, t);
      break;
    case 21:
      nn(e, n, t);
      break;
    case 22:
      t.mode & 1 ? (ue = (r = ue) || t.memoizedState !== null, nn(e, n, t), ue = r) : nn(e, n, t);
      break;
    default:
      nn(e, n, t);
  }
}
function Ju(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var t = e.stateNode;
    t === null && (t = e.stateNode = new Ad()), n.forEach(function(r) {
      var l = Gd.bind(null, e, r);
      t.has(r) || (t.add(r), r.then(l, l));
    });
  }
}
function Oe(e, n) {
  var t = n.deletions;
  if (t !== null) for (var r = 0; r < t.length; r++) {
    var l = t[r];
    try {
      var o = e, i = n, u = i;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            te = u.stateNode, De = !1;
            break e;
          case 3:
            te = u.stateNode.containerInfo, De = !0;
            break e;
          case 4:
            te = u.stateNode.containerInfo, De = !0;
            break e;
        }
        u = u.return;
      }
      if (te === null) throw Error(y(160));
      ic(o, i, l), te = null, De = !1;
      var s = l.alternate;
      s !== null && (s.return = null), l.return = null;
    } catch (c) {
      Y(l, n, c);
    }
  }
  if (n.subtreeFlags & 12854) for (n = n.child; n !== null; ) uc(n, e), n = n.sibling;
}
function uc(e, n) {
  var t = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Oe(n, e), Ue(e), r & 4) {
        try {
          $t(3, e, e.return), wl(3, e);
        } catch (k) {
          Y(e, e.return, k);
        }
        try {
          $t(5, e, e.return);
        } catch (k) {
          Y(e, e.return, k);
        }
      }
      break;
    case 1:
      Oe(n, e), Ue(e), r & 512 && t !== null && tt(t, t.return);
      break;
    case 5:
      if (Oe(n, e), Ue(e), r & 512 && t !== null && tt(t, t.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Bt(l, "");
        } catch (k) {
          Y(e, e.return, k);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = t !== null ? t.memoizedProps : o, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          u === "input" && o.type === "radio" && o.name != null && Ts(l, o), po(u, i);
          var c = po(u, o);
          for (i = 0; i < s.length; i += 2) {
            var p = s[i], h = s[i + 1];
            p === "style" ? Ds(l, h) : p === "dangerouslySetInnerHTML" ? Os(l, h) : p === "children" ? Bt(l, h) : ni(l, p, h, c);
          }
          switch (u) {
            case "input":
              uo(l, o);
              break;
            case "textarea":
              Rs(l, o);
              break;
            case "select":
              var m = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!o.multiple;
              var g = o.value;
              g != null ? lt(l, !!o.multiple, g, !1) : m !== !!o.multiple && (o.defaultValue != null ? lt(
                l,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : lt(l, !!o.multiple, o.multiple ? [] : "", !1));
          }
          l[Jt] = o;
        } catch (k) {
          Y(e, e.return, k);
        }
      }
      break;
    case 6:
      if (Oe(n, e), Ue(e), r & 4) {
        if (e.stateNode === null) throw Error(y(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (k) {
          Y(e, e.return, k);
        }
      }
      break;
    case 3:
      if (Oe(n, e), Ue(e), r & 4 && t !== null && t.memoizedState.isDehydrated) try {
        Kt(n.containerInfo);
      } catch (k) {
        Y(e, e.return, k);
      }
      break;
    case 4:
      Oe(n, e), Ue(e);
      break;
    case 13:
      Oe(n, e), Ue(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Di = G())), r & 4 && Ju(e);
      break;
    case 22:
      if (p = t !== null && t.memoizedState !== null, e.mode & 1 ? (ue = (c = ue) || p, Oe(n, e), ue = c) : Oe(n, e), Ue(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !p && e.mode & 1) for (E = e, p = e.child; p !== null; ) {
          for (h = E = p; E !== null; ) {
            switch (m = E, g = m.child, m.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                $t(4, m, m.return);
                break;
              case 1:
                tt(m, m.return);
                var w = m.stateNode;
                if (typeof w.componentWillUnmount == "function") {
                  r = m, t = m.return;
                  try {
                    n = r, w.props = n.memoizedProps, w.state = n.memoizedState, w.componentWillUnmount();
                  } catch (k) {
                    Y(r, t, k);
                  }
                }
                break;
              case 5:
                tt(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  bu(h);
                  continue;
                }
            }
            g !== null ? (g.return = m, E = g) : bu(h);
          }
          p = p.sibling;
        }
        e: for (p = null, h = e; ; ) {
          if (h.tag === 5) {
            if (p === null) {
              p = h;
              try {
                l = h.stateNode, c ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = h.stateNode, s = h.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Ms("display", i));
              } catch (k) {
                Y(e, e.return, k);
              }
            }
          } else if (h.tag === 6) {
            if (p === null) try {
              h.stateNode.nodeValue = c ? "" : h.memoizedProps;
            } catch (k) {
              Y(e, e.return, k);
            }
          } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
            h.child.return = h, h = h.child;
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            p === h && (p = null), h = h.return;
          }
          p === h && (p = null), h.sibling.return = h.return, h = h.sibling;
        }
      }
      break;
    case 19:
      Oe(n, e), Ue(e), r & 4 && Ju(e);
      break;
    case 21:
      break;
    default:
      Oe(
        n,
        e
      ), Ue(e);
  }
}
function Ue(e) {
  var n = e.flags;
  if (n & 2) {
    try {
      e: {
        for (var t = e.return; t !== null; ) {
          if (oc(t)) {
            var r = t;
            break e;
          }
          t = t.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Bt(l, ""), r.flags &= -33);
          var o = Zu(e);
          Ho(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = Zu(e);
          Bo(e, u, i);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      Y(e, e.return, s);
    }
    e.flags &= -3;
  }
  n & 4096 && (e.flags &= -4097);
}
function Vd(e, n, t) {
  E = e, sc(e);
}
function sc(e, n, t) {
  for (var r = (e.mode & 1) !== 0; E !== null; ) {
    var l = E, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || _r;
      if (!i) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || ue;
        u = _r;
        var c = ue;
        if (_r = i, (ue = s) && !c) for (E = l; E !== null; ) i = E, s = i.child, i.tag === 22 && i.memoizedState !== null ? es(l) : s !== null ? (s.return = i, E = s) : es(l);
        for (; o !== null; ) E = o, sc(o), o = o.sibling;
        E = l, _r = u, ue = c;
      }
      qu(e);
    } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, E = o) : qu(e);
  }
}
function qu(e) {
  for (; E !== null; ) {
    var n = E;
    if (n.flags & 8772) {
      var t = n.alternate;
      try {
        if (n.flags & 8772) switch (n.tag) {
          case 0:
          case 11:
          case 15:
            ue || wl(5, n);
            break;
          case 1:
            var r = n.stateNode;
            if (n.flags & 4 && !ue) if (t === null) r.componentDidMount();
            else {
              var l = n.elementType === n.type ? t.memoizedProps : Me(n.type, t.memoizedProps);
              r.componentDidUpdate(l, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = n.updateQueue;
            o !== null && Fu(n, o, r);
            break;
          case 3:
            var i = n.updateQueue;
            if (i !== null) {
              if (t = null, n.child !== null) switch (n.child.tag) {
                case 5:
                  t = n.child.stateNode;
                  break;
                case 1:
                  t = n.child.stateNode;
              }
              Fu(n, i, t);
            }
            break;
          case 5:
            var u = n.stateNode;
            if (t === null && n.flags & 4) {
              t = u;
              var s = n.memoizedProps;
              switch (n.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s.autoFocus && t.focus();
                  break;
                case "img":
                  s.src && (t.src = s.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (n.memoizedState === null) {
              var c = n.alternate;
              if (c !== null) {
                var p = c.memoizedState;
                if (p !== null) {
                  var h = p.dehydrated;
                  h !== null && Kt(h);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(y(163));
        }
        ue || n.flags & 512 && Vo(n);
      } catch (m) {
        Y(n, n.return, m);
      }
    }
    if (n === e) {
      E = null;
      break;
    }
    if (t = n.sibling, t !== null) {
      t.return = n.return, E = t;
      break;
    }
    E = n.return;
  }
}
function bu(e) {
  for (; E !== null; ) {
    var n = E;
    if (n === e) {
      E = null;
      break;
    }
    var t = n.sibling;
    if (t !== null) {
      t.return = n.return, E = t;
      break;
    }
    E = n.return;
  }
}
function es(e) {
  for (; E !== null; ) {
    var n = E;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var t = n.return;
          try {
            wl(4, n);
          } catch (s) {
            Y(n, t, s);
          }
          break;
        case 1:
          var r = n.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = n.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Y(n, l, s);
            }
          }
          var o = n.return;
          try {
            Vo(n);
          } catch (s) {
            Y(n, o, s);
          }
          break;
        case 5:
          var i = n.return;
          try {
            Vo(n);
          } catch (s) {
            Y(n, i, s);
          }
      }
    } catch (s) {
      Y(n, n.return, s);
    }
    if (n === e) {
      E = null;
      break;
    }
    var u = n.sibling;
    if (u !== null) {
      u.return = n.return, E = u;
      break;
    }
    E = n.return;
  }
}
var Bd = Math.ceil, ol = en.ReactCurrentDispatcher, Oi = en.ReactCurrentOwner, Te = en.ReactCurrentBatchConfig, M = 0, ne = null, Z = null, re = 0, ke = 0, rt = Sn(0), q = 0, rr = null, In = 0, kl = 0, Mi = 0, At = null, he = null, Di = 0, vt = 1 / 0, Qe = null, il = !1, Wo = null, hn = null, Nr = !1, sn = null, ul = 0, Ut = 0, Qo = null, Ir = -1, $r = 0;
function fe() {
  return M & 6 ? G() : Ir !== -1 ? Ir : Ir = G();
}
function vn(e) {
  return e.mode & 1 ? M & 2 && re !== 0 ? re & -re : _d.transition !== null ? ($r === 0 && ($r = Ks()), $r) : (e = j, e !== 0 || (e = window.event, e = e === void 0 ? 16 : bs(e.type)), e) : 1;
}
function Ie(e, n, t, r) {
  if (50 < Ut) throw Ut = 0, Qo = null, Error(y(185));
  or(e, t, r), (!(M & 2) || e !== ne) && (e === ne && (!(M & 2) && (kl |= t), q === 4 && on(e, re)), we(e, r), t === 1 && M === 0 && !(n.mode & 1) && (vt = G() + 500, vl && En()));
}
function we(e, n) {
  var t = e.callbackNode;
  _f(e, n);
  var r = Wr(e, e === ne ? re : 0);
  if (r === 0) t !== null && au(t), e.callbackNode = null, e.callbackPriority = 0;
  else if (n = r & -r, e.callbackPriority !== n) {
    if (t != null && au(t), n === 1) e.tag === 0 ? Cd(ns.bind(null, e)) : ga(ns.bind(null, e)), kd(function() {
      !(M & 6) && En();
    }), t = null;
    else {
      switch (Ys(r)) {
        case 1:
          t = ii;
          break;
        case 4:
          t = Ws;
          break;
        case 16:
          t = Hr;
          break;
        case 536870912:
          t = Qs;
          break;
        default:
          t = Hr;
      }
      t = vc(t, ac.bind(null, e));
    }
    e.callbackPriority = n, e.callbackNode = t;
  }
}
function ac(e, n) {
  if (Ir = -1, $r = 0, M & 6) throw Error(y(327));
  var t = e.callbackNode;
  if (at() && e.callbackNode !== t) return null;
  var r = Wr(e, e === ne ? re : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || n) n = sl(e, r);
  else {
    n = r;
    var l = M;
    M |= 2;
    var o = fc();
    (ne !== e || re !== n) && (Qe = null, vt = G() + 500, On(e, n));
    do
      try {
        Qd();
        break;
      } catch (u) {
        cc(e, u);
      }
    while (!0);
    wi(), ol.current = o, M = l, Z !== null ? n = 0 : (ne = null, re = 0, n = q);
  }
  if (n !== 0) {
    if (n === 2 && (l = go(e), l !== 0 && (r = l, n = Ko(e, l))), n === 1) throw t = rr, On(e, 0), on(e, r), we(e, G()), t;
    if (n === 6) on(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Hd(l) && (n = sl(e, r), n === 2 && (o = go(e), o !== 0 && (r = o, n = Ko(e, o))), n === 1)) throw t = rr, On(e, 0), on(e, r), we(e, G()), t;
      switch (e.finishedWork = l, e.finishedLanes = r, n) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          Nn(e, he, Qe);
          break;
        case 3:
          if (on(e, r), (r & 130023424) === r && (n = Di + 500 - G(), 10 < n)) {
            if (Wr(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              fe(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = No(Nn.bind(null, e, he, Qe), n);
            break;
          }
          Nn(e, he, Qe);
          break;
        case 4:
          if (on(e, r), (r & 4194240) === r) break;
          for (n = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Fe(r);
            o = 1 << i, i = n[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = G() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Bd(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = No(Nn.bind(null, e, he, Qe), r);
            break;
          }
          Nn(e, he, Qe);
          break;
        case 5:
          Nn(e, he, Qe);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return we(e, G()), e.callbackNode === t ? ac.bind(null, e) : null;
}
function Ko(e, n) {
  var t = At;
  return e.current.memoizedState.isDehydrated && (On(e, n).flags |= 256), e = sl(e, n), e !== 2 && (n = he, he = t, n !== null && Yo(n)), e;
}
function Yo(e) {
  he === null ? he = e : he.push.apply(he, e);
}
function Hd(e) {
  for (var n = e; ; ) {
    if (n.flags & 16384) {
      var t = n.updateQueue;
      if (t !== null && (t = t.stores, t !== null)) for (var r = 0; r < t.length; r++) {
        var l = t[r], o = l.getSnapshot;
        l = l.value;
        try {
          if (!$e(o(), l)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (t = n.child, n.subtreeFlags & 16384 && t !== null) t.return = n, n = t;
    else {
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return !0;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }
  return !0;
}
function on(e, n) {
  for (n &= ~Mi, n &= ~kl, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
    var t = 31 - Fe(n), r = 1 << t;
    e[t] = -1, n &= ~r;
  }
}
function ns(e) {
  if (M & 6) throw Error(y(327));
  at();
  var n = Wr(e, 0);
  if (!(n & 1)) return we(e, G()), null;
  var t = sl(e, n);
  if (e.tag !== 0 && t === 2) {
    var r = go(e);
    r !== 0 && (n = r, t = Ko(e, r));
  }
  if (t === 1) throw t = rr, On(e, 0), on(e, n), we(e, G()), t;
  if (t === 6) throw Error(y(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = n, Nn(e, he, Qe), we(e, G()), null;
}
function ji(e, n) {
  var t = M;
  M |= 1;
  try {
    return e(n);
  } finally {
    M = t, M === 0 && (vt = G() + 500, vl && En());
  }
}
function $n(e) {
  sn !== null && sn.tag === 0 && !(M & 6) && at();
  var n = M;
  M |= 1;
  var t = Te.transition, r = j;
  try {
    if (Te.transition = null, j = 1, e) return e();
  } finally {
    j = r, Te.transition = t, M = n, !(M & 6) && En();
  }
}
function Fi() {
  ke = rt.current, U(rt);
}
function On(e, n) {
  e.finishedWork = null, e.finishedLanes = 0;
  var t = e.timeoutHandle;
  if (t !== -1 && (e.timeoutHandle = -1, wd(t)), Z !== null) for (t = Z.return; t !== null; ) {
    var r = t;
    switch (vi(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Gr();
        break;
      case 3:
        mt(), U(ye), U(se), _i();
        break;
      case 5:
        Ci(r);
        break;
      case 4:
        mt();
        break;
      case 13:
        U(W);
        break;
      case 19:
        U(W);
        break;
      case 10:
        ki(r.type._context);
        break;
      case 22:
      case 23:
        Fi();
    }
    t = t.return;
  }
  if (ne = e, Z = e = yn(e.current, null), re = ke = n, q = 0, rr = null, Mi = kl = In = 0, he = At = null, Tn !== null) {
    for (n = 0; n < Tn.length; n++) if (t = Tn[n], r = t.interleaved, r !== null) {
      t.interleaved = null;
      var l = r.next, o = t.pending;
      if (o !== null) {
        var i = o.next;
        o.next = l, r.next = i;
      }
      t.pending = r;
    }
    Tn = null;
  }
  return e;
}
function cc(e, n) {
  do {
    var t = Z;
    try {
      if (wi(), Dr.current = ll, rl) {
        for (var r = Q.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        rl = !1;
      }
      if (Fn = 0, ee = J = Q = null, It = !1, er = 0, Oi.current = null, t === null || t.return === null) {
        q = 1, rr = n, Z = null;
        break;
      }
      e: {
        var o = e, i = t.return, u = t, s = n;
        if (n = re, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var c = s, p = u, h = p.tag;
          if (!(p.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = p.alternate;
            m ? (p.updateQueue = m.updateQueue, p.memoizedState = m.memoizedState, p.lanes = m.lanes) : (p.updateQueue = null, p.memoizedState = null);
          }
          var g = Bu(i);
          if (g !== null) {
            g.flags &= -257, Hu(g, i, u, o, n), g.mode & 1 && Vu(o, c, n), n = g, s = c;
            var w = n.updateQueue;
            if (w === null) {
              var k = /* @__PURE__ */ new Set();
              k.add(s), n.updateQueue = k;
            } else w.add(s);
            break e;
          } else {
            if (!(n & 1)) {
              Vu(o, c, n), Ii();
              break e;
            }
            s = Error(y(426));
          }
        } else if (V && u.mode & 1) {
          var F = Bu(i);
          if (F !== null) {
            !(F.flags & 65536) && (F.flags |= 256), Hu(F, i, u, o, n), yi(ht(s, u));
            break e;
          }
        }
        o = s = ht(s, u), q !== 4 && (q = 2), At === null ? At = [o] : At.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, n &= -n, o.lanes |= n;
              var f = Ya(o, s, n);
              ju(o, f);
              break e;
            case 1:
              u = s;
              var a = o.type, d = o.stateNode;
              if (!(o.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (hn === null || !hn.has(d)))) {
                o.flags |= 65536, n &= -n, o.lanes |= n;
                var v = Xa(o, u, n);
                ju(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      pc(t);
    } catch (S) {
      n = S, Z === t && t !== null && (Z = t = t.return);
      continue;
    }
    break;
  } while (!0);
}
function fc() {
  var e = ol.current;
  return ol.current = ll, e === null ? ll : e;
}
function Ii() {
  (q === 0 || q === 3 || q === 2) && (q = 4), ne === null || !(In & 268435455) && !(kl & 268435455) || on(ne, re);
}
function sl(e, n) {
  var t = M;
  M |= 2;
  var r = fc();
  (ne !== e || re !== n) && (Qe = null, On(e, n));
  do
    try {
      Wd();
      break;
    } catch (l) {
      cc(e, l);
    }
  while (!0);
  if (wi(), M = t, ol.current = r, Z !== null) throw Error(y(261));
  return ne = null, re = 0, q;
}
function Wd() {
  for (; Z !== null; ) dc(Z);
}
function Qd() {
  for (; Z !== null && !vf(); ) dc(Z);
}
function dc(e) {
  var n = hc(e.alternate, e, ke);
  e.memoizedProps = e.pendingProps, n === null ? pc(e) : Z = n, Oi.current = null;
}
function pc(e) {
  var n = e;
  do {
    var t = n.alternate;
    if (e = n.return, n.flags & 32768) {
      if (t = $d(t, n), t !== null) {
        t.flags &= 32767, Z = t;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        q = 6, Z = null;
        return;
      }
    } else if (t = Id(t, n, ke), t !== null) {
      Z = t;
      return;
    }
    if (n = n.sibling, n !== null) {
      Z = n;
      return;
    }
    Z = n = e;
  } while (n !== null);
  q === 0 && (q = 5);
}
function Nn(e, n, t) {
  var r = j, l = Te.transition;
  try {
    Te.transition = null, j = 1, Kd(e, n, t, r);
  } finally {
    Te.transition = l, j = r;
  }
  return null;
}
function Kd(e, n, t, r) {
  do
    at();
  while (sn !== null);
  if (M & 6) throw Error(y(327));
  t = e.finishedWork;
  var l = e.finishedLanes;
  if (t === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, t === e.current) throw Error(y(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = t.lanes | t.childLanes;
  if (Nf(e, o), e === ne && (Z = ne = null, re = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || Nr || (Nr = !0, vc(Hr, function() {
    return at(), null;
  })), o = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || o) {
    o = Te.transition, Te.transition = null;
    var i = j;
    j = 1;
    var u = M;
    M |= 4, Oi.current = null, Ud(e, t), uc(t, e), dd(Co), Qr = !!xo, Co = xo = null, e.current = t, Vd(t), yf(), M = u, j = i, Te.transition = o;
  } else e.current = t;
  if (Nr && (Nr = !1, sn = e, ul = l), o = e.pendingLanes, o === 0 && (hn = null), kf(t.stateNode), we(e, G()), n !== null) for (r = e.onRecoverableError, t = 0; t < n.length; t++) l = n[t], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (il) throw il = !1, e = Wo, Wo = null, e;
  return ul & 1 && e.tag !== 0 && at(), o = e.pendingLanes, o & 1 ? e === Qo ? Ut++ : (Ut = 0, Qo = e) : Ut = 0, En(), null;
}
function at() {
  if (sn !== null) {
    var e = Ys(ul), n = Te.transition, t = j;
    try {
      if (Te.transition = null, j = 16 > e ? 16 : e, sn === null) var r = !1;
      else {
        if (e = sn, sn = null, ul = 0, M & 6) throw Error(y(331));
        var l = M;
        for (M |= 4, E = e.current; E !== null; ) {
          var o = E, i = o.child;
          if (E.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (E = c; E !== null; ) {
                  var p = E;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      $t(8, p, o);
                  }
                  var h = p.child;
                  if (h !== null) h.return = p, E = h;
                  else for (; E !== null; ) {
                    p = E;
                    var m = p.sibling, g = p.return;
                    if (lc(p), p === c) {
                      E = null;
                      break;
                    }
                    if (m !== null) {
                      m.return = g, E = m;
                      break;
                    }
                    E = g;
                  }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var k = w.child;
                if (k !== null) {
                  w.child = null;
                  do {
                    var F = k.sibling;
                    k.sibling = null, k = F;
                  } while (k !== null);
                }
              }
              E = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) i.return = o, E = i;
          else e: for (; E !== null; ) {
            if (o = E, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                $t(9, o, o.return);
            }
            var f = o.sibling;
            if (f !== null) {
              f.return = o.return, E = f;
              break e;
            }
            E = o.return;
          }
        }
        var a = e.current;
        for (E = a; E !== null; ) {
          i = E;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) d.return = i, E = d;
          else e: for (i = a; E !== null; ) {
            if (u = E, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  wl(9, u);
              }
            } catch (S) {
              Y(u, u.return, S);
            }
            if (u === i) {
              E = null;
              break e;
            }
            var v = u.sibling;
            if (v !== null) {
              v.return = u.return, E = v;
              break e;
            }
            E = u.return;
          }
        }
        if (M = l, En(), He && typeof He.onPostCommitFiberRoot == "function") try {
          He.onPostCommitFiberRoot(fl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      j = t, Te.transition = n;
    }
  }
  return !1;
}
function ts(e, n, t) {
  n = ht(t, n), n = Ya(e, n, 1), e = mn(e, n, 1), n = fe(), e !== null && (or(e, 1, n), we(e, n));
}
function Y(e, n, t) {
  if (e.tag === 3) ts(e, e, t);
  else for (; n !== null; ) {
    if (n.tag === 3) {
      ts(n, e, t);
      break;
    } else if (n.tag === 1) {
      var r = n.stateNode;
      if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (hn === null || !hn.has(r))) {
        e = ht(t, e), e = Xa(n, e, 1), n = mn(n, e, 1), e = fe(), n !== null && (or(n, 1, e), we(n, e));
        break;
      }
    }
    n = n.return;
  }
}
function Yd(e, n, t) {
  var r = e.pingCache;
  r !== null && r.delete(n), n = fe(), e.pingedLanes |= e.suspendedLanes & t, ne === e && (re & t) === t && (q === 4 || q === 3 && (re & 130023424) === re && 500 > G() - Di ? On(e, 0) : Mi |= t), we(e, n);
}
function mc(e, n) {
  n === 0 && (e.mode & 1 ? (n = vr, vr <<= 1, !(vr & 130023424) && (vr = 4194304)) : n = 1);
  var t = fe();
  e = qe(e, n), e !== null && (or(e, n, t), we(e, t));
}
function Xd(e) {
  var n = e.memoizedState, t = 0;
  n !== null && (t = n.retryLane), mc(e, t);
}
function Gd(e, n) {
  var t = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, l = e.memoizedState;
      l !== null && (t = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(n), mc(e, t);
}
var hc;
hc = function(e, n, t) {
  if (e !== null) if (e.memoizedProps !== n.pendingProps || ye.current) ve = !0;
  else {
    if (!(e.lanes & t) && !(n.flags & 128)) return ve = !1, Fd(e, n, t);
    ve = !!(e.flags & 131072);
  }
  else ve = !1, V && n.flags & 1048576 && wa(n, qr, n.index);
  switch (n.lanes = 0, n.tag) {
    case 2:
      var r = n.type;
      Fr(e, n), e = n.pendingProps;
      var l = ft(n, se.current);
      st(n, t), l = Pi(null, n, r, e, l, t);
      var o = zi();
      return n.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, ge(r) ? (o = !0, Zr(n)) : o = !1, n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Ei(n), l.updater = gl, n.stateNode = l, l._reactInternals = n, Mo(n, r, e, t), n = Fo(null, n, r, !0, o, t)) : (n.tag = 0, V && o && hi(n), ce(null, n, l, t), n = n.child), n;
    case 16:
      r = n.elementType;
      e: {
        switch (Fr(e, n), e = n.pendingProps, l = r._init, r = l(r._payload), n.type = r, l = n.tag = Jd(r), e = Me(r, e), l) {
          case 0:
            n = jo(null, n, r, e, t);
            break e;
          case 1:
            n = Ku(null, n, r, e, t);
            break e;
          case 11:
            n = Wu(null, n, r, e, t);
            break e;
          case 14:
            n = Qu(null, n, r, Me(r.type, e), t);
            break e;
        }
        throw Error(y(
          306,
          r,
          ""
        ));
      }
      return n;
    case 0:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Me(r, l), jo(e, n, r, l, t);
    case 1:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Me(r, l), Ku(e, n, r, l, t);
    case 3:
      e: {
        if (qa(n), e === null) throw Error(y(387));
        r = n.pendingProps, o = n.memoizedState, l = o.element, _a(e, n), nl(n, r, null, t);
        var i = n.memoizedState;
        if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, n.updateQueue.baseState = o, n.memoizedState = o, n.flags & 256) {
          l = ht(Error(y(423)), n), n = Yu(e, n, r, t, l);
          break e;
        } else if (r !== l) {
          l = ht(Error(y(424)), n), n = Yu(e, n, r, t, l);
          break e;
        } else for (Se = pn(n.stateNode.containerInfo.firstChild), Ee = n, V = !0, je = null, t = xa(n, null, r, t), n.child = t; t; ) t.flags = t.flags & -3 | 4096, t = t.sibling;
        else {
          if (dt(), r === l) {
            n = be(e, n, t);
            break e;
          }
          ce(e, n, r, t);
        }
        n = n.child;
      }
      return n;
    case 5:
      return Na(n), e === null && Ro(n), r = n.type, l = n.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, _o(r, l) ? i = null : o !== null && _o(r, o) && (n.flags |= 32), Ja(e, n), ce(e, n, i, t), n.child;
    case 6:
      return e === null && Ro(n), null;
    case 13:
      return ba(e, n, t);
    case 4:
      return xi(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = pt(n, null, r, t) : ce(e, n, r, t), n.child;
    case 11:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Me(r, l), Wu(e, n, r, l, t);
    case 7:
      return ce(e, n, n.pendingProps, t), n.child;
    case 8:
      return ce(e, n, n.pendingProps.children, t), n.child;
    case 12:
      return ce(e, n, n.pendingProps.children, t), n.child;
    case 10:
      e: {
        if (r = n.type._context, l = n.pendingProps, o = n.memoizedProps, i = l.value, I(br, r._currentValue), r._currentValue = i, o !== null) if ($e(o.value, i)) {
          if (o.children === l.children && !ye.current) {
            n = be(e, n, t);
            break e;
          }
        } else for (o = n.child, o !== null && (o.return = n); o !== null; ) {
          var u = o.dependencies;
          if (u !== null) {
            i = o.child;
            for (var s = u.firstContext; s !== null; ) {
              if (s.context === r) {
                if (o.tag === 1) {
                  s = Ge(-1, t & -t), s.tag = 2;
                  var c = o.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var p = c.pending;
                    p === null ? s.next = s : (s.next = p.next, p.next = s), c.pending = s;
                  }
                }
                o.lanes |= t, s = o.alternate, s !== null && (s.lanes |= t), Lo(
                  o.return,
                  t,
                  n
                ), u.lanes |= t;
                break;
              }
              s = s.next;
            }
          } else if (o.tag === 10) i = o.type === n.type ? null : o.child;
          else if (o.tag === 18) {
            if (i = o.return, i === null) throw Error(y(341));
            i.lanes |= t, u = i.alternate, u !== null && (u.lanes |= t), Lo(i, t, n), i = o.sibling;
          } else i = o.child;
          if (i !== null) i.return = o;
          else for (i = o; i !== null; ) {
            if (i === n) {
              i = null;
              break;
            }
            if (o = i.sibling, o !== null) {
              o.return = i.return, i = o;
              break;
            }
            i = i.return;
          }
          o = i;
        }
        ce(e, n, l.children, t), n = n.child;
      }
      return n;
    case 9:
      return l = n.type, r = n.pendingProps.children, st(n, t), l = Re(l), r = r(l), n.flags |= 1, ce(e, n, r, t), n.child;
    case 14:
      return r = n.type, l = Me(r, n.pendingProps), l = Me(r.type, l), Qu(e, n, r, l, t);
    case 15:
      return Ga(e, n, n.type, n.pendingProps, t);
    case 17:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Me(r, l), Fr(e, n), n.tag = 1, ge(r) ? (e = !0, Zr(n)) : e = !1, st(n, t), Ka(n, r, l), Mo(n, r, l, t), Fo(null, n, r, !0, e, t);
    case 19:
      return ec(e, n, t);
    case 22:
      return Za(e, n, t);
  }
  throw Error(y(156, n.tag));
};
function vc(e, n) {
  return Hs(e, n);
}
function Zd(e, n, t, r) {
  this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function ze(e, n, t, r) {
  return new Zd(e, n, t, r);
}
function $i(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Jd(e) {
  if (typeof e == "function") return $i(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ri) return 11;
    if (e === li) return 14;
  }
  return 2;
}
function yn(e, n) {
  var t = e.alternate;
  return t === null ? (t = ze(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
}
function Ar(e, n, t, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function") $i(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case Yn:
      return Mn(t.children, l, o, n);
    case ti:
      i = 8, l |= 8;
      break;
    case to:
      return e = ze(12, t, n, l | 2), e.elementType = to, e.lanes = o, e;
    case ro:
      return e = ze(13, t, n, l), e.elementType = ro, e.lanes = o, e;
    case lo:
      return e = ze(19, t, n, l), e.elementType = lo, e.lanes = o, e;
    case Ns:
      return Sl(t, l, o, n);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Cs:
          i = 10;
          break e;
        case _s:
          i = 9;
          break e;
        case ri:
          i = 11;
          break e;
        case li:
          i = 14;
          break e;
        case tn:
          i = 16, r = null;
          break e;
      }
      throw Error(y(130, e == null ? e : typeof e, ""));
  }
  return n = ze(i, t, n, l), n.elementType = e, n.type = r, n.lanes = o, n;
}
function Mn(e, n, t, r) {
  return e = ze(7, e, r, n), e.lanes = t, e;
}
function Sl(e, n, t, r) {
  return e = ze(22, e, r, n), e.elementType = Ns, e.lanes = t, e.stateNode = { isHidden: !1 }, e;
}
function bl(e, n, t) {
  return e = ze(6, e, null, n), e.lanes = t, e;
}
function eo(e, n, t) {
  return n = ze(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
}
function qd(e, n, t, r, l) {
  this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Dl(0), this.expirationTimes = Dl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Dl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Ai(e, n, t, r, l, o, i, u, s) {
  return e = new qd(e, n, t, u, s), n === 1 ? (n = 1, o === !0 && (n |= 8)) : n = 0, o = ze(3, null, null, n), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ei(o), e;
}
function bd(e, n, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Kn, key: r == null ? null : "" + r, children: e, containerInfo: n, implementation: t };
}
function yc(e) {
  if (!e) return wn;
  e = e._reactInternals;
  e: {
    if (Bn(e) !== e || e.tag !== 1) throw Error(y(170));
    var n = e;
    do {
      switch (n.tag) {
        case 3:
          n = n.stateNode.context;
          break e;
        case 1:
          if (ge(n.type)) {
            n = n.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      n = n.return;
    } while (n !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var t = e.type;
    if (ge(t)) return ya(e, t, n);
  }
  return n;
}
function gc(e, n, t, r, l, o, i, u, s) {
  return e = Ai(t, r, !0, e, l, o, i, u, s), e.context = yc(null), t = e.current, r = fe(), l = vn(t), o = Ge(r, l), o.callback = n ?? null, mn(t, o, l), e.current.lanes = l, or(e, l, r), we(e, r), e;
}
function El(e, n, t, r) {
  var l = n.current, o = fe(), i = vn(l);
  return t = yc(t), n.context === null ? n.context = t : n.pendingContext = t, n = Ge(o, i), n.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (n.callback = r), e = mn(l, n, i), e !== null && (Ie(e, l, i, o), Mr(e, l, i)), i;
}
function al(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function rs(e, n) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var t = e.retryLane;
    e.retryLane = t !== 0 && t < n ? t : n;
  }
}
function Ui(e, n) {
  rs(e, n), (e = e.alternate) && rs(e, n);
}
function ep() {
  return null;
}
var wc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Vi(e) {
  this._internalRoot = e;
}
xl.prototype.render = Vi.prototype.render = function(e) {
  var n = this._internalRoot;
  if (n === null) throw Error(y(409));
  El(e, n, null, null);
};
xl.prototype.unmount = Vi.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    $n(function() {
      El(null, e, null, null);
    }), n[Je] = null;
  }
};
function xl(e) {
  this._internalRoot = e;
}
xl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var n = Zs();
    e = { blockedOn: null, target: e, priority: n };
    for (var t = 0; t < ln.length && n !== 0 && n < ln[t].priority; t++) ;
    ln.splice(t, 0, e), t === 0 && qs(e);
  }
};
function Bi(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Cl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function ls() {
}
function np(e, n, t, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var c = al(i);
        o.call(c);
      };
    }
    var i = gc(n, r, e, 0, null, !1, !1, "", ls);
    return e._reactRootContainer = i, e[Je] = i.current, Gt(e.nodeType === 8 ? e.parentNode : e), $n(), i;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var c = al(s);
      u.call(c);
    };
  }
  var s = Ai(e, 0, !1, null, null, !1, !1, "", ls);
  return e._reactRootContainer = s, e[Je] = s.current, Gt(e.nodeType === 8 ? e.parentNode : e), $n(function() {
    El(n, s, t, r);
  }), s;
}
function _l(e, n, t, r, l) {
  var o = t._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var s = al(i);
        u.call(s);
      };
    }
    El(n, i, e, l);
  } else i = np(t, n, e, l, r);
  return al(i);
}
Xs = function(e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var t = Rt(n.pendingLanes);
        t !== 0 && (ui(n, t | 1), we(n, G()), !(M & 6) && (vt = G() + 500, En()));
      }
      break;
    case 13:
      $n(function() {
        var r = qe(e, 1);
        if (r !== null) {
          var l = fe();
          Ie(r, e, 1, l);
        }
      }), Ui(e, 1);
  }
};
si = function(e) {
  if (e.tag === 13) {
    var n = qe(e, 134217728);
    if (n !== null) {
      var t = fe();
      Ie(n, e, 134217728, t);
    }
    Ui(e, 134217728);
  }
};
Gs = function(e) {
  if (e.tag === 13) {
    var n = vn(e), t = qe(e, n);
    if (t !== null) {
      var r = fe();
      Ie(t, e, n, r);
    }
    Ui(e, n);
  }
};
Zs = function() {
  return j;
};
Js = function(e, n) {
  var t = j;
  try {
    return j = e, n();
  } finally {
    j = t;
  }
};
ho = function(e, n, t) {
  switch (n) {
    case "input":
      if (uo(e, t), n = t.name, t.type === "radio" && n != null) {
        for (t = e; t.parentNode; ) t = t.parentNode;
        for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
          var r = t[n];
          if (r !== e && r.form === e.form) {
            var l = hl(r);
            if (!l) throw Error(y(90));
            zs(r), uo(r, l);
          }
        }
      }
      break;
    case "textarea":
      Rs(e, t);
      break;
    case "select":
      n = t.value, n != null && lt(e, !!t.multiple, n, !1);
  }
};
Is = ji;
$s = $n;
var tp = { usingClientEntryPoint: !1, Events: [ur, Jn, hl, js, Fs, ji] }, Pt = { findFiberByHostInstance: zn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, rp = { bundleType: Pt.bundleType, version: Pt.version, rendererPackageName: Pt.rendererPackageName, rendererConfig: Pt.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: en.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Vs(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Pt.findFiberByHostInstance || ep, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Pr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Pr.isDisabled && Pr.supportsFiber) try {
    fl = Pr.inject(rp), He = Pr;
  } catch {
  }
}
Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tp;
Ce.createPortal = function(e, n) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Bi(n)) throw Error(y(200));
  return bd(e, n, null, t);
};
Ce.createRoot = function(e, n) {
  if (!Bi(e)) throw Error(y(299));
  var t = !1, r = "", l = wc;
  return n != null && (n.unstable_strictMode === !0 && (t = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), n = Ai(e, 1, !1, null, null, t, !1, r, l), e[Je] = n.current, Gt(e.nodeType === 8 ? e.parentNode : e), new Vi(n);
};
Ce.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var n = e._reactInternals;
  if (n === void 0)
    throw typeof e.render == "function" ? Error(y(188)) : (e = Object.keys(e).join(","), Error(y(268, e)));
  return e = Vs(n), e = e === null ? null : e.stateNode, e;
};
Ce.flushSync = function(e) {
  return $n(e);
};
Ce.hydrate = function(e, n, t) {
  if (!Cl(n)) throw Error(y(200));
  return _l(null, e, n, !0, t);
};
Ce.hydrateRoot = function(e, n, t) {
  if (!Bi(e)) throw Error(y(405));
  var r = t != null && t.hydratedSources || null, l = !1, o = "", i = wc;
  if (t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), n = gc(n, null, e, 1, t ?? null, l, !1, o, i), e[Je] = n.current, Gt(e), r) for (e = 0; e < r.length; e++) t = r[e], l = t._getVersion, l = l(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, l] : n.mutableSourceEagerHydrationData.push(
    t,
    l
  );
  return new xl(n);
};
Ce.render = function(e, n, t) {
  if (!Cl(n)) throw Error(y(200));
  return _l(null, e, n, !1, t);
};
Ce.unmountComponentAtNode = function(e) {
  if (!Cl(e)) throw Error(y(40));
  return e._reactRootContainer ? ($n(function() {
    _l(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Je] = null;
    });
  }), !0) : !1;
};
Ce.unstable_batchedUpdates = ji;
Ce.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
  if (!Cl(t)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return _l(e, n, t, !1, r);
};
Ce.version = "18.3.1-next-f1338f8080-20240426";
function kc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kc);
    } catch (e) {
      console.error(e);
    }
}
kc(), ks.exports = Ce;
var lp = ks.exports, Sc, os = lp;
Sc = os.createRoot, os.hydrateRoot;
var Ec = { exports: {} }, op = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", ip = op, up = ip;
function xc() {
}
function Cc() {
}
Cc.resetWarningCache = xc;
var sp = function() {
  function e(r, l, o, i, u, s) {
    if (s !== up) {
      var c = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw c.name = "Invariant Violation", c;
    }
  }
  e.isRequired = e;
  function n() {
    return e;
  }
  var t = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: n,
    element: e,
    elementType: e,
    instanceOf: n,
    node: e,
    objectOf: n,
    oneOf: n,
    oneOfType: n,
    shape: n,
    exact: n,
    checkPropTypes: Cc,
    resetWarningCache: xc
  };
  return t.PropTypes = t, t;
};
Ec.exports = sp();
var ap = Ec.exports;
const P = /* @__PURE__ */ Xo(ap);
var _c = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var n = {}.hasOwnProperty;
    function t() {
      for (var o = "", i = 0; i < arguments.length; i++) {
        var u = arguments[i];
        u && (o = l(o, r(u)));
      }
      return o;
    }
    function r(o) {
      if (typeof o == "string" || typeof o == "number")
        return o;
      if (typeof o != "object")
        return "";
      if (Array.isArray(o))
        return t.apply(null, o);
      if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
        return o.toString();
      var i = "";
      for (var u in o)
        n.call(o, u) && o[u] && (i = l(i, u));
      return i;
    }
    function l(o, i) {
      return i ? o ? o + " " + i : o + i : o;
    }
    e.exports ? (t.default = t, e.exports = t) : window.classNames = t;
  })();
})(_c);
var cp = _c.exports;
const An = /* @__PURE__ */ Xo(cp);
function Un() {
  return Un = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, Un.apply(null, arguments);
}
function Nl(e, n) {
  if (e == null) return {};
  var t = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (n.indexOf(r) >= 0) continue;
    t[r] = e[r];
  }
  return t;
}
var Hi = /* @__PURE__ */ D.createContext({});
Hi.Consumer;
Hi.Provider;
function Wi(e, n) {
  var t = A.useContext(Hi);
  return e || t[n] || n;
}
function fp() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  return n.filter(function(r) {
    return r != null;
  }).reduce(function(r, l) {
    if (typeof l != "function")
      throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
    return r === null ? l : function() {
      for (var i = arguments.length, u = new Array(i), s = 0; s < i; s++)
        u[s] = arguments[s];
      r.apply(this, u), l.apply(this, u);
    };
  }, null);
}
var dp = ["as", "disabled", "onKeyDown"];
function is(e) {
  return !e || e.trim() === "#";
}
var Nc = /* @__PURE__ */ D.forwardRef(function(e, n) {
  var t = e.as, r = t === void 0 ? "a" : t, l = e.disabled, o = e.onKeyDown, i = Nl(e, dp), u = function(p) {
    var h = i.href, m = i.onClick;
    if ((l || is(h)) && p.preventDefault(), l) {
      p.stopPropagation();
      return;
    }
    m && m(p);
  }, s = function(p) {
    p.key === " " && (p.preventDefault(), u(p));
  };
  return is(i.href) && (i.role = i.role || "button", i.href = i.href || "#"), l && (i.tabIndex = -1, i["aria-disabled"] = !0), /* @__PURE__ */ D.createElement(r, Un({
    ref: n
  }, i, {
    onClick: u,
    onKeyDown: fp(s, o)
  }));
});
Nc.displayName = "SafeAnchor";
var pp = ["bsPrefix", "variant", "size", "active", "className", "block", "type", "as"], mp = {
  variant: "primary",
  active: !1,
  disabled: !1
}, Qi = /* @__PURE__ */ D.forwardRef(function(e, n) {
  var t = e.bsPrefix, r = e.variant, l = e.size, o = e.active, i = e.className, u = e.block, s = e.type, c = e.as, p = Nl(e, pp), h = Wi(t, "btn"), m = An(i, h, o && "active", r && h + "-" + r, u && h + "-block", l && h + "-" + l);
  if (p.href)
    return /* @__PURE__ */ D.createElement(Nc, Un({}, p, {
      as: c,
      ref: n,
      className: An(m, p.disabled && "disabled")
    }));
  n && (p.ref = n), s ? p.type = s : c || (p.type = "button");
  var g = c || "button";
  return /* @__PURE__ */ D.createElement(g, Un({}, p, {
    className: m
  }));
});
Qi.displayName = "Button";
Qi.defaultProps = mp;
var hp = ["bsPrefix", "size", "toggle", "vertical", "className", "as"], vp = {
  vertical: !1,
  toggle: !1,
  role: "group"
}, Ki = /* @__PURE__ */ D.forwardRef(function(e, n) {
  var t = e.bsPrefix, r = e.size, l = e.toggle, o = e.vertical, i = e.className, u = e.as, s = u === void 0 ? "div" : u, c = Nl(e, hp), p = Wi(t, "btn-group"), h = p;
  return o && (h = p + "-vertical"), /* @__PURE__ */ D.createElement(s, Un({}, c, {
    ref: n,
    className: An(i, h, r && p + "-" + r, l && p + "-toggle")
  }));
});
Ki.displayName = "ButtonGroup";
Ki.defaultProps = vp;
var yp = ["bsPrefix", "className"], gp = {
  role: "toolbar"
}, Yi = /* @__PURE__ */ D.forwardRef(function(e, n) {
  var t = e.bsPrefix, r = e.className, l = Nl(e, yp), o = Wi(t, "btn-toolbar");
  return /* @__PURE__ */ D.createElement("div", Un({}, l, {
    ref: n,
    className: An(r, o)
  }));
});
Yi.displayName = "ButtonToolbar";
Yi.defaultProps = gp;
let Ln = /* @__PURE__ */ function(e) {
  return e.MOVED = "MOVED", e.REMOVED = "REMOVED", e.FORMAT = "FORMAT", e.MOVED_AND_FORMAT = "MOVED_AND_FORMAT", e;
}({});
function Pc(e, n, t) {
  class r extends D.Component {
    constructor(o) {
      super(o), this.transformProps = this.transformProps.bind(this);
    }
    warn(o) {
    }
    transformProps(o, i) {
      if (t[i] === void 0)
        return o[i] = this.props[i], o;
      const {
        deprType: u,
        newName: s,
        expect: c,
        transform: p,
        message: h
      } = t[i];
      switch (u) {
        case Ln.MOVED:
          this.warn(`${n}: The prop '${i}' has been moved to '${s}'.`), o[s] = this.props[i];
          break;
        case Ln.REMOVED:
          this.warn(`${n}: The prop '${i}' has been removed. '${h}'`);
          break;
        case Ln.FORMAT:
          c(this.props[i]) ? o[i] = this.props[i] : (this.warn(`${n}: The prop '${i}' expects a new format. ${h}`), o[i] = p(this.props[i], this.props));
          break;
        case Ln.MOVED_AND_FORMAT: {
          const m = this.props[i];
          let g = `${n}: The prop '${i}' has been moved to '${s}'`;
          c && !c(m) && (g += " and expects a new format"), g += h ? `. ${h}` : "", this.warn(g), o[s] = p ? p(m, this.props) : m;
          break;
        }
        default:
          o[i] = this.props[i];
          break;
      }
      return o;
    }
    render() {
      const {
        children: o,
        ...i
      } = Object.keys(this.props).reduce(this.transformProps, {});
      return /* @__PURE__ */ D.createElement(e, {
        ...i
      }, this.props.children || o);
    }
  }
  return (
    // eslint-disable-next-line react/static-property-placement
    Zi(r, "displayName", `withDeprecatedProps(${n})`), r
  );
}
class Xi extends D.Component {
  constructor(n) {
    super(n);
    const {
      onBlur: t,
      onKeyDown: r
    } = n;
    this.onBlur = t.bind(this), this.onKeyDown = r.bind(this), this.onClick = this.onClick.bind(this), this.setRefs = this.setRefs.bind(this);
  }
  /*
    The button component is given focus explicitly in its onClick to account
    for the fact that an HTML <button> element in Firefox and Safari does not get
    focus on onClick.
     See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button.
  */
  onClick(n) {
    this.buttonRef.focus(), this.props.onClick(n);
  }
  /*
    The button component needs a ref to itself to be able to force
    focus in its onClick function (buttonRef). It also needs to accept
    a callback function from parent components to give those parents
    a reference to their child button (e.g. for the modal component).
    Therefore, both have been wrapped in a function bound on the class,
    since one cannot set two ref attributes on a component.
  */
  setRefs(n) {
    this.buttonRef = n, this.props.inputRef(n);
  }
  render() {
    const {
      buttonType: n,
      className: t,
      children: r,
      isClose: l,
      type: o,
      /* inputRef is not used directly in the render, but it needs to be assigned
        here to prevent it from being passed to the HTML button component as part
        of other.
      */
      inputRef: i,
      ...u
    } = this.props;
    return /* @__PURE__ */ D.createElement("button", {
      ...u,
      className: An(["btn", t], {
        [`btn-${n}`]: n !== void 0
      }, {
        close: l
      }),
      onBlur: this.onBlur,
      onClick: this.onClick,
      onKeyDown: this.onKeyDown,
      type: o,
      ref: this.setRefs
    }, r);
  }
}
const wp = {
  /** Used to determine the type of button to be rendered.  See [Bootstrap's buttons documentation](https://getbootstrap.com/docs/4.0/components/buttons/) for a list of applicable button types. For example, `buttonType="light"`. The default is `undefined`. */
  buttonType: P.string,
  /** Specifies Bootstrap class names to apply to the button. See [Bootstrap's buttons documentation](https://getbootstrap.com/docs/4.0/components/buttons/) for a list of applicable class names. The default is an empty array. */
  className: P.string,
  /** Specifies the text that is displayed within the button. */
  children: P.node.isRequired,
  // eslint-disable-next-line max-len
  /** A function that defines a reference for the button. An example `inputRef` from the calling component could look something like: `inputRef={(input) => { this.button = input; }}`. The default is an empty function. */
  inputRef: P.oneOfType([P.func, P.shape({
    current: P.instanceOf(P.element)
  })]),
  /** Used to determine if the button is a "Close" style button to leverage bootstrap styling. Example use case is with the Status Alert [dismiss button](https://getbootstrap.com/docs/4.0/components/alerts/#dismissing). The default is false. */
  isClose: P.bool,
  // eslint-disable-next-line max-len
  /** A function that would specify what the button should do when the `onBlur` event is triggered. For example, the button could change in color or `buttonType` when focus is changed. The default is an empty function. */
  onBlur: P.func,
  // eslint-disable-next-line max-len
  /** A function that would specify what the button should do when the `onClick` event is triggered. For example, the button could launch a `Modal`. The default is an empty function. */
  onClick: P.func,
  // eslint-disable-next-line max-len
  /** A function that would specify what the button should do when the `onKeyDown` event is triggered.  For example, this could handle using the `Escape` key to trigger the button's action. The default is an empty function. */
  onKeyDown: P.func,
  /** Used to set the `type` attribute on the `button` tag.  The default type is `button`. */
  type: P.string,
  /** Specifies variant to use. */
  variant: P.oneOf(["primary", "secondary", "success", "danger", "warning", "info", "dark", "light", "link", "outline-primary", "outline-secondary", "outline-success", "outline-danger", "outline-warning", "outline-info", "outline-dark", "outline-light"])
};
Xi.propTypes = wp;
Xi.defaultProps = {
  buttonType: void 0,
  className: void 0,
  inputRef: () => {
  },
  isClose: !1,
  onBlur: () => {
  },
  onKeyDown: () => {
  },
  onClick: () => {
  },
  type: "button",
  variant: "outline-primary"
};
const kp = Pc(Xi, "Button", {
  label: {
    deprType: Ln.MOVED,
    newName: "children"
  },
  className: {
    deprType: Ln.FORMAT,
    expect: (e) => typeof e == "string",
    transform: (e) => Array.isArray(e) ? e.join(" ") : e,
    message: "It should be a string."
  }
});
let us = 0;
const Sp = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "id";
  return us += 1, `${e}${us}`;
};
function Gi(e) {
  let {
    src: n,
    id: t,
    className: r,
    hidden: l,
    screenReaderText: o,
    svgAttrs: i,
    size: u,
    ...s
  } = e;
  if (n) {
    const c = i["aria-label"] || i["aria-labelledby"], p = {
      ...i
    };
    return c || (p["aria-label"] = void 0, p["aria-hidden"] = !0), /* @__PURE__ */ D.createElement("span", {
      className: An("pgn__icon", {
        [`pgn__icon__${u}`]: !!u
      }, r),
      id: t,
      ...s
    }, /* @__PURE__ */ D.createElement(n, {
      role: "img",
      focusable: !1,
      ...p
    }), o && /* @__PURE__ */ D.createElement("span", {
      className: "sr-only"
    }, o));
  }
  return /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement("span", {
    id: t || Sp("Icon"),
    className: r,
    "aria-hidden": l
  }), o && /* @__PURE__ */ D.createElement("span", {
    className: "sr-only"
  }, o));
}
Gi.propTypes = {
  /**
   * An icon component to render.
   * Example import of a Paragon icon component: `import { Check } from '@openedx/paragon/icons';`
   */
  src: P.elementType,
  /** HTML element attributes to pass through to the underlying svg element */
  svgAttrs: P.shape({
    "aria-label": P.string,
    "aria-labelledby": P.string
  }),
  /**
   * the `id` property of the Icon element, by default this value is generated
   * with the `newId` function with the `prefix` of `Icon`.
   */
  id: P.string,
  /** The size of the icon. */
  size: P.oneOf(["xs", "sm", "md", "lg"]),
  /** A class name that will define what the Icon looks like. */
  className: P.string,
  /**
   * a boolean that determines the value of `aria-hidden` attribute on the Icon span,
   * this value is `true` by default.
   */
  hidden: P.bool,
  /**
   * a string or an element that will be used on a secondary span leveraging the `sr-only` style
   * for screenreader only text, this value is `undefined` by default. This value is recommended for use unless
   * the Icon is being used in a way that is purely decorative or provides no additional context for screen
   * reader users. This field should be thought of the same way an `alt` attribute would be used for `image` tags.
   */
  screenReaderText: P.oneOfType([P.string, P.element])
};
Gi.defaultProps = {
  src: null,
  svgAttrs: {},
  id: void 0,
  hidden: !0,
  screenReaderText: void 0,
  size: void 0,
  className: void 0
};
const Pn = Pc(Gi, "Icon", {
  className: {
    deprType: Ln.FORMAT,
    expect: (e) => typeof e == "string",
    transform: (e) => Array.isArray(e) ? e.join(" ") : e,
    message: "It should be a string."
  }
}), an = /* @__PURE__ */ D.forwardRef((e, n) => {
  let {
    children: t,
    iconAfter: r,
    iconBefore: l,
    size: o,
    ...i
  } = e;
  return /* @__PURE__ */ D.createElement(Qi, {
    size: o,
    ...i,
    className: An(i.className),
    ref: n
  }, l && /* @__PURE__ */ D.createElement(Pn, {
    className: "btn-icon-before",
    size: o,
    src: l
  }), t, r && /* @__PURE__ */ D.createElement(Pn, {
    className: "btn-icon-after",
    size: o,
    src: r
  }));
});
an.propTypes = {
  /** Specifies class name to apply to the button */
  className: P.string,
  /** Disables the Button, preventing mouse events, even if the underlying component is an `<a>` element */
  disabled: P.bool,
  /** Specifies the text that is displayed within the button. */
  children: P.node.isRequired,
  /** A function that would specify what the button should do when the `onClick` event is triggered.
   * For example, the button could launch a `Modal`. The default is an empty function. */
  onClick: P.func,
  /** A function that would specify what the button should do when the `onKeyDown` event is triggered.
   * For example, this could handle using the `Escape` key to trigger the button's action.
   * The default is an empty function. */
  onKeyDown: P.func,
  /** Used to set the `type` attribute on the `button` tag.  The default type is `button`. */
  type: P.string,
  /** Specifies variant to use.
   * Can be on of the base variants: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `dark`,
   * `light`, `link`
   *
   * as well as one of the customized variants (= base variant prefixed with `inverse-`, `outline-`
   * or `inverse-outline-`)
   * */
  variant: P.string,
  /** An icon component to render.
  * Example import of a Paragon icon component: `import { Check } from '@openedx/paragon/icons';` */
  iconBefore: P.elementType,
  /** An icon component to render.
  * Example import of a Paragon icon component: `import { Check } from '@openedx/paragon/icons';` */
  iconAfter: P.elementType
  // The 'as' type casting above is required for TypeScript checking, because the 'PropTypes.elementType' type normally
  // allows strings as a value (for use cases like 'div') but we don't support that for <Icon />/iconBefore/iconAfter.
  // The React TypeScript type definitions are more specific (React.ComponentType vs React.ElementType).
};
an.defaultProps = {
  ...an.defaultProps,
  children: void 0,
  className: void 0,
  iconBefore: void 0,
  iconAfter: void 0,
  disabled: !1
};
an.Deprecated = kp;
const zc = /* @__PURE__ */ D.forwardRef((e, n) => {
  let {
    size: t,
    ...r
  } = e;
  return /* @__PURE__ */ D.createElement(Ki, {
    size: t,
    ...r,
    ref: n
  });
});
zc.propTypes = {
  /** Specifies element type for this component. */
  as: P.elementType,
  /** An ARIA role describing the button group. */
  role: P.string,
  /** Specifies the size for all Buttons in the group. */
  size: P.oneOf(["sm", "md", "lg", "inline"]),
  /** Display as a button toggle group. */
  toggle: P.bool,
  /** Specifies if the set of Buttons should appear vertically stacked. */
  vertical: P.bool,
  /** Overrides underlying component base CSS class name */
  bsPrefix: P.string
};
zc.defaultProps = {
  as: "div",
  role: "group",
  toggle: !1,
  vertical: !1,
  bsPrefix: "btn-group",
  size: "md"
};
const Tc = /* @__PURE__ */ D.forwardRef((e, n) => /* @__PURE__ */ D.createElement(Yi, {
  ...e,
  ref: n
}));
Tc.propTypes = {
  /** An ARIA role describing the button group. */
  role: P.string,
  /** Overrides underlying component base CSS class name */
  bsPrefix: P.string
};
Tc.defaultProps = {
  role: "toolbar",
  bsPrefix: "btn-toolbar"
};
const Ep = (e) => /* @__PURE__ */ A.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ A.createElement("path", {
  d: "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59Z",
  fill: "currentColor"
})), xp = (e) => /* @__PURE__ */ A.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ A.createElement("path", {
  d: "M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6Z",
  fill: "currentColor"
})), ss = (e) => /* @__PURE__ */ A.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  ...e
}, /* @__PURE__ */ A.createElement("path", {
  d: "M9 7H7v2h2V7zm0 4H7v2h2v-2zm4 4h-2v2h2v-2zm0-12h-2v2h2V3zM9 3H7v2h2V3zm12 0h-2v2h2V3zm0 12h-2v2h2v-2zM9 15H7v2h2v-2zm10-2h2v-2h-2v2zm0-4h2V7h-2v2zM5 7H3v14h14v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z",
  fill: "currentColor"
})), Cp = (e) => /* @__PURE__ */ A.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  ...e
}, /* @__PURE__ */ A.createElement("path", {
  d: "M10.59 9.17 5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z",
  fill: "currentColor"
}));
function _p(e) {
  if (!e)
    return "";
  if (typeof document > "u")
    return e;
  const n = document.createElement("div");
  return n.innerHTML = e, (n.textContent || "").replace(/\s+/g, " ").trim();
}
function Np({ title: e, flashcards: n, styling: t }) {
  const [r, l] = A.useState(-1), [o, i] = A.useState(!1), [u, s] = A.useState(!1), [c, p] = A.useState(!1), [h, m] = A.useState(!1), [g, w] = A.useState(n), [k, F] = A.useState(""), f = A.useRef(null), a = A.useRef(null), d = A.useMemo(() => {
    if (!u || r < 0 || r >= g.length)
      return "";
    const H = g[r];
    if (!H)
      return "";
    const ae = g.length, Ae = o ? "Answer" : "Question", Hn = o ? H.back : H.front, Wn = _p(Hn);
    return `Card ${r + 1} of ${ae}. ${Ae}.${Wn ? ` ${Wn}` : ""}`;
  }, [r, o, u, g]), v = (H) => {
    const ae = [...H];
    for (let Ae = ae.length - 1; Ae > 0; Ae--) {
      const Hn = Math.floor(Math.random() * (Ae + 1));
      [ae[Ae], ae[Hn]] = [ae[Hn], ae[Ae]];
    }
    return ae;
  }, S = () => {
    m(!0), s(!0), l(0), i(!1);
  }, _ = () => {
    const H = v(n);
    w(H), u && (m(!0), l(0), i(!1));
  }, C = (H) => {
    m(!0), p(!0), i(!1), l(H), setTimeout(() => p(!1), 50);
  }, N = () => {
    r < g.length - 1 && C(r + 1);
  }, B = () => {
    r > 0 && C(r - 1);
  }, T = () => {
    i(!o);
  };
  if (A.useEffect(() => {
    if (!u || !h)
      return;
    const H = f.current;
    if (H)
      try {
        H.focus({ preventScroll: !0 });
      } catch {
        H.focus();
      } finally {
        m(!1);
      }
  }, [r, u, h]), A.useEffect(() => {
    if (a.current !== null && (window.clearTimeout(a.current), a.current = null), !d) {
      F("");
      return;
    }
    F(""), a.current = window.setTimeout(() => {
      F(d), a.current = null;
    }, 0);
  }, [d]), !u)
    return /* @__PURE__ */ O.jsxs("div", { className: "flashcards_block", children: [
      /* @__PURE__ */ O.jsxs("div", { className: "fc-number", "aria-label": "Flashcard counter", children: [
        "0 / ",
        /* @__PURE__ */ O.jsx("span", { className: "fc-total", children: g.length })
      ] }),
      /* @__PURE__ */ O.jsx(
        "div",
        {
          className: "fc-title",
          "aria-label": "Flashcard deck title",
          children: e
        }
      ),
      /* @__PURE__ */ O.jsx("hr", {}),
      /* @__PURE__ */ O.jsx("div", { className: "visually-hidden", role: "status", "aria-atomic": "true", "aria-label": "Flashcard announcement", children: k }),
      /* @__PURE__ */ O.jsxs("div", { className: "fc-start-controls", children: [
        /* @__PURE__ */ O.jsxs(
          an,
          {
            className: "shuffle-btn",
            onClick: _,
            variant: "outline-primary",
            children: [
              /* @__PURE__ */ O.jsx(Pn, { src: Cp, size: "sm" }),
              "Shuffle"
            ]
          }
        ),
        /* @__PURE__ */ O.jsx(
          an,
          {
            className: "start-btn",
            onClick: S,
            "aria-label": "Start flashcard deck",
            children: "START"
          }
        )
      ] })
    ] });
  const me = g[r];
  return /* @__PURE__ */ O.jsxs("div", { className: "flashcards_block", children: [
    /* @__PURE__ */ O.jsxs("div", { className: "fc-number", "aria-label": "Flashcard counter", children: [
      /* @__PURE__ */ O.jsx("span", { className: "current-fc", children: r + 1 }),
      " / ",
      /* @__PURE__ */ O.jsx("span", { className: "fc-total", children: g.length })
    ] }),
    /* @__PURE__ */ O.jsx(
      "div",
      {
        className: "fc-title",
        "aria-label": "Flashcard deck title",
        children: e
      }
    ),
    /* @__PURE__ */ O.jsx("hr", {}),
    /* @__PURE__ */ O.jsx("div", { className: "visually-hidden", role: "status", "aria-atomic": "true", "aria-label": "Flashcard announcement", children: k }),
    /* @__PURE__ */ O.jsxs("div", { className: "fc-container", children: [
      /* @__PURE__ */ O.jsx(
        an,
        {
          className: "nav-btn prev-btn",
          onClick: B,
          disabled: r === 0,
          variant: "light",
          "aria-label": "Previous card",
          children: /* @__PURE__ */ O.jsx(Pn, { src: Ep, size: "sm" })
        }
      ),
      /* @__PURE__ */ O.jsxs(
        "div",
        {
          className: `fc-card ${o ? "is-flipped" : ""} ${c ? "is-navigating" : ""}`,
          ref: f,
          onClick: T,
          onKeyDown: (H) => {
            (H.key === "Enter" || H.key === " ") && (H.preventDefault(), T());
          },
          role: "button",
          tabIndex: 0,
          "aria-label": `Flashcard ${r + 1} of ${g.length}. Click to flip.`,
          children: [
            /* @__PURE__ */ O.jsxs(
              "div",
              {
                className: "fc-card-front",
                "aria-hidden": o,
                inert: o ? "" : void 0,
                style: {
                  borderColor: t.borderColor,
                  backgroundColor: t.backgroundColor
                },
                children: [
                  /* @__PURE__ */ O.jsx("div", { className: "fc-flip-icon", children: /* @__PURE__ */ O.jsx(Pn, { src: ss, size: "sm" }) }),
                  /* @__PURE__ */ O.jsx("p", { className: "label", style: { color: t.textColor }, children: "Question" }),
                  /* @__PURE__ */ O.jsx(
                    "div",
                    {
                      className: "card-content",
                      style: {
                        color: t.textColor,
                        fontSize: t.fontSize
                      },
                      dangerouslySetInnerHTML: { __html: me.front }
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ O.jsxs(
              "div",
              {
                className: "fc-card-back",
                "aria-hidden": !o,
                inert: o ? void 0 : "",
                style: {
                  borderColor: t.borderColor,
                  backgroundColor: t.backgroundColor
                },
                children: [
                  /* @__PURE__ */ O.jsx("div", { className: "fc-flip-icon", children: /* @__PURE__ */ O.jsx(Pn, { src: ss, size: "sm" }) }),
                  /* @__PURE__ */ O.jsx("p", { className: "label", style: { color: t.textColor }, children: "Answer" }),
                  /* @__PURE__ */ O.jsx(
                    "div",
                    {
                      className: "card-content",
                      style: {
                        color: t.textColor,
                        fontSize: t.fontSize
                      },
                      dangerouslySetInnerHTML: { __html: me.back }
                    }
                  )
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ O.jsx(
        an,
        {
          className: "nav-btn next-btn",
          onClick: N,
          disabled: r === g.length - 1,
          variant: "light",
          "aria-label": "Next card",
          children: /* @__PURE__ */ O.jsx(Pn, { src: xp, size: "sm" })
        }
      )
    ] })
  ] });
}
const zp = (e, { title: n, flashcards: t, styling: r }) => {
  if (!e)
    return;
  const l = e[0] || e;
  Sc(l).render(
    /* @__PURE__ */ O.jsx(A.StrictMode, { children: /* @__PURE__ */ O.jsx(Np, { title: n, flashcards: t, styling: r }) })
  );
};
export {
  zp as renderBlock
};
