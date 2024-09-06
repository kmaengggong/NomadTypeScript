declare module "lodash" {
    // Gets the first element of `array`.
    function head(array: any[]): any | undefined;

    // Checks if `path` is a direct or inherited property of `object`.
    function hasIn(object: Object, key: string): boolean;

    // Checks if `value` is classified as a boolean primitive or object.
    function isBoolean(value: any): boolean;

    // Converts `value` to a string. An empty string is returned for `null`
    // and `undefined` values. The sign of `-0` is preserved.
    function toString(value: any): string;

    // Splits `string` by `separator`.
    function split(string: string, separator: [RegExp | string], limit: number): string[];

    // Checks if `path` is a direct property of `object`.
    function hasPath(object: Object, path: [any[] | string]): boolean;

    // Iterates over elements of `array`, returning an array of all elements
    // `predicate` returns truthy for. The predicate is invoked with three
    // arguments: (value, index, array).
    function filter(array: any[], predicate: Function): any[];

    // Checks if `predicate` returns truthy for **all** elements of `array`.
    // Iteration is stopped once `predicate` returns falsey. The predicate is
    // invoked with three arguments: (value, index, array).
    function every(array: any[], predicate: Function): boolean;

    // Creates an array of values by running each element of `array` thru `iteratee`.
    // The iteratee is invoked with three arguments: (value, index, array).
    function map(array: any[], iteratee: Function): any[];
}