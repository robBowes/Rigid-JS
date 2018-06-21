"use strict";
/**
 *
 *
 * @param {*} target
 * @param {string} name
 */
const executeIfHasField = (target, name) => doWhen(existy(target[name]), target[name]);
const doWhen = (condition, action) => {
    if (truthy(condition))
        return action();
    else
        return undefined;
};
/**
 * Returns true if the value is truthy
 *
 * @param {*} value
 */
const truthy = (x) => (x != false) && existy(x);
/**
 * Returns true if the value is anything but null
 *
 * @param {*} value
 */
const existy = (x) => x != null;
module.exports = {
    executeIfHasField,
    existy,
    truthy,
    doWhen
};
