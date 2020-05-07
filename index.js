"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_all_utils_1 = require("is-all-utils");
var formatFast = function (source, replaces, iterateFn, brackets) {
    if (is_all_utils_1.isUndefined(replaces))
        return source;
    !is_all_utils_1.isObj(replaces) && (replaces = [replaces]);
    if (is_all_utils_1.isString(iterateFn)) {
        brackets = iterateFn;
        iterateFn = undefined;
    }
    var getKey = function (v) {
        return is_all_utils_1.isString(brackets) ? brackets.replace(/%s/g, v) : "$" + v;
    };
    for (var _i = 0, _a = Object.entries(replaces); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        var newKey = getKey(key);
        var newValue = value;
        if (is_all_utils_1.isFunction(iterateFn)) {
            var dataIterate = iterateFn(value, key);
            if (is_all_utils_1.isArray(dataIterate) && dataIterate.length === 2) {
                newKey = getKey(dataIterate[1]);
                newValue = dataIterate[0];
            }
            else {
                newValue = dataIterate;
            }
        }
        source = source.replace(newKey, newValue);
    }
    return source;
};
exports.fmf = formatFast;
exports.default = formatFast;
