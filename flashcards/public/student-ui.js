var Rc = Object.defineProperty;
var Lc = (e, n, t) => n in e ? Rc(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var Gi = (e, n, t) => Lc(e, typeof n != "symbol" ? n + "" : n, t);
function Ko(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ss = { exports: {} }, ul = {}, as = { exports: {} }, R = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nr = Symbol.for("react.element"), Oc = Symbol.for("react.portal"), Mc = Symbol.for("react.fragment"), Dc = Symbol.for("react.strict_mode"), jc = Symbol.for("react.profiler"), Fc = Symbol.for("react.provider"), Ic = Symbol.for("react.context"), $c = Symbol.for("react.forward_ref"), Uc = Symbol.for("react.suspense"), Ac = Symbol.for("react.memo"), Vc = Symbol.for("react.lazy"), Zi = Symbol.iterator;
function Bc(e) {
  return e === null || typeof e != "object" ? null : (e = Zi && e[Zi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var cs = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, fs = Object.assign, ds = {};
function dt(e, n, t) {
  this.props = e, this.context = n, this.refs = ds, this.updater = t || cs;
}
dt.prototype.isReactComponent = {};
dt.prototype.setState = function(e, n) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, n, "setState");
};
dt.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ps() {
}
ps.prototype = dt.prototype;
function Yo(e, n, t) {
  this.props = e, this.context = n, this.refs = ds, this.updater = t || cs;
}
var Xo = Yo.prototype = new ps();
Xo.constructor = Yo;
fs(Xo, dt.prototype);
Xo.isPureReactComponent = !0;
var Ji = Array.isArray, ms = Object.prototype.hasOwnProperty, Go = { current: null }, hs = { key: !0, ref: !0, __self: !0, __source: !0 };
function vs(e, n, t) {
  var r, l = {}, o = null, i = null;
  if (n != null) for (r in n.ref !== void 0 && (i = n.ref), n.key !== void 0 && (o = "" + n.key), n) ms.call(n, r) && !hs.hasOwnProperty(r) && (l[r] = n[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = t;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: nr, type: e, key: o, ref: i, props: l, _owner: Go.current };
}
function Hc(e, n) {
  return { $$typeof: nr, type: e.type, key: n, ref: e.ref, props: e.props, _owner: e._owner };
}
function Zo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === nr;
}
function Wc(e) {
  var n = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(t) {
    return n[t];
  });
}
var qi = /\/+/g;
function Pl(e, n) {
  return typeof e == "object" && e !== null && e.key != null ? Wc("" + e.key) : n.toString(36);
}
function _r(e, n, t, r, l) {
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
        case nr:
        case Oc:
          i = !0;
      }
  }
  if (i) return i = e, l = l(i), e = r === "" ? "." + Pl(i, 0) : r, Ji(l) ? (t = "", e != null && (t = e.replace(qi, "$&/") + "/"), _r(l, n, t, "", function(c) {
    return c;
  })) : l != null && (Zo(l) && (l = Hc(l, t + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(qi, "$&/") + "/") + e)), n.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Ji(e)) for (var u = 0; u < e.length; u++) {
    o = e[u];
    var s = r + Pl(o, u);
    i += _r(o, n, t, s, l);
  }
  else if (s = Bc(e), typeof s == "function") for (e = s.call(e), u = 0; !(o = e.next()).done; ) o = o.value, s = r + Pl(o, u++), i += _r(o, n, t, s, l);
  else if (o === "object") throw n = String(e), Error("Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function sr(e, n, t) {
  if (e == null) return e;
  var r = [], l = 0;
  return _r(e, r, "", "", function(o) {
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
var ce = { current: null }, Nr = { transition: null }, Kc = { ReactCurrentDispatcher: ce, ReactCurrentBatchConfig: Nr, ReactCurrentOwner: Go };
function ys() {
  throw Error("act(...) is not supported in production builds of React.");
}
R.Children = { map: sr, forEach: function(e, n, t) {
  sr(e, function() {
    n.apply(this, arguments);
  }, t);
}, count: function(e) {
  var n = 0;
  return sr(e, function() {
    n++;
  }), n;
}, toArray: function(e) {
  return sr(e, function(n) {
    return n;
  }) || [];
}, only: function(e) {
  if (!Zo(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
R.Component = dt;
R.Fragment = Mc;
R.Profiler = jc;
R.PureComponent = Yo;
R.StrictMode = Dc;
R.Suspense = Uc;
R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kc;
R.act = ys;
R.cloneElement = function(e, n, t) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = fs({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (n != null) {
    if (n.ref !== void 0 && (o = n.ref, i = Go.current), n.key !== void 0 && (l = "" + n.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (s in n) ms.call(n, s) && !hs.hasOwnProperty(s) && (r[s] = n[s] === void 0 && u !== void 0 ? u[s] : n[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = t;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: nr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
R.createContext = function(e) {
  return e = { $$typeof: Ic, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Fc, _context: e }, e.Consumer = e;
};
R.createElement = vs;
R.createFactory = function(e) {
  var n = vs.bind(null, e);
  return n.type = e, n;
};
R.createRef = function() {
  return { current: null };
};
R.forwardRef = function(e) {
  return { $$typeof: $c, render: e };
};
R.isValidElement = Zo;
R.lazy = function(e) {
  return { $$typeof: Vc, _payload: { _status: -1, _result: e }, _init: Qc };
};
R.memo = function(e, n) {
  return { $$typeof: Ac, type: e, compare: n === void 0 ? null : n };
};
R.startTransition = function(e) {
  var n = Nr.transition;
  Nr.transition = {};
  try {
    e();
  } finally {
    Nr.transition = n;
  }
};
R.unstable_act = ys;
R.useCallback = function(e, n) {
  return ce.current.useCallback(e, n);
};
R.useContext = function(e) {
  return ce.current.useContext(e);
};
R.useDebugValue = function() {
};
R.useDeferredValue = function(e) {
  return ce.current.useDeferredValue(e);
};
R.useEffect = function(e, n) {
  return ce.current.useEffect(e, n);
};
R.useId = function() {
  return ce.current.useId();
};
R.useImperativeHandle = function(e, n, t) {
  return ce.current.useImperativeHandle(e, n, t);
};
R.useInsertionEffect = function(e, n) {
  return ce.current.useInsertionEffect(e, n);
};
R.useLayoutEffect = function(e, n) {
  return ce.current.useLayoutEffect(e, n);
};
R.useMemo = function(e, n) {
  return ce.current.useMemo(e, n);
};
R.useReducer = function(e, n, t) {
  return ce.current.useReducer(e, n, t);
};
R.useRef = function(e) {
  return ce.current.useRef(e);
};
R.useState = function(e) {
  return ce.current.useState(e);
};
R.useSyncExternalStore = function(e, n, t) {
  return ce.current.useSyncExternalStore(e, n, t);
};
R.useTransition = function() {
  return ce.current.useTransition();
};
R.version = "18.3.1";
as.exports = R;
var b = as.exports;
const D = /* @__PURE__ */ Ko(b);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yc = b, Xc = Symbol.for("react.element"), Gc = Symbol.for("react.fragment"), Zc = Object.prototype.hasOwnProperty, Jc = Yc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, qc = { key: !0, ref: !0, __self: !0, __source: !0 };
function gs(e, n, t) {
  var r, l = {}, o = null, i = null;
  t !== void 0 && (o = "" + t), n.key !== void 0 && (o = "" + n.key), n.ref !== void 0 && (i = n.ref);
  for (r in n) Zc.call(n, r) && !qc.hasOwnProperty(r) && (l[r] = n[r]);
  if (e && e.defaultProps) for (r in n = e.defaultProps, n) l[r] === void 0 && (l[r] = n[r]);
  return { $$typeof: Xc, type: e, key: o, ref: i, props: l, _owner: Jc.current };
}
ul.Fragment = Gc;
ul.jsx = gs;
ul.jsxs = gs;
ss.exports = ul;
var O = ss.exports, ws = { exports: {} }, Se = {}, ks = { exports: {} }, Ss = {};
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
  function n(C, z) {
    var T = C.length;
    C.push(z);
    e: for (; 0 < T; ) {
      var K = T - 1 >>> 1, J = C[K];
      if (0 < l(J, z)) C[K] = z, C[T] = J, T = K;
      else break e;
    }
  }
  function t(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var z = C[0], T = C.pop();
    if (T !== z) {
      C[0] = T;
      e: for (var K = 0, J = C.length, ir = J >>> 1; K < ir; ) {
        var kn = 2 * (K + 1) - 1, Nl = C[kn], Sn = kn + 1, ur = C[Sn];
        if (0 > l(Nl, T)) Sn < J && 0 > l(ur, Nl) ? (C[K] = ur, C[Sn] = T, K = Sn) : (C[K] = Nl, C[kn] = T, K = kn);
        else if (Sn < J && 0 > l(ur, T)) C[K] = ur, C[Sn] = T, K = Sn;
        else break e;
      }
    }
    return z;
  }
  function l(C, z) {
    var T = C.sortIndex - z.sortIndex;
    return T !== 0 ? T : C.id - z.id;
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
  var s = [], c = [], p = 1, h = null, m = 3, g = !1, w = !1, S = !1, F = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(C) {
    for (var z = t(c); z !== null; ) {
      if (z.callback === null) r(c);
      else if (z.startTime <= C) r(c), z.sortIndex = z.expirationTime, n(s, z);
      else break;
      z = t(c);
    }
  }
  function v(C) {
    if (S = !1, d(C), !w) if (t(s) !== null) w = !0, Cl(k);
    else {
      var z = t(c);
      z !== null && _l(v, z.startTime - C);
    }
  }
  function k(C, z) {
    w = !1, S && (S = !1, f(N), N = -1), g = !0;
    var T = m;
    try {
      for (d(z), h = t(s); h !== null && (!(h.expirationTime > z) || C && !Te()); ) {
        var K = h.callback;
        if (typeof K == "function") {
          h.callback = null, m = h.priorityLevel;
          var J = K(h.expirationTime <= z);
          z = e.unstable_now(), typeof J == "function" ? h.callback = J : h === t(s) && r(s), d(z);
        } else r(s);
        h = t(s);
      }
      if (h !== null) var ir = !0;
      else {
        var kn = t(c);
        kn !== null && _l(v, kn.startTime - z), ir = !1;
      }
      return ir;
    } finally {
      h = null, m = T, g = !1;
    }
  }
  var x = !1, _ = null, N = -1, Q = 5, L = -1;
  function Te() {
    return !(e.unstable_now() - L < Q);
  }
  function ht() {
    if (_ !== null) {
      var C = e.unstable_now();
      L = C;
      var z = !0;
      try {
        z = _(!0, C);
      } finally {
        z ? vt() : (x = !1, _ = null);
      }
    } else x = !1;
  }
  var vt;
  if (typeof a == "function") vt = function() {
    a(ht);
  };
  else if (typeof MessageChannel < "u") {
    var Xi = new MessageChannel(), Tc = Xi.port2;
    Xi.port1.onmessage = ht, vt = function() {
      Tc.postMessage(null);
    };
  } else vt = function() {
    F(ht, 0);
  };
  function Cl(C) {
    _ = C, x || (x = !0, vt());
  }
  function _l(C, z) {
    N = F(function() {
      C(e.unstable_now());
    }, z);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(C) {
    C.callback = null;
  }, e.unstable_continueExecution = function() {
    w || g || (w = !0, Cl(k));
  }, e.unstable_forceFrameRate = function(C) {
    0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Q = 0 < C ? Math.floor(1e3 / C) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return t(s);
  }, e.unstable_next = function(C) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var z = 3;
        break;
      default:
        z = m;
    }
    var T = m;
    m = z;
    try {
      return C();
    } finally {
      m = T;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(C, z) {
    switch (C) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        C = 3;
    }
    var T = m;
    m = C;
    try {
      return z();
    } finally {
      m = T;
    }
  }, e.unstable_scheduleCallback = function(C, z, T) {
    var K = e.unstable_now();
    switch (typeof T == "object" && T !== null ? (T = T.delay, T = typeof T == "number" && 0 < T ? K + T : K) : T = K, C) {
      case 1:
        var J = -1;
        break;
      case 2:
        J = 250;
        break;
      case 5:
        J = 1073741823;
        break;
      case 4:
        J = 1e4;
        break;
      default:
        J = 5e3;
    }
    return J = T + J, C = { id: p++, callback: z, priorityLevel: C, startTime: T, expirationTime: J, sortIndex: -1 }, T > K ? (C.sortIndex = T, n(c, C), t(s) === null && C === t(c) && (S ? (f(N), N = -1) : S = !0, _l(v, T - K))) : (C.sortIndex = J, n(s, C), w || g || (w = !0, Cl(k))), C;
  }, e.unstable_shouldYield = Te, e.unstable_wrapCallback = function(C) {
    var z = m;
    return function() {
      var T = m;
      m = z;
      try {
        return C.apply(this, arguments);
      } finally {
        m = T;
      }
    };
  };
})(Ss);
ks.exports = Ss;
var bc = ks.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ef = b, ke = bc;
function y(e) {
  for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++) n += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Es = /* @__PURE__ */ new Set(), $t = {};
function $n(e, n) {
  ot(e, n), ot(e + "Capture", n);
}
function ot(e, n) {
  for ($t[e] = n, e = 0; e < n.length; e++) Es.add(n[e]);
}
var Ye = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), bl = Object.prototype.hasOwnProperty, nf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, bi = {}, eu = {};
function tf(e) {
  return bl.call(eu, e) ? !0 : bl.call(bi, e) ? !1 : nf.test(e) ? eu[e] = !0 : (bi[e] = !0, !1);
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
function fe(e, n, t, r, l, o, i) {
  this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = o, this.removeEmptyString = i;
}
var re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  re[e] = new fe(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var n = e[0];
  re[n] = new fe(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  re[e] = new fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  re[e] = new fe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  re[e] = new fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  re[e] = new fe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  re[e] = new fe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  re[e] = new fe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  re[e] = new fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Jo = /[\-:]([a-z])/g;
function qo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var n = e.replace(
    Jo,
    qo
  );
  re[n] = new fe(n, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var n = e.replace(Jo, qo);
  re[n] = new fe(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var n = e.replace(Jo, qo);
  re[n] = new fe(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  re[e] = new fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
re.xlinkHref = new fe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  re[e] = new fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function bo(e, n, t, r) {
  var l = re.hasOwnProperty(n) ? re[n] : null;
  (l !== null ? l.type !== 0 : r || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (lf(n, t, l, r) && (t = null), r || l === null ? tf(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l.mustUseProperty ? e[l.propertyName] = t === null ? l.type === 3 ? !1 : "" : t : (n = l.attributeName, r = l.attributeNamespace, t === null ? e.removeAttribute(n) : (l = l.type, t = l === 3 || l === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var Je = ef.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ar = Symbol.for("react.element"), Vn = Symbol.for("react.portal"), Bn = Symbol.for("react.fragment"), ei = Symbol.for("react.strict_mode"), eo = Symbol.for("react.profiler"), xs = Symbol.for("react.provider"), Cs = Symbol.for("react.context"), ni = Symbol.for("react.forward_ref"), no = Symbol.for("react.suspense"), to = Symbol.for("react.suspense_list"), ti = Symbol.for("react.memo"), be = Symbol.for("react.lazy"), _s = Symbol.for("react.offscreen"), nu = Symbol.iterator;
function yt(e) {
  return e === null || typeof e != "object" ? null : (e = nu && e[nu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var H = Object.assign, zl;
function _t(e) {
  if (zl === void 0) try {
    throw Error();
  } catch (t) {
    var n = t.stack.trim().match(/\n( *(at )?)/);
    zl = n && n[1] || "";
  }
  return `
` + zl + e;
}
var Tl = !1;
function Rl(e, n) {
  if (!e || Tl) return "";
  Tl = !0;
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
    Tl = !1, Error.prepareStackTrace = t;
  }
  return (e = e ? e.displayName || e.name : "") ? _t(e) : "";
}
function of(e) {
  switch (e.tag) {
    case 5:
      return _t(e.type);
    case 16:
      return _t("Lazy");
    case 13:
      return _t("Suspense");
    case 19:
      return _t("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Rl(e.type, !1), e;
    case 11:
      return e = Rl(e.type.render, !1), e;
    case 1:
      return e = Rl(e.type, !0), e;
    default:
      return "";
  }
}
function ro(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Bn:
      return "Fragment";
    case Vn:
      return "Portal";
    case eo:
      return "Profiler";
    case ei:
      return "StrictMode";
    case no:
      return "Suspense";
    case to:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Cs:
      return (e.displayName || "Context") + ".Consumer";
    case xs:
      return (e._context.displayName || "Context") + ".Provider";
    case ni:
      var n = e.render;
      return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case ti:
      return n = e.displayName || null, n !== null ? n : ro(e.type) || "Memo";
    case be:
      n = e._payload, e = e._init;
      try {
        return ro(e(n));
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
      return ro(n);
    case 8:
      return n === ei ? "StrictMode" : "Mode";
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
function hn(e) {
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
function Ns(e) {
  var n = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
}
function sf(e) {
  var n = Ns(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n];
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
function cr(e) {
  e._valueTracker || (e._valueTracker = sf(e));
}
function Ps(e) {
  if (!e) return !1;
  var n = e._valueTracker;
  if (!n) return !0;
  var t = n.getValue(), r = "";
  return e && (r = Ns(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), !0) : !1;
}
function Ir(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function lo(e, n) {
  var t = n.checked;
  return H({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? e._wrapperState.initialChecked });
}
function tu(e, n) {
  var t = n.defaultValue == null ? "" : n.defaultValue, r = n.checked != null ? n.checked : n.defaultChecked;
  t = hn(n.value != null ? n.value : t), e._wrapperState = { initialChecked: r, initialValue: t, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
}
function zs(e, n) {
  n = n.checked, n != null && bo(e, "checked", n, !1);
}
function oo(e, n) {
  zs(e, n);
  var t = hn(n.value), r = n.type;
  if (t != null) r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  n.hasOwnProperty("value") ? io(e, n.type, t) : n.hasOwnProperty("defaultValue") && io(e, n.type, hn(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
}
function ru(e, n, t) {
  if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
    var r = n.type;
    if (!(r !== "submit" && r !== "reset" || n.value !== void 0 && n.value !== null)) return;
    n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
  }
  t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
}
function io(e, n, t) {
  (n !== "number" || Ir(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
}
var Nt = Array.isArray;
function bn(e, n, t, r) {
  if (e = e.options, n) {
    n = {};
    for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
    for (t = 0; t < e.length; t++) l = n.hasOwnProperty("$" + e[t].value), e[t].selected !== l && (e[t].selected = l), l && r && (e[t].defaultSelected = !0);
  } else {
    for (t = "" + hn(t), n = null, l = 0; l < e.length; l++) {
      if (e[l].value === t) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      n !== null || e[l].disabled || (n = e[l]);
    }
    n !== null && (n.selected = !0);
  }
}
function uo(e, n) {
  if (n.dangerouslySetInnerHTML != null) throw Error(y(91));
  return H({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function lu(e, n) {
  var t = n.value;
  if (t == null) {
    if (t = n.children, n = n.defaultValue, t != null) {
      if (n != null) throw Error(y(92));
      if (Nt(t)) {
        if (1 < t.length) throw Error(y(93));
        t = t[0];
      }
      n = t;
    }
    n == null && (n = ""), t = n;
  }
  e._wrapperState = { initialValue: hn(t) };
}
function Ts(e, n) {
  var t = hn(n.value), r = hn(n.defaultValue);
  t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r);
}
function ou(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
}
function Rs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function so(e, n) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Rs(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var fr, Ls = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, t, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(n, t, r, l);
    });
  } : e;
}(function(e, n) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = n;
  else {
    for (fr = fr || document.createElement("div"), fr.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = fr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; n.firstChild; ) e.appendChild(n.firstChild);
  }
});
function Ut(e, n) {
  if (n) {
    var t = e.firstChild;
    if (t && t === e.lastChild && t.nodeType === 3) {
      t.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var Tt = {
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
Object.keys(Tt).forEach(function(e) {
  af.forEach(function(n) {
    n = n + e.charAt(0).toUpperCase() + e.substring(1), Tt[n] = Tt[e];
  });
});
function Os(e, n, t) {
  return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || Tt.hasOwnProperty(e) && Tt[e] ? ("" + n).trim() : n + "px";
}
function Ms(e, n) {
  e = e.style;
  for (var t in n) if (n.hasOwnProperty(t)) {
    var r = t.indexOf("--") === 0, l = Os(t, n[t], r);
    t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : e[t] = l;
  }
}
var cf = H({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ao(e, n) {
  if (n) {
    if (cf[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(y(137, e));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null) throw Error(y(60));
      if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML)) throw Error(y(61));
    }
    if (n.style != null && typeof n.style != "object") throw Error(y(62));
  }
}
function co(e, n) {
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
var fo = null;
function ri(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var po = null, et = null, nt = null;
function iu(e) {
  if (e = lr(e)) {
    if (typeof po != "function") throw Error(y(280));
    var n = e.stateNode;
    n && (n = dl(n), po(e.stateNode, e.type, n));
  }
}
function Ds(e) {
  et ? nt ? nt.push(e) : nt = [e] : et = e;
}
function js() {
  if (et) {
    var e = et, n = nt;
    if (nt = et = null, iu(e), n) for (e = 0; e < n.length; e++) iu(n[e]);
  }
}
function Fs(e, n) {
  return e(n);
}
function Is() {
}
var Ll = !1;
function $s(e, n, t) {
  if (Ll) return e(n, t);
  Ll = !0;
  try {
    return Fs(e, n, t);
  } finally {
    Ll = !1, (et !== null || nt !== null) && (Is(), js());
  }
}
function At(e, n) {
  var t = e.stateNode;
  if (t === null) return null;
  var r = dl(t);
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
var mo = !1;
if (Ye) try {
  var gt = {};
  Object.defineProperty(gt, "passive", { get: function() {
    mo = !0;
  } }), window.addEventListener("test", gt, gt), window.removeEventListener("test", gt, gt);
} catch {
  mo = !1;
}
function ff(e, n, t, r, l, o, i, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(t, c);
  } catch (p) {
    this.onError(p);
  }
}
var Rt = !1, $r = null, Ur = !1, ho = null, df = { onError: function(e) {
  Rt = !0, $r = e;
} };
function pf(e, n, t, r, l, o, i, u, s) {
  Rt = !1, $r = null, ff.apply(df, arguments);
}
function mf(e, n, t, r, l, o, i, u, s) {
  if (pf.apply(this, arguments), Rt) {
    if (Rt) {
      var c = $r;
      Rt = !1, $r = null;
    } else throw Error(y(198));
    Ur || (Ur = !0, ho = c);
  }
}
function Un(e) {
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
function uu(e) {
  if (Un(e) !== e) throw Error(y(188));
}
function hf(e) {
  var n = e.alternate;
  if (!n) {
    if (n = Un(e), n === null) throw Error(y(188));
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
        if (o === t) return uu(l), e;
        if (o === r) return uu(l), n;
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
function As(e) {
  return e = hf(e), e !== null ? Vs(e) : null;
}
function Vs(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var n = Vs(e);
    if (n !== null) return n;
    e = e.sibling;
  }
  return null;
}
var Bs = ke.unstable_scheduleCallback, su = ke.unstable_cancelCallback, vf = ke.unstable_shouldYield, yf = ke.unstable_requestPaint, Y = ke.unstable_now, gf = ke.unstable_getCurrentPriorityLevel, li = ke.unstable_ImmediatePriority, Hs = ke.unstable_UserBlockingPriority, Ar = ke.unstable_NormalPriority, wf = ke.unstable_LowPriority, Ws = ke.unstable_IdlePriority, sl = null, Ae = null;
function kf(e) {
  if (Ae && typeof Ae.onCommitFiberRoot == "function") try {
    Ae.onCommitFiberRoot(sl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var De = Math.clz32 ? Math.clz32 : xf, Sf = Math.log, Ef = Math.LN2;
function xf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Sf(e) / Ef | 0) | 0;
}
var dr = 64, pr = 4194304;
function Pt(e) {
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
function Vr(e, n) {
  var t = e.pendingLanes;
  if (t === 0) return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = t & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? r = Pt(u) : (o &= i, o !== 0 && (r = Pt(o)));
  } else i = t & ~l, i !== 0 ? r = Pt(i) : o !== 0 && (r = Pt(o));
  if (r === 0) return 0;
  if (n !== 0 && n !== r && !(n & l) && (l = r & -r, o = n & -n, l >= o || l === 16 && (o & 4194240) !== 0)) return n;
  if (r & 4 && (r |= t & 16), n = e.entangledLanes, n !== 0) for (e = e.entanglements, n &= r; 0 < n; ) t = 31 - De(n), l = 1 << t, r |= e[t], n &= ~l;
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
    var i = 31 - De(o), u = 1 << i, s = l[i];
    s === -1 ? (!(u & t) || u & r) && (l[i] = Cf(u, n)) : s <= n && (e.expiredLanes |= u), o &= ~u;
  }
}
function vo(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Qs() {
  var e = dr;
  return dr <<= 1, !(dr & 4194240) && (dr = 64), e;
}
function Ol(e) {
  for (var n = [], t = 0; 31 > t; t++) n.push(e);
  return n;
}
function tr(e, n, t) {
  e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - De(n), e[n] = t;
}
function Nf(e, n) {
  var t = e.pendingLanes & ~n;
  e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < t; ) {
    var l = 31 - De(t), o = 1 << l;
    n[l] = 0, r[l] = -1, e[l] = -1, t &= ~o;
  }
}
function oi(e, n) {
  var t = e.entangledLanes |= n;
  for (e = e.entanglements; t; ) {
    var r = 31 - De(t), l = 1 << r;
    l & n | e[r] & n && (e[r] |= n), t &= ~l;
  }
}
var j = 0;
function Ks(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Ys, ii, Xs, Gs, Zs, yo = !1, mr = [], un = null, sn = null, an = null, Vt = /* @__PURE__ */ new Map(), Bt = /* @__PURE__ */ new Map(), nn = [], Pf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function au(e, n) {
  switch (e) {
    case "focusin":
    case "focusout":
      un = null;
      break;
    case "dragenter":
    case "dragleave":
      sn = null;
      break;
    case "mouseover":
    case "mouseout":
      an = null;
      break;
    case "pointerover":
    case "pointerout":
      Vt.delete(n.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Bt.delete(n.pointerId);
  }
}
function wt(e, n, t, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: n, domEventName: t, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, n !== null && (n = lr(n), n !== null && ii(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, l !== null && n.indexOf(l) === -1 && n.push(l), e);
}
function zf(e, n, t, r, l) {
  switch (n) {
    case "focusin":
      return un = wt(un, e, n, t, r, l), !0;
    case "dragenter":
      return sn = wt(sn, e, n, t, r, l), !0;
    case "mouseover":
      return an = wt(an, e, n, t, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return Vt.set(o, wt(Vt.get(o) || null, e, n, t, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, Bt.set(o, wt(Bt.get(o) || null, e, n, t, r, l)), !0;
  }
  return !1;
}
function Js(e) {
  var n = _n(e.target);
  if (n !== null) {
    var t = Un(n);
    if (t !== null) {
      if (n = t.tag, n === 13) {
        if (n = Us(t), n !== null) {
          e.blockedOn = n, Zs(e.priority, function() {
            Xs(t);
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
function Pr(e) {
  if (e.blockedOn !== null) return !1;
  for (var n = e.targetContainers; 0 < n.length; ) {
    var t = go(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (t === null) {
      t = e.nativeEvent;
      var r = new t.constructor(t.type, t);
      fo = r, t.target.dispatchEvent(r), fo = null;
    } else return n = lr(t), n !== null && ii(n), e.blockedOn = t, !1;
    n.shift();
  }
  return !0;
}
function cu(e, n, t) {
  Pr(e) && t.delete(n);
}
function Tf() {
  yo = !1, un !== null && Pr(un) && (un = null), sn !== null && Pr(sn) && (sn = null), an !== null && Pr(an) && (an = null), Vt.forEach(cu), Bt.forEach(cu);
}
function kt(e, n) {
  e.blockedOn === n && (e.blockedOn = null, yo || (yo = !0, ke.unstable_scheduleCallback(ke.unstable_NormalPriority, Tf)));
}
function Ht(e) {
  function n(l) {
    return kt(l, e);
  }
  if (0 < mr.length) {
    kt(mr[0], e);
    for (var t = 1; t < mr.length; t++) {
      var r = mr[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (un !== null && kt(un, e), sn !== null && kt(sn, e), an !== null && kt(an, e), Vt.forEach(n), Bt.forEach(n), t = 0; t < nn.length; t++) r = nn[t], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < nn.length && (t = nn[0], t.blockedOn === null); ) Js(t), t.blockedOn === null && nn.shift();
}
var tt = Je.ReactCurrentBatchConfig, Br = !0;
function Rf(e, n, t, r) {
  var l = j, o = tt.transition;
  tt.transition = null;
  try {
    j = 1, ui(e, n, t, r);
  } finally {
    j = l, tt.transition = o;
  }
}
function Lf(e, n, t, r) {
  var l = j, o = tt.transition;
  tt.transition = null;
  try {
    j = 4, ui(e, n, t, r);
  } finally {
    j = l, tt.transition = o;
  }
}
function ui(e, n, t, r) {
  if (Br) {
    var l = go(e, n, t, r);
    if (l === null) Bl(e, n, r, Hr, t), au(e, r);
    else if (zf(l, e, n, t, r)) r.stopPropagation();
    else if (au(e, r), n & 4 && -1 < Pf.indexOf(e)) {
      for (; l !== null; ) {
        var o = lr(l);
        if (o !== null && Ys(o), o = go(e, n, t, r), o === null && Bl(e, n, r, Hr, t), o === l) break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Bl(e, n, r, null, t);
  }
}
var Hr = null;
function go(e, n, t, r) {
  if (Hr = null, e = ri(r), e = _n(e), e !== null) if (n = Un(e), n === null) e = null;
  else if (t = n.tag, t === 13) {
    if (e = Us(n), e !== null) return e;
    e = null;
  } else if (t === 3) {
    if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
    e = null;
  } else n !== e && (e = null);
  return Hr = e, null;
}
function qs(e) {
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
        case li:
          return 1;
        case Hs:
          return 4;
        case Ar:
        case wf:
          return 16;
        case Ws:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var rn = null, si = null, zr = null;
function bs() {
  if (zr) return zr;
  var e, n = si, t = n.length, r, l = "value" in rn ? rn.value : rn.textContent, o = l.length;
  for (e = 0; e < t && n[e] === l[e]; e++) ;
  var i = t - e;
  for (r = 1; r <= i && n[t - r] === l[o - r]; r++) ;
  return zr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Tr(e) {
  var n = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function hr() {
  return !0;
}
function fu() {
  return !1;
}
function Ee(e) {
  function n(t, r, l, o, i) {
    this._reactName = t, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (t = e[u], this[u] = t ? t(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? hr : fu, this.isPropagationStopped = fu, this;
  }
  return H(n.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var t = this.nativeEvent;
    t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = hr);
  }, stopPropagation: function() {
    var t = this.nativeEvent;
    t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = hr);
  }, persist: function() {
  }, isPersistent: hr }), n;
}
var pt = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, ai = Ee(pt), rr = H({}, pt, { view: 0, detail: 0 }), Of = Ee(rr), Ml, Dl, St, al = H({}, rr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ci, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== St && (St && e.type === "mousemove" ? (Ml = e.screenX - St.screenX, Dl = e.screenY - St.screenY) : Dl = Ml = 0, St = e), Ml);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Dl;
} }), du = Ee(al), Mf = H({}, al, { dataTransfer: 0 }), Df = Ee(Mf), jf = H({}, rr, { relatedTarget: 0 }), jl = Ee(jf), Ff = H({}, pt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), If = Ee(Ff), $f = H({}, pt, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Uf = Ee($f), Af = H({}, pt, { data: 0 }), pu = Ee(Af), Vf = {
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
function ci() {
  return Wf;
}
var Qf = H({}, rr, { key: function(e) {
  if (e.key) {
    var n = Vf[e.key] || e.key;
    if (n !== "Unidentified") return n;
  }
  return e.type === "keypress" ? (e = Tr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Bf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ci, charCode: function(e) {
  return e.type === "keypress" ? Tr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Tr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Kf = Ee(Qf), Yf = H({}, al, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), mu = Ee(Yf), Xf = H({}, rr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ci }), Gf = Ee(Xf), Zf = H({}, pt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Jf = Ee(Zf), qf = H({}, al, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), bf = Ee(qf), ed = [9, 13, 27, 32], fi = Ye && "CompositionEvent" in window, Lt = null;
Ye && "documentMode" in document && (Lt = document.documentMode);
var nd = Ye && "TextEvent" in window && !Lt, ea = Ye && (!fi || Lt && 8 < Lt && 11 >= Lt), hu = " ", vu = !1;
function na(e, n) {
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
function ta(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Hn = !1;
function td(e, n) {
  switch (e) {
    case "compositionend":
      return ta(n);
    case "keypress":
      return n.which !== 32 ? null : (vu = !0, hu);
    case "textInput":
      return e = n.data, e === hu && vu ? null : e;
    default:
      return null;
  }
}
function rd(e, n) {
  if (Hn) return e === "compositionend" || !fi && na(e, n) ? (e = bs(), zr = si = rn = null, Hn = !1, e) : null;
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
      return ea && n.locale !== "ko" ? null : n.data;
    default:
      return null;
  }
}
var ld = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function yu(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === "input" ? !!ld[e.type] : n === "textarea";
}
function ra(e, n, t, r) {
  Ds(r), n = Wr(n, "onChange"), 0 < n.length && (t = new ai("onChange", "change", null, t, r), e.push({ event: t, listeners: n }));
}
var Ot = null, Wt = null;
function od(e) {
  ma(e, 0);
}
function cl(e) {
  var n = Kn(e);
  if (Ps(n)) return e;
}
function id(e, n) {
  if (e === "change") return n;
}
var la = !1;
if (Ye) {
  var Fl;
  if (Ye) {
    var Il = "oninput" in document;
    if (!Il) {
      var gu = document.createElement("div");
      gu.setAttribute("oninput", "return;"), Il = typeof gu.oninput == "function";
    }
    Fl = Il;
  } else Fl = !1;
  la = Fl && (!document.documentMode || 9 < document.documentMode);
}
function wu() {
  Ot && (Ot.detachEvent("onpropertychange", oa), Wt = Ot = null);
}
function oa(e) {
  if (e.propertyName === "value" && cl(Wt)) {
    var n = [];
    ra(n, Wt, e, ri(e)), $s(od, n);
  }
}
function ud(e, n, t) {
  e === "focusin" ? (wu(), Ot = n, Wt = t, Ot.attachEvent("onpropertychange", oa)) : e === "focusout" && wu();
}
function sd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return cl(Wt);
}
function ad(e, n) {
  if (e === "click") return cl(n);
}
function cd(e, n) {
  if (e === "input" || e === "change") return cl(n);
}
function fd(e, n) {
  return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
}
var Fe = typeof Object.is == "function" ? Object.is : fd;
function Qt(e, n) {
  if (Fe(e, n)) return !0;
  if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
  var t = Object.keys(e), r = Object.keys(n);
  if (t.length !== r.length) return !1;
  for (r = 0; r < t.length; r++) {
    var l = t[r];
    if (!bl.call(n, l) || !Fe(e[l], n[l])) return !1;
  }
  return !0;
}
function ku(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Su(e, n) {
  var t = ku(e);
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
    t = ku(t);
  }
}
function ia(e, n) {
  return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? ia(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
}
function ua() {
  for (var e = window, n = Ir(); n instanceof e.HTMLIFrameElement; ) {
    try {
      var t = typeof n.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t) e = n.contentWindow;
    else break;
    n = Ir(e.document);
  }
  return n;
}
function di(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
}
function dd(e) {
  var n = ua(), t = e.focusedElem, r = e.selectionRange;
  if (n !== t && t && t.ownerDocument && ia(t.ownerDocument.documentElement, t)) {
    if (r !== null && di(t)) {
      if (n = r.start, e = r.end, e === void 0 && (e = n), "selectionStart" in t) t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
      else if (e = (n = t.ownerDocument || document) && n.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = t.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = Su(t, o);
        var i = Su(
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
var pd = Ye && "documentMode" in document && 11 >= document.documentMode, Wn = null, wo = null, Mt = null, ko = !1;
function Eu(e, n, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  ko || Wn == null || Wn !== Ir(r) || (r = Wn, "selectionStart" in r && di(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Mt && Qt(Mt, r) || (Mt = r, r = Wr(wo, "onSelect"), 0 < r.length && (n = new ai("onSelect", "select", null, n, t), e.push({ event: n, listeners: r }), n.target = Wn)));
}
function vr(e, n) {
  var t = {};
  return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
}
var Qn = { animationend: vr("Animation", "AnimationEnd"), animationiteration: vr("Animation", "AnimationIteration"), animationstart: vr("Animation", "AnimationStart"), transitionend: vr("Transition", "TransitionEnd") }, $l = {}, sa = {};
Ye && (sa = document.createElement("div").style, "AnimationEvent" in window || (delete Qn.animationend.animation, delete Qn.animationiteration.animation, delete Qn.animationstart.animation), "TransitionEvent" in window || delete Qn.transitionend.transition);
function fl(e) {
  if ($l[e]) return $l[e];
  if (!Qn[e]) return e;
  var n = Qn[e], t;
  for (t in n) if (n.hasOwnProperty(t) && t in sa) return $l[e] = n[t];
  return e;
}
var aa = fl("animationend"), ca = fl("animationiteration"), fa = fl("animationstart"), da = fl("transitionend"), pa = /* @__PURE__ */ new Map(), xu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function yn(e, n) {
  pa.set(e, n), $n(n, [e]);
}
for (var Ul = 0; Ul < xu.length; Ul++) {
  var Al = xu[Ul], md = Al.toLowerCase(), hd = Al[0].toUpperCase() + Al.slice(1);
  yn(md, "on" + hd);
}
yn(aa, "onAnimationEnd");
yn(ca, "onAnimationIteration");
yn(fa, "onAnimationStart");
yn("dblclick", "onDoubleClick");
yn("focusin", "onFocus");
yn("focusout", "onBlur");
yn(da, "onTransitionEnd");
ot("onMouseEnter", ["mouseout", "mouseover"]);
ot("onMouseLeave", ["mouseout", "mouseover"]);
ot("onPointerEnter", ["pointerout", "pointerover"]);
ot("onPointerLeave", ["pointerout", "pointerover"]);
$n("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
$n("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
$n("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
$n("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
$n("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
$n("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var zt = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), vd = new Set("cancel close invalid load scroll toggle".split(" ").concat(zt));
function Cu(e, n, t) {
  var r = e.type || "unknown-event";
  e.currentTarget = t, mf(r, n, void 0, e), e.currentTarget = null;
}
function ma(e, n) {
  n = (n & 4) !== 0;
  for (var t = 0; t < e.length; t++) {
    var r = e[t], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (n) for (var i = r.length - 1; 0 <= i; i--) {
        var u = r[i], s = u.instance, c = u.currentTarget;
        if (u = u.listener, s !== o && l.isPropagationStopped()) break e;
        Cu(l, u, c), o = s;
      }
      else for (i = 0; i < r.length; i++) {
        if (u = r[i], s = u.instance, c = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped()) break e;
        Cu(l, u, c), o = s;
      }
    }
  }
  if (Ur) throw e = ho, Ur = !1, ho = null, e;
}
function $(e, n) {
  var t = n[_o];
  t === void 0 && (t = n[_o] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  t.has(r) || (ha(n, e, 2, !1), t.add(r));
}
function Vl(e, n, t) {
  var r = 0;
  n && (r |= 4), ha(t, e, r, n);
}
var yr = "_reactListening" + Math.random().toString(36).slice(2);
function Kt(e) {
  if (!e[yr]) {
    e[yr] = !0, Es.forEach(function(t) {
      t !== "selectionchange" && (vd.has(t) || Vl(t, !1, e), Vl(t, !0, e));
    });
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[yr] || (n[yr] = !0, Vl("selectionchange", !1, n));
  }
}
function ha(e, n, t, r) {
  switch (qs(n)) {
    case 1:
      var l = Rf;
      break;
    case 4:
      l = Lf;
      break;
    default:
      l = ui;
  }
  t = l.bind(null, n, t, e), l = void 0, !mo || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(n, t, { capture: !0, passive: l }) : e.addEventListener(n, t, !0) : l !== void 0 ? e.addEventListener(n, t, { passive: l }) : e.addEventListener(n, t, !1);
}
function Bl(e, n, t, r, l) {
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
        if (i = _n(u), i === null) return;
        if (s = i.tag, s === 5 || s === 6) {
          r = o = i;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  $s(function() {
    var c = o, p = ri(t), h = [];
    e: {
      var m = pa.get(e);
      if (m !== void 0) {
        var g = ai, w = e;
        switch (e) {
          case "keypress":
            if (Tr(t) === 0) break e;
          case "keydown":
          case "keyup":
            g = Kf;
            break;
          case "focusin":
            w = "focus", g = jl;
            break;
          case "focusout":
            w = "blur", g = jl;
            break;
          case "beforeblur":
          case "afterblur":
            g = jl;
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
            g = du;
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
          case aa:
          case ca:
          case fa:
            g = If;
            break;
          case da:
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
            g = Uf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = mu;
        }
        var S = (n & 4) !== 0, F = !S && e === "scroll", f = S ? m !== null ? m + "Capture" : null : m;
        S = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var v = d.stateNode;
          if (d.tag === 5 && v !== null && (d = v, f !== null && (v = At(a, f), v != null && S.push(Yt(a, v, d)))), F) break;
          a = a.return;
        }
        0 < S.length && (m = new g(m, w, null, t, p), h.push({ event: m, listeners: S }));
      }
    }
    if (!(n & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", m && t !== fo && (w = t.relatedTarget || t.fromElement) && (_n(w) || w[Xe])) break e;
        if ((g || m) && (m = p.window === p ? p : (m = p.ownerDocument) ? m.defaultView || m.parentWindow : window, g ? (w = t.relatedTarget || t.toElement, g = c, w = w ? _n(w) : null, w !== null && (F = Un(w), w !== F || w.tag !== 5 && w.tag !== 6) && (w = null)) : (g = null, w = c), g !== w)) {
          if (S = du, v = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (S = mu, v = "onPointerLeave", f = "onPointerEnter", a = "pointer"), F = g == null ? m : Kn(g), d = w == null ? m : Kn(w), m = new S(v, a + "leave", g, t, p), m.target = F, m.relatedTarget = d, v = null, _n(p) === c && (S = new S(f, a + "enter", w, t, p), S.target = d, S.relatedTarget = F, v = S), F = v, g && w) n: {
            for (S = g, f = w, a = 0, d = S; d; d = An(d)) a++;
            for (d = 0, v = f; v; v = An(v)) d++;
            for (; 0 < a - d; ) S = An(S), a--;
            for (; 0 < d - a; ) f = An(f), d--;
            for (; a--; ) {
              if (S === f || f !== null && S === f.alternate) break n;
              S = An(S), f = An(f);
            }
            S = null;
          }
          else S = null;
          g !== null && _u(h, m, g, S, !1), w !== null && F !== null && _u(h, F, w, S, !0);
        }
      }
      e: {
        if (m = c ? Kn(c) : window, g = m.nodeName && m.nodeName.toLowerCase(), g === "select" || g === "input" && m.type === "file") var k = id;
        else if (yu(m)) if (la) k = cd;
        else {
          k = sd;
          var x = ud;
        }
        else (g = m.nodeName) && g.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (k = ad);
        if (k && (k = k(e, c))) {
          ra(h, k, t, p);
          break e;
        }
        x && x(e, m, c), e === "focusout" && (x = m._wrapperState) && x.controlled && m.type === "number" && io(m, "number", m.value);
      }
      switch (x = c ? Kn(c) : window, e) {
        case "focusin":
          (yu(x) || x.contentEditable === "true") && (Wn = x, wo = c, Mt = null);
          break;
        case "focusout":
          Mt = wo = Wn = null;
          break;
        case "mousedown":
          ko = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ko = !1, Eu(h, t, p);
          break;
        case "selectionchange":
          if (pd) break;
        case "keydown":
        case "keyup":
          Eu(h, t, p);
      }
      var _;
      if (fi) e: {
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
      else Hn ? na(e, t) && (N = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (N = "onCompositionStart");
      N && (ea && t.locale !== "ko" && (Hn || N !== "onCompositionStart" ? N === "onCompositionEnd" && Hn && (_ = bs()) : (rn = p, si = "value" in rn ? rn.value : rn.textContent, Hn = !0)), x = Wr(c, N), 0 < x.length && (N = new pu(N, e, null, t, p), h.push({ event: N, listeners: x }), _ ? N.data = _ : (_ = ta(t), _ !== null && (N.data = _)))), (_ = nd ? td(e, t) : rd(e, t)) && (c = Wr(c, "onBeforeInput"), 0 < c.length && (p = new pu("onBeforeInput", "beforeinput", null, t, p), h.push({ event: p, listeners: c }), p.data = _));
    }
    ma(h, n);
  });
}
function Yt(e, n, t) {
  return { instance: e, listener: n, currentTarget: t };
}
function Wr(e, n) {
  for (var t = n + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = At(e, t), o != null && r.unshift(Yt(e, o, l)), o = At(e, n), o != null && r.push(Yt(e, o, l))), e = e.return;
  }
  return r;
}
function An(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function _u(e, n, t, r, l) {
  for (var o = n._reactName, i = []; t !== null && t !== r; ) {
    var u = t, s = u.alternate, c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && c !== null && (u = c, l ? (s = At(t, o), s != null && i.unshift(Yt(t, s, u))) : l || (s = At(t, o), s != null && i.push(Yt(t, s, u)))), t = t.return;
  }
  i.length !== 0 && e.push({ event: n, listeners: i });
}
var yd = /\r\n?/g, gd = /\u0000|\uFFFD/g;
function Nu(e) {
  return (typeof e == "string" ? e : "" + e).replace(yd, `
`).replace(gd, "");
}
function gr(e, n, t) {
  if (n = Nu(n), Nu(e) !== n && t) throw Error(y(425));
}
function Qr() {
}
var So = null, Eo = null;
function xo(e, n) {
  return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
}
var Co = typeof setTimeout == "function" ? setTimeout : void 0, wd = typeof clearTimeout == "function" ? clearTimeout : void 0, Pu = typeof Promise == "function" ? Promise : void 0, kd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Pu < "u" ? function(e) {
  return Pu.resolve(null).then(e).catch(Sd);
} : Co;
function Sd(e) {
  setTimeout(function() {
    throw e;
  });
}
function Hl(e, n) {
  var t = n, r = 0;
  do {
    var l = t.nextSibling;
    if (e.removeChild(t), l && l.nodeType === 8) if (t = l.data, t === "/$") {
      if (r === 0) {
        e.removeChild(l), Ht(n);
        return;
      }
      r--;
    } else t !== "$" && t !== "$?" && t !== "$!" || r++;
    t = l;
  } while (t);
  Ht(n);
}
function cn(e) {
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
function zu(e) {
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
var mt = Math.random().toString(36).slice(2), Ue = "__reactFiber$" + mt, Xt = "__reactProps$" + mt, Xe = "__reactContainer$" + mt, _o = "__reactEvents$" + mt, Ed = "__reactListeners$" + mt, xd = "__reactHandles$" + mt;
function _n(e) {
  var n = e[Ue];
  if (n) return n;
  for (var t = e.parentNode; t; ) {
    if (n = t[Xe] || t[Ue]) {
      if (t = n.alternate, n.child !== null || t !== null && t.child !== null) for (e = zu(e); e !== null; ) {
        if (t = e[Ue]) return t;
        e = zu(e);
      }
      return n;
    }
    e = t, t = e.parentNode;
  }
  return null;
}
function lr(e) {
  return e = e[Ue] || e[Xe], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Kn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function dl(e) {
  return e[Xt] || null;
}
var No = [], Yn = -1;
function gn(e) {
  return { current: e };
}
function U(e) {
  0 > Yn || (e.current = No[Yn], No[Yn] = null, Yn--);
}
function I(e, n) {
  Yn++, No[Yn] = e.current, e.current = n;
}
var vn = {}, ue = gn(vn), me = gn(!1), Ln = vn;
function it(e, n) {
  var t = e.type.contextTypes;
  if (!t) return vn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === n) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in t) l[o] = n[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function he(e) {
  return e = e.childContextTypes, e != null;
}
function Kr() {
  U(me), U(ue);
}
function Tu(e, n, t) {
  if (ue.current !== vn) throw Error(y(168));
  I(ue, n), I(me, t);
}
function va(e, n, t) {
  var r = e.stateNode;
  if (n = n.childContextTypes, typeof r.getChildContext != "function") return t;
  r = r.getChildContext();
  for (var l in r) if (!(l in n)) throw Error(y(108, uf(e) || "Unknown", l));
  return H({}, t, r);
}
function Yr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || vn, Ln = ue.current, I(ue, e), I(me, me.current), !0;
}
function Ru(e, n, t) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  t ? (e = va(e, n, Ln), r.__reactInternalMemoizedMergedChildContext = e, U(me), U(ue), I(ue, e)) : U(me), I(me, t);
}
var He = null, pl = !1, Wl = !1;
function ya(e) {
  He === null ? He = [e] : He.push(e);
}
function Cd(e) {
  pl = !0, ya(e);
}
function wn() {
  if (!Wl && He !== null) {
    Wl = !0;
    var e = 0, n = j;
    try {
      var t = He;
      for (j = 1; e < t.length; e++) {
        var r = t[e];
        do
          r = r(!0);
        while (r !== null);
      }
      He = null, pl = !1;
    } catch (l) {
      throw He !== null && (He = He.slice(e + 1)), Bs(li, wn), l;
    } finally {
      j = n, Wl = !1;
    }
  }
  return null;
}
var Xn = [], Gn = 0, Xr = null, Gr = 0, xe = [], Ce = 0, On = null, We = 1, Qe = "";
function En(e, n) {
  Xn[Gn++] = Gr, Xn[Gn++] = Xr, Xr = e, Gr = n;
}
function ga(e, n, t) {
  xe[Ce++] = We, xe[Ce++] = Qe, xe[Ce++] = On, On = e;
  var r = We;
  e = Qe;
  var l = 32 - De(r) - 1;
  r &= ~(1 << l), t += 1;
  var o = 32 - De(n) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, We = 1 << 32 - De(n) + l | t << l | r, Qe = o + e;
  } else We = 1 << o | t << l | r, Qe = e;
}
function pi(e) {
  e.return !== null && (En(e, 1), ga(e, 1, 0));
}
function mi(e) {
  for (; e === Xr; ) Xr = Xn[--Gn], Xn[Gn] = null, Gr = Xn[--Gn], Xn[Gn] = null;
  for (; e === On; ) On = xe[--Ce], xe[Ce] = null, Qe = xe[--Ce], xe[Ce] = null, We = xe[--Ce], xe[Ce] = null;
}
var we = null, ge = null, A = !1, Me = null;
function wa(e, n) {
  var t = _e(5, null, null, 0);
  t.elementType = "DELETED", t.stateNode = n, t.return = e, n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t);
}
function Lu(e, n) {
  switch (e.tag) {
    case 5:
      var t = e.type;
      return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, we = e, ge = cn(n.firstChild), !0) : !1;
    case 6:
      return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, we = e, ge = null, !0) : !1;
    case 13:
      return n = n.nodeType !== 8 ? null : n, n !== null ? (t = On !== null ? { id: We, overflow: Qe } : null, e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }, t = _e(18, null, null, 0), t.stateNode = n, t.return = e, e.child = t, we = e, ge = null, !0) : !1;
    default:
      return !1;
  }
}
function Po(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function zo(e) {
  if (A) {
    var n = ge;
    if (n) {
      var t = n;
      if (!Lu(e, n)) {
        if (Po(e)) throw Error(y(418));
        n = cn(t.nextSibling);
        var r = we;
        n && Lu(e, n) ? wa(r, t) : (e.flags = e.flags & -4097 | 2, A = !1, we = e);
      }
    } else {
      if (Po(e)) throw Error(y(418));
      e.flags = e.flags & -4097 | 2, A = !1, we = e;
    }
  }
}
function Ou(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  we = e;
}
function wr(e) {
  if (e !== we) return !1;
  if (!A) return Ou(e), A = !0, !1;
  var n;
  if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !xo(e.type, e.memoizedProps)), n && (n = ge)) {
    if (Po(e)) throw ka(), Error(y(418));
    for (; n; ) wa(e, n), n = cn(n.nextSibling);
  }
  if (Ou(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(y(317));
    e: {
      for (e = e.nextSibling, n = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === "/$") {
            if (n === 0) {
              ge = cn(e.nextSibling);
              break e;
            }
            n--;
          } else t !== "$" && t !== "$!" && t !== "$?" || n++;
        }
        e = e.nextSibling;
      }
      ge = null;
    }
  } else ge = we ? cn(e.stateNode.nextSibling) : null;
  return !0;
}
function ka() {
  for (var e = ge; e; ) e = cn(e.nextSibling);
}
function ut() {
  ge = we = null, A = !1;
}
function hi(e) {
  Me === null ? Me = [e] : Me.push(e);
}
var _d = Je.ReactCurrentBatchConfig;
function Et(e, n, t) {
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
function kr(e, n) {
  throw e = Object.prototype.toString.call(n), Error(y(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
}
function Mu(e) {
  var n = e._init;
  return n(e._payload);
}
function Sa(e) {
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
    return f = mn(f, a), f.index = 0, f.sibling = null, f;
  }
  function o(f, a, d) {
    return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a);
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, v) {
    return a === null || a.tag !== 6 ? (a = Jl(d, f.mode, v), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function s(f, a, d, v) {
    var k = d.type;
    return k === Bn ? p(f, a, d.props.children, v, d.key) : a !== null && (a.elementType === k || typeof k == "object" && k !== null && k.$$typeof === be && Mu(k) === a.type) ? (v = l(a, d.props), v.ref = Et(f, a, d), v.return = f, v) : (v = Fr(d.type, d.key, d.props, null, f.mode, v), v.ref = Et(f, a, d), v.return = f, v);
  }
  function c(f, a, d, v) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = ql(d, f.mode, v), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
  }
  function p(f, a, d, v, k) {
    return a === null || a.tag !== 7 ? (a = Rn(d, f.mode, v, k), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function h(f, a, d) {
    if (typeof a == "string" && a !== "" || typeof a == "number") return a = Jl("" + a, f.mode, d), a.return = f, a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case ar:
          return d = Fr(a.type, a.key, a.props, null, f.mode, d), d.ref = Et(f, null, a), d.return = f, d;
        case Vn:
          return a = ql(a, f.mode, d), a.return = f, a;
        case be:
          var v = a._init;
          return h(f, v(a._payload), d);
      }
      if (Nt(a) || yt(a)) return a = Rn(a, f.mode, d, null), a.return = f, a;
      kr(f, a);
    }
    return null;
  }
  function m(f, a, d, v) {
    var k = a !== null ? a.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number") return k !== null ? null : u(f, a, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ar:
          return d.key === k ? s(f, a, d, v) : null;
        case Vn:
          return d.key === k ? c(f, a, d, v) : null;
        case be:
          return k = d._init, m(
            f,
            a,
            k(d._payload),
            v
          );
      }
      if (Nt(d) || yt(d)) return k !== null ? null : p(f, a, d, v, null);
      kr(f, d);
    }
    return null;
  }
  function g(f, a, d, v, k) {
    if (typeof v == "string" && v !== "" || typeof v == "number") return f = f.get(d) || null, u(a, f, "" + v, k);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case ar:
          return f = f.get(v.key === null ? d : v.key) || null, s(a, f, v, k);
        case Vn:
          return f = f.get(v.key === null ? d : v.key) || null, c(a, f, v, k);
        case be:
          var x = v._init;
          return g(f, a, d, x(v._payload), k);
      }
      if (Nt(v) || yt(v)) return f = f.get(d) || null, p(a, f, v, k, null);
      kr(a, v);
    }
    return null;
  }
  function w(f, a, d, v) {
    for (var k = null, x = null, _ = a, N = a = 0, Q = null; _ !== null && N < d.length; N++) {
      _.index > N ? (Q = _, _ = null) : Q = _.sibling;
      var L = m(f, _, d[N], v);
      if (L === null) {
        _ === null && (_ = Q);
        break;
      }
      e && _ && L.alternate === null && n(f, _), a = o(L, a, N), x === null ? k = L : x.sibling = L, x = L, _ = Q;
    }
    if (N === d.length) return t(f, _), A && En(f, N), k;
    if (_ === null) {
      for (; N < d.length; N++) _ = h(f, d[N], v), _ !== null && (a = o(_, a, N), x === null ? k = _ : x.sibling = _, x = _);
      return A && En(f, N), k;
    }
    for (_ = r(f, _); N < d.length; N++) Q = g(_, f, N, d[N], v), Q !== null && (e && Q.alternate !== null && _.delete(Q.key === null ? N : Q.key), a = o(Q, a, N), x === null ? k = Q : x.sibling = Q, x = Q);
    return e && _.forEach(function(Te) {
      return n(f, Te);
    }), A && En(f, N), k;
  }
  function S(f, a, d, v) {
    var k = yt(d);
    if (typeof k != "function") throw Error(y(150));
    if (d = k.call(d), d == null) throw Error(y(151));
    for (var x = k = null, _ = a, N = a = 0, Q = null, L = d.next(); _ !== null && !L.done; N++, L = d.next()) {
      _.index > N ? (Q = _, _ = null) : Q = _.sibling;
      var Te = m(f, _, L.value, v);
      if (Te === null) {
        _ === null && (_ = Q);
        break;
      }
      e && _ && Te.alternate === null && n(f, _), a = o(Te, a, N), x === null ? k = Te : x.sibling = Te, x = Te, _ = Q;
    }
    if (L.done) return t(
      f,
      _
    ), A && En(f, N), k;
    if (_ === null) {
      for (; !L.done; N++, L = d.next()) L = h(f, L.value, v), L !== null && (a = o(L, a, N), x === null ? k = L : x.sibling = L, x = L);
      return A && En(f, N), k;
    }
    for (_ = r(f, _); !L.done; N++, L = d.next()) L = g(_, f, N, L.value, v), L !== null && (e && L.alternate !== null && _.delete(L.key === null ? N : L.key), a = o(L, a, N), x === null ? k = L : x.sibling = L, x = L);
    return e && _.forEach(function(ht) {
      return n(f, ht);
    }), A && En(f, N), k;
  }
  function F(f, a, d, v) {
    if (typeof d == "object" && d !== null && d.type === Bn && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ar:
          e: {
            for (var k = d.key, x = a; x !== null; ) {
              if (x.key === k) {
                if (k = d.type, k === Bn) {
                  if (x.tag === 7) {
                    t(f, x.sibling), a = l(x, d.props.children), a.return = f, f = a;
                    break e;
                  }
                } else if (x.elementType === k || typeof k == "object" && k !== null && k.$$typeof === be && Mu(k) === x.type) {
                  t(f, x.sibling), a = l(x, d.props), a.ref = Et(f, x, d), a.return = f, f = a;
                  break e;
                }
                t(f, x);
                break;
              } else n(f, x);
              x = x.sibling;
            }
            d.type === Bn ? (a = Rn(d.props.children, f.mode, v, d.key), a.return = f, f = a) : (v = Fr(d.type, d.key, d.props, null, f.mode, v), v.ref = Et(f, a, d), v.return = f, f = v);
          }
          return i(f);
        case Vn:
          e: {
            for (x = d.key; a !== null; ) {
              if (a.key === x) if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                t(f, a.sibling), a = l(a, d.children || []), a.return = f, f = a;
                break e;
              } else {
                t(f, a);
                break;
              }
              else n(f, a);
              a = a.sibling;
            }
            a = ql(d, f.mode, v), a.return = f, f = a;
          }
          return i(f);
        case be:
          return x = d._init, F(f, a, x(d._payload), v);
      }
      if (Nt(d)) return w(f, a, d, v);
      if (yt(d)) return S(f, a, d, v);
      kr(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (t(f, a.sibling), a = l(a, d), a.return = f, f = a) : (t(f, a), a = Jl(d, f.mode, v), a.return = f, f = a), i(f)) : t(f, a);
  }
  return F;
}
var st = Sa(!0), Ea = Sa(!1), Zr = gn(null), Jr = null, Zn = null, vi = null;
function yi() {
  vi = Zn = Jr = null;
}
function gi(e) {
  var n = Zr.current;
  U(Zr), e._currentValue = n;
}
function To(e, n, t) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & n) !== n ? (e.childLanes |= n, r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n), e === t) break;
    e = e.return;
  }
}
function rt(e, n) {
  Jr = e, vi = Zn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & n && (pe = !0), e.firstContext = null);
}
function Pe(e) {
  var n = e._currentValue;
  if (vi !== e) if (e = { context: e, memoizedValue: n, next: null }, Zn === null) {
    if (Jr === null) throw Error(y(308));
    Zn = e, Jr.dependencies = { lanes: 0, firstContext: e };
  } else Zn = Zn.next = e;
  return n;
}
var Nn = null;
function wi(e) {
  Nn === null ? Nn = [e] : Nn.push(e);
}
function xa(e, n, t, r) {
  var l = n.interleaved;
  return l === null ? (t.next = t, wi(n)) : (t.next = l.next, l.next = t), n.interleaved = t, Ge(e, r);
}
function Ge(e, n) {
  e.lanes |= n;
  var t = e.alternate;
  for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; ) e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
  return t.tag === 3 ? t.stateNode : null;
}
var en = !1;
function ki(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Ca(e, n) {
  e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Ke(e, n) {
  return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
}
function fn(e, n, t) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, M & 2) {
    var l = r.pending;
    return l === null ? n.next = n : (n.next = l.next, l.next = n), r.pending = n, Ge(e, t);
  }
  return l = r.interleaved, l === null ? (n.next = n, wi(r)) : (n.next = l.next, l.next = n), r.interleaved = n, Ge(e, t);
}
function Rr(e, n, t) {
  if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194240) !== 0)) {
    var r = n.lanes;
    r &= e.pendingLanes, t |= r, n.lanes = t, oi(e, t);
  }
}
function Du(e, n) {
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
function qr(e, n, t, r) {
  var l = e.updateQueue;
  en = !1;
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
          var w = e, S = u;
          switch (m = n, g = t, S.tag) {
            case 1:
              if (w = S.payload, typeof w == "function") {
                h = w.call(g, h, m);
                break e;
              }
              h = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = S.payload, m = typeof w == "function" ? w.call(g, h, m) : w, m == null) break e;
              h = H({}, h, m);
              break e;
            case 2:
              en = !0;
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
    Dn |= i, e.lanes = i, e.memoizedState = h;
  }
}
function ju(e, n, t) {
  if (e = n.effects, n.effects = null, e !== null) for (n = 0; n < e.length; n++) {
    var r = e[n], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = t, typeof l != "function") throw Error(y(191, l));
      l.call(r);
    }
  }
}
var or = {}, Ve = gn(or), Gt = gn(or), Zt = gn(or);
function Pn(e) {
  if (e === or) throw Error(y(174));
  return e;
}
function Si(e, n) {
  switch (I(Zt, n), I(Gt, e), I(Ve, or), e = n.nodeType, e) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : so(null, "");
      break;
    default:
      e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = so(n, e);
  }
  U(Ve), I(Ve, n);
}
function at() {
  U(Ve), U(Gt), U(Zt);
}
function _a(e) {
  Pn(Zt.current);
  var n = Pn(Ve.current), t = so(n, e.type);
  n !== t && (I(Gt, e), I(Ve, t));
}
function Ei(e) {
  Gt.current === e && (U(Ve), U(Gt));
}
var V = gn(0);
function br(e) {
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
var Ql = [];
function xi() {
  for (var e = 0; e < Ql.length; e++) Ql[e]._workInProgressVersionPrimary = null;
  Ql.length = 0;
}
var Lr = Je.ReactCurrentDispatcher, Kl = Je.ReactCurrentBatchConfig, Mn = 0, B = null, G = null, q = null, el = !1, Dt = !1, Jt = 0, Nd = 0;
function le() {
  throw Error(y(321));
}
function Ci(e, n) {
  if (n === null) return !1;
  for (var t = 0; t < n.length && t < e.length; t++) if (!Fe(e[t], n[t])) return !1;
  return !0;
}
function _i(e, n, t, r, l, o) {
  if (Mn = o, B = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, Lr.current = e === null || e.memoizedState === null ? Rd : Ld, e = t(r, l), Dt) {
    o = 0;
    do {
      if (Dt = !1, Jt = 0, 25 <= o) throw Error(y(301));
      o += 1, q = G = null, n.updateQueue = null, Lr.current = Od, e = t(r, l);
    } while (Dt);
  }
  if (Lr.current = nl, n = G !== null && G.next !== null, Mn = 0, q = G = B = null, el = !1, n) throw Error(y(300));
  return e;
}
function Ni() {
  var e = Jt !== 0;
  return Jt = 0, e;
}
function $e() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return q === null ? B.memoizedState = q = e : q = q.next = e, q;
}
function ze() {
  if (G === null) {
    var e = B.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = G.next;
  var n = q === null ? B.memoizedState : q.next;
  if (n !== null) q = n, G = e;
  else {
    if (e === null) throw Error(y(310));
    G = e, e = { memoizedState: G.memoizedState, baseState: G.baseState, baseQueue: G.baseQueue, queue: G.queue, next: null }, q === null ? B.memoizedState = q = e : q = q.next = e;
  }
  return q;
}
function qt(e, n) {
  return typeof n == "function" ? n(e) : n;
}
function Yl(e) {
  var n = ze(), t = n.queue;
  if (t === null) throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = G, l = r.baseQueue, o = t.pending;
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
      if ((Mn & p) === p) s !== null && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var h = {
          lane: p,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        s === null ? (u = s = h, i = r) : s = s.next = h, B.lanes |= p, Dn |= p;
      }
      c = c.next;
    } while (c !== null && c !== o);
    s === null ? i = r : s.next = u, Fe(r, n.memoizedState) || (pe = !0), n.memoizedState = r, n.baseState = i, n.baseQueue = s, t.lastRenderedState = r;
  }
  if (e = t.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, B.lanes |= o, Dn |= o, l = l.next;
    while (l !== e);
  } else l === null && (t.lanes = 0);
  return [n.memoizedState, t.dispatch];
}
function Xl(e) {
  var n = ze(), t = n.queue;
  if (t === null) throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = t.dispatch, l = t.pending, o = n.memoizedState;
  if (l !== null) {
    t.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    Fe(o, n.memoizedState) || (pe = !0), n.memoizedState = o, n.baseQueue === null && (n.baseState = o), t.lastRenderedState = o;
  }
  return [o, r];
}
function Na() {
}
function Pa(e, n) {
  var t = B, r = ze(), l = n(), o = !Fe(r.memoizedState, l);
  if (o && (r.memoizedState = l, pe = !0), r = r.queue, Pi(Ra.bind(null, t, r, e), [e]), r.getSnapshot !== n || o || q !== null && q.memoizedState.tag & 1) {
    if (t.flags |= 2048, bt(9, Ta.bind(null, t, r, l, n), void 0, null), ee === null) throw Error(y(349));
    Mn & 30 || za(t, n, l);
  }
  return l;
}
function za(e, n, t) {
  e.flags |= 16384, e = { getSnapshot: n, value: t }, n = B.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, B.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e));
}
function Ta(e, n, t, r) {
  n.value = t, n.getSnapshot = r, La(n) && Oa(e);
}
function Ra(e, n, t) {
  return t(function() {
    La(n) && Oa(e);
  });
}
function La(e) {
  var n = e.getSnapshot;
  e = e.value;
  try {
    var t = n();
    return !Fe(e, t);
  } catch {
    return !0;
  }
}
function Oa(e) {
  var n = Ge(e, 1);
  n !== null && je(n, e, 1, -1);
}
function Fu(e) {
  var n = $e();
  return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: qt, lastRenderedState: e }, n.queue = e, e = e.dispatch = Td.bind(null, B, e), [n.memoizedState, e];
}
function bt(e, n, t, r) {
  return e = { tag: e, create: n, destroy: t, deps: r, next: null }, n = B.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, B.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e;
}
function Ma() {
  return ze().memoizedState;
}
function Or(e, n, t, r) {
  var l = $e();
  B.flags |= e, l.memoizedState = bt(1 | n, t, void 0, r === void 0 ? null : r);
}
function ml(e, n, t, r) {
  var l = ze();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (G !== null) {
    var i = G.memoizedState;
    if (o = i.destroy, r !== null && Ci(r, i.deps)) {
      l.memoizedState = bt(n, t, o, r);
      return;
    }
  }
  B.flags |= e, l.memoizedState = bt(1 | n, t, o, r);
}
function Iu(e, n) {
  return Or(8390656, 8, e, n);
}
function Pi(e, n) {
  return ml(2048, 8, e, n);
}
function Da(e, n) {
  return ml(4, 2, e, n);
}
function ja(e, n) {
  return ml(4, 4, e, n);
}
function Fa(e, n) {
  if (typeof n == "function") return e = e(), n(e), function() {
    n(null);
  };
  if (n != null) return e = e(), n.current = e, function() {
    n.current = null;
  };
}
function Ia(e, n, t) {
  return t = t != null ? t.concat([e]) : null, ml(4, 4, Fa.bind(null, n, e), t);
}
function zi() {
}
function $a(e, n) {
  var t = ze();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && Ci(n, r[1]) ? r[0] : (t.memoizedState = [e, n], e);
}
function Ua(e, n) {
  var t = ze();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && Ci(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [e, n], e);
}
function Aa(e, n, t) {
  return Mn & 21 ? (Fe(t, n) || (t = Qs(), B.lanes |= t, Dn |= t, e.baseState = !0), n) : (e.baseState && (e.baseState = !1, pe = !0), e.memoizedState = t);
}
function Pd(e, n) {
  var t = j;
  j = t !== 0 && 4 > t ? t : 4, e(!0);
  var r = Kl.transition;
  Kl.transition = {};
  try {
    e(!1), n();
  } finally {
    j = t, Kl.transition = r;
  }
}
function Va() {
  return ze().memoizedState;
}
function zd(e, n, t) {
  var r = pn(e);
  if (t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }, Ba(e)) Ha(n, t);
  else if (t = xa(e, n, t, r), t !== null) {
    var l = ae();
    je(t, e, r, l), Wa(t, n, r);
  }
}
function Td(e, n, t) {
  var r = pn(e), l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (Ba(e)) Ha(n, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = n.lastRenderedReducer, o !== null)) try {
      var i = n.lastRenderedState, u = o(i, t);
      if (l.hasEagerState = !0, l.eagerState = u, Fe(u, i)) {
        var s = n.interleaved;
        s === null ? (l.next = l, wi(n)) : (l.next = s.next, s.next = l), n.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    t = xa(e, n, l, r), t !== null && (l = ae(), je(t, e, r, l), Wa(t, n, r));
  }
}
function Ba(e) {
  var n = e.alternate;
  return e === B || n !== null && n === B;
}
function Ha(e, n) {
  Dt = el = !0;
  var t = e.pending;
  t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
}
function Wa(e, n, t) {
  if (t & 4194240) {
    var r = n.lanes;
    r &= e.pendingLanes, t |= r, n.lanes = t, oi(e, t);
  }
}
var nl = { readContext: Pe, useCallback: le, useContext: le, useEffect: le, useImperativeHandle: le, useInsertionEffect: le, useLayoutEffect: le, useMemo: le, useReducer: le, useRef: le, useState: le, useDebugValue: le, useDeferredValue: le, useTransition: le, useMutableSource: le, useSyncExternalStore: le, useId: le, unstable_isNewReconciler: !1 }, Rd = { readContext: Pe, useCallback: function(e, n) {
  return $e().memoizedState = [e, n === void 0 ? null : n], e;
}, useContext: Pe, useEffect: Iu, useImperativeHandle: function(e, n, t) {
  return t = t != null ? t.concat([e]) : null, Or(
    4194308,
    4,
    Fa.bind(null, n, e),
    t
  );
}, useLayoutEffect: function(e, n) {
  return Or(4194308, 4, e, n);
}, useInsertionEffect: function(e, n) {
  return Or(4, 2, e, n);
}, useMemo: function(e, n) {
  var t = $e();
  return n = n === void 0 ? null : n, e = e(), t.memoizedState = [e, n], e;
}, useReducer: function(e, n, t) {
  var r = $e();
  return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, r.queue = e, e = e.dispatch = zd.bind(null, B, e), [r.memoizedState, e];
}, useRef: function(e) {
  var n = $e();
  return e = { current: e }, n.memoizedState = e;
}, useState: Fu, useDebugValue: zi, useDeferredValue: function(e) {
  return $e().memoizedState = e;
}, useTransition: function() {
  var e = Fu(!1), n = e[0];
  return e = Pd.bind(null, e[1]), $e().memoizedState = e, [n, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, n, t) {
  var r = B, l = $e();
  if (A) {
    if (t === void 0) throw Error(y(407));
    t = t();
  } else {
    if (t = n(), ee === null) throw Error(y(349));
    Mn & 30 || za(r, n, t);
  }
  l.memoizedState = t;
  var o = { value: t, getSnapshot: n };
  return l.queue = o, Iu(Ra.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, bt(9, Ta.bind(null, r, o, t, n), void 0, null), t;
}, useId: function() {
  var e = $e(), n = ee.identifierPrefix;
  if (A) {
    var t = Qe, r = We;
    t = (r & ~(1 << 32 - De(r) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = Jt++, 0 < t && (n += "H" + t.toString(32)), n += ":";
  } else t = Nd++, n = ":" + n + "r" + t.toString(32) + ":";
  return e.memoizedState = n;
}, unstable_isNewReconciler: !1 }, Ld = {
  readContext: Pe,
  useCallback: $a,
  useContext: Pe,
  useEffect: Pi,
  useImperativeHandle: Ia,
  useInsertionEffect: Da,
  useLayoutEffect: ja,
  useMemo: Ua,
  useReducer: Yl,
  useRef: Ma,
  useState: function() {
    return Yl(qt);
  },
  useDebugValue: zi,
  useDeferredValue: function(e) {
    var n = ze();
    return Aa(n, G.memoizedState, e);
  },
  useTransition: function() {
    var e = Yl(qt)[0], n = ze().memoizedState;
    return [e, n];
  },
  useMutableSource: Na,
  useSyncExternalStore: Pa,
  useId: Va,
  unstable_isNewReconciler: !1
}, Od = { readContext: Pe, useCallback: $a, useContext: Pe, useEffect: Pi, useImperativeHandle: Ia, useInsertionEffect: Da, useLayoutEffect: ja, useMemo: Ua, useReducer: Xl, useRef: Ma, useState: function() {
  return Xl(qt);
}, useDebugValue: zi, useDeferredValue: function(e) {
  var n = ze();
  return G === null ? n.memoizedState = e : Aa(n, G.memoizedState, e);
}, useTransition: function() {
  var e = Xl(qt)[0], n = ze().memoizedState;
  return [e, n];
}, useMutableSource: Na, useSyncExternalStore: Pa, useId: Va, unstable_isNewReconciler: !1 };
function Le(e, n) {
  if (e && e.defaultProps) {
    n = H({}, n), e = e.defaultProps;
    for (var t in e) n[t] === void 0 && (n[t] = e[t]);
    return n;
  }
  return n;
}
function Ro(e, n, t, r) {
  n = e.memoizedState, t = t(r, n), t = t == null ? n : H({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
}
var hl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Un(e) === e : !1;
}, enqueueSetState: function(e, n, t) {
  e = e._reactInternals;
  var r = ae(), l = pn(e), o = Ke(r, l);
  o.payload = n, t != null && (o.callback = t), n = fn(e, o, l), n !== null && (je(n, e, l, r), Rr(n, e, l));
}, enqueueReplaceState: function(e, n, t) {
  e = e._reactInternals;
  var r = ae(), l = pn(e), o = Ke(r, l);
  o.tag = 1, o.payload = n, t != null && (o.callback = t), n = fn(e, o, l), n !== null && (je(n, e, l, r), Rr(n, e, l));
}, enqueueForceUpdate: function(e, n) {
  e = e._reactInternals;
  var t = ae(), r = pn(e), l = Ke(t, r);
  l.tag = 2, n != null && (l.callback = n), n = fn(e, l, r), n !== null && (je(n, e, r, t), Rr(n, e, r));
} };
function $u(e, n, t, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : n.prototype && n.prototype.isPureReactComponent ? !Qt(t, r) || !Qt(l, o) : !0;
}
function Qa(e, n, t) {
  var r = !1, l = vn, o = n.contextType;
  return typeof o == "object" && o !== null ? o = Pe(o) : (l = he(n) ? Ln : ue.current, r = n.contextTypes, o = (r = r != null) ? it(e, l) : vn), n = new n(t, o), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = hl, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), n;
}
function Uu(e, n, t, r) {
  e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && hl.enqueueReplaceState(n, n.state, null);
}
function Lo(e, n, t, r) {
  var l = e.stateNode;
  l.props = t, l.state = e.memoizedState, l.refs = {}, ki(e);
  var o = n.contextType;
  typeof o == "object" && o !== null ? l.context = Pe(o) : (o = he(n) ? Ln : ue.current, l.context = it(e, o)), l.state = e.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (Ro(e, n, o, t), l.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (n = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), n !== l.state && hl.enqueueReplaceState(l, l.state, null), qr(e, t, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function ct(e, n) {
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
function Gl(e, n, t) {
  return { value: e, source: null, stack: t ?? null, digest: n ?? null };
}
function Oo(e, n) {
  try {
    console.error(n.value);
  } catch (t) {
    setTimeout(function() {
      throw t;
    });
  }
}
var Md = typeof WeakMap == "function" ? WeakMap : Map;
function Ka(e, n, t) {
  t = Ke(-1, t), t.tag = 3, t.payload = { element: null };
  var r = n.value;
  return t.callback = function() {
    rl || (rl = !0, Bo = r), Oo(e, n);
  }, t;
}
function Ya(e, n, t) {
  t = Ke(-1, t), t.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = n.value;
    t.payload = function() {
      return r(l);
    }, t.callback = function() {
      Oo(e, n);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (t.callback = function() {
    Oo(e, n), typeof r != "function" && (dn === null ? dn = /* @__PURE__ */ new Set([this]) : dn.add(this));
    var i = n.stack;
    this.componentDidCatch(n.value, { componentStack: i !== null ? i : "" });
  }), t;
}
function Au(e, n, t) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Md();
    var l = /* @__PURE__ */ new Set();
    r.set(n, l);
  } else l = r.get(n), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(n, l));
  l.has(t) || (l.add(t), e = Yd.bind(null, e, n, t), n.then(e, e));
}
function Vu(e) {
  do {
    var n;
    if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Bu(e, n, t, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = Ke(-1, 1), n.tag = 2, fn(t, n, 1))), t.lanes |= 1), e);
}
var Dd = Je.ReactCurrentOwner, pe = !1;
function se(e, n, t, r) {
  n.child = e === null ? Ea(n, null, t, r) : st(n, e.child, t, r);
}
function Hu(e, n, t, r, l) {
  t = t.render;
  var o = n.ref;
  return rt(n, l), r = _i(e, n, t, r, o, l), t = Ni(), e !== null && !pe ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, Ze(e, n, l)) : (A && t && pi(n), n.flags |= 1, se(e, n, r, l), n.child);
}
function Wu(e, n, t, r, l) {
  if (e === null) {
    var o = t.type;
    return typeof o == "function" && !Fi(o) && o.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = o, Xa(e, n, o, r, l)) : (e = Fr(t.type, null, r, n, n.mode, l), e.ref = n.ref, e.return = n, n.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (t = t.compare, t = t !== null ? t : Qt, t(i, r) && e.ref === n.ref) return Ze(e, n, l);
  }
  return n.flags |= 1, e = mn(o, r), e.ref = n.ref, e.return = n, n.child = e;
}
function Xa(e, n, t, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Qt(o, r) && e.ref === n.ref) if (pe = !1, n.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (pe = !0);
    else return n.lanes = e.lanes, Ze(e, n, l);
  }
  return Mo(e, n, t, r, l);
}
function Ga(e, n, t) {
  var r = n.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(n.mode & 1)) n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, I(qn, ye), ye |= t;
  else {
    if (!(t & 1073741824)) return e = o !== null ? o.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, I(qn, ye), ye |= e, null;
    n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : t, I(qn, ye), ye |= r;
  }
  else o !== null ? (r = o.baseLanes | t, n.memoizedState = null) : r = t, I(qn, ye), ye |= r;
  return se(e, n, l, t), n.child;
}
function Za(e, n) {
  var t = n.ref;
  (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152);
}
function Mo(e, n, t, r, l) {
  var o = he(t) ? Ln : ue.current;
  return o = it(n, o), rt(n, l), t = _i(e, n, t, r, o, l), r = Ni(), e !== null && !pe ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, Ze(e, n, l)) : (A && r && pi(n), n.flags |= 1, se(e, n, t, l), n.child);
}
function Qu(e, n, t, r, l) {
  if (he(t)) {
    var o = !0;
    Yr(n);
  } else o = !1;
  if (rt(n, l), n.stateNode === null) Mr(e, n), Qa(n, t, r), Lo(n, t, r, l), r = !0;
  else if (e === null) {
    var i = n.stateNode, u = n.memoizedProps;
    i.props = u;
    var s = i.context, c = t.contextType;
    typeof c == "object" && c !== null ? c = Pe(c) : (c = he(t) ? Ln : ue.current, c = it(n, c));
    var p = t.getDerivedStateFromProps, h = typeof p == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    h || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== c) && Uu(n, i, r, c), en = !1;
    var m = n.memoizedState;
    i.state = m, qr(n, r, i, l), s = n.memoizedState, u !== r || m !== s || me.current || en ? (typeof p == "function" && (Ro(n, t, p, r), s = n.memoizedState), (u = en || $u(n, t, u, r, m, s, c)) ? (h || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = s), i.props = r, i.state = s, i.context = c, r = u) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), r = !1);
  } else {
    i = n.stateNode, Ca(e, n), u = n.memoizedProps, c = n.type === n.elementType ? u : Le(n.type, u), i.props = c, h = n.pendingProps, m = i.context, s = t.contextType, typeof s == "object" && s !== null ? s = Pe(s) : (s = he(t) ? Ln : ue.current, s = it(n, s));
    var g = t.getDerivedStateFromProps;
    (p = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== h || m !== s) && Uu(n, i, r, s), en = !1, m = n.memoizedState, i.state = m, qr(n, r, i, l);
    var w = n.memoizedState;
    u !== h || m !== w || me.current || en ? (typeof g == "function" && (Ro(n, t, g, r), w = n.memoizedState), (c = en || $u(n, t, c, r, m, w, s) || !1) ? (p || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, s)), typeof i.componentDidUpdate == "function" && (n.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = w), i.props = r, i.state = w, i.context = s, r = c) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (n.flags |= 1024), r = !1);
  }
  return Do(e, n, t, r, o, l);
}
function Do(e, n, t, r, l, o) {
  Za(e, n);
  var i = (n.flags & 128) !== 0;
  if (!r && !i) return l && Ru(n, t, !1), Ze(e, n, o);
  r = n.stateNode, Dd.current = n;
  var u = i && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return n.flags |= 1, e !== null && i ? (n.child = st(n, e.child, null, o), n.child = st(n, null, u, o)) : se(e, n, u, o), n.memoizedState = r.state, l && Ru(n, t, !0), n.child;
}
function Ja(e) {
  var n = e.stateNode;
  n.pendingContext ? Tu(e, n.pendingContext, n.pendingContext !== n.context) : n.context && Tu(e, n.context, !1), Si(e, n.containerInfo);
}
function Ku(e, n, t, r, l) {
  return ut(), hi(l), n.flags |= 256, se(e, n, t, r), n.child;
}
var jo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Fo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function qa(e, n, t) {
  var r = n.pendingProps, l = V.current, o = !1, i = (n.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), I(V, l & 1), e === null)
    return zo(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (n.mode & 1 ? e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = n.mode, o = n.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = gl(i, r, 0, null), e = Rn(e, r, t, null), o.return = n, e.return = n, o.sibling = e, n.child = o, n.child.memoizedState = Fo(t), n.memoizedState = jo, e) : Ti(n, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return jd(e, n, i, r, u, l, t);
  if (o) {
    o = r.fallback, i = n.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(i & 1) && n.child !== l ? (r = n.child, r.childLanes = 0, r.pendingProps = s, n.deletions = null) : (r = mn(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = mn(u, o) : (o = Rn(o, i, t, null), o.flags |= 2), o.return = n, r.return = n, r.sibling = o, n.child = r, r = o, o = n.child, i = e.child.memoizedState, i = i === null ? Fo(t) : { baseLanes: i.baseLanes | t, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~t, n.memoizedState = jo, r;
  }
  return o = e.child, e = o.sibling, r = mn(o, { mode: "visible", children: r.children }), !(n.mode & 1) && (r.lanes = t), r.return = n, r.sibling = null, e !== null && (t = n.deletions, t === null ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = r, n.memoizedState = null, r;
}
function Ti(e, n) {
  return n = gl({ mode: "visible", children: n }, e.mode, 0, null), n.return = e, e.child = n;
}
function Sr(e, n, t, r) {
  return r !== null && hi(r), st(n, e.child, null, t), e = Ti(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
}
function jd(e, n, t, r, l, o, i) {
  if (t)
    return n.flags & 256 ? (n.flags &= -257, r = Gl(Error(y(422))), Sr(e, n, i, r)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (o = r.fallback, l = n.mode, r = gl({ mode: "visible", children: r.children }, l, 0, null), o = Rn(o, l, i, null), o.flags |= 2, r.return = n, o.return = n, r.sibling = o, n.child = r, n.mode & 1 && st(n, e.child, null, i), n.child.memoizedState = Fo(i), n.memoizedState = jo, o);
  if (!(n.mode & 1)) return Sr(e, n, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, o = Error(y(419)), r = Gl(o, r, void 0), Sr(e, n, i, r);
  }
  if (u = (i & e.childLanes) !== 0, pe || u) {
    if (r = ee, r !== null) {
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
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, Ge(e, l), je(r, e, l, -1));
    }
    return ji(), r = Gl(Error(y(421))), Sr(e, n, i, r);
  }
  return l.data === "$?" ? (n.flags |= 128, n.child = e.child, n = Xd.bind(null, e), l._reactRetry = n, null) : (e = o.treeContext, ge = cn(l.nextSibling), we = n, A = !0, Me = null, e !== null && (xe[Ce++] = We, xe[Ce++] = Qe, xe[Ce++] = On, We = e.id, Qe = e.overflow, On = n), n = Ti(n, r.children), n.flags |= 4096, n);
}
function Yu(e, n, t) {
  e.lanes |= n;
  var r = e.alternate;
  r !== null && (r.lanes |= n), To(e.return, n, t);
}
function Zl(e, n, t, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: l } : (o.isBackwards = n, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = t, o.tailMode = l);
}
function ba(e, n, t) {
  var r = n.pendingProps, l = r.revealOrder, o = r.tail;
  if (se(e, n, r.children, t), r = V.current, r & 2) r = r & 1 | 2, n.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = n.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Yu(e, t, n);
      else if (e.tag === 19) Yu(e, t, n);
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
  if (I(V, r), !(n.mode & 1)) n.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (t = n.child, l = null; t !== null; ) e = t.alternate, e !== null && br(e) === null && (l = t), t = t.sibling;
      t = l, t === null ? (l = n.child, n.child = null) : (l = t.sibling, t.sibling = null), Zl(n, !1, l, t, o);
      break;
    case "backwards":
      for (t = null, l = n.child, n.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && br(e) === null) {
          n.child = l;
          break;
        }
        e = l.sibling, l.sibling = t, t = l, l = e;
      }
      Zl(n, !0, t, null, o);
      break;
    case "together":
      Zl(n, !1, null, null, void 0);
      break;
    default:
      n.memoizedState = null;
  }
  return n.child;
}
function Mr(e, n) {
  !(n.mode & 1) && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2);
}
function Ze(e, n, t) {
  if (e !== null && (n.dependencies = e.dependencies), Dn |= n.lanes, !(t & n.childLanes)) return null;
  if (e !== null && n.child !== e.child) throw Error(y(153));
  if (n.child !== null) {
    for (e = n.child, t = mn(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; ) e = e.sibling, t = t.sibling = mn(e, e.pendingProps), t.return = n;
    t.sibling = null;
  }
  return n.child;
}
function Fd(e, n, t) {
  switch (n.tag) {
    case 3:
      Ja(n), ut();
      break;
    case 5:
      _a(n);
      break;
    case 1:
      he(n.type) && Yr(n);
      break;
    case 4:
      Si(n, n.stateNode.containerInfo);
      break;
    case 10:
      var r = n.type._context, l = n.memoizedProps.value;
      I(Zr, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = n.memoizedState, r !== null)
        return r.dehydrated !== null ? (I(V, V.current & 1), n.flags |= 128, null) : t & n.child.childLanes ? qa(e, n, t) : (I(V, V.current & 1), e = Ze(e, n, t), e !== null ? e.sibling : null);
      I(V, V.current & 1);
      break;
    case 19:
      if (r = (t & n.childLanes) !== 0, e.flags & 128) {
        if (r) return ba(e, n, t);
        n.flags |= 128;
      }
      if (l = n.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), I(V, V.current), r) break;
      return null;
    case 22:
    case 23:
      return n.lanes = 0, Ga(e, n, t);
  }
  return Ze(e, n, t);
}
var ec, Io, nc, tc;
ec = function(e, n) {
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
Io = function() {
};
nc = function(e, n, t, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = n.stateNode, Pn(Ve.current);
    var o = null;
    switch (t) {
      case "input":
        l = lo(e, l), r = lo(e, r), o = [];
        break;
      case "select":
        l = H({}, l, { value: void 0 }), r = H({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = uo(e, l), r = uo(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Qr);
    }
    ao(t, r);
    var i;
    t = null;
    for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
      var u = l[c];
      for (i in u) u.hasOwnProperty(i) && (t || (t = {}), t[i] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && ($t.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (u = l != null ? l[c] : void 0, r.hasOwnProperty(c) && s !== u && (s != null || u != null)) if (c === "style") if (u) {
        for (i in u) !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (t || (t = {}), t[i] = "");
        for (i in s) s.hasOwnProperty(i) && u[i] !== s[i] && (t || (t = {}), t[i] = s[i]);
      } else t || (o || (o = []), o.push(
        c,
        t
      )), t = s;
      else c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && ($t.hasOwnProperty(c) ? (s != null && c === "onScroll" && $("scroll", e), o || u === s || (o = [])) : (o = o || []).push(c, s));
    }
    t && (o = o || []).push("style", t);
    var c = o;
    (n.updateQueue = c) && (n.flags |= 4);
  }
};
tc = function(e, n, t, r) {
  t !== r && (n.flags |= 4);
};
function xt(e, n) {
  if (!A) switch (e.tailMode) {
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
function oe(e) {
  var n = e.alternate !== null && e.alternate.child === e.child, t = 0, r = 0;
  if (n) for (var l = e.child; l !== null; ) t |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) t |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = t, n;
}
function Id(e, n, t) {
  var r = n.pendingProps;
  switch (mi(n), n.tag) {
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
      return oe(n), null;
    case 1:
      return he(n.type) && Kr(), oe(n), null;
    case 3:
      return r = n.stateNode, at(), U(me), U(ue), xi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (wr(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, Me !== null && (Qo(Me), Me = null))), Io(e, n), oe(n), null;
    case 5:
      Ei(n);
      var l = Pn(Zt.current);
      if (t = n.type, e !== null && n.stateNode != null) nc(e, n, t, r, l), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
      else {
        if (!r) {
          if (n.stateNode === null) throw Error(y(166));
          return oe(n), null;
        }
        if (e = Pn(Ve.current), wr(n)) {
          r = n.stateNode, t = n.type;
          var o = n.memoizedProps;
          switch (r[Ue] = n, r[Xt] = o, e = (n.mode & 1) !== 0, t) {
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
              for (l = 0; l < zt.length; l++) $(zt[l], r);
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
              tu(r, o), $("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, $("invalid", r);
              break;
            case "textarea":
              lu(r, o), $("invalid", r);
          }
          ao(t, o), l = null;
          for (var i in o) if (o.hasOwnProperty(i)) {
            var u = o[i];
            i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && gr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && gr(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : $t.hasOwnProperty(i) && u != null && i === "onScroll" && $("scroll", r);
          }
          switch (t) {
            case "input":
              cr(r), ru(r, o, !0);
              break;
            case "textarea":
              cr(r), ou(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Qr);
          }
          r = l, n.updateQueue = r, r !== null && (n.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Rs(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(t, { is: r.is }) : (e = i.createElement(t), t === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, t), e[Ue] = n, e[Xt] = r, ec(e, n, !1, !1), n.stateNode = e;
          e: {
            switch (i = co(t, r), t) {
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
                for (l = 0; l < zt.length; l++) $(zt[l], e);
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
                tu(e, r), l = lo(e, r), $("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = H({}, r, { value: void 0 }), $("invalid", e);
                break;
              case "textarea":
                lu(e, r), l = uo(e, r), $("invalid", e);
                break;
              default:
                l = r;
            }
            ao(t, l), u = l;
            for (o in u) if (u.hasOwnProperty(o)) {
              var s = u[o];
              o === "style" ? Ms(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Ls(e, s)) : o === "children" ? typeof s == "string" ? (t !== "textarea" || s !== "") && Ut(e, s) : typeof s == "number" && Ut(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && ($t.hasOwnProperty(o) ? s != null && o === "onScroll" && $("scroll", e) : s != null && bo(e, o, s, i));
            }
            switch (t) {
              case "input":
                cr(e), ru(e, r, !1);
                break;
              case "textarea":
                cr(e), ou(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + hn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? bn(e, !!r.multiple, o, !1) : r.defaultValue != null && bn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Qr);
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
      return oe(n), null;
    case 6:
      if (e && n.stateNode != null) tc(e, n, e.memoizedProps, r);
      else {
        if (typeof r != "string" && n.stateNode === null) throw Error(y(166));
        if (t = Pn(Zt.current), Pn(Ve.current), wr(n)) {
          if (r = n.stateNode, t = n.memoizedProps, r[Ue] = n, (o = r.nodeValue !== t) && (e = we, e !== null)) switch (e.tag) {
            case 3:
              gr(r.nodeValue, t, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && gr(r.nodeValue, t, (e.mode & 1) !== 0);
          }
          o && (n.flags |= 4);
        } else r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[Ue] = n, n.stateNode = r;
      }
      return oe(n), null;
    case 13:
      if (U(V), r = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (A && ge !== null && n.mode & 1 && !(n.flags & 128)) ka(), ut(), n.flags |= 98560, o = !1;
        else if (o = wr(n), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(y(318));
            if (o = n.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(y(317));
            o[Ue] = n;
          } else ut(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
          oe(n), o = !1;
        } else Me !== null && (Qo(Me), Me = null), o = !0;
        if (!o) return n.flags & 65536 ? n : null;
      }
      return n.flags & 128 ? (n.lanes = t, n) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (n.child.flags |= 8192, n.mode & 1 && (e === null || V.current & 1 ? Z === 0 && (Z = 3) : ji())), n.updateQueue !== null && (n.flags |= 4), oe(n), null);
    case 4:
      return at(), Io(e, n), e === null && Kt(n.stateNode.containerInfo), oe(n), null;
    case 10:
      return gi(n.type._context), oe(n), null;
    case 17:
      return he(n.type) && Kr(), oe(n), null;
    case 19:
      if (U(V), o = n.memoizedState, o === null) return oe(n), null;
      if (r = (n.flags & 128) !== 0, i = o.rendering, i === null) if (r) xt(o, !1);
      else {
        if (Z !== 0 || e !== null && e.flags & 128) for (e = n.child; e !== null; ) {
          if (i = br(e), i !== null) {
            for (n.flags |= 128, xt(o, !1), r = i.updateQueue, r !== null && (n.updateQueue = r, n.flags |= 4), n.subtreeFlags = 0, r = t, t = n.child; t !== null; ) o = t, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
            return I(V, V.current & 1 | 2), n.child;
          }
          e = e.sibling;
        }
        o.tail !== null && Y() > ft && (n.flags |= 128, r = !0, xt(o, !1), n.lanes = 4194304);
      }
      else {
        if (!r) if (e = br(i), e !== null) {
          if (n.flags |= 128, r = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), xt(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !A) return oe(n), null;
        } else 2 * Y() - o.renderingStartTime > ft && t !== 1073741824 && (n.flags |= 128, r = !0, xt(o, !1), n.lanes = 4194304);
        o.isBackwards ? (i.sibling = n.child, n.child = i) : (t = o.last, t !== null ? t.sibling = i : n.child = i, o.last = i);
      }
      return o.tail !== null ? (n = o.tail, o.rendering = n, o.tail = n.sibling, o.renderingStartTime = Y(), n.sibling = null, t = V.current, I(V, r ? t & 1 | 2 : t & 1), n) : (oe(n), null);
    case 22:
    case 23:
      return Di(), r = n.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (n.flags |= 8192), r && n.mode & 1 ? ye & 1073741824 && (oe(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : oe(n), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, n.tag));
}
function $d(e, n) {
  switch (mi(n), n.tag) {
    case 1:
      return he(n.type) && Kr(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
    case 3:
      return at(), U(me), U(ue), xi(), e = n.flags, e & 65536 && !(e & 128) ? (n.flags = e & -65537 | 128, n) : null;
    case 5:
      return Ei(n), null;
    case 13:
      if (U(V), e = n.memoizedState, e !== null && e.dehydrated !== null) {
        if (n.alternate === null) throw Error(y(340));
        ut();
      }
      return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
    case 19:
      return U(V), null;
    case 4:
      return at(), null;
    case 10:
      return gi(n.type._context), null;
    case 22:
    case 23:
      return Di(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Er = !1, ie = !1, Ud = typeof WeakSet == "function" ? WeakSet : Set, E = null;
function Jn(e, n) {
  var t = e.ref;
  if (t !== null) if (typeof t == "function") try {
    t(null);
  } catch (r) {
    W(e, n, r);
  }
  else t.current = null;
}
function $o(e, n, t) {
  try {
    t();
  } catch (r) {
    W(e, n, r);
  }
}
var Xu = !1;
function Ad(e, n) {
  if (So = Br, e = ua(), di(e)) {
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
  for (Eo = { focusedElem: e, selectionRange: t }, Br = !1, E = n; E !== null; ) if (n = E, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null) e.return = n, E = e;
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
            var S = w.memoizedProps, F = w.memoizedState, f = n.stateNode, a = f.getSnapshotBeforeUpdate(n.elementType === n.type ? S : Le(n.type, S), F);
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
      W(n, n.return, v);
    }
    if (e = n.sibling, e !== null) {
      e.return = n.return, E = e;
      break;
    }
    E = n.return;
  }
  return w = Xu, Xu = !1, w;
}
function jt(e, n, t) {
  var r = n.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && $o(n, t, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function vl(e, n) {
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
function Uo(e) {
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
function rc(e) {
  var n = e.alternate;
  n !== null && (e.alternate = null, rc(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[Ue], delete n[Xt], delete n[_o], delete n[Ed], delete n[xd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function lc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Gu(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || lc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ao(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = Qr));
  else if (r !== 4 && (e = e.child, e !== null)) for (Ao(e, n, t), e = e.sibling; e !== null; ) Ao(e, n, t), e = e.sibling;
}
function Vo(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Vo(e, n, t), e = e.sibling; e !== null; ) Vo(e, n, t), e = e.sibling;
}
var ne = null, Oe = !1;
function qe(e, n, t) {
  for (t = t.child; t !== null; ) oc(e, n, t), t = t.sibling;
}
function oc(e, n, t) {
  if (Ae && typeof Ae.onCommitFiberUnmount == "function") try {
    Ae.onCommitFiberUnmount(sl, t);
  } catch {
  }
  switch (t.tag) {
    case 5:
      ie || Jn(t, n);
    case 6:
      var r = ne, l = Oe;
      ne = null, qe(e, n, t), ne = r, Oe = l, ne !== null && (Oe ? (e = ne, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : ne.removeChild(t.stateNode));
      break;
    case 18:
      ne !== null && (Oe ? (e = ne, t = t.stateNode, e.nodeType === 8 ? Hl(e.parentNode, t) : e.nodeType === 1 && Hl(e, t), Ht(e)) : Hl(ne, t.stateNode));
      break;
    case 4:
      r = ne, l = Oe, ne = t.stateNode.containerInfo, Oe = !0, qe(e, n, t), ne = r, Oe = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ie && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && $o(t, n, i), l = l.next;
        } while (l !== r);
      }
      qe(e, n, t);
      break;
    case 1:
      if (!ie && (Jn(t, n), r = t.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount();
      } catch (u) {
        W(t, n, u);
      }
      qe(e, n, t);
      break;
    case 21:
      qe(e, n, t);
      break;
    case 22:
      t.mode & 1 ? (ie = (r = ie) || t.memoizedState !== null, qe(e, n, t), ie = r) : qe(e, n, t);
      break;
    default:
      qe(e, n, t);
  }
}
function Zu(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var t = e.stateNode;
    t === null && (t = e.stateNode = new Ud()), n.forEach(function(r) {
      var l = Gd.bind(null, e, r);
      t.has(r) || (t.add(r), r.then(l, l));
    });
  }
}
function Re(e, n) {
  var t = n.deletions;
  if (t !== null) for (var r = 0; r < t.length; r++) {
    var l = t[r];
    try {
      var o = e, i = n, u = i;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            ne = u.stateNode, Oe = !1;
            break e;
          case 3:
            ne = u.stateNode.containerInfo, Oe = !0;
            break e;
          case 4:
            ne = u.stateNode.containerInfo, Oe = !0;
            break e;
        }
        u = u.return;
      }
      if (ne === null) throw Error(y(160));
      oc(o, i, l), ne = null, Oe = !1;
      var s = l.alternate;
      s !== null && (s.return = null), l.return = null;
    } catch (c) {
      W(l, n, c);
    }
  }
  if (n.subtreeFlags & 12854) for (n = n.child; n !== null; ) ic(n, e), n = n.sibling;
}
function ic(e, n) {
  var t = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Re(n, e), Ie(e), r & 4) {
        try {
          jt(3, e, e.return), vl(3, e);
        } catch (S) {
          W(e, e.return, S);
        }
        try {
          jt(5, e, e.return);
        } catch (S) {
          W(e, e.return, S);
        }
      }
      break;
    case 1:
      Re(n, e), Ie(e), r & 512 && t !== null && Jn(t, t.return);
      break;
    case 5:
      if (Re(n, e), Ie(e), r & 512 && t !== null && Jn(t, t.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Ut(l, "");
        } catch (S) {
          W(e, e.return, S);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = t !== null ? t.memoizedProps : o, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          u === "input" && o.type === "radio" && o.name != null && zs(l, o), co(u, i);
          var c = co(u, o);
          for (i = 0; i < s.length; i += 2) {
            var p = s[i], h = s[i + 1];
            p === "style" ? Ms(l, h) : p === "dangerouslySetInnerHTML" ? Ls(l, h) : p === "children" ? Ut(l, h) : bo(l, p, h, c);
          }
          switch (u) {
            case "input":
              oo(l, o);
              break;
            case "textarea":
              Ts(l, o);
              break;
            case "select":
              var m = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!o.multiple;
              var g = o.value;
              g != null ? bn(l, !!o.multiple, g, !1) : m !== !!o.multiple && (o.defaultValue != null ? bn(
                l,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : bn(l, !!o.multiple, o.multiple ? [] : "", !1));
          }
          l[Xt] = o;
        } catch (S) {
          W(e, e.return, S);
        }
      }
      break;
    case 6:
      if (Re(n, e), Ie(e), r & 4) {
        if (e.stateNode === null) throw Error(y(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (S) {
          W(e, e.return, S);
        }
      }
      break;
    case 3:
      if (Re(n, e), Ie(e), r & 4 && t !== null && t.memoizedState.isDehydrated) try {
        Ht(n.containerInfo);
      } catch (S) {
        W(e, e.return, S);
      }
      break;
    case 4:
      Re(n, e), Ie(e);
      break;
    case 13:
      Re(n, e), Ie(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Oi = Y())), r & 4 && Zu(e);
      break;
    case 22:
      if (p = t !== null && t.memoizedState !== null, e.mode & 1 ? (ie = (c = ie) || p, Re(n, e), ie = c) : Re(n, e), Ie(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !p && e.mode & 1) for (E = e, p = e.child; p !== null; ) {
          for (h = E = p; E !== null; ) {
            switch (m = E, g = m.child, m.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                jt(4, m, m.return);
                break;
              case 1:
                Jn(m, m.return);
                var w = m.stateNode;
                if (typeof w.componentWillUnmount == "function") {
                  r = m, t = m.return;
                  try {
                    n = r, w.props = n.memoizedProps, w.state = n.memoizedState, w.componentWillUnmount();
                  } catch (S) {
                    W(r, t, S);
                  }
                }
                break;
              case 5:
                Jn(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  qu(h);
                  continue;
                }
            }
            g !== null ? (g.return = m, E = g) : qu(h);
          }
          p = p.sibling;
        }
        e: for (p = null, h = e; ; ) {
          if (h.tag === 5) {
            if (p === null) {
              p = h;
              try {
                l = h.stateNode, c ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = h.stateNode, s = h.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Os("display", i));
              } catch (S) {
                W(e, e.return, S);
              }
            }
          } else if (h.tag === 6) {
            if (p === null) try {
              h.stateNode.nodeValue = c ? "" : h.memoizedProps;
            } catch (S) {
              W(e, e.return, S);
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
      Re(n, e), Ie(e), r & 4 && Zu(e);
      break;
    case 21:
      break;
    default:
      Re(
        n,
        e
      ), Ie(e);
  }
}
function Ie(e) {
  var n = e.flags;
  if (n & 2) {
    try {
      e: {
        for (var t = e.return; t !== null; ) {
          if (lc(t)) {
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
          r.flags & 32 && (Ut(l, ""), r.flags &= -33);
          var o = Gu(e);
          Vo(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = Gu(e);
          Ao(e, u, i);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      W(e, e.return, s);
    }
    e.flags &= -3;
  }
  n & 4096 && (e.flags &= -4097);
}
function Vd(e, n, t) {
  E = e, uc(e);
}
function uc(e, n, t) {
  for (var r = (e.mode & 1) !== 0; E !== null; ) {
    var l = E, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Er;
      if (!i) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || ie;
        u = Er;
        var c = ie;
        if (Er = i, (ie = s) && !c) for (E = l; E !== null; ) i = E, s = i.child, i.tag === 22 && i.memoizedState !== null ? bu(l) : s !== null ? (s.return = i, E = s) : bu(l);
        for (; o !== null; ) E = o, uc(o), o = o.sibling;
        E = l, Er = u, ie = c;
      }
      Ju(e);
    } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, E = o) : Ju(e);
  }
}
function Ju(e) {
  for (; E !== null; ) {
    var n = E;
    if (n.flags & 8772) {
      var t = n.alternate;
      try {
        if (n.flags & 8772) switch (n.tag) {
          case 0:
          case 11:
          case 15:
            ie || vl(5, n);
            break;
          case 1:
            var r = n.stateNode;
            if (n.flags & 4 && !ie) if (t === null) r.componentDidMount();
            else {
              var l = n.elementType === n.type ? t.memoizedProps : Le(n.type, t.memoizedProps);
              r.componentDidUpdate(l, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = n.updateQueue;
            o !== null && ju(n, o, r);
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
              ju(n, i, t);
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
                  h !== null && Ht(h);
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
        ie || n.flags & 512 && Uo(n);
      } catch (m) {
        W(n, n.return, m);
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
function qu(e) {
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
function bu(e) {
  for (; E !== null; ) {
    var n = E;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var t = n.return;
          try {
            vl(4, n);
          } catch (s) {
            W(n, t, s);
          }
          break;
        case 1:
          var r = n.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = n.return;
            try {
              r.componentDidMount();
            } catch (s) {
              W(n, l, s);
            }
          }
          var o = n.return;
          try {
            Uo(n);
          } catch (s) {
            W(n, o, s);
          }
          break;
        case 5:
          var i = n.return;
          try {
            Uo(n);
          } catch (s) {
            W(n, i, s);
          }
      }
    } catch (s) {
      W(n, n.return, s);
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
var Bd = Math.ceil, tl = Je.ReactCurrentDispatcher, Ri = Je.ReactCurrentOwner, Ne = Je.ReactCurrentBatchConfig, M = 0, ee = null, X = null, te = 0, ye = 0, qn = gn(0), Z = 0, er = null, Dn = 0, yl = 0, Li = 0, Ft = null, de = null, Oi = 0, ft = 1 / 0, Be = null, rl = !1, Bo = null, dn = null, xr = !1, ln = null, ll = 0, It = 0, Ho = null, Dr = -1, jr = 0;
function ae() {
  return M & 6 ? Y() : Dr !== -1 ? Dr : Dr = Y();
}
function pn(e) {
  return e.mode & 1 ? M & 2 && te !== 0 ? te & -te : _d.transition !== null ? (jr === 0 && (jr = Qs()), jr) : (e = j, e !== 0 || (e = window.event, e = e === void 0 ? 16 : qs(e.type)), e) : 1;
}
function je(e, n, t, r) {
  if (50 < It) throw It = 0, Ho = null, Error(y(185));
  tr(e, t, r), (!(M & 2) || e !== ee) && (e === ee && (!(M & 2) && (yl |= t), Z === 4 && tn(e, te)), ve(e, r), t === 1 && M === 0 && !(n.mode & 1) && (ft = Y() + 500, pl && wn()));
}
function ve(e, n) {
  var t = e.callbackNode;
  _f(e, n);
  var r = Vr(e, e === ee ? te : 0);
  if (r === 0) t !== null && su(t), e.callbackNode = null, e.callbackPriority = 0;
  else if (n = r & -r, e.callbackPriority !== n) {
    if (t != null && su(t), n === 1) e.tag === 0 ? Cd(es.bind(null, e)) : ya(es.bind(null, e)), kd(function() {
      !(M & 6) && wn();
    }), t = null;
    else {
      switch (Ks(r)) {
        case 1:
          t = li;
          break;
        case 4:
          t = Hs;
          break;
        case 16:
          t = Ar;
          break;
        case 536870912:
          t = Ws;
          break;
        default:
          t = Ar;
      }
      t = hc(t, sc.bind(null, e));
    }
    e.callbackPriority = n, e.callbackNode = t;
  }
}
function sc(e, n) {
  if (Dr = -1, jr = 0, M & 6) throw Error(y(327));
  var t = e.callbackNode;
  if (lt() && e.callbackNode !== t) return null;
  var r = Vr(e, e === ee ? te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || n) n = ol(e, r);
  else {
    n = r;
    var l = M;
    M |= 2;
    var o = cc();
    (ee !== e || te !== n) && (Be = null, ft = Y() + 500, Tn(e, n));
    do
      try {
        Qd();
        break;
      } catch (u) {
        ac(e, u);
      }
    while (!0);
    yi(), tl.current = o, M = l, X !== null ? n = 0 : (ee = null, te = 0, n = Z);
  }
  if (n !== 0) {
    if (n === 2 && (l = vo(e), l !== 0 && (r = l, n = Wo(e, l))), n === 1) throw t = er, Tn(e, 0), tn(e, r), ve(e, Y()), t;
    if (n === 6) tn(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Hd(l) && (n = ol(e, r), n === 2 && (o = vo(e), o !== 0 && (r = o, n = Wo(e, o))), n === 1)) throw t = er, Tn(e, 0), tn(e, r), ve(e, Y()), t;
      switch (e.finishedWork = l, e.finishedLanes = r, n) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          xn(e, de, Be);
          break;
        case 3:
          if (tn(e, r), (r & 130023424) === r && (n = Oi + 500 - Y(), 10 < n)) {
            if (Vr(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ae(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Co(xn.bind(null, e, de, Be), n);
            break;
          }
          xn(e, de, Be);
          break;
        case 4:
          if (tn(e, r), (r & 4194240) === r) break;
          for (n = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - De(r);
            o = 1 << i, i = n[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = Y() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Bd(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Co(xn.bind(null, e, de, Be), r);
            break;
          }
          xn(e, de, Be);
          break;
        case 5:
          xn(e, de, Be);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return ve(e, Y()), e.callbackNode === t ? sc.bind(null, e) : null;
}
function Wo(e, n) {
  var t = Ft;
  return e.current.memoizedState.isDehydrated && (Tn(e, n).flags |= 256), e = ol(e, n), e !== 2 && (n = de, de = t, n !== null && Qo(n)), e;
}
function Qo(e) {
  de === null ? de = e : de.push.apply(de, e);
}
function Hd(e) {
  for (var n = e; ; ) {
    if (n.flags & 16384) {
      var t = n.updateQueue;
      if (t !== null && (t = t.stores, t !== null)) for (var r = 0; r < t.length; r++) {
        var l = t[r], o = l.getSnapshot;
        l = l.value;
        try {
          if (!Fe(o(), l)) return !1;
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
function tn(e, n) {
  for (n &= ~Li, n &= ~yl, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
    var t = 31 - De(n), r = 1 << t;
    e[t] = -1, n &= ~r;
  }
}
function es(e) {
  if (M & 6) throw Error(y(327));
  lt();
  var n = Vr(e, 0);
  if (!(n & 1)) return ve(e, Y()), null;
  var t = ol(e, n);
  if (e.tag !== 0 && t === 2) {
    var r = vo(e);
    r !== 0 && (n = r, t = Wo(e, r));
  }
  if (t === 1) throw t = er, Tn(e, 0), tn(e, n), ve(e, Y()), t;
  if (t === 6) throw Error(y(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = n, xn(e, de, Be), ve(e, Y()), null;
}
function Mi(e, n) {
  var t = M;
  M |= 1;
  try {
    return e(n);
  } finally {
    M = t, M === 0 && (ft = Y() + 500, pl && wn());
  }
}
function jn(e) {
  ln !== null && ln.tag === 0 && !(M & 6) && lt();
  var n = M;
  M |= 1;
  var t = Ne.transition, r = j;
  try {
    if (Ne.transition = null, j = 1, e) return e();
  } finally {
    j = r, Ne.transition = t, M = n, !(M & 6) && wn();
  }
}
function Di() {
  ye = qn.current, U(qn);
}
function Tn(e, n) {
  e.finishedWork = null, e.finishedLanes = 0;
  var t = e.timeoutHandle;
  if (t !== -1 && (e.timeoutHandle = -1, wd(t)), X !== null) for (t = X.return; t !== null; ) {
    var r = t;
    switch (mi(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Kr();
        break;
      case 3:
        at(), U(me), U(ue), xi();
        break;
      case 5:
        Ei(r);
        break;
      case 4:
        at();
        break;
      case 13:
        U(V);
        break;
      case 19:
        U(V);
        break;
      case 10:
        gi(r.type._context);
        break;
      case 22:
      case 23:
        Di();
    }
    t = t.return;
  }
  if (ee = e, X = e = mn(e.current, null), te = ye = n, Z = 0, er = null, Li = yl = Dn = 0, de = Ft = null, Nn !== null) {
    for (n = 0; n < Nn.length; n++) if (t = Nn[n], r = t.interleaved, r !== null) {
      t.interleaved = null;
      var l = r.next, o = t.pending;
      if (o !== null) {
        var i = o.next;
        o.next = l, r.next = i;
      }
      t.pending = r;
    }
    Nn = null;
  }
  return e;
}
function ac(e, n) {
  do {
    var t = X;
    try {
      if (yi(), Lr.current = nl, el) {
        for (var r = B.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        el = !1;
      }
      if (Mn = 0, q = G = B = null, Dt = !1, Jt = 0, Ri.current = null, t === null || t.return === null) {
        Z = 1, er = n, X = null;
        break;
      }
      e: {
        var o = e, i = t.return, u = t, s = n;
        if (n = te, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var c = s, p = u, h = p.tag;
          if (!(p.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = p.alternate;
            m ? (p.updateQueue = m.updateQueue, p.memoizedState = m.memoizedState, p.lanes = m.lanes) : (p.updateQueue = null, p.memoizedState = null);
          }
          var g = Vu(i);
          if (g !== null) {
            g.flags &= -257, Bu(g, i, u, o, n), g.mode & 1 && Au(o, c, n), n = g, s = c;
            var w = n.updateQueue;
            if (w === null) {
              var S = /* @__PURE__ */ new Set();
              S.add(s), n.updateQueue = S;
            } else w.add(s);
            break e;
          } else {
            if (!(n & 1)) {
              Au(o, c, n), ji();
              break e;
            }
            s = Error(y(426));
          }
        } else if (A && u.mode & 1) {
          var F = Vu(i);
          if (F !== null) {
            !(F.flags & 65536) && (F.flags |= 256), Bu(F, i, u, o, n), hi(ct(s, u));
            break e;
          }
        }
        o = s = ct(s, u), Z !== 4 && (Z = 2), Ft === null ? Ft = [o] : Ft.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, n &= -n, o.lanes |= n;
              var f = Ka(o, s, n);
              Du(o, f);
              break e;
            case 1:
              u = s;
              var a = o.type, d = o.stateNode;
              if (!(o.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (dn === null || !dn.has(d)))) {
                o.flags |= 65536, n &= -n, o.lanes |= n;
                var v = Ya(o, u, n);
                Du(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      dc(t);
    } catch (k) {
      n = k, X === t && t !== null && (X = t = t.return);
      continue;
    }
    break;
  } while (!0);
}
function cc() {
  var e = tl.current;
  return tl.current = nl, e === null ? nl : e;
}
function ji() {
  (Z === 0 || Z === 3 || Z === 2) && (Z = 4), ee === null || !(Dn & 268435455) && !(yl & 268435455) || tn(ee, te);
}
function ol(e, n) {
  var t = M;
  M |= 2;
  var r = cc();
  (ee !== e || te !== n) && (Be = null, Tn(e, n));
  do
    try {
      Wd();
      break;
    } catch (l) {
      ac(e, l);
    }
  while (!0);
  if (yi(), M = t, tl.current = r, X !== null) throw Error(y(261));
  return ee = null, te = 0, Z;
}
function Wd() {
  for (; X !== null; ) fc(X);
}
function Qd() {
  for (; X !== null && !vf(); ) fc(X);
}
function fc(e) {
  var n = mc(e.alternate, e, ye);
  e.memoizedProps = e.pendingProps, n === null ? dc(e) : X = n, Ri.current = null;
}
function dc(e) {
  var n = e;
  do {
    var t = n.alternate;
    if (e = n.return, n.flags & 32768) {
      if (t = $d(t, n), t !== null) {
        t.flags &= 32767, X = t;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Z = 6, X = null;
        return;
      }
    } else if (t = Id(t, n, ye), t !== null) {
      X = t;
      return;
    }
    if (n = n.sibling, n !== null) {
      X = n;
      return;
    }
    X = n = e;
  } while (n !== null);
  Z === 0 && (Z = 5);
}
function xn(e, n, t) {
  var r = j, l = Ne.transition;
  try {
    Ne.transition = null, j = 1, Kd(e, n, t, r);
  } finally {
    Ne.transition = l, j = r;
  }
  return null;
}
function Kd(e, n, t, r) {
  do
    lt();
  while (ln !== null);
  if (M & 6) throw Error(y(327));
  t = e.finishedWork;
  var l = e.finishedLanes;
  if (t === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, t === e.current) throw Error(y(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = t.lanes | t.childLanes;
  if (Nf(e, o), e === ee && (X = ee = null, te = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || xr || (xr = !0, hc(Ar, function() {
    return lt(), null;
  })), o = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || o) {
    o = Ne.transition, Ne.transition = null;
    var i = j;
    j = 1;
    var u = M;
    M |= 4, Ri.current = null, Ad(e, t), ic(t, e), dd(Eo), Br = !!So, Eo = So = null, e.current = t, Vd(t), yf(), M = u, j = i, Ne.transition = o;
  } else e.current = t;
  if (xr && (xr = !1, ln = e, ll = l), o = e.pendingLanes, o === 0 && (dn = null), kf(t.stateNode), ve(e, Y()), n !== null) for (r = e.onRecoverableError, t = 0; t < n.length; t++) l = n[t], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (rl) throw rl = !1, e = Bo, Bo = null, e;
  return ll & 1 && e.tag !== 0 && lt(), o = e.pendingLanes, o & 1 ? e === Ho ? It++ : (It = 0, Ho = e) : It = 0, wn(), null;
}
function lt() {
  if (ln !== null) {
    var e = Ks(ll), n = Ne.transition, t = j;
    try {
      if (Ne.transition = null, j = 16 > e ? 16 : e, ln === null) var r = !1;
      else {
        if (e = ln, ln = null, ll = 0, M & 6) throw Error(y(331));
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
                      jt(8, p, o);
                  }
                  var h = p.child;
                  if (h !== null) h.return = p, E = h;
                  else for (; E !== null; ) {
                    p = E;
                    var m = p.sibling, g = p.return;
                    if (rc(p), p === c) {
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
                var S = w.child;
                if (S !== null) {
                  w.child = null;
                  do {
                    var F = S.sibling;
                    S.sibling = null, S = F;
                  } while (S !== null);
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
                jt(9, o, o.return);
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
                  vl(9, u);
              }
            } catch (k) {
              W(u, u.return, k);
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
        if (M = l, wn(), Ae && typeof Ae.onPostCommitFiberRoot == "function") try {
          Ae.onPostCommitFiberRoot(sl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      j = t, Ne.transition = n;
    }
  }
  return !1;
}
function ns(e, n, t) {
  n = ct(t, n), n = Ka(e, n, 1), e = fn(e, n, 1), n = ae(), e !== null && (tr(e, 1, n), ve(e, n));
}
function W(e, n, t) {
  if (e.tag === 3) ns(e, e, t);
  else for (; n !== null; ) {
    if (n.tag === 3) {
      ns(n, e, t);
      break;
    } else if (n.tag === 1) {
      var r = n.stateNode;
      if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (dn === null || !dn.has(r))) {
        e = ct(t, e), e = Ya(n, e, 1), n = fn(n, e, 1), e = ae(), n !== null && (tr(n, 1, e), ve(n, e));
        break;
      }
    }
    n = n.return;
  }
}
function Yd(e, n, t) {
  var r = e.pingCache;
  r !== null && r.delete(n), n = ae(), e.pingedLanes |= e.suspendedLanes & t, ee === e && (te & t) === t && (Z === 4 || Z === 3 && (te & 130023424) === te && 500 > Y() - Oi ? Tn(e, 0) : Li |= t), ve(e, n);
}
function pc(e, n) {
  n === 0 && (e.mode & 1 ? (n = pr, pr <<= 1, !(pr & 130023424) && (pr = 4194304)) : n = 1);
  var t = ae();
  e = Ge(e, n), e !== null && (tr(e, n, t), ve(e, t));
}
function Xd(e) {
  var n = e.memoizedState, t = 0;
  n !== null && (t = n.retryLane), pc(e, t);
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
  r !== null && r.delete(n), pc(e, t);
}
var mc;
mc = function(e, n, t) {
  if (e !== null) if (e.memoizedProps !== n.pendingProps || me.current) pe = !0;
  else {
    if (!(e.lanes & t) && !(n.flags & 128)) return pe = !1, Fd(e, n, t);
    pe = !!(e.flags & 131072);
  }
  else pe = !1, A && n.flags & 1048576 && ga(n, Gr, n.index);
  switch (n.lanes = 0, n.tag) {
    case 2:
      var r = n.type;
      Mr(e, n), e = n.pendingProps;
      var l = it(n, ue.current);
      rt(n, t), l = _i(null, n, r, e, l, t);
      var o = Ni();
      return n.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, he(r) ? (o = !0, Yr(n)) : o = !1, n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, ki(n), l.updater = hl, n.stateNode = l, l._reactInternals = n, Lo(n, r, e, t), n = Do(null, n, r, !0, o, t)) : (n.tag = 0, A && o && pi(n), se(null, n, l, t), n = n.child), n;
    case 16:
      r = n.elementType;
      e: {
        switch (Mr(e, n), e = n.pendingProps, l = r._init, r = l(r._payload), n.type = r, l = n.tag = Jd(r), e = Le(r, e), l) {
          case 0:
            n = Mo(null, n, r, e, t);
            break e;
          case 1:
            n = Qu(null, n, r, e, t);
            break e;
          case 11:
            n = Hu(null, n, r, e, t);
            break e;
          case 14:
            n = Wu(null, n, r, Le(r.type, e), t);
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
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Le(r, l), Mo(e, n, r, l, t);
    case 1:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Le(r, l), Qu(e, n, r, l, t);
    case 3:
      e: {
        if (Ja(n), e === null) throw Error(y(387));
        r = n.pendingProps, o = n.memoizedState, l = o.element, Ca(e, n), qr(n, r, null, t);
        var i = n.memoizedState;
        if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, n.updateQueue.baseState = o, n.memoizedState = o, n.flags & 256) {
          l = ct(Error(y(423)), n), n = Ku(e, n, r, t, l);
          break e;
        } else if (r !== l) {
          l = ct(Error(y(424)), n), n = Ku(e, n, r, t, l);
          break e;
        } else for (ge = cn(n.stateNode.containerInfo.firstChild), we = n, A = !0, Me = null, t = Ea(n, null, r, t), n.child = t; t; ) t.flags = t.flags & -3 | 4096, t = t.sibling;
        else {
          if (ut(), r === l) {
            n = Ze(e, n, t);
            break e;
          }
          se(e, n, r, t);
        }
        n = n.child;
      }
      return n;
    case 5:
      return _a(n), e === null && zo(n), r = n.type, l = n.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, xo(r, l) ? i = null : o !== null && xo(r, o) && (n.flags |= 32), Za(e, n), se(e, n, i, t), n.child;
    case 6:
      return e === null && zo(n), null;
    case 13:
      return qa(e, n, t);
    case 4:
      return Si(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = st(n, null, r, t) : se(e, n, r, t), n.child;
    case 11:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Le(r, l), Hu(e, n, r, l, t);
    case 7:
      return se(e, n, n.pendingProps, t), n.child;
    case 8:
      return se(e, n, n.pendingProps.children, t), n.child;
    case 12:
      return se(e, n, n.pendingProps.children, t), n.child;
    case 10:
      e: {
        if (r = n.type._context, l = n.pendingProps, o = n.memoizedProps, i = l.value, I(Zr, r._currentValue), r._currentValue = i, o !== null) if (Fe(o.value, i)) {
          if (o.children === l.children && !me.current) {
            n = Ze(e, n, t);
            break e;
          }
        } else for (o = n.child, o !== null && (o.return = n); o !== null; ) {
          var u = o.dependencies;
          if (u !== null) {
            i = o.child;
            for (var s = u.firstContext; s !== null; ) {
              if (s.context === r) {
                if (o.tag === 1) {
                  s = Ke(-1, t & -t), s.tag = 2;
                  var c = o.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var p = c.pending;
                    p === null ? s.next = s : (s.next = p.next, p.next = s), c.pending = s;
                  }
                }
                o.lanes |= t, s = o.alternate, s !== null && (s.lanes |= t), To(
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
            i.lanes |= t, u = i.alternate, u !== null && (u.lanes |= t), To(i, t, n), i = o.sibling;
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
        se(e, n, l.children, t), n = n.child;
      }
      return n;
    case 9:
      return l = n.type, r = n.pendingProps.children, rt(n, t), l = Pe(l), r = r(l), n.flags |= 1, se(e, n, r, t), n.child;
    case 14:
      return r = n.type, l = Le(r, n.pendingProps), l = Le(r.type, l), Wu(e, n, r, l, t);
    case 15:
      return Xa(e, n, n.type, n.pendingProps, t);
    case 17:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : Le(r, l), Mr(e, n), n.tag = 1, he(r) ? (e = !0, Yr(n)) : e = !1, rt(n, t), Qa(n, r, l), Lo(n, r, l, t), Do(null, n, r, !0, e, t);
    case 19:
      return ba(e, n, t);
    case 22:
      return Ga(e, n, t);
  }
  throw Error(y(156, n.tag));
};
function hc(e, n) {
  return Bs(e, n);
}
function Zd(e, n, t, r) {
  this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function _e(e, n, t, r) {
  return new Zd(e, n, t, r);
}
function Fi(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Jd(e) {
  if (typeof e == "function") return Fi(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ni) return 11;
    if (e === ti) return 14;
  }
  return 2;
}
function mn(e, n) {
  var t = e.alternate;
  return t === null ? (t = _e(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
}
function Fr(e, n, t, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function") Fi(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case Bn:
      return Rn(t.children, l, o, n);
    case ei:
      i = 8, l |= 8;
      break;
    case eo:
      return e = _e(12, t, n, l | 2), e.elementType = eo, e.lanes = o, e;
    case no:
      return e = _e(13, t, n, l), e.elementType = no, e.lanes = o, e;
    case to:
      return e = _e(19, t, n, l), e.elementType = to, e.lanes = o, e;
    case _s:
      return gl(t, l, o, n);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case xs:
          i = 10;
          break e;
        case Cs:
          i = 9;
          break e;
        case ni:
          i = 11;
          break e;
        case ti:
          i = 14;
          break e;
        case be:
          i = 16, r = null;
          break e;
      }
      throw Error(y(130, e == null ? e : typeof e, ""));
  }
  return n = _e(i, t, n, l), n.elementType = e, n.type = r, n.lanes = o, n;
}
function Rn(e, n, t, r) {
  return e = _e(7, e, r, n), e.lanes = t, e;
}
function gl(e, n, t, r) {
  return e = _e(22, e, r, n), e.elementType = _s, e.lanes = t, e.stateNode = { isHidden: !1 }, e;
}
function Jl(e, n, t) {
  return e = _e(6, e, null, n), e.lanes = t, e;
}
function ql(e, n, t) {
  return n = _e(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
}
function qd(e, n, t, r, l) {
  this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ol(0), this.expirationTimes = Ol(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ol(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Ii(e, n, t, r, l, o, i, u, s) {
  return e = new qd(e, n, t, u, s), n === 1 ? (n = 1, o === !0 && (n |= 8)) : n = 0, o = _e(3, null, null, n), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ki(o), e;
}
function bd(e, n, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Vn, key: r == null ? null : "" + r, children: e, containerInfo: n, implementation: t };
}
function vc(e) {
  if (!e) return vn;
  e = e._reactInternals;
  e: {
    if (Un(e) !== e || e.tag !== 1) throw Error(y(170));
    var n = e;
    do {
      switch (n.tag) {
        case 3:
          n = n.stateNode.context;
          break e;
        case 1:
          if (he(n.type)) {
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
    if (he(t)) return va(e, t, n);
  }
  return n;
}
function yc(e, n, t, r, l, o, i, u, s) {
  return e = Ii(t, r, !0, e, l, o, i, u, s), e.context = vc(null), t = e.current, r = ae(), l = pn(t), o = Ke(r, l), o.callback = n ?? null, fn(t, o, l), e.current.lanes = l, tr(e, l, r), ve(e, r), e;
}
function wl(e, n, t, r) {
  var l = n.current, o = ae(), i = pn(l);
  return t = vc(t), n.context === null ? n.context = t : n.pendingContext = t, n = Ke(o, i), n.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (n.callback = r), e = fn(l, n, i), e !== null && (je(e, l, i, o), Rr(e, l, i)), i;
}
function il(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ts(e, n) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var t = e.retryLane;
    e.retryLane = t !== 0 && t < n ? t : n;
  }
}
function $i(e, n) {
  ts(e, n), (e = e.alternate) && ts(e, n);
}
function ep() {
  return null;
}
var gc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ui(e) {
  this._internalRoot = e;
}
kl.prototype.render = Ui.prototype.render = function(e) {
  var n = this._internalRoot;
  if (n === null) throw Error(y(409));
  wl(e, n, null, null);
};
kl.prototype.unmount = Ui.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    jn(function() {
      wl(null, e, null, null);
    }), n[Xe] = null;
  }
};
function kl(e) {
  this._internalRoot = e;
}
kl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var n = Gs();
    e = { blockedOn: null, target: e, priority: n };
    for (var t = 0; t < nn.length && n !== 0 && n < nn[t].priority; t++) ;
    nn.splice(t, 0, e), t === 0 && Js(e);
  }
};
function Ai(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Sl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function rs() {
}
function np(e, n, t, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var c = il(i);
        o.call(c);
      };
    }
    var i = yc(n, r, e, 0, null, !1, !1, "", rs);
    return e._reactRootContainer = i, e[Xe] = i.current, Kt(e.nodeType === 8 ? e.parentNode : e), jn(), i;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var c = il(s);
      u.call(c);
    };
  }
  var s = Ii(e, 0, !1, null, null, !1, !1, "", rs);
  return e._reactRootContainer = s, e[Xe] = s.current, Kt(e.nodeType === 8 ? e.parentNode : e), jn(function() {
    wl(n, s, t, r);
  }), s;
}
function El(e, n, t, r, l) {
  var o = t._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var s = il(i);
        u.call(s);
      };
    }
    wl(n, i, e, l);
  } else i = np(t, n, e, l, r);
  return il(i);
}
Ys = function(e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var t = Pt(n.pendingLanes);
        t !== 0 && (oi(n, t | 1), ve(n, Y()), !(M & 6) && (ft = Y() + 500, wn()));
      }
      break;
    case 13:
      jn(function() {
        var r = Ge(e, 1);
        if (r !== null) {
          var l = ae();
          je(r, e, 1, l);
        }
      }), $i(e, 1);
  }
};
ii = function(e) {
  if (e.tag === 13) {
    var n = Ge(e, 134217728);
    if (n !== null) {
      var t = ae();
      je(n, e, 134217728, t);
    }
    $i(e, 134217728);
  }
};
Xs = function(e) {
  if (e.tag === 13) {
    var n = pn(e), t = Ge(e, n);
    if (t !== null) {
      var r = ae();
      je(t, e, n, r);
    }
    $i(e, n);
  }
};
Gs = function() {
  return j;
};
Zs = function(e, n) {
  var t = j;
  try {
    return j = e, n();
  } finally {
    j = t;
  }
};
po = function(e, n, t) {
  switch (n) {
    case "input":
      if (oo(e, t), n = t.name, t.type === "radio" && n != null) {
        for (t = e; t.parentNode; ) t = t.parentNode;
        for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
          var r = t[n];
          if (r !== e && r.form === e.form) {
            var l = dl(r);
            if (!l) throw Error(y(90));
            Ps(r), oo(r, l);
          }
        }
      }
      break;
    case "textarea":
      Ts(e, t);
      break;
    case "select":
      n = t.value, n != null && bn(e, !!t.multiple, n, !1);
  }
};
Fs = Mi;
Is = jn;
var tp = { usingClientEntryPoint: !1, Events: [lr, Kn, dl, Ds, js, Mi] }, Ct = { findFiberByHostInstance: _n, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, rp = { bundleType: Ct.bundleType, version: Ct.version, rendererPackageName: Ct.rendererPackageName, rendererConfig: Ct.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Je.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = As(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Ct.findFiberByHostInstance || ep, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Cr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Cr.isDisabled && Cr.supportsFiber) try {
    sl = Cr.inject(rp), Ae = Cr;
  } catch {
  }
}
Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tp;
Se.createPortal = function(e, n) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ai(n)) throw Error(y(200));
  return bd(e, n, null, t);
};
Se.createRoot = function(e, n) {
  if (!Ai(e)) throw Error(y(299));
  var t = !1, r = "", l = gc;
  return n != null && (n.unstable_strictMode === !0 && (t = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), n = Ii(e, 1, !1, null, null, t, !1, r, l), e[Xe] = n.current, Kt(e.nodeType === 8 ? e.parentNode : e), new Ui(n);
};
Se.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var n = e._reactInternals;
  if (n === void 0)
    throw typeof e.render == "function" ? Error(y(188)) : (e = Object.keys(e).join(","), Error(y(268, e)));
  return e = As(n), e = e === null ? null : e.stateNode, e;
};
Se.flushSync = function(e) {
  return jn(e);
};
Se.hydrate = function(e, n, t) {
  if (!Sl(n)) throw Error(y(200));
  return El(null, e, n, !0, t);
};
Se.hydrateRoot = function(e, n, t) {
  if (!Ai(e)) throw Error(y(405));
  var r = t != null && t.hydratedSources || null, l = !1, o = "", i = gc;
  if (t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), n = yc(n, null, e, 1, t ?? null, l, !1, o, i), e[Xe] = n.current, Kt(e), r) for (e = 0; e < r.length; e++) t = r[e], l = t._getVersion, l = l(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, l] : n.mutableSourceEagerHydrationData.push(
    t,
    l
  );
  return new kl(n);
};
Se.render = function(e, n, t) {
  if (!Sl(n)) throw Error(y(200));
  return El(null, e, n, !1, t);
};
Se.unmountComponentAtNode = function(e) {
  if (!Sl(e)) throw Error(y(40));
  return e._reactRootContainer ? (jn(function() {
    El(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Xe] = null;
    });
  }), !0) : !1;
};
Se.unstable_batchedUpdates = Mi;
Se.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
  if (!Sl(t)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return El(e, n, t, !1, r);
};
Se.version = "18.3.1-next-f1338f8080-20240426";
function wc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wc);
    } catch (e) {
      console.error(e);
    }
}
wc(), ws.exports = Se;
var lp = ws.exports, kc, ls = lp;
kc = ls.createRoot, ls.hydrateRoot;
var Sc = { exports: {} }, op = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", ip = op, up = ip;
function Ec() {
}
function xc() {
}
xc.resetWarningCache = Ec;
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
    checkPropTypes: xc,
    resetWarningCache: Ec
  };
  return t.PropTypes = t, t;
};
Sc.exports = sp();
var ap = Sc.exports;
const P = /* @__PURE__ */ Ko(ap);
var Cc = { exports: {} };
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
})(Cc);
var cp = Cc.exports;
const Fn = /* @__PURE__ */ Ko(cp);
function In() {
  return In = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, In.apply(null, arguments);
}
function xl(e, n) {
  if (e == null) return {};
  var t = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (n.indexOf(r) >= 0) continue;
    t[r] = e[r];
  }
  return t;
}
var Vi = /* @__PURE__ */ D.createContext({});
Vi.Consumer;
Vi.Provider;
function Bi(e, n) {
  var t = b.useContext(Vi);
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
function os(e) {
  return !e || e.trim() === "#";
}
var _c = /* @__PURE__ */ D.forwardRef(function(e, n) {
  var t = e.as, r = t === void 0 ? "a" : t, l = e.disabled, o = e.onKeyDown, i = xl(e, dp), u = function(p) {
    var h = i.href, m = i.onClick;
    if ((l || os(h)) && p.preventDefault(), l) {
      p.stopPropagation();
      return;
    }
    m && m(p);
  }, s = function(p) {
    p.key === " " && (p.preventDefault(), u(p));
  };
  return os(i.href) && (i.role = i.role || "button", i.href = i.href || "#"), l && (i.tabIndex = -1, i["aria-disabled"] = !0), /* @__PURE__ */ D.createElement(r, In({
    ref: n
  }, i, {
    onClick: u,
    onKeyDown: fp(s, o)
  }));
});
_c.displayName = "SafeAnchor";
var pp = ["bsPrefix", "variant", "size", "active", "className", "block", "type", "as"], mp = {
  variant: "primary",
  active: !1,
  disabled: !1
}, Hi = /* @__PURE__ */ D.forwardRef(function(e, n) {
  var t = e.bsPrefix, r = e.variant, l = e.size, o = e.active, i = e.className, u = e.block, s = e.type, c = e.as, p = xl(e, pp), h = Bi(t, "btn"), m = Fn(i, h, o && "active", r && h + "-" + r, u && h + "-block", l && h + "-" + l);
  if (p.href)
    return /* @__PURE__ */ D.createElement(_c, In({}, p, {
      as: c,
      ref: n,
      className: Fn(m, p.disabled && "disabled")
    }));
  n && (p.ref = n), s ? p.type = s : c || (p.type = "button");
  var g = c || "button";
  return /* @__PURE__ */ D.createElement(g, In({}, p, {
    className: m
  }));
});
Hi.displayName = "Button";
Hi.defaultProps = mp;
var hp = ["bsPrefix", "size", "toggle", "vertical", "className", "as"], vp = {
  vertical: !1,
  toggle: !1,
  role: "group"
}, Wi = /* @__PURE__ */ D.forwardRef(function(e, n) {
  var t = e.bsPrefix, r = e.size, l = e.toggle, o = e.vertical, i = e.className, u = e.as, s = u === void 0 ? "div" : u, c = xl(e, hp), p = Bi(t, "btn-group"), h = p;
  return o && (h = p + "-vertical"), /* @__PURE__ */ D.createElement(s, In({}, c, {
    ref: n,
    className: Fn(i, h, r && p + "-" + r, l && p + "-toggle")
  }));
});
Wi.displayName = "ButtonGroup";
Wi.defaultProps = vp;
var yp = ["bsPrefix", "className"], gp = {
  role: "toolbar"
}, Qi = /* @__PURE__ */ D.forwardRef(function(e, n) {
  var t = e.bsPrefix, r = e.className, l = xl(e, yp), o = Bi(t, "btn-toolbar");
  return /* @__PURE__ */ D.createElement("div", In({}, l, {
    ref: n,
    className: Fn(r, o)
  }));
});
Qi.displayName = "ButtonToolbar";
Qi.defaultProps = gp;
let zn = /* @__PURE__ */ function(e) {
  return e.MOVED = "MOVED", e.REMOVED = "REMOVED", e.FORMAT = "FORMAT", e.MOVED_AND_FORMAT = "MOVED_AND_FORMAT", e;
}({});
function Nc(e, n, t) {
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
        case zn.MOVED:
          this.warn(`${n}: The prop '${i}' has been moved to '${s}'.`), o[s] = this.props[i];
          break;
        case zn.REMOVED:
          this.warn(`${n}: The prop '${i}' has been removed. '${h}'`);
          break;
        case zn.FORMAT:
          c(this.props[i]) ? o[i] = this.props[i] : (this.warn(`${n}: The prop '${i}' expects a new format. ${h}`), o[i] = p(this.props[i], this.props));
          break;
        case zn.MOVED_AND_FORMAT: {
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
    Gi(r, "displayName", `withDeprecatedProps(${n})`), r
  );
}
class Ki extends D.Component {
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
      className: Fn(["btn", t], {
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
Ki.propTypes = wp;
Ki.defaultProps = {
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
const kp = Nc(Ki, "Button", {
  label: {
    deprType: zn.MOVED,
    newName: "children"
  },
  className: {
    deprType: zn.FORMAT,
    expect: (e) => typeof e == "string",
    transform: (e) => Array.isArray(e) ? e.join(" ") : e,
    message: "It should be a string."
  }
});
let is = 0;
const Sp = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "id";
  return is += 1, `${e}${is}`;
};
function Yi(e) {
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
      className: Fn("pgn__icon", {
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
Yi.propTypes = {
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
Yi.defaultProps = {
  src: null,
  svgAttrs: {},
  id: void 0,
  hidden: !0,
  screenReaderText: void 0,
  size: void 0,
  className: void 0
};
const Cn = Nc(Yi, "Icon", {
  className: {
    deprType: zn.FORMAT,
    expect: (e) => typeof e == "string",
    transform: (e) => Array.isArray(e) ? e.join(" ") : e,
    message: "It should be a string."
  }
}), on = /* @__PURE__ */ D.forwardRef((e, n) => {
  let {
    children: t,
    iconAfter: r,
    iconBefore: l,
    size: o,
    ...i
  } = e;
  return /* @__PURE__ */ D.createElement(Hi, {
    size: o,
    ...i,
    className: Fn(i.className),
    ref: n
  }, l && /* @__PURE__ */ D.createElement(Cn, {
    className: "btn-icon-before",
    size: o,
    src: l
  }), t, r && /* @__PURE__ */ D.createElement(Cn, {
    className: "btn-icon-after",
    size: o,
    src: r
  }));
});
on.propTypes = {
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
on.defaultProps = {
  ...on.defaultProps,
  children: void 0,
  className: void 0,
  iconBefore: void 0,
  iconAfter: void 0,
  disabled: !1
};
on.Deprecated = kp;
const Pc = /* @__PURE__ */ D.forwardRef((e, n) => {
  let {
    size: t,
    ...r
  } = e;
  return /* @__PURE__ */ D.createElement(Wi, {
    size: t,
    ...r,
    ref: n
  });
});
Pc.propTypes = {
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
Pc.defaultProps = {
  as: "div",
  role: "group",
  toggle: !1,
  vertical: !1,
  bsPrefix: "btn-group",
  size: "md"
};
const zc = /* @__PURE__ */ D.forwardRef((e, n) => /* @__PURE__ */ D.createElement(Qi, {
  ...e,
  ref: n
}));
zc.propTypes = {
  /** An ARIA role describing the button group. */
  role: P.string,
  /** Overrides underlying component base CSS class name */
  bsPrefix: P.string
};
zc.defaultProps = {
  role: "toolbar",
  bsPrefix: "btn-toolbar"
};
const Ep = (e) => /* @__PURE__ */ b.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ b.createElement("path", {
  d: "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59Z",
  fill: "currentColor"
})), xp = (e) => /* @__PURE__ */ b.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...e
}, /* @__PURE__ */ b.createElement("path", {
  d: "M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6Z",
  fill: "currentColor"
})), us = (e) => /* @__PURE__ */ b.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  ...e
}, /* @__PURE__ */ b.createElement("path", {
  d: "M9 7H7v2h2V7zm0 4H7v2h2v-2zm4 4h-2v2h2v-2zm0-12h-2v2h2V3zM9 3H7v2h2V3zm12 0h-2v2h2V3zm0 12h-2v2h2v-2zM9 15H7v2h2v-2zm10-2h2v-2h-2v2zm0-4h2V7h-2v2zM5 7H3v14h14v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z",
  fill: "currentColor"
})), Cp = (e) => /* @__PURE__ */ b.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  ...e
}, /* @__PURE__ */ b.createElement("path", {
  d: "M10.59 9.17 5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z",
  fill: "currentColor"
}));
function _p({ title: e, flashcards: n, styling: t }) {
  const [r, l] = b.useState(-1), [o, i] = b.useState(!1), [u, s] = b.useState(!1), [c, p] = b.useState(!1), [h, m] = b.useState(n), g = (k) => {
    const x = [...k];
    for (let _ = x.length - 1; _ > 0; _--) {
      const N = Math.floor(Math.random() * (_ + 1));
      [x[_], x[N]] = [x[N], x[_]];
    }
    return x;
  }, w = () => {
    s(!0), l(0), i(!1);
  }, S = () => {
    const k = g(n);
    m(k), u && (l(0), i(!1));
  }, F = (k) => {
    p(!0), i(!1), l(k), setTimeout(() => p(!1), 50);
  }, f = () => {
    r < h.length - 1 && F(r + 1);
  }, a = () => {
    r > 0 && F(r - 1);
  }, d = () => {
    i(!o);
  };
  if (!u)
    return /* @__PURE__ */ O.jsxs("div", { className: "flashcards_block", children: [
      /* @__PURE__ */ O.jsxs("div", { className: "fc-number", "aria-label": "Flashcard counter", role: "status", children: [
        "0 / ",
        /* @__PURE__ */ O.jsx("span", { className: "fc-total", children: h.length })
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
      /* @__PURE__ */ O.jsxs("div", { className: "fc-start-controls", children: [
        /* @__PURE__ */ O.jsxs(
          on,
          {
            className: "shuffle-btn",
            onClick: S,
            variant: "outline-primary",
            children: [
              /* @__PURE__ */ O.jsx(Cn, { src: Cp, size: "sm" }),
              "Shuffle"
            ]
          }
        ),
        /* @__PURE__ */ O.jsx(
          on,
          {
            className: "start-btn",
            onClick: w,
            "aria-label": "Start flashcard deck",
            children: "START"
          }
        )
      ] })
    ] });
  const v = h[r];
  return /* @__PURE__ */ O.jsxs("div", { className: "flashcards_block", children: [
    /* @__PURE__ */ O.jsxs("div", { className: "fc-number", "aria-label": "Flashcard counter", role: "status", children: [
      /* @__PURE__ */ O.jsx("span", { className: "current-fc", children: r + 1 }),
      " / ",
      /* @__PURE__ */ O.jsx("span", { className: "fc-total", children: h.length })
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
    /* @__PURE__ */ O.jsxs("div", { className: "fc-container", children: [
      /* @__PURE__ */ O.jsx(
        on,
        {
          className: "nav-btn prev-btn",
          onClick: a,
          disabled: r === 0,
          variant: "light",
          "aria-label": "Previous card",
          children: /* @__PURE__ */ O.jsx(Cn, { src: Ep, size: "sm" })
        }
      ),
      /* @__PURE__ */ O.jsxs(
        "div",
        {
          className: `fc-card ${o ? "is-flipped" : ""} ${c ? "is-navigating" : ""}`,
          onClick: d,
          onKeyDown: (k) => {
            (k.key === "Enter" || k.key === " ") && (k.preventDefault(), d());
          },
          role: "button",
          tabIndex: 0,
          "aria-label": `Flashcard ${r + 1} of ${h.length}. Click to flip.`,
          children: [
            /* @__PURE__ */ O.jsxs(
              "div",
              {
                className: "fc-card-front",
                style: {
                  borderColor: t.borderColor,
                  backgroundColor: t.backgroundColor
                },
                children: [
                  /* @__PURE__ */ O.jsx("div", { className: "fc-flip-icon", children: /* @__PURE__ */ O.jsx(Cn, { src: us, size: "sm" }) }),
                  /* @__PURE__ */ O.jsx("p", { className: "label", children: "Question" }),
                  /* @__PURE__ */ O.jsx(
                    "div",
                    {
                      className: "card-content",
                      style: {
                        color: t.textColor,
                        fontSize: t.fontSize
                      },
                      dangerouslySetInnerHTML: { __html: v.front }
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ O.jsxs(
              "div",
              {
                className: "fc-card-back",
                style: {
                  borderColor: t.borderColor,
                  backgroundColor: t.backgroundColor
                },
                children: [
                  /* @__PURE__ */ O.jsx("div", { className: "fc-flip-icon", children: /* @__PURE__ */ O.jsx(Cn, { src: us, size: "sm" }) }),
                  /* @__PURE__ */ O.jsx("p", { className: "label", children: "Answer" }),
                  /* @__PURE__ */ O.jsx(
                    "div",
                    {
                      className: "card-content",
                      style: {
                        color: t.textColor,
                        fontSize: t.fontSize
                      },
                      dangerouslySetInnerHTML: { __html: v.back }
                    }
                  )
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ O.jsx(
        on,
        {
          className: "nav-btn next-btn",
          onClick: f,
          disabled: r === h.length - 1,
          variant: "light",
          "aria-label": "Next card",
          children: /* @__PURE__ */ O.jsx(Cn, { src: xp, size: "sm" })
        }
      )
    ] })
  ] });
}
const Pp = (e, { title: n, flashcards: t, styling: r }) => {
  if (!e)
    return;
  const l = e[0] || e;
  kc(l).render(
    /* @__PURE__ */ O.jsx(b.StrictMode, { children: /* @__PURE__ */ O.jsx(_p, { title: n, flashcards: t, styling: r }) })
  );
};
export {
  Pp as renderBlock
};
