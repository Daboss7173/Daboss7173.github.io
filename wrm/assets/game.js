"use strict";
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
		return typeof t
	} : function(t) {
		return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
	},
	GoogleAuth;
! function() {
	try {
		console.log(function(t, e) {
			for (var i = 0; i < e.length; i += 2) t = t.replaceAll(e[i], e[i + 1]);
			return t
		}("N-syo.632.oyhs`2./oSo+-2:dhydMdy/32/o+`3:o/62`/o+. .+osYYyso+-.osyQSs6662NyW.63 yW:`+QQ+ -Ms-.:ymmy3+Yo``+Y:6.Qs-+WWhYs:sHhyyHys/6662NoWs63 yW:+Ss:.-+Ss:`M-3.M` .YyySYys32`QSs.2``-Hh-32sH-66 `..3 `..`3N.Wh.63yW-Ss.3`Ss+`Mh/:+hmmo2/yy++yys//Y-3 oS/`Sso`3 ohy6oH.3..6 -Hh. -+Qs/ N /W+62`Wo:Ss32Sso.MMmd+.3syy` .-` :Y+3+Ss//Q+3 +H`32sHhsyHho6-Hh`:S+--+S+N2+W` `+y+2+W.:Ss.3.Ss+/M-:ymmh.2-Y.32+Ys2+Ss+o+/Q-3oH/32Hho-://:`6 Hh`So3`SsN3oHhs-sHhsoW/ `Sso:-:Q.hM-2ymmh. /Yo`3 sYy./Q`3+Sso2`W`3`Hh.66`Hh:So3-SoN3 +Why+yWh/3-oQSso-`Mm:2/Md+/Yy+3 oYy:Q/3 `Q. -W-3`WsYys/`+oo.:Hh//So//Ss-N32-sys:3:S+.6-/+++:-3oHo3 ohdh/`+So:3 .+S/`/oo:6.+s+` `+yyo`3 +yQYs: +oo..shy. -+oSo/. NN", ["W", "hhhh", "Q", "ssss", "M", "mmm", "Y", "yyy", "H", "hh", "S", "ss", "6", "      ", "3", "   ", "2", "  ", "N", "\n"]))
	} catch (t) {}
}(), window.addEventListener("load", function() {
	function isBrowserCompatible() {
		return function(t, e, i) {
			function o(t, e) {
				return (void 0 === t ? "undefined" : _typeof(t)) === e
			}

			function n() {
				return "function" != typeof e.createElement ? e.createElement(arguments[0]) : u ? e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0]) : e.createElement.apply(e, arguments)
			}
			var r = [],
				s = [],
				a = {
					_version: "3.3.1",
					_config: {
						classPrefix: "",
						enableClasses: !0,
						enableJSClass: !0,
						usePrefixes: !0
					},
					_q: [],
					on: function(t, e) {
						var i = this;
						setTimeout(function() {
							e(i[t])
						}, 0)
					},
					addTest: function(t, e, i) {
						s.push({
							name: t,
							fn: e,
							options: i
						})
					},
					addAsyncTest: function(t) {
						s.push({
							name: null,
							fn: t
						})
					}
				},
				h = function() {};
			h.prototype = a, h = new h;
			var l = !1;
			try {
				l = "WebSocket" in t && 2 === t.WebSocket.CLOSING
			} catch (t) {}
			h.addTest("websockets", l);
			var p = e.documentElement,
				u = "svg" === p.nodeName.toLowerCase();
			h.addTest("canvas", function() {
					var t = n("canvas");
					return !(!t.getContext || !t.getContext("2d"))
				}), h.addTest("canvastext", function() {
					return !1 !== h.canvas && "function" == typeof n("canvas").getContext("2d").fillText
				}),
				function() {
					var t, e, i, n, a, l, p;
					for (var u in s)
						if (s.hasOwnProperty(u)) {
							if (t = [], e = s[u], e.name && (t.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length))
								for (i = 0; i < e.options.aliases.length; i++) t.push(e.options.aliases[i].toLowerCase());
							for (n = o(e.fn, "function") ? e.fn() : e.fn, a = 0; a < t.length; a++) l = t[a], p = l.split("."), 1 === p.length ? h[p[0]] = n : (!h[p[0]] || h[p[0]] instanceof Boolean || (h[p[0]] = new Boolean(h[p[0]])), h[p[0]][p[1]] = n), r.push((n ? "" : "no-") + p.join("-"))
						}
				}(),
				function(t) {
					var e = p.className,
						i = h._config.classPrefix || "";
					if (u && (e = e.baseVal), h._config.enableJSClass) {
						var o = new RegExp("(^|\\s)" + i + "no-js(\\s|$)");
						e = e.replace(o, "$1" + i + "js$2")
					}
					h._config.enableClasses && (e += " " + i + t.join(" " + i), u ? p.className.baseVal = e : p.className = e)
				}(r), delete a.addTest, delete a.addAsyncTest;
			for (var c = 0; c < h._q.length; c++) h._q[c]();
			t.Modernizr = h
		}(window, document), Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext
	}
	if (document.getElementById("game-wrap").style.display = "block", !isBrowserCompatible()) return void(document.getElementById("error-view").style.display = "block");
	! function() {
		function getApp() {
			return _anApp
		}

		function i18n(t) {
			return window.I18N_MESSAGES[t]
		}

		function i18nCustomBundle(t) {
			return t[LANG] ? t[LANG] : t.en ? t.en : t.x
		}

		function timeSecsToIntervalText(t) {
			var e = (Math.floor(t) % 60).toString(),
				i = (Math.floor(t / 60) % 60).toString(),
				o = (Math.floor(t / 3600) % 24).toString(),
				n = Math.floor(t / 86400).toString(),
				r = i18n("util.time.days"),
				s = i18n("util.time.hours"),
				a = i18n("util.time.min"),
				h = i18n("util.time.sec");
			return n > 0 ? n + " " + r + " " + o + " " + s + " " + i + " " + a + " " + e + " " + h : o > 0 ? o + " " + s + " " + i + " " + a + " " + e + " " + h : i > 0 ? i + " " + a + " " + e + " " + h : e + " " + h
		}

		function convertI18nStringToHTML(t) {
			return t.includes("href") ? t.replaceAll("href", 'target="_black" href') : t
		}

		function loadScript(t, e, i) {
			var o = document.createElement("script"),
				n = !0;
			e && (o.id = e), o.async = "async", o.type = "text/javascript", o.src = t, i && (o.onload = o.onreadystatechange = function() {
				n = !1;
				try {
					i()
				} catch (t) {
					console.log(t)
				}
				o.onload = o.onreadystatechange = null
			}), (document.head || document.getElementsByTagName("head")[0]).appendChild(o)
		}

		function extend(t, e) {
			var i = e;
			return i.prototype = Object.create(t.prototype), i.prototype.constructor = i, i.parent = t, i
		}

		function normDir(t) {
			return t %= _2PI, t < 0 ? t + _2PI : t
		}

		function minmax(t, e, i) {
			return clamp(i, t, e)
		}

		function clamp(t, e, i) {
			return t > i ? i : t < e ? e : Number.isFinite(t) ? t : .5 * (e + i)
		}

		function timeDeltaIncrement(t, e, i, o) {
			return e > t ? Math.min(e, t + i * o) : Math.max(e, t - i * o)
		}

		function linearApproach(t, e, i, o, n) {
			return e + (t - e) * Math.pow(1 - o, i / n)
		}

		function lerp(t, e, i) {
			return t * (1 - i) + e * i
		}

		function arraycopy(t, e, i, o) {
			var n = i,
				r = e,
				s = e + o;
			if (null == t) throw new TypeError("this is null or not defined");
			var a = t.length >>> 0,
				h = n >> 0,
				l = h < 0 ? Math.max(a + h, 0) : Math.min(h, a),
				p = r >> 0,
				u = p < 0 ? Math.max(a + p, 0) : Math.min(p, a),
				c = void 0 === s ? a : s >> 0,
				f = c < 0 ? Math.max(a + c, 0) : Math.min(c, a),
				d = Math.min(f - u, a - l),
				g = 1;
			for (u < l && l < u + d && (g = -1, u += d - 1, l += d - 1); d > 0;) u in t ? t[l] = t[u] : delete t[l], u += g, l += g, d--;
			return t
		}

		function init2DContext(t) {
			return t.getContext("2d")
		}

		function pixijs_removeFromParent(t) {
			null != t.parent && t.parent.removeChild(t)
		}

		function any(t) {
			return t[parseInt(Math.random() * t.length)]
		}

		function randStr() {
			return Math.random().toString(36).substring(2, 15)
		}

		function convertHSLtoRGB(t, e, i) {
			var o = (1 - Math.abs(2 * i - 1)) * e,
				n = o * (1 - Math.abs(t / 60 % 2 - 1)),
				r = i - o / 2;
			return 0 <= t && t < 60 ? [r + o, r + n, r + 0] : 60 <= t && t < 120 ? [r + n, r + o, r + 0] : 120 <= t && t < 180 ? [r + 0, r + o, r + n] : 180 <= t && t < 240 ? [r + 0, r + n, r + o] : 240 <= t && t < 300 ? [r + n, r + 0, r + o] : [r + o, r + 0, r + n]
		}

		function ADINPLAY_PREROLL_PLAYER() {
			function t() {
				$("#adbl-1").text(i18n("index.game.antiadblocker.msg1")), $("#adbl-2").text(i18n("index.game.antiadblocker.msg2")), $("#adbl-3").text(i18n("index.game.antiadblocker.msg3")), $("#adbl-4").text(i18n("index.game.antiadblocker.msg4").replace("{0}", 10)), $("#adbl-continue span").text(i18n("index.game.antiadblocker.continue")), $("#adbl-continue").hide(), $("#" + n).fadeIn(500);
				for (var t = 10, e = 0; e < 10; e++) setTimeout(function() {
					if (t--, $("#adbl-4").text(i18n("index.game.antiadblocker.msg4").replace("{0}", t)), 0 === t) {
						console.log("aipAABC");
						try {
							ga("send", "event", "antiadblocker", window.runtimeHash + "_complete")
						} catch (t) {}
						$("#adbl-continue").fadeIn(200)
					}
				}, 1e3 * (e + 1))
			}
			var e = !1,
				i = function() {},
				o = {},
				n = "JDHnkHtYwyXyVgG9";
			return $("#adbl-continue").click(function() {
				$("#" + n).fadeOut(500), i(!1)
			}), o.a = function(t) {
				if (i = t, !e) try {
					aiptag.cmd.player.push(function() {
						aiptag.adplayer = new aipPlayer({
							AD_WIDTH: 960,
							AD_HEIGHT: 540,
							AD_FULLSCREEN: !0,
							AD_CENTERPLAYER: !1,
							LOADING_TEXT: "loading advertisement",
							PREROLL_ELEM: function() {
								return document.getElementById("1eaom01c3pxu9wd3")
							},
							AIP_COMPLETE: function(t) {
								console.log("aipC"), i(!0), $("#1eaom01c3pxu9wd3").hide(), $("#" + n).hide();
								try {
									ga("send", "event", "preroll", window.runtimeHash + "_complete")
								} catch (t) {}
							},
							AIP_REMOVE: function() {}
						})
					}), e = !0
				} catch (t) {}
			}, o.b = function() {
				if (void 0 !== aiptag.adplayer) {
					console.log("aipS");
					try {
						ga("send", "event", "preroll", window.runtimeHash + "_request")
					} catch (t) {}
					$("#1eaom01c3pxu9wd3").show(), aiptag.cmd.player.push(function() {
						aiptag.adplayer.startPreRoll()
					})
				} else {
					console.log("aipAABS");
					try {
						ga("send", "event", "antiadblocker", window.runtimeHash + "_start")
					} catch (t) {}
					t()
				}
			}, o
		}

		function ADINPLAY_BANNER(t, e) {
			var i = $("#" + t),
				o = e,
				n = {},
				r = !1;
			return n.a = function() {
				if (!r) {
					i.empty(), i.append("<div id='" + o + "'></div>");
					try {
						try {
							ga("send", "event", "banner", window.runtimeHash + "_display")
						} catch (t) {}
						aiptag.cmd.display.push(function() {
							aipDisplayTag.display(o)
						}), r = !0
					} catch (t) {}
				}
			}, n.c = function() {
				try {
					try {
						ga("send", "event", "banner", window.runtimeHash + "_refresh")
					} catch (t) {}
					aiptag.cmd.display.push(function() {
						aipDisplayTag.display(o)
					})
				} catch (t) {}
			}, n
		}

		function Application() {
			function t(t) {
				var e = t + 37 * Math.floor(65535 * Math.random());
				setCookie(Cookies.d, e, 30)
			}

			function e() {
				return parseInt(getCookie(Cookies.d)) % 37
			}
			return function() {
				var i = e();
				console.log("init1 pSC: " + i), i >= 0 && i < env.e || (i = Math.max(0, env.e - 2), console.log("init2 pSC: " + i));
				var o = {};
				_anApp = o, o.f = env, o.g = !1, o.i = Date.now(), o.j = 0, o.k = 0, o.l = null, o.m = LOCALE, o.n = LANG, o.o = null, o.p = null, o.q = null, o.r = null, o.s = null, o.t = null, o.u = null;
				try {
					navigator && navigator.geolocation && navigator.geolocation.getCurrentPosition(function(t) {
						if (void 0 !== t.coords) {
							var e = t.coords;
							void 0 !== e.latitude && void 0 !== e.longitude && (o.l = t)
						}
					}, function(t) {})
				} catch (t) {}
				return o.v = function() {
					o.p = new AssetsJsonManager, o.q = new ResourceManager, o.r = new AudioManager, o.s = new ScenesManager, o.t = new PropertyManager, o.u = new UserManager, o.o = new Engine, o.o.z = new MessageProcessor(o.o), o.a()
				}, o.a = function() {
					try {
						ga("send", "event", "app", window.runtimeHash + "_init")
					} catch (t) {}
					o.o.A = function() {
						o.o.B()
					}, o.o.C = function() {
						var t = o.s.F.D();
						try {
							ga("send", "event", "game", window.runtimeHash + "_start", t)
						} catch (t) {}
						o.r.G(AudioManager.AudioState.H), o.s.I(o.s.H.J())
					}, o.o.B = function() {
						try {
							ga("send", "event", "game", window.runtimeHash + "_end")
						} catch (t) {}
						$("body").height() >= 430 && o.f.K.c(), o.p.L(),
							function() {
								var t = Math.floor(o.o.N.M),
									e = o.o.O;
								o.u.P() ? o.u.Q(function() {
									o.R(t, e)
								}) : o.R(t, e)
							}()
					}, o.o.S = function(t) {
						t(o.s.H.T(), o.s.H.U())
					}, o.u.V(function() {
						if (o.p.W && (o.r.G(AudioManager.AudioState.F), o.s.I(o.s.F)), o.u.P()) try {
							var t = o.u.X();
							ga("set", "userId", t)
						} catch (t) {}
						o.Y() && o.u.P() && !o.u.Z() ? (o.$(!1, !1), o.s.aa._(new ConsentAcceptanceToasterViewController)) : o.ba(!0)
					}), o.p.ca(function() {
						o.r.G(AudioManager.AudioState.F), o.s.I(o.s.F)
					}), o.q.a(function() {
						o.o.a(), o.r.a(), o.s.a(), o.t.a(), o.p.a(), o.u.a(), o.Y() && !o.Z() ? o.s.aa._(new ConsentAcceptanceToasterViewController) : o.ba(!0)
					})
				}, o.da = function(t) {
					if (o.u.P()) {
						var e = o.u.ea();
						$.get(GATEWAY_HOST + "/pub/wuid/" + e + "/consent/change?value=" + encodeURI(t), function(t) {})
					}
				}, o.fa = function(t) {
					var e = o.u.ea(),
						i = o.s.F.D(),
						n = o.s.F.ga(),
						r = o.t.ha(PropertyType.ia),
						s = o.t.ha(PropertyType.ja),
						a = o.t.ha(PropertyType.ka),
						h = o.t.ha(PropertyType.la),
						l = o.t.ha(PropertyType.ma),
						p = 0;
					if (null != o.l) {
						var u = o.l.coords.latitude,
							c = o.l.coords.longitude;
						p = 1 | Math.max(0, Math.min(32767, (u + 90) / 180 * 32768)) << 1 | Math.max(0, Math.min(65535, (c + 180) / 360 * 65536)) << 16
					}
					$.get(GATEWAY_HOST + "/pub/wuid/" + e + "/start?gameMode=" + encodeURI(i) + "&gh=" + p + "&nickname=" + encodeURI(n) + "&skinId=" + encodeURI(r) + "&eyesId=" + encodeURI(s) + "&mouthId=" + encodeURI(a) + "&glassesId=" + encodeURI(h) + "&hatId=" + encodeURI(l), function(e) {
						var i = e.server_url;
						t(i)
					})
				}, o.na = function() {
					i++, console.log("start pSC: " + i), !o.f.oa && i >= o.f.e ? (o.s.I(o.s.pa), o.r.G(AudioManager.AudioState.qa), o.f.ra.b()) : (t(i), o.sa())
				}, o.sa = function() {
					if (o.o.ta()) {
						o.s.I(o.s.ua), o.r.G(AudioManager.AudioState.ua);
						var t = o.s.F.D();
						setCookie(Cookies.va, t, 30), console.log("save gm: " + t);
						var e = o.s.xa.wa();
						if (setCookie(Cookies.ya, e, 30), console.log("save sPN: " + e), o.u.P()) o.fa(function(t) {
							o.o.za(t, o.u.ea())
						});
						else {
							var i = o.s.F.ga();
							setCookie(Cookies.Aa, i, 30);
							var n = o.t.ha(PropertyType.ia);
							setCookie(Cookies.Ba, n, 30), o.fa(function(t) {
								o.o.Ca(t, i, n)
							})
						}
					}
				}, o.R = function(t, e) {
					var i = o.s.F.ga();
					o.s.H.Da(t, e, i), o.r.G(AudioManager.AudioState.Ea), o.s.I(o.s.H.Fa())
				}, o.Ga = function() {
					if (!o.Ha()) return o.t.Ia();
					var t = parseInt(getCookie(Cookies.Ba));
					return null != t && o.t.Ja(t, PropertyType.ia) ? t : o.t.Ia()
				}, o.Ka = function(t) {
					setCookie(Cookies.La, !!t, 1800)
				}, o.Ha = function() {
					return "true" === getCookie(Cookies.La)
				}, o.ba = function(e) {
					if (e != o.g) {
						o.g = e;
						var n = n || {};
						n.consented = e, n.gdprConsent = e, o.f.Ma.a(), o.f.K.a(), o.f.ra.a(function(e) {
							e && t(i = 0), o.sa()
						})
					}
				}, o.$ = function(t, e) {
					setCookie(Cookies.Na, t ? "true" : "false"), e && o.da(t), o.ba(t)
				}, o.Z = function() {
					switch (getCookie(Cookies.Na)) {
						case "true":
							return !0;
						default:
							return !1
					}
				}, o.Y = function() {
					try {
						return !!window.isIPInEEA || !(null == o.l || !EEAMap.Oa(o.l.coords.latitude, o.l.coords.longitude))
					} catch (t) {
						return !0
					}
				}, o.Pa = function() {
					o.j = Date.now(), o.k = o.j - o.i, o.o.Qa(o.j, o.k), o.s.Qa(o.j, o.k), o.i = o.j
				}, o.Ra = function() {
					o.s.Ra()
				}, o
			}()
		}

		function Engine() {
			var t = {
					Sa: 0,
					Ta: 1,
					Ua: 2,
					Va: 3
				},
				e = {};
			return e.Wa = 30, e.Xa = new Float32Array(100), e.Ya = 0, e.Za = 0, e.$a = 0, e._a = 0, e.ab = 0, e.bb = 0, e.cb = t.Sa, e.db = null, e.eb = 300, e.C = function() {}, e.B = function() {}, e.S = function() {}, e.A = function() {}, e.fb = new GameParams, e.z = null, e.N = null, e.gb = {}, e.hb = {}, e.ib = 12.5, e.jb = 40, e.kb = 1, e.lb = -1, e.mb = 1, e.nb = 1, e.ob = -1, e.pb = -1, e.qb = 1, e.rb = 1, e.sb = -1, e.O = 500, e.tb = 500, e.fb.ub = 500, e.N = new Worm(e.fb), e.a = function() {
				e.N.vb(getApp().s.H.wb), setInterval(function() {
					e.S(function(t, i) {
						e.xb(t, i)
					})
				}, 100)
			}, e.yb = function(t, i, o, n) {
				e.lb = t, e.mb = i, e.nb = o, e.ob = n, e.zb()
			}, e.Ab = function(t) {
				e.kb = t, e.zb()
			}, e.zb = function() {
				e.pb = e.lb - e.kb, e.qb = e.mb + e.kb, e.rb = e.nb - e.kb, e.sb = e.ob + e.kb
			}, e.Qa = function(i, o) {
				e.$a += o, e.Za -= .2 * e.Ya * o, e.z.Bb(), null == e.db || e.cb !== t.Ua && e.cb !== t.Va || (e.Cb(i, o), e.jb = 4 + e.ib * e.N.Db);
				for (var n = 1e3 / Math.max(1, o), r = 0, s = 0; s < e.Xa.length - 1; s++) r += e.Xa[s], e.Xa[s] = e.Xa[s + 1];
				e.Xa[e.Xa.length - 1] = n, e.Wa = (r + n) / e.Xa.length
			}, e.Eb = function(t, i) {
				return t > e.pb && t < e.qb && i > e.rb && i < e.sb
			}, e.Cb = function(t, i) {
				var o = e.$a + e.Za,
					n = (o - e._a) / (e.ab - e._a);
				e.N.Fb(t, i), e.N.Gb(t, i, n, e.Eb);
				var r = 0;
				for (var s in e.hb) {
					var a = e.hb[s];
					a.Fb(t, i), a.Gb(t, i, n, e.Eb), a.Hb && a.Db > r && (r = a.Db), a.Ib || !(a.Jb < .005) && a.Hb || (a.Kb(), delete e.hb[a.Mb.Lb])
				}
				e.Ab(3 * r);
				for (var h in e.gb) {
					var l = e.gb[h];
					l.Fb(t, i), l.Gb(t, i, e.Eb), l.Nb && (l.Jb < .005 || !e.Eb(l.Ob, l.Pb)) && (l.Kb(), delete e.gb[l.Mb.Lb])
				}
			}, e.Qb = function(i, o) {
				e.cb === t.Ta && (e.cb = t.Ua, e.C());
				var n = getApp().j;
				e.bb = i, 0 === i ? (e._a = n - 95, e.ab = n, e.$a = e._a, e.Za = 0) : (e._a = e.ab, e.ab = e.ab + o);
				var r = e.$a + e.Za;
				e.Ya = (r - e._a) / (e.ab - e._a)
			}, e.Rb = function() {
				if (e.cb === t.Ta || e.cb === t.Ua) {
					e.cb = t.Va;
					var i = e.db;
					setTimeout(function() {
						e.cb === t.Va && (e.cb = t.Sa), null != i && i === e.db && (e.db.close(), e.db = null)
					}, 5e3), e.B()
				}
			}, e.ta = function() {
				return e.cb !== t.Ua && (e.cb = t.Ta, e.z.Sb(), e.gb = {}, e.hb = {}, e.N.Tb(), null != e.db && (e.db.close(), e.db = null), !0)
			}, e.Ub = function() {
				e.db = null, e.z.Sb(), e.cb !== t.Va && e.A(), e.cb = t.Sa
			}, e.za = function(t, i) {
				e.Vb(t, function() {
					var t = Math.min(2048, i.length),
						o = new ArrayBuffer(6 + 2 * t),
						n = new DataView(o),
						r = 0;
					n.setInt8(r, 129), r += 1, n.setInt16(r, 2800), r += 2, n.setInt8(r, 1), r += 1, n.setInt16(r, t), r += 2;
					for (var s = 0; s < t; s++) n.setInt16(r, i.charCodeAt(s)), r += 2;
					e.Wb(o)
				})
			}, e.Ca = function(t, i, o) {
				e.Vb(t, function() {
					var t = Math.min(32, i.length),
						n = new ArrayBuffer(7 + 2 * t),
						r = new DataView(n),
						s = 0;
					r.setInt8(s, 129), s += 1, r.setInt16(s, 2800), s += 2, r.setInt8(s, 0), s += 1, r.setInt16(s, o), s += 2, r.setInt8(s, t), s++;
					for (var a = 0; a < t; a++) r.setInt16(s, i.charCodeAt(a)), s += 2;
					e.Wb(n)
				})
			}, e.Wb = function(t) {
				try {
					null != e.db && e.db.readyState === WebSocket.OPEN && e.db.send(t)
				} catch (t) {
					console.log("Socket send error: " + t), e.Ub()
				}
			}, e.xb = function(t, i) {
				var o = i ? 128 : 0,
					n = normDir(t) / _2PI * 128 & 127,
					r = 255 & (o | n);
				if (e.eb !== r) {
					var s = new ArrayBuffer(1);
					new DataView(s).setInt8(0, r), e.Wb(s), e.eb = r
				}
			}, e.Vb = function(t, i) {
				var o = e.db = new WebSocket(t);
				o.binaryType = "arraybuffer", o.onopen = function() {
					e.db === o && (console.log("Socket opened"), i())
				}, o.onclose = function() {
					e.db === o && (console.log("Socket closed"), e.Ub())
				}, o.onerror = function(t) {
					e.db === o && (console.log("Socket error"), e.Ub())
				}, o.onmessage = function(t) {
					e.db === o && e.z.Xb(t.data)
				}
			}, e
		}
		var LINE_LOGO_URL = "/images/linelogo-xmas2022.png",
			GUEST_AVATAR_URL = "/images/guest-avatar-xmas2022.png",
			isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
			GATEWAY_HOST = atob("aHR0cHM6Ly9nYXRld2F5Lndvcm1hdGUuaW8="),
			RESOURCES_HOST = atob("aHR0cHM6Ly9yZXNvdXJjZXMud29ybWF0ZS5pbw=="),
			LOCAL_HOST = atob("aHR0cHM6Ly9kYWJvc3M3MTczLmdpdGh1Yi5pbw=="),
			LANG = window.I18N_LANG;
		LANG || (LANG = "en");
		var LOCALE = void 0;
		switch (LANG) {
			case "uk":
				LOCALE = "uk_UA";
				break;
			case "de":
				LOCALE = "de_DE";
				break;
			case "fr":
				LOCALE = "fr_FR";
				break;
			case "ru":
				LOCALE = "ru_RU";
				break;
			case "es":
				LOCALE = "es_ES";
				break;
			default:
				LOCALE = "en_US"
		}
		moment.locale(LOCALE);
		var SHOW_FPS = !1,
			_anApp = void 0,
			POGL = function() {
				var p = {
						Yb: eval(atob("UElYSQ=="))
					},
					bm = p.Yb[atob("QkxFTkRfTU9ERVM=")],
					wm = p.Yb[atob("V1JBUF9NT0RFUw==")];
				return {
					Zb: p.Yb[atob("Q29udGFpbmVy")],
					$b: p.Yb[atob("QmFzZVRleHR1cmU=")],
					_b: p.Yb[atob("VGV4dHVyZQ==")],
					ac: p.Yb[atob("UmVuZGVyZXI=")],
					bc: p.Yb[atob("R3JhcGhpY3M=")],
					cc: p.Yb[atob("U2hhZGVy")],
					dc: p.Yb[atob("UmVjdGFuZ2xl")],
					ec: p.Yb[atob("U3ByaXRl")],
					fc: p.Yb[atob("VGV4dA==")],
					gc: p.Yb[atob("R2VvbWV0cnk=")],
					hc: p.Yb[atob("TWVzaA==")],
					ic: {
						jc: bm[atob("QURE")]
					},
					kc: {
						lc: wm[atob("UkVQRUFU")]
					}
				}
			}(),
			_2PI = 2 * Math.PI;
		! function() {
			var t = "Z2V0",
				e = "=",
				i = t + "SW50",
				o = t + "RmxvYXQ",
				n = [atob(i + "OA=="), atob(i + "MTY" + e), atob(i + "MzI" + e), atob(o + "zMg=="), atob(o + "2NA==")];
			DataView.prototype.mc = function(t) {
				return this[n[0]](t)
			}, DataView.prototype.nc = function(t) {
				return this[n[1]](t)
			}, DataView.prototype.oc = function(t) {
				return this[n[2]](t)
			}, DataView.prototype.pc = function(t) {
				return this[n[3]](t)
			}, DataView.prototype.qc = function(t) {
				return this[n[4]](t)
			}
		}();
		var Ability = function() {
				function t(t) {
					this.rc = t, this.sc = !1, this.tc = 1
				}
				return t.VELOCITY_TYPE = 0, t.FLEXIBLE_TYPE = 1, t.MAGNETIC_TYPE = 2, t.ZOOM_TYPE = 6, t.X2_TYPE = 3, t.X5_TYPE = 4, t.X10_TYPE = 5, t
			}(),
			AssetsJsonManager = function() {
				function t() {
					this.uc = [], this.vc = {}, this.wc = null, this.xc = AssetsJsonResources.yc()
				}

				function e(t, e) {
					for (var i in t) t.hasOwnProperty(i) && e(i, t[i])
				}
				return t.prototype.a = function() {
					this.L()
				}, t.prototype.W = function() {
					return null != this.wc
				}, t.prototype.zc = function() {
					return null != this.wc ? this.wc.revision : -1
				}, t.prototype.Ac = function() {
					return this.wc
				}, t.prototype.L = function() {
					var t = this;
					$.get(RESOURCES_HOST + "/dynamic/assets/revision.json", function(e) {
						e > t.zc() && t.Bc()
					})
				}, t.prototype.Bc = function() {
					var t = this;
					$.get(RESOURCES_HOST + "/dynamic/assets/registry.json", function(e) {
						e.revision > t.zc() && t.Cc(e)
					})
				}, t.prototype.ca = function(t) {
					this.uc.push(t)
				}, t.prototype.Dc = function() {
					return this.xc
				}, t.prototype.Ec = function() {
					for (var t = 0; t < this.uc.length; t++) this.uc[t]()
				}, t.prototype.Fc = function(t, i) {
					if (!(t.revision <= this.zc())) {
						var o = i;
						e(this.vc, function(t, e) {
							var i = o[t];
							null != i && e.Gc === i.Gc || (print("disposing prev texture: " + t + " at " + e.Gc), e.Hc.destroy())
						}), this.vc = o, this.wc = t, this.xc = AssetsJsonResources.Ic(this.wc, this.vc), this.Ec()
					}
				}, t.prototype.Cc = function(t) {
					var i = {};
					e(t.textureDict, function(t, e) {
						if (e.url.includes("resources.wormate.io")) {
							var o = RESOURCES_HOST + e.relativePath;
						}
						else {
							var o = LOCAL_HOST + e.relativePath;
						}
						i[t] = new FSTexture(o, POGL.$b.from(o))
					}), this.Fc(t, i)
				}, t
			}(),
			AssetsJsonResources = function() {
				function t() {
					this.Jc = null, this.Kc = null, this.Lc = null, this.Mc = null, this.Nc = null, this.Oc = null, this.Pc = null, this.Qc = null, this.Rc = null, this.Sc = null, this.Tc = null, this.Uc = null, this.Vc = null, this.Wc = null, this.Xc = null, this.Yc = null
				}

				function e(t, e) {
					for (var i in t) t.hasOwnProperty(i) && e(i, t[i])
				}
				return t.yc = function() {
					var t = new AssetsJsonResources;
					return t.Jc = {}, t.Kc = {
						Zc: null,
						$c: null
					}, t.Lc = {}, t.Mc = {
						Zc: null
					}, t.Nc = {}, t.Oc = {
						_c: "#FFFFFF",
						Zc: [],
						$c: []
					}, t.Pc = {}, t.Qc = {
						ad: {},
						bd: t.Oc,
						cd: t.Kc
					}, t.Rc = {}, t.Sc = {
						Zc: []
					}, t.Tc = {}, t.Uc = {
						Zc: []
					}, t.Vc = {}, t.Wc = {
						Zc: []
					}, t.Xc = {}, t.Yc = {
						Zc: []
					}, t
				}, t.Ic = function(t, i) {
					var o = new AssetsJsonResources,
						n = {};
					e(t.colorDict, function(t, e) {
						n[t] = e
					});
					var r = {};
					e(t.regionDict, function(t, e) {
						r[t] = new Region(i[e.texture].Hc, e.x, e.y, e.w, e.h, e.px, e.py, e.pw, e.ph)
					}), o.Nc = {};
					for (var s = 0; s < t.skinArrayDict.length; s++) {
						var a = t.skinArrayDict[s];
						o.Nc[a.id] = new AssetsJsonResources.WormSkinData("#" + n[a.prime], a.base.map(function(t) {
							return r[t]
						}), a.glow.map(function(t) {
							return r[t]
						}))
					}
					var h = t.skinUnknown;
					o.Oc = new AssetsJsonResources.WormSkinData("#" + n[h.prime], h.base.map(function(t) {
						return r[t]
					}), h.glow.map(function(t) {
						return r[t]
					})), o.Rc = {}, e(t.eyesDict, function(t, e) {
						t = parseInt(t), o.Rc[t] = new AssetsJsonResources.WearSkinData(e.base.map(function(t) {
							return r[t.region]
						}))
					}), o.Sc = new AssetsJsonResources.WearSkinData(t.eyesUnknown.base.map(function(t) {
						return r[t.region]
					})), o.Tc = {}, e(t.mouthDict, function(t, e) {
						t = parseInt(t), o.Tc[t] = new AssetsJsonResources.WearSkinData(e.base.map(function(t) {
							return r[t.region]
						}))
					}), o.Uc = new AssetsJsonResources.WearSkinData(t.mouthUnknown.base.map(function(t) {
						return r[t.region]
					})), o.Vc = {}, e(t.glassesDict, function(t, e) {
						t = parseInt(t), o.Vc[t] = new AssetsJsonResources.WearSkinData(e.base.map(function(t) {
							return r[t.region]
						}))
					}), o.Wc = new AssetsJsonResources.WearSkinData(t.glassesUnknown.base.map(function(t) {
						return r[t.region]
					})), o.Xc = {}, e(t.hatDict, function(t, e) {
						t = parseInt(t), o.Xc[t] = new AssetsJsonResources.WearSkinData(e.base.map(function(t) {
							return r[t.region]
						}))
					}), o.Yc = new AssetsJsonResources.WearSkinData(t.hatUnknown.base.map(function(t) {
						return r[t.region]
					})), o.Jc = {}, e(t.portionDict, function(t, e) {
						t = parseInt(t), o.Jc[t] = new AssetsJsonResources.PortionSkinData(r[e.base], r[e.glow])
					});
					var l = t.portionUnknown;
					o.Kc = new AssetsJsonResources.PortionSkinData(r[l.base], r[l.glow]), o.Lc = {}, e(t.abilityDict, function(t, e) {
						t = parseInt(t), o.Lc[t] = new AssetsJsonResources.AbilitySkinData(r[e.base])
					});
					var p = t.abilityUnknown;
					return o.Mc = new AssetsJsonResources.AbilitySkinData(r[p.base]), o.Pc = {}, e(t.teamDict, function(t, e) {
						t = parseInt(t), o.Pc[t] = new AssetsJsonResources.TeamSkinData(e.name, new AssetsJsonResources.WormSkinData("#" + n[e.skin.prime], [], e.skin.glow.map(function(t) {
							return r[t]
						})), new AssetsJsonResources.PortionSkinData([], r[e.portion.glow]))
					}), o.Qc = new AssetsJsonResources.TeamSkinData({}, o.Oc, o.Kc), o
				}, t.prototype.dd = function(t) {
					var e = this.Nc[t];
					return e || this.Oc
				}, t.prototype.ed = function(t) {
					var e = this.Pc[t];
					return e || this.Qc
				}, t.prototype.fd = function(t) {
					var e = this.Rc[t];
					return e || this.Sc
				}, t.prototype.gd = function(t) {
					var e = this.Tc[t];
					return e || this.Uc
				}, t.prototype.hd = function(t) {
					var e = this.Vc[t];
					return e || this.Wc
				}, t.prototype.jd = function(t) {
					var e = this.Xc[t];
					return e || this.Yc
				}, t.prototype.kd = function(t) {
					var e = this.Jc[t];
					return e || this.Kc
				}, t.prototype.ld = function(t) {
					var e = this.Lc[t];
					return e || this.Mc
				}, t.TeamSkinData = function() {
					function t(t, e, i) {
						this.ad = t, this.bd = e, this.cd = i
					}
					return t
				}(), t.WormSkinData = function() {
					function t(t, e, i) {
						this._c = t, this.Zc = e, this.$c = i
					}
					return t
				}(), t.WearSkinData = function() {
					function t(t) {
						this.Zc = t
					}
					return t
				}(), t.PortionSkinData = function() {
					function t(t, e) {
						this.Zc = t, this.$c = e
					}
					return t
				}(), t.AbilitySkinData = function() {
					function t(t) {
						this.Zc = t
					}
					return t
				}(), t
			}(),
			AudioManager = function() {
				function t() {
					this.md = AudioManager.AudioState.ua, this.nd = !1, this.od = !1, this.pd = null, this.qd = null
				}
				t.prototype.a = function() {}, t.prototype.rd = function(t) {
					this.od = t
				}, t.prototype.G = function(t) {
					this.md = t, this.sd()
				}, t.prototype.td = function(t) {
					this.nd = t, this.sd()
				}, t.prototype.sd = function() {}, t.prototype.ud = function(t, e) {
					if (!getApp().p.W) return null;
					var i = t[e];
					return null == i || 0 == i.length ? null : i[Math.floor(Math.random() * i.length)].cloneNode()
				}, t.prototype.vd = function(t, e, i) {
					if (this.od && !(i <= 0)) {
						var o = this.ud(t, e);
						null != o && (o.volume = Math.min(1, i), o.play())
					}
				}, t.prototype.wd = function(t, e) {
					this.md.xd && this.vd(app.q.yd, t, e)
				}, t.prototype.zd = function(t, e) {
					this.md.Ad && this.vd(app.q.Bd, t, e)
				}, t.prototype.Cd = function() {}, t.prototype.Dd = function() {}, t.prototype.Ed = function() {}, t.prototype.Fd = function() {}, t.prototype.Gd = function() {}, t.prototype.Hd = function() {}, t.prototype.Id = function(t, e, i) {}, t.prototype.Jd = function(t) {}, t.prototype.Kd = function(t) {}, t.prototype.Ld = function(t) {}, t.prototype.Md = function(t) {}, t.prototype.Nd = function(t) {}, t.prototype.Od = function(t) {}, t.prototype.Pd = function(t) {}, t.prototype.Qd = function(t) {}, t.prototype.Rd = function(t) {}, t.prototype.Sd = function(t) {}, t.prototype.Td = function(t) {}, t.prototype.Ud = function(t) {}, t.prototype.Vd = function(t) {}, t.prototype.Wd = function(t) {}, t.prototype.Xd = function(t, e) {}, t.prototype.Yd = function(t) {}, t.prototype.Zd = function(t, e, i) {};
				var e = (function() {
					function t(t) {
						this.$d = new e(t, .5), this.$d._d.loop = !0, this.ae = !1
					}
					t.prototype.be = function(t) {
						t ? this.b() : this.ce()
					}, t.prototype.b = function() {
						this.ae || (this.ae = !0, this.$d.de = 0, this.$d.ee(1500, 100))
					}, t.prototype.ce = function() {
						this.ae && (this.ae = !1, this.$d.fe(1500, 100))
					}
				}(), function() {
					function t(t) {
						this.ge = t.map(function(t) {
							return new e(t, .4)
						}), i(this.ge, 0, this.ge.length), this.he = null, this.ie = 0, this.ae = !1, this.je = 1e4
					}

					function i(t, e, i) {
						for (var o = i - 1; o > e; o--) {
							var n = e + Math.floor(Math.random() * (o - e + 1)),
								r = t[o];
							t[o] = t[n], t[n] = r
						}
					}
					t.prototype.be = function(t) {
						t ? this.b() : this.ce()
					}, t.prototype.b = function() {
						this.ae || (this.ae = !0, this.ke(1500))
					}, t.prototype.ce = function() {
						this.ae && (this.ae = !1, null != this.he && this.he.fe(800, 50))
					}, t.prototype.ke = function(t) {
						if (this.ae) {
							null == this.he && (this.he = this.le()), this.he._d.currentTime + this.je / 1e3 > this.he._d.duration && (this.he = this.le(), this.he._d.currentTime = 0), console.log("Current track '" + this.he._d.src + "', change in (ms) " + (1e3 * (this.he._d.duration - this.he._d.currentTime) - this.je)), this.he.de = 0, this.he.ee(t, 100);
							var e = 1e3 * (this.he._d.duration - this.he._d.currentTime) - this.je,
								i = this,
								o = setTimeout(function() {
									i.ae && o == i.ie && (i.he.fe(i.je, 100), i.he = i.le(), i.he._d.currentTime = 0, i.ke(i.je))
								}, e);
							this.ie = o
						}
					}, t.prototype.le = function() {
						var t = this.ge[0],
							e = Math.max(1, this.ge.length / 2);
						return i(this.ge, e, this.ge.length), this.ge.push(this.ge.shift()), t
					}
				}(), function() {
					function t(t, e) {
						this._d = t, this.me = e, this.de = 0, t.volume = 0, this.ne = 0, this.oe = !1
					}
					return t.prototype.ee = function(t, e) {
						console.log("fade IN " + this._d.src), this.pe(!0, t, e)
					}, t.prototype.fe = function(t, e) {
						console.log("fade OUT " + this._d.src), this.pe(!1, t, e)
					}, t.prototype.pe = function(t, e, i) {
						this.oe && clearInterval(this.ne);
						var o = this,
							n = 1 / (e / i),
							r = setInterval(function() {
								if (o.oe && r != o.ne) return void clearInterval(r);
								t ? (o.de = Math.min(1, o.de + n), o._d.volume = o.de * o.me, o.de >= 1 && (o.oe = !1, clearInterval(r))) : (o.de = Math.max(0, o.de - n), o._d.volume = o.de * o.me, o.de <= 0 && (o._d.pause(), o.oe = !1, clearInterval(r)))
							}, i);
						this.oe = !0, this.ne = r, this._d.play()
					}, t
				}());
				return t.AudioState = {
					ua: {
						qe: !1,
						re: !1,
						Ad: !0,
						xd: !1
					},
					F: {
						qe: !1,
						re: !0,
						Ad: !0,
						xd: !1
					},
					H: {
						qe: !0,
						re: !1,
						Ad: !1,
						xd: !0
					},
					Ea: {
						qe: !1,
						re: !1,
						Ad: !0,
						xd: !1
					},
					qa: {
						qe: !1,
						re: !1,
						Ad: !1,
						xd: !1
					}
				}, t
			}(),
			BackgroundView = function() {
				function t(t) {
					this.se = t, this.te = t.get()[0], this.ue = new POGL.ac({
						view: this.te,
						backgroundColor: e,
						antialias: !0
					}), this.ve = new POGL.Zb, this.ve.sortableChildren = !0, this.we = [], this.xe = [], this.ye = [], this.a()
				}
				var e = 0,
					i = function(t, e) {
						return t + Math.random(e - t)
					},
					o = function(t) {
						return t >= 0 ? Math.cos(t % _2PI) : Math.cos(t % _2PI + _2PI)
					},
					n = function(t) {
						return t >= 0 ? Math.sin(t % _2PI) : Math.sin(t % _2PI + _2PI)
					},
					r = [{
						ze: i(0, _2PI),
						Ae: i(0, _2PI),
						Be: i(.1, .5),
						Ce: 1,
						De: 2,
						Ee: 16737962
					}, {
						ze: i(0, _2PI),
						Ae: i(0, _2PI),
						Be: i(.1, .5),
						Ce: 1.5,
						De: 1.5,
						Ee: 16746632
					}, {
						ze: i(0, _2PI),
						Ae: i(0, _2PI),
						Be: i(.1, .5),
						Ce: 2,
						De: 1,
						Ee: 16755302
					}, {
						ze: i(0, _2PI),
						Ae: i(0, _2PI),
						Be: i(.1, .5),
						Ce: 3,
						De: 2,
						Ee: 11206502
					}, {
						ze: i(0, _2PI),
						Ae: i(0, _2PI),
						Be: i(.1, .5),
						Ce: 2.5,
						De: 2.5,
						Ee: 8978312
					}, {
						ze: i(0, _2PI),
						Ae: i(0, _2PI),
						Be: i(.1, .5),
						Ce: 2,
						De: 3,
						Ee: 6750122
					}, {
						ze: i(0, _2PI),
						Ae: i(0, _2PI),
						Be: i(.1, .5),
						Ce: 5,
						De: 4,
						Ee: 6728447
					}, {
						ze: i(0, _2PI),
						Ae: i(0, _2PI),
						Be: i(.1, .5),
						Ce: 4.5,
						De: 4.5,
						Ee: 8947967
					}, {
						ze: i(0, _2PI),
						Ae: i(0, _2PI),
						Be: i(.1, .5),
						Ce: 4,
						De: 5,
						Ee: 11167487
					}];
				return t.prototype.a = function() {
					var t = getApp();
					this.ue.backgroundColor = e, this.we = new Array(r.length);
					for (var i = 0; i < this.we.length; i++) this.we[i] = new POGL.ec, this.we[i].texture = t.q.Fe, this.we[i].anchor.set(.5), this.we[i].zIndex = 1, this.ve.addChild(this.we[i]);
					this.xe = new Array(t.q.Ge.length);
					for (var o = 0; o < this.xe.length; o++) this.xe[o] = new POGL.ec, this.xe[o].texture = t.q.Ge[o], this.xe[o].anchor.set(.5), this.xe[o].zIndex = 2, this.ve.addChild(this.xe[o]);
					this.ye = new Array(this.xe.length);
					for (var n = 0; n < this.ye.length; n++) this.ye[n] = {
						He: Math.random(),
						Ie: Math.random(),
						Je: Math.random(),
						Ke: Math.random()
					};
					this.Ra()
				}, t.sc = !1, t.Le = function(e) {
					t.sc = e
				}, t.prototype.Ra = function() {
					var t = window.devicePixelRatio ? window.devicePixelRatio : 1,
						e = this.se.width(),
						i = this.se.height();
					this.ue.resize(e, i), this.ue.resolution = t, this.te.width = t * e, this.te.height = t * i;
					for (var o = .8 * Math.max(e, i), n = 0; n < this.we.length; n++) this.we[n].width = o, this.we[n].height = o
				}, t.prototype.Pa = function(e, i) {
					if (t.sc) {
						for (var s = e / 1e3, a = i / 1e3, h = this.se.width(), l = this.se.height(), p = 0; p < this.we.length; p++) {
							var u = r[p % r.length],
								c = this.we[p],
								f = o(u.Ce * (.08 * s) + u.Ae),
								d = n(u.De * (.08 * s)),
								g = .2 + .2 * o(u.Ae + u.Be * s);
							c.tint = u.Ee, c.alpha = g, c.position.set(h * (.2 + .5 * (f + 1) * .6), l * (.1 + .5 * (d + 1) * .8))
						}
						for (var w = .05 * Math.max(h, l), y = 0; y < this.xe.length; y++) {
							var k = this.ye[y],
								v = this.xe[y],
								b = _2PI * y / this.xe.length + k.He;
							k.Ke += k.Ie * a, k.Ke > 1.3 && (k.He = Math.random() * _2PI, k.Ie = .66 * (.09 + .07 * Math.random()), k.Je = .15 + .7 * Math.random(), k.Ke = -.3);
							var m = k.Je + .03 * Math.sin(6 * Math.sin(b + .48 * s)),
								C = k.Ke,
								P = clamp(Math.sin(Math.PI * C), .1, 1),
								j = .5 * (.4 + .5 * (1 + Math.sin(b + .12 * s)) * 1.2),
								V = b + 2 * k.Ie * s;
							v.alpha = P, v.position.set(h * m, l * C), v.rotation = V;
							var B = v.texture.width / v.texture.height;
							v.width = j * w, v.height = j * w * B
						}
						this.ue.render(this.ve, null, !0)
					}
				}, t
			}(),
			Cookies = function() {
				function t() {}
				return t.Na = "consent_state_2", t.ya = "showPlayerNames", t.Me = "musicEnabled", t.Ne = "sfxEnabled", t.Oe = "account_type", t.va = "gameMode", t.Aa = "nickname", t.Ba = "skin", t.d = "prerollCount", t.La = "shared", t
			}(),
			EEAMap = function() {
				function t(t, e, i) {
					for (var o = !1, n = i.length, r = 0, s = n - 1; r < n; s = r++) i[r][1] > e != i[s][1] > e && t < (i[s][0] - i[r][0]) * (e - i[r][1]) / (i[s][1] - i[r][1]) + i[r][0] && (o = !o);
					return o
				}
				var e = [
					[-28.06744, 64.95936],
					[-10.59082, 72.91964],
					[14.11773, 81.39558],
					[36.51855, 81.51827],
					[32.82715, 71.01696],
					[31.64063, 69.41897],
					[29.41419, 68.43628],
					[30.64379, 67.47302],
					[29.88281, 66.76592],
					[30.73975, 65.50385],
					[30.73975, 64.47279],
					[31.48682, 63.49957],
					[32.18994, 62.83509],
					[28.47726, 60.25122],
					[28.76221, 59.26588],
					[28.03711, 58.60833],
					[28.38867, 57.53942],
					[28.83955, 56.2377],
					[31.24512, 55.87531],
					[31.61865, 55.34164],
					[31.92627, 54.3037],
					[33.50497, 53.26758],
					[32.73926, 52.85586],
					[32.23389, 52.4694],
					[34.05762, 52.44262],
					[34.98047, 51.79503],
					[35.99121, 50.88917],
					[36.67236, 50.38751],
					[37.74902, 50.51343],
					[40.78125, 49.62495],
					[40.47363, 47.70976],
					[38.62799, 46.92028],
					[37.53193, 46.55915],
					[36.72182, 44.46428],
					[39.68218, 43.19733],
					[40.1521, 43.74422],
					[43.52783, 43.03678],
					[45.30762, 42.73087],
					[46.99951, 41.98399],
					[47.26318, 40.73061],
					[44.20009, 40.86309],
					[45.35156, 39.57182],
					[45.43945, 36.73888],
					[35.64789, 35.26481],
					[33.13477, 33.65121],
					[21.47977, 33.92486],
					[12.16268, 34.32477],
					[11.82301, 37.34239],
					[6.09112, 38.28597],
					[-1.96037, 35.62069],
					[-4.82156, 35.60443],
					[-7.6498, 35.26589],
					[-16.45237, 37.44851],
					[-28.06744, 64.95936]
				];
				return {
					Oa: function(i, o) {
						return t(o, i, e)
					}
				}
			}(),
			FloatingStringManager = function() {
				function t(t) {
					var e = void 0;
					e = t > 0 ? "+" + Math.floor(t) : t < 0 ? "-" + Math.floor(t) : "0";
					var o = Math.min(1.5, .5 + t / 600),
						r = void 0;
					if (t < 1) r = "0xFFFFFF";
					else if (t < 30) {
						var s = (t - 1) / 29;
						r = i(1 * (1 - s) + .96 * s, 1 * (1 - s) + .82 * s, 1 * (1 - s) + 0 * s)
					} else if (t < 300) {
						var a = (t - 30) / 270;
						r = i(.96 * (1 - a) + .93 * a, .82 * (1 - a) + .34 * a, 0 * (1 - a) + .25 * a)
					} else if (t < 700) {
						var h = (t - 300) / 400;
						r = i(.93 * (1 - h) + .98 * h, .34 * (1 - h) + 0 * h, .25 * (1 - h) + .98 * h)
					} else r = i(.98, 0, .98);
					var l = Math.random(),
						p = 1 + .5 * Math.random();
					return new n(e, r, !0, .5, o, l, p)
				}

				function e(t, e) {
					var o = void 0,
						r = void 0;
					return e ? (o = 1.3, r = i(.93, .34, .25)) : (o = 1.1, r = i(.96, .82, 0)), new n(t, r, !0, .5, o, .5, .7)
				}

				function i(t, e, i) {
					return ((255 * t & 255) << 16) + ((255 * e & 255) << 8) + (255 * i & 255)
				}
				var o = extend(POGL.Zb, function() {
					POGL.Zb.call(this), this.Pe = [], this.Qe = 0
				});
				o.prototype.Re = function(e) {
					if (this.Qe += e, this.Qe >= 1) {
						var i = Math.floor(this.Qe);
						this.Qe -= i;
						var o = t(i);
						this.addChild(o), this.Pe.push(o)
					}
				}, o.prototype.Se = function(t) {
					if (t) {
						var i = e(i18n("index.game.floating.headshot"), !0);
						this.addChild(i), this.Pe.push(i)
					} else {
						var o = e(i18n("index.game.floating.wellDone"), !1);
						this.addChild(o), this.Pe.push(o)
					}
				}, o.prototype.Te = function(t, e) {
					for (var i = getApp().s.H.wb, o = i.ue.width / i.ue.resolution, n = i.ue.height / i.ue.resolution, r = 0; r < this.Pe.length;) {
						var s = this.Pe[r];
						s.Ue = s.Ue + e / 2e3 * s.Ve, s.We = s.We + e / 2e3 * s.Xe, s.alpha = .5 * Math.sin(Math.PI * s.We), s.scale.set(s.Ue), s.position.x = o * (.25 + .5 * s.Ye), s.position.y = s.Ze ? n * (1 - .5 * (1 + s.We)) : n * (1 - .5 * (0 + s.We)), s.We > 1 && (pixijs_removeFromParent(s), this.Pe.splice(r, 1), r--), r++
					}
				};
				var n = function() {
					return extend(POGL.fc, function(t, e, i, o, n, r, s) {
						POGL.fc.call(this, t, {
							fill: e,
							fontFamily: "PTSans",
							fontSize: 36
						}), this.anchor.set(.5), this.Ze = i, this.Ue = o, this.Ve = n, this.Ye = r, this.We = 0, this.Xe = s
					})
				}();
				return o
			}(),
			FSTexture = function() {
				function t(t, e) {
					this.Gc = t, this.Hc = e
				}
				return t
			}(),
			GameMode = {
				$e: 0,
				_e: 16
			},
			GameParams = function() {
				function t() {
					this.af = GameMode.$e, this.bf = 0, this.ub = 500, this.cf = 4e3, this.df = 7e3
				}
				return t.TEAM_DEFAULT = 0, t.prototype.ef = function() {
					return 1.02 * this.ub
				}, t
			}(),
			GameView = function() {
				function t(t) {
					this.se = t, this.te = t.get()[0], this.ue = new POGL.ac({
						view: this.te,
						backgroundColor: e,
						antialias: !0
					}), this.ve = new POGL.Zb, this.ve.sortableChildren = !0, this.ff = Math.floor(360 * Math.random()), this.gf = 0, this.hf = 0, this.if = 15, this.jf = .5, this.kf = 0, this.lf = new WMGameBackgroundSprite, this.mf = new POGL.bc, this.nf = new POGL.Zb, this.pf = new POGL.Zb, this.pf.sortableChildren = !0, this.qf = new POGL.Zb, this.rf = new POGL.Zb, this.rf.sortableChildren = !0, this.sf = new POGL.Zb, this.tf = new i, this.uf = new o, this.vf = new n, this.wf = new FloatingStringManager, this.xf = new POGL.ec, this.yf = {
						x: 0,
						y: 0
					}, this.a()
				}
				var e = 0;
				t.prototype.a = function() {
					this.ue.backgroundColor = e, this.lf.zf.zIndex = 10, this.ve.addChild(this.lf.zf), this.mf.zIndex = 20, this.ve.addChild(this.mf), this.nf.zIndex = 5e3, this.ve.addChild(this.nf), this.pf.zIndex = 5100, this.ve.addChild(this.pf), this.qf.zIndex = 1e4, this.ve.addChild(this.qf), this.xf.texture = getApp().q.Af, this.xf.anchor.set(.5), this.xf.zIndex = 1, this.rf.addChild(this.xf), this.sf.alpha = .6, this.sf.zIndex = 2, this.rf.addChild(this.sf), this.wf.zIndex = 3, this.rf.addChild(this.wf), this.tf.alpha = .8, this.tf.zIndex = 4, this.rf.addChild(this.tf), this.uf.zIndex = 5, this.rf.addChild(this.uf), this.vf.zIndex = 6, this.rf.addChild(this.vf), this.Ra()
				}, t.prototype.Ra = function() {
					var t = window.devicePixelRatio ? window.devicePixelRatio : 1,
						e = this.se.width(),
						i = this.se.height();
					this.ue.resize(e, i), this.ue.resolution = t, this.te.width = t * e, this.te.height = t * i, this.jf = Math.min(Math.min(e, i), .625 * Math.max(e, i)), this.xf.position.x = e / 2, this.xf.position.y = i / 2, this.xf.width = e, this.xf.height = i, this.tf.position.x = 60, this.tf.position.y = 60, this.uf.position.x = 110, this.uf.position.y = 10, this.vf.position.x = e - 225, this.vf.position.y = 1
				}, t.prototype.Te = function(t, e) {
					var i = getApp();
					this.if = 15, this.nf.removeChildren(), this.pf.removeChildren(), this.qf.removeChildren(), this.sf.removeChildren(), this.lf.Bf(t.af == GameMode.$e ? i.q.Cf : i.q.Df);
					var o = this.mf;
					o.clear(), o.lineStyle(.2, 16711680, .3), o.drawCircle(0, 0, t.ub), o.endFill(), this.vf.Ef = e, this.sf.visible = e
				}, t.prototype.Pa = function(t, e) {
					if (!(this.ue.width <= 5)) {
						var i = getApp(),
							o = i.o.N,
							n = this.ue.width / this.ue.resolution,
							r = this.ue.height / this.ue.resolution;
						this.if = timeDeltaIncrement(this.if, i.o.jb, e, .002);
						var s = this.jf / this.if,
							a = i.o.N.Ff[Ability.ZOOM_TYPE],
							h = null != a && a.sc;
						this.kf = minmax(0, 1, this.kf + e / 1e3 * (.1 * (h ? 1 : 0) - this.kf)), this.xf.alpha = this.kf, this.ff = this.ff + .01 * e, this.ff > 360 && (this.ff = this.ff % 360), this.gf = Math.sin(t / 1200 * 2 * Math.PI);
						var l = o.Gf();
						this.yf.x = linearApproach(this.yf.x, l.x, e, .5, 33.333), this.yf.y = linearApproach(this.yf.y, l.y, e, .5, 33.333);
						var p = n / s / 2,
							u = r / s / 2;
						i.o.yb(this.yf.x - 1.3 * p, this.yf.x + 1.3 * p, this.yf.y - 1.3 * u, this.yf.y + 1.3 * u), this.lf.Te(this.yf.x, this.yf.y, 2 * p, 2 * u);
						var c = i.o.fb.ub;
						this.ve.scale.x = s, this.ve.scale.y = s, this.ve.position.x = n / 2 - this.yf.x * s, this.ve.position.y = r / 2 - this.yf.y * s;
						var f = Math.hypot(l.x, l.y);
						if (f > c - 10) {
							this.hf = minmax(0, 1, 1 + (f - c) / 10);
							var d = Math.cos(this.ff * _2PI / 360) * (1 - this.hf) + 1 * this.hf,
								g = Math.sin(this.ff * _2PI / 360) * (1 - this.hf),
								w = (Math.atan2(g, d) + _2PI) % _2PI * 360 / _2PI,
								y = this.hf * (.5 + .5 * this.gf),
								k = convertHSLtoRGB(Math.floor(w), 1, .75 - .25 * this.hf);
							this.lf.Hf(k[0], k[1], k[2], .1 + .2 * y)
						} else {
							this.hf = 0;
							var v = convertHSLtoRGB(Math.floor(this.ff), 1, .75);
							this.lf.Hf(v[0], v[1], v[2], .1)
						}
						for (var b = 0; b < this.sf.children.length; b++) {
							var m = this.sf.children[b];
							m.position.x = n / 2 - (this.yf.x - m.If.x) * s, m.position.y = r / 2 - (this.yf.y - m.If.y) * s
						}
						this.tf.Jf.position.x = l.x / c * this.tf.Kf, this.tf.Jf.position.y = l.y / c * this.tf.Kf, this.uf.Qa(t), this.wf.Te(t, e), this.ue.render(this.ve, null, !0), this.ue.render(this.rf, null, !1)
					}
				}, t.prototype.Lf = function(t, e) {
					e.Of.Nf.Mf().zIndex = (t + 2147483648) / 4294967296 * 5e3, this.nf.addChild(e.Of.Pf.Mf()), this.pf.addChild(e.Of.Nf.Mf())
				}, t.prototype.Qf = function(t, e, i) {
					e.Rf.zIndex = getApp().o.fb.bf ? 0 : 10 + (t + 32768) / 65536 * 5e3, this.qf.addChild(e.Rf), t != getApp().o.fb.bf && this.sf.addChild(i)
				};
				var i = function() {
						return extend(POGL.Zb, function() {
							POGL.Zb.call(this), this.Kf = 40, this.Sf = new POGL.ec, this.Sf.anchor.set(.5), this.Jf = new POGL.bc;
							var t = new POGL.bc;
							t.beginFill("black", .4), t.drawCircle(0, 0, this.Kf), t.endFill(), t.lineStyle(2, 16225317), t.drawCircle(0, 0, this.Kf), t.moveTo(0, -this.Kf), t.lineTo(0, +this.Kf), t.moveTo(-this.Kf, 0), t.lineTo(+this.Kf, 0), t.endFill(), this.Sf.alpha = .5, this.Jf.zIndex = 2, this.Jf.alpha = .9, this.Jf.beginFill(16225317), this.Jf.drawCircle(0, 0, .06 * this.Kf), this.Jf.endFill(), this.Jf.lineStyle(1, "black"), this.Jf.drawCircle(0, 0, .06 * this.Kf), this.Jf.endFill(), this.addChild(t), this.addChild(this.Sf), this.addChild(this.Jf)
						})
					}(),
					o = function() {
						var t = extend(POGL.Zb, function() {
							POGL.Zb.call(this), this.Tf = {}
						});
						t.prototype.Qa = function(t) {
							var e = .5 + .5 * Math.cos(_2PI * (t / 1e3 / 1.6));
							for (var i in this.Tf) {
								var o = this.Tf[i],
									n = o.Uf;
								o.alpha = 1 - n + n * e
							}
						}, t.prototype.Te = function(t) {
							for (var i in this.Tf) null != t[i] && t[i].sc || (pixijs_removeFromParent(this.Tf[i]), delete this.Tf[i]);
							var o = 0;
							for (var n in t) {
								var r = t[n];
								if (r.sc) {
									var s = this.Tf[n];
									if (!s) {
										var a = getApp().p.Dc().ld(r.rc).Zc;
										s = new e, s.texture = a.Hc, s.width = 40, s.height = 40, this.Tf[n] = s, this.addChild(s)
									}
									s.Uf = r.tc, s.position.x = o, o += 40
								}
							}
						};
						var e = function() {
							return extend(POGL.ec, function() {
								POGL.ec.call(this), this.Uf = 0
							})
						}();
						return t
					}(),
					n = function() {
						var t = extend(POGL.Zb, function() {
							POGL.Zb.call(this), this.Ef = !0, this.Vf = 12, this.Wf = 9, this.Pe = [];
							for (var t = 0; t < 14; t++) this.Xf()
						});
						t.prototype.Te = function(t) {
							var e = getApp(),
								i = e.o.fb.af == GameMode._e,
								o = 0,
								n = 0;
							n >= this.Pe.length && this.Xf(), this.Pe[n].Yf(1, "white"), this.Pe[n].Zf("", i18n("index.game.leader.top10"), "(" + e.o.tb + " online)"), this.Pe[n].position.y = o, o += this.Vf, n += 1, t.$f.length > 0 && (o += this.Wf);
							for (var r = 0; r < t.$f.length; r++) {
								var s = t.$f[r],
									a = e.p.Dc().ed(s._f);
								n >= this.Pe.length && this.Xf(), this.Pe[n].Yf(.8, a.bd._c), this.Pe[n].Zf("" + (r + 1), i18nCustomBundle(a.ad), "" + Math.floor(s.M)), this.Pe[n].position.y = o, o += this.Vf, n += 1
							}
							t.ag.length > 0 && (o += this.Wf);
							for (var h = 0; h < t.ag.length; h++) {
								var l = t.ag[h],
									p = e.o.fb.bf == l.bg,
									u = void 0,
									c = void 0;
								if (p) u = "white", c = e.o.N.Mb.ad;
								else {
									var f = e.o.hb[l.bg];
									null != f ? (u = i ? e.p.Dc().ed(f.Mb.cg).bd._c : e.p.Dc().dd(f.Mb.dg)._c, c = this.Ef ? f.Mb.ad : "---") : (u = "gray", c = "?")
								}
								p && (o += this.Wf), n >= this.Pe.length && this.Xf(), this.Pe[n].Yf(p ? 1 : .8, u), this.Pe[n].Zf("" + (h + 1), c, "" + Math.floor(l.M)), this.Pe[n].position.y = o, o += this.Vf, n += 1, p && (o += this.Wf)
							}
							for (e.o.O > t.ag.length && (o += this.Wf, n >= this.Pe.length && this.Xf(), this.Pe[n].Yf(1, "white"), this.Pe[n].Zf("" + e.o.O, e.o.N.Mb.ad, "" + Math.floor(e.o.N.M)), this.Pe[n].position.y = o, o += this.Vf, n += 1, o += this.Wf); this.Pe.length > n;) pixijs_removeFromParent(this.Pe.pop())
						}, t.prototype.Xf = function() {
							var t = new e;
							t.position.y = 0, this.Pe.length > 0 && (t.position.y = this.Pe[this.Pe.length - 1].position.y + this.Vf), this.Pe.push(t), this.addChild(t)
						};
						var e = function() {
							var t = extend(POGL.Zb, function() {
								POGL.Zb.call(this), this.eg = new POGL.fc("", {
									fontFamily: "PTSans",
									fontSize: 12,
									fill: "white"
								}), this.eg.anchor.x = 1, this.eg.position.x = 30, this.addChild(this.eg), this.fg = new POGL.fc("", {
									fontFamily: "PTSans",
									fontSize: 12,
									fill: "white"
								}), this.fg.anchor.x = 0, this.fg.position.x = 35, this.addChild(this.fg), this.gg = new POGL.fc("", {
									fontFamily: "PTSans",
									fontSize: 12,
									fill: "white"
								}), this.gg.anchor.x = 1, this.gg.position.x = 220, this.addChild(this.gg)
							});
							return t.prototype.Zf = function(t, e, i) {
								this.eg.text = t, this.gg.text = i;
								var o = e;
								for (this.fg.text = o; this.fg.width > 100;) o = o.substring(0, o.length - 1), this.fg.text = o + ".."
							}, t.prototype.Yf = function(t, e) {
								this.eg.alpha = t, this.eg.style.fill = e, this.fg.alpha = t, this.fg.style.fill = e, this.gg.alpha = t, this.gg.style.fill = e
							}, t
						}();
						return t
					}();
				return t
			}(),
			MessageProcessor = function() {
				function t(t) {
					this.o = t, this.hg = [], this.ig = 0
				}
				t.prototype.Xb = function(t) {
					this.hg.push(new DataView(t))
				}, t.prototype.Sb = function() {
					this.hg = [], this.ig = 0
				}, t.prototype.Bb = function() {
					for (var t = 0; t < 10; t++) {
						if (0 === this.hg.length) return;
						var e = this.hg.shift();
						try {
							this.jg(e)
						} catch (t) {
							throw console.log("DataReader error: " + t), t
						}
					}
				}, t.prototype.jg = function(t) {
					switch (255 & t.mc(0)) {
						case 0:
							return void this.kg(t, 1);
						case 1:
							return void this.lg(t, 1);
						case 2:
							return void this.mg(t, 1);
						case 3:
							return void this.ng(t, 1);
						case 4:
							return void this.og(t, 1);
						case 5:
							return void this.pg(t, 1)
					}
				}, t.prototype.kg = function(t, e) {
					console.log("sgp1"), this.o.fb.af = t.mc(e), e += 1;
					var i = t.nc(e);
					return e += 2, this.o.fb.bf = i, this.o.N.Mb.Lb = i, this.o.fb.ub = t.pc(e), e += 4, this.o.fb.cf = t.pc(e), e += 4, this.o.fb.df = t.pc(e), e += 4, getApp().s.H.wb.Te(this.o.fb, getApp().s.xa.wa()), console.log("sgp2"), e
				}, t.prototype.lg = function(t, e) {
					var i = this.ig++,
						o = t.nc(e);
					e += 2;
					var n = void 0;
					n = this.qg(t, e), e += this.rg(n);
					for (var r = 0; r < n; r++) e = this.sg(t, e);
					n = this.qg(t, e), e += this.rg(n);
					for (var s = 0; s < n; s++) e = this.tg(t, e);
					n = this.qg(t, e), e += this.rg(n);
					for (var a = 0; a < n; a++) e = this.ug(t, e);
					n = this.qg(t, e), e += this.rg(n);
					for (var h = 0; h < n; h++) e = this.vg(t, e);
					n = this.qg(t, e), e += this.rg(n);
					for (var l = 0; l < n; l++) e = this.wg(t, e);
					n = this.qg(t, e), e += this.rg(n);
					for (var p = 0; p < n; p++) e = this.xg(t, e);
					n = this.qg(t, e), e += this.rg(n);
					for (var u = 0; u < n; u++) e = this.yg(t, e);
					n = this.qg(t, e), e += this.rg(n);
					for (var c = 0; c < n; c++) e = this.zg(t, e);
					return i > 0 && (e = this.Ag(t, e)), this.o.Qb(i, o), e
				}, t.prototype.vg = function(t, e) {
					var i = new Worm.Config;
					i.Lb = t.nc(e), e += 2, i.cg = this.o.fb.af == GameMode._e ? t.mc(e++) : GameParams.TEAM_DEFAULT, i.dg = t.nc(e), e += 2, i.Bg = t.nc(e), e += 2, i.Cg = t.nc(e), e += 2, i.Dg = t.nc(e), e += 2, i.Eg = t.nc(e), e += 2;
					var o = t.mc(e);
					e += 1;
					for (var n = "", r = 0; r < o; r++) n += String.fromCharCode(t.nc(e)), e += 2;
					if (i.ad = n, this.o.fb.bf === i.Lb) this.o.N.Fg(i);
					else {
						var s = this.o.hb[i.Lb];
						null != s && s.Kb();
						var a = new Worm(this.o.fb);
						a.vb(getApp().s.H.wb), this.o.hb[i.Lb] = a, a.Fg(i)
					}
					return e
				}, t.prototype.wg = function(t, e) {
					var i = t.nc(e);
					e += 2;
					var o = t.mc(e);
					e++;
					var n = !!(1 & o),
						r = !!(2 & o),
						s = 0;
					n && (s = t.nc(e), e += 2);
					var a = this.Gg(i);
					if (void 0 === a) return e;
					if (a.Ib = !1, !a.Hb) return e;
					var h = this.Gg(i);
					if (n && void 0 !== h && h.Hb)
						if (s === this.o.fb.bf) {
							var l = this.o.N.Gf(),
								p = a.Hg(l.x, l.y);
							Math.max(0, 1 - p.distance / (.5 * this.o.jb));
							p.distance < .5 * this.o.jb && getApp().s.H.wb.wf.Se(r)
						} else if (i === this.o.fb.bf);
					else {
						var u = this.o.N.Gf(),
							c = a.Hg(u.x, u.y);
						Math.max(0, 1 - c.distance / (.5 * this.o.jb))
					} else if (i === this.o.fb.bf);
					else {
						var f = this.o.N.Gf(),
							d = a.Hg(f.x, f.y);
						Math.max(0, 1 - d.distance / (.5 * this.o.jb))
					}
					return e
				}, t.prototype.zg = function(t, e) {
					var i = t.nc(e);
					e += 2;
					var o = i === this.o.fb.bf ? null : this.o.hb[i],
						n = t.mc(e);
					e += 1;
					var r = !!(1 & n);
					if (!!(2 & n)) {
						var s = t.pc(e);
						e += 4, o && o.Ig(s)
					}
					var a = this.Jg(t.mc(e++), t.mc(e++), t.mc(e++)),
						h = this.Jg(t.mc(e++), t.mc(e++), t.mc(e++));
					if (o) {
						o.Kg(a, h, r);
						var l = this.o.N.Gf(),
							p = o.Gf(),
							u = Math.max(0, 1 - Math.hypot(l.x - p.x, l.y - p.y) / (.5 * this.o.jb));
						getApp().r.Zd(u, i, r)
					}
					var c = this.qg(t, e);
					if (e += this.rg(c), o)
						for (var f in o.Ff) {
							var d = o.Ff[f];
							d && (d.sc = !1)
						}
					for (var g = 0; g < c; g++) {
						var w = t.mc(e);
						e++;
						var y = t.mc(e);
						if (e++, o) {
							var k = o.Ff[w];
							k || (k = o.Ff[w] = new Ability(w)), k.sc = !0, k.tc = Math.min(1, Math.max(0, y / 100))
						}
					}
					return e
				}, t.prototype.Ag = function(t, e) {
					var i = this.o.N,
						o = t.mc(e);
					e += 1;
					var n = !!(1 & o),
						r = !!(2 & o),
						s = !!(4 & o);
					if (r) {
						var a = i.M;
						i.Ig(t.pc(e)), e += 4, a = i.M - a, a > 0 && getApp().s.H.wb.wf.Re(a)
					}
					s && (this.o.ib = t.pc(e), e += 4);
					var h = this.Jg(t.mc(e++), t.mc(e++), t.mc(e++)),
						l = this.Jg(t.mc(e++), t.mc(e++), t.mc(e++));
					i.Kg(h, l, n), getApp().r.Zd(.5, this.o.fb.bf, n);
					var p = this.qg(t, e);
					e += this.rg(p);
					for (var u in i.Ff) {
						var c = i.Ff[u];
						c && (c.sc = !1)
					}
					for (var f = 0; f < p; f++) {
						var d = t.mc(e);
						e++;
						var g = t.mc(e);
						e++;
						var w = i.Ff[d];
						w || (w = new Ability(d), i.Ff[d] = w), w.sc = !0, w.tc = Math.min(1, Math.max(0, g / 100))
					}
					getApp().s.H.wb.uf.Te(i.Ff)
				}, t.prototype.xg = function(t, e) {
					var i = this,
						o = t.nc(e);
					e += 2;
					var n = this.Gg(o),
						r = t.pc(e);
					e += 4;
					var s = this.qg(t, e);
					if (e += this.rg(s), n) {
						n.Ig(r), n.Lg(function() {
							return i.Jg(t.mc(e++), t.mc(e++), t.mc(e++))
						}, s), n.Mg(!0);
						var a = this.o.N.Gf(),
							h = n.Gf(),
							l = Math.max(0, 1 - Math.hypot(a.x - h.x, a.y - h.y) / (.5 * this.o.jb));
						getApp().r.Xd(l, o)
					} else e += 6 * s;
					return e
				}, t.prototype.yg = function(t, e) {
					var i = t.nc(e);
					e += 2;
					var o = this.o.hb[i];
					return o && o.Ib && o.Mg(!1), getApp().r.Yd(i), e
				}, t.prototype.sg = function(t, e) {
					var i = new Portion.Config;
					i.Lb = t.oc(e), e += 4, i.cg = this.o.fb.af === GameMode._e ? t.mc(e++) : GameParams.TEAM_DEFAULT, i.Ng = this.Jg(t.mc(e++), t.mc(e++), t.mc(e++)), i.dg = t.mc(e++);
					var o = this.o.gb[i.Lb];
					null != o && o.Kb();
					var n = new Portion(i, getApp().s.H.wb);
					return n.Og(this.Pg(i.Lb), this.Qg(i.Lb), !0), this.o.gb[i.Lb] = n, e
				}, t.prototype.tg = function(t, e) {
					var i = t.oc(e);
					e += 4;
					var o = this.o.gb[i];
					return o && (o.Rg = 0, o.Sg = 1.5 * o.Sg, o.Nb = !0), e
				}, t.prototype.ug = function(t, e) {
					var i = t.oc(e);
					e += 4;
					var o = t.nc(e);
					e += 2;
					var n = this.o.gb[i];
					if (n) {
						n.Rg = 0, n.Sg = .1 * n.Sg, n.Nb = !0;
						var r = this.Gg(o);
						if (r && r.Hb) {
							var s = (this.o.fb.bf, r.Gf());
							n.Og(s.x, s.y, !1)
						}
					}
					return e
				};
				var e = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
				return t.prototype.mg = function(t) {
					for (var i = getApp().q.Ug.Tg, o = i.getImageData(0, 0, 80, 80), n = e[0], r = 80 - n, s = 0, a = 0; a < 628; a++)
						for (var h = t.mc(1 + a), l = 0; l < 8; l++) {
							var p = 0 != (h >> l & 1),
								u = 4 * (n + 80 * s);
							p ? (o.data[u] = 255, o.data[u + 1] = 255, o.data[u + 2] = 255, o.data[u + 3] = 255) : o.data[u + 3] = 0, ++n >= r && ++s < 80 && (n = e[s], r = 80 - n)
						}
					i.putImageData(o, 0, 0);
					var c = getApp().s.H.wb.tf.Sf;
					c.texture = getApp().q.Ug.Hc, c.texture.update()
				}, t.prototype.og = function(t, e) {
					var i = t.oc(e);
					e += 4, console.log("Wormy Error: " + i)
				}, t.prototype.pg = function(t, e) {
					console.log("g.o"), this.o.Rb()
				}, t.prototype.ng = function(t, e) {
					this.o.tb = t.nc(e), e += 2, this.o.O = t.nc(e), e += 2;
					var i = new ScoreTableModel;
					i.ag = [];
					for (var o = t.mc(e++), n = 0; n < o; n++) {
						var r = t.nc(e);
						e += 2;
						var s = t.pc(e);
						e += 4, i.ag.push(ScoreTableModel.Vg(r, s))
					}
					if (i.$f = [], this.o.fb.af === GameMode._e)
						for (var a = t.mc(e++), h = 0; h < a; h++) {
							var l = t.mc(e);
							e += 1;
							var p = t.pc(e);
							e += 4, i.$f.push(ScoreTableModel.Wg(l, p))
						}
					getApp().s.H.wb.vf.Te(i)
				}, t.prototype.Gg = function(t) {
					return t === this.o.fb.bf ? this.o.N : this.o.hb[t]
				}, t.prototype.Jg = function(t, e, i) {
					return 1e4 * ((16777215 & (255 & i | e << 8 & 65280 | t << 16 & 16711680)) / 8388608 - 1)
				}, t.prototype.Pg = function(t) {
					return ((65535 & t) / 32768 - 1) * this.o.fb.ef()
				}, t.prototype.Qg = function(t) {
					return ((t >> 16 & 65535) / 32768 - 1) * this.o.fb.ef()
				}, t.prototype.qg = function(t, e) {
					var i = t.mc(e);
					if (0 == (128 & i)) return i;
					var o = t.mc(e + 1);
					if (0 == (128 & o)) return o | i << 7 & 16256;
					var n = t.mc(e + 2);
					if (0 == (128 & n)) return n | o << 7 & 16256 | i << 14 & 2080768;
					var r = t.mc(e + 3);
					return 0 == (128 & r) ? r | n << 7 & 16256 | o << 14 & 2080768 | i << 21 & 266338304 : void 0
				}, t.prototype.rg = function(t) {
					return t < 128 ? 1 : t < 16384 ? 2 : t < 2097152 ? 3 : t < 268435456 ? 4 : void 0
				}, t
			}(),
			Optional = function() {
				function t(t) {
					this.Xg = t
				}
				return t.Yg = function() {
					return new Optional(null)
				}, t.Zg = function(t) {
					return new Optional(t)
				}, t.prototype.$g = function() {
					return this.Xg
				}, t.prototype._g = function() {
					return null != this.Xg
				}, t.prototype.ah = function(t) {
					null != this.Xg && t(this.Xg)
				}, t
			}(),
			Portion = function() {
				function t(t, e) {
					this.Mb = t, this.bh = t.dg >= 80, this.Ob = 0, this.Pb = 0, this.ch = 0, this.dh = 0, this.Sg = this.bh ? 1 : t.Ng, this.Rg = 1, this.Nb = !1, this.eh = 0, this.fh = 0, this.Jb = 1, this.Ae = 2 * Math.PI * Math.random(), this.gh = new PortionSpriteTree, this.gh.hh(getApp().o.fb.af, this.Mb.cg === GameParams.TEAM_DEFAULT ? null : getApp().p.Dc().ed(this.Mb.cg), getApp().p.Dc().kd(this.Mb.dg)), e.Lf(t.Lb, this.gh)
				}
				return t.prototype.Kb = function() {
					this.gh.Of.Pf.ih(), this.gh.Of.Nf.ih()
				}, t.prototype.Og = function(t, e, i) {
					this.Ob = t, this.Pb = e, i && (this.ch = t, this.dh = e)
				}, t.prototype.Fb = function(t, e) {
					var i = Math.min(.5, 1 * this.Sg),
						o = Math.min(2.5, 1.5 * this.Sg);
					this.eh = timeDeltaIncrement(this.eh, i, e, .0025), this.fh = timeDeltaIncrement(this.fh, o, e, .0025), this.Jb = timeDeltaIncrement(this.Jb, this.Rg, e, .0025)
				}, t.prototype.Gb = function(t, e, i) {
					this.ch = timeDeltaIncrement(this.ch, this.Ob, e, .0025), this.dh = timeDeltaIncrement(this.dh, this.Pb, e, .0025), this.gh.Te(this, t, e, i)
				}, t.Config = function() {
					function t() {
						this.Lb = 0, this.cg = GameParams.TEAM_DEFAULT, this.Ng = 0, this.dg = 0
					}
					return t
				}(), t
			}(),
			PortionSpriteTree = function() {
				function t() {
					this.Of = new o(new WMSprite, new WMSprite), this.Of.Pf.jh.blendMode = POGL.ic.jc, this.Of.Pf.jh.zIndex = i, this.Of.Nf.jh.zIndex = e
				}
				var e = 500,
					i = 100;
				t.prototype.hh = function(t, e, i) {
					var o = i.Zc;
					null != o && this.Of.Nf.kh(o);
					var n = t == GameMode._e && null != e ? e.cd.$c : i.$c;
					null != n && this.Of.Pf.kh(n)
				}, t.prototype.Te = function(t, e, i, o) {
					if (!o(t.ch, t.dh)) return void this.Of.lh();
					var n = t.fh * (1 + .3 * Math.cos(t.Ae + e / 200));
					t.bh ? this.Of.mh(t.ch, t.dh, 2 * t.eh, 1 * t.Jb, 1.2 * n, .8 * t.Jb) : this.Of.mh(t.ch, t.dh, 2 * t.eh, 1 * t.Jb, 2 * n, .3 * t.Jb)
				};
				var o = function() {
					function t(t, e) {
						this.Nf = t, this.Pf = e
					}
					return t.prototype.mh = function(t, e, i, o, n, r) {
						this.Nf.Mg(!0), this.Nf.nh(t, e), this.Nf.oh(i), this.Nf.qh(o), this.Pf.Mg(!0), this.Pf.nh(t, e), this.Pf.oh(n), this.Pf.qh(r)
					}, t.prototype.lh = function() {
						this.Nf.Mg(!1), this.Pf.Mg(!1)
					}, t
				}();
				return t
			}(),
			PropertyManager = function() {
				function t() {
					this.rh = 0, this.sh = 0, this.th = 0, this.uh = 0, this.vh = 0, this.wh = []
				}

				function e(t, e) {
					if (!getApp().p.W()) return null;
					var o = getApp().p.Ac();
					if (e === PropertyType.ia) {
						var n = i(o.skinArrayDict, t);
						return n < 0 ? null : o.skinArrayDict[n]
					}
					switch (e) {
						case PropertyType.ja:
							return o.eyesDict[t];
						case PropertyType.ka:
							return o.mouthDict[t];
						case PropertyType.la:
							return o.glassesDict[t];
						case PropertyType.ma:
							return o.hatDict[t]
					}
					return null
				}

				function i(t, e) {
					for (var i = 0; i < t.length; i++)
						if (t[i].id == e) return i;
					return -1
				}
				return t.prototype.a = function() {}, t.prototype.ha = function(t) {
					switch (t) {
						case PropertyType.ia:
							return this.rh;
						case PropertyType.ja:
							return this.sh;
						case PropertyType.ka:
							return this.th;
						case PropertyType.la:
							return this.uh;
						case PropertyType.ma:
							return this.vh
					}
					return 0
				}, t.prototype.xh = function(t) {
					this.wh.push(t), this.yh()
				}, t.prototype.Ia = function() {
					if (!getApp().p.W()) return any([32, 33, 34, 35]);
					for (var t = getApp().p.Ac(), e = [], i = 0; i < t.skinArrayDict.length; i++) {
						var o = t.skinArrayDict[i];
						this.Ja(o.id, PropertyType.ia) && e.push(o)
					}
					return 0 === e.length ? 0 : e[parseInt(e.length * Math.random())].id
				}, t.prototype.zh = function() {
					if (getApp().p.W) {
						var t = getApp().p.Ac().skinArrayDict,
							e = i(t, this.rh);
						if (!(e < 0)) {
							for (var o = e + 1; o < t.length; o++)
								if (this.Ja(t[o].id, PropertyType.ia)) return this.rh = t[o].id, void this.yh();
							for (var n = 0; n < e; n++)
								if (this.Ja(t[n].id, PropertyType.ia)) return this.rh = t[n].id, void this.yh()
						}
					}
				}, t.prototype.Ah = function() {
					if (getApp().p.W) {
						var t = getApp().p.Ac().skinArrayDict,
							e = i(t, this.rh);
						if (!(e < 0)) {
							for (var o = e - 1; o >= 0; o--)
								if (this.Ja(t[o].id, PropertyType.ia)) return this.rh = t[o].id, void this.yh();
							for (var n = t.length - 1; n > e; n--)
								if (this.Ja(t[n].id, PropertyType.ia)) return this.rh = t[n].id, void this.yh()
						}
					}
				}, t.prototype.Bh = function(t, e) {
					if (!getApp().p.W() || this.Ja(t, e)) switch (e) {
						case PropertyType.ia:
							return void(this.rh != t && (this.rh = t, this.yh()));
						case PropertyType.ja:
							return void(this.sh != t && (this.sh = t, this.yh()));
						case PropertyType.ka:
							return void(this.th != t && (this.th = t, this.yh()));
						case PropertyType.la:
							return void(this.uh != t && (this.uh = t, this.yh()));
						case PropertyType.ma:
							return void(this.vh != t && (this.vh = t, this.yh()))
					}
				}, t.prototype.Ja = function(t, i) {
					var o = e(t, i);
					return null != o && (getApp().u.P() ? 0 == o.price && !o.nonbuyable || getApp().u.Ch(t, i) : o.guest)
				}, t.prototype.yh = function() {
					for (var t = 0; t < this.wh.length; t++) this.wh[t]()
				}, t
			}(),
			PropertyType = function() {
				function t() {}
				return t.ia = "SKIN", t.ja = "EYES", t.ka = "MOUTH", t.la = "GLASSES", t.ma = "HAT", t
			}(),
			Region = function() {
				function t(t, e, i, o, n, r, s, a, h) {
					this.Hc = new POGL._b(t, new POGL.dc(e, i, o, n)), this.Dh = e, this.Eh = i, this.Fh = o, this.Gh = n, this.Hh = r || (a || o) / 2, this.Ih = s || (h || n) / 2, this.Jh = a || o, this.Kh = h || n, this.Lh = .5 - (this.Hh - .5 * this.Jh) / this.Fh, this.Mh = .5 - (this.Ih - .5 * this.Kh) / this.Gh, this.Nh = this.Fh / this.Jh, this.Oh = this.Gh / this.Kh
				}
				return t
			}(),
			ResourceManager = function() {
				function t() {
					this.Fe = new POGL._b(POGL.$b.from("/images/bg-obstacle.png"));
					var t = POGL.$b.from("/images/confetti-xmas2022.png");
					this.Ge = [new POGL._b(t, new POGL.dc(0, 0, 128, 128)), new POGL._b(t, new POGL.dc(0, 0, 128, 128)), new POGL._b(t, new POGL.dc(0, 0, 128, 128)), new POGL._b(t, new POGL.dc(0, 0, 128, 128)), new POGL._b(t, new POGL.dc(0, 0, 128, 128)), new POGL._b(t, new POGL.dc(0, 0, 128, 128)), new POGL._b(t, new POGL.dc(0, 0, 128, 128)), new POGL._b(t, new POGL.dc(0, 0, 128, 128)), new POGL._b(t, new POGL.dc(0, 0, 128, 128)), new POGL._b(t, new POGL.dc(0, 0, 128, 128)), new POGL._b(t, new POGL.dc(0, 0, 128, 128)), new POGL._b(t, new POGL.dc(0, 0, 128, 128)), new POGL._b(t, new POGL.dc(0, 0, 128, 128)), new POGL._b(t, new POGL.dc(0, 0, 128, 128)), new POGL._b(t, new POGL.dc(0, 0, 128, 128)), new POGL._b(t, new POGL.dc(0, 0, 128, 128))], this.Cf = new POGL._b(function() {
						var t = POGL.$b.from("/images/bg-pattern-pow2-ARENA.png");
						return t.wrapMode = POGL.kc.lc, t
					}()), this.Df = new POGL._b(function() {
						var t = POGL.$b.from("/images/bg-pattern-pow2-TEAM2.png");
						return t.wrapMode = POGL.kc.lc, t
					}()), this.Af = new POGL._b(POGL.$b.from("/images/lens.png"));
					var e = POGL.$b.from("/images/wear-ability.png");
					this.Ph = new Region(e, 158, 86, 67, 124, 148, 63.5, 128, 128), this.Qh = new Region(e, 158, 4, 87, 74, 203, 63.5, 128, 128), this.Rh = new Region(e, 4, 4, 146, 146, 63.5, 63.5, 128, 128), this.Ug = function() {
						var t = window.document.createElement("canvas");
						return t.width = 80, t.height = 80, {
							te: t,
							Tg: t.getContext("2d"),
							Hc: new POGL._b(POGL.$b.from(t))
						}
					}(), this.Bd = {}, this.yd = {}, this.Sh = [], this.Th = null
				}
				return t.prototype.a = function(t) {
					function e() {
						0 == --i && t()
					}
					var i = 4;
					this.Bd = {}, e(), this.yd = {}, e(), this.Sh = [], e(), this.Th = null, e()
				}, t
			}(),
			ScenesManager = function() {
				function t() {
					this.H = new GameViewController, this.F = new MainMenuViewController, this.Uh = new WithdrawConsentViewController, this.Vh = new DeleteAccountViewController, this.Wh = new CoinsViewController, this.Xh = new LeadersViewController, this.Yh = new ProfileViewController, this.Zh = new LoginViewController, this.xa = new SettingsViewController, this.$h = new SkinsViewController, this._h = new StoreViewController, this.ai = new WearViewController, this.aa = new ToasterContainerViewController, this.ua = new LoadingViewController, this.pa = new PrerollViewController, this.bi = [], this.ci = null
				}

				function e(t, e) {
					if (0 != e) {
						var i = t[e];
						arraycopy(t, 0, 1, e), t[0] = i
					}
				}

				function i(t, e) {
					if (e != t.length + 1) {
						var i = t[e];
						arraycopy(t, e + 1, e, t.length - e - 1), t[t.length - 1] = i
					}
				}

				function o(t, e) {
					for (var i = 0; i < t.length; i++)
						if (t[i] == e) return i;
					return -1
				}
				return t.prototype.a = function() {
					this.bi = [this.H, this.F, this.Uh, this.Vh, this.Wh, this.Xh, this.Yh, this.Zh, this.xa, this.$h, this._h, this.ai, this.aa, this.ua, this.pa];
					for (var t = 0; t < this.bi.length; t++) this.bi[t].a();
					this.ci = new BackgroundView(BaseViewController.di)
				}, t.prototype.Qa = function(t, e) {
					for (var i = this.bi.length - 1; i >= 0; i--) this.bi[i].Pa(t, e);
					this.bi[0] != this.H && this.bi[0] != this.pa && null != this.ci && this.ci.Pa(t, e)
				}, t.prototype.Ra = function() {
					for (var t = this.bi.length - 1; t >= 0; t--) this.bi[t].Ra();
					null != this.ci && this.ci.Ra()
				}, t.prototype.I = function(t) {
					var i = o(this.bi, t);
					if (!(i < 0)) {
						this.bi[0].ei(), e(this.bi, i), this.fi()
					}
				}, t.prototype.gi = function() {
					this.bi[0].ei();
					do {
						i(this.bi, 0)
					} while (this.bi[0].rc != ViewControllerType.hi);
					this.fi()
				}, t.prototype.fi = function() {
					var t = this.bi[0];
					t.ii(), t.ji(), this.ki()
				}, t.prototype.li = function() {
					return 0 != this.bi.length && (this.bi[0].rc == ViewControllerType.hi && this.aa.mi())
				}, t.prototype.ki = function() {
					this.li() && this.I(this.aa)
				}, t
			}(),
			ScoreTableModel = function() {
				function t() {
					this.ag = [], this.$f = []
				}
				return t.Vg = function(t, e) {
					return {
						bg: t,
						M: e
					}
				}, t.Wg = function(t, e) {
					return {
						_f: t,
						M: e
					}
				}, t
			}(),
			UserManager = function() {
				function t() {
					this.ni = [], this.oi = [], this.pi = [], this.qi = !1, this.ri = e, this.si = {}, this.ti = null
				}
				var e = "guest";
				return t.prototype.a = function() {
					this.vi()
				}, t.prototype.X = function() {
					return this.qi ? this.si.userId : ""
				}, t.prototype.wi = function() {
					return this.qi ? this.si.username : ""
				}, t.prototype.ga = function() {
					return this.qi ? this.si.nickname : ""
				}, t.prototype.xi = function() {
					return this.qi ? this.si.avatarUrl : GUEST_AVATAR_URL
				}, t.prototype.yi = function() {
					return this.qi && this.si.isBuyer
				}, t.prototype.Z = function() {
					return this.qi && this.si.isConsentGiven
				}, t.prototype.zi = function() {
					return this.qi ? this.si.coins : 0
				}, t.prototype.Ai = function() {
					return this.qi ? this.si.level : 1
				}, t.prototype.Bi = function() {
					return this.qi ? this.si.expOnLevel : 0
				}, t.prototype.Ci = function() {
					return this.qi ? this.si.expToNext : 50
				}, t.prototype.Di = function() {
					return this.qi ? this.si.skinId : 0
				}, t.prototype.Ei = function() {
					return this.qi ? this.si.eyesId : 0
				}, t.prototype.Fi = function() {
					return this.qi ? this.si.mouthId : 0
				}, t.prototype.Gi = function() {
					return this.qi ? this.si.glassesId : 0
				}, t.prototype.Hi = function() {
					return this.qi ? this.si.hatId : 0
				}, t.prototype.Ii = function() {
					return this.qi ? this.si.highScore : 0
				}, t.prototype.Ji = function() {
					return this.qi ? this.si.bestSurvivalTimeSec : 0
				}, t.prototype.Ki = function() {
					return this.qi ? this.si.kills : 0
				}, t.prototype.Li = function() {
					return this.qi ? this.si.headShots : 0
				}, t.prototype.Mi = function() {
					return this.qi ? this.si.sessionsPlayed : 0
				}, t.prototype.Ni = function() {
					return this.qi ? this.si.totalPlayTimeSec : 0
				}, t.prototype.Oi = function() {
					return this.qi ? this.si.regDate : {}
				}, t.prototype.V = function(t) {
					this.ni.push(t), t()
				}, t.prototype.Pi = function(t) {
					this.oi.push(t), t()
				}, t.prototype.Qi = function(t) {
					this.pi.push(t)
				}, t.prototype.Ch = function(t, e) {
					var i = this.si.propertyList;
					if (!i) return !1;
					for (var o = 0; o < i.length; o++) {
						var n = i[o];
						if (n.id == t && n.type === e) return !0
					}
					return !1
				}, t.prototype.P = function() {
					return this.qi
				}, t.prototype.ea = function() {
					return this.ri
				}, t.prototype.Q = function(t) {
					var e = this;
					this.qi && this.Ri(function(i) {
						if (i) {
							var o = e.zi(),
								n = e.Ai();
							e.si = i, e.Si();
							var r = e.zi(),
								s = e.Ai();
							s > 1 && s != n && getApp().s.aa.Ti(new LevelUpToasterViewController(s));
							var a = r - o;
							a >= 20 && getApp().s.aa.Ti(new CoinsToasterViewController(a))
						}
						t && t()
					})
				}, t.prototype.Ri = function(t) {
					$.get(GATEWAY_HOST + "/pub/wuid/" + this.ri + "/getUserData", function(e) {
						t(e.user_data)
					})
				}, t.prototype.Ui = function(t, e, i) {
					var o = this;
					$.get(GATEWAY_HOST + "/pub/wuid/" + this.ri + "/buyProperty?id=" + t + "&type=" + e, function(t) {
						1200 == t.code ? o.Q(i) : i()
					}).fail(function() {
						i()
					})
				}, t.prototype.Vi = function() {
					var t = this;
					if (this.Wi(), "undefined" == typeof FB) return void this.Xi();
					FB.getLoginStatus(function(e) {
						if ("connected" === e.status) return void(e.authResponse && e.authResponse.accessToken ? t.Yi("facebook", "fb_" + e.authResponse.accessToken) : t.Xi());
						FB.login(function(e) {
							"connected" === e.status && e.authResponse && e.authResponse.accessToken ? t.Yi("facebook", "fb_" + e.authResponse.accessToken) : t.Xi()
						})
					})
				}, t.prototype.Zi = function() {
					var t = this;
					if (this.Wi(), void 0 === GoogleAuth) return void this.Xi();
					console.log("gsi:l"), GoogleAuth.then(function() {
						if (console.log("gsi:then"), GoogleAuth.isSignedIn.get()) {
							console.log("gsi:sil");
							var e = GoogleAuth.currentUser.get();
							return void t.Yi("google", "gg_" + e.getAuthResponse().id_token)
						}
						GoogleAuth.signIn().then(function(e) {
							return void 0 !== e.error ? (console.log("gsi:e: " + e.error), void t.Xi()) : e.isSignedIn() ? (console.log("gsi:s"), void t.Yi("google", "gg_" + e.getAuthResponse().id_token)) : (console.log("gsi:c"), void t.Xi())
						})
					})
				}, t.prototype.Wi = function() {
					console.log("iSI: " + this.qi);
					var t = this.ri,
						i = this.ti;
					switch (this.qi = !1, this.ri = e, this.si = {}, this.ti = null, setCookie(Cookies.Oe, "", 60), i) {
						case "facebook":
							this.$i();
							break;
						case "google":
							this._i()
					}
					t !== this.ri ? this.aj() : this.Si()
				}, t.prototype.bj = function() {
					console.log("dA"), this.qi && $.get(GATEWAY_HOST + "/pub/wuid/" + this.ri + "/deleteAccount", function(t) {
						1200 === t.code ? console.log("dA: OK") : console.log("dA: NO")
					}).fail(function() {
						console.log("dA: FAIL")
					})
				}, t.prototype.vi = function() {
					console.log("rs");
					var t = getCookie(Cookies.Oe),
						e = this;
					"facebook" == t ? (console.log("rs:fb"), function t() {
						"undefined" != typeof FB ? e.Vi() : setTimeout(t, 100)
					}()) : "google" == t ? (console.log("rs:gg"), function t() {
						void 0 !== GoogleAuth ? e.Zi() : setTimeout(t, 100)
					}()) : (console.log("rs:lo"), this.Wi())
				}, t.prototype.aj = function() {
					for (var t = 0; t < this.ni.length; t++) this.ni[t]();
					this.Si()
				}, t.prototype.Si = function() {
					for (var t = 0; t < this.oi.length; t++) this.oi[t]();
					var e = this.pi;
					this.pi = [];
					for (var i = 0; i < e.length; i++) e[i]()
				}, t.prototype.Yi = function(t, e) {
					var i = this;
					$.get(GATEWAY_HOST + "/pub/wuid/" + e + "/login", function(o) {
						if (o && o.user_data) {
							var n = this.ri;
							i.qi = !0, i.ri = e, i.si = o.user_data, i.ti = t, setCookie(Cookies.Oe, i.ti, 60), n !== e ? i.aj() : i.Si()
						} else i.Xi()
					}).fail(function() {
						i.Xi()
					})
				}, t.prototype.Xi = function() {
					this.Wi()
				}, t.prototype.$i = function() {
					console.log("lo:fb"), FB.logout(function() {})
				}, t.prototype._i = function() {
					console.log("lo:gg"), GoogleAuth.signOut()
				}, t
			}(),
			WMGameBackgroundSprite = function() {
				function t() {
					this.cj = {}, this.cj[r] = [1, .5, .25, .5], this.cj[s] = POGL._b.WHITE, this.cj[a] = [0, 0], this.cj[h] = [0, 0];
					var t = POGL.cc.from(u, c, this.cj);
					this.zf = new POGL.hc(p, t)
				}
				var e = "a1_" + randStr(),
					i = "a2_" + randStr(),
					o = atob("dHJhbnNsYXRpb25NYXRyaXg="),
					n = atob("cHJvamVjdGlvbk1hdHJpeA=="),
					r = "u3_" + randStr(),
					s = "u4_" + randStr(),
					a = "u5_" + randStr(),
					h = "u6_" + randStr(),
					l = "v1_" + randStr(),
					p = (new POGL.gc).addAttribute(e, [-.5, -.5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5, .5], 2).addAttribute(i, [-.5, -.5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5, .5], 2),
					u = atob("cHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7YXR0cmlidXRlIHZlYzIg") + e + atob("O2F0dHJpYnV0ZSB2ZWMyIA==") + i + atob("O3VuaWZvcm0gbWF0MyA=") + o + atob("O3VuaWZvcm0gbWF0MyA=") + n + atob("O3ZhcnlpbmcgdmVjMiA=") + l + atob("O3ZvaWQgbWFpbigpew==") + l + atob("PQ==") + i + atob("O2dsX1Bvc2l0aW9uPXZlYzQoKA==") + n + atob("Kg==") + o + atob("KnZlYzMo") + e + atob("LDEuMCkpLnh5LDAuMCwxLjApO30="),
					c = atob("cHJlY2lzaW9uIGhpZ2hwIGZsb2F0O3ZhcnlpbmcgdmVjMiA=") + l + atob("O3VuaWZvcm0gdmVjNCA=") + r + atob("O3VuaWZvcm0gc2FtcGxlcjJEIA==") + s + atob("O3VuaWZvcm0gdmVjMiA=") + a + atob("O3VuaWZvcm0gdmVjMiA=") + h + atob("O3ZvaWQgbWFpbigpe3ZlYzIgY29vcmQ9") + l + atob("Kg==") + a + atob("Kw==") + h + atob("O3ZlYzQgdl9jb2xvcl9taXg9") + r + atob("O2dsX0ZyYWdDb2xvcj10ZXh0dXJlMkQo") + s + atob("LGNvb3JkKSowLjMrdl9jb2xvcl9taXguYSp2ZWM0KHZfY29sb3JfbWl4LnJnYiwwLjApO30=");
				return t.prototype.Hf = function(t, e, i, o) {
					var n = this.cj[r];
					n[0] = t, n[1] = e, n[2] = i, n[3] = o
				}, t.prototype.Bf = function(t) {
					this.cj[s] = t
				}, t.prototype.Te = function(t, e, i, o) {
					this.zf.position.x = t, this.zf.position.y = e, this.zf.scale.x = i, this.zf.scale.y = o;
					var n = this.cj[a];
					n[0] = .2520615384615385 * i, n[1] = .4357063736263738 * o;
					var r = this.cj[h];
					r[0] = .2520615384615385 * t, r[1] = .4357063736263738 * e
				}, t
			}(),
			WMSprite = function() {
				function t() {
					this.jh = new POGL.ec, this.dj = 0, this.ej = 0
				}
				return t.prototype.kh = function(t) {
					this.jh.texture = t.Hc, this.jh.anchor.set(t.Lh, t.Mh), this.dj = t.Nh, this.ej = t.Oh
				}, t.prototype.oh = function(t) {
					this.jh.width = t * this.dj, this.jh.height = t * this.ej
				}, t.prototype.fj = function(t) {
					this.jh.rotation = t
				}, t.prototype.nh = function(t, e) {
					this.jh.position.set(t, e)
				}, t.prototype.Mg = function(t) {
					this.jh.visible = t
				}, t.prototype.gj = function() {
					return this.jh.visible
				}, t.prototype.qh = function(t) {
					this.jh.alpha = t
				}, t.prototype.Mf = function() {
					return this.jh
				}, t.prototype.ih = function() {
					pixijs_removeFromParent(this.jh)
				}, t
			}(),
			Worm = function() {
				function t(t) {
					this.fb = t, this.Mb = new Worm.Config, this.Hb = !1, this.Ib = !0, this.hj = !1, this.Db = 0, this.ij = 0, this.Jb = 1, this.jj = 0, this.M = 0, this.Ff = {}, this.kj = 0, this.lj = new Float32Array(2 * e), this.mj = new Float32Array(2 * e), this.nj = new Float32Array(2 * e), this.oj = null, this.pj = null, this.qj = null, this.Tb()
				}
				var e = 200;
				return t.prototype.Kb = function() {
					null != this.pj && pixijs_removeFromParent(this.pj.Rf), null != this.qj && pixijs_removeFromParent(this.qj)
				}, t.prototype.Tb = function() {
					this.Ig(.25), this.Mb.ad = "", this.Ib = !0, this.Ff = {}, this.Mg(!1)
				}, t.prototype.Fg = function(t) {
					this.Mb = t, this.rj(this.Hb)
				}, t.prototype.Mg = function(t) {
					var e = this.Hb;
					this.Hb = t, this.rj(e)
				}, t.prototype.Ig = function(t) {
					this.M = 50 * t;
					var i = t;
					t > this.fb.cf && (i = Math.atan((t - this.fb.cf) / this.fb.df) * this.fb.df + this.fb.cf);
					var o = Math.sqrt(4 * Math.pow(5 * i, .707106781186548) + 25),
						n = Math.min(e, Math.max(3, 5 * (o - 5) + 1)),
						r = this.kj;
					if (this.Db = .025 * (5 + .9 * o), this.kj = Math.floor(n), this.ij = n - this.kj, r > 0 && r < this.kj)
						for (var s = this.lj[2 * r - 2], a = this.lj[2 * r - 1], h = this.mj[2 * r - 2], l = this.mj[2 * r - 1], p = this.nj[2 * r - 2], u = this.nj[2 * r - 1], c = r; c < this.kj; c++) this.lj[2 * c] = s, this.lj[2 * c + 1] = a, this.mj[2 * c] = h, this.mj[2 * c + 1] = l, this.nj[2 * c] = p, this.nj[2 * c + 1] = u
				}, t.prototype.Lg = function(t, e) {
					this.kj = e;
					for (var i = 0; i < this.kj; i++) this.lj[2 * i] = this.mj[2 * i] = this.nj[2 * i] = t(), this.lj[2 * i + 1] = this.mj[2 * i + 1] = this.nj[2 * i + 1] = t()
				}, t.prototype.Kg = function(t, e, i) {
					this.hj = i;
					for (var o = 0; o < this.kj; o++) this.lj[2 * o] = this.mj[2 * o], this.lj[2 * o + 1] = this.mj[2 * o + 1];
					var n = t - this.mj[0],
						r = e - this.mj[1];
					this.sj(n, r, this.kj, this.mj)
				}, t.prototype.sj = function(t, e, i, o) {
					var n = Math.hypot(t, e);
					if (!(n <= 0)) {
						var r = o[0],
							s = void 0;
						o[0] += t;
						var a = o[1],
							h = void 0;
						o[1] += e;
						for (var l = this.Db / (this.Db + n), p = 1 - 2 * l, u = 1, c = i - 1; u < c; u++) s = o[2 * u], o[2 * u] = o[2 * u - 2] * p + (s + r) * l, r = s, h = o[2 * u + 1], o[2 * u + 1] = o[2 * u - 1] * p + (h + a) * l, a = h;
						l = this.ij * this.Db / (this.ij * this.Db + n), p = 1 - 2 * l, o[2 * i - 2] = o[2 * i - 4] * p + (o[2 * i - 2] + r) * l, o[2 * i - 1] = o[2 * i - 3] * p + (o[2 * i - 1] + a) * l
					}
				}, t.prototype.Gf = function() {
					return {
						x: this.nj[0],
						y: this.nj[1]
					}
				}, t.prototype.Hg = function(t, e) {
					for (var i = 1e6, o = t, n = e, r = 0; r < this.kj; r++) {
						var s = this.nj[2 * r],
							a = this.nj[2 * r + 1],
							h = Math.hypot(t - s, e - a);
						h < i && (i = h, o = s, n = a)
					}
					return {
						x: o,
						y: n,
						distance: i
					}
				}, t.prototype.vb = function(t) {
					this.oj = t
				}, t.prototype.Fb = function(t, e) {
					this.Jb = timeDeltaIncrement(this.Jb, this.Ib ? this.hj ? .9 + .1 * Math.cos(t / 400 * Math.PI) : 1 : 0, e, 1 / 800), this.jj = timeDeltaIncrement(this.jj, this.Ib ? this.hj ? 1 : 0 : 1, e, .0025), null != this.pj && (this.pj.Rf.alpha = this.Jb), null != this.qj && (this.qj.alpha = this.Jb)
				}, t.prototype.Gb = function(t, e, i, o) {
					if (this.Hb && this.Ib)
						for (var n = Math.pow(.11112, e / 95), r = 0; r < this.kj; r++) {
							var s = lerp(this.lj[2 * r], this.mj[2 * r], i),
								a = lerp(this.lj[2 * r + 1], this.mj[2 * r + 1], i);
							this.nj[2 * r] = lerp(s, this.nj[2 * r], n), this.nj[2 * r + 1] = lerp(a, this.nj[2 * r + 1], n)
						}
					null != this.pj && this.Hb && this.pj.tj(this, t, e, o), null != this.qj && (this.qj.If.x = this.nj[0], this.qj.If.y = this.nj[1] - 3 * this.Db)
				}, t.prototype.rj = function(t) {
					this.Hb ? t || this.uj() : (null != this.pj && pixijs_removeFromParent(this.pj.Rf), null != this.qj && pixijs_removeFromParent(this.qj))
				}, t.prototype.uj = function() {
					var t = getApp();
					null == this.pj ? this.pj = new WormSpriteTree : pixijs_removeFromParent(this.pj.Rf), this.pj.hh(t.o.fb.af, t.p.Dc().ed(this.Mb.cg), t.p.Dc().dd(this.Mb.dg), t.p.Dc().fd(this.Mb.Bg), t.p.Dc().gd(this.Mb.Cg), t.p.Dc().hd(this.Mb.Dg), t.p.Dc().jd(this.Mb.Eg)), null == this.qj ? (this.qj = new WormLabelNode(""), this.qj.style.fontFamily = "PTSans", this.qj.anchor.set(.5)) : pixijs_removeFromParent(this.qj), this.qj.style.fontSize = 14, this.qj.style.fill = t.p.Dc().dd(this.Mb.dg)._c, this.qj.text = this.Mb.ad, this.oj.Qf(this.Mb.Lb, this.pj, this.qj)
				}, t.Config = function() {
					function t() {
						this.Lb = 0, this.cg = GameParams.TEAM_DEFAULT, this.dg = 0, this.Bg = 0, this.Cg = 0, this.Dg = 0, this.Eg = 0, this.ad = ""
					}
					return t
				}(), t
			}(),
			WormLabelNode = function() {
				return extend(POGL.fc, function(t, e, i) {
					POGL.fc.call(this, t, e, i), this.If = {
						x: 0,
						y: 0
					}
				})
			}(),
			WormSpriteTree = function() {
				function t() {
					this.Rf = new POGL.Zb, this.Rf.sortableChildren = !0, this.vj = new v, this.vj.zIndex = e * (2 * (i + 1) + 1 + 3), this.wj = 0, this.xj = new Array(i), this.xj[0] = this.yj(0, new WMSprite, new WMSprite);
					for (var t = 1; t < i; t++) this.xj[t] = this.yj(t, new WMSprite, new WMSprite);
					this.zj = 0, this.Aj = 0, this.Bj = 0
				}
				var e = .001,
					i = 797,
					o = .1 * Math.PI,
					n = -.06640625,
					r = .84375,
					s = .2578125,
					a = -.03515625,
					h = -.0625,
					l = .5625,
					p = 3 * n + r,
					u = s - 3 * n,
					c = n + a,
					f = .375,
					d = .75,
					g = h + h,
					w = 3 * a + s,
					y = r - 3 * a,
					k = a + n;
				t.prototype.yj = function(t, o, n) {
					var r = new b(o, n);
					return o.jh.zIndex = e * (2 * (i - t) + 1 + 3), n.jh.zIndex = e * (2 * (i - t) - 2 + 3), r
				}, t.prototype.hh = function(t, e, i, o, n, r, s) {
					var a = i.Zc,
						h = t == GameMode._e ? e.bd.$c : i.$c;
					if (a.length > 0 && h.length > 0)
						for (var l = 0; l < this.xj.length; l++) this.xj[l].Nf.kh(a[l % a.length]), this.xj[l].Pf.kh(h[l % h.length]);
					this.vj.hh(o, n, r, s)
				};
				var v = function() {
					var t = extend(POGL.Zb, function() {
						POGL.Zb.call(this), this.sortableChildren = !0, this.Cj = [], this.Dj = [], this.Ej = [], this.Fj = [], this.Gj = new POGL.Zb, this.Hj = [];
						for (var t = 0; t < 4; t++) {
							var e = new WMSprite;
							e.kh(getApp().q.Ph), this.Gj.addChild(e.jh), this.Hj.push(e)
						}
						this.Gj.zIndex = .0011, this.addChild(this.Gj), this.Ij(), this.Jj = new WMSprite, this.Jj.kh(getApp().q.Qh), this.Jj.jh.zIndex = .001, this.addChild(this.Jj.jh), this.Kj()
					});
					return t.prototype.hh = function(t, e, i, o) {
						this.Lj(.002, this.Cj, t.Zc), this.Lj(.003, this.Dj, e.Zc), this.Lj(.004, this.Fj, o.Zc), this.Lj(.005, this.Ej, i.Zc)
					}, t.prototype.Lj = function(t, e, i) {
						for (; i.length > e.length;) {
							var o = new WMSprite;
							e.push(o), this.addChild(o.Mf())
						}
						for (; i.length < e.length;) {
							e.pop().ih()
						}
						for (var n = t, r = 0; r < i.length; r++) {
							n += 1e-4;
							var s = e[r];
							s.kh(i[r]), s.jh.zIndex = n
						}
					}, t.prototype.mh = function(t, e, i, o) {
						this.visible = !0, this.position.set(t, e), this.rotation = o;
						for (var n = 0; n < this.Cj.length; n++) this.Cj[n].oh(i);
						for (var r = 0; r < this.Dj.length; r++) this.Dj[r].oh(i);
						for (var s = 0; s < this.Ej.length; s++) this.Ej[s].oh(i);
						for (var a = 0; a < this.Fj.length; a++) this.Fj[a].oh(i)
					}, t.prototype.lh = function() {
						this.visible = !1
					}, t.prototype.Mj = function(t, e, i, o) {
						this.Gj.visible = !0;
						for (var n = i / 1e3, r = 1 / this.Hj.length, s = 0; s < this.Hj.length; s++) {
							var a = 1 - (n + r * s) % 1;
							this.Hj[s].jh.alpha = 1 - a, this.Hj[s].oh(e * (.5 + 4.5 * a))
						}
					}, t.prototype.Ij = function() {
						this.Gj.visible = !1
					}, t.prototype.Nj = function(t, e, i, o) {
						this.Jj.jh.visible = !0, this.Jj.jh.alpha = timeDeltaIncrement(this.Jj.jh.alpha, t.hj ? .9 : .2, o, .0025), this.Jj.oh(e)
					}, t.prototype.Kj = function() {
						this.Jj.jh.visible = !1
					}, t
				}();
				t.prototype.Oj = function(t) {
					return this.Aj + this.Bj * Math.sin(t * o - this.zj)
				}, t.prototype.tj = function(t, e, i, o) {
					var v = 2 * t.Db,
						m = t.nj,
						C = t.kj,
						P = 4 * C - 3,
						j = P;
					this.zj = e / 400 * Math.PI, this.Aj = 1.5 * v, this.Bj = .15 * v * t.jj;
					var V = void 0,
						B = void 0,
						A = void 0,
						M = void 0,
						x = void 0,
						O = void 0,
						I = void 0,
						T = void 0;
					if (B = m[0], O = m[1], o(B, O)) {
						A = m[2], I = m[3], M = m[4], T = m[5];
						var L = Math.atan2(T + 2 * O - 3 * I, M + 2 * B - 3 * A);
						this.vj.mh(B, O, v, L), this.xj[0].mh(B, O, v, this.Oj(0), L), this.xj[1].mh(p * B + u * A + c * M, p * O + u * I + c * T, v, this.Oj(1), b.angleBetween(this.xj[0], this.xj[2])), this.xj[2].mh(f * B + d * A + g * M, f * O + d * I + g * T, v, this.Oj(2), b.angleBetween(this.xj[1], this.xj[3])), this.xj[3].mh(w * B + y * A + k * M, w * O + y * I + k * T, v, this.Oj(3), b.angleBetween(this.xj[2], this.xj[4]))
					} else this.vj.lh(), this.xj[0].lh(), this.xj[1].lh(), this.xj[2].lh(), this.xj[3].lh();
					for (var S = 4, _ = 2, G = 2 * C - 4; _ < G; _ += 2) B = m[_], O = m[_ + 1], o(B, O) ? (V = m[_ - 2], x = m[_ - 1], A = m[_ + 2], I = m[_ + 3], M = m[_ + 4], T = m[_ + 5], this.xj[S].mh(B, O, v, this.Oj(S), b.angleBetween(this.xj[S - 1], this.xj[S + 1])), S++, this.xj[S].mh(n * V + r * B + s * A + a * M, n * x + r * O + s * I + a * T, v, this.Oj(S), b.angleBetween(this.xj[S - 1], this.xj[S + 1])), S++, this.xj[S].mh(h * V + l * B + l * A + h * M, h * x + l * O + l * I + h * T, v, this.Oj(S), b.angleBetween(this.xj[S - 1], this.xj[S + 1])), S++, this.xj[S].mh(a * V + s * B + r * A + n * M, a * x + s * O + r * I + n * T, v, this.Oj(S), b.angleBetween(this.xj[S - 1], this.xj[S + 1])), S++) : (this.xj[S].lh(), S++, this.xj[S].lh(), S++, this.xj[S].lh(), S++, this.xj[S].lh(), S++);
					for (B = m[2 * C - 4], O = m[2 * C - 3], o(B, O) ? (V = m[2 * C - 6], x = m[2 * C - 5], A = m[2 * C - 2], I = m[2 * C - 1], this.xj[P - 5].mh(B, O, v, this.Oj(P - 5), b.angleBetween(this.xj[P - 6], this.xj[P - 4])), this.xj[P - 4].mh(k * V + y * B + w * A, k * x + y * O + w * I, v, this.Oj(P - 4), b.angleBetween(this.xj[P - 5], this.xj[P - 3])), this.xj[P - 3].mh(g * V + d * B + f * A, g * x + d * O + f * I, v, this.Oj(P - 3), b.angleBetween(this.xj[P - 4], this.xj[P - 2])), this.xj[P - 2].mh(c * V + u * B + p * A, c * x + u * O + p * I, v, this.Oj(P - 2), b.angleBetween(this.xj[P - 3], this.xj[P - 1])), this.xj[P - 1].mh(A, I, v, this.Oj(P - 1), b.angleBetween(this.xj[P - 2], this.xj[P - 1]))) : (this.xj[P - 5].lh(), this.xj[P - 4].lh(), this.xj[P - 3].lh(), this.xj[P - 2].lh(), this.xj[P - 1].lh()), 0 == this.wj && j > 0 && this.Rf.addChild(this.vj), this.wj > 0 && 0 == j && pixijs_removeFromParent(this.vj); this.wj < j;) this.Rf.addChild(this.xj[this.wj].Nf.Mf()), this.Rf.addChild(this.xj[this.wj].Pf.Mf()), this.wj += 1;
					for (; this.wj > j;) this.wj -= 1, this.xj[this.wj].Pf.ih(), this.xj[this.wj].Nf.ih();
					var D = t.Ff[Ability.MAGNETIC_TYPE];
					this.xj[0].gj() && null != D && D.sc ? this.vj.Mj(t, v, e, i) : this.vj.Ij();
					var N = t.Ff[Ability.VELOCITY_TYPE];
					this.xj[0].gj() && null != N && N.sc ? this.vj.Nj(t, e, i) : this.vj.Kj()
				};
				var b = function() {
					function t(t, e) {
						this.Nf = t, this.Nf.Mg(!1), this.Pf = e, this.Pf.Mg(!1)
					}
					return t.prototype.mh = function(t, e, i, o, n) {
						this.Nf.Mg(!0), this.Nf.nh(t, e), this.Nf.oh(i), this.Nf.fj(n), this.Pf.Mg(!0), this.Pf.nh(t, e), this.Pf.oh(o), this.Pf.fj(n)
					}, t.prototype.lh = function() {
						this.Nf.Mg(!1), this.Pf.Mg(!1)
					}, t.prototype.gj = function() {
						return this.Nf.gj()
					}, t.angleBetween = function(t, e) {
						return Math.atan2(t.Nf.jh.position.y - e.Nf.jh.position.y, t.Nf.jh.position.x - e.Nf.jh.position.x)
					}, t
				}();
				return t
			}(),
			WormView = function() {
				function t(t) {
					this.se = t, this.te = t.get()[0], this.ue = new POGL.ac({
						view: this.te,
						transparent: !0
					}), this.sc = !1, this.Pj = new WormSpriteTree, this.Pj.Rf.addChild(this.Pj.vj), this.Qj = 0, this.Rj = 0, this.Ng = 1, this.rh = 0, this.sh = 0, this.th = 0, this.uh = 0, this.vh = 0, this.Sj = !1, this.Tj = !1, this.Uj = !1, this.Vj = !1, this.Wj = !1, this.Xj = !1, this.Yj = !1, this.Zj = !1, this.$j = !1, this._j = !1, this.Ra(), this.Fb();
					var e = this;
					getApp().p.ca(function() {
						getApp().p.W() && e.Fb()
					})
				}
				return t.prototype.Fb = function() {
					var t = getApp();
					this.Pj.hh(GameMode.$e, null, t.p.Dc().dd(this.rh), t.p.Dc().fd(this.sh), t.p.Dc().gd(this.th), t.p.Dc().hd(this.uh), t.p.Dc().jd(this.vh))
				}, t.prototype.Le = function(t) {
					this.sc = t
				}, t.prototype.ak = function(t, e, i) {
					this.rh = t, this.Sj = e, this.Xj = i, this.Fb()
				}, t.prototype.bk = function(t, e, i) {
					this.sh = t, this.Tj = e, this.Yj = i, this.Fb()
				}, t.prototype.ck = function(t, e, i) {
					this.th = t, this.Uj = e, this.Zj = i, this.Fb()
				}, t.prototype.dk = function(t, e, i) {
					this.uh = t, this.Vj = e, this.$j = i, this.Fb()
				}, t.prototype.ek = function(t, e, i) {
					this.vh = t, this.Wj = e, this._j = i, this.Fb()
				}, t.prototype.Ra = function() {
					var t = window.devicePixelRatio ? window.devicePixelRatio : 1;
					this.Qj = this.se.width(), this.Rj = this.se.height(), this.ue.resize(this.Qj, this.Rj), this.ue.resolution = t, this.te.width = t * this.Qj, this.te.height = t * this.Rj, this.Ng = this.Rj / 4;
					var e = minmax(1, this.Pj.xj.length, 2 * Math.floor(this.Qj / this.Ng) - 5);
					if (this.Pj.wj != e) {
						for (var i = e; i < this.Pj.xj.length; i++) this.Pj.xj[i].lh();
						for (; this.Pj.wj < e;) this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Nf.Mf()), this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Pf.Mf()), this.Pj.wj += 1;
						for (; this.Pj.wj > e;) this.Pj.wj -= 1, this.Pj.xj[this.Pj.wj].Pf.ih(), this.Pj.xj[this.Pj.wj].Nf.ih()
					}
				}, t.prototype.Pa = function() {
					if (this.sc) {
						if (getApp().p.W) {
							for (var t = Date.now(), e = t / 200, i = Math.sin(e), o = this.Ng, n = 1.5 * this.Ng, r = this.Qj - .5 * (this.Qj - .5 * o * (this.Pj.wj - 1)), s = .5 * this.Rj, a = 0, h = 0, l = -1; l < this.Pj.wj; l++) {
								var p = l,
									u = Math.cos(1 * p / 12 * Math.PI - e) * (1 - Math.pow(16, -1 * p / 12));
								if (l >= 0) {
									var c = r + -.5 * o * p,
										f = s + .5 * o * u,
										d = 2 * o,
										g = 2 * n,
										w = Math.atan2(h - u, p - a);
									0 == l && this.Pj.vj.mh(c, f, d, w), this.Pj.xj[l].mh(c, f, d, g, w);
									var y = this.Sj ? this.Xj ? .4 + .2 * i : .9 + .1 * i : this.Xj ? .4 : 1;
									this.Pj.xj[l].Nf.qh(y), this.Pj.xj[l].Pf.qh(y)
								}
								a = p, h = u
							}
							for (var k = 0; k < this.Pj.vj.Cj.length; k++) {
								var v = this.Tj ? this.Yj ? .4 + .2 * i : .9 + .1 * i : this.Yj ? .4 : 1;
								this.Pj.vj.Cj[k].qh(v)
							}
							for (var b = 0; b < this.Pj.vj.Dj.length; b++) {
								var m = this.Uj ? this.Zj ? .4 + .2 * i : .9 + .1 * i : this.Zj ? .4 : 1;
								this.Pj.vj.Dj[b].qh(m)
							}
							for (var C = 0; C < this.Pj.vj.Ej.length; C++) {
								var P = this.Vj ? this.$j ? .4 + .2 * i : .9 + .1 * i : this.$j ? .4 : 1;
								this.Pj.vj.Ej[C].qh(P)
							}
							for (var j = 0; j < this.Pj.vj.Fj.length; j++) {
								var V = this.Wj ? this._j ? .4 + .2 * i : .9 + .1 * i : this._j ? .4 : 1;
								this.Pj.vj.Fj[j].qh(V)
							}
							this.ue.render(this.Pj.Rf)
						}
					}
				}, t
			}(),
			BaseViewController = function() {
				function t(t) {
					this.rc = t
				}
				return t.fk = $("#game-view"), t.gk = $("#results-view"), t.hk = $("#main-menu-view"), t.ik = $("#popup-view"), t.jk = $("#toaster-view"), t.kk = $("#loading-view"), t.lk = $("#stretch-box"), t.mk = $("#game-canvas"), t.di = $("#background-canvas"), t.nk = $("#social-buttons"), t.ok = $("#markup-wrap"), t.prototype.a = function() {}, t.prototype.ii = function() {}, t.prototype.ji = function() {}, t.prototype.ei = function() {}, t.prototype.Ra = function() {}, t.prototype.Pa = function(t, e) {}, t
			}(),
			GameViewController = function() {
				function t(t, e, i, o, n, r) {
					var s = '<div><svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 456 456" xml:space="preserve"><rect x="0" y="0" width="456" height="456" fill="#F7941D"/><path d="M242.7 456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9 35.6-79.5 79.5-79.5h62v64.6h-44.4c-13.9 0-25.3 11.3-25.3 25.3v50h68.5l-9.5 71.9h-59.1V456z" fill="#fff"/></svg><span>' + t + "</span></div>",
						a = $(s);
					return a.click(function() {
						"undefined" != typeof FB && void 0 !== FB.ui && FB.ui({
							method: "feed",
							display: "popup",
							link: e,
							name: i,
							caption: o,
							description: n,
							picture: r
						}, function() {})
					}), a
				}
				var e = $("#final-caption"),
					i = $("#final-continue"),
					o = $("#congrats-bg"),
					n = $("#unl6wj4czdl84o9b"),
					r = ($("#congrats"), $("#final-share-fb")),
					s = $("#final-message"),
					a = $("#final-score"),
					h = $("#final-place"),
					l = $("#final-board"),
					p = extend(BaseViewController, function() {
						BaseViewController.call(this, ViewControllerType.pk);
						var t = this,
							o = getApp(),
							n = BaseViewController.mk.get()[0];
						console.log("sSE=" + env.qk), r.toggle(env.qk), e.text(i18n("index.game.result.title")), i.text(i18n("index.game.result.continue")), i.click(function() {
							o.r.Cd(), o.f.Ma.c(), o.r.G(AudioManager.AudioState.F), o.s.I(o.s.F)
						}), $("html").keydown(function(e) {
							32 == e.keyCode && (t.rk = !0)
						}).keyup(function(e) {
							32 == e.keyCode && (t.rk = !1)
						}), n.addEventListener("touchmove", function(e) {
							(e = e || window.event) && (e = e.touches[0], void 0 !== e.clientX ? t.sk = Math.atan2(e.clientY - .5 * n.offsetHeight, e.clientX - .5 * n.offsetWidth) : t.sk = Math.atan2(e.pageY - .5 * n.offsetHeight, e.pageX - .5 * n.offsetWidth))
						}, !0), n.addEventListener("touchstart", function(e) {
							(e = e || window.event) && (t.rk = e.touches.length >= 2), e.preventDefault()
						}, !0), n.addEventListener("touchend", function(e) {
							(e = e || window.event) && (t.rk = e.touches.length >= 2)
						}, !0), n.addEventListener("mousemove", function(e) {
							(e = e || window.event && void 0 !== e.clientX) && (t.sk = Math.atan2(e.clientY - .5 * n.offsetHeight, e.clientX - .5 * n.offsetWidth))
						}, !0), n.addEventListener("mousedown", function(e) {
							t.rk = !0
						}, !0), n.addEventListener("mouseup", function(e) {
							t.rk = !1
						}, !0), this.wb = new GameView(BaseViewController.mk), this.cb = u.J, this.sk = 0, this.rk = !1
					});
				p.prototype.a = function() {}, p.prototype.ii = function() {
					this.cb == u.J ? (BaseViewController.fk.stop(), BaseViewController.fk.fadeIn(500), BaseViewController.gk.stop(), BaseViewController.gk.fadeOut(1), BaseViewController.hk.stop(), BaseViewController.hk.fadeOut(50), BaseViewController.ik.stop(), BaseViewController.ik.fadeOut(50), BaseViewController.jk.stop(), BaseViewController.jk.fadeOut(50), BaseViewController.kk.stop(), BaseViewController.kk.fadeOut(50), BaseViewController.lk.stop(), BaseViewController.lk.fadeOut(1), BaseViewController.di.stop(), BaseViewController.di.fadeOut(50), BackgroundView.Le(!1), BaseViewController.nk.stop(), BaseViewController.nk.fadeOut(50), BaseViewController.ok.stop(), BaseViewController.ok.fadeOut(50)) : (BaseViewController.fk.stop(), BaseViewController.fk.fadeIn(500), BaseViewController.gk.stop(), BaseViewController.gk.fadeIn(500), BaseViewController.hk.stop(), BaseViewController.hk.fadeOut(50), BaseViewController.ik.stop(), BaseViewController.ik.fadeOut(50), BaseViewController.jk.stop(), BaseViewController.jk.fadeOut(50), BaseViewController.kk.stop(), BaseViewController.kk.fadeOut(50), BaseViewController.lk.stop(), BaseViewController.lk.fadeOut(1), BaseViewController.di.stop(), BaseViewController.di.fadeOut(50), BackgroundView.Le(!1), BaseViewController.nk.stop(), BaseViewController.nk.fadeOut(50), BaseViewController.ok.stop(), BaseViewController.ok.fadeOut(50))
				}, p.prototype.J = function() {
					return this.cb = u.J, this
				}, p.prototype.Fa = function() {
					console.log("re");
					return o.hide(), setTimeout(function() {
						console.log("fi_bg"), o.fadeIn(500)
					}, 3e3), n.hide(), setTimeout(function() {
						console.log("fi_aw"), n.fadeIn(500)
					}, 500), this.cb = u.Fa, this
				}, p.prototype.ji = function() {
					this.rk = !1, this.wb.Ra(), this.cb == u.Fa && getApp().r.Gd()
				}, p.prototype.Ra = function() {
					this.wb.Ra()
				}, p.prototype.Pa = function(t, e) {
					this.wb.Pa(t, e)
				}, p.prototype.Da = function(e, i, o) {
					var n = void 0,
						p = void 0,
						u = void 0;
					if (i >= 1 && i <= 10 ? (n = i18n("index.game.result.place.i" + i), p = i18n("index.game.result.placeInBoard"), u = i18n("index.game.social.shareResult.messGood").replace("{0}", o).replace("{1}", e).replace("{2}", n)) : (n = "", p = i18n("index.game.result.tryHit"), u = i18n("index.game.social.shareResult.messNorm").replace("{0}", o).replace("{1}", e)), s.html(i18n("index.game.result.your")), a.html(e), h.html(n), l.html(p), env.qk) {
						var c = i18n("index.game.result.share");
						i18n("index.game.social.shareResult.caption");
						r.empty().append(t(c, "https://wormate.io", "wormate.io", u, u, "https://wormate.io/images/og-share-img-new.jpg"))
					}
				}, p.prototype.T = function() {
					return this.sk
				}, p.prototype.U = function() {
					return this.rk
				};
				var u = {
					J: 0,
					Fa: 1
				};
				return p
			}(),
			LoadingViewController = function() {
				var t = $("#loading-worm-a"),
					e = $("#loading-worm-b"),
					i = $("#loading-worm-c"),
					o = ["100% 100%", "100% 200%", "200% 100%", "200% 200%"],
					n = extend(BaseViewController, function() {
						BaseViewController.call(this, ViewControllerType.pk)
					});
				return n.prototype.a = function() {}, n.prototype.ii = function() {
					BaseViewController.fk.stop(), BaseViewController.fk.fadeOut(50), BaseViewController.gk.stop(), BaseViewController.gk.fadeOut(50), BaseViewController.hk.stop(), BaseViewController.hk.fadeOut(50), BaseViewController.ik.stop(), BaseViewController.ik.fadeOut(50), BaseViewController.jk.stop(), BaseViewController.jk.fadeOut(50), BaseViewController.kk.stop(), BaseViewController.kk.fadeIn(500), BaseViewController.lk.stop(), BaseViewController.lk.fadeIn(1), BaseViewController.di.stop(), BaseViewController.di.fadeIn(500), BackgroundView.Le(!0), BaseViewController.nk.stop(), BaseViewController.nk.fadeOut(50), BaseViewController.ok.stop(), BaseViewController.ok.fadeOut(50)
				}, n.prototype.ji = function() {
					this.tk()
				}, n.prototype.tk = function() {
					t.css("background-position", "100% 200%");
					for (var n = 0; n < o.length; n++) {
						var r = Math.floor(Math.random() * o.length),
							s = o[n];
						o[n] = o[r], o[r] = s
					}
					t.css("background-position", o[0]), e.css("background-position", o[1]), i.css("background-position", o[2])
				}, n
			}(),
			MainMenuViewController = function() {
				var t = ($("#mm-event-text"), $("#mm-skin-canv")),
					e = $("#mm-skin-prev"),
					i = $("#mm-skin-next"),
					o = $("#mm-skin-over"),
					n = $("#mm-skin-over-button-list"),
					r = $("#mm-params-nickname"),
					s = $("#mm-params-game-mode"),
					a = $("#mm-action-buttons"),
					h = $("#mm-action-play"),
					l = $("#mm-action-guest"),
					p = $("#mm-action-login"),
					u = $("#mm-player-info"),
					c = $("#mm-store"),
					f = $("#mm-leaders"),
					d = $("#mm-settings"),
					g = $("#mm-coins-box"),
					w = $("#mm-player-avatar"),
					y = $("#mm-player-username"),
					k = $("#mm-coins-val"),
					v = $("#mm-player-exp-bar"),
					b = $("#mm-player-exp-val"),
					m = $("#mm-player-level"),
					C = extend(BaseViewController, function() {
						BaseViewController.call(this, ViewControllerType.hi);
						var o = getApp();
						this.uk = new WormView(t), s.click(function() {
							o.r.Cd()
						}), t.click(function() {
							o.u.P() && (o.r.Cd(), o.s.I(o.s.$h))
						}), e.click(function() {
							o.r.Cd(), o.t.Ah()
						}), i.click(function() {
							o.r.Cd(), o.t.zh()
						}), r.keypress(function(t) {
							13 == t.keyCode && o.na()
						}), h.click(function() {
							o.r.Cd(), o.na()
						}), l.click(function() {
							o.r.Cd(), o.na()
						}), p.click(function() {
							o.r.Cd(), o.s.I(o.s.Zh)
						}), d.click(function() {
							o.r.Cd(), o.s.I(o.s.xa)
						}), u.click(function() {
							o.u.P() && (o.r.Cd(), o.s.I(o.s.Yh))
						}), f.click(function() {
							o.u.P() && (o.r.Cd(), o.s.I(o.s.Xh))
						}), c.click(function() {
							o.u.P() && (o.r.Cd(), o.s.I(o.s._h))
						}), g.click(function() {
							o.u.P() && (o.r.Cd(), o.s.I(o.s.Wh))
						}), this.vk(), this.wk();
						var n = getCookie(Cookies.va);
						"ARENA" != n && "TEAM2" != n && (n = "ARENA"), s.val(n), console.log("Load GM: " + n)
					});
				return C.prototype.a = function() {
					var t = getApp(),
						e = this;
					t.u.V(function() {
						t.s.F.xk()
					}), t.u.Pi(function() {
						t.u.P() ? (t.t.Bh(t.u.Di(), PropertyType.ia), t.t.Bh(t.u.Ei(), PropertyType.ja), t.t.Bh(t.u.Fi(), PropertyType.ka), t.t.Bh(t.u.Gi(), PropertyType.la), t.t.Bh(t.u.Hi(), PropertyType.ma)) : (t.t.Bh(t.Ga(), PropertyType.ia), t.t.Bh(0, PropertyType.ja), t.t.Bh(0, PropertyType.ka), t.t.Bh(0, PropertyType.la), t.t.Bh(0, PropertyType.ma))
					}), t.u.Pi(function() {
						h.toggle(t.u.P()), p.toggle(!t.u.P()), l.toggle(!t.u.P()), f.toggle(t.u.P()), c.toggle(t.u.P()), g.toggle(t.u.P()), t.u.P() ? (o.hide(), y.html(t.u.wi()), w.attr("src", t.u.xi()), k.html(t.u.zi()), v.width(100 * t.u.Bi() / t.u.Ci() + "%"), b.html(t.u.Bi() + " / " + t.u.Ci()), m.html(t.u.Ai()), r.val(t.u.ga())) : (o.toggle(env.qk && !t.Ha()), y.html(y.data("guest")), w.attr("src", GUEST_AVATAR_URL), k.html("10"), v.width("0"), b.html(""), m.html(1), r.val(getCookie(Cookies.Aa)))
					}), t.t.xh(function() {
						e.uk.ak(t.t.ha(PropertyType.ia), !1, !1), e.uk.bk(t.t.ha(PropertyType.ja), !1, !1), e.uk.ck(t.t.ha(PropertyType.ka), !1, !1), e.uk.dk(t.t.ha(PropertyType.la), !1, !1), e.uk.ek(t.t.ha(PropertyType.ma), !1, !1)
					})
				}, C.prototype.ii = function() {
					BaseViewController.fk.stop(), BaseViewController.fk.fadeOut(50), BaseViewController.gk.stop(), BaseViewController.gk.fadeOut(50), BaseViewController.hk.stop(), BaseViewController.hk.fadeIn(500), BaseViewController.ik.stop(), BaseViewController.ik.fadeOut(50), BaseViewController.jk.stop(), BaseViewController.jk.fadeOut(50), BaseViewController.kk.stop(), BaseViewController.kk.fadeOut(50), BaseViewController.lk.stop(), BaseViewController.lk.fadeIn(1), BaseViewController.di.stop(), BaseViewController.di.fadeIn(500), BackgroundView.Le(!0), BaseViewController.nk.stop(), BaseViewController.nk.fadeIn(500), BaseViewController.ok.stop(), BaseViewController.ok.fadeIn(500)
				}, C.prototype.ji = function() {
					getApp().r.Dd(), this.uk.Le(!0)
				}, C.prototype.ei = function() {
					this.uk.Le(!1)
				}, C.prototype.Ra = function() {
					this.uk.Ra()
				}, C.prototype.Pa = function(t, e) {
					this.uk.Pa()
				}, C.prototype.ga = function() {
					return r.val()
				}, C.prototype.D = function() {
					return s.val()
				}, C.prototype.xk = function() {
					a.show()
				}, C.prototype.vk = function() {
					var t = $("#mm-advice-cont").children(),
						e = 0;
					setInterval(function() {
						t.eq(e).fadeOut(500, function() {
							++e >= t.length && (e = 0), t.eq(e).fadeIn(500).css("display", "inline-block")
						})
					}, 3e3)
				}, C.prototype.wk = function() {
					function t() {
						e.Ka(!0), setTimeout(function() {
							o.hide()
						}, 3e3)
					}
					var e = getApp();
					if (env.qk && !e.Ha()) {
						o.show();
						var i = i18n("index.game.main.menu.unlockSkins.share"),
							r = encodeURIComponent(i18n("index.game.main.menu.unlockSkins.comeAndPlay") + " https://wormate.io/ #wormate #wormateio"),
							s = encodeURIComponent(i18n("index.game.main.menu.unlockSkins.comeAndPlay"));
						n.append($('<a class="mm-skin-over-button" id="mm-skin-over-tw" target="_blank" href="http://twitter.com/intent/tweet?status=' + r + '"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg=="><span>' + i + "</span></a>").click(t)), n.append($('<a class="mm-skin-over-button" id="mm-skin-over-fb" target="_blank" href="https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=' + s + '"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+"><span>' + i + "</span></a>").click(t))
					}
				}, C
			}(),
			PrerollViewController = function() {
				var t = extend(BaseViewController, function() {
					BaseViewController.call(this, ViewControllerType.pk)
				});
				return t.prototype.a = function() {}, t.prototype.ii = function() {
					BaseViewController.fk.stop(), BaseViewController.fk.fadeOut(50), BaseViewController.gk.stop(), BaseViewController.gk.fadeOut(50), BaseViewController.hk.stop(), BaseViewController.hk.fadeOut(50), BaseViewController.ik.stop(), BaseViewController.ik.fadeOut(50), BaseViewController.jk.stop(), BaseViewController.jk.fadeOut(50), BaseViewController.kk.stop(), BaseViewController.kk.fadeOut(50), BaseViewController.lk.stop(), BaseViewController.lk.fadeOut(1), BaseViewController.di.stop(), BaseViewController.di.fadeOut(50), BackgroundView.Le(!1), BaseViewController.nk.stop(), BaseViewController.nk.fadeOut(50), BaseViewController.ok.stop(), BaseViewController.ok.fadeOut(50)
				}, t
			}(),
			ToasterContainerViewController = function() {
				var t = $("#toaster-stack"),
					e = extend(BaseViewController, function() {
						BaseViewController.call(this, ViewControllerType.pk), this.yk = [], this.zk = null
					});
				return e.prototype.a = function() {}, e.prototype.ii = function() {
					BaseViewController.fk.stop(), BaseViewController.fk.fadeOut(50), BaseViewController.gk.stop(), BaseViewController.gk.fadeOut(50), BaseViewController.hk.stop(), BaseViewController.hk.fadeOut(50), BaseViewController.ik.stop(), BaseViewController.ik.fadeOut(50), BaseViewController.jk.stop(), BaseViewController.jk.fadeIn(500), BaseViewController.kk.stop(), BaseViewController.kk.fadeOut(50), BaseViewController.lk.stop(), BaseViewController.lk.fadeIn(1), BaseViewController.di.stop(), BaseViewController.di.fadeIn(500), BackgroundView.Le(!0), BaseViewController.nk.stop(), BaseViewController.nk.fadeOut(50), BaseViewController.ok.stop(), BaseViewController.ok.fadeIn(500)
				}, e.prototype.ji = function() {
					this.Ak()
				}, e.prototype.mi = function() {
					return null != this.zk || this.yk.length > 0
				}, e.prototype._ = function(t) {
					this.yk.unshift(t), setTimeout(function() {
						getApp().s.ki()
					}, 0)
				}, e.prototype.Ti = function(t) {
					this.yk.push(t), setTimeout(function() {
						getApp().s.ki()
					}, 0)
				}, e.prototype.Ak = function() {
					var e = this;
					if (null == this.zk) {
						if (0 == this.yk.length) return void getApp().s.gi();
						var i = this.yk.shift();
						this.zk = i;
						var o = i.Bk();
						o.hide(), o.fadeIn(300), t.append(o), i.Ck = function() {
							o.fadeOut(300), setTimeout(function() {
								o.remove()
							}, 300), e.zk == i && (e.zk = null), e.Ak()
						}, i.ji()
					}
				}, e
			}(),
			ViewControllerType = {
				pk: 0,
				hi: 1
			},
			BasePopupViewController = function() {
				var t = $("#popup-menu-label"),
					e = $("#popup-menu-coins-box"),
					i = $("#popup-menu-coins-val");
				$("#popup-menu-back").click(function() {
					var t = getApp();
					t.r.Cd(), t.s.gi()
				}), e.click(function() {
					var t = getApp();
					t.u.P() && (t.r.Cd(), t.s.I(t.s.Wh))
				});
				var o = extend(BaseViewController, function(t, e) {
					BaseViewController.call(this, ViewControllerType.hi), this.ad = t, this.Dk = e
				});
				return o.prototype.a = function() {
					if (o.parent.prototype.a.call(this), !o.Ek) {
						o.Ek = !0;
						var t = getApp();
						t.u.Pi(function() {
							t.u.P() ? i.html(t.u.zi()) : i.html("0")
						})
					}
				}, o.Fk = $("#coins-view"), o.Gk = $("#leaders-view"), o.Hk = $("#profile-view"), o.Ik = $("#settings-view"), o.Jk = $("#login-view"), o.Kk = $("#skins-view"), o.Lk = $("#store-view"), o.Mk = $("#wear-view"), o.Nk = $("#withdraw-consent-view"), o.Ok = $("#delete-account-view"), o.Pk = $("#please-wait-view"), o.prototype.ii = function() {
					BaseViewController.fk.stop(), BaseViewController.fk.fadeOut(200), BaseViewController.gk.stop(), BaseViewController.gk.fadeOut(200), BaseViewController.hk.stop(), BaseViewController.hk.fadeOut(200), BaseViewController.ik.stop(), BaseViewController.ik.fadeIn(200), BaseViewController.jk.stop(), BaseViewController.jk.fadeOut(200), BaseViewController.kk.stop(), BaseViewController.kk.fadeOut(200), BaseViewController.nk.stop(), BaseViewController.nk.fadeIn(200), BaseViewController.ok.stop(), BaseViewController.ok.fadeIn(200), t.html(this.ad), e.toggle(this.Dk), this.Qk(), this.Rk()
				}, o.prototype.Rk = function() {}, o.prototype.Sk = function() {
					BasePopupViewController.Pk.stop(), BasePopupViewController.Pk.fadeIn(300)
				}, o.prototype.Qk = function() {
					BasePopupViewController.Pk.stop(), BasePopupViewController.Pk.fadeOut(300)
				}, o
			}(),
			CoinsViewController = function() {
				var t = $("#store-buy-coins_125000"),
					e = $("#store-buy-coins_50000"),
					i = $("#store-buy-coins_16000"),
					o = $("#store-buy-coins_7000"),
					n = $("#store-buy-coins_3250"),
					r = $("#store-buy-coins_1250"),
					s = extend(BasePopupViewController, function() {
						BasePopupViewController.call(this, i18n("index.game.popup.menu.coins.tab"), !1);
						var s = getApp(),
							a = this;
						t.click(function() {
							s.r.Cd(), a.Tk("coins_125000")
						}), e.click(function() {
							s.r.Cd(), a.Tk("coins_50000")
						}), i.click(function() {
							s.r.Cd(), a.Tk("coins_16000")
						}), o.click(function() {
							s.r.Cd(), a.Tk("coins_7000")
						}), n.click(function() {
							s.r.Cd(), a.Tk("coins_3250")
						}), r.click(function() {
							s.r.Cd(), a.Tk("coins_1250")
						})
					});
				return s.prototype.a = function() {
					s.parent.prototype.a.call(this)
				}, s.prototype.Rk = function() {
					BasePopupViewController.Fk.stop(), BasePopupViewController.Fk.fadeIn(200), BasePopupViewController.Gk.stop(), BasePopupViewController.Gk.fadeOut(50), BasePopupViewController.Hk.stop(), BasePopupViewController.Hk.fadeOut(50), BasePopupViewController.Jk.stop(), BasePopupViewController.Jk.fadeOut(50), BasePopupViewController.Ik.stop(), BasePopupViewController.Ik.fadeOut(50), BasePopupViewController.Kk.stop(), BasePopupViewController.Kk.fadeOut(50), BasePopupViewController.Lk.stop(), BasePopupViewController.Lk.fadeOut(50), BasePopupViewController.Mk.stop(), BasePopupViewController.Mk.fadeOut(50), BasePopupViewController.Nk.stop(), BasePopupViewController.Nk.fadeOut(50), BasePopupViewController.Ok.stop(), BasePopupViewController.Ok.fadeOut(50)
				}, s.prototype.ji = function() {
					getApp().r.Dd()
				}, s.prototype.Tk = function(t) {}, s
			}(),
			LeadersViewController = function() {
				var t = $("#highscore-table"),
					e = $("#leaders-button-level"),
					i = $("#leaders-button-highscore"),
					o = $("#leaders-button-kills"),
					n = extend(BasePopupViewController, function() {
						BasePopupViewController.call(this, i18n("index.game.popup.menu.leaders.tab"), !0);
						var t = getApp(),
							n = this;
						this.Uk = {}, this.Vk = {
							Wk: {
								Xk: e,
								Yk: "byLevel"
							},
							Zk: {
								Xk: i,
								Yk: "byHighScore"
							},
							$k: {
								Xk: o,
								Yk: "byKillsAndHeadShots"
							}
						}, e.click(function() {
							t.r.Cd(), n._k(n.Vk.Wk)
						}), i.click(function() {
							t.r.Cd(), n._k(n.Vk.Zk)
						}), o.click(function() {
							t.r.Cd(), n._k(n.Vk.$k)
						})
					});
				return n.prototype.a = function() {
					n.parent.prototype.a.call(this)
				}, n.prototype.Rk = function() {
					BasePopupViewController.Fk.stop(), BasePopupViewController.Fk.fadeOut(50), BasePopupViewController.Gk.stop(), BasePopupViewController.Gk.fadeIn(200), BasePopupViewController.Hk.stop(), BasePopupViewController.Hk.fadeOut(50), BasePopupViewController.Jk.stop(), BasePopupViewController.Jk.fadeOut(50), BasePopupViewController.Ik.stop(), BasePopupViewController.Ik.fadeOut(50), BasePopupViewController.Kk.stop(), BasePopupViewController.Kk.fadeOut(50), BasePopupViewController.Lk.stop(), BasePopupViewController.Lk.fadeOut(50), BasePopupViewController.Mk.stop(), BasePopupViewController.Mk.fadeOut(50), BasePopupViewController.Nk.stop(), BasePopupViewController.Nk.fadeOut(50), BasePopupViewController.Ok.stop(), BasePopupViewController.Ok.fadeOut(50)
				}, n.prototype.ji = function() {
					getApp().r.Dd();
					var t = this;
					this.Sk(), $.get(GATEWAY_HOST + "/pub/leaders", function(e) {
						t.Uk = e, t._k(null != t.al ? t.al : t.Vk.Wk), t.Qk()
					}).done(function() {
						t.Qk()
					})
				}, n.prototype._k = function(e) {
					this.al = e;
					for (var i in this.Vk)
						if (this.Vk.hasOwnProperty(i)) {
							var o = this.Vk[i];
							o.Xk.removeClass("pressed")
						} this.al.Xk.addClass("pressed");
					for (var n = this.Uk[this.al.Yk], r = "", s = 0; s < n.length; s++) {
						var a = n[s];
						r += '<div class="table-row"><span>' + (s + 1) + '</span><span><img src="' + a.avatarUrl + '"/></span><span>' + a.username + "</span><span>" + a.level + "</span><span>" + a.highScore + "</span><span>" + a.headShots + " / " + a.kills + "</span></div>"
					}
					t.empty(), t.append(r)
				}, n
			}(),
			LoginViewController = function() {
				var t = $("#popup-login-gg"),
					e = $("#popup-login-fb"),
					i = extend(BasePopupViewController, function() {
						BasePopupViewController.call(this, i18n("index.game.popup.menu.login.tab"), !1);
						var i = getApp(),
							o = this;
						t.click(function() {
							i.r.Cd(), o.Sk(), i.u.Qi(function() {
								o.Qk()
							}), setTimeout(function() {
								o.Qk()
							}, 1e4), i.u.Zi()
						}), e.click(function() {
							i.r.Cd(), o.Sk(), i.u.Qi(function() {
								o.Qk()
							}), setTimeout(function() {
								o.Qk()
							}, 1e4), i.u.Vi()
						})
					});
				return i.prototype.a = function() {
					i.parent.prototype.a.call(this)
				}, i.prototype.Rk = function() {
					BasePopupViewController.Fk.stop(), BasePopupViewController.Fk.fadeOut(50), BasePopupViewController.Gk.stop(), BasePopupViewController.Gk.fadeOut(50), BasePopupViewController.Hk.stop(), BasePopupViewController.Hk.fadeOut(50), BasePopupViewController.Jk.stop(), BasePopupViewController.Jk.fadeIn(200), BasePopupViewController.Ik.stop(), BasePopupViewController.Ik.fadeOut(50), BasePopupViewController.Kk.stop(), BasePopupViewController.Kk.fadeOut(50), BasePopupViewController.Lk.stop(), BasePopupViewController.Lk.fadeOut(50), BasePopupViewController.Mk.stop(), BasePopupViewController.Mk.fadeOut(50), BasePopupViewController.Nk.stop(), BasePopupViewController.Nk.fadeOut(50), BasePopupViewController.Ok.stop(), BasePopupViewController.Ok.fadeOut(50)
				}, i.prototype.ji = function() {
					getApp().r.Dd()
				}, i
			}(),
			ProfileViewController = function() {
				var t = $("#profile-avatar"),
					e = $("#profile-username"),
					i = $("#profile-experience-bar"),
					o = $("#profile-experience-val"),
					n = $("#profile-level"),
					r = $("#profile-stat-highScore"),
					s = $("#profile-stat-bestSurvivalTime"),
					a = $("#profile-stat-kills"),
					h = $("#profile-stat-headshots"),
					l = $("#profile-stat-gamesPlayed"),
					p = $("#profile-stat-totalTimeSpent"),
					u = $("#profile-stat-registrationDate"),
					c = extend(BasePopupViewController, function() {
						BasePopupViewController.call(this, i18n("index.game.popup.menu.profile.tab"), !0)
					});
				return c.prototype.a = function() {
					c.parent.prototype.a.call(this)
				}, c.prototype.Rk = function() {
					BasePopupViewController.Fk.stop(), BasePopupViewController.Fk.fadeOut(50), BasePopupViewController.Gk.stop(), BasePopupViewController.Gk.fadeOut(50), BasePopupViewController.Hk.stop(), BasePopupViewController.Hk.fadeIn(200), BasePopupViewController.Jk.stop(), BasePopupViewController.Jk.fadeOut(50), BasePopupViewController.Ik.stop(), BasePopupViewController.Ik.fadeOut(50), BasePopupViewController.Kk.stop(), BasePopupViewController.Kk.fadeOut(50), BasePopupViewController.Lk.stop(), BasePopupViewController.Lk.fadeOut(50), BasePopupViewController.Mk.stop(), BasePopupViewController.Mk.fadeOut(50), BasePopupViewController.Nk.stop(), BasePopupViewController.Nk.fadeOut(50), BasePopupViewController.Ok.stop(), BasePopupViewController.Ok.fadeOut(50)
				}, c.prototype.ji = function() {
					var c = getApp();
					c.r.Dd();
					var f = c.u.Oi(),
						d = moment([f.year, f.month - 1, f.day]).format("LL");
					e.html(c.u.wi()), t.attr("src", c.u.xi()), i.width(100 * c.u.Bi() / c.u.Ci() + "%"), o.html(c.u.Bi() + " / " + c.u.Ci()), n.html(c.u.Ai()), r.html(c.u.Ii()), s.html(timeSecsToIntervalText(c.u.Ji())), a.html(c.u.Ki()), h.html(c.u.Li()), l.html(c.u.Mi()), p.html(timeSecsToIntervalText(c.u.Ni())), u.html(d)
				}, c
			}(),
			SettingsViewController = function() {
				var t = $("#settings-music-enabled-switch"),
					e = $("#settings-sfx-enabled-switch"),
					i = $("#settings-show-names-switch"),
					o = $("#popup-logout"),
					n = $("#popup-logout-container"),
					r = $("#popup-delete-account"),
					s = $("#popup-delete-account-container"),
					a = $("#popup-withdraw-consent"),
					h = extend(BasePopupViewController, function() {
						BasePopupViewController.call(this, i18n("index.game.popup.menu.settings.tab"), !1);
						var n = this,
							s = getApp();
						t.click(function() {
							var e = !!t.prop("checked");
							setCookie(Cookies.Me, e, 30), s.r.td(e), s.r.Cd()
						}), e.click(function() {
							var t = !!e.prop("checked");
							setCookie(Cookies.Ne, t, 30), s.r.rd(t), s.r.Cd()
						}), i.click(function() {
							s.r.Cd()
						}), o.click(function() {
							s.r.Cd(), n.Sk(), setTimeout(function() {
								n.Qk()
							}, 2e3), s.u.Wi()
						}), r.click(function() {
							s.u.P() ? (s.r.Cd(), s.s.I(s.s.Vh)) : s.r.Hd()
						}), a.click(function() {
							s.Y() ? (s.r.Cd(), s.s.I(s.s.Uh)) : s.r.Hd()
						})
					});
				return h.prototype.a = function() {
					h.parent.prototype.a.call(this);
					var o = getApp(),
						r = void 0;
					switch (getCookie(Cookies.Me)) {
						case "false":
							r = !1;
							break;
						default:
							r = !0
					}
					t.prop("checked", r), o.r.td(r);
					var a = void 0;
					switch (getCookie(Cookies.Ne)) {
						case "false":
							a = !1;
							break;
						default:
							a = !0
					}
					e.prop("checked", a), o.r.rd(a);
					var l = void 0;
					switch (getCookie(Cookies.ya)) {
						case "false":
							l = !1;
							break;
						default:
							l = !0
					}
					console.log("Load sPN: " + l), i.prop("checked", l), o.u.V(function() {
						n.toggle(o.u.P()), s.toggle(o.u.P())
					})
				}, h.prototype.Rk = function() {
					BasePopupViewController.Fk.stop(), BasePopupViewController.Fk.fadeOut(50), BasePopupViewController.Gk.stop(), BasePopupViewController.Gk.fadeOut(50), BasePopupViewController.Hk.stop(), BasePopupViewController.Hk.fadeOut(50), BasePopupViewController.Jk.stop(), BasePopupViewController.Jk.fadeOut(50), BasePopupViewController.Ik.stop(), BasePopupViewController.Ik.fadeIn(200), BasePopupViewController.Kk.stop(), BasePopupViewController.Kk.fadeOut(50), BasePopupViewController.Lk.stop(), BasePopupViewController.Lk.fadeOut(50), BasePopupViewController.Mk.stop(), BasePopupViewController.Mk.fadeOut(50), BasePopupViewController.Nk.stop(), BasePopupViewController.Nk.fadeOut(50), BasePopupViewController.Ok.stop(), BasePopupViewController.Ok.fadeOut(50)
				}, h.prototype.ji = function() {
					var t = getApp();
					t.r.Dd(), t.Y() ? a.show() : a.hide()
				}, h.prototype.wa = function() {
					return i.prop("checked")
				}, h
			}(),
			SkinsViewController = function() {
				var t = $("#store-view-canv"),
					e = $("#skin-description-text"),
					i = $("#skin-group-description-text"),
					o = $("#store-locked-bar"),
					n = $("#store-locked-bar-text"),
					r = $("#store-buy-button"),
					s = $("#store-item-price"),
					a = $("#store-groups"),
					h = $("#store-view-prev"),
					l = $("#store-view-next"),
					p = extend(BasePopupViewController, function() {
						BasePopupViewController.call(this, i18n("index.game.popup.menu.skins.tab"), !0);
						var e = this,
							i = getApp();
						this.bl = null, this.cl = [], this.dl = {}, this.el = new WormView(t), r.click(function() {
							i.r.Cd(), e.fl()
						}), h.click(function() {
							i.r.Cd(), e.bl.gl()
						}), l.click(function() {
							i.r.Cd(), e.bl.hl()
						})
					});
				p.prototype.a = function() {
					p.parent.prototype.a.call(this);
					var t = this,
						e = getApp();
					e.p.ca(function() {
						var i = e.p.Ac();
						if (null != i) {
							t.cl = [];
							for (var o = 0; o < i.skinGroupArrayDict.length; o++) t.cl.push(new u(t, i.skinGroupArrayDict[o]));
							t.dl = {};
							for (var n = 0; n < i.skinArrayDict.length; n++) {
								var r = i.skinArrayDict[n];
								t.dl[r.id] = r
							}
						}
					}), this.il(!1), e.t.xh(function() {
						t.il(!1)
					})
				}, p.prototype.Rk = function() {
					BasePopupViewController.Fk.stop(), BasePopupViewController.Fk.fadeOut(50), BasePopupViewController.Gk.stop(), BasePopupViewController.Gk.fadeOut(50), BasePopupViewController.Hk.stop(), BasePopupViewController.Hk.fadeOut(50), BasePopupViewController.Jk.stop(), BasePopupViewController.Jk.fadeOut(50), BasePopupViewController.Ik.stop(), BasePopupViewController.Ik.fadeOut(50), BasePopupViewController.Kk.stop(), BasePopupViewController.Kk.fadeIn(200), BasePopupViewController.Lk.stop(), BasePopupViewController.Lk.fadeOut(50), BasePopupViewController.Mk.stop(), BasePopupViewController.Mk.fadeOut(50), BasePopupViewController.Nk.stop(), BasePopupViewController.Nk.fadeOut(50), BasePopupViewController.Ok.stop(), BasePopupViewController.Ok.fadeOut(50)
				}, p.prototype.ji = function() {
					getApp().r.Dd(), this.jl(), this.el.Le(!0)
				}, p.prototype.ei = function() {
					this.el.Le(!1)
				}, p.prototype.Ra = function() {
					this.el.Ra()
				}, p.prototype.Pa = function(t, e) {
					this.el.Pa()
				}, p.prototype.jl = function() {
					var t = this,
						e = this,
						i = getApp();
					a.empty();
					for (var o = 0; o < this.cl.length; o++) ! function(o) {
						var n = t.cl[o],
							r = document.createElement("li");
						a.append(r);
						var s = $(r);
						s.html(n.kl()), s.click(function() {
							i.r.Cd(), e.ll(n)
						}), n.ml = s
					}(o);
					if (this.cl.length > 0) {
						for (var n = i.t.ha(PropertyType.ia), o = 0; o < this.cl.length; o++)
							for (var r = this.cl[o], s = r.nl.list, h = 0; h < s.length; h++)
								if (s[h] == n) return r.ol = h, void this.ll(r);
						this.ll(this.cl[0])
					}
				}, p.prototype.ll = function(t) {
					if (this.bl != t) {
						var e = getApp();
						if (this.bl = t, a.children().removeClass("pressed"), this.bl.ml && this.bl.ml.addClass("pressed"), i.html(""), null != t.nl) {
							var o = e.p.Ac().textDict[t.nl.description];
							null != o && i.html(convertI18nStringToHTML(i18nCustomBundle(o)))
						}
						this.il(!0)
					}
				}, p.prototype.pl = function() {
					return null == this.bl ? Optional.Yg() : this.bl.ql()
				}, p.prototype.fl = function() {
					var t = this;
					this.pl().ah(function(e) {
						t.rl(e)
					})
				}, p.prototype.rl = function(t) {
					var e = this,
						i = getApp(),
						o = this.dl[t].price;
					if (!(i.u.zi() < o)) {
						this.Sk();
						var n = i.t.ha(PropertyType.ia),
							r = i.t.ha(PropertyType.ja),
							s = i.t.ha(PropertyType.ka),
							a = i.t.ha(PropertyType.la),
							h = i.t.ha(PropertyType.ma);
						i.u.Ui(t, PropertyType.ia, function() {
							i.t.Bh(n, PropertyType.ia), i.t.Bh(r, PropertyType.ja), i.t.Bh(s, PropertyType.ka), i.t.Bh(a, PropertyType.la), i.t.Bh(h, PropertyType.ma), i.u.Ch(t, PropertyType.ia) && i.t.Bh(t, PropertyType.ia), e.Qk()
						})
					}
				}, p.prototype.il = function(t) {
					var i = getApp();
					this.el.bk(i.t.ha(PropertyType.ja), !1, !1), this.el.ck(i.t.ha(PropertyType.ka), !1, !1), this.el.dk(i.t.ha(PropertyType.la), !1, !1), this.el.ek(i.t.ha(PropertyType.ma), !1, !1);
					var a = this.pl();
					if (a._g()) {
						var h = a.$g(),
							l = this.dl[h],
							p = !1;
						if (i.t.Ja(h, PropertyType.ia)) o.hide(), r.hide();
						else if (null == l || 1 == l.nonbuyable) {
							if (p = !0, o.show(), r.hide(), n.text(i18n("index.game.popup.menu.store.locked")), null != l && l.nonbuyable && null != l.nonbuyableCause) {
								var u = i.p.Ac().textDict[l.nonbuyableCause];
								null != u && n.text(i18nCustomBundle(u))
							}
						} else o.hide(), r.show(), s.html(l.price);
						if (e.html(""), null != l && null != l.description) {
							var c = i.p.Ac().textDict[l.description];
							null != c && e.html(convertI18nStringToHTML(i18nCustomBundle(c)))
						}
						this.el.ak(h, !0, p), t && i.t.Bh(h, PropertyType.ia)
					}
				};
				var u = function() {
					function t(t, e) {
						this.sl = t, this.ol = 0, this.nl = e
					}
					return t.prototype.gl = function() {
						--this.ol < 0 && (this.ol = this.nl.list.length - 1), this.sl.il(!0)
					}, t.prototype.hl = function() {
						++this.ol >= this.nl.list.length && (this.ol = 0), this.sl.il(!0)
					}, t.prototype.kl = function() {
						return i18nCustomBundle(this.nl.name)
					}, t.prototype.ql = function() {
						return this.ol >= this.nl.list.length ? Optional.Yg() : Optional.Zg(this.nl.list[this.ol])
					}, t
				}();
				return p
			}(),
			StoreViewController = function() {
				var t = $("#store-go-coins-button"),
					e = $("#store-go-skins-button"),
					i = $("#store-go-wear-button"),
					o = extend(BasePopupViewController, function() {
						BasePopupViewController.call(this, i18n("index.game.popup.menu.store.tab"), !0);
						var o = getApp();
						t.click(function() {
							o.r.Cd(), o.s.I(o.s.Wh)
						}), e.click(function() {
							o.r.Cd(), o.s.I(o.s.$h)
						}), i.click(function() {
							o.r.Cd(), o.s.I(o.s.ai)
						})
					});
				return o.prototype.a = function() {
					o.parent.prototype.a.call(this)
				}, o.prototype.Rk = function() {
					BasePopupViewController.Fk.stop(), BasePopupViewController.Fk.fadeOut(50), BasePopupViewController.Gk.stop(), BasePopupViewController.Gk.fadeOut(50), BasePopupViewController.Hk.stop(), BasePopupViewController.Hk.fadeOut(50), BasePopupViewController.Jk.stop(), BasePopupViewController.Jk.fadeOut(50), BasePopupViewController.Ik.stop(), BasePopupViewController.Ik.fadeOut(50), BasePopupViewController.Kk.stop(), BasePopupViewController.Kk.fadeOut(50), BasePopupViewController.Lk.stop(), BasePopupViewController.Lk.fadeIn(200), BasePopupViewController.Mk.stop(), BasePopupViewController.Mk.fadeOut(50), BasePopupViewController.Nk.stop(), BasePopupViewController.Nk.fadeOut(50), BasePopupViewController.Ok.stop(), BasePopupViewController.Ok.fadeOut(50)
				}, o.prototype.ji = function() {
					getApp().r.Dd()
				}, o
			}(),
			WearViewController = function() {
				var t = $("#wear-view-canv"),
					e = $("#wear-description-text"),
					i = $("#wear-locked-bar"),
					o = $("#wear-locked-bar-text"),
					n = $("#wear-buy-button"),
					r = $("#wear-item-price"),
					s = $("#wear-eyes-button"),
					a = $("#wear-mouths-button"),
					h = $("#wear-glasses-button"),
					l = $("#wear-hats-button"),
					p = $("#wear-tint-chooser"),
					u = $("#wear-view-prev"),
					c = $("#wear-view-next"),
					f = extend(BasePopupViewController, function() {
						var e = this;
						BasePopupViewController.call(this, i18n("index.game.popup.menu.wear.tab"), !0);
						var i = getApp(),
							o = this;
						this.tl = [], this.ja = new d(this, PropertyType.ja, s), this.ka = new d(this, PropertyType.ka, a), this.la = new d(this, PropertyType.la, h), this.ma = new d(this, PropertyType.ma, l), this.ul = null, this.vl = null, this.wl = null, this.xl = null, this.yl = null, this.zl = null, this.Al = new WormView(t), n.click(function() {
							i.r.Cd(), o.Bl()
						}), u.click(function() {
							i.r.Cd(), o.ul.Cl()
						}), c.click(function() {
							i.r.Cd(), o.ul.Dl()
						}), s.click(function() {
							i.r.Cd(), o.El(e.ja)
						}), a.click(function() {
							i.r.Cd(), o.El(e.ka)
						}), h.click(function() {
							i.r.Cd(), o.El(e.la)
						}), l.click(function() {
							i.r.Cd(), o.El(e.ma)
						}), this.tl.push(this.ja), this.tl.push(this.ka), this.tl.push(this.la), this.tl.push(this.ma)
					});
				f.prototype.a = function() {
					f.parent.prototype.a.call(this);
					var t = getApp(),
						e = this;
					t.p.ca(function() {
						var i = t.p.Ac();
						null != i && (e.vl = i.eyesDict, e.wl = i.mouthDict, e.xl = i.glassesDict, e.yl = i.hatDict, e.zl = i.colorDict, e.ja.Fl(i.eyesVariantArray), e.ja.Gl(e.vl), e.ka.Fl(i.mouthVariantArray), e.ka.Gl(e.wl), e.la.Fl(i.glassesVariantArray), e.la.Gl(e.xl), e.ma.Fl(i.hatVariantArray), e.ma.Gl(e.yl))
					}), this.il(!1), t.t.xh(function() {
						e.il(!1)
					})
				}, f.prototype.Rk = function() {
					BasePopupViewController.Fk.stop(), BasePopupViewController.Fk.fadeOut(50), BasePopupViewController.Gk.stop(), BasePopupViewController.Gk.fadeOut(50), BasePopupViewController.Hk.stop(), BasePopupViewController.Hk.fadeOut(50), BasePopupViewController.Jk.stop(), BasePopupViewController.Jk.fadeOut(50), BasePopupViewController.Ik.stop(), BasePopupViewController.Ik.fadeOut(50), BasePopupViewController.Kk.stop(), BasePopupViewController.Kk.fadeOut(50), BasePopupViewController.Lk.stop(), BasePopupViewController.Lk.fadeOut(50), BasePopupViewController.Mk.stop(), BasePopupViewController.Mk.fadeIn(200), BasePopupViewController.Nk.stop(), BasePopupViewController.Nk.fadeOut(50), BasePopupViewController.Ok.stop(), BasePopupViewController.Ok.fadeOut(50)
				}, f.prototype.ji = function() {
					getApp().r.Dd(), this.El(null != this.ul ? this.ul : this.ja), this.Al.Le(!0)
				}, f.prototype.ei = function() {
					this.Al.Le(!1)
				}, f.prototype.Ra = function() {
					this.Al.Ra()
				}, f.prototype.Pa = function(t, e) {
					this.Al.Pa()
				}, f.prototype.El = function(t) {
					this.ul = t;
					for (var e = 0; e < this.tl.length; e++) this.tl[e].Xk.removeClass("pressed");
					this.ul.Xk.addClass("pressed"), this.ul.ii()
				}, f.prototype.Hl = function() {
					return null == this.ul ? Optional.Yg() : Optional.Zg({
						Lb: this.ul.ql(),
						rc: this.ul.rc
					})
				}, f.prototype.Bl = function() {
					var t = this;
					this.Hl().ah(function(e) {
						t.Ui(e.Lb, e.rc)
					})
				}, f.prototype.Ui = function(t, e) {
					var i = this,
						o = getApp(),
						n = void 0;
					switch (e) {
						case PropertyType.ja:
							n = this.vl[t].price;
							break;
						case PropertyType.ka:
							n = this.wl[t].price;
							break;
						case PropertyType.la:
							n = this.xl[t].price;
							break;
						case PropertyType.ma:
							n = this.yl[t].price;
							break;
						default:
							return
					}
					if (!(o.u.zi() < n)) {
						this.Sk();
						var r = o.t.ha(PropertyType.ia),
							s = o.t.ha(PropertyType.ja),
							a = o.t.ha(PropertyType.ka),
							h = o.t.ha(PropertyType.la),
							l = o.t.ha(PropertyType.ma);
						o.u.Ui(t, e, function() {
							o.t.Bh(r, PropertyType.ia), o.t.Bh(s, PropertyType.ja), o.t.Bh(a, PropertyType.ka), o.t.Bh(h, PropertyType.la), o.t.Bh(l, PropertyType.ma), o.u.Ch(t, e) && o.t.Bh(t, e), i.Qk()
						})
					}
				}, f.prototype.Il = function(t, e) {
					switch (e) {
						case PropertyType.ja:
							return this.vl[t];
						case PropertyType.ka:
							return this.wl[t];
						case PropertyType.la:
							return this.xl[t];
						case PropertyType.ma:
							return this.yl[t]
					}
					return null
				}, f.prototype.il = function(t) {
					var s = getApp();
					this.Al.ak(s.t.ha(PropertyType.ia), !1, !1), this.Al.bk(s.t.ha(PropertyType.ja), !1, !1), this.Al.ck(s.t.ha(PropertyType.ka), !1, !1), this.Al.dk(s.t.ha(PropertyType.la), !1, !1), this.Al.ek(s.t.ha(PropertyType.ma), !1, !1);
					var a = this.Hl();
					if (a._g()) {
						var h = a.$g(),
							l = this.Il(h.Lb, h.rc),
							p = !1;
						if (s.t.Ja(h.Lb, h.rc)) i.hide(), n.hide();
						else if (null == l || 1 == l.nonbuyable) {
							if (p = !0, i.show(), n.hide(), o.text(i18n("index.game.popup.menu.store.locked")), null != l && l.nonbuyable && null != l.nonbuyableCause) {
								var u = s.p.Ac().textDict[l.nonbuyableCause];
								null != u && o.text(i18nCustomBundle(u))
							}
						} else i.hide(), n.show(), r.html(l.price);
						if (e.html(""), null != l && null != l.description) {
							var c = s.p.Ac().textDict[l.description];
							null != c && e.html(convertI18nStringToHTML(i18nCustomBundle(c)))
						}
						switch (h.rc) {
							case PropertyType.ja:
								this.Al.bk(h.Lb, !0, p);
								break;
							case PropertyType.ka:
								this.Al.ck(h.Lb, !0, p);
								break;
							case PropertyType.la:
								this.Al.dk(h.Lb, !0, p);
								break;
							case PropertyType.ma:
								this.Al.ek(h.Lb, !0, p)
						}
						t && s.t.Bh(h.Lb, h.rc)
					}
				};
				var d = function() {
					function t(t, e, i) {
						this.sl = t, this.rc = e, this.Xk = i, this.Jl = {}, this.Kl = [
							[]
						], this.Ll = -10, this.Ml = -10
					}
					return t.prototype.Fl = function(t) {
						this.Kl = t
					}, t.prototype.Gl = function(t) {
						this.Jl = t
					}, t.prototype.ii = function() {
						for (var t = getApp(), e = t.t.ha(this.rc), i = 0; i < this.Kl.length; i++)
							for (var o = 0; o < this.Kl[i].length; o++)
								if (this.Kl[i][o] == e) return this.Nl(i), void this.Ol(o);
						this.Nl(0), this.Ol(0)
					}, t.prototype.Cl = function() {
						var t = this.Ll - 1;
						t < 0 && (t = this.Kl.length - 1), this.Nl(t), this.Ol(this.Ml % this.Kl[t].length)
					}, t.prototype.Dl = function() {
						var t = this.Ll + 1;
						t >= this.Kl.length && (t = 0), this.Nl(t), this.Ol(this.Ml % this.Kl[t].length)
					}, t.prototype.Nl = function(t) {
						var e = this;
						if (!(t < 0 || t >= this.Kl.length)) {
							this.Ll = t, p.empty();
							var i = this.Kl[this.Ll];
							if (i.length > 1)
								for (var o = 0; o < i.length; o++) ! function(t) {
									var o = i[t],
										n = e.Jl[o],
										r = "#" + e.sl.zl[n.prime],
										s = $('<div style="border-color:' + r + '"></div>');
									s.click(function() {
										getApp().r.Cd(), e.Ol(t)
									}), p.append(s)
								}(o)
						}
					}, t.prototype.Ol = function(t) {
						if (!(t < 0 || t >= this.Kl[this.Ll].length)) {
							this.Ml = t, p.children().css("background-color", "transparent");
							var e = p.children(":nth-child(" + (1 + t) + ")");
							e.css("background-color", e.css("border-color")), this.sl.il(!0)
						}
					}, t.prototype.ql = function() {
						return this.Kl[this.Ll][this.Ml]
					}, t
				}();
				return f
			}(),
			WithdrawConsentViewController = function() {
				var t = $("#withdraw-consent-yes"),
					e = $("#withdraw-consent-no"),
					i = extend(BasePopupViewController, function() {
						BasePopupViewController.call(this, i18n("index.game.popup.menu.consent.tab"), !1);
						var i = getApp();
						t.click(function() {
							i.r.Cd(), i.Y() ? (i.s.I(i.s.F), i.$(!1, !0), i.s.aa._(new ConsentAcceptanceToasterViewController)) : i.s.gi()
						}), e.click(function() {
							i.r.Cd(), i.s.gi()
						})
					});
				return i.prototype.a = function() {
					i.parent.prototype.a.call(this)
				}, i.prototype.Rk = function() {
					BasePopupViewController.Fk.stop(), BasePopupViewController.Fk.fadeOut(50), BasePopupViewController.Gk.stop(), BasePopupViewController.Gk.fadeOut(50), BasePopupViewController.Hk.stop(), BasePopupViewController.Hk.fadeOut(50), BasePopupViewController.Jk.stop(), BasePopupViewController.Jk.fadeOut(50), BasePopupViewController.Ik.stop(), BasePopupViewController.Ik.fadeOut(50), BasePopupViewController.Kk.stop(), BasePopupViewController.Kk.fadeOut(50), BasePopupViewController.Lk.stop(), BasePopupViewController.Lk.fadeOut(50), BasePopupViewController.Mk.stop(), BasePopupViewController.Mk.fadeOut(50), BasePopupViewController.Nk.stop(), BasePopupViewController.Nk.fadeIn(200), BasePopupViewController.Ok.stop(), BasePopupViewController.Ok.fadeOut(50)
				}, i.prototype.ji = function() {
					getApp().r.Dd()
				}, i
			}(),
			DeleteAccountViewController = function() {
				var t = $("#delete-account-timer"),
					e = $("#delete-account-yes"),
					i = $("#delete-account-no"),
					o = extend(BasePopupViewController, function() {
						BasePopupViewController.call(this, i18n("index.game.popup.menu.delete.tab"), !1);
						var t = getApp();
						e.click(function() {
							t.r.Cd(), t.u.P() ? (t.u.bj(), t.u.Wi()) : t.s.gi()
						}), i.click(function() {
							t.r.Cd(), t.s.gi()
						}), this.Pl = []
					});
				return o.prototype.a = function() {
					o.parent.prototype.a.call(this)
				}, o.prototype.Rk = function() {
					BasePopupViewController.Fk.stop(), BasePopupViewController.Fk.fadeOut(50), BasePopupViewController.Gk.stop(), BasePopupViewController.Gk.fadeOut(50), BasePopupViewController.Hk.stop(), BasePopupViewController.Hk.fadeOut(50), BasePopupViewController.Jk.stop(), BasePopupViewController.Jk.fadeOut(50), BasePopupViewController.Ik.stop(), BasePopupViewController.Ik.fadeOut(50), BasePopupViewController.Kk.stop(), BasePopupViewController.Kk.fadeOut(50), BasePopupViewController.Lk.stop(), BasePopupViewController.Lk.fadeOut(50), BasePopupViewController.Mk.stop(), BasePopupViewController.Mk.fadeOut(50), BasePopupViewController.Nk.stop(), BasePopupViewController.Nk.fadeOut(50), BasePopupViewController.Ok.stop(), BasePopupViewController.Ok.fadeIn(200)
				}, o.prototype.ji = function() {
					getApp().r.Hd(), e.stop(), e.hide(), t.stop(), t.show(), t.text(".. 10 .."), this.Ql(), this.Rl(function() {
						t.text(".. 9 ..")
					}, 1e3), this.Rl(function() {
						t.text(".. 8 ..")
					}, 2e3), this.Rl(function() {
						t.text(".. 7 ..")
					}, 3e3), this.Rl(function() {
						t.text(".. 6 ..")
					}, 4e3), this.Rl(function() {
						t.text(".. 5 ..")
					}, 5e3), this.Rl(function() {
						t.text(".. 4 ..")
					}, 6e3), this.Rl(function() {
						t.text(".. 3 ..")
					}, 7e3), this.Rl(function() {
						t.text(".. 2 ..")
					}, 8e3), this.Rl(function() {
						t.text(".. 1 ..")
					}, 9e3), this.Rl(function() {
						t.hide(), e.fadeIn(300)
					}, 1e4)
				}, o.prototype.Rl = function(t, e) {
					var i = setTimeout(t, e);
					this.Pl.push(i)
				}, o.prototype.Ql = function() {
					for (var t = 0; t < this.Pl.length; t++) clearTimeout(this.Pl[t]);
					this.Pl = []
				}, o
			}(),
			BaseToasterViewController = function() {
				function t() {
					this.Ck = function() {}
				}
				return t.prototype.Bk = function() {}, t.prototype.ji = function() {}, t
			}(),
			CoinsToasterViewController = function() {
				var t = extend(BaseToasterViewController, function(t) {
					BaseToasterViewController.call(this);
					var e = Date.now() + "_" + Math.floor(1e3 + 8999 * Math.random());
					this.Sl = $('<div id="' + e + '" class="toaster toaster-coins">    <img class="toaster-coins-img" alt="Wormate Coin" src="/images/coin_320.png" />    <div class="toaster-coins-val">+' + t + '</div>    <div class="toaster-coins-close">' + i18n("index.game.toaster.continue") + "</div></div>");
					var i = this;
					this.Sl.find(".toaster-coins-close").click(function() {
						getApp().r.Cd(), i.Ck()
					})
				});
				return t.prototype.Bk = function() {
					return this.Sl
				}, t.prototype.ji = function() {
					getApp().r.Fd()
				}, t
			}(),
			LevelUpToasterViewController = function() {
				var t = extend(BaseToasterViewController, function(t) {
					BaseToasterViewController.call(this);
					var e = Date.now() + "_" + Math.floor(1e3 + 8999 * Math.random());
					this.Sl = $('<div id="' + e + '" class="toaster toaster-levelup">    <img class="toaster-levelup-img" alt="Wormate Level Up Star" src="/images/level-star.svg" />    <div class="toaster-levelup-val">' + t + '</div>    <div class="toaster-levelup-text">' + i18n("index.game.toaster.levelup") + '</div>    <div class="toaster-levelup-close">' + i18n("index.game.toaster.continue") + "</div></div>");
					var i = this;
					this.Sl.find(".toaster-levelup-close").click(function() {
						getApp().r.Cd(), i.Ck()
					})
				});
				return t.prototype.Bk = function() {
					return this.Sl
				}, t.prototype.ji = function() {
					getApp().r.Ed()
				}, t
			}(),
			ConsentAcceptanceToasterViewController = function() {
				var t = extend(BaseToasterViewController, function() {
					BaseToasterViewController.call(this);
					var t = this,
						e = getApp(),
						i = Date.now() + "_" + Math.floor(1e3 + 8999 * Math.random());
					this.Sl = $('<div id="' + i + '" class="toaster toaster-consent-accepted">    <img class="toaster-consent-accepted-logo" src="' + LINE_LOGO_URL + '" alt="Wormate.io logo"/>    <div class="toaster-consent-accepted-container">        <span class="toaster-consent-accepted-text">' + i18n("index.game.toaster.consent.text").replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + '</span>        <a class="toaster-consent-accepted-link" href="/privacy-policy">' + i18n("index.game.toaster.consent.link") + '</a>    </div>    <div class="toaster-consent-close">' + i18n("index.game.toaster.consent.iAccept") + "</div></div>"), this.Tl = this.Sl.find(".toaster-consent-close"), this.Tl.hide(), this.Tl.click(function() {
						e.r.Cd(), e.Y() && e.$(!0, !0), t.Ck()
					})
				});
				return t.prototype.Bk = function() {
					return this.Sl
				}, t.prototype.ji = function() {
					var t = this,
						e = getApp();
					e.Y() && !e.Z() ? (e.r.Hd(), setTimeout(function() {
						t.Tl.fadeIn(300)
					}, 2e3)) : setTimeout(function() {
						t.Ck()
					}, 0)
				}, t
			}(),
			ENV_MAP = {};
		ENV_MAP.main = {
			Ma: ADINPLAY_BANNER("aqnvgcpz05orkobh", atob("V1JNX3dvcm1hdGUtaW9fMzAweDI1MA==")),
			K: ADINPLAY_BANNER("ltmolilci1iurq1i", atob("d29ybWF0ZS1pb185NzB4MjUw")),
			ra: ADINPLAY_PREROLL_PLAYER(),
			e: 4,
			oa: !1,
			qk: !0
		}, ENV_MAP.miniclip = {
			Ma: ADINPLAY_BANNER("aqnvgcpz05orkobh", atob("V1JNX3dvcm1hdGUtaW9fMzAweDI1MA==")),
			K: ADINPLAY_BANNER("ltmolilci1iurq1i", atob("d29ybWF0ZS1pb185NzB4MjUw")),
			ra: ADINPLAY_PREROLL_PLAYER(),
			e: 4,
			oa: !1,
			qk: !1
		};
		var env = ENV_MAP[window.ENV];
		env || (env = ENV_MAP.main), $(function() {
			FastClick.attach(document.body)
		}), addEventListener("contextmenu", function(t) {
			return t.preventDefault(), t.stopPropagation(), !1
		}), loadScript("//connect.facebook.net/" + LOCALE + "/sdk.js", "facebook-jssdk", function() {
			FB.init({
				appId: atob("ODYxOTI2ODUwNjE5MDUx"),
				cookie: !0,
				xfbml: !0,
				status: !0,
				version: "v8.0"
			})
		}), loadScript("//apis.google.com/js/api:client.js", null, function() {
			gapi.load("auth2", function() {
				GoogleAuth = gapi.auth2.init({
					client_id: atob("OTU5NDI1MTkyMTM4LXFqcTIzbDllMG9oOGxnZDJpY25ibHJiZmJsYXI0YTJmLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29t")
				})
			})
		}), loadScript("//platform.twitter.com/widgets.js", "twitter-wjs"), loadScript("//apis.google.com/js/platform.js"), _anApp = Application(), _anApp.v();
		var loopFunc = function t() {
			requestAnimationFrame(t), getApp().Pa()
		};
		loopFunc();
		var __resize = function() {
				var t = j_body.width(),
					e = j_body.height(),
					i = j_stretchBox.outerWidth(),
					o = j_stretchBox.outerHeight(),
					n = j_markupHeader.outerHeight(),
					r = j_markupFooter.outerHeight(),
					s = Math.min(1, Math.min((e - r - n) / o, t / i)),
					a = "translate(-50%, -50%) scale(" + s + ")";
				j_stretchBox.css({
					"-webkit-transform": a,
					"-moz-transform": a,
					"-ms-transform": a,
					"-o-transform": a,
					transform: a
				}), getApp().Ra(), window.scrollTo(0, 1)
			},
			j_body = $("body"),
			j_stretchBox = $("#stretch-box"),
			j_markupHeader = $("#markup-header"),
			j_markupFooter = $("#markup-footer");
		__resize(), $(window).resize(__resize)
	}()
});