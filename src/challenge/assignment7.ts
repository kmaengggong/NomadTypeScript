// Use abstract classes and generics.
// 추상화 클래스와 제네릭을 사용하세요.
interface LocalStorageAPI<T> {
    [key: string]: T;
}

abstract class LocalStorage<T> {
    constructor(
        protected storage: LocalStorageAPI<T> = {};
    ) {}

    abstract setItem(key: string, value: T): void;
    abstract getItem(key: string): T;
    abstract clearItem(key: string): void;
    abstract clear(): void;
}

class MyStorage<T> extends LocalStorage<T> {
    setItem(key: string, value: T) {
        this.storage[key] = value;
    }
    getItem(key: string): T {
        return this.storage[key];
    }
    clearItem(key: string): void {
        delete this.storage[key];
    }
    clear(): void {
        this.storage = {};
    }
}

// overloading을 사용하세요.
interface GeolocationAPI {
    getCurrentPosition(successFn: Function): void,
    getCurrentPosition(successFn: Function, errorFn: Function): void,
    getCurrentPosition(successFn: Function, errorFn: Function, optionsObj: Object): void,
    watchPosition(success: Function): number,
    watchPosition(success: Function, error: Function): number,
    watchPosition(success: Function, error: Function, options: Object): number,
    clearWatch(id: number): void
}

class GeoLocation implements GeolocationAPI {
    getCurrentPosition(successFn: Function, errorFn?: Function, optionsObj?: Object): void {
        console.log("getCurrentPosition");
    }

    watchPosition(success:Function, error?: Function, options?: Object): number {
        console.log("watchPosition");
        return 0;
    }

    clearWatch(id: number): void {
        console.log(`clearWatch: ${id}`);
    }
}

// Test
let llocalStorage = new MyStorage();

llocalStorage.setItem("Nina", "Vocal");
console.log(llocalStorage.getItem("Nina"));  // Vocal
llocalStorage.clearItem("Momoka");
console.log(llocalStorage.getItem("Nina"));  // Vocal
llocalStorage.clear();
console.log(llocalStorage.getItem("Nina"));  // undefined

let geolocation = new GeoLocation();
const successFn = () => {};
const errorFn = () => {};
const optionsObj = new Object();
const success = () => {};
const error = () => {};
const options = new Object();

geolocation.getCurrentPosition(successFn);
geolocation.getCurrentPosition(successFn, errorFn);
geolocation.getCurrentPosition(successFn, errorFn, optionsObj);
geolocation.watchPosition(success);
geolocation.watchPosition(success, error);
const id = geolocation.watchPosition(success, error, options);
geolocation.clearWatch(id);