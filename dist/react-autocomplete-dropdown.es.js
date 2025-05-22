import * as L from "react";
import Rr, { useCallback as ce, useEffect as oe, useContext as ae, useMemo as _e, useRef as ve, useState as de } from "react";
function Le(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ge = { exports: {} }, he = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ge;
function Sr() {
  if (Ge) return he;
  Ge = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function o(a, s, n) {
    var c = null;
    if (n !== void 0 && (c = "" + n), s.key !== void 0 && (c = "" + s.key), "key" in s) {
      n = {};
      for (var l in s)
        l !== "key" && (n[l] = s[l]);
    } else n = s;
    return s = n.ref, {
      $$typeof: e,
      type: a,
      key: c,
      ref: s !== void 0 ? s : null,
      props: n
    };
  }
  return he.Fragment = t, he.jsx = o, he.jsxs = o, he;
}
var Ee = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ze;
function _r() {
  return ze || (ze = 1, process.env.NODE_ENV !== "production" && function() {
    function e(r) {
      if (r == null) return null;
      if (typeof r == "function")
        return r.$$typeof === K ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case A:
          return "Fragment";
        case x:
          return "Profiler";
        case I:
          return "StrictMode";
        case f:
          return "Suspense";
        case M:
          return "SuspenseList";
        case te:
          return "Activity";
      }
      if (typeof r == "object")
        switch (typeof r.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), r.$$typeof) {
          case D:
            return "Portal";
          case F:
            return (r.displayName || "Context") + ".Provider";
          case W:
            return (r._context.displayName || "Context") + ".Consumer";
          case k:
            var i = r.render;
            return r = r.displayName, r || (r = i.displayName || i.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case Q:
            return i = r.displayName || null, i !== null ? i : e(r.type) || "Memo";
          case G:
            i = r._payload, r = r._init;
            try {
              return e(r(i));
            } catch {
            }
        }
      return null;
    }
    function t(r) {
      return "" + r;
    }
    function o(r) {
      try {
        t(r);
        var i = !1;
      } catch {
        i = !0;
      }
      if (i) {
        i = console;
        var v = i.error, y = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return v.call(
          i,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          y
        ), t(r);
      }
    }
    function a(r) {
      if (r === A) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === G)
        return "<...>";
      try {
        var i = e(r);
        return i ? "<" + i + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var r = B.A;
      return r === null ? null : r.getOwner();
    }
    function n() {
      return Error("react-stack-top-frame");
    }
    function c(r) {
      if (ne.call(r, "key")) {
        var i = Object.getOwnPropertyDescriptor(r, "key").get;
        if (i && i.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function l(r, i) {
      function v() {
        le || (le = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          i
        ));
      }
      v.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: v,
        configurable: !0
      });
    }
    function m() {
      var r = e(this.type);
      return U[r] || (U[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function u(r, i, v, y, E, g, w, S) {
      return v = g.ref, r = {
        $$typeof: T,
        type: r,
        key: i,
        props: g,
        _owner: E
      }, (v !== void 0 ? v : null) !== null ? Object.defineProperty(r, "ref", {
        enumerable: !1,
        get: m
      }) : Object.defineProperty(r, "ref", { enumerable: !1, value: null }), r._store = {}, Object.defineProperty(r._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(r, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(r, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: w
      }), Object.defineProperty(r, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: S
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function p(r, i, v, y, E, g, w, S) {
      var h = i.children;
      if (h !== void 0)
        if (y)
          if (pe(h)) {
            for (y = 0; y < h.length; y++)
              b(h[y]);
            Object.freeze && Object.freeze(h);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else b(h);
      if (ne.call(i, "key")) {
        h = e(r);
        var _ = Object.keys(i).filter(function(q) {
          return q !== "key";
        });
        y = 0 < _.length ? "{key: someKey, " + _.join(": ..., ") + ": ...}" : "{key: someKey}", ee[h + y] || (_ = 0 < _.length ? "{" + _.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          y,
          h,
          _,
          h
        ), ee[h + y] = !0);
      }
      if (h = null, v !== void 0 && (o(v), h = "" + v), c(i) && (o(i.key), h = "" + i.key), "key" in i) {
        v = {};
        for (var C in i)
          C !== "key" && (v[C] = i[C]);
      } else v = i;
      return h && l(
        v,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), u(
        r,
        h,
        g,
        E,
        s(),
        v,
        w,
        S
      );
    }
    function b(r) {
      typeof r == "object" && r !== null && r.$$typeof === T && r._store && (r._store.validated = 1);
    }
    var j = Rr, T = Symbol.for("react.transitional.element"), D = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), I = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), W = Symbol.for("react.consumer"), F = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), Q = Symbol.for("react.memo"), G = Symbol.for("react.lazy"), te = Symbol.for("react.activity"), K = Symbol.for("react.client.reference"), B = j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ne = Object.prototype.hasOwnProperty, pe = Array.isArray, J = console.createTask ? console.createTask : function() {
      return null;
    };
    j = {
      "react-stack-bottom-frame": function(r) {
        return r();
      }
    };
    var le, U = {}, z = j["react-stack-bottom-frame"].bind(
      j,
      n
    )(), se = J(a(n)), ee = {};
    Ee.Fragment = A, Ee.jsx = function(r, i, v, y, E) {
      var g = 1e4 > B.recentlyCreatedOwnerStacks++;
      return p(
        r,
        i,
        v,
        !1,
        y,
        E,
        g ? Error("react-stack-top-frame") : z,
        g ? J(a(r)) : se
      );
    }, Ee.jsxs = function(r, i, v, y, E) {
      var g = 1e4 > B.recentlyCreatedOwnerStacks++;
      return p(
        r,
        i,
        v,
        !0,
        y,
        E,
        g ? Error("react-stack-top-frame") : z,
        g ? J(a(r)) : se
      );
    };
  }()), Ee;
}
var He;
function Cr() {
  return He || (He = 1, process.env.NODE_ENV === "production" ? ge.exports = Sr() : ge.exports = _r()), ge.exports;
}
var R = Cr();
const ir = (e, t, o) => {
  const a = t.getBoundingClientRect(), s = e.getBoundingClientRect();
  o ? a.bottom > s.bottom && (e.scrollTop = t.offsetTop - e.clientHeight + t.clientHeight) : a.top < s.top && (e.scrollTop = t.offsetTop);
}, Or = (e, t, o, a) => ce(
  (s) => {
    a ? t((n) => {
      const c = n < (o == null ? void 0 : o.length) - 1 ? n + 1 : n;
      if (s && s.children[c]) {
        const l = s.children[c];
        ir(s, l, !0);
      }
      return c;
    }) : e(!0);
  },
  [
    o == null ? void 0 : o.length,
    t,
    e,
    a
  ]
), xr = (e) => ce(
  (t) => {
    e((o) => {
      const a = o > 0 ? o - 1 : o;
      if (t && t.children[a]) {
        const s = t.children[a];
        ir(t, s, !1);
      }
      return a;
    });
  },
  [e]
), jr = (e, t, o, a) => ce(() => {
  const s = t[o];
  s ? e(s) : a(!1);
}, [t, e, o]), Ar = (e, t = !1) => (o, a, s, n) => {
  t || (o(""), a(!0), e({ [s]: "", [n]: "" }));
};
function kr({
  options: e,
  nameKey: t,
  valueKey: o,
  selected: a,
  isInputChanged: s,
  isInputCleared: n,
  setInputValue: c,
  setIsInputCleared: l,
  handleClearInputCallback: m
}) {
  oe(() => {
    const u = e == null ? void 0 : e.find(
      (p) => {
        var b;
        return ((b = p[o]) == null ? void 0 : b.toString()) === (a == null ? void 0 : a.toString());
      }
    );
    !s && !n && (u && u[t].toLowerCase().includes("create") ? m(
      c,
      l,
      t,
      o
    ) : c(u ? u[t] : "")), n && l(!1);
  }, [
    m,
    e,
    t,
    o,
    s,
    n,
    a,
    c,
    l
  ]);
}
const Pr = (e, t) => () => {
  t || e((o) => !o);
}, $r = (e, t, o, a, s, n, c) => {
  oe(() => {
    if (e || n && e === 0) {
      const l = t.find(
        (m) => {
          var u;
          return ((u = m[s]) == null ? void 0 : u.toString()) === (e == null ? void 0 : e.toString());
        }
      );
      l && o(l[a]);
    } else c && o("");
  }, [e, t, a, s, o]);
}, Nr = (e, t) => {
  oe(() => {
    var o;
    t.current[e] && ((o = t.current[e]) == null || o.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    }));
  }, [e, t]);
};
var ke = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Je;
function Ir() {
  return Je || (Je = 1, function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function o() {
        for (var n = "", c = 0; c < arguments.length; c++) {
          var l = arguments[c];
          l && (n = s(n, a(l)));
        }
        return n;
      }
      function a(n) {
        if (typeof n == "string" || typeof n == "number")
          return n;
        if (typeof n != "object")
          return "";
        if (Array.isArray(n))
          return o.apply(null, n);
        if (n.toString !== Object.prototype.toString && !n.toString.toString().includes("[native code]"))
          return n.toString();
        var c = "";
        for (var l in n)
          t.call(n, l) && n[l] && (c = s(c, l));
        return c;
      }
      function s(n, c) {
        return c ? n ? n + " " + c : n + c : n;
      }
      e.exports ? (o.default = o, e.exports = o) : window.classNames = o;
    })();
  }(ke)), ke.exports;
}
var Fr = Ir();
const V = /* @__PURE__ */ Le(Fr), Dr = ["xxl", "xl", "lg", "md", "sm", "xs"], Mr = "xs", Ce = /* @__PURE__ */ L.createContext({
  prefixes: {},
  breakpoints: Dr,
  minBreakpoint: Mr
}), {
  Consumer: pt,
  Provider: dt
} = Ce;
function H(e, t) {
  const {
    prefixes: o
  } = ae(Ce);
  return e || o[t] || t;
}
function Lr() {
  const {
    breakpoints: e
  } = ae(Ce);
  return e;
}
function Yr() {
  const {
    minBreakpoint: e
  } = ae(Ce);
  return e;
}
var Te = { exports: {} }, we = { exports: {} }, $ = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xe;
function qr() {
  if (Xe) return $;
  Xe = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, a = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, n = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, b = e ? Symbol.for("react.suspense") : 60113, j = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, D = e ? Symbol.for("react.lazy") : 60116, A = e ? Symbol.for("react.block") : 60121, I = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, W = e ? Symbol.for("react.scope") : 60119;
  function F(f) {
    if (typeof f == "object" && f !== null) {
      var M = f.$$typeof;
      switch (M) {
        case t:
          switch (f = f.type, f) {
            case m:
            case u:
            case a:
            case n:
            case s:
            case b:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case l:
                case p:
                case D:
                case T:
                case c:
                  return f;
                default:
                  return M;
              }
          }
        case o:
          return M;
      }
    }
  }
  function k(f) {
    return F(f) === u;
  }
  return $.AsyncMode = m, $.ConcurrentMode = u, $.ContextConsumer = l, $.ContextProvider = c, $.Element = t, $.ForwardRef = p, $.Fragment = a, $.Lazy = D, $.Memo = T, $.Portal = o, $.Profiler = n, $.StrictMode = s, $.Suspense = b, $.isAsyncMode = function(f) {
    return k(f) || F(f) === m;
  }, $.isConcurrentMode = k, $.isContextConsumer = function(f) {
    return F(f) === l;
  }, $.isContextProvider = function(f) {
    return F(f) === c;
  }, $.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === t;
  }, $.isForwardRef = function(f) {
    return F(f) === p;
  }, $.isFragment = function(f) {
    return F(f) === a;
  }, $.isLazy = function(f) {
    return F(f) === D;
  }, $.isMemo = function(f) {
    return F(f) === T;
  }, $.isPortal = function(f) {
    return F(f) === o;
  }, $.isProfiler = function(f) {
    return F(f) === n;
  }, $.isStrictMode = function(f) {
    return F(f) === s;
  }, $.isSuspense = function(f) {
    return F(f) === b;
  }, $.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === a || f === u || f === n || f === s || f === b || f === j || typeof f == "object" && f !== null && (f.$$typeof === D || f.$$typeof === T || f.$$typeof === c || f.$$typeof === l || f.$$typeof === p || f.$$typeof === I || f.$$typeof === x || f.$$typeof === W || f.$$typeof === A);
  }, $.typeOf = F, $;
}
var N = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ze;
function Wr() {
  return Ze || (Ze = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, a = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, n = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, b = e ? Symbol.for("react.suspense") : 60113, j = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, D = e ? Symbol.for("react.lazy") : 60116, A = e ? Symbol.for("react.block") : 60121, I = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, W = e ? Symbol.for("react.scope") : 60119;
    function F(d) {
      return typeof d == "string" || typeof d == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      d === a || d === u || d === n || d === s || d === b || d === j || typeof d == "object" && d !== null && (d.$$typeof === D || d.$$typeof === T || d.$$typeof === c || d.$$typeof === l || d.$$typeof === p || d.$$typeof === I || d.$$typeof === x || d.$$typeof === W || d.$$typeof === A);
    }
    function k(d) {
      if (typeof d == "object" && d !== null) {
        var re = d.$$typeof;
        switch (re) {
          case t:
            var X = d.type;
            switch (X) {
              case m:
              case u:
              case a:
              case n:
              case s:
              case b:
                return X;
              default:
                var ye = X && X.$$typeof;
                switch (ye) {
                  case l:
                  case p:
                  case D:
                  case T:
                  case c:
                    return ye;
                  default:
                    return re;
                }
            }
          case o:
            return re;
        }
      }
    }
    var f = m, M = u, Q = l, G = c, te = t, K = p, B = a, ne = D, pe = T, J = o, le = n, U = s, z = b, se = !1;
    function ee(d) {
      return se || (se = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), r(d) || k(d) === m;
    }
    function r(d) {
      return k(d) === u;
    }
    function i(d) {
      return k(d) === l;
    }
    function v(d) {
      return k(d) === c;
    }
    function y(d) {
      return typeof d == "object" && d !== null && d.$$typeof === t;
    }
    function E(d) {
      return k(d) === p;
    }
    function g(d) {
      return k(d) === a;
    }
    function w(d) {
      return k(d) === D;
    }
    function S(d) {
      return k(d) === T;
    }
    function h(d) {
      return k(d) === o;
    }
    function _(d) {
      return k(d) === n;
    }
    function C(d) {
      return k(d) === s;
    }
    function q(d) {
      return k(d) === b;
    }
    N.AsyncMode = f, N.ConcurrentMode = M, N.ContextConsumer = Q, N.ContextProvider = G, N.Element = te, N.ForwardRef = K, N.Fragment = B, N.Lazy = ne, N.Memo = pe, N.Portal = J, N.Profiler = le, N.StrictMode = U, N.Suspense = z, N.isAsyncMode = ee, N.isConcurrentMode = r, N.isContextConsumer = i, N.isContextProvider = v, N.isElement = y, N.isForwardRef = E, N.isFragment = g, N.isLazy = w, N.isMemo = S, N.isPortal = h, N.isProfiler = _, N.isStrictMode = C, N.isSuspense = q, N.isValidElementType = F, N.typeOf = k;
  }()), N;
}
var Qe;
function cr() {
  return Qe || (Qe = 1, process.env.NODE_ENV === "production" ? we.exports = qr() : we.exports = Wr()), we.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Pe, Ke;
function Ur() {
  if (Ke) return Pe;
  Ke = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
  function a(n) {
    if (n == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(n);
  }
  function s() {
    try {
      if (!Object.assign)
        return !1;
      var n = new String("abc");
      if (n[5] = "de", Object.getOwnPropertyNames(n)[0] === "5")
        return !1;
      for (var c = {}, l = 0; l < 10; l++)
        c["_" + String.fromCharCode(l)] = l;
      var m = Object.getOwnPropertyNames(c).map(function(p) {
        return c[p];
      });
      if (m.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        u[p] = p;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Pe = s() ? Object.assign : function(n, c) {
    for (var l, m = a(n), u, p = 1; p < arguments.length; p++) {
      l = Object(arguments[p]);
      for (var b in l)
        t.call(l, b) && (m[b] = l[b]);
      if (e) {
        u = e(l);
        for (var j = 0; j < u.length; j++)
          o.call(l, u[j]) && (m[u[j]] = l[u[j]]);
      }
    }
    return m;
  }, Pe;
}
var $e, er;
function Ye() {
  if (er) return $e;
  er = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return $e = e, $e;
}
var Ne, rr;
function ur() {
  return rr || (rr = 1, Ne = Function.call.bind(Object.prototype.hasOwnProperty)), Ne;
}
var Ie, tr;
function Br() {
  if (tr) return Ie;
  tr = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Ye(), o = {}, a = /* @__PURE__ */ ur();
    e = function(n) {
      var c = "Warning: " + n;
      typeof console < "u" && console.error(c);
      try {
        throw new Error(c);
      } catch {
      }
    };
  }
  function s(n, c, l, m, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in n)
        if (a(n, p)) {
          var b;
          try {
            if (typeof n[p] != "function") {
              var j = Error(
                (m || "React class") + ": " + l + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw j.name = "Invariant Violation", j;
            }
            b = n[p](c, p, m, l, null, t);
          } catch (D) {
            b = D;
          }
          if (b && !(b instanceof Error) && e(
            (m || "React class") + ": type specification of " + l + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof b + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), b instanceof Error && !(b.message in o)) {
            o[b.message] = !0;
            var T = u ? u() : "";
            e(
              "Failed " + l + " type: " + b.message + (T ?? "")
            );
          }
        }
    }
  }
  return s.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (o = {});
  }, Ie = s, Ie;
}
var Fe, nr;
function Vr() {
  if (nr) return Fe;
  nr = 1;
  var e = cr(), t = Ur(), o = /* @__PURE__ */ Ye(), a = /* @__PURE__ */ ur(), s = /* @__PURE__ */ Br(), n = function() {
  };
  process.env.NODE_ENV !== "production" && (n = function(l) {
    var m = "Warning: " + l;
    typeof console < "u" && console.error(m);
    try {
      throw new Error(m);
    } catch {
    }
  });
  function c() {
    return null;
  }
  return Fe = function(l, m) {
    var u = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function b(r) {
      var i = r && (u && r[u] || r[p]);
      if (typeof i == "function")
        return i;
    }
    var j = "<<anonymous>>", T = {
      array: x("array"),
      bigint: x("bigint"),
      bool: x("boolean"),
      func: x("function"),
      number: x("number"),
      object: x("object"),
      string: x("string"),
      symbol: x("symbol"),
      any: W(),
      arrayOf: F,
      element: k(),
      elementType: f(),
      instanceOf: M,
      node: K(),
      objectOf: G,
      oneOf: Q,
      oneOfType: te,
      shape: ne,
      exact: pe
    };
    function D(r, i) {
      return r === i ? r !== 0 || 1 / r === 1 / i : r !== r && i !== i;
    }
    function A(r, i) {
      this.message = r, this.data = i && typeof i == "object" ? i : {}, this.stack = "";
    }
    A.prototype = Error.prototype;
    function I(r) {
      if (process.env.NODE_ENV !== "production")
        var i = {}, v = 0;
      function y(g, w, S, h, _, C, q) {
        if (h = h || j, C = C || S, q !== o) {
          if (m) {
            var d = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw d.name = "Invariant Violation", d;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var re = h + ":" + S;
            !i[re] && // Avoid spamming the console because they are often not actionable except for lib authors
            v < 3 && (n(
              "You are manually calling a React.PropTypes validation function for the `" + C + "` prop on `" + h + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), i[re] = !0, v++);
          }
        }
        return w[S] == null ? g ? w[S] === null ? new A("The " + _ + " `" + C + "` is marked as required " + ("in `" + h + "`, but its value is `null`.")) : new A("The " + _ + " `" + C + "` is marked as required in " + ("`" + h + "`, but its value is `undefined`.")) : null : r(w, S, h, _, C);
      }
      var E = y.bind(null, !1);
      return E.isRequired = y.bind(null, !0), E;
    }
    function x(r) {
      function i(v, y, E, g, w, S) {
        var h = v[y], _ = U(h);
        if (_ !== r) {
          var C = z(h);
          return new A(
            "Invalid " + g + " `" + w + "` of type " + ("`" + C + "` supplied to `" + E + "`, expected ") + ("`" + r + "`."),
            { expectedType: r }
          );
        }
        return null;
      }
      return I(i);
    }
    function W() {
      return I(c);
    }
    function F(r) {
      function i(v, y, E, g, w) {
        if (typeof r != "function")
          return new A("Property `" + w + "` of component `" + E + "` has invalid PropType notation inside arrayOf.");
        var S = v[y];
        if (!Array.isArray(S)) {
          var h = U(S);
          return new A("Invalid " + g + " `" + w + "` of type " + ("`" + h + "` supplied to `" + E + "`, expected an array."));
        }
        for (var _ = 0; _ < S.length; _++) {
          var C = r(S, _, E, g, w + "[" + _ + "]", o);
          if (C instanceof Error)
            return C;
        }
        return null;
      }
      return I(i);
    }
    function k() {
      function r(i, v, y, E, g) {
        var w = i[v];
        if (!l(w)) {
          var S = U(w);
          return new A("Invalid " + E + " `" + g + "` of type " + ("`" + S + "` supplied to `" + y + "`, expected a single ReactElement."));
        }
        return null;
      }
      return I(r);
    }
    function f() {
      function r(i, v, y, E, g) {
        var w = i[v];
        if (!e.isValidElementType(w)) {
          var S = U(w);
          return new A("Invalid " + E + " `" + g + "` of type " + ("`" + S + "` supplied to `" + y + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return I(r);
    }
    function M(r) {
      function i(v, y, E, g, w) {
        if (!(v[y] instanceof r)) {
          var S = r.name || j, h = ee(v[y]);
          return new A("Invalid " + g + " `" + w + "` of type " + ("`" + h + "` supplied to `" + E + "`, expected ") + ("instance of `" + S + "`."));
        }
        return null;
      }
      return I(i);
    }
    function Q(r) {
      if (!Array.isArray(r))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? n(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : n("Invalid argument supplied to oneOf, expected an array.")), c;
      function i(v, y, E, g, w) {
        for (var S = v[y], h = 0; h < r.length; h++)
          if (D(S, r[h]))
            return null;
        var _ = JSON.stringify(r, function(q, d) {
          var re = z(d);
          return re === "symbol" ? String(d) : d;
        });
        return new A("Invalid " + g + " `" + w + "` of value `" + String(S) + "` " + ("supplied to `" + E + "`, expected one of " + _ + "."));
      }
      return I(i);
    }
    function G(r) {
      function i(v, y, E, g, w) {
        if (typeof r != "function")
          return new A("Property `" + w + "` of component `" + E + "` has invalid PropType notation inside objectOf.");
        var S = v[y], h = U(S);
        if (h !== "object")
          return new A("Invalid " + g + " `" + w + "` of type " + ("`" + h + "` supplied to `" + E + "`, expected an object."));
        for (var _ in S)
          if (a(S, _)) {
            var C = r(S, _, E, g, w + "." + _, o);
            if (C instanceof Error)
              return C;
          }
        return null;
      }
      return I(i);
    }
    function te(r) {
      if (!Array.isArray(r))
        return process.env.NODE_ENV !== "production" && n("Invalid argument supplied to oneOfType, expected an instance of array."), c;
      for (var i = 0; i < r.length; i++) {
        var v = r[i];
        if (typeof v != "function")
          return n(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + se(v) + " at index " + i + "."
          ), c;
      }
      function y(E, g, w, S, h) {
        for (var _ = [], C = 0; C < r.length; C++) {
          var q = r[C], d = q(E, g, w, S, h, o);
          if (d == null)
            return null;
          d.data && a(d.data, "expectedType") && _.push(d.data.expectedType);
        }
        var re = _.length > 0 ? ", expected one of type [" + _.join(", ") + "]" : "";
        return new A("Invalid " + S + " `" + h + "` supplied to " + ("`" + w + "`" + re + "."));
      }
      return I(y);
    }
    function K() {
      function r(i, v, y, E, g) {
        return J(i[v]) ? null : new A("Invalid " + E + " `" + g + "` supplied to " + ("`" + y + "`, expected a ReactNode."));
      }
      return I(r);
    }
    function B(r, i, v, y, E) {
      return new A(
        (r || "React class") + ": " + i + " type `" + v + "." + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + E + "`."
      );
    }
    function ne(r) {
      function i(v, y, E, g, w) {
        var S = v[y], h = U(S);
        if (h !== "object")
          return new A("Invalid " + g + " `" + w + "` of type `" + h + "` " + ("supplied to `" + E + "`, expected `object`."));
        for (var _ in r) {
          var C = r[_];
          if (typeof C != "function")
            return B(E, g, w, _, z(C));
          var q = C(S, _, E, g, w + "." + _, o);
          if (q)
            return q;
        }
        return null;
      }
      return I(i);
    }
    function pe(r) {
      function i(v, y, E, g, w) {
        var S = v[y], h = U(S);
        if (h !== "object")
          return new A("Invalid " + g + " `" + w + "` of type `" + h + "` " + ("supplied to `" + E + "`, expected `object`."));
        var _ = t({}, v[y], r);
        for (var C in _) {
          var q = r[C];
          if (a(r, C) && typeof q != "function")
            return B(E, g, w, C, z(q));
          if (!q)
            return new A(
              "Invalid " + g + " `" + w + "` key `" + C + "` supplied to `" + E + "`.\nBad object: " + JSON.stringify(v[y], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(r), null, "  ")
            );
          var d = q(S, C, E, g, w + "." + C, o);
          if (d)
            return d;
        }
        return null;
      }
      return I(i);
    }
    function J(r) {
      switch (typeof r) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !r;
        case "object":
          if (Array.isArray(r))
            return r.every(J);
          if (r === null || l(r))
            return !0;
          var i = b(r);
          if (i) {
            var v = i.call(r), y;
            if (i !== r.entries) {
              for (; !(y = v.next()).done; )
                if (!J(y.value))
                  return !1;
            } else
              for (; !(y = v.next()).done; ) {
                var E = y.value;
                if (E && !J(E[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function le(r, i) {
      return r === "symbol" ? !0 : i ? i["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && i instanceof Symbol : !1;
    }
    function U(r) {
      var i = typeof r;
      return Array.isArray(r) ? "array" : r instanceof RegExp ? "object" : le(i, r) ? "symbol" : i;
    }
    function z(r) {
      if (typeof r > "u" || r === null)
        return "" + r;
      var i = U(r);
      if (i === "object") {
        if (r instanceof Date)
          return "date";
        if (r instanceof RegExp)
          return "regexp";
      }
      return i;
    }
    function se(r) {
      var i = z(r);
      switch (i) {
        case "array":
        case "object":
          return "an " + i;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + i;
        default:
          return i;
      }
    }
    function ee(r) {
      return !r.constructor || !r.constructor.name ? j : r.constructor.name;
    }
    return T.checkPropTypes = s, T.resetWarningCache = s.resetWarningCache, T.PropTypes = T, T;
  }, Fe;
}
var De, or;
function Gr() {
  if (or) return De;
  or = 1;
  var e = /* @__PURE__ */ Ye();
  function t() {
  }
  function o() {
  }
  return o.resetWarningCache = t, De = function() {
    function a(c, l, m, u, p, b) {
      if (b !== e) {
        var j = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw j.name = "Invariant Violation", j;
      }
    }
    a.isRequired = a;
    function s() {
      return a;
    }
    var n = {
      array: a,
      bigint: a,
      bool: a,
      func: a,
      number: a,
      object: a,
      string: a,
      symbol: a,
      any: a,
      arrayOf: s,
      element: a,
      elementType: a,
      instanceOf: s,
      node: a,
      objectOf: s,
      oneOf: s,
      oneOfType: s,
      shape: s,
      exact: s,
      checkPropTypes: o,
      resetWarningCache: t
    };
    return n.PropTypes = n, n;
  }, De;
}
var ar;
function zr() {
  if (ar) return Te.exports;
  if (ar = 1, process.env.NODE_ENV !== "production") {
    var e = cr(), t = !0;
    Te.exports = /* @__PURE__ */ Vr()(e.isElement, t);
  } else
    Te.exports = /* @__PURE__ */ Gr()();
  return Te.exports;
}
var Hr = /* @__PURE__ */ zr();
const me = /* @__PURE__ */ Le(Hr);
function Jr(e, t) {
  return L.Children.toArray(e).some((o) => /* @__PURE__ */ L.isValidElement(o) && o.type === t);
}
function Xr({
  as: e,
  bsPrefix: t,
  className: o,
  ...a
}) {
  t = H(t, "col");
  const s = Lr(), n = Yr(), c = [], l = [];
  return s.forEach((m) => {
    const u = a[m];
    delete a[m];
    let p, b, j;
    typeof u == "object" && u != null ? {
      span: p,
      offset: b,
      order: j
    } = u : p = u;
    const T = m !== n ? `-${m}` : "";
    p && c.push(p === !0 ? `${t}${T}` : `${t}${T}-${p}`), j != null && l.push(`order${T}-${j}`), b != null && l.push(`offset${T}-${b}`);
  }), [{
    ...a,
    className: V(o, ...c, ...l)
  }, {
    as: e,
    bsPrefix: t,
    spans: c
  }];
}
const lr = /* @__PURE__ */ L.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  (e, t) => {
    const [{
      className: o,
      ...a
    }, {
      as: s = "div",
      bsPrefix: n,
      spans: c
    }] = Xr(e);
    return /* @__PURE__ */ R.jsx(s, {
      ...a,
      ref: t,
      className: V(o, !c.length && n)
    });
  }
);
lr.displayName = "Col";
var Me, sr;
function Zr() {
  if (sr) return Me;
  sr = 1;
  var e = process.env.NODE_ENV !== "production", t = function() {
  };
  if (e) {
    var o = function(s, n) {
      var c = arguments.length;
      n = new Array(c > 1 ? c - 1 : 0);
      for (var l = 1; l < c; l++)
        n[l - 1] = arguments[l];
      var m = 0, u = "Warning: " + s.replace(/%s/g, function() {
        return n[m++];
      });
      typeof console < "u" && console.error(u);
      try {
        throw new Error(u);
      } catch {
      }
    };
    t = function(a, s, n) {
      var c = arguments.length;
      n = new Array(c > 2 ? c - 2 : 0);
      for (var l = 2; l < c; l++)
        n[l - 2] = arguments[l];
      if (s === void 0)
        throw new Error(
          "`warning(condition, format, ...args)` requires a warning message argument"
        );
      a || o.apply(null, [s].concat(n));
    };
  }
  return Me = t, Me;
}
var Qr = Zr();
const fr = /* @__PURE__ */ Le(Qr), pr = /* @__PURE__ */ L.createContext(null);
pr.displayName = "InputGroupContext";
const Kr = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: me.string,
  /** Display feedback as a tooltip. */
  tooltip: me.bool,
  as: me.elementType
}, Oe = /* @__PURE__ */ L.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    as: e = "div",
    className: t,
    type: o = "valid",
    tooltip: a = !1,
    ...s
  }, n) => /* @__PURE__ */ R.jsx(e, {
    ...s,
    ref: n,
    className: V(t, `${o}-${a ? "tooltip" : "feedback"}`)
  })
);
Oe.displayName = "Feedback";
Oe.propTypes = Kr;
const ue = /* @__PURE__ */ L.createContext({}), be = /* @__PURE__ */ L.forwardRef(({
  id: e,
  bsPrefix: t,
  className: o,
  type: a = "checkbox",
  isValid: s = !1,
  isInvalid: n = !1,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: c = "input",
  ...l
}, m) => {
  const {
    controlId: u
  } = ae(ue);
  return t = H(t, "form-check-input"), /* @__PURE__ */ R.jsx(c, {
    ...l,
    ref: m,
    type: a,
    id: e || u,
    className: V(o, t, s && "is-valid", n && "is-invalid")
  });
});
be.displayName = "FormCheckInput";
const Re = /* @__PURE__ */ L.forwardRef(({
  bsPrefix: e,
  className: t,
  htmlFor: o,
  ...a
}, s) => {
  const {
    controlId: n
  } = ae(ue);
  return e = H(e, "form-check-label"), /* @__PURE__ */ R.jsx("label", {
    ...a,
    ref: s,
    htmlFor: o || n,
    className: V(t, e)
  });
});
Re.displayName = "FormCheckLabel";
const dr = /* @__PURE__ */ L.forwardRef(({
  id: e,
  bsPrefix: t,
  bsSwitchPrefix: o,
  inline: a = !1,
  reverse: s = !1,
  disabled: n = !1,
  isValid: c = !1,
  isInvalid: l = !1,
  feedbackTooltip: m = !1,
  feedback: u,
  feedbackType: p,
  className: b,
  style: j,
  title: T = "",
  type: D = "checkbox",
  label: A,
  children: I,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: x = "input",
  ...W
}, F) => {
  t = H(t, "form-check"), o = H(o, "form-switch");
  const {
    controlId: k
  } = ae(ue), f = _e(() => ({
    controlId: e || k
  }), [k, e]), M = !I && A != null && A !== !1 || Jr(I, Re), Q = /* @__PURE__ */ R.jsx(be, {
    ...W,
    type: D === "switch" ? "checkbox" : D,
    ref: F,
    isValid: c,
    isInvalid: l,
    disabled: n,
    as: x
  });
  return /* @__PURE__ */ R.jsx(ue.Provider, {
    value: f,
    children: /* @__PURE__ */ R.jsx("div", {
      style: j,
      className: V(b, M && t, a && `${t}-inline`, s && `${t}-reverse`, D === "switch" && o),
      children: I || /* @__PURE__ */ R.jsxs(R.Fragment, {
        children: [Q, M && /* @__PURE__ */ R.jsx(Re, {
          title: T,
          children: A
        }), u && /* @__PURE__ */ R.jsx(Oe, {
          type: p,
          tooltip: m,
          children: u
        })]
      })
    })
  });
});
dr.displayName = "FormCheck";
const Se = Object.assign(dr, {
  Input: be,
  Label: Re
}), vr = /* @__PURE__ */ L.forwardRef(({
  bsPrefix: e,
  type: t,
  size: o,
  htmlSize: a,
  id: s,
  className: n,
  isValid: c = !1,
  isInvalid: l = !1,
  plaintext: m,
  readOnly: u,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: p = "input",
  ...b
}, j) => {
  const {
    controlId: T
  } = ae(ue);
  return e = H(e, "form-control"), process.env.NODE_ENV !== "production" && fr(T == null || !s, "`controlId` is ignored on `<FormControl>` when `id` is specified."), /* @__PURE__ */ R.jsx(p, {
    ...b,
    type: t,
    size: a,
    ref: j,
    readOnly: u,
    id: s || T,
    className: V(n, m ? `${e}-plaintext` : e, o && `${e}-${o}`, t === "color" && `${e}-color`, c && "is-valid", l && "is-invalid")
  });
});
vr.displayName = "FormControl";
const et = Object.assign(vr, {
  Feedback: Oe
}), mr = /* @__PURE__ */ L.forwardRef(({
  className: e,
  bsPrefix: t,
  as: o = "div",
  ...a
}, s) => (t = H(t, "form-floating"), /* @__PURE__ */ R.jsx(o, {
  ref: s,
  className: V(e, t),
  ...a
})));
mr.displayName = "FormFloating";
const qe = /* @__PURE__ */ L.forwardRef(({
  controlId: e,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: t = "div",
  ...o
}, a) => {
  const s = _e(() => ({
    controlId: e
  }), [e]);
  return /* @__PURE__ */ R.jsx(ue.Provider, {
    value: s,
    children: /* @__PURE__ */ R.jsx(t, {
      ...o,
      ref: a
    })
  });
});
qe.displayName = "FormGroup";
const yr = /* @__PURE__ */ L.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: e = "label",
  bsPrefix: t,
  column: o = !1,
  visuallyHidden: a = !1,
  className: s,
  htmlFor: n,
  ...c
}, l) => {
  const {
    controlId: m
  } = ae(ue);
  t = H(t, "form-label");
  let u = "col-form-label";
  typeof o == "string" && (u = `${u} ${u}-${o}`);
  const p = V(s, t, a && "visually-hidden", o && u);
  return process.env.NODE_ENV !== "production" && fr(m == null || !n, "`controlId` is ignored on `<FormLabel>` when `htmlFor` is specified."), n = n || m, o ? /* @__PURE__ */ R.jsx(lr, {
    ref: l,
    as: "label",
    className: p,
    htmlFor: n,
    ...c
  }) : /* @__PURE__ */ R.jsx(e, {
    ref: l,
    className: p,
    htmlFor: n,
    ...c
  });
});
yr.displayName = "FormLabel";
const hr = /* @__PURE__ */ L.forwardRef(({
  bsPrefix: e,
  className: t,
  id: o,
  ...a
}, s) => {
  const {
    controlId: n
  } = ae(ue);
  return e = H(e, "form-range"), /* @__PURE__ */ R.jsx("input", {
    ...a,
    type: "range",
    ref: s,
    className: V(t, e),
    id: o || n
  });
});
hr.displayName = "FormRange";
const Er = /* @__PURE__ */ L.forwardRef(({
  bsPrefix: e,
  size: t,
  htmlSize: o,
  className: a,
  isValid: s = !1,
  isInvalid: n = !1,
  id: c,
  ...l
}, m) => {
  const {
    controlId: u
  } = ae(ue);
  return e = H(e, "form-select"), /* @__PURE__ */ R.jsx("select", {
    ...l,
    size: o,
    ref: m,
    className: V(a, e, t && `${e}-${t}`, s && "is-valid", n && "is-invalid"),
    id: c || u
  });
});
Er.displayName = "FormSelect";
const br = /* @__PURE__ */ L.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    bsPrefix: e,
    className: t,
    as: o = "small",
    muted: a,
    ...s
  }, n) => (e = H(e, "form-text"), /* @__PURE__ */ R.jsx(o, {
    ...s,
    ref: n,
    className: V(t, e, a && "text-muted")
  }))
);
br.displayName = "FormText";
const gr = /* @__PURE__ */ L.forwardRef((e, t) => /* @__PURE__ */ R.jsx(Se, {
  ...e,
  ref: t,
  type: "switch"
}));
gr.displayName = "Switch";
const rt = Object.assign(gr, {
  Input: Se.Input,
  Label: Se.Label
}), Tr = /* @__PURE__ */ L.forwardRef(({
  bsPrefix: e,
  className: t,
  children: o,
  controlId: a,
  label: s,
  ...n
}, c) => (e = H(e, "form-floating"), /* @__PURE__ */ R.jsxs(qe, {
  ref: c,
  className: V(t, e),
  controlId: a,
  ...n,
  children: [o, /* @__PURE__ */ R.jsx("label", {
    htmlFor: a,
    children: s
  })]
})));
Tr.displayName = "FloatingLabel";
const tt = {
  /**
   * The Form `ref` will be forwarded to the underlying element,
   * which means, unless it's rendered `as` a composite component,
   * it will be a DOM node, when resolved.
   *
   * @type {ReactRef}
   * @alias ref
   */
  _ref: me.any,
  /**
   * Mark a form as having been validated. Setting it to `true` will
   * toggle any validation styles on the forms elements.
   */
  validated: me.bool,
  as: me.elementType
}, We = /* @__PURE__ */ L.forwardRef(({
  className: e,
  validated: t,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: o = "form",
  ...a
}, s) => /* @__PURE__ */ R.jsx(o, {
  ...a,
  ref: s,
  className: V(e, t && "was-validated")
}));
We.displayName = "Form";
We.propTypes = tt;
const nt = Object.assign(We, {
  Group: qe,
  Control: et,
  Floating: mr,
  Check: Se,
  Switch: rt,
  Label: yr,
  Text: br,
  Range: hr,
  Select: Er,
  FloatingLabel: Tr
}), xe = /* @__PURE__ */ L.forwardRef(({
  className: e,
  bsPrefix: t,
  as: o = "span",
  ...a
}, s) => (t = H(t, "input-group-text"), /* @__PURE__ */ R.jsx(o, {
  ref: s,
  className: V(e, t),
  ...a
})));
xe.displayName = "InputGroupText";
const ot = (e) => /* @__PURE__ */ R.jsx(xe, {
  children: /* @__PURE__ */ R.jsx(be, {
    type: "checkbox",
    ...e
  })
}), at = (e) => /* @__PURE__ */ R.jsx(xe, {
  children: /* @__PURE__ */ R.jsx(be, {
    type: "radio",
    ...e
  })
}), wr = /* @__PURE__ */ L.forwardRef(({
  bsPrefix: e,
  size: t,
  hasValidation: o,
  className: a,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: s = "div",
  ...n
}, c) => {
  e = H(e, "input-group");
  const l = _e(() => ({}), []);
  return /* @__PURE__ */ R.jsx(pr.Provider, {
    value: l,
    children: /* @__PURE__ */ R.jsx(s, {
      ref: c,
      ...n,
      className: V(a, e, t && `${e}-${t}`, o && "has-validation")
    })
  });
});
wr.displayName = "InputGroup";
const st = Object.assign(wr, {
  Text: xe,
  Radio: at,
  Checkbox: ot
}), it = (e) => /* @__PURE__ */ R.jsx(
  "img",
  {
    ...e,
    alt: "dropdown_icon.png",
    src: require("./dropdown_icon.png")
  }
), ct = ({
  value: e,
  handleInputChange: t,
  handleBlur: o,
  handleToggleDropdown: a,
  placeholder: s,
  disabled: n,
  styleError: c,
  inputName: l,
  tooltipPlacement: m,
  tooltipTitle: u,
  size: p,
  isRequired: b,
  className: j
}) => {
  const T = ve(null), D = (x) => {
    if (T.current && x.key === "Backspace" && T.current.selectionStart === 0 && T.current.selectionEnd === T.current.value.length) {
      x.preventDefault(), T.current.value = "";
      const W = new Event("input");
      T.current.dispatchEvent(W), t(
        W
      ), a();
    }
  }, A = (x) => {
    x.currentTarget.select();
  }, I = (x) => {
    T.current && T.current.value === "" || o(x);
  };
  return /* @__PURE__ */ R.jsxs(st, { className: "align-items-center flex-nowrap", children: [
    /* @__PURE__ */ R.jsx(
      nt.Control,
      {
        type: "text",
        onClick: (x) => A(x),
        value: e,
        onChange: (x) => t(x),
        onFocus: (x) => {
          a(), x.target.select();
        },
        onBlur: (x) => I(x),
        onKeyDown: (x) => D(x),
        placeholder: s,
        disabled: n,
        name: l ?? "",
        className: `${j} ${c ? "custom-autocomplete-dropdown-invalid" : "border-0"}`,
        autoComplete: "off",
        ref: T,
        "data-bs-toggle": u ? "toggle" : void 0,
        "data-bs-placement": m,
        title: u,
        required: b
      }
    ),
    /* @__PURE__ */ R.jsx(
      "div",
      {
        className: `px-2 custom-autocomplete-dropdown-icons${n ? "-disabled" : ""} ${p === "small" ? "custom-autocomplete-dropdown-small" : "p-1"}`,
        onClick: (x) => {
          var W;
          (W = T.current) == null || W.select();
        },
        onFocus: (x) => a(),
        children: /* @__PURE__ */ R.jsx(it, { className: p === "small" ? "mb-1" : "" })
      }
    )
  ] });
}, ut = (e, t) => {
  oe(() => {
    const o = (a) => {
      e.current && !e.current.contains(a.target) && t();
    };
    return document.addEventListener("mousedown", o), () => {
      document.removeEventListener("mousedown", o);
    };
  }, [e, t]);
}, lt = ({
  options: e,
  highlightedIndex: t,
  handleOptionClick: o,
  nameKey: a,
  openUpwards: s,
  setHighlightedIndex: n,
  closeDropdown: c
}) => {
  const l = ve([]);
  return oe(() => {
    const m = l.current[t];
    m && m.scrollIntoView({ block: "nearest" });
  }, [t]), /* @__PURE__ */ R.jsx(
    "ul",
    {
      className: `position-absolute custom-autocomplete-dropdown list-group list-group-hover list-group-striped bg-white border p-0 m-0 shadow ${s ? "dropdown-upwards" : ""}`,
      children: e.length === 0 ? /* @__PURE__ */ R.jsx("li", { className: "p-2 list-group-item", onClick: c, children: /* @__PURE__ */ R.jsx("i", { className: "fs-6 text-muted", children: "No options available." }) }) : e.map((m, u) => /* @__PURE__ */ R.jsx(
        "li",
        {
          ref: (p) => {
            l.current[u] = p;
          },
          role: "button",
          className: `px-3 py-2 list-group-item-action pe-auto ${u === t ? "active" : ""}`,
          onMouseDown: (p) => {
            p.preventDefault(), o(m);
          },
          onMouseEnter: () => n(u),
          children: m[a]
        },
        u
      ))
    }
  );
}, vt = ({
  options: e,
  onChange: t,
  onBlur: o,
  shouldMatchOption: a = !0,
  disabled: s,
  styleError: n,
  selected: c,
  placeholder: l,
  inputName: m,
  nameKey: u,
  valueKey: p,
  staticOptions: b,
  tooltipPlacement: j,
  tooltipTitle: T,
  size: D,
  isRequired: A,
  useHighlightBorder: I = !1,
  className: x,
  allowZeroValue: W
}) => {
  const [F, k] = de(
    (c == null ? void 0 : c.toString()) ?? (e.length === 1 ? e[0][u] : "")
  ), [f, M] = de(!1), [Q, G] = de(-1), [te, K] = de(""), B = ve(null), ne = ve([]), [pe, J] = de(!1), [le, U] = de(!1), [z, se] = de(!1), ee = ve(!1);
  $r(
    c,
    e,
    k,
    u,
    p,
    W,
    a
  ), Nr(Q, ne), ut(
    B,
    () => M(!1)
  );
  const r = ce(
    (O) => {
      var P;
      if (!ee.current) {
        if (ee.current = !0, O && Object.prototype.hasOwnProperty.call(O, u) && O[u] !== F) {
          k(O[u]), M(!1);
          const Y = new Event("input"), Z = (P = B.current) == null ? void 0 : P.querySelector("input");
          Z && (Z.value = W ? O[p] != null ? O[p].toString() : "" : O[p] ? O[p].toString() : "", Z.dispatchEvent(Y), t(Y));
        } else
          M(!1);
        setTimeout(() => {
          ee.current = !1;
        }, 0);
      }
    },
    [t, u, p]
  ), i = Ar(
    r,
    s
  );
  kr({
    options: e,
    nameKey: u,
    valueKey: p,
    selected: c,
    isInputChanged: z,
    isInputCleared: le,
    setInputValue: k,
    setIsInputCleared: U,
    handleClearInputCallback: i
  });
  const v = ce(
    (O) => {
      const P = O.target.value;
      k(P), K(P), M(!0), se(!0), G(0), P === "" && i(
        k,
        U,
        u,
        p
      );
    },
    [
      k,
      M,
      u,
      p,
      i
    ]
  );
  oe(() => {
    if (f && B.current) {
      const O = B.current.getBoundingClientRect(), P = O.top, Y = window.innerHeight - O.bottom;
      J(Y < 400 && P > Y);
    }
  }, [f]);
  const y = Pr(M, s), E = ce(() => {
    if (Be(), ee.current) return;
    const O = e.find(
      (P) => {
        var Y;
        return ((Y = P[u]) == null ? void 0 : Y.toString()) === F;
      }
    );
    if (O)
      r(O), K("");
    else if (X.length === 1)
      r(X[0]), K("");
    else {
      const P = e.find(
        (Y) => {
          var Z;
          return ((Z = Y[p]) == null ? void 0 : Z.toString()) === (c == null ? void 0 : c.toString());
        }
      );
      P && Object.prototype.hasOwnProperty.call(P, u) ? (k(P[u]), K("")) : (k(""), K(""));
    }
  }, [e, F, r, u, p, c]), g = ve(r);
  g.current = r;
  const w = () => {
    const O = te.toLowerCase(), P = e.filter(
      (fe) => {
        var ie;
        return (ie = fe[u]) == null ? void 0 : ie.toString().toLowerCase().startsWith(O);
      }
    ), Y = e.filter(
      (fe) => {
        var ie, Ve;
        return !((ie = fe[u]) != null && ie.toString().toLowerCase().startsWith(O)) && ((Ve = fe[u]) == null ? void 0 : Ve.toString().toLowerCase().includes(O));
      }
    );
    P.sort(
      (fe, ie) => fe[u].toString().localeCompare(ie[u].toString())
    ), Y.sort(
      (fe, ie) => fe[u].toString().localeCompare(ie[u].toString())
    );
    const Z = [...P, ...Y];
    return b && Z.unshift(...b), Z;
  }, h = ce(() => w(), [te, u, e, b]), _ = ce(() => C(), [e, b]), C = () => b ? [...b, ...e] : e, q = _, d = te === "" ? q() : h(), X = _e(
    () => d,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [q, h, te]
  );
  oe(() => {
    const O = e == null ? void 0 : e.find(
      (P) => {
        var Y;
        return ((Y = P[p]) == null ? void 0 : Y.toString()) === (c == null ? void 0 : c.toString());
      }
    );
    z || (O && O[u].toLowerCase().includes("create") ? i(
      k,
      U,
      u,
      p
    ) : k(O ? O[u] : ""));
  }, [
    i,
    e,
    u,
    p,
    z,
    c
  ]);
  const ye = Or(
    M,
    G,
    X,
    f
  ), Ue = xr(G), je = jr(
    r,
    X,
    Q,
    M
  ), Ae = ce(
    (O) => {
      var Y;
      const P = (Y = B.current) == null ? void 0 : Y.querySelector(
        ".custom-autocomplete-dropdown"
      );
      switch (O.key) {
        case "ArrowDown":
          O.preventDefault(), ye(P);
          break;
        case "ArrowUp":
          O.preventDefault(), Ue(P);
          break;
        case "Enter":
          O.preventDefault(), je();
          break;
        case "Tab":
          a ? je() : M(!1);
          break;
      }
    },
    [ye, Ue, je]
  );
  oe(() => {
    var P;
    const O = (P = B.current) == null ? void 0 : P.querySelector("input");
    return O && O.addEventListener("keydown", Ae), () => {
      O && O.removeEventListener("keydown", Ae);
    };
  }, [Ae]), oe(() => {
    f && G(0);
  }, [f]);
  const Be = () => {
    M(!1);
  };
  return oe(() => {
    var O;
    if (f) {
      const P = X.findIndex(
        (Y) => {
          var Z;
          return ((Z = Y[p]) == null ? void 0 : Z.toString()) === (c == null ? void 0 : c.toString());
        }
      );
      G(
        P !== -1 ? P : -1
      ), ne.current[P] && ((O = ne.current[P]) == null || O.scrollIntoView({
        block: "nearest"
      }));
    } else
      G(-1);
  }, [f, e, X, c, p]), /* @__PURE__ */ R.jsxs(
    "div",
    {
      className: `position-relative select-w-100 ${I ? "highlight-border" : ""}`,
      ref: B,
      children: [
        /* @__PURE__ */ R.jsx(
          ct,
          {
            handleBlur: o ?? E,
            handleInputChange: v,
            handleToggleDropdown: y,
            value: F,
            disabled: s,
            inputName: m,
            placeholder: l,
            styleError: n,
            tooltipPlacement: j,
            tooltipTitle: T,
            size: D,
            isRequired: A,
            className: x
          }
        ),
        !s && f && /* @__PURE__ */ R.jsx(
          lt,
          {
            options: X,
            highlightedIndex: Q,
            handleOptionClick: r,
            nameKey: u,
            openUpwards: pe,
            setHighlightedIndex: G,
            closeDropdown: Be
          }
        )
      ]
    }
  );
};
export {
  vt as AutocompleteDropdown
};
