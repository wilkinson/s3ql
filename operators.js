//- JavaScript source code

//- operators.js ~~
//
//  I "ported" these from the repository online at s3db.googlecode.com.
//
//                                                      ~~ (c) SRW, 31 Jul 2012

(function () {
    'use strict';

 // Pragmas

    /*jslint indent: 4, maxlen: 80, node: true */

 // Prerequisites

 // Declarations

    var merge, migrate, percolate, unit_tests;

 // Definitions

    merge = function (x) {
     // Parse states
        var d, i, j, n, r, xx, y, z;
        if (typeof x === 'string') {
         // Parse string into an array of states.
            xx = x.split(',');
        } else {
         // In case `x` was already an array with parsed states
            xx = x;
        }
     // Find out maximum size, `n`, of all states.
        n = 0;
        for (i = 0; i < xx.length; i += 1) {
            if (xx[i].length > n) {
                n = xx[i].length;
            }
        }
        if (n > 1) {
         // If multiple states, solve one at a time.
            for (i = 0; i < xx.length; i += 1) {
             // Add blank states if missing.
                for (j = xx[i].length; j < n; j += 1) {
                    xx[i] += '-';
                }
            }
            z = [];                     //- collection of singular states
            y = [];                     //- collection of merged states
            for (j = 0; j < n; j += 1) {
                for (i = 0; i < xx.length; i += 1) {
                    z[i] = xx[i].slice(j, j + 1);
                }
                y[j] = merge(z);
            }
        } else {
         // Equation 2 in the manuscript
         // Dominant
            d = [];                     //- indices of dominant states
            r = [];                     //- indices of recessive states
            y = '';                     //- collection of merged states
            for (i = 0; i < xx.length; i += 1) {
                if (xx[i].toUpperCase() === xx[i]) {
                    if (xx[i] !== '-') {
                        d.push(xx[i]);
                    }
                } else {
                    r.push(xx[i]);
                }
            }
            if (d.length > 0) {
             // Take the minimum value if there are dominant states.
                d = d.sort();
                y = d[0];
            } else {
             // Take the maximum value of recessive states.
                if (r.length > 0) {
                    r = r.sort();
                    y = r[r.length - 1];
                }
            }
            if (y.length === 0) {
             // Assign the null state in the absence of states.
                y = '-';
            }
        }
     // Always return a string.
        return (typeof y === 'string') ? y : y.join('');
    };

    migrate = function (x, m, g) {
     // This function needs documentation.
        if (!m) {
            m = 1;
        }
        if (!g) {
            g = 1;
        }
        var i, len, m1, m2, mm;
        len = x.length;
        m1 = Math.floor(len / m);
        m2 = Math.ceil(len / m);
        mm = m1 + (m2 / len);
        if (m2 === 0) {
         // If no permissions are defined assign a pass, "-", to all of them.
            for (i = 0; i < m; i += 1) {
                x += '-';
            }
        } else if (m1 === 0) {
         // If there are fewer digits that the definition of states requires
            for (i = len; i < m; i += 1) {
             // IE can't handle `[]` indices on strings, so we'll have to use
             // the uglier `splice` method.
                x += x.slice(i - 1, i);
            }
        } else if ((m1 > 0) && (m2 > 1)) {
            if (m1 === 1) {
                for (i = len; i < (2 * m); i += 1) {
                 // Just for aesthetics, to make sure child state is returned
                 // with all the indices filled in
                    x += x.slice(i - 1, i);
                }
            }
         // Slice off parental state.
            x = x.slice(m, x.length);
        }
        if (g > 1) {
         // if additional migrations are to be calculated and returned to the
         // console for inspection if you are using, say, Firebug ...
            x = migrate(x, m, g - 1);
        }
        return x;
    };

    percolate = function (T, S, m) {
     // Equation 7, which is the steady state solution to Equation 4, below
        var create_S, create_T, i, iterate, j, stable;
        create_S = function (n) {
         // Create a 1-by-n vector of native states (notice the transposition
         // with regard to regular external product).
            var i, s;
            s = [[]];
            for (i = 0; i < n; i += 1) {
                s[0][i] = '-';
            }
            return s;
        };
        create_T = function (n) {
         // Create an n-by-n square matrix of zeros.
            var i, j, y;
            y = [];
            for (i = 0; i < n; i += 1) {
                y[i] = [];
                for (j = 0; j < n; j += 1) {
                    y[i][j] = 0;
                }
            }
            return y;
        };
        iterate = function (T, Sx, m) {
         // EQUATION 4: Sy = T x Sx , m = number of operators
            if (!m) {
             // Default is one operator
                m = 1;
            }
            var i, j, Si, Sy;
            Sy = [];
            for (i = 0; i < Sx.length; i += 1) {
                Si = [];
             // The state currently native to the `i`th entity.
                Si[0] = Sx[i];
                for (j = 0; j < T[i].length; j += 1) {
                    if (T[i][j] === 1) {
                        Si[Si.length] = migrate(Sx[j], m);
                    }
                }
                Sy[i] = merge(Si);
            }
            return Sy;
        };
        if (!T) {
         // transition matrix `T`
            T = create_T(7);
        }
        if (!S) {
         // States `S` of model entities `E`
            S = create_S(7);
        }
        if (!m) {
         // Number of operators
            m = 1;
        }
     // Reboot percolation.
        S = [S[0]];
        stable = false;
        for (i = 1; (stable === false) && (i <= 10); i += 1) {
            S[i] = iterate(T, S[i - 1], m);
         // Check if stable solution has been reached.
            stable = true;
            for (j = 0; (stable === true) && (j < S[i].length); j += 1) {
                stable = (S[i][j] === S[i - 1][j]);
            }
        }
        return S;
    };

    unit_tests = function () {
     // This function needs documentation.
        console.log(merge('b,c,C,D'));
        console.log(migrate('a', 1, 1));
        console.log(percolate(undefined, undefined, undefined));
        return;
    };

 // Out-of-scope definitions

    if (typeof exports === 'object') {

        exports.merge = merge;

        exports.migrate = migrate;

        exports.percolate = percolate;

        exports.unit_tests = unit_tests;

    }

 // Invocations

 // That's all, folks!

    return;

}());

//- vim:set syntax=javascript:
