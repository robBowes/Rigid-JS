


const pluck = (arr: any[], str: string) => arr.map(el=>el[str]);

/**
 * Returns all exept the last in a collection
 *
 * @param {any[]} arr
 */
const butLast = (arr : any[]) => [...arr].slice(0, -1);


/**
 * Maps a function 
 *
 * @param {(a:any) => any} f
 * @param {any[]} coll
 */
const concatAndMap = (f: (a:any) => any , coll: any[]) => concat(...coll.map(f))


/**
 * Concatinates it's arguments into an array
 *
 * @param {...any[]} args
 */
const concat = (...args: any[]) => args.reduce((acc,el)=>acc.concat(el),[]);

/**
 * Returns the opposite of a predicate
 * 
 * @param predicate 
 * @returns {Function}
 * @param {any[]} args
 */

const complement = (predicate: (arg: any) => boolean)  => (arg: any) => !predicate(arg);

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
    pluck,
    concatAndMap,
    concat,
    complement,
    executeIfHasField,
    existy,
    truthy,
    doWhen
};