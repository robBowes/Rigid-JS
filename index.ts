/**
 * Executes a method if it exists
 *
 * @param {*} target
 * @param {string} name
 */
const executeIfHasField = (target: any, name: string) => doWhen(
    existy(target[name]), target[name]
)


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
    executeIfHasField,
    existy,
    truthy,
    doWhen
};