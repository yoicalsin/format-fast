"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_all_utils_1 = require("is-all-utils");
/**
 * @author Yoni Calsin <helloyonicb@gmail.com>
 * @param source string
 * @param replaces More | string[] | string
 * @param iterateFn Function | string | undefined
 * @param brackets string | undefined
 */
const formatFast = (source, replaces, iterateFn, brackets) => {
    if (is_all_utils_1.isUndefined(replaces))
        return source;
    // If is of string type !
    !is_all_utils_1.isObj(replaces) && (replaces = [replaces]);
    // Merge iterateFn and brackets
    if (is_all_utils_1.isString(iterateFn)) {
        brackets = iterateFn;
        iterateFn = undefined;
    }
    // For get the key with all the brackets
    let getKey = (v) => is_all_utils_1.isString(brackets) ? brackets.replace(/%s/g, v) : `$${v}`;
    for (const [key, value] of Object.entries(replaces)) {
        // Data for be sended
        let newKey = getKey(key);
        let newValue = value;
        // If is a function
        if (is_all_utils_1.isFunction(iterateFn)) {
            const dataIterate = iterateFn(value, key);
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
