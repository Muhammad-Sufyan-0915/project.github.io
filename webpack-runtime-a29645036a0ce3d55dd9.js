! function(e) {
    function t(t) {
        for (var n, r, s = t[0], d = t[1], p = t[2], f = 0, l = []; f < s.length; f++) r = s[f], Object.prototype.hasOwnProperty.call(o, r) && o[r] && l.push(o[r][0]), o[r] = 0;
        for (n in d) Object.prototype.hasOwnProperty.call(d, n) && (e[n] = d[n]);
        for (b && b(t); l.length;) l.shift()();
        return a.push.apply(a, p || []), c()
    }

    function c() {
        for (var e, t = 0; t < a.length; t++) {
            for (var c = a[t], n = !0, r = 1; r < c.length; r++) {
                var d = c[r];
                0 !== o[d] && (n = !1)
            }
            n && (a.splice(t--, 1), e = s(s.s = c[0]))
        }
        return e
    }
    var n = {},
        r = {
            5: 0
        },
        o = {
            5: 0
        },
        a = [];

    function s(t) {
        if (n[t]) return n[t].exports;
        var c = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(c.exports, c, c.exports, s), c.l = !0, c.exports
    }
    s.e = function(e) {
        var t = [];
        r[e] ? t.push(r[e]) : 0 !== r[e] && {
            0: 1
        }[e] && t.push(r[e] = new Promise((function(t, c) {
            for (var n = ({
                    0: "styles",
                    1: "e177db8abfd3102d1d2ef90237003e77b12395ed",
                    2: "512fbc19f990ca4d4efdb658b60e946022eabfcc",
                    3: "d08c82e3bfe99f3a4f06cb92256e4209cb05c702",
                    7: "component---src-lib-gatsby-wrap-redirector-tsx",
                    8: "component---src-lib-riot-opt-in-tsx",
                    9: "component---src-lib-riot-pbe-opt-in-tsx",
                    10: "component---src-pages-404-tsx",
                    11: "component---src-pages-index-tsx",
                    12: "component---src-templates-agents-tsx",
                    13: "component---src-templates-arsenal-tsx",
                    14: "component---src-templates-categories-tsx",
                    15: "component---src-templates-download-tsx",
                    16: "component---src-templates-leaderboards-tsx",
                    17: "component---src-templates-maps-tsx",
                    18: "component---src-templates-media-tsx",
                    19: "component---src-templates-news-article-tsx",
                    20: "component---src-templates-news-tsx",
                    21: "component---src-templates-pbe-download-tsx",
                    22: "component---src-templates-pbe-tsx",
                    23: "component---src-templates-specs-tsx",
                    24: "component---src-templates-tags-tsx"
                }[e] || e) + "." + {
                    0: "d1de1e2e2562e09b0f65",
                    1: "31d6cfe0d16ae931b73c",
                    2: "31d6cfe0d16ae931b73c",
                    3: "31d6cfe0d16ae931b73c",
                    7: "31d6cfe0d16ae931b73c",
                    8: "31d6cfe0d16ae931b73c",
                    9: "31d6cfe0d16ae931b73c",
                    10: "31d6cfe0d16ae931b73c",
                    11: "31d6cfe0d16ae931b73c",
                    12: "31d6cfe0d16ae931b73c",
                    13: "31d6cfe0d16ae931b73c",
                    14: "31d6cfe0d16ae931b73c",
                    15: "31d6cfe0d16ae931b73c",
                    16: "31d6cfe0d16ae931b73c",
                    17: "31d6cfe0d16ae931b73c",
                    18: "31d6cfe0d16ae931b73c",
                    19: "31d6cfe0d16ae931b73c",
                    20: "31d6cfe0d16ae931b73c",
                    21: "31d6cfe0d16ae931b73c",
                    22: "31d6cfe0d16ae931b73c",
                    23: "31d6cfe0d16ae931b73c",
                    24: "31d6cfe0d16ae931b73c",
                    27: "31d6cfe0d16ae931b73c"
                }[e] + ".css", o = s.p + n, a = document.getElementsByTagName("link"), d = 0; d < a.length; d++) {
                var p = (b = a[d]).getAttribute("data-href") || b.getAttribute("href");
                if ("stylesheet" === b.rel && (p === n || p === o)) return t()
            }
            var f = document.getElementsByTagName("style");
            for (d = 0; d < f.length; d++) {
                var b;
                if ((p = (b = f[d]).getAttribute("data-href")) === n || p === o) return t()
            }
            var l = document.createElement("link");
            l.rel = "stylesheet", l.type = "text/css", l.onload = t, l.onerror = function(t) {
                var n = t && t.target && t.target.src || o,
                    a = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
                a.code = "CSS_CHUNK_LOAD_FAILED", a.request = n, delete r[e], l.parentNode.removeChild(l), c(a)
            }, l.href = o, document.getElementsByTagName("head")[0].appendChild(l)
        })).then((function() {
            r[e] = 0
        })));
        var c = o[e];
        if (0 !== c)
            if (c) t.push(c[2]);
            else {
                var n = new Promise((function(t, n) {
                    c = o[e] = [t, n]
                }));
                t.push(c[2] = n);
                var a, d = document.createElement("script");
                d.charset = "utf-8", d.timeout = 120, s.nc && d.setAttribute("nonce", s.nc), d.src = function(e) {
                    return s.p + "" + ({
                        0: "styles",
                        1: "e177db8abfd3102d1d2ef90237003e77b12395ed",
                        2: "512fbc19f990ca4d4efdb658b60e946022eabfcc",
                        3: "d08c82e3bfe99f3a4f06cb92256e4209cb05c702",
                        7: "component---src-lib-gatsby-wrap-redirector-tsx",
                        8: "component---src-lib-riot-opt-in-tsx",
                        9: "component---src-lib-riot-pbe-opt-in-tsx",
                        10: "component---src-pages-404-tsx",
                        11: "component---src-pages-index-tsx",
                        12: "component---src-templates-agents-tsx",
                        13: "component---src-templates-arsenal-tsx",
                        14: "component---src-templates-categories-tsx",
                        15: "component---src-templates-download-tsx",
                        16: "component---src-templates-leaderboards-tsx",
                        17: "component---src-templates-maps-tsx",
                        18: "component---src-templates-media-tsx",
                        19: "component---src-templates-news-article-tsx",
                        20: "component---src-templates-news-tsx",
                        21: "component---src-templates-pbe-download-tsx",
                        22: "component---src-templates-pbe-tsx",
                        23: "component---src-templates-specs-tsx",
                        24: "component---src-templates-tags-tsx"
                    }[e] || e) + "-" + {
                        0: "407fe62976dc5310c43e",
                        1: "8bb1470933c979bb8ade",
                        2: "eb27a6316307d29654bb",
                        3: "4df3cc90047db1558113",
                        7: "51bc599be18f7dd6ce55",
                        8: "642cc39ea8ba23b039a6",
                        9: "554ddaf2a42aa4f15d38",
                        10: "20aafbde389f4843f85e",
                        11: "3514c7a262304291ae34",
                        12: "012a79e36224dd49b3ee",
                        13: "921477a9b68f2f75a4f3",
                        14: "5f26ef47a57c2abb86c8",
                        15: "ffd334eb172152a8f216",
                        16: "388957f01d40b3393f72",
                        17: "b292d156d69f6593ccf2",
                        18: "c033647c933d8591fddd",
                        19: "a31f716b5b49642bee51",
                        20: "aeea739898efe8cb4ffd",
                        21: "1d90e9282ac7abc35565",
                        22: "3dd20647b340d82576e6",
                        23: "c4d3d435067374b5c895",
                        24: "0a9b73520716b2409cc8",
                        27: "ea3299dd17d5502b223f"
                    }[e] + ".js"
                }(e);
                var p = new Error;
                a = function(t) {
                    d.onerror = d.onload = null, clearTimeout(f);
                    var c = o[e];
                    if (0 !== c) {
                        if (c) {
                            var n = t && ("load" === t.type ? "missing" : t.type),
                                r = t && t.target && t.target.src;
                            p.message = "Loading chunk " + e + " failed.\n(" + n + ": " + r + ")", p.name = "ChunkLoadError", p.type = n, p.request = r, c[1](p)
                        }
                        o[e] = void 0
                    }
                };
                var f = setTimeout((function() {
                    a({
                        type: "timeout",
                        target: d
                    })
                }), 12e4);
                d.onerror = d.onload = a, document.head.appendChild(d)
            }
        return Promise.all(t)
    }, s.m = e, s.c = n, s.d = function(e, t, c) {
        s.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: c
        })
    }, s.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, s.t = function(e, t) {
        if (1 & t && (e = s(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var c = Object.create(null);
        if (s.r(c), Object.defineProperty(c, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e) s.d(c, n, function(t) {
                return e[t]
            }.bind(null, n));
        return c
    }, s.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return s.d(t, "a", t), t
    }, s.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, s.p = "/", s.oe = function(e) {
        throw console.error(e), e
    };
    var d = window.webpackJsonp = window.webpackJsonp || [],
        p = d.push.bind(d);
    d.push = t, d = d.slice();
    for (var f = 0; f < d.length; f++) t(d[f]);
    var b = p;
    c()
}([]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiXSwibmFtZXMiOlsid2VicGFja0pzb25wQ2FsbGJhY2siLCJkYXRhIiwibW9kdWxlSWQiLCJjaHVua0lkIiwiY2h1bmtJZHMiLCJtb3JlTW9kdWxlcyIsImV4ZWN1dGVNb2R1bGVzIiwiaSIsInJlc29sdmVzIiwibGVuZ3RoIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaW5zdGFsbGVkQ2h1bmtzIiwicHVzaCIsIm1vZHVsZXMiLCJwYXJlbnRKc29ucEZ1bmN0aW9uIiwic2hpZnQiLCJkZWZlcnJlZE1vZHVsZXMiLCJhcHBseSIsImNoZWNrRGVmZXJyZWRNb2R1bGVzIiwicmVzdWx0IiwiZGVmZXJyZWRNb2R1bGUiLCJmdWxmaWxsZWQiLCJqIiwiZGVwSWQiLCJzcGxpY2UiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwicyIsImluc3RhbGxlZE1vZHVsZXMiLCJpbnN0YWxsZWRDc3NDaHVua3MiLCI1IiwiZXhwb3J0cyIsIm1vZHVsZSIsImwiLCJlIiwicHJvbWlzZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImhyZWYiLCJmdWxsaHJlZiIsInAiLCJleGlzdGluZ0xpbmtUYWdzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImRhdGFIcmVmIiwidGFnIiwiZ2V0QXR0cmlidXRlIiwicmVsIiwiZXhpc3RpbmdTdHlsZVRhZ3MiLCJsaW5rVGFnIiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJvbmxvYWQiLCJvbmVycm9yIiwiZXZlbnQiLCJyZXF1ZXN0IiwidGFyZ2V0Iiwic3JjIiwiZXJyIiwiRXJyb3IiLCJjb2RlIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiYXBwZW5kQ2hpbGQiLCJ0aGVuIiwiaW5zdGFsbGVkQ2h1bmtEYXRhIiwicHJvbWlzZSIsIm9uU2NyaXB0Q29tcGxldGUiLCJzY3JpcHQiLCJjaGFyc2V0IiwidGltZW91dCIsIm5jIiwic2V0QXR0cmlidXRlIiwianNvbnBTY3JpcHRTcmMiLCJlcnJvciIsImNsZWFyVGltZW91dCIsImNodW5rIiwiZXJyb3JUeXBlIiwicmVhbFNyYyIsIm1lc3NhZ2UiLCJuYW1lIiwidW5kZWZpbmVkIiwic2V0VGltZW91dCIsImhlYWQiLCJhbGwiLCJtIiwiYyIsImQiLCJnZXR0ZXIiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJvZSIsImNvbnNvbGUiLCJqc29ucEFycmF5Iiwid2luZG93Iiwib2xkSnNvbnBGdW5jdGlvbiIsInNsaWNlIl0sIm1hcHBpbmdzIjoiYUFDRSxTQUFTQSxFQUFxQkMsR0FRN0IsSUFQQSxJQU1JQyxFQUFVQyxFQU5WQyxFQUFXSCxFQUFLLEdBQ2hCSSxFQUFjSixFQUFLLEdBQ25CSyxFQUFpQkwsRUFBSyxHQUlITSxFQUFJLEVBQUdDLEVBQVcsR0FDcENELEVBQUlILEVBQVNLLE9BQVFGLElBQ3pCSixFQUFVQyxFQUFTRyxHQUNoQkcsT0FBT0MsVUFBVUMsZUFBZUMsS0FBS0MsRUFBaUJYLElBQVlXLEVBQWdCWCxJQUNwRkssRUFBU08sS0FBS0QsRUFBZ0JYLEdBQVMsSUFFeENXLEVBQWdCWCxHQUFXLEVBRTVCLElBQUlELEtBQVlHLEVBQ1pLLE9BQU9DLFVBQVVDLGVBQWVDLEtBQUtSLEVBQWFILEtBQ3BEYyxFQUFRZCxHQUFZRyxFQUFZSCxJQUtsQyxJQUZHZSxHQUFxQkEsRUFBb0JoQixHQUV0Q08sRUFBU0MsUUFDZEQsRUFBU1UsT0FBVFYsR0FPRCxPQUhBVyxFQUFnQkosS0FBS0ssTUFBTUQsRUFBaUJiLEdBQWtCLElBR3ZEZSxJQUVSLFNBQVNBLElBRVIsSUFEQSxJQUFJQyxFQUNJZixFQUFJLEVBQUdBLEVBQUlZLEVBQWdC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QzVCQSxHQUlSL0QsRUFBb0JnRSxFQUFJLFNBQVNnQixFQUFRQyxHQUFZLE9BQU9uRyxPQUFPQyxVQUFVQyxlQUFlQyxLQUFLK0YsRUFBUUMsSUFHekdqRixFQUFvQmUsRUFBSSxJQUd4QmYsRUFBb0JrRixHQUFLLFNBQVNqRCxHQUEyQixNQUFwQmtELFFBQVFsQyxNQUFNaEIsR0FBWUEsR0FFbkUsSUFBSW1ELEVBQWFDLE9BQXFCLGFBQUlBLE9BQXFCLGNBQUssR0FDaEVDLEVBQW1CRixFQUFXakcsS0FBSzJGLEtBQUtNLEdBQzVDQSxFQUFXakcsS0FBT2YsRUFDbEJnSCxFQUFhQSxFQUFXRyxRQUN4QixJQUFJLElBQUk1RyxFQUFJLEVBQUdBLEVBQUl5RyxFQUFXdkcsT0FBUUYsSUFBS1AsRUFBcUJnSCxFQUFXekcsSUFDM0UsSUFBSVUsRUFBc0JpRyxFQUkxQjdGLEkiLCJmaWxlIjoid2VicGFjay1ydW50aW1lLWEyOTY0NTAzNmEwY2UzZDU1ZGQ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgQ1NTIGNodW5rc1xuIFx0dmFyIGluc3RhbGxlZENzc0NodW5rcyA9IHtcbiBcdFx0NTogMFxuIFx0fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdDU6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gc2NyaXB0IHBhdGggZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIGpzb25wU2NyaXB0U3JjKGNodW5rSWQpIHtcbiBcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyAoe1wiMFwiOlwic3R5bGVzXCIsXCIxXCI6XCJlMTc3ZGI4YWJmZDMxMDJkMWQyZWY5MDIzNzAwM2U3N2IxMjM5NWVkXCIsXCIyXCI6XCI1MTJmYmMxOWY5OTBjYTRkNGVmZGI2NThiNjBlOTQ2MDIyZWFiZmNjXCIsXCIzXCI6XCJkMDhjODJlM2JmZTk5ZjNhNGYwNmNiOTIyNTZlNDIwOWNiMDVjNzAyXCIsXCI3XCI6XCJjb21wb25lbnQtLS1zcmMtbGliLWdhdHNieS13cmFwLXJlZGlyZWN0b3ItdHN4XCIsXCI4XCI6XCJjb21wb25lbnQtLS1zcmMtbGliLXJpb3Qtb3B0LWluLXRzeFwiLFwiOVwiOlwiY29tcG9uZW50LS0tc3JjLWxpYi1yaW90LXBiZS1vcHQtaW4tdHN4XCIsXCIxMFwiOlwiY29tcG9uZW50LS0tc3JjLXBhZ2VzLTQwNC10c3hcIixcIjExXCI6XCJjb21wb25lbnQtLS1zcmMtcGFnZXMtaW5kZXgtdHN4XCIsXCIxMlwiOlwiY29tcG9uZW50LS0tc3JjLXRlbXBsYXRlcy1hZ2VudHMtdHN4XCIsXCIxM1wiOlwiY29tcG9uZW50LS0tc3JjLXRlbXBsYXRlcy1hcnNlbmFsLXRzeFwiLFwiMTRcIjpcImNvbXBvbmVudC0tLXNyYy10ZW1wbGF0ZXMtY2F0ZWdvcmllcy10c3hcIixcIjE1XCI6XCJjb21wb25lbnQtLS1zcmMtdGVtcGxhdGVzLWRvd25sb2FkLXRzeFwiLFwiMTZcIjpcImNvbXBvbmVudC0tLXNyYy10ZW1wbGF0ZXMtbGVhZGVyYm9hcmRzLXRzeFwiLFwiMTdcIjpcImNvbXBvbmVudC0tLXNyYy10ZW1wbGF0ZXMtbWFwcy10c3hcIixcIjE4XCI6XCJjb21wb25lbnQtLS1zcmMtdGVtcGxhdGVzLW1lZGlhLXRzeFwiLFwiMTlcIjpcImNvbXBvbmVudC0tLXNyYy10ZW1wbGF0ZXMtbmV3cy1hcnRpY2xlLXRzeFwiLFwiMjBcIjpcImNvbXBvbmVudC0tLXNyYy10ZW1wbGF0ZXMtbmV3cy10c3hcIixcIjIxXCI6XCJjb21wb25lbnQtLS1zcmMtdGVtcGxhdGVzLXBiZS1kb3dubG9hZC10c3hcIixcIjIyXCI6XCJjb21wb25lbnQtLS1zcmMtdGVtcGxhdGVzLXBiZS10c3hcIixcIjIzXCI6XCJjb21wb25lbnQtLS1zcmMtdGVtcGxhdGVzLXNwZWNzLXRzeFwiLFwiMjRcIjpcImNvbXBvbmVudC0tLXNyYy10ZW1wbGF0ZXMtdGFncy10c3hcIn1bY2h1bmtJZF18fGNodW5rSWQpICsgXCItXCIgKyB7XCIwXCI6XCI0MDdmZTYyOTc2ZGM1MzEwYzQzZVwiLFwiMVwiOlwiOGJiMTQ3MDkzM2M5NzliYjhhZGVcIixcIjJcIjpcImViMjdhNjMxNjMwN2QyOTY1NGJiXCIsXCIzXCI6XCI0ZGYzY2M5MDA0N2RiMTU1ODExM1wiLFwiN1wiOlwiNTFiYzU5OWJlMThmN2RkNmNlNTVcIixcIjhcIjpcIjY0MmNjMzllYThiYTIzYjAzOWE2XCIsXCI5XCI6XCI1NTRkZGFmMmE0MmFhNGYxNWQzOFwiLFwiMTBcIjpcIjIwYWFmYmRlMzg5ZjQ4NDNmODVlXCIsXCIxMVwiOlwiMzUxNGM3YTI2MjMwNDI5MWFlMzRcIixcIjEyXCI6XCIwMTJhNzllMzYyMjRkZDQ5YjNlZVwiLFwiMTNcIjpcIjkyMTQ3N2E5YjY4ZjJmNzVhNGYzXCIsXCIxNFwiOlwiNWYyNmVmNDdhNTdjMmFiYjg2YzhcIixcIjE1XCI6XCJmZmQzMzRlYjE3MjE1MmE4ZjIxNlwiLFwiMTZcIjpcIjM4ODk1N2YwMWQ0MGIzMzkzZjcyXCIsXCIxN1wiOlwiYjI5MmQxNTZkNjlmNjU5M2NjZjJcIixcIjE4XCI6XCJjMDMzNjQ3YzkzM2Q4NTkxZmRkZFwiLFwiMTlcIjpcImEzMWY3MTZiNWI0OTY0MmJlZTUxXCIsXCIyMFwiOlwiYWVlYTczOTg5OGVmZThjYjRmZmRcIixcIjIxXCI6XCIxZDkwZTkyODJhYzdhYmMzNTU2NVwiLFwiMjJcIjpcIjNkZDIwNjQ3YjM0MGQ4MjU3NmU2XCIsXCIyM1wiOlwiYzRkM2Q0MzUwNjczNzRiNWM4OTVcIixcIjI0XCI6XCIwYTliNzM1MjA3MTZiMjQwOWNjOFwiLFwiMjdcIjpcImVhMzI5OWRkMTdkNTUwMmIyMjNmXCJ9W2NodW5rSWRdICsgXCIuanNcIlxuIFx0fVxuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4gQ1NTIGxvYWRpbmdcbiBcdFx0dmFyIGNzc0NodW5rcyA9IHtcIjBcIjoxfTtcbiBcdFx0aWYoaW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdKSBwcm9taXNlcy5wdXNoKGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXSk7XG4gXHRcdGVsc2UgaWYoaW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdICE9PSAwICYmIGNzc0NodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHR2YXIgaHJlZiA9IFwiXCIgKyAoe1wiMFwiOlwic3R5bGVzXCIsXCIxXCI6XCJlMTc3ZGI4YWJmZDMxMDJkMWQyZWY5MDIzNzAwM2U3N2IxMjM5NWVkXCIsXCIyXCI6XCI1MTJmYmMxOWY5OTBjYTRkNGVmZGI2NThiNjBlOTQ2MDIyZWFiZmNjXCIsXCIzXCI6XCJkMDhjODJlM2JmZTk5ZjNhNGYwNmNiOTIyNTZlNDIwOWNiMDVjNzAyXCIsXCI3XCI6XCJjb21wb25lbnQtLS1zcmMtbGliLWdhdHNieS13cmFwLXJlZGlyZWN0b3ItdHN4XCIsXCI4XCI6XCJjb21wb25lbnQtLS1zcmMtbGliLXJpb3Qtb3B0LWluLXRzeFwiLFwiOVwiOlwiY29tcG9uZW50LS0tc3JjLWxpYi1yaW90LXBiZS1vcHQtaW4tdHN4XCIsXCIxMFwiOlwiY29tcG9uZW50LS0tc3JjLXBhZ2VzLTQwNC10c3hcIixcIjExXCI6XCJjb21wb25lbnQtLS1zcmMtcGFnZXMtaW5kZXgtdHN4XCIsXCIxMlwiOlwiY29tcG9uZW50LS0tc3JjLXRlbXBsYXRlcy1hZ2VudHMtdHN4XCIsXCIxM1wiOlwiY29tcG9uZW50LS0tc3JjLXRlbXBsYXRlcy1hcnNlbmFsLXRzeFwiLFwiMTRcIjpcImNvbXBvbmVudC0tLXNyYy10ZW1wbGF0ZXMtY2F0ZWdvcmllcy10c3hcIixcIjE1XCI6XCJjb21wb25lbnQtLS1zcmMtdGVtcGxhdGVzLWRvd25sb2FkLXRzeFwiLFwiMTZcIjpcImNvbXBvbmVudC0tLXNyYy10ZW1wbGF0ZXMtbGVhZGVyYm9hcmRzLXRzeFwiLFwiMTdcIjpcImNvbXBvbmVudC0tLXNyYy10ZW1wbGF0ZXMtbWFwcy10c3hcIixcIjE4XCI6XCJjb21wb25lbnQtLS1zcmMtdGVtcGxhdGVzLW1lZGlhLXRzeFwiLFwiMTlcIjpcImNvbXBvbmVudC0tLXNyYy10ZW1wbGF0ZXMtbmV3cy1hcnRpY2xlLXRzeFwiLFwiMjBcIjpcImNvbXBvbmVudC0tLXNyYy10ZW1wbGF0ZXMtbmV3cy10c3hcIixcIjIxXCI6XCJjb21wb25lbnQtLS1zcmMtdGVtcGxhdGVzLXBiZS1kb3dubG9hZC10c3hcIixcIjIyXCI6XCJjb21wb25lbnQtLS1zcmMtdGVtcGxhdGVzLXBiZS10c3hcIixcIjIzXCI6XCJjb21wb25lbnQtLS1zcmMtdGVtcGxhdGVzLXNwZWNzLXRzeFwiLFwiMjRcIjpcImNvbXBvbmVudC0tLXNyYy10ZW1wbGF0ZXMtdGFncy10c3hcIn1bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuXCIgKyB7XCIwXCI6XCJkMWRlMWUyZTI1NjJlMDliMGY2NVwiLFwiMVwiOlwiMzFkNmNmZTBkMTZhZTkzMWI3M2NcIixcIjJcIjpcIjMxZDZjZmUwZDE2YWU5MzFiNzNjXCIsXCIzXCI6XCIzMWQ2Y2ZlMGQxNmFlOTMxYjczY1wiLFwiN1wiOlwiMzFkNmNmZTBkMTZhZTkzMWI3M2NcIixcIjhcIjpcIjMxZDZjZmUwZDE2YWU5MzFiNzNjXCIsXCI5XCI6XCIzMWQ2Y2ZlMGQxNmFlOTMxYjczY1wiLFwiMTBcIjpcIjMxZDZjZmUwZDE2YWU5MzFiNzNjXCIsXCIxMVwiOlwiMzFkNmNmZTBkMTZhZTkzMWI3M2NcIixcIjEyXCI6XCIzMWQ2Y2ZlMGQxNmFlOTMxYjczY1wiLFwiMTNcIjpcIjMxZDZjZmUwZDE2YWU5MzFiNzNjXCIsXCIxNFwiOlwiMzFkNmNmZTBkMTZhZTkzMWI3M2NcIixcIjE1XCI6XCIzMWQ2Y2ZlMGQxNmFlOTMxYjczY1wiLFwiMTZcIjpcIjMxZDZjZmUwZDE2YWU5MzFiNzNjXCIsXCIxN1wiOlwiMzFkNmNmZTBkMTZhZTkzMWI3M2NcIixcIjE4XCI6XCIzMWQ2Y2ZlMGQxNmFlOTMxYjczY1wiLFwiMTlcIjpcIjMxZDZjZmUwZDE2YWU5MzFiNzNjXCIsXCIyMFwiOlwiMzFkNmNmZTBkMTZhZTkzMWI3M2NcIixcIjIxXCI6XCIzMWQ2Y2ZlMGQxNmFlOTMxYjczY1wiLFwiMjJcIjpcIjMxZDZjZmUwZDE2YWU5MzFiNzNjXCIsXCIyM1wiOlwiMzFkNmNmZTBkMTZhZTkzMWI3M2NcIixcIjI0XCI6XCIzMWQ2Y2ZlMGQxNmFlOTMxYjczY1wiLFwiMjdcIjpcIjMxZDZjZmUwZDE2YWU5MzFiNzNjXCJ9W2NodW5rSWRdICsgXCIuY3NzXCI7XG4gXHRcdFx0XHR2YXIgZnVsbGhyZWYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBocmVmO1xuIFx0XHRcdFx0dmFyIGV4aXN0aW5nTGlua1RhZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpbmtcIik7XG4gXHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZXhpc3RpbmdMaW5rVGFncy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHR2YXIgdGFnID0gZXhpc3RpbmdMaW5rVGFnc1tpXTtcbiBcdFx0XHRcdFx0dmFyIGRhdGFIcmVmID0gdGFnLmdldEF0dHJpYnV0ZShcImRhdGEtaHJlZlwiKSB8fCB0YWcuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcbiBcdFx0XHRcdFx0aWYodGFnLnJlbCA9PT0gXCJzdHlsZXNoZWV0XCIgJiYgKGRhdGFIcmVmID09PSBocmVmIHx8IGRhdGFIcmVmID09PSBmdWxsaHJlZikpIHJldHVybiByZXNvbHZlKCk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHR2YXIgZXhpc3RpbmdTdHlsZVRhZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInN0eWxlXCIpO1xuIFx0XHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGV4aXN0aW5nU3R5bGVUYWdzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdHZhciB0YWcgPSBleGlzdGluZ1N0eWxlVGFnc1tpXTtcbiBcdFx0XHRcdFx0dmFyIGRhdGFIcmVmID0gdGFnLmdldEF0dHJpYnV0ZShcImRhdGEtaHJlZlwiKTtcbiBcdFx0XHRcdFx0aWYoZGF0YUhyZWYgPT09IGhyZWYgfHwgZGF0YUhyZWYgPT09IGZ1bGxocmVmKSByZXR1cm4gcmVzb2x2ZSgpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0dmFyIGxpbmtUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiBcdFx0XHRcdGxpbmtUYWcucmVsID0gXCJzdHlsZXNoZWV0XCI7XG4gXHRcdFx0XHRsaW5rVGFnLnR5cGUgPSBcInRleHQvY3NzXCI7XG4gXHRcdFx0XHRsaW5rVGFnLm9ubG9hZCA9IHJlc29sdmU7XG4gXHRcdFx0XHRsaW5rVGFnLm9uZXJyb3IgPSBmdW5jdGlvbihldmVudCkge1xuIFx0XHRcdFx0XHR2YXIgcmVxdWVzdCA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjIHx8IGZ1bGxocmVmO1xuIFx0XHRcdFx0XHR2YXIgZXJyID0gbmV3IEVycm9yKFwiTG9hZGluZyBDU1MgY2h1bmsgXCIgKyBjaHVua0lkICsgXCIgZmFpbGVkLlxcbihcIiArIHJlcXVlc3QgKyBcIilcIik7XG4gXHRcdFx0XHRcdGVyci5jb2RlID0gXCJDU1NfQ0hVTktfTE9BRF9GQUlMRURcIjtcbiBcdFx0XHRcdFx0ZXJyLnJlcXVlc3QgPSByZXF1ZXN0O1xuIFx0XHRcdFx0XHRkZWxldGUgaW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdXG4gXHRcdFx0XHRcdGxpbmtUYWcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsaW5rVGFnKVxuIFx0XHRcdFx0XHRyZWplY3QoZXJyKTtcbiBcdFx0XHRcdH07XG4gXHRcdFx0XHRsaW5rVGFnLmhyZWYgPSBmdWxsaHJlZjtcblxuIFx0XHRcdFx0dmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XG4gXHRcdFx0XHRoZWFkLmFwcGVuZENoaWxkKGxpbmtUYWcpO1xuIFx0XHRcdH0pLnRoZW4oZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHRcdH0pKTtcbiBcdFx0fVxuXG4gXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cbiBcdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG4gXHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuIFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRcdFx0dmFyIG9uU2NyaXB0Q29tcGxldGU7XG5cbiBcdFx0XHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0XHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuIFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbiBcdFx0XHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c2NyaXB0LnNyYyA9IGpzb25wU2NyaXB0U3JjKGNodW5rSWQpO1xuXG4gXHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG4gXHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcbiBcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiBcdFx0XHRcdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuIFx0XHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuIFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG4gXHRcdFx0XHRcdHZhciBjaHVuayA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0XHRcdFx0aWYoY2h1bmsgIT09IDApIHtcbiBcdFx0XHRcdFx0XHRpZihjaHVuaykge1xuIFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcbiBcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG4gXHRcdFx0XHRcdFx0XHRjaHVua1sxXShlcnJvcik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fTtcbiBcdFx0XHRcdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuIFx0XHRcdFx0XHRvblNjcmlwdENvbXBsZXRlKHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KTtcbiBcdFx0XHRcdH0sIDEyMDAwMCk7XG4gXHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlO1xuIFx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB0aHJvdyBlcnI7IH07XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyBmcm9tIG90aGVyIGNodW5rc1xuIFx0Y2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=