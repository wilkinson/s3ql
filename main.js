//- JavaScript source code

//- main.js ~~
//                                                      ~~ (c) SRW, 31 Jul 2012

(function () {
    'use strict';

 // Pragmas

    /*jslint indent: 4, maxlen: 80, node: true */

 // Prerequisites

 // Declarations

    var launch_client, launch_server, operators, options;

 // Definitions

    launch_client = function (obj) {
     // This function needs documentation.
        var client_options = options.fill_in(obj);
        console.log('Success: `launch_client`');
        return;
    };

    launch_server = function (obj) {
     // This function needs documentation.
        var db, server_options;
        server_options = options.fill_in(obj);
        if (server_options.database === 'sqlite3') {
            db = require('db-sqlite');
        }
        if (server_options.run_tests === true) {
            operators.unit_tests();
        }
        console.log('Success: `launch_server`');
        return;
    };

    operators = require('./operators');

    options = require('./options');

 // Prototype definitions

 // Out-of-scope definitions

    exports.launch_client = launch_client;

    exports.launch_server = launch_server;

 // Invocations

 // That's all, folks!

    return;

}());

//- vim:set syntax=javascript:
