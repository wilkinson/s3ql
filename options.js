//- JavaScript source code

//- options.js ~~
//                                                      ~~ (c) SRW, 31 Jul 2012
//                                                  ~~ last updated 12 Oct 2012

(function () {
    'use strict';

 // Pragmas

    /*jslint indent: 4, maxlen: 80, node: true */

 // Prerequisites

 // Declarations

    var default_options, fill_in, from_command_line_arguments,
        from_environment, from_global_config_file, from_user_config_file, fs,
        help;

 // Definitions

    default_options = {
        database:   'postgres',
        hostname:   'localhost',
        port:       '1153',             //- 's'.charCodeAt(0) + '3' :-)
        run_tests:  false
    };

    fill_in = function (options) {
     // This function needs documentation.
        if ((options instanceof Object) === false) {
            options = {};
        }
        from_global_config_file();
        from_user_config_file();
        from_environment();
        from_command_line_arguments();
        var key;
        for (key in default_options) {
            if ((default_options.hasOwnProperty(key)) &&
                    (options.hasOwnProperty(key) === false)) {
                options[key] = default_options[key];
            }
        }
        return options;
    };

    from_command_line_arguments = function () {
     // This function needs documentation.
        var i, n;
        n = process.argv.length;
        for (i = 0; i < n; i += 1) {
         // This is just a placeholder for now ...
            switch (process.argv[i]) {
            case '-h':
                help();
                break;
            case '--help':
                help();
                break;
            case '--run-tests':
                default_options.run_tests = true;
                break;
            case 'help':
                help();
                break;
            default:
             // (placeholder)
            }
        }
        return;
    };

    from_environment = function () {
     // This function needs documentation.
        // ...
        return;
    };

    from_global_config_file = function () {
     // This function needs documentation.
        // ...
        return;
    };

    from_user_config_file = function () {
     // This function needs documentation.
        // ...
        return;
    };

    fs = require('fs');

    help = function () {
     // This function needs documentation.
        console.log('(help message goes here)');
        return process.exit();
    };

 // Out-of-scope definitions

    exports.fill_in = exports.load = fill_in;

 // Invocations

 // That's all, folks!

    return;

}());

//- vim:set syntax=javascript:
