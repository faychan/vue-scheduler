(function(t) {
  function e(e) {
    for (
      var n, s, o = e[0], c = e[1], h = e[2], d = 0, l = [];
      d < o.length;
      d++
    )
      (s = o[d]), r[s] && l.push(r[s][0]), (r[s] = 0);
    for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (t[n] = c[n]);
    u && u(e);
    while (l.length) l.shift()();
    return i.push.apply(i, h || []), a();
  }
  function a() {
    for (var t, e = 0; e < i.length; e++) {
      for (var a = i[e], n = !0, o = 1; o < a.length; o++) {
        var c = a[o];
        0 !== r[c] && (n = !1);
      }
      n && (i.splice(e--, 1), (t = s((s.s = a[0]))));
    }
    return t;
  }
  var n = {},
    r = { app: 0 },
    i = [];
  function s(e) {
    if (n[e]) return n[e].exports;
    var a = (n[e] = { i: e, l: !1, exports: {} });
    return t[e].call(a.exports, a, a.exports, s), (a.l = !0), a.exports;
  }
  (s.m = t),
    (s.c = n),
    (s.d = function(t, e, a) {
      s.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a });
    }),
    (s.r = function(t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (s.t = function(t, e) {
      if ((1 & e && (t = s(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var a = Object.create(null);
      if (
        (s.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var n in t)
          s.d(
            a,
            n,
            function(e) {
              return t[e];
            }.bind(null, n)
          );
      return a;
    }),
    (s.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t["default"];
            }
          : function() {
              return t;
            };
      return s.d(e, "a", e), e;
    }),
    (s.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (s.p = "/");
  var o = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = o.push.bind(o);
  (o.push = e), (o = o.slice());
  for (var h = 0; h < o.length; h++) e(o[h]);
  var u = c;
  i.push([0, "chunk-vendors"]), a();
})({
  0: function(t, e, a) {
    t.exports = a("56d7");
  },
  "034f": function(t, e, a) {
    "use strict";
    var n = a("c21b"),
      r = a.n(n);
    r.a;
  },
  "56d7": function(t, e, a) {
    "use strict";
    a.r(e);
    a("cadf"), a("551c"), a("097d");
    var n = a("2b0e"),
      r = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", { attrs: { id: "app" } }, [
          a(
            "div",
            { attrs: { id: "calendar-wrap" } },
            [
              a("iMarker", {
                ref: "calendar",
                attrs: {
                  weekText: t.props.weekText.selected,
                  sundayBegin: t.props.sundayBegin,
                  format: t.props.format.selected,
                  markers: t.props.markers,
                  disabledFutureDay: t.props.disabledFutureDay,
                  hideOtherMonthDay: t.props.hideOtherMonthDay,
                  hideOtherMonthMarker: t.props.hideOtherMonthMarker
                },
                on: {
                  month: function(e) {
                    t.handleDateChange(e);
                  },
                  day: function(e) {
                    t.handleDateChange(e);
                  }
                }
              })
            ],
            1
          ),
          a("div", { staticClass: "copyright" }, [
            t._v("Copyright © 2019 Allen AuYeung")
          ])
        ]);
      },
      i = [],
      s = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", { attrs: { id: "calendar" } }, [
          a(
            "div",
            { staticClass: "calendar-header" },
            [
              t.$slots["month-switch"]
                ? t._t("month-switch")
                : a("div", { staticClass: "month-switch" }, [
                    a("span", {
                      staticClass: "prev",
                      on: {
                        click: function(e) {
                          t.handleMonthSwitch("prev");
                        }
                      }
                    }),
                    a("span", [
                      t._v(
                        t._s(t.currentDateObj.year) +
                          "-" +
                          t._s(
                            t.currentDateObj.month > 9
                              ? t.currentDateObj.month
                              : "0" + t.currentDateObj.month
                          )
                      )
                    ]),
                    a("span", {
                      staticClass: "next",
                      on: {
                        click: function(e) {
                          t.handleMonthSwitch("next");
                        }
                      }
                    })
                  ])
            ],
            2
          ),
          a("div", { staticClass: "calendar-content" }, [
            a(
              "ul",
              { staticClass: "week" },
              t._l(t.weekTxt, function(e, n) {
                return a("li", { key: n }, [t._v(t._s(e))]);
              })
            ),
            a(
              "ul",
              { staticClass: "month" },
              t._l(t.days, function(e, n) {
                return a(
                  "li",
                  {
                    key: n,
                    class: [t.dayClasses(e), e.className],
                    on: {
                      click: function(a) {
                        t.handleDayChoose(e, n);
                      }
                    }
                  },
                  [a("span", [t._v(t._s(e.day))])]
                );
              })
            )
          ])
        ]);
      },
      o = [],
      c = (a("28a5"), a("9393")),
      h = a("8afe"),
      u = (a("4917"),
      a("a481"),
      a("6762"),
      a("2fdb"),
      {
        isLeapYear: function(t) {
          return (t % 4 == 0 && t % 100 != 0) || t % 400 == 0;
        },
        isWeekend: function(t) {
          return [0, 6].includes(new Date(t).getDay());
        },
        getTimestamp: function(t) {
          return t ? +new Date(t) : +new Date();
        },
        splicingDate: function() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e = t.year,
            a = t.month,
            n = t.day,
            r = arguments.length > 1 ? arguments[1] : void 0;
          return r
            ? r.replace(/\[.*?\]|Y{2,4}|M{1,2}|D{1,2}|SSS/g, function(t) {
                return {
                  YY: String(e).slice(-2),
                  YYYY: e,
                  M: a,
                  MM: a > 9 ? a : "0".concat(a),
                  D: n,
                  DD: n > 9 ? n : "0".concat(n)
                }[t];
              })
            : ""
                .concat(e, "-")
                .concat(a, "-")
                .concat(n);
        },
        getTotalDays: function(t, e) {
          return 2 == e
            ? this.isLeapYear(t)
              ? 29
              : 28
            : String(e).match(/\[.*?\]|4|6|9|11|SSS/g)
            ? 30
            : 31;
        }
      }),
      d = {
        props: {
          markers: Array,
          weekText: Array,
          disabledFutureDay: { type: Boolean, default: !1 },
          hideOtherMonthDay: { type: Boolean, default: !1 },
          hideOtherMonthMarker: { type: Boolean, default: !0 },
          format: { type: String, default: "YYYY-MM-DD" },
          sundayBegin: { type: Boolean, default: !0 }
        },
        computed: {
          weekTxt: function() {
            if (this.weekText) return this.weekText;
            var t = ["S", "M", "T", "W", "T", "F", "S"];
            return this.sundayBegin || t.push(t.shift()), t;
          }
        },
        data: function() {
          return {
            days: [],
            currentDateObj: {
              date: null,
              year: new Date().getFullYear(),
              month: new Date().getMonth() + 1,
              day: new Date().getDate()
            }
          };
        },
        watch: {
          "currentDateObj.month": function() {
            this.initCalendar();
          }
        },
        created: function() {
          this.initCalendar(),
            (this.currentDateObj.date = u.splicingDate(
              this.currentDateObj,
              this.format
            )),
            this.$emit("day", this.currentDateObj.date);
        },
        methods: {
          dayClasses: function(t) {
            return {
              "choose-day": this.currentDateObj.day === t.day,
              "disabled-day": this.disabledFutureDay && t.isFutureDay,
              "other-month-day": t.isOtherMonthDay,
              "other-month-day--hide":
                this.hideOtherMonthDay && t.isOtherMonthDay,
              "other-month-marker--hide":
                this.hideOtherMonthMarker && t.isOtherMonthDay,
              "weekend-day": t.isWeekendDay
            };
          },
          initCalendar: function() {
            var t = this.currentDateObj,
              e = t.year,
              a = t.month,
              n = 1 === a ? 12 : a - 1,
              r = 12 === a ? 1 : a + 1,
              i = this.handleDays(e, a),
              s = this.handleDays(e, n, !0),
              o = this.handleDays(e, r, !0),
              c = new Date(i[0].date).getDay(),
              u = new Date(i[i.length - 1].date).getDay();
            this.sundayBegin ? (u += 1) : (c -= 1);
            var d = s.splice(s.length - c, s.length - 1),
              l = o.splice(0, 7 - u);
            d.concat(l).map(function(t) {
              return (t["isOtherMonthDay"] = !0);
            }),
              (this.days = Object(h["a"])(d).concat(
                Object(h["a"])(i),
                Object(h["a"])(l)
              ));
          },
          handleMonthSwitch: function(t) {
            var e = this.currentDateObj,
              a = e.year,
              n = e.month;
            "prev" === t && (n > 1 ? n-- : (a--, (n = 12))),
              "next" === t && (n < 12 ? n++ : (a++, (n = 1)));
            var r = u.getTotalDays(a, n);
            (new Date().getDate() > r || this.currentDateObj.day > r) &&
              (this.currentDateObj.day = r),
              (this.currentDateObj.year = a),
              (this.currentDateObj.month = n),
              (this.currentDateObj.date = u.splicingDate(
                this.currentDateObj,
                this.format
              )),
              this.$emit("month", this.currentDateObj.date);
          },
          handleDayChoose: function(t) {
            (this.disabledFutureDay && t.isFutureDay) ||
              (this.hideOtherMonthDay && t.isOtherMonthDay) ||
              ((this.currentDateObj.day = t.day),
              (this.currentDateObj.date = t.date),
              this.$emit(
                "day",
                u.splicingDate(this.currentDateObj, this.format)
              ),
              t.isOtherMonthDay &&
                (t.day > 7
                  ? this.handleMonthSwitch("prev")
                  : this.handleMonthSwitch("next")));
          },
          handleDays: function(t, e) {
            var a = this,
              n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              r = [],
              i = u.getTotalDays(t, e);
            n && (1 === e && (t += 1), 12 === e && (t -= 1));
            for (
              var s = function(i) {
                  var s = i + 1,
                    o = u.splicingDate({ year: t, month: e, day: s }),
                    c = {
                      day: s,
                      date: o,
                      isFutureDay: u.getTimestamp() < u.getTimestamp(o),
                      isWeekendDay: u.isWeekend(o)
                    },
                    h = a.markers;
                  !h ||
                    (n && a.hideOtherMonthMarker) ||
                    h.map(function(t) {
                      u.getTimestamp(c.date) === u.getTimestamp(t.date) &&
                        (c["className"] = t.className);
                    }),
                    r.push(c);
                },
                o = 0;
              o < i;
              o++
            )
              s(o);
            return r;
          },
          chooseTargetDate: function(t) {
            if (!t) throw "Missing required parameters";
            var e = t.split("-"),
              a = Object(c["a"])(e, 3),
              n = a[0],
              r = a[1],
              i = a[2],
              s = this.currentDateObj,
              o = s.year,
              h = s.month;
            (this.currentDateObj.day = +i),
              (this.currentDateObj.date = t),
              n != o &&
                r != h &&
                ((this.currentDateObj.year = +n),
                (this.currentDateObj.month = +r),
                this.initCalendar());
          },
          switchToPrevMonth: function() {
            this.handleMonthSwitch("prev");
          },
          switchToNextMonth: function() {
            this.handleMonthSwitch("next");
          }
        }
      },
      l = d,
      p = (a("9992"), a("2877")),
      f = Object(p["a"])(l, s, o, !1, null, "8d091fd4", null);
    f.options.__file = "iMarker.vue";
    var D = f.exports,
      y = new Date(),
      m = y.getFullYear(),
      g = y.getMonth() + 1,
      b = {
        name: "app",
        components: { iMarker: D },
        data: function() {
          return {
            props: {
              disabledFutureDay: !1,
              hideOtherMonthDay: !1,
              hideOtherMonthMarker: !1,
              sundayBegin: !1,
              format: {
                selected: "YYYY-MM-DD",
                options: ["YYYY-MM-DD", "YYYY-M-D", "YY/MM/DD", "YY/M/D"]
              },
              weekText: {
                lang: "EN",
                selected: "",
                options: [
                  { lang: "EN", value: ["M", "T", "W", "T", "F", "S", "S"] },
                  {
                    lang: "ZH",
                    value: ["一", "二", "三", "四", "五", "六", "日"]
                  }
                ]
              },
              markers: [
                {
                  date: "".concat(m, "-").concat(g, "-09"),
                  className: "meeting"
                },
                { date: "".concat(m, "-").concat(g, "-20"), className: "casual" },
                { date: "".concat(m, "-").concat(g, "-30"), className: "love" },
                {
                  date: "".concat(m, "-").concat(g + 1, "-01"),
                  className: "urgent"
                }
              ]
            },
            currentDate: "",
            targetDate: ""
          };
        },
        watch: {
          currentDate: function(t, e) {
            this.targetDate = e;
          },
          "props.format.selected": function() {
            this.$refs.calendar.chooseTargetDate(this.currentDate);
          },
          "props.weekText.lang": function(t) {
            this.setWeekText(t);
          }
        },
        created: function() {
          this.setWeekText();
        },
        methods: {
          handleDateChange: function(t) {
            this.currentDate = t;
          },
          setWeekText: function() {
            var t = this,
              e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "EN";
            this.props.weekText.options.filter(function(a) {
              a.lang === e && (t.props.weekText.selected = a.value);
            });
          },
          chooseTargetDate: function() {
            this.$refs.calendar.chooseTargetDate(this.targetDate);
          }
        }
      },
      v = b,
      O = (a("034f"), Object(p["a"])(v, r, i, !1, null, null, null));
    O.options.__file = "App.vue";
    var M = O.exports;
    (n["a"].config.productionTip = !1),
      new n["a"]({
        render: function(t) {
          return t(M);
        }
      }).$mount("#app");
  },
  9992: function(t, e, a) {
    "use strict";
    var n = a("d52d"),
      r = a.n(n);
    r.a;
  },
  c21b: function(t, e, a) {},
  d52d: function(t, e, a) {}
});
//# sourceMappingURL=app.356ff5a2.js.map
