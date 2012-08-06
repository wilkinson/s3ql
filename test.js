//- JavaScript source code

//- test.js ~~
//                                                      ~~ (c) SRW, 31 Jul 2012

(function () {
    'use strict';

 // Pragmas

    /*jslint indent: 4, maxlen: 80, node: true */

 // Prerequisites

 // Declarations

    var s4db;

 // Definitions

    s4db = require('./main');

 // Prototype definitions

 // Out-of-scope definitions

 // Invocations

    s4db.launch_client({
        run_tests:  true
    });

    s4db.launch_server({
        run_tests:  true
    });

 // That's all, folks!

    return;

}());

//- vim:set syntax=javascript:
