// last(arr): 이 함수는 배열의 마지막 요소를 반환해야 합니다.
type lastArray = <T>(arr: Array<T>) => T;
const last: lastArray = (arr) => {
    const lastIndex = arr.length - 1;
    return arr[lastIndex];
};

console.log(last(new Array(1, 2, 3)));  // 3
console.log(last(new Array()));  // undefined

// prepend(arr, item): 이 함수는 배열의 시작 부분에 item을 넣고 배열을 return해야 합니다.
type prependArray = <T>(arr: Array<T>, item: T) => Array<T>;
const prepend: prependArray = (arr, item) => {
    arr.push(item);
    return arr;
};

console.log(prepend(new Array("1", "2", "3"), "4"));  // ["1", "2", "3", "4"]

// mix(arr,arr) : 두개의 배열을 매개변수로 받아, 매개변수로 받은 두 배열을 하나의 배열로 섞어서 하나의 배열로 반환합니다.
type mixArray = <T>(arr: Array<T>, arr1: Array<T>) => Array<T>;
const mix: mixArray = (arr, arr1) => {
    const newArray = arr.concat(arr1);
    console.log(newArray);

    for(let i=0; i<newArray.length; i++){
        const j = Math.floor(Math.random() * (i+1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    return newArray;
};

console.log(mix(new Array(1, 2, 3), new Array(4, 5, 6)));  // random array

// count(arr) : 배열을 매개변수로 받아, 매개변수로 받아온 배열의 길이를 반환하면됩니다.
type countArray = <T>(arr: Array<T>) => number;
const count: countArray = (arr) => arr.length;

console.log(count(new Array(1, 2, 3, 4, 5)));  // 5
console.log(count(new Array()));  // 0 

// findIndex(arr, item) : 첫번째 매개변수로 배열을, 두번째 매개변수로 받아온 item이 첫번째 매개변수 arr배열의 몇번째 index로 존재하는지 체크한후 존재한다면 몇번째 index인지 반환하고 존재하지않는다면 null을 반환합니다.
type findIndexArray = <T>(arr: Array<T>, item: T) => number | null;
const findIndex: findIndexArray = (arr, item) => {
    const value = arr.indexOf(item);
    if(value !== -1) return value;
    else return null;
};

console.log(findIndex(new Array("1", "2", "3"), "3"));  // 2
console.log(findIndex(new Array("1", "2", "3"), "4"));  // null

// slice(arr, startIndex, endIndex): 첫번째 매개변수로 배열 arr을 받고, 두번째 매개변수로 숫자 startIndex, 세번째 매개변수 숫자 endIndex를 받습니다. 첫번째 매개변수 arr을 두번째 매개변수로 받은 startIndex부터 세번째 매개변수로 받은 인덱스까지 자른 결과를 반환하면됩니다. 이때 세번째 매개변수는 필수 매개변수가 아닙니다.
type sliceArray = <T>(arr: Array<T>, startIndex: number, endIndex?: number) => Array<T>;
const slice: sliceArray = (arr, startIndex, endIndex) => {
    return arr.slice(startIndex, endIndex);
};

console.log(slice(new Array(1, 2, 3, 4, 5, 6), 3));  // [4, 5, 6]
console.log(slice(new Array(1, 2, 3, 4, 5, 6), 3, 4));  // [4]