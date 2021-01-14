"use strict";

/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
var Solution = function () {
    function Solution() {}

    Solution.prototype.maxNumberOfFamilies = function (n, S) {
        if (S == null) return 2 * n;
        var charArr = S.split(" ");
        var optimal_allocations = 0;
        var map = {};

        for (var i = 0; i < charArr.length; i++) {
            {
                var row = parseInt(
                    /* valueOf */
                    new String(charArr[i].charAt(0)).toString());
                var col = parseInt(
                    /* valueOf */
                    new String(function (c) {
                        return c.charCodeAt == null ? c : c.charCodeAt(0);
                    }(charArr[i].charAt(1)) - 'A'.charCodeAt(0)).toString()) + 1;

                if (function (m, k) {
                    if (m.entries == null) m.entries = [];

                    for (var i_1 = 0; i_1 < m.entries.length; i_1++) if (m.entries[i_1].key.equals != null && m.entries[i_1].key.equals(k) || m.entries[i_1].key === k) {
                        return true;
                    }

                    return false;
                }(map, row)) {
                    var set = function (m, k) {
                        if (m.entries == null) m.entries = [];

                        for (var i_2 = 0; i_2 < m.entries.length; i_2++) if (m.entries[i_2].key.equals != null && m.entries[i_2].key.equals(k) || m.entries[i_2].key === k) {
                            return m.entries[i_2].value;
                        }

                        return null;
                    }(map, row);
                    /* add */


                    (function (s, e) {
                        if (s.indexOf(e) == -1) {
                            s.push(e);
                            return true;
                        } else {
                            return false;
                        }
                    })(set, col);
                } else {
                    var set = [];
                    /* add */

                    (function (s, e) {
                        if (s.indexOf(e) == -1) {
                            s.push(e);
                            return true;
                        } else {
                            return false;
                        }
                    })(set, col);
                    /* put */


                    (function (m, k, v) {
                        if (m.entries == null) m.entries = [];

                        for (var i_3 = 0; i_3 < m.entries.length; i_3++) if (m.entries[i_3].key.equals != null && m.entries[i_3].key.equals(k) || m.entries[i_3].key === k) {
                            m.entries[i_3].value = v;
                            return;
                        }

                        m.entries.push({
                            key: k,
                            value: v,
                            getKey: function () {
                                return this.key;
                            },
                            getValue: function () {
                                return this.value;
                            }
                        });
                    })(map, row, set);
                }
            }
            ;
        }

        console.info(map);
        {
            var array20507 = function (m) {
                var r = [];
                if (m.entries == null) m.entries = [];

                for (var i = 0; i < m.entries.length; i++) r.push(m.entries[i].value);

                return r;
            }(map);

            for (var index20506 = 0; index20506 < array20507.length; index20506++) {
                var set = array20507[index20506];
                {
                    var pos1 = 1;
                    var pos2 = 1;
                    var pos3 = 1;

                    for (var index20508 = 0; index20508 < set.length; index20508++) {
                        var seatNo = set[index20508];
                        {
                            if (seatNo === 2 || seatNo === 3) pos1 = 0;

                            if (seatNo === 4 || seatNo === 5) {
                                pos1 = 0;
                                pos2 = 0;
                            }

                            if (seatNo === 6 || seatNo === 7) {
                                pos2 = 0;
                                pos3 = 0;
                            }

                            if (seatNo === 8 || seatNo === 9) pos3 = 0;
                        }
                    }

                    optimal_allocations += Math.max(pos1 + pos3, pos2);
                }
            }
        }

        optimal_allocations += (n - function (m) {
            if (m.entries == null) m.entries = [];
            return m.entries.length;
        }(map)) * 2;

        return optimal_allocations;
    };

    Solution.main = function (args) {
        var s = new Solution();
        console.info(s.maxNumberOfFamilies(2, "1A 2F 1C"));
    };

    return Solution;
}();

Solution["__class"] = "Solution";
Solution.main(null);
