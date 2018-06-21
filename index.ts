/**
 * Returns the opposite of a predicate
 * 
 * @param predicate 
 * @returns {Function}
 * @param {any[]} args
 */

const complement = (predicate: Function)  => (arg: any) : boolean => !predicate(arg) 

/**
 * Executes a method if it exists
 *
 * @param {*} target
 * @param {string} name
 */
const executeIfHasField = (target: any, name: string) => doWhen(
    existy(target[name]), target[name]
)

/**
 * Excecutes a function if the condition is true
 *
 * @param {*} condition
 * @param {Function} action
 * 
 */
const doWhen = (condition: any, action: Function) => {
    if (truthy(condition)) return action();
    else return undefined;
}

/**
 * Returns true if the value is truthy
 *
 * @param {*} value
 */
const truthy = (x: any) => (x!= false) && existy(x)

/**
 * Returns true if the value is anything but null
 *
 * @param {*} value
 */
const existy = (x: any) : boolean => x != null;



export = {
    complement,
    executeIfHasField,
    existy,
    truthy,
    doWhen
};