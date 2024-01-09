function Vo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Fr = { exports: {} }, _t = {}, Ht = { exports: {} }, Rt = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Rt.exports;
var Rn;
function zo() {
  return Rn || (Rn = 1, function(e, r) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var n = "18.2.0", i = Symbol.for("react.element"), c = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), E = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), Q = Symbol.for("react.offscreen"), ee = Symbol.iterator, q = "@@iterator";
      function A(t) {
        if (t === null || typeof t != "object")
          return null;
        var o = ee && t[ee] || t[q];
        return typeof o == "function" ? o : null;
      }
      var U = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, M = {
        transition: null
      }, I = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, x = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, C = {}, ve = null;
      function we(t) {
        ve = t;
      }
      C.setExtraStackFrame = function(t) {
        ve = t;
      }, C.getCurrentStack = null, C.getStackAddendum = function() {
        var t = "";
        ve && (t += ve);
        var o = C.getCurrentStack;
        return o && (t += o() || ""), t;
      };
      var je = !1, Ye = !1, Ie = !1, de = !1, ge = !1, le = {
        ReactCurrentDispatcher: U,
        ReactCurrentBatchConfig: M,
        ReactCurrentOwner: x
      };
      le.ReactDebugCurrentFrame = C, le.ReactCurrentActQueue = I;
      function _e(t) {
        {
          for (var o = arguments.length, u = new Array(o > 1 ? o - 1 : 0), l = 1; l < o; l++)
            u[l - 1] = arguments[l];
          fe("warn", t, u);
        }
      }
      function R(t) {
        {
          for (var o = arguments.length, u = new Array(o > 1 ? o - 1 : 0), l = 1; l < o; l++)
            u[l - 1] = arguments[l];
          fe("error", t, u);
        }
      }
      function fe(t, o, u) {
        {
          var l = le.ReactDebugCurrentFrame, v = l.getStackAddendum();
          v !== "" && (o += "%s", u = u.concat([v]));
          var O = u.map(function(w) {
            return String(w);
          });
          O.unshift("Warning: " + o), Function.prototype.apply.call(console[t], console, O);
        }
      }
      var Se = {};
      function s(t, o) {
        {
          var u = t.constructor, l = u && (u.displayName || u.name) || "ReactClass", v = l + "." + o;
          if (Se[v])
            return;
          R("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", o, l), Se[v] = !0;
        }
      }
      var p = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(t) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(t, o, u) {
          s(t, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(t, o, u, l) {
          s(t, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(t, o, u, l) {
          s(t, "setState");
        }
      }, T = Object.assign, V = {};
      Object.freeze(V);
      function $(t, o, u) {
        this.props = t, this.context = o, this.refs = V, this.updater = u || p;
      }
      $.prototype.isReactComponent = {}, $.prototype.setState = function(t, o) {
        if (typeof t != "object" && typeof t != "function" && t != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, t, o, "setState");
      }, $.prototype.forceUpdate = function(t) {
        this.updater.enqueueForceUpdate(this, t, "forceUpdate");
      };
      {
        var H = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, K = function(t, o) {
          Object.defineProperty($.prototype, t, {
            get: function() {
              _e("%s(...) is deprecated in plain JavaScript React classes. %s", o[0], o[1]);
            }
          });
        };
        for (var Y in H)
          H.hasOwnProperty(Y) && K(Y, H[Y]);
      }
      function F() {
      }
      F.prototype = $.prototype;
      function oe(t, o, u) {
        this.props = t, this.context = o, this.refs = V, this.updater = u || p;
      }
      var Re = oe.prototype = new F();
      Re.constructor = oe, T(Re, $.prototype), Re.isPureReactComponent = !0;
      function Ce() {
        var t = {
          current: null
        };
        return Object.seal(t), t;
      }
      var Tt = Array.isArray;
      function at(t) {
        return Tt(t);
      }
      function dr(t) {
        {
          var o = typeof Symbol == "function" && Symbol.toStringTag, u = o && t[Symbol.toStringTag] || t.constructor.name || "Object";
          return u;
        }
      }
      function it(t) {
        try {
          return Ue(t), !1;
        } catch {
          return !0;
        }
      }
      function Ue(t) {
        return "" + t;
      }
      function Be(t) {
        if (it(t))
          return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", dr(t)), Ue(t);
      }
      function Pt(t, o, u) {
        var l = t.displayName;
        if (l)
          return l;
        var v = o.displayName || o.name || "";
        return v !== "" ? u + "(" + v + ")" : u;
      }
      function Ge(t) {
        return t.displayName || "Context";
      }
      function Pe(t) {
        if (t == null)
          return null;
        if (typeof t.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
          return t.displayName || t.name || null;
        if (typeof t == "string")
          return t;
        switch (t) {
          case f:
            return "Fragment";
          case c:
            return "Portal";
          case g:
            return "Profiler";
          case h:
            return "StrictMode";
          case S:
            return "Suspense";
          case k:
            return "SuspenseList";
        }
        if (typeof t == "object")
          switch (t.$$typeof) {
            case E:
              var o = t;
              return Ge(o) + ".Consumer";
            case y:
              var u = t;
              return Ge(u._context) + ".Provider";
            case _:
              return Pt(t, t.render, "ForwardRef");
            case P:
              var l = t.displayName || null;
              return l !== null ? l : Pe(t.type) || "Memo";
            case W: {
              var v = t, O = v._payload, w = v._init;
              try {
                return Pe(w(O));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var qe = Object.prototype.hasOwnProperty, st = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, At, jt, ct;
      ct = {};
      function gt(t) {
        if (qe.call(t, "ref")) {
          var o = Object.getOwnPropertyDescriptor(t, "ref").get;
          if (o && o.isReactWarning)
            return !1;
        }
        return t.ref !== void 0;
      }
      function Fe(t) {
        if (qe.call(t, "key")) {
          var o = Object.getOwnPropertyDescriptor(t, "key").get;
          if (o && o.isReactWarning)
            return !1;
        }
        return t.key !== void 0;
      }
      function pr(t, o) {
        var u = function() {
          At || (At = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        u.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: u,
          configurable: !0
        });
      }
      function It(t, o) {
        var u = function() {
          jt || (jt = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        u.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: u,
          configurable: !0
        });
      }
      function $t(t) {
        if (typeof t.ref == "string" && x.current && t.__self && x.current.stateNode !== t.__self) {
          var o = Pe(x.current.type);
          ct[o] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', o, t.ref), ct[o] = !0);
        }
      }
      var He = function(t, o, u, l, v, O, w) {
        var j = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: i,
          // Built-in properties that belong on the element
          type: t,
          key: o,
          ref: u,
          props: w,
          // Record the component responsible for creating this element.
          _owner: O
        };
        return j._store = {}, Object.defineProperty(j._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(j, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: l
        }), Object.defineProperty(j, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: v
        }), Object.freeze && (Object.freeze(j.props), Object.freeze(j)), j;
      };
      function hr(t, o, u) {
        var l, v = {}, O = null, w = null, j = null, B = null;
        if (o != null) {
          gt(o) && (w = o.ref, $t(o)), Fe(o) && (Be(o.key), O = "" + o.key), j = o.__self === void 0 ? null : o.__self, B = o.__source === void 0 ? null : o.__source;
          for (l in o)
            qe.call(o, l) && !st.hasOwnProperty(l) && (v[l] = o[l]);
        }
        var Z = arguments.length - 2;
        if (Z === 1)
          v.children = u;
        else if (Z > 1) {
          for (var re = Array(Z), ne = 0; ne < Z; ne++)
            re[ne] = arguments[ne + 2];
          Object.freeze && Object.freeze(re), v.children = re;
        }
        if (t && t.defaultProps) {
          var ie = t.defaultProps;
          for (l in ie)
            v[l] === void 0 && (v[l] = ie[l]);
        }
        if (O || w) {
          var ce = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          O && pr(v, ce), w && It(v, ce);
        }
        return He(t, O, w, j, B, x.current, v);
      }
      function vr(t, o) {
        var u = He(t.type, o, t.ref, t._self, t._source, t._owner, t.props);
        return u;
      }
      function yr(t, o, u) {
        if (t == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
        var l, v = T({}, t.props), O = t.key, w = t.ref, j = t._self, B = t._source, Z = t._owner;
        if (o != null) {
          gt(o) && (w = o.ref, Z = x.current), Fe(o) && (Be(o.key), O = "" + o.key);
          var re;
          t.type && t.type.defaultProps && (re = t.type.defaultProps);
          for (l in o)
            qe.call(o, l) && !st.hasOwnProperty(l) && (o[l] === void 0 && re !== void 0 ? v[l] = re[l] : v[l] = o[l]);
        }
        var ne = arguments.length - 2;
        if (ne === 1)
          v.children = u;
        else if (ne > 1) {
          for (var ie = Array(ne), ce = 0; ce < ne; ce++)
            ie[ce] = arguments[ce + 2];
          v.children = ie;
        }
        return He(t.type, O, w, j, B, Z, v);
      }
      function Le(t) {
        return typeof t == "object" && t !== null && t.$$typeof === i;
      }
      var Dt = ".", mr = ":";
      function gr(t) {
        var o = /[=:]/g, u = {
          "=": "=0",
          ":": "=2"
        }, l = t.replace(o, function(v) {
          return u[v];
        });
        return "$" + l;
      }
      var ut = !1, Nt = /\/+/g;
      function $e(t) {
        return t.replace(Nt, "$&/");
      }
      function Ke(t, o) {
        return typeof t == "object" && t !== null && t.key != null ? (Be(t.key), gr("" + t.key)) : o.toString(36);
      }
      function Me(t, o, u, l, v) {
        var O = typeof t;
        (O === "undefined" || O === "boolean") && (t = null);
        var w = !1;
        if (t === null)
          w = !0;
        else
          switch (O) {
            case "string":
            case "number":
              w = !0;
              break;
            case "object":
              switch (t.$$typeof) {
                case i:
                case c:
                  w = !0;
              }
          }
        if (w) {
          var j = t, B = v(j), Z = l === "" ? Dt + Ke(j, 0) : l;
          if (at(B)) {
            var re = "";
            Z != null && (re = $e(Z) + "/"), Me(B, o, re, "", function(Mo) {
              return Mo;
            });
          } else
            B != null && (Le(B) && (B.key && (!j || j.key !== B.key) && Be(B.key), B = vr(
              B,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              u + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (B.key && (!j || j.key !== B.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                $e("" + B.key) + "/"
              ) : "") + Z
            )), o.push(B));
          return 1;
        }
        var ne, ie, ce = 0, me = l === "" ? Dt : l + mr;
        if (at(t))
          for (var qt = 0; qt < t.length; qt++)
            ne = t[qt], ie = me + Ke(ne, qt), ce += Me(ne, o, u, ie, v);
        else {
          var jr = A(t);
          if (typeof jr == "function") {
            var En = t;
            jr === En.entries && (ut || _e("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ut = !0);
            for (var Fo = jr.call(En), _n, Lo = 0; !(_n = Fo.next()).done; )
              ne = _n.value, ie = me + Ke(ne, Lo++), ce += Me(ne, o, u, ie, v);
          } else if (O === "object") {
            var Sn = String(t);
            throw new Error("Objects are not valid as a React child (found: " + (Sn === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : Sn) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return ce;
      }
      function Xe(t, o, u) {
        if (t == null)
          return t;
        var l = [], v = 0;
        return Me(t, l, "", "", function(O) {
          return o.call(u, O, v++);
        }), l;
      }
      function br(t) {
        var o = 0;
        return Xe(t, function() {
          o++;
        }), o;
      }
      function Ft(t, o, u) {
        Xe(t, function() {
          o.apply(this, arguments);
        }, u);
      }
      function wr(t) {
        return Xe(t, function(o) {
          return o;
        }) || [];
      }
      function Lt(t) {
        if (!Le(t))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return t;
      }
      function Mt(t) {
        var o = {
          $$typeof: E,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: t,
          _currentValue2: t,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        o.Provider = {
          $$typeof: y,
          _context: o
        };
        var u = !1, l = !1, v = !1;
        {
          var O = {
            $$typeof: E,
            _context: o
          };
          Object.defineProperties(O, {
            Provider: {
              get: function() {
                return l || (l = !0, R("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), o.Provider;
              },
              set: function(w) {
                o.Provider = w;
              }
            },
            _currentValue: {
              get: function() {
                return o._currentValue;
              },
              set: function(w) {
                o._currentValue = w;
              }
            },
            _currentValue2: {
              get: function() {
                return o._currentValue2;
              },
              set: function(w) {
                o._currentValue2 = w;
              }
            },
            _threadCount: {
              get: function() {
                return o._threadCount;
              },
              set: function(w) {
                o._threadCount = w;
              }
            },
            Consumer: {
              get: function() {
                return u || (u = !0, R("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), o.Consumer;
              }
            },
            displayName: {
              get: function() {
                return o.displayName;
              },
              set: function(w) {
                v || (_e("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", w), v = !0);
              }
            }
          }), o.Consumer = O;
        }
        return o._currentRenderer = null, o._currentRenderer2 = null, o;
      }
      var Je = -1, bt = 0, wt = 1, Er = 2;
      function _r(t) {
        if (t._status === Je) {
          var o = t._result, u = o();
          if (u.then(function(O) {
            if (t._status === bt || t._status === Je) {
              var w = t;
              w._status = wt, w._result = O;
            }
          }, function(O) {
            if (t._status === bt || t._status === Je) {
              var w = t;
              w._status = Er, w._result = O;
            }
          }), t._status === Je) {
            var l = t;
            l._status = bt, l._result = u;
          }
        }
        if (t._status === wt) {
          var v = t._result;
          return v === void 0 && R(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, v), "default" in v || R(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, v), v.default;
        } else
          throw t._result;
      }
      function Sr(t) {
        var o = {
          // We use these fields to store the result.
          _status: Je,
          _result: t
        }, u = {
          $$typeof: W,
          _payload: o,
          _init: _r
        };
        {
          var l, v;
          Object.defineProperties(u, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return l;
              },
              set: function(O) {
                R("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), l = O, Object.defineProperty(u, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return v;
              },
              set: function(O) {
                R("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), v = O, Object.defineProperty(u, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return u;
      }
      function Rr(t) {
        t != null && t.$$typeof === P ? R("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof t != "function" ? R("forwardRef requires a render function but was given %s.", t === null ? "null" : typeof t) : t.length !== 0 && t.length !== 2 && R("forwardRef render functions accept exactly two parameters: props and ref. %s", t.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), t != null && (t.defaultProps != null || t.propTypes != null) && R("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var o = {
          $$typeof: _,
          render: t
        };
        {
          var u;
          Object.defineProperty(o, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return u;
            },
            set: function(l) {
              u = l, !t.name && !t.displayName && (t.displayName = l);
            }
          });
        }
        return o;
      }
      var a;
      a = Symbol.for("react.module.reference");
      function d(t) {
        return !!(typeof t == "string" || typeof t == "function" || t === f || t === g || ge || t === h || t === S || t === k || de || t === Q || je || Ye || Ie || typeof t == "object" && t !== null && (t.$$typeof === W || t.$$typeof === P || t.$$typeof === y || t.$$typeof === E || t.$$typeof === _ || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        t.$$typeof === a || t.getModuleId !== void 0));
      }
      function m(t, o) {
        d(t) || R("memo: The first argument must be a component. Instead received: %s", t === null ? "null" : typeof t);
        var u = {
          $$typeof: P,
          type: t,
          compare: o === void 0 ? null : o
        };
        {
          var l;
          Object.defineProperty(u, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return l;
            },
            set: function(v) {
              l = v, !t.name && !t.displayName && (t.displayName = v);
            }
          });
        }
        return u;
      }
      function b() {
        var t = U.current;
        return t === null && R(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), t;
      }
      function G(t) {
        var o = b();
        if (t._context !== void 0) {
          var u = t._context;
          u.Consumer === t ? R("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : u.Provider === t && R("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return o.useContext(t);
      }
      function J(t) {
        var o = b();
        return o.useState(t);
      }
      function z(t, o, u) {
        var l = b();
        return l.useReducer(t, o, u);
      }
      function N(t) {
        var o = b();
        return o.useRef(t);
      }
      function ye(t, o) {
        var u = b();
        return u.useEffect(t, o);
      }
      function ae(t, o) {
        var u = b();
        return u.useInsertionEffect(t, o);
      }
      function se(t, o) {
        var u = b();
        return u.useLayoutEffect(t, o);
      }
      function Ee(t, o) {
        var u = b();
        return u.useCallback(t, o);
      }
      function Ve(t, o) {
        var u = b();
        return u.useMemo(t, o);
      }
      function Vt(t, o, u) {
        var l = b();
        return l.useImperativeHandle(t, o, u);
      }
      function Oe(t, o) {
        {
          var u = b();
          return u.useDebugValue(t, o);
        }
      }
      function ho() {
        var t = b();
        return t.useTransition();
      }
      function vo(t) {
        var o = b();
        return o.useDeferredValue(t);
      }
      function yo() {
        var t = b();
        return t.useId();
      }
      function mo(t, o, u) {
        var l = b();
        return l.useSyncExternalStore(t, o, u);
      }
      var Et = 0, en, tn, rn, nn, on, an, sn;
      function cn() {
      }
      cn.__reactDisabledLog = !0;
      function go() {
        {
          if (Et === 0) {
            en = console.log, tn = console.info, rn = console.warn, nn = console.error, on = console.group, an = console.groupCollapsed, sn = console.groupEnd;
            var t = {
              configurable: !0,
              enumerable: !0,
              value: cn,
              writable: !0
            };
            Object.defineProperties(console, {
              info: t,
              log: t,
              warn: t,
              error: t,
              group: t,
              groupCollapsed: t,
              groupEnd: t
            });
          }
          Et++;
        }
      }
      function bo() {
        {
          if (Et--, Et === 0) {
            var t = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: T({}, t, {
                value: en
              }),
              info: T({}, t, {
                value: tn
              }),
              warn: T({}, t, {
                value: rn
              }),
              error: T({}, t, {
                value: nn
              }),
              group: T({}, t, {
                value: on
              }),
              groupCollapsed: T({}, t, {
                value: an
              }),
              groupEnd: T({}, t, {
                value: sn
              })
            });
          }
          Et < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Cr = le.ReactCurrentDispatcher, kr;
      function zt(t, o, u) {
        {
          if (kr === void 0)
            try {
              throw Error();
            } catch (v) {
              var l = v.stack.trim().match(/\n( *(at )?)/);
              kr = l && l[1] || "";
            }
          return `
` + kr + t;
        }
      }
      var xr = !1, Wt;
      {
        var wo = typeof WeakMap == "function" ? WeakMap : Map;
        Wt = new wo();
      }
      function un(t, o) {
        if (!t || xr)
          return "";
        {
          var u = Wt.get(t);
          if (u !== void 0)
            return u;
        }
        var l;
        xr = !0;
        var v = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var O;
        O = Cr.current, Cr.current = null, go();
        try {
          if (o) {
            var w = function() {
              throw Error();
            };
            if (Object.defineProperty(w.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(w, []);
              } catch (me) {
                l = me;
              }
              Reflect.construct(t, [], w);
            } else {
              try {
                w.call();
              } catch (me) {
                l = me;
              }
              t.call(w.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (me) {
              l = me;
            }
            t();
          }
        } catch (me) {
          if (me && l && typeof me.stack == "string") {
            for (var j = me.stack.split(`
`), B = l.stack.split(`
`), Z = j.length - 1, re = B.length - 1; Z >= 1 && re >= 0 && j[Z] !== B[re]; )
              re--;
            for (; Z >= 1 && re >= 0; Z--, re--)
              if (j[Z] !== B[re]) {
                if (Z !== 1 || re !== 1)
                  do
                    if (Z--, re--, re < 0 || j[Z] !== B[re]) {
                      var ne = `
` + j[Z].replace(" at new ", " at ");
                      return t.displayName && ne.includes("<anonymous>") && (ne = ne.replace("<anonymous>", t.displayName)), typeof t == "function" && Wt.set(t, ne), ne;
                    }
                  while (Z >= 1 && re >= 0);
                break;
              }
          }
        } finally {
          xr = !1, Cr.current = O, bo(), Error.prepareStackTrace = v;
        }
        var ie = t ? t.displayName || t.name : "", ce = ie ? zt(ie) : "";
        return typeof t == "function" && Wt.set(t, ce), ce;
      }
      function Eo(t, o, u) {
        return un(t, !1);
      }
      function _o(t) {
        var o = t.prototype;
        return !!(o && o.isReactComponent);
      }
      function Yt(t, o, u) {
        if (t == null)
          return "";
        if (typeof t == "function")
          return un(t, _o(t));
        if (typeof t == "string")
          return zt(t);
        switch (t) {
          case S:
            return zt("Suspense");
          case k:
            return zt("SuspenseList");
        }
        if (typeof t == "object")
          switch (t.$$typeof) {
            case _:
              return Eo(t.render);
            case P:
              return Yt(t.type, o, u);
            case W: {
              var l = t, v = l._payload, O = l._init;
              try {
                return Yt(O(v), o, u);
              } catch {
              }
            }
          }
        return "";
      }
      var ln = {}, fn = le.ReactDebugCurrentFrame;
      function Ut(t) {
        if (t) {
          var o = t._owner, u = Yt(t.type, t._source, o ? o.type : null);
          fn.setExtraStackFrame(u);
        } else
          fn.setExtraStackFrame(null);
      }
      function So(t, o, u, l, v) {
        {
          var O = Function.call.bind(qe);
          for (var w in t)
            if (O(t, w)) {
              var j = void 0;
              try {
                if (typeof t[w] != "function") {
                  var B = Error((l || "React class") + ": " + u + " type `" + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[w] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw B.name = "Invariant Violation", B;
                }
                j = t[w](o, w, l, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Z) {
                j = Z;
              }
              j && !(j instanceof Error) && (Ut(v), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", u, w, typeof j), Ut(null)), j instanceof Error && !(j.message in ln) && (ln[j.message] = !0, Ut(v), R("Failed %s type: %s", u, j.message), Ut(null));
            }
        }
      }
      function lt(t) {
        if (t) {
          var o = t._owner, u = Yt(t.type, t._source, o ? o.type : null);
          we(u);
        } else
          we(null);
      }
      var Or;
      Or = !1;
      function dn() {
        if (x.current) {
          var t = Pe(x.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
      function Ro(t) {
        if (t !== void 0) {
          var o = t.fileName.replace(/^.*[\\\/]/, ""), u = t.lineNumber;
          return `

Check your code at ` + o + ":" + u + ".";
        }
        return "";
      }
      function Co(t) {
        return t != null ? Ro(t.__source) : "";
      }
      var pn = {};
      function ko(t) {
        var o = dn();
        if (!o) {
          var u = typeof t == "string" ? t : t.displayName || t.name;
          u && (o = `

Check the top-level render call using <` + u + ">.");
        }
        return o;
      }
      function hn(t, o) {
        if (!(!t._store || t._store.validated || t.key != null)) {
          t._store.validated = !0;
          var u = ko(o);
          if (!pn[u]) {
            pn[u] = !0;
            var l = "";
            t && t._owner && t._owner !== x.current && (l = " It was passed a child from " + Pe(t._owner.type) + "."), lt(t), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, l), lt(null);
          }
        }
      }
      function vn(t, o) {
        if (typeof t == "object") {
          if (at(t))
            for (var u = 0; u < t.length; u++) {
              var l = t[u];
              Le(l) && hn(l, o);
            }
          else if (Le(t))
            t._store && (t._store.validated = !0);
          else if (t) {
            var v = A(t);
            if (typeof v == "function" && v !== t.entries)
              for (var O = v.call(t), w; !(w = O.next()).done; )
                Le(w.value) && hn(w.value, o);
          }
        }
      }
      function yn(t) {
        {
          var o = t.type;
          if (o == null || typeof o == "string")
            return;
          var u;
          if (typeof o == "function")
            u = o.propTypes;
          else if (typeof o == "object" && (o.$$typeof === _ || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          o.$$typeof === P))
            u = o.propTypes;
          else
            return;
          if (u) {
            var l = Pe(o);
            So(u, t.props, "prop", l, t);
          } else if (o.PropTypes !== void 0 && !Or) {
            Or = !0;
            var v = Pe(o);
            R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", v || "Unknown");
          }
          typeof o.getDefaultProps == "function" && !o.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function xo(t) {
        {
          for (var o = Object.keys(t.props), u = 0; u < o.length; u++) {
            var l = o[u];
            if (l !== "children" && l !== "key") {
              lt(t), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", l), lt(null);
              break;
            }
          }
          t.ref !== null && (lt(t), R("Invalid attribute `ref` supplied to `React.Fragment`."), lt(null));
        }
      }
      function mn(t, o, u) {
        var l = d(t);
        if (!l) {
          var v = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = Co(o);
          O ? v += O : v += dn();
          var w;
          t === null ? w = "null" : at(t) ? w = "array" : t !== void 0 && t.$$typeof === i ? (w = "<" + (Pe(t.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : w = typeof t, R("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", w, v);
        }
        var j = hr.apply(this, arguments);
        if (j == null)
          return j;
        if (l)
          for (var B = 2; B < arguments.length; B++)
            vn(arguments[B], t);
        return t === f ? xo(j) : yn(j), j;
      }
      var gn = !1;
      function Oo(t) {
        var o = mn.bind(null, t);
        return o.type = t, gn || (gn = !0, _e("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(o, "type", {
          enumerable: !1,
          get: function() {
            return _e("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: t
            }), t;
          }
        }), o;
      }
      function To(t, o, u) {
        for (var l = yr.apply(this, arguments), v = 2; v < arguments.length; v++)
          vn(arguments[v], l.type);
        return yn(l), l;
      }
      function Po(t, o) {
        var u = M.transition;
        M.transition = {};
        var l = M.transition;
        M.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          t();
        } finally {
          if (M.transition = u, u === null && l._updatedFibers) {
            var v = l._updatedFibers.size;
            v > 10 && _e("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), l._updatedFibers.clear();
          }
        }
      }
      var bn = !1, Bt = null;
      function Ao(t) {
        if (Bt === null)
          try {
            var o = ("require" + Math.random()).slice(0, 7), u = e && e[o];
            Bt = u.call(e, "timers").setImmediate;
          } catch {
            Bt = function(v) {
              bn === !1 && (bn = !0, typeof MessageChannel > "u" && R("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var O = new MessageChannel();
              O.port1.onmessage = v, O.port2.postMessage(void 0);
            };
          }
        return Bt(t);
      }
      var ft = 0, wn = !1;
      function jo(t) {
        {
          var o = ft;
          ft++, I.current === null && (I.current = []);
          var u = I.isBatchingLegacy, l;
          try {
            if (I.isBatchingLegacy = !0, l = t(), !u && I.didScheduleLegacyUpdate) {
              var v = I.current;
              v !== null && (I.didScheduleLegacyUpdate = !1, Ar(v));
            }
          } catch (ie) {
            throw Gt(o), ie;
          } finally {
            I.isBatchingLegacy = u;
          }
          if (l !== null && typeof l == "object" && typeof l.then == "function") {
            var O = l, w = !1, j = {
              then: function(ie, ce) {
                w = !0, O.then(function(me) {
                  Gt(o), ft === 0 ? Tr(me, ie, ce) : ie(me);
                }, function(me) {
                  Gt(o), ce(me);
                });
              }
            };
            return !wn && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              w || (wn = !0, R("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), j;
          } else {
            var B = l;
            if (Gt(o), ft === 0) {
              var Z = I.current;
              Z !== null && (Ar(Z), I.current = null);
              var re = {
                then: function(ie, ce) {
                  I.current === null ? (I.current = [], Tr(B, ie, ce)) : ie(B);
                }
              };
              return re;
            } else {
              var ne = {
                then: function(ie, ce) {
                  ie(B);
                }
              };
              return ne;
            }
          }
        }
      }
      function Gt(t) {
        t !== ft - 1 && R("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), ft = t;
      }
      function Tr(t, o, u) {
        {
          var l = I.current;
          if (l !== null)
            try {
              Ar(l), Ao(function() {
                l.length === 0 ? (I.current = null, o(t)) : Tr(t, o, u);
              });
            } catch (v) {
              u(v);
            }
          else
            o(t);
        }
      }
      var Pr = !1;
      function Ar(t) {
        if (!Pr) {
          Pr = !0;
          var o = 0;
          try {
            for (; o < t.length; o++) {
              var u = t[o];
              do
                u = u(!0);
              while (u !== null);
            }
            t.length = 0;
          } catch (l) {
            throw t = t.slice(o + 1), l;
          } finally {
            Pr = !1;
          }
        }
      }
      var Io = mn, $o = To, Do = Oo, No = {
        map: Xe,
        forEach: Ft,
        count: br,
        toArray: wr,
        only: Lt
      };
      r.Children = No, r.Component = $, r.Fragment = f, r.Profiler = g, r.PureComponent = oe, r.StrictMode = h, r.Suspense = S, r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = le, r.cloneElement = $o, r.createContext = Mt, r.createElement = Io, r.createFactory = Do, r.createRef = Ce, r.forwardRef = Rr, r.isValidElement = Le, r.lazy = Sr, r.memo = m, r.startTransition = Po, r.unstable_act = jo, r.useCallback = Ee, r.useContext = G, r.useDebugValue = Oe, r.useDeferredValue = vo, r.useEffect = ye, r.useId = yo, r.useImperativeHandle = Vt, r.useInsertionEffect = ae, r.useLayoutEffect = se, r.useMemo = Ve, r.useReducer = z, r.useRef = N, r.useState = J, r.useSyncExternalStore = mo, r.useTransition = ho, r.version = n, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Rt, Rt.exports)), Rt.exports;
}
var L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cn;
function Wo() {
  if (Cn)
    return L;
  Cn = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), h = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), E = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), S = Symbol.iterator;
  function k(s) {
    return s === null || typeof s != "object" ? null : (s = S && s[S] || s["@@iterator"], typeof s == "function" ? s : null);
  }
  var P = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, W = Object.assign, Q = {};
  function ee(s, p, T) {
    this.props = s, this.context = p, this.refs = Q, this.updater = T || P;
  }
  ee.prototype.isReactComponent = {}, ee.prototype.setState = function(s, p) {
    if (typeof s != "object" && typeof s != "function" && s != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, s, p, "setState");
  }, ee.prototype.forceUpdate = function(s) {
    this.updater.enqueueForceUpdate(this, s, "forceUpdate");
  };
  function q() {
  }
  q.prototype = ee.prototype;
  function A(s, p, T) {
    this.props = s, this.context = p, this.refs = Q, this.updater = T || P;
  }
  var U = A.prototype = new q();
  U.constructor = A, W(U, ee.prototype), U.isPureReactComponent = !0;
  var M = Array.isArray, I = Object.prototype.hasOwnProperty, x = { current: null }, C = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ve(s, p, T) {
    var V, $ = {}, H = null, K = null;
    if (p != null)
      for (V in p.ref !== void 0 && (K = p.ref), p.key !== void 0 && (H = "" + p.key), p)
        I.call(p, V) && !C.hasOwnProperty(V) && ($[V] = p[V]);
    var Y = arguments.length - 2;
    if (Y === 1)
      $.children = T;
    else if (1 < Y) {
      for (var F = Array(Y), oe = 0; oe < Y; oe++)
        F[oe] = arguments[oe + 2];
      $.children = F;
    }
    if (s && s.defaultProps)
      for (V in Y = s.defaultProps, Y)
        $[V] === void 0 && ($[V] = Y[V]);
    return { $$typeof: e, type: s, key: H, ref: K, props: $, _owner: x.current };
  }
  function we(s, p) {
    return { $$typeof: e, type: s.type, key: p, ref: s.ref, props: s.props, _owner: s._owner };
  }
  function je(s) {
    return typeof s == "object" && s !== null && s.$$typeof === e;
  }
  function Ye(s) {
    var p = { "=": "=0", ":": "=2" };
    return "$" + s.replace(/[=:]/g, function(T) {
      return p[T];
    });
  }
  var Ie = /\/+/g;
  function de(s, p) {
    return typeof s == "object" && s !== null && s.key != null ? Ye("" + s.key) : p.toString(36);
  }
  function ge(s, p, T, V, $) {
    var H = typeof s;
    (H === "undefined" || H === "boolean") && (s = null);
    var K = !1;
    if (s === null)
      K = !0;
    else
      switch (H) {
        case "string":
        case "number":
          K = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case e:
            case r:
              K = !0;
          }
      }
    if (K)
      return K = s, $ = $(K), s = V === "" ? "." + de(K, 0) : V, M($) ? (T = "", s != null && (T = s.replace(Ie, "$&/") + "/"), ge($, p, T, "", function(oe) {
        return oe;
      })) : $ != null && (je($) && ($ = we($, T + (!$.key || K && K.key === $.key ? "" : ("" + $.key).replace(Ie, "$&/") + "/") + s)), p.push($)), 1;
    if (K = 0, V = V === "" ? "." : V + ":", M(s))
      for (var Y = 0; Y < s.length; Y++) {
        H = s[Y];
        var F = V + de(H, Y);
        K += ge(H, p, T, F, $);
      }
    else if (F = k(s), typeof F == "function")
      for (s = F.call(s), Y = 0; !(H = s.next()).done; )
        H = H.value, F = V + de(H, Y++), K += ge(H, p, T, F, $);
    else if (H === "object")
      throw p = String(s), Error("Objects are not valid as a React child (found: " + (p === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : p) + "). If you meant to render a collection of children, use an array instead.");
    return K;
  }
  function le(s, p, T) {
    if (s == null)
      return s;
    var V = [], $ = 0;
    return ge(s, V, "", "", function(H) {
      return p.call(T, H, $++);
    }), V;
  }
  function _e(s) {
    if (s._status === -1) {
      var p = s._result;
      p = p(), p.then(function(T) {
        (s._status === 0 || s._status === -1) && (s._status = 1, s._result = T);
      }, function(T) {
        (s._status === 0 || s._status === -1) && (s._status = 2, s._result = T);
      }), s._status === -1 && (s._status = 0, s._result = p);
    }
    if (s._status === 1)
      return s._result.default;
    throw s._result;
  }
  var R = { current: null }, fe = { transition: null }, Se = { ReactCurrentDispatcher: R, ReactCurrentBatchConfig: fe, ReactCurrentOwner: x };
  return L.Children = { map: le, forEach: function(s, p, T) {
    le(s, function() {
      p.apply(this, arguments);
    }, T);
  }, count: function(s) {
    var p = 0;
    return le(s, function() {
      p++;
    }), p;
  }, toArray: function(s) {
    return le(s, function(p) {
      return p;
    }) || [];
  }, only: function(s) {
    if (!je(s))
      throw Error("React.Children.only expected to receive a single React element child.");
    return s;
  } }, L.Component = ee, L.Fragment = n, L.Profiler = c, L.PureComponent = A, L.StrictMode = i, L.Suspense = y, L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Se, L.cloneElement = function(s, p, T) {
    if (s == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + s + ".");
    var V = W({}, s.props), $ = s.key, H = s.ref, K = s._owner;
    if (p != null) {
      if (p.ref !== void 0 && (H = p.ref, K = x.current), p.key !== void 0 && ($ = "" + p.key), s.type && s.type.defaultProps)
        var Y = s.type.defaultProps;
      for (F in p)
        I.call(p, F) && !C.hasOwnProperty(F) && (V[F] = p[F] === void 0 && Y !== void 0 ? Y[F] : p[F]);
    }
    var F = arguments.length - 2;
    if (F === 1)
      V.children = T;
    else if (1 < F) {
      Y = Array(F);
      for (var oe = 0; oe < F; oe++)
        Y[oe] = arguments[oe + 2];
      V.children = Y;
    }
    return { $$typeof: e, type: s.type, key: $, ref: H, props: V, _owner: K };
  }, L.createContext = function(s) {
    return s = { $$typeof: h, _currentValue: s, _currentValue2: s, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, s.Provider = { $$typeof: f, _context: s }, s.Consumer = s;
  }, L.createElement = ve, L.createFactory = function(s) {
    var p = ve.bind(null, s);
    return p.type = s, p;
  }, L.createRef = function() {
    return { current: null };
  }, L.forwardRef = function(s) {
    return { $$typeof: g, render: s };
  }, L.isValidElement = je, L.lazy = function(s) {
    return { $$typeof: _, _payload: { _status: -1, _result: s }, _init: _e };
  }, L.memo = function(s, p) {
    return { $$typeof: E, type: s, compare: p === void 0 ? null : p };
  }, L.startTransition = function(s) {
    var p = fe.transition;
    fe.transition = {};
    try {
      s();
    } finally {
      fe.transition = p;
    }
  }, L.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, L.useCallback = function(s, p) {
    return R.current.useCallback(s, p);
  }, L.useContext = function(s) {
    return R.current.useContext(s);
  }, L.useDebugValue = function() {
  }, L.useDeferredValue = function(s) {
    return R.current.useDeferredValue(s);
  }, L.useEffect = function(s, p) {
    return R.current.useEffect(s, p);
  }, L.useId = function() {
    return R.current.useId();
  }, L.useImperativeHandle = function(s, p, T) {
    return R.current.useImperativeHandle(s, p, T);
  }, L.useInsertionEffect = function(s, p) {
    return R.current.useInsertionEffect(s, p);
  }, L.useLayoutEffect = function(s, p) {
    return R.current.useLayoutEffect(s, p);
  }, L.useMemo = function(s, p) {
    return R.current.useMemo(s, p);
  }, L.useReducer = function(s, p, T) {
    return R.current.useReducer(s, p, T);
  }, L.useRef = function(s) {
    return R.current.useRef(s);
  }, L.useState = function(s) {
    return R.current.useState(s);
  }, L.useSyncExternalStore = function(s, p, T) {
    return R.current.useSyncExternalStore(s, p, T);
  }, L.useTransition = function() {
    return R.current.useTransition();
  }, L.version = "18.2.0", L;
}
var kn;
function Hr() {
  return kn || (kn = 1, process.env.NODE_ENV === "production" ? Ht.exports = Wo() : Ht.exports = zo()), Ht.exports;
}
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xn;
function Yo() {
  return xn || (xn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Hr(), r = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), g = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), W = Symbol.iterator, Q = "@@iterator";
    function ee(a) {
      if (a === null || typeof a != "object")
        return null;
      var d = W && a[W] || a[Q];
      return typeof d == "function" ? d : null;
    }
    var q = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function A(a) {
      {
        for (var d = arguments.length, m = new Array(d > 1 ? d - 1 : 0), b = 1; b < d; b++)
          m[b - 1] = arguments[b];
        U("error", a, m);
      }
    }
    function U(a, d, m) {
      {
        var b = q.ReactDebugCurrentFrame, G = b.getStackAddendum();
        G !== "" && (d += "%s", m = m.concat([G]));
        var J = m.map(function(z) {
          return String(z);
        });
        J.unshift("Warning: " + d), Function.prototype.apply.call(console[a], console, J);
      }
    }
    var M = !1, I = !1, x = !1, C = !1, ve = !1, we;
    we = Symbol.for("react.module.reference");
    function je(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === i || a === f || ve || a === c || a === E || a === _ || C || a === P || M || I || x || typeof a == "object" && a !== null && (a.$$typeof === k || a.$$typeof === S || a.$$typeof === h || a.$$typeof === g || a.$$typeof === y || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === we || a.getModuleId !== void 0));
    }
    function Ye(a, d, m) {
      var b = a.displayName;
      if (b)
        return b;
      var G = d.displayName || d.name || "";
      return G !== "" ? m + "(" + G + ")" : m;
    }
    function Ie(a) {
      return a.displayName || "Context";
    }
    function de(a) {
      if (a == null)
        return null;
      if (typeof a.tag == "number" && A("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
        return a.displayName || a.name || null;
      if (typeof a == "string")
        return a;
      switch (a) {
        case i:
          return "Fragment";
        case n:
          return "Portal";
        case f:
          return "Profiler";
        case c:
          return "StrictMode";
        case E:
          return "Suspense";
        case _:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case g:
            var d = a;
            return Ie(d) + ".Consumer";
          case h:
            var m = a;
            return Ie(m._context) + ".Provider";
          case y:
            return Ye(a, a.render, "ForwardRef");
          case S:
            var b = a.displayName || null;
            return b !== null ? b : de(a.type) || "Memo";
          case k: {
            var G = a, J = G._payload, z = G._init;
            try {
              return de(z(J));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ge = Object.assign, le = 0, _e, R, fe, Se, s, p, T;
    function V() {
    }
    V.__reactDisabledLog = !0;
    function $() {
      {
        if (le === 0) {
          _e = console.log, R = console.info, fe = console.warn, Se = console.error, s = console.group, p = console.groupCollapsed, T = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: V,
            writable: !0
          };
          Object.defineProperties(console, {
            info: a,
            log: a,
            warn: a,
            error: a,
            group: a,
            groupCollapsed: a,
            groupEnd: a
          });
        }
        le++;
      }
    }
    function H() {
      {
        if (le--, le === 0) {
          var a = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ge({}, a, {
              value: _e
            }),
            info: ge({}, a, {
              value: R
            }),
            warn: ge({}, a, {
              value: fe
            }),
            error: ge({}, a, {
              value: Se
            }),
            group: ge({}, a, {
              value: s
            }),
            groupCollapsed: ge({}, a, {
              value: p
            }),
            groupEnd: ge({}, a, {
              value: T
            })
          });
        }
        le < 0 && A("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = q.ReactCurrentDispatcher, Y;
    function F(a, d, m) {
      {
        if (Y === void 0)
          try {
            throw Error();
          } catch (G) {
            var b = G.stack.trim().match(/\n( *(at )?)/);
            Y = b && b[1] || "";
          }
        return `
` + Y + a;
      }
    }
    var oe = !1, Re;
    {
      var Ce = typeof WeakMap == "function" ? WeakMap : Map;
      Re = new Ce();
    }
    function Tt(a, d) {
      if (!a || oe)
        return "";
      {
        var m = Re.get(a);
        if (m !== void 0)
          return m;
      }
      var b;
      oe = !0;
      var G = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var J;
      J = K.current, K.current = null, $();
      try {
        if (d) {
          var z = function() {
            throw Error();
          };
          if (Object.defineProperty(z.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(z, []);
            } catch (Oe) {
              b = Oe;
            }
            Reflect.construct(a, [], z);
          } else {
            try {
              z.call();
            } catch (Oe) {
              b = Oe;
            }
            a.call(z.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Oe) {
            b = Oe;
          }
          a();
        }
      } catch (Oe) {
        if (Oe && b && typeof Oe.stack == "string") {
          for (var N = Oe.stack.split(`
`), ye = b.stack.split(`
`), ae = N.length - 1, se = ye.length - 1; ae >= 1 && se >= 0 && N[ae] !== ye[se]; )
            se--;
          for (; ae >= 1 && se >= 0; ae--, se--)
            if (N[ae] !== ye[se]) {
              if (ae !== 1 || se !== 1)
                do
                  if (ae--, se--, se < 0 || N[ae] !== ye[se]) {
                    var Ee = `
` + N[ae].replace(" at new ", " at ");
                    return a.displayName && Ee.includes("<anonymous>") && (Ee = Ee.replace("<anonymous>", a.displayName)), typeof a == "function" && Re.set(a, Ee), Ee;
                  }
                while (ae >= 1 && se >= 0);
              break;
            }
        }
      } finally {
        oe = !1, K.current = J, H(), Error.prepareStackTrace = G;
      }
      var Ve = a ? a.displayName || a.name : "", Vt = Ve ? F(Ve) : "";
      return typeof a == "function" && Re.set(a, Vt), Vt;
    }
    function at(a, d, m) {
      return Tt(a, !1);
    }
    function dr(a) {
      var d = a.prototype;
      return !!(d && d.isReactComponent);
    }
    function it(a, d, m) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return Tt(a, dr(a));
      if (typeof a == "string")
        return F(a);
      switch (a) {
        case E:
          return F("Suspense");
        case _:
          return F("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case y:
            return at(a.render);
          case S:
            return it(a.type, d, m);
          case k: {
            var b = a, G = b._payload, J = b._init;
            try {
              return it(J(G), d, m);
            } catch {
            }
          }
        }
      return "";
    }
    var Ue = Object.prototype.hasOwnProperty, Be = {}, Pt = q.ReactDebugCurrentFrame;
    function Ge(a) {
      if (a) {
        var d = a._owner, m = it(a.type, a._source, d ? d.type : null);
        Pt.setExtraStackFrame(m);
      } else
        Pt.setExtraStackFrame(null);
    }
    function Pe(a, d, m, b, G) {
      {
        var J = Function.call.bind(Ue);
        for (var z in a)
          if (J(a, z)) {
            var N = void 0;
            try {
              if (typeof a[z] != "function") {
                var ye = Error((b || "React class") + ": " + m + " type `" + z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[z] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ye.name = "Invariant Violation", ye;
              }
              N = a[z](d, z, b, m, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ae) {
              N = ae;
            }
            N && !(N instanceof Error) && (Ge(G), A("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", b || "React class", m, z, typeof N), Ge(null)), N instanceof Error && !(N.message in Be) && (Be[N.message] = !0, Ge(G), A("Failed %s type: %s", m, N.message), Ge(null));
          }
      }
    }
    var qe = Array.isArray;
    function st(a) {
      return qe(a);
    }
    function At(a) {
      {
        var d = typeof Symbol == "function" && Symbol.toStringTag, m = d && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return m;
      }
    }
    function jt(a) {
      try {
        return ct(a), !1;
      } catch {
        return !0;
      }
    }
    function ct(a) {
      return "" + a;
    }
    function gt(a) {
      if (jt(a))
        return A("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", At(a)), ct(a);
    }
    var Fe = q.ReactCurrentOwner, pr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, It, $t, He;
    He = {};
    function hr(a) {
      if (Ue.call(a, "ref")) {
        var d = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function vr(a) {
      if (Ue.call(a, "key")) {
        var d = Object.getOwnPropertyDescriptor(a, "key").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function yr(a, d) {
      if (typeof a.ref == "string" && Fe.current && d && Fe.current.stateNode !== d) {
        var m = de(Fe.current.type);
        He[m] || (A('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', de(Fe.current.type), a.ref), He[m] = !0);
      }
    }
    function Le(a, d) {
      {
        var m = function() {
          It || (It = !0, A("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        m.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: m,
          configurable: !0
        });
      }
    }
    function Dt(a, d) {
      {
        var m = function() {
          $t || ($t = !0, A("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        m.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: m,
          configurable: !0
        });
      }
    }
    var mr = function(a, d, m, b, G, J, z) {
      var N = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: a,
        key: d,
        ref: m,
        props: z,
        // Record the component responsible for creating this element.
        _owner: J
      };
      return N._store = {}, Object.defineProperty(N._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(N, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.defineProperty(N, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: G
      }), Object.freeze && (Object.freeze(N.props), Object.freeze(N)), N;
    };
    function gr(a, d, m, b, G) {
      {
        var J, z = {}, N = null, ye = null;
        m !== void 0 && (gt(m), N = "" + m), vr(d) && (gt(d.key), N = "" + d.key), hr(d) && (ye = d.ref, yr(d, G));
        for (J in d)
          Ue.call(d, J) && !pr.hasOwnProperty(J) && (z[J] = d[J]);
        if (a && a.defaultProps) {
          var ae = a.defaultProps;
          for (J in ae)
            z[J] === void 0 && (z[J] = ae[J]);
        }
        if (N || ye) {
          var se = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          N && Le(z, se), ye && Dt(z, se);
        }
        return mr(a, N, ye, G, b, Fe.current, z);
      }
    }
    var ut = q.ReactCurrentOwner, Nt = q.ReactDebugCurrentFrame;
    function $e(a) {
      if (a) {
        var d = a._owner, m = it(a.type, a._source, d ? d.type : null);
        Nt.setExtraStackFrame(m);
      } else
        Nt.setExtraStackFrame(null);
    }
    var Ke;
    Ke = !1;
    function Me(a) {
      return typeof a == "object" && a !== null && a.$$typeof === r;
    }
    function Xe() {
      {
        if (ut.current) {
          var a = de(ut.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function br(a) {
      {
        if (a !== void 0) {
          var d = a.fileName.replace(/^.*[\\\/]/, ""), m = a.lineNumber;
          return `

Check your code at ` + d + ":" + m + ".";
        }
        return "";
      }
    }
    var Ft = {};
    function wr(a) {
      {
        var d = Xe();
        if (!d) {
          var m = typeof a == "string" ? a : a.displayName || a.name;
          m && (d = `

Check the top-level render call using <` + m + ">.");
        }
        return d;
      }
    }
    function Lt(a, d) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var m = wr(d);
        if (Ft[m])
          return;
        Ft[m] = !0;
        var b = "";
        a && a._owner && a._owner !== ut.current && (b = " It was passed a child from " + de(a._owner.type) + "."), $e(a), A('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', m, b), $e(null);
      }
    }
    function Mt(a, d) {
      {
        if (typeof a != "object")
          return;
        if (st(a))
          for (var m = 0; m < a.length; m++) {
            var b = a[m];
            Me(b) && Lt(b, d);
          }
        else if (Me(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var G = ee(a);
          if (typeof G == "function" && G !== a.entries)
            for (var J = G.call(a), z; !(z = J.next()).done; )
              Me(z.value) && Lt(z.value, d);
        }
      }
    }
    function Je(a) {
      {
        var d = a.type;
        if (d == null || typeof d == "string")
          return;
        var m;
        if (typeof d == "function")
          m = d.propTypes;
        else if (typeof d == "object" && (d.$$typeof === y || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        d.$$typeof === S))
          m = d.propTypes;
        else
          return;
        if (m) {
          var b = de(d);
          Pe(m, a.props, "prop", b, a);
        } else if (d.PropTypes !== void 0 && !Ke) {
          Ke = !0;
          var G = de(d);
          A("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", G || "Unknown");
        }
        typeof d.getDefaultProps == "function" && !d.getDefaultProps.isReactClassApproved && A("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function bt(a) {
      {
        for (var d = Object.keys(a.props), m = 0; m < d.length; m++) {
          var b = d[m];
          if (b !== "children" && b !== "key") {
            $e(a), A("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", b), $e(null);
            break;
          }
        }
        a.ref !== null && ($e(a), A("Invalid attribute `ref` supplied to `React.Fragment`."), $e(null));
      }
    }
    function wt(a, d, m, b, G, J) {
      {
        var z = je(a);
        if (!z) {
          var N = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (N += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ye = br(G);
          ye ? N += ye : N += Xe();
          var ae;
          a === null ? ae = "null" : st(a) ? ae = "array" : a !== void 0 && a.$$typeof === r ? (ae = "<" + (de(a.type) || "Unknown") + " />", N = " Did you accidentally export a JSX literal instead of a component?") : ae = typeof a, A("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ae, N);
        }
        var se = gr(a, d, m, G, J);
        if (se == null)
          return se;
        if (z) {
          var Ee = d.children;
          if (Ee !== void 0)
            if (b)
              if (st(Ee)) {
                for (var Ve = 0; Ve < Ee.length; Ve++)
                  Mt(Ee[Ve], a);
                Object.freeze && Object.freeze(Ee);
              } else
                A("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Mt(Ee, a);
        }
        return a === i ? bt(se) : Je(se), se;
      }
    }
    function Er(a, d, m) {
      return wt(a, d, m, !0);
    }
    function _r(a, d, m) {
      return wt(a, d, m, !1);
    }
    var Sr = _r, Rr = Er;
    _t.Fragment = i, _t.jsx = Sr, _t.jsxs = Rr;
  }()), _t;
}
var St = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var On;
function Uo() {
  if (On)
    return St;
  On = 1;
  var e = Hr(), r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, c = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(g, y, E) {
    var _, S = {}, k = null, P = null;
    E !== void 0 && (k = "" + E), y.key !== void 0 && (k = "" + y.key), y.ref !== void 0 && (P = y.ref);
    for (_ in y)
      i.call(y, _) && !f.hasOwnProperty(_) && (S[_] = y[_]);
    if (g && g.defaultProps)
      for (_ in y = g.defaultProps, y)
        S[_] === void 0 && (S[_] = y[_]);
    return { $$typeof: r, type: g, key: k, ref: P, props: S, _owner: c.current };
  }
  return St.Fragment = n, St.jsx = h, St.jsxs = h, St;
}
process.env.NODE_ENV === "production" ? Fr.exports = Uo() : Fr.exports = Yo();
var Un = Fr.exports;
const kt = Un.jsx, Bo = Un.jsxs;
var he = function() {
  return he = Object.assign || function(r) {
    for (var n, i = 1, c = arguments.length; i < c; i++) {
      n = arguments[i];
      for (var f in n)
        Object.prototype.hasOwnProperty.call(n, f) && (r[f] = n[f]);
    }
    return r;
  }, he.apply(this, arguments);
};
function rt(e, r, n) {
  if (n || arguments.length === 2)
    for (var i = 0, c = r.length, f; i < c; i++)
      (f || !(i in r)) && (f || (f = Array.prototype.slice.call(r, 0, i)), f[i] = r[i]);
  return e.concat(f || Array.prototype.slice.call(r));
}
function Go(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return r[n] === void 0 && (r[n] = e(n)), r[n];
  };
}
var qo = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ho = /* @__PURE__ */ Go(
  function(e) {
    return qo.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), et = Hr();
const ke = /* @__PURE__ */ Vo(et);
var te = "-ms-", xt = "-moz-", X = "-webkit-", Bn = "comm", ir = "rule", Kr = "decl", Ko = "@import", Gn = "@keyframes", Xo = "@layer", Jo = Math.abs, Xr = String.fromCharCode, Lr = Object.assign;
function Qo(e, r) {
  return pe(e, 0) ^ 45 ? (((r << 2 ^ pe(e, 0)) << 2 ^ pe(e, 1)) << 2 ^ pe(e, 2)) << 2 ^ pe(e, 3) : 0;
}
function qn(e) {
  return e.trim();
}
function De(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function D(e, r, n) {
  return e.replace(r, n);
}
function Qt(e, r) {
  return e.indexOf(r);
}
function pe(e, r) {
  return e.charCodeAt(r) | 0;
}
function pt(e, r, n) {
  return e.slice(r, n);
}
function Ae(e) {
  return e.length;
}
function Hn(e) {
  return e.length;
}
function Ct(e, r) {
  return r.push(e), e;
}
function Zo(e, r) {
  return e.map(r).join("");
}
function Tn(e, r) {
  return e.filter(function(n) {
    return !De(n, r);
  });
}
var sr = 1, ht = 1, Kn = 0, xe = 0, ue = 0, mt = "";
function cr(e, r, n, i, c, f, h, g) {
  return { value: e, root: r, parent: n, type: i, props: c, children: f, line: sr, column: ht, length: h, return: "", siblings: g };
}
function ze(e, r) {
  return Lr(cr("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, r);
}
function dt(e) {
  for (; e.root; )
    e = ze(e.root, { children: [e] });
  Ct(e, e.siblings);
}
function ea() {
  return ue;
}
function ta() {
  return ue = xe > 0 ? pe(mt, --xe) : 0, ht--, ue === 10 && (ht = 1, sr--), ue;
}
function Te() {
  return ue = xe < Kn ? pe(mt, xe++) : 0, ht++, ue === 10 && (ht = 1, sr++), ue;
}
function tt() {
  return pe(mt, xe);
}
function Zt() {
  return xe;
}
function ur(e, r) {
  return pt(mt, e, r);
}
function Mr(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function ra(e) {
  return sr = ht = 1, Kn = Ae(mt = e), xe = 0, [];
}
function na(e) {
  return mt = "", e;
}
function Ir(e) {
  return qn(ur(xe - 1, Vr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function oa(e) {
  for (; (ue = tt()) && ue < 33; )
    Te();
  return Mr(e) > 2 || Mr(ue) > 3 ? "" : " ";
}
function aa(e, r) {
  for (; --r && Te() && !(ue < 48 || ue > 102 || ue > 57 && ue < 65 || ue > 70 && ue < 97); )
    ;
  return ur(e, Zt() + (r < 6 && tt() == 32 && Te() == 32));
}
function Vr(e) {
  for (; Te(); )
    switch (ue) {
      case e:
        return xe;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Vr(ue);
        break;
      case 40:
        e === 41 && Vr(e);
        break;
      case 92:
        Te();
        break;
    }
  return xe;
}
function ia(e, r) {
  for (; Te() && e + ue !== 57; )
    if (e + ue === 84 && tt() === 47)
      break;
  return "/*" + ur(r, xe - 1) + "*" + Xr(e === 47 ? e : Te());
}
function sa(e) {
  for (; !Mr(tt()); )
    Te();
  return ur(e, xe);
}
function ca(e) {
  return na(er("", null, null, null, [""], e = ra(e), 0, [0], e));
}
function er(e, r, n, i, c, f, h, g, y) {
  for (var E = 0, _ = 0, S = h, k = 0, P = 0, W = 0, Q = 1, ee = 1, q = 1, A = 0, U = "", M = c, I = f, x = i, C = U; ee; )
    switch (W = A, A = Te()) {
      case 40:
        if (W != 108 && pe(C, S - 1) == 58) {
          Qt(C += D(Ir(A), "&", "&\f"), "&\f") != -1 && (q = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += Ir(A);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += oa(W);
        break;
      case 92:
        C += aa(Zt() - 1, 7);
        continue;
      case 47:
        switch (tt()) {
          case 42:
          case 47:
            Ct(ua(ia(Te(), Zt()), r, n, y), y);
            break;
          default:
            C += "/";
        }
        break;
      case 123 * Q:
        g[E++] = Ae(C) * q;
      case 125 * Q:
      case 59:
      case 0:
        switch (A) {
          case 0:
          case 125:
            ee = 0;
          case 59 + _:
            q == -1 && (C = D(C, /\f/g, "")), P > 0 && Ae(C) - S && Ct(P > 32 ? An(C + ";", i, n, S - 1, y) : An(D(C, " ", "") + ";", i, n, S - 2, y), y);
            break;
          case 59:
            C += ";";
          default:
            if (Ct(x = Pn(C, r, n, E, _, c, g, U, M = [], I = [], S, f), f), A === 123)
              if (_ === 0)
                er(C, r, x, x, M, f, S, g, I);
              else
                switch (k === 99 && pe(C, 3) === 110 ? 100 : k) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    er(e, x, x, i && Ct(Pn(e, x, x, 0, 0, c, g, U, c, M = [], S, I), I), c, I, S, g, i ? M : I);
                    break;
                  default:
                    er(C, x, x, x, [""], I, 0, g, I);
                }
        }
        E = _ = P = 0, Q = q = 1, U = C = "", S = h;
        break;
      case 58:
        S = 1 + Ae(C), P = W;
      default:
        if (Q < 1) {
          if (A == 123)
            --Q;
          else if (A == 125 && Q++ == 0 && ta() == 125)
            continue;
        }
        switch (C += Xr(A), A * Q) {
          case 38:
            q = _ > 0 ? 1 : (C += "\f", -1);
            break;
          case 44:
            g[E++] = (Ae(C) - 1) * q, q = 1;
            break;
          case 64:
            tt() === 45 && (C += Ir(Te())), k = tt(), _ = S = Ae(U = C += sa(Zt())), A++;
            break;
          case 45:
            W === 45 && Ae(C) == 2 && (Q = 0);
        }
    }
  return f;
}
function Pn(e, r, n, i, c, f, h, g, y, E, _, S) {
  for (var k = c - 1, P = c === 0 ? f : [""], W = Hn(P), Q = 0, ee = 0, q = 0; Q < i; ++Q)
    for (var A = 0, U = pt(e, k + 1, k = Jo(ee = h[Q])), M = e; A < W; ++A)
      (M = qn(ee > 0 ? P[A] + " " + U : D(U, /&\f/g, P[A]))) && (y[q++] = M);
  return cr(e, r, n, c === 0 ? ir : g, y, E, _, S);
}
function ua(e, r, n, i) {
  return cr(e, r, n, Bn, Xr(ea()), pt(e, 2, -2), 0, i);
}
function An(e, r, n, i, c) {
  return cr(e, r, n, Kr, pt(e, 0, i), pt(e, i + 1, -1), i, c);
}
function Xn(e, r, n) {
  switch (Qo(e, r)) {
    case 5103:
      return X + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return X + e + e;
    case 4789:
      return xt + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return X + e + xt + e + te + e + e;
    case 5936:
      switch (pe(e, r + 11)) {
        case 114:
          return X + e + te + D(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return X + e + te + D(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return X + e + te + D(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return X + e + te + e + e;
    case 6165:
      return X + e + te + "flex-" + e + e;
    case 5187:
      return X + e + D(e, /(\w+).+(:[^]+)/, X + "box-$1$2" + te + "flex-$1$2") + e;
    case 5443:
      return X + e + te + "flex-item-" + D(e, /flex-|-self/g, "") + (De(e, /flex-|baseline/) ? "" : te + "grid-row-" + D(e, /flex-|-self/g, "")) + e;
    case 4675:
      return X + e + te + "flex-line-pack" + D(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return X + e + te + D(e, "shrink", "negative") + e;
    case 5292:
      return X + e + te + D(e, "basis", "preferred-size") + e;
    case 6060:
      return X + "box-" + D(e, "-grow", "") + X + e + te + D(e, "grow", "positive") + e;
    case 4554:
      return X + D(e, /([^-])(transform)/g, "$1" + X + "$2") + e;
    case 6187:
      return D(D(D(e, /(zoom-|grab)/, X + "$1"), /(image-set)/, X + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return D(e, /(image-set\([^]*)/, X + "$1$`$1");
    case 4968:
      return D(D(e, /(.+:)(flex-)?(.*)/, X + "box-pack:$3" + te + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + X + e + e;
    case 4200:
      if (!De(e, /flex-|baseline/))
        return te + "grid-column-align" + pt(e, r) + e;
      break;
    case 2592:
    case 3360:
      return te + D(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n && n.some(function(i, c) {
        return r = c, De(i.props, /grid-\w+-end/);
      }) ? ~Qt(e + (n = n[r].value), "span") ? e : te + D(e, "-start", "") + e + te + "grid-row-span:" + (~Qt(n, "span") ? De(n, /\d+/) : +De(n, /\d+/) - +De(e, /\d+/)) + ";" : te + D(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n && n.some(function(i) {
        return De(i.props, /grid-\w+-start/);
      }) ? e : te + D(D(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return D(e, /(.+)-inline(.+)/, X + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Ae(e) - 1 - r > 6)
        switch (pe(e, r + 1)) {
          case 109:
            if (pe(e, r + 4) !== 45)
              break;
          case 102:
            return D(e, /(.+:)(.+)-([^]+)/, "$1" + X + "$2-$3$1" + xt + (pe(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Qt(e, "stretch") ? Xn(D(e, "stretch", "fill-available"), r, n) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return D(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(i, c, f, h, g, y, E) {
        return te + c + ":" + f + E + (h ? te + c + "-span:" + (g ? y : +y - +f) + E : "") + e;
      });
    case 4949:
      if (pe(e, r + 6) === 121)
        return D(e, ":", ":" + X) + e;
      break;
    case 6444:
      switch (pe(e, pe(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return D(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + X + (pe(e, 14) === 45 ? "inline-" : "") + "box$3$1" + X + "$2$3$1" + te + "$2box$3") + e;
        case 100:
          return D(e, ":", ":" + te) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return D(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function nr(e, r) {
  for (var n = "", i = 0; i < e.length; i++)
    n += r(e[i], i, e, r) || "";
  return n;
}
function la(e, r, n, i) {
  switch (e.type) {
    case Xo:
      if (e.children.length)
        break;
    case Ko:
    case Kr:
      return e.return = e.return || e.value;
    case Bn:
      return "";
    case Gn:
      return e.return = e.value + "{" + nr(e.children, i) + "}";
    case ir:
      if (!Ae(e.value = e.props.join(",")))
        return "";
  }
  return Ae(n = nr(e.children, i)) ? e.return = e.value + "{" + n + "}" : "";
}
function fa(e) {
  var r = Hn(e);
  return function(n, i, c, f) {
    for (var h = "", g = 0; g < r; g++)
      h += e[g](n, i, c, f) || "";
    return h;
  };
}
function da(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
function pa(e, r, n, i) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Kr:
        e.return = Xn(e.value, e.length, n);
        return;
      case Gn:
        return nr([ze(e, { value: D(e.value, "@", "@" + X) })], i);
      case ir:
        if (e.length)
          return Zo(n = e.props, function(c) {
            switch (De(c, i = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                dt(ze(e, { props: [D(c, /:(read-\w+)/, ":" + xt + "$1")] })), dt(ze(e, { props: [c] })), Lr(e, { props: Tn(n, i) });
                break;
              case "::placeholder":
                dt(ze(e, { props: [D(c, /:(plac\w+)/, ":" + X + "input-$1")] })), dt(ze(e, { props: [D(c, /:(plac\w+)/, ":" + xt + "$1")] })), dt(ze(e, { props: [D(c, /:(plac\w+)/, te + "input-$1")] })), dt(ze(e, { props: [c] })), Lr(e, { props: Tn(n, i) });
                break;
            }
            return "";
          });
    }
}
var ha = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, nt = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Jr = typeof window < "u" && "HTMLElement" in window, va = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), ya = {}, jn = /invalid hook call/i, Kt = /* @__PURE__ */ new Set(), Jn = function(e, r) {
  if (process.env.NODE_ENV !== "production") {
    var n = r ? ' with the id of "'.concat(r, '"') : "", i = "The component ".concat(e).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, c = console.error;
    try {
      var f = !0;
      console.error = function(h) {
        for (var g = [], y = 1; y < arguments.length; y++)
          g[y - 1] = arguments[y];
        jn.test(h) ? (f = !1, Kt.delete(i)) : c.apply(void 0, rt([h], g, !1));
      }, et.useRef(), f && !Kt.has(i) && (console.warn(i), Kt.add(i));
    } catch (h) {
      jn.test(h.message) && Kt.delete(i);
    } finally {
      console.error = c;
    }
  }
}, lr = Object.freeze([]), vt = Object.freeze({});
function Qn(e, r, n) {
  return n === void 0 && (n = vt), e.theme !== n.theme && e.theme || r || n.theme;
}
var zr = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), ma = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, ga = /(^-|-$)/g;
function In(e) {
  return e.replace(ma, "-").replace(ga, "");
}
var ba = /(a)(d)/gi, $n = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Wr(e) {
  var r, n = "";
  for (r = Math.abs(e); r > 52; r = r / 52 | 0)
    n = $n(r % 52) + n;
  return ($n(r % 52) + n).replace(ba, "$1-$2");
}
var $r, Qe = function(e, r) {
  for (var n = r.length; n; )
    e = 33 * e ^ r.charCodeAt(--n);
  return e;
}, Zn = function(e) {
  return Qe(5381, e);
};
function eo(e) {
  return Wr(Zn(e) >>> 0);
}
function to(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Dr(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var ro = typeof Symbol == "function" && Symbol.for, no = ro ? Symbol.for("react.memo") : 60115, wa = ro ? Symbol.for("react.forward_ref") : 60112, Ea = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, _a = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, oo = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Sa = (($r = {})[wa] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, $r[no] = oo, $r);
function Dn(e) {
  return ("type" in (r = e) && r.type.$$typeof) === no ? oo : "$$typeof" in e ? Sa[e.$$typeof] : Ea;
  var r;
}
var Ra = Object.defineProperty, Ca = Object.getOwnPropertyNames, Nn = Object.getOwnPropertySymbols, ka = Object.getOwnPropertyDescriptor, xa = Object.getPrototypeOf, Fn = Object.prototype;
function ao(e, r, n) {
  if (typeof r != "string") {
    if (Fn) {
      var i = xa(r);
      i && i !== Fn && ao(e, i, n);
    }
    var c = Ca(r);
    Nn && (c = c.concat(Nn(r)));
    for (var f = Dn(e), h = Dn(r), g = 0; g < c.length; ++g) {
      var y = c[g];
      if (!(y in _a || n && n[y] || h && y in h || f && y in f)) {
        var E = ka(r, y);
        try {
          Ra(e, y, E);
        } catch {
        }
      }
    }
  }
  return e;
}
function ot(e) {
  return typeof e == "function";
}
function Qr(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function Ze(e, r) {
  return e && r ? "".concat(e, " ").concat(r) : e || r || "";
}
function Yr(e, r) {
  if (e.length === 0)
    return "";
  for (var n = e[0], i = 1; i < e.length; i++)
    n += r ? r + e[i] : e[i];
  return n;
}
function yt(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Ur(e, r, n) {
  if (n === void 0 && (n = !1), !n && !yt(e) && !Array.isArray(e))
    return r;
  if (Array.isArray(r))
    for (var i = 0; i < r.length; i++)
      e[i] = Ur(e[i], r[i]);
  else if (yt(r))
    for (var i in r)
      e[i] = Ur(e[i], r[i]);
  return e;
}
function Zr(e, r) {
  Object.defineProperty(e, "toString", { value: r });
}
var Oa = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function Ta() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  for (var n = e[0], i = [], c = 1, f = e.length; c < f; c += 1)
    i.push(e[c]);
  return i.forEach(function(h) {
    n = n.replace(/%[a-z]/, h);
  }), n;
}
function Ne(e) {
  for (var r = [], n = 1; n < arguments.length; n++)
    r[n - 1] = arguments[n];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(r.length > 0 ? " Args: ".concat(r.join(", ")) : "")) : new Error(Ta.apply(void 0, rt([Oa[e]], r, !1)).trim());
}
var Pa = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  return e.prototype.indexOfGroup = function(r) {
    for (var n = 0, i = 0; i < r; i++)
      n += this.groupSizes[i];
    return n;
  }, e.prototype.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var i = this.groupSizes, c = i.length, f = c; r >= f; )
        if ((f <<= 1) < 0)
          throw Ne(16, "".concat(r));
      this.groupSizes = new Uint32Array(f), this.groupSizes.set(i), this.length = f;
      for (var h = c; h < f; h++)
        this.groupSizes[h] = 0;
    }
    for (var g = this.indexOfGroup(r + 1), y = (h = 0, n.length); h < y; h++)
      this.tag.insertRule(g, n[h]) && (this.groupSizes[r]++, g++);
  }, e.prototype.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], i = this.indexOfGroup(r), c = i + n;
      this.groupSizes[r] = 0;
      for (var f = i; f < c; f++)
        this.tag.deleteRule(i);
    }
  }, e.prototype.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0)
      return n;
    for (var i = this.groupSizes[r], c = this.indexOfGroup(r), f = c + i, h = c; h < f; h++)
      n += "".concat(this.tag.getRule(h)).concat(`/*!sc*/
`);
    return n;
  }, e;
}(), tr = /* @__PURE__ */ new Map(), or = /* @__PURE__ */ new Map(), rr = 1, Xt = function(e) {
  if (tr.has(e))
    return tr.get(e);
  for (; or.has(rr); )
    rr++;
  var r = rr++;
  if (process.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > 1073741824))
    throw Ne(16, "".concat(r));
  return tr.set(e, r), or.set(r, e), r;
}, Aa = function(e, r) {
  rr = r + 1, tr.set(e, r), or.set(r, e);
}, ja = "style[".concat(nt, "][").concat("data-styled-version", '="').concat("6.1.1", '"]'), Ia = new RegExp("^".concat(nt, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), $a = function(e, r, n) {
  for (var i, c = n.split(","), f = 0, h = c.length; f < h; f++)
    (i = c[f]) && e.registerName(r, i);
}, Da = function(e, r) {
  for (var n, i = ((n = r.textContent) !== null && n !== void 0 ? n : "").split(`/*!sc*/
`), c = [], f = 0, h = i.length; f < h; f++) {
    var g = i[f].trim();
    if (g) {
      var y = g.match(Ia);
      if (y) {
        var E = 0 | parseInt(y[1], 10), _ = y[2];
        E !== 0 && (Aa(_, E), $a(e, _, y[3]), e.getTag().insertRules(E, c)), c.length = 0;
      } else
        c.push(g);
    }
  }
};
function Na() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var io = function(e) {
  var r = document.head, n = e || r, i = document.createElement("style"), c = function(g) {
    var y = Array.from(g.querySelectorAll("style[".concat(nt, "]")));
    return y[y.length - 1];
  }(n), f = c !== void 0 ? c.nextSibling : null;
  i.setAttribute(nt, "active"), i.setAttribute("data-styled-version", "6.1.1");
  var h = Na();
  return h && i.setAttribute("nonce", h), n.insertBefore(i, f), i;
}, Fa = function() {
  function e(r) {
    this.element = io(r), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
      if (n.sheet)
        return n.sheet;
      for (var i = document.styleSheets, c = 0, f = i.length; c < f; c++) {
        var h = i[c];
        if (h.ownerNode === n)
          return h;
      }
      throw Ne(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(r, n) {
    try {
      return this.sheet.insertRule(n, r), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(r) {
    this.sheet.deleteRule(r), this.length--;
  }, e.prototype.getRule = function(r) {
    var n = this.sheet.cssRules[r];
    return n && n.cssText ? n.cssText : "";
  }, e;
}(), La = function() {
  function e(r) {
    this.element = io(r), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(r, n) {
    if (r <= this.length && r >= 0) {
      var i = document.createTextNode(n);
      return this.element.insertBefore(i, this.nodes[r] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, e.prototype.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), Ma = function() {
  function e(r) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(r, n) {
    return r <= this.length && (this.rules.splice(r, 0, n), this.length++, !0);
  }, e.prototype.deleteRule = function(r) {
    this.rules.splice(r, 1), this.length--;
  }, e.prototype.getRule = function(r) {
    return r < this.length ? this.rules[r] : "";
  }, e;
}(), Ln = Jr, Va = { isServer: !Jr, useCSSOMInjection: !va }, ar = function() {
  function e(r, n, i) {
    r === void 0 && (r = vt), n === void 0 && (n = {});
    var c = this;
    this.options = he(he({}, Va), r), this.gs = n, this.names = new Map(i), this.server = !!r.isServer, !this.server && Jr && Ln && (Ln = !1, function(f) {
      for (var h = document.querySelectorAll(ja), g = 0, y = h.length; g < y; g++) {
        var E = h[g];
        E && E.getAttribute(nt) !== "active" && (Da(f, E), E.parentNode && E.parentNode.removeChild(E));
      }
    }(this)), Zr(this, function() {
      return function(f) {
        for (var h = f.getTag(), g = h.length, y = "", E = function(S) {
          var k = function(q) {
            return or.get(q);
          }(S);
          if (k === void 0)
            return "continue";
          var P = f.names.get(k), W = h.getGroup(S);
          if (P === void 0 || W.length === 0)
            return "continue";
          var Q = "".concat(nt, ".g").concat(S, '[id="').concat(k, '"]'), ee = "";
          P !== void 0 && P.forEach(function(q) {
            q.length > 0 && (ee += "".concat(q, ","));
          }), y += "".concat(W).concat(Q, '{content:"').concat(ee, '"}').concat(`/*!sc*/
`);
        }, _ = 0; _ < g; _++)
          E(_);
        return y;
      }(c);
    });
  }
  return e.registerId = function(r) {
    return Xt(r);
  }, e.prototype.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(he(he({}, this.options), r), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (r = function(n) {
      var i = n.useCSSOMInjection, c = n.target;
      return n.isServer ? new Ma(c) : i ? new Fa(c) : new La(c);
    }(this.options), new Pa(r)));
    var r;
  }, e.prototype.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, e.prototype.registerName = function(r, n) {
    if (Xt(r), this.names.has(r))
      this.names.get(r).add(n);
    else {
      var i = /* @__PURE__ */ new Set();
      i.add(n), this.names.set(r, i);
    }
  }, e.prototype.insertRules = function(r, n, i) {
    this.registerName(r, n), this.getTag().insertRules(Xt(r), i);
  }, e.prototype.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, e.prototype.clearRules = function(r) {
    this.getTag().clearGroup(Xt(r)), this.clearNames(r);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), za = /&/g, Wa = /^\s*\/\/.*$/gm;
function so(e, r) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(r, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(r, " ")), n.props = n.props.map(function(i) {
      return "".concat(r, " ").concat(i);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = so(n.children, r)), n;
  });
}
function Ya(e) {
  var r, n, i, c = e === void 0 ? vt : e, f = c.options, h = f === void 0 ? vt : f, g = c.plugins, y = g === void 0 ? lr : g, E = function(k, P, W) {
    return W === n || W.startsWith(n) && W.endsWith(n) && W.replaceAll(n, "").length > 0 ? ".".concat(r) : k;
  }, _ = y.slice();
  _.push(function(k) {
    k.type === ir && k.value.includes("&") && (k.props[0] = k.props[0].replace(za, n).replace(i, E));
  }), h.prefix && _.push(pa), _.push(la);
  var S = function(k, P, W, Q) {
    P === void 0 && (P = ""), W === void 0 && (W = ""), Q === void 0 && (Q = "&"), r = Q, n = P, i = new RegExp("\\".concat(n, "\\b"), "g");
    var ee = k.replace(Wa, ""), q = ca(W || P ? "".concat(W, " ").concat(P, " { ").concat(ee, " }") : ee);
    h.namespace && (q = so(q, h.namespace));
    var A = [];
    return nr(q, fa(_.concat(da(function(U) {
      return A.push(U);
    })))), A;
  };
  return S.hash = y.length ? y.reduce(function(k, P) {
    return P.name || Ne(15), Qe(k, P.name);
  }, 5381).toString() : "", S;
}
var Ua = new ar(), Br = Ya(), co = ke.createContext({ shouldForwardProp: void 0, styleSheet: Ua, stylis: Br });
co.Consumer;
ke.createContext(void 0);
function Gr() {
  return et.useContext(co);
}
var Mn = function() {
  function e(r, n) {
    var i = this;
    this.inject = function(c, f) {
      f === void 0 && (f = Br);
      var h = i.name + f.hash;
      c.hasNameForId(i.id, h) || c.insertRules(i.id, h, f(i.rules, h, "@keyframes"));
    }, this.name = r, this.id = "sc-keyframes-".concat(r), this.rules = n, Zr(this, function() {
      throw Ne(12, String(i.name));
    });
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = Br), this.name + r.hash;
  }, e;
}(), Ba = function(e) {
  return e >= "A" && e <= "Z";
};
function Vn(e) {
  for (var r = "", n = 0; n < e.length; n++) {
    var i = e[n];
    if (n === 1 && i === "-" && e[0] === "-")
      return e;
    Ba(i) ? r += "-" + i.toLowerCase() : r += i;
  }
  return r.startsWith("ms-") ? "-" + r : r;
}
var uo = function(e) {
  return e == null || e === !1 || e === "";
}, lo = function(e) {
  var r, n, i = [];
  for (var c in e) {
    var f = e[c];
    e.hasOwnProperty(c) && !uo(f) && (Array.isArray(f) && f.isCss || ot(f) ? i.push("".concat(Vn(c), ":"), f, ";") : yt(f) ? i.push.apply(i, rt(rt(["".concat(c, " {")], lo(f), !1), ["}"], !1)) : i.push("".concat(Vn(c), ": ").concat((r = c, (n = f) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || r in ha || r.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return i;
};
function We(e, r, n, i) {
  if (uo(e))
    return [];
  if (Qr(e))
    return [".".concat(e.styledComponentId)];
  if (ot(e)) {
    if (!ot(f = e) || f.prototype && f.prototype.isReactComponent || !r)
      return [e];
    var c = e(r);
    return process.env.NODE_ENV === "production" || typeof c != "object" || Array.isArray(c) || c instanceof Mn || yt(c) || c === null || console.error("".concat(to(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), We(c, r, n, i);
  }
  var f;
  return e instanceof Mn ? n ? (e.inject(n, i), [e.getName(i)]) : [e] : yt(e) ? lo(e) : Array.isArray(e) ? Array.prototype.concat.apply(lr, e.map(function(h) {
    return We(h, r, n, i);
  })) : [e.toString()];
}
function fo(e) {
  for (var r = 0; r < e.length; r += 1) {
    var n = e[r];
    if (ot(n) && !Qr(n))
      return !1;
  }
  return !0;
}
var Ga = Zn("6.1.1"), qa = function() {
  function e(r, n, i) {
    this.rules = r, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (i === void 0 || i.isStatic) && fo(r), this.componentId = n, this.baseHash = Qe(Ga, n), this.baseStyle = i, ar.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(r, n, i) {
    var c = this.baseStyle ? this.baseStyle.generateAndInjectStyles(r, n, i) : "";
    if (this.isStatic && !i.hash)
      if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId))
        c = Ze(c, this.staticRulesId);
      else {
        var f = Yr(We(this.rules, r, n, i)), h = Wr(Qe(this.baseHash, f) >>> 0);
        if (!n.hasNameForId(this.componentId, h)) {
          var g = i(f, ".".concat(h), void 0, this.componentId);
          n.insertRules(this.componentId, h, g);
        }
        c = Ze(c, h), this.staticRulesId = h;
      }
    else {
      for (var y = Qe(this.baseHash, i.hash), E = "", _ = 0; _ < this.rules.length; _++) {
        var S = this.rules[_];
        if (typeof S == "string")
          E += S, process.env.NODE_ENV !== "production" && (y = Qe(y, S));
        else if (S) {
          var k = Yr(We(S, r, n, i));
          y = Qe(y, k + _), E += k;
        }
      }
      if (E) {
        var P = Wr(y >>> 0);
        n.hasNameForId(this.componentId, P) || n.insertRules(this.componentId, P, i(E, ".".concat(P), void 0, this.componentId)), c = Ze(c, P);
      }
    }
    return c;
  }, e;
}(), Ot = ke.createContext(void 0);
Ot.Consumer;
function Ha(e) {
  var r = ke.useContext(Ot), n = et.useMemo(function() {
    return function(i, c) {
      if (!i)
        throw Ne(14);
      if (ot(i)) {
        var f = i(c);
        if (process.env.NODE_ENV !== "production" && (f === null || Array.isArray(f) || typeof f != "object"))
          throw Ne(7);
        return f;
      }
      if (Array.isArray(i) || typeof i != "object")
        throw Ne(8);
      return c ? he(he({}, c), i) : i;
    }(e.theme, r);
  }, [e.theme, r]);
  return e.children ? ke.createElement(Ot.Provider, { value: n }, e.children) : null;
}
var Nr = {}, zn = /* @__PURE__ */ new Set();
function Ka(e, r, n) {
  var i = Qr(e), c = e, f = !Dr(e), h = r.attrs, g = h === void 0 ? lr : h, y = r.componentId, E = y === void 0 ? function(M, I) {
    var x = typeof M != "string" ? "sc" : In(M);
    Nr[x] = (Nr[x] || 0) + 1;
    var C = "".concat(x, "-").concat(eo("6.1.1" + x + Nr[x]));
    return I ? "".concat(I, "-").concat(C) : C;
  }(r.displayName, r.parentComponentId) : y, _ = r.displayName, S = _ === void 0 ? function(M) {
    return Dr(M) ? "styled.".concat(M) : "Styled(".concat(to(M), ")");
  }(e) : _, k = r.displayName && r.componentId ? "".concat(In(r.displayName), "-").concat(r.componentId) : r.componentId || E, P = i && c.attrs ? c.attrs.concat(g).filter(Boolean) : g, W = r.shouldForwardProp;
  if (i && c.shouldForwardProp) {
    var Q = c.shouldForwardProp;
    if (r.shouldForwardProp) {
      var ee = r.shouldForwardProp;
      W = function(M, I) {
        return Q(M, I) && ee(M, I);
      };
    } else
      W = Q;
  }
  var q = new qa(n, k, i ? c.componentStyle : void 0);
  function A(M, I) {
    return function(x, C, ve) {
      var we = x.attrs, je = x.componentStyle, Ye = x.defaultProps, Ie = x.foldedComponentIds, de = x.styledComponentId, ge = x.target, le = ke.useContext(Ot), _e = Gr(), R = x.shouldForwardProp || _e.shouldForwardProp;
      process.env.NODE_ENV !== "production" && et.useDebugValue(de);
      var fe = function($, H, K) {
        for (var Y, F = he(he({}, H), { className: void 0, theme: K }), oe = 0; oe < $.length; oe += 1) {
          var Re = ot(Y = $[oe]) ? Y(F) : Y;
          for (var Ce in Re)
            F[Ce] = Ce === "className" ? Ze(F[Ce], Re[Ce]) : Ce === "style" ? he(he({}, F[Ce]), Re[Ce]) : Re[Ce];
        }
        return H.className && (F.className = Ze(F.className, H.className)), F;
      }(we, C, Qn(C, le, Ye) || vt), Se = fe.as || ge, s = {};
      for (var p in fe)
        fe[p] === void 0 || p[0] === "$" || p === "as" || p === "theme" || (p === "forwardedAs" ? s.as = fe.forwardedAs : R && !R(p, Se) || (s[p] = fe[p], R || process.env.NODE_ENV !== "development" || Ho(p) || zn.has(p) || !zr.has(Se) || (zn.add(p), console.warn('styled-components: it looks like an unknown prop "'.concat(p, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var T = function($, H) {
        var K = Gr(), Y = $.generateAndInjectStyles(H, K.styleSheet, K.stylis);
        return process.env.NODE_ENV !== "production" && et.useDebugValue(Y), Y;
      }(je, fe);
      process.env.NODE_ENV !== "production" && x.warnTooManyClasses && x.warnTooManyClasses(T);
      var V = Ze(Ie, de);
      return T && (V += " " + T), fe.className && (V += " " + fe.className), s[Dr(Se) && !zr.has(Se) ? "class" : "className"] = V, s.ref = ve, et.createElement(Se, s);
    }(U, M, I);
  }
  A.displayName = S;
  var U = ke.forwardRef(A);
  return U.attrs = P, U.componentStyle = q, U.displayName = S, U.shouldForwardProp = W, U.foldedComponentIds = i ? Ze(c.foldedComponentIds, c.styledComponentId) : "", U.styledComponentId = k, U.target = i ? c.target : e, Object.defineProperty(U, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(M) {
    this._foldedDefaultProps = i ? function(I) {
      for (var x = [], C = 1; C < arguments.length; C++)
        x[C - 1] = arguments[C];
      for (var ve = 0, we = x; ve < we.length; ve++)
        Ur(I, we[ve], !0);
      return I;
    }({}, c.defaultProps, M) : M;
  } }), process.env.NODE_ENV !== "production" && (Jn(S, k), U.warnTooManyClasses = /* @__PURE__ */ function(M, I) {
    var x = {}, C = !1;
    return function(ve) {
      if (!C && (x[ve] = !0, Object.keys(x).length >= 200)) {
        var we = I ? ' with the id of "'.concat(I, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(M).concat(we, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), C = !0, x = {};
      }
    };
  }(S, k)), Zr(U, function() {
    return ".".concat(U.styledComponentId);
  }), f && ao(U, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), U;
}
function Wn(e, r) {
  for (var n = [e[0]], i = 0, c = r.length; i < c; i += 1)
    n.push(r[i], e[i + 1]);
  return n;
}
var Yn = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function fr(e) {
  for (var r = [], n = 1; n < arguments.length; n++)
    r[n - 1] = arguments[n];
  if (ot(e) || yt(e)) {
    var i = e;
    return Yn(We(Wn(lr, rt([i], r, !0))));
  }
  var c = e;
  return r.length === 0 && c.length === 1 && typeof c[0] == "string" ? We(c) : Yn(We(Wn(c, r)));
}
function qr(e, r, n) {
  if (n === void 0 && (n = vt), !r)
    throw Ne(1, r);
  var i = function(c) {
    for (var f = [], h = 1; h < arguments.length; h++)
      f[h - 1] = arguments[h];
    return e(r, n, fr.apply(void 0, rt([c], f, !1)));
  };
  return i.attrs = function(c) {
    return qr(e, r, he(he({}, n), { attrs: Array.prototype.concat(n.attrs, c).filter(Boolean) }));
  }, i.withConfig = function(c) {
    return qr(e, r, he(he({}, n), c));
  }, i;
}
var po = function(e) {
  return qr(Ka, e);
}, be = po;
zr.forEach(function(e) {
  be[e] = po(e);
});
var Xa = function() {
  function e(r, n) {
    this.rules = r, this.componentId = n, this.isStatic = fo(r), ar.registerId(this.componentId + 1);
  }
  return e.prototype.createStyles = function(r, n, i, c) {
    var f = c(Yr(We(this.rules, n, i, c)), ""), h = this.componentId + r;
    i.insertRules(h, h, f);
  }, e.prototype.removeStyles = function(r, n) {
    n.clearRules(this.componentId + r);
  }, e.prototype.renderStyles = function(r, n, i, c) {
    r > 2 && ar.registerId(this.componentId + r), this.removeStyles(r, i), this.createStyles(r, n, i, c);
  }, e;
}();
function Ja(e) {
  for (var r = [], n = 1; n < arguments.length; n++)
    r[n - 1] = arguments[n];
  var i = fr.apply(void 0, rt([e], r, !1)), c = "sc-global-".concat(eo(JSON.stringify(i))), f = new Xa(i, c);
  process.env.NODE_ENV !== "production" && Jn(c);
  var h = function(y) {
    var E = Gr(), _ = ke.useContext(Ot), S = ke.useRef(E.styleSheet.allocateGSInstance(c)).current;
    return process.env.NODE_ENV !== "production" && ke.Children.count(y.children) && console.warn("The global style component ".concat(c, " was given child JSX. createGlobalStyle does not render children.")), process.env.NODE_ENV !== "production" && i.some(function(k) {
      return typeof k == "string" && k.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), E.styleSheet.server && g(S, y, E.styleSheet, _, E.stylis), ke.useLayoutEffect(function() {
      if (!E.styleSheet.server)
        return g(S, y, E.styleSheet, _, E.stylis), function() {
          return f.removeStyles(S, E.styleSheet);
        };
    }, [S, y, E.styleSheet, _, E.stylis]), null;
  };
  function g(y, E, _, S, k) {
    if (f.isStatic)
      f.renderStyles(y, ya, _, k);
    else {
      var P = he(he({}, E), { theme: Qn(E, S, h.defaultProps) });
      f.renderStyles(y, P, _, k);
    }
  }
  return ke.memo(h);
}
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Jt = "__sc-".concat(nt, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Jt] || (window[Jt] = 0), window[Jt] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Jt] += 1);
const Qa = be.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  .message {
    width: 100%;
    font-size: 0.75em;
    color: ${({ theme: e }) => e.palette.error};
    text-align: right;
  }
`, Za = Ja`
  
    :root {
    --x: 0px;
    --y: 0px;
    }    

    body{
        overflow-x: hidden;
        color: ${({ theme: e }) => e.palette.black[900]};
        font-family: 'Space grotesk', sans-serif;
    }
    a {
        color: ${({ theme: e }) => e.palette.violet};
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: inherit;
    }

    button{
        background-color: initial;
        border: initial;
        outline: initial;
        cursor: pointer;
    }

    /* Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }

    *::-webkit-scrollbar-track {
        background: ${({ theme: e }) => e.palette.white};
        border-radius: 5px;
    }

    *::-webkit-scrollbar-thumb {
        background-color:${({ theme: e }) => e.palette.black[200]};
        border-radius: 5px;
        border: 0px none ${({ theme: e }) => e.palette.white};
    }

    /* Firefox */
    *::-moz-scrollbar {
        width: 10px;
        height: 10px;
    }

    *::-moz-scrollbar-track {
        background-color:${({ theme: e }) => e.palette.black[200]};
        border-radius: 5px;
        border: 0px none ${({ theme: e }) => e.palette.white};
    }

    *::-moz-scrollbar-thumb {
        background-color:${({ theme: e }) => e.palette.black[200]};
        border-radius: 5px;
        border: 0px none ${({ theme: e }) => e.palette.white};
    }
`, ei = {
  palette: {
    white: "#ffffff",
    black: {
      50: "#F3F2F6",
      100: "#EEEDF1",
      200: "#E5E5EA",
      300: "#B7B6BD",
      400: "#9B9AA0",
      500: "#6F737A",
      600: "#585664",
      700: "#464451",
      800: "#282733",
      900: "#050214"
    },
    lightYellow: "#FAD935",
    yellow: "#FCEB3C",
    darkYellow: "#F7A924",
    violet: "#6672FA",
    darkViolet: "#3B41DD",
    lightViolet: "#CCCEFD",
    extraLightViolet: "#EBECFF",
    navy: "#292152",
    success: "#00B005",
    fadedSuccess: "#58D46B",
    error: "#FF0B18",
    fadedError: "#ffedef",
    warning: "#FF8E00",
    fadedWarning: "#fff2de"
  },
  sizes: {
    smallMobile: "max-width:420px",
    mobile: "min-width:421px",
    tablet: "min-width:501px",
    laptop: "min-width: 900px",
    desktop: "min-width:1300px"
  },
  maxWidth: "500px",
  pagePadding: "16px"
};
be.h1`
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  margin: 0;
`;
be.h2`
  font-weight: 700;
  font-size: 30px;
  line-height: 32px;
  margin: 0;
`;
be.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  margin: 0;
`;
be.h4`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  margin: 0;
`;
be.h4`
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  margin: 0;
`;
be.h5`
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  margin: 0;
`;
be.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
`;
be.h4`
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: -0.5px;
  margin: 0;
`;
be.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
`;
be.span`
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
`;
be.span`
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  text-decoration: underline;
`;
be.div`
  font-size: 43px;
  font-weight: 400;
  line-height: 43px;
  letter-spacing: 0.5px;
  text-align: left;
`;
fr`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  line-height: 18px;
  font-size: 18px;
  padding: 19px 24px;
  text-align: center;
  font-family: inherit;
  border-radius: 28px;
  min-height: 56px;
  width: auto;
  max-height: 56px;
  max-width: ${({ theme: e }) => `calc(${e.maxWidth} - 2 * ${e.pagePadding})`};

  &.fixed {
    position: fixed;
    width: ${({ theme: e }) => `calc(100% - 2 * ${e.pagePadding})`};
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
  }

  &.small {
    height: 36px;
    max-height: 36px;
    min-height: 36px;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: -0.5px;
  }

  &.primary {
    background-color: ${({ theme: e }) => e.palette.violet};
    color: ${({ theme: e }) => e.palette.white};

    &:disabled {
      background-color: ${({ theme: e }) => e.palette.black[200]};
      color: ${({ theme: e }) => e.palette.black[500]};
      cursor: not-allowed;
    }
  }

  &.dark {
    background-color: ${({ theme: e }) => e.palette.darkViolet};
    color: ${({ theme: e }) => e.palette.white};
    &:disabled {
      background-color: ${({ theme: e }) => e.palette.black[200]};
      color: ${({ theme: e }) => e.palette.black[500]};
      cursor: not-allowed;
    }
  }

  &.secondary {
    background-color: transparent;
    color: ${({ theme: e }) => e.palette.violet};
    &:disabled {
      color: ${({ theme: e }) => e.palette.black[500]};
      cursor: not-allowed;
    }
  }

  &.ghost {
    background-color: ${({ theme: e }) => e.palette.white};
    color: ${({ theme: e }) => e.palette.violet};
    box-shadow: 0 0 0 1.5px ${({ theme: e }) => e.palette.violet};

    &:disabled {
      box-shadow: 0 0 0 1.5px ${({ theme: e }) => e.palette.black[200]};
      color: ${({ theme: e }) => e.palette.black[500]};
      cursor: not-allowed;
    }
  }

  &.fullwidth {
    width: 100%;
  }
`;
fr`
  outline: none;
  height: 40px;
  cursor: pointer;
  border: 0;
  padding: 13px 16px;
  font: inherit;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: -0.5px;
  border-radius: 8px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  &.small {
    padding: 9px 16px;
    height: 32px;
  }
  &.primary {
    color: ${({ theme: e }) => e.palette.white};
    background-color: ${({ theme: e }) => e.palette.violet};
  }
  &.ghost {
    &:hover {
      box-shadow: none;
    }
  }
  &.secondary {
    color: ${({ theme: e }) => e.palette.darkViolet};
    background: ${({ theme: e }) => e.palette.lightViolet};
  }
  &.tertiary {
    background: ${({ theme: e }) => e.palette.black[50]};
    color: ${({ theme: e }) => e.palette.darkViolet};
  }
  &.fullWidth {
    width: 100%;
  }
  &:hover:not(:disabled) {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  }
  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme: e }) => e.palette.black[50]};
    color: ${({ theme: e }) => e.palette.black[300]};
  }
`;
const ti = be.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 100px;
  min-height: 100vh;
  .row {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 1rem;
  }
  .header {
    text-decoration: underline;
  }
`, ri = ({ children: e }) => /* @__PURE__ */ Bo(Ha, { theme: ei, children: [
  /* @__PURE__ */ kt(Za, {}),
  /* @__PURE__ */ kt(ti, { children: e })
] }), ni = ({ children: e }) => /* @__PURE__ */ kt(ri, { children: /* @__PURE__ */ kt(Qa, { children: /* @__PURE__ */ kt("p", { className: "message", children: e }) }) });
export {
  ni as Error
};
