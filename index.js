'use strict';
/**
 * Returns the opposite of a predicate
 *
 * @param predicate
 * @returns {Function}
 * @param {any[]} args
 */
const complement = (predicate) => (arg) => !predicate(arg);
/**
 * Executes a method if it exists
 *
 * @param {*} target
 * @param {string} name
 */
const executeIfHasField = (target, name) => doWhen(existy(target[name]), target[name]);
/**
 * Excecutes a function if the condition is true
 *
 * @param {*} condition
 * @param {Function} action
 *
 */
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
    complement,
    executeIfHasField,
    existy,
    truthy,
    doWhen
};
