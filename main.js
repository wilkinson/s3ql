//- JavaScript source code

//- main.js ~~
//                                                      ~~ (c) SRW, 31 Jul 2012
//                                                  ~~ last updated 10 Aug 2012

(function () {
    'use strict';

 // Pragmas

    /*jslint indent: 4, maxlen: 80, node: true */

 // Prerequisites

 // Declarations

    var corser, http, launch_client, launch_server, operators, options;

 // Definitions

    corser = require('corser');

    http = require('http');

    launch_client = function (obj) {
     // This function needs documentation.
        var client_options = options.load(obj);
        console.log('Success: `launch_client`');
        return;
    };

    launch_server = function (obj) {
     // This function needs documentation.
        var config, enable_cors, db, server;
        config = options.load(obj);
        if (config.database === 'sqlite3') {
            db = require('./db-sqlite');
        }
        if (config.run_tests === true) {
            operators.unit_tests();
            console.log('Success: `launch_server`');
            return;
        }
        enable_cors = corser.create();
        server = http.createServer(function (request, response) {
         // This function needs documentation.
            enable_cors(request, response, function () {
             // This function needs documentation.
                response.writeHead(200, {'Content-Type': 'text/plain'});
                response.write('I am alive ;-)');
                response.end();
                return;
            });
            return;
        });
        server.listen(config.port, config.hostname);
        console.log('Starting server ...');
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
