//- JavaScript source code

//- constructors.js ~~
//                                                      ~~ (c) SRW, 01 Aug 2012
//                                                  ~~ last updated 10 Aug 2012

(function () {
    'use strict';

 // Pragmas

    /*jslint indent: 4, maxlen: 80 */

 // Prerequisites

 // Declarations

    var comm, secret, Reference, Resource, Storage;

 // Definitions

    comm = function (inner, outer) {
     // This function needs documentation.
        if ((outer instanceof Object) === false) {
            outer = {};
        }
        var flag, that;
        flag = ((outer instanceof Object)           &&
                (outer.hasOwnProperty('secret'))    &&
                (outer.secret === secret));
        that = this;
        // ...
        return;
    };

    secret = {};

    Reference = function Reference(obj) {
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

    Resource = function Resource(obj) {
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

    Storage = function Storage(obj) {
     // This function needs documentation.
        var state, that;
        state = {};
        that = this;
        // ...
        return that;
    };

 // Prototype definitions

    Resource.prototype.sync = function (x) {
     // This function needs documentation.
        var y;
        // ...
        return y;
    };

    Storage.prototype.query = function (x) {
     // This function needs documentation.
        var y;
        // ...
        return y;
    };

 // Out-of-scope definitions

    (function () {
     // I have used an anonymous closure here mainly to "quarantine" all of the
     // code specific to Node.js into a single area. This strategy allows me to
     // minimize the number of exceptions I allow JSLint to make and thus helps
     // keep the abstractions portable even when the rest of the project isn't.
        /*jslint node: true */
        if (typeof exports !== 'object') {
            return;
        }
        exports.database = function (obj) {
         // This function needs documentation.
            return new Storage(obj);
        };
        return;
    }());

 // Invocations

 // That's all, folks!

    return;

}());

//- vim:set syntax=javascript:
