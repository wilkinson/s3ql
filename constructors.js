//- JavaScript source code

//- constructors.js ~~
//                                                      ~~ (c) SRW, 01 Aug 2012

(function () {
    'use strict';

 // Pragmas

    /*jslint indent: 4, maxlen: 80 */

 // Prerequisites

 // Declarations

    var Blob, comm, secret, Store;

 // Definitions

    Blob = function Blob(obj) {
     // This function needs documentation.
        var state, that;
        state = {};
        that = this;
        Object.defineProperty(that, 'comm', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: function (x) {
             // This function needs documentation.
                return comm.call(that, state, x);
            }
        });
        // ...
        return that;
    };

    comm = function (inner, outer) {
     // This function needs documentation.
        if ((outer instanceof Object) === false) {
            outer = {};
        }
        var flag, that;
        flag = ((outer instanceof Object)               &&
                (outer.hasOwnProperty('secret'))        &&
                (outer.secret === secret));
        that = this;
        // ...
        return;
    };

    secret = {};

    Store = function Store(obj) {
     // This function needs documentation.
        var state, that;
        state = {};
        that = this;
        // ...
        return that;
    };

 // Prototype definitions

    Blob.prototype.sync = function (x) {
     // This function needs documentation.
        var y;
        // ...
        return y;
    };

    Store.prototype.query = function (x) {
     // This function needs documentation.
        var y;
        // ...
        return y;
    };

 // Out-of-scope definitions

    (function () {
        /*jslint node: true */
        if (typeof exports === 'object') {
            exports.database = function (obj) {
             // This function needs documentation.
                return new Store(obj);
            };
        }
        return;
    }());

 // Invocations

 // That's all, folks!

    return;

}());

//- vim:set syntax=javascript:
