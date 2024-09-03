// Use abstract classes and generics.
// 추상화 클래스와 제네릭을 사용하세요.
interface LocalStorageAPI {
    [key: string]: <value>
}

abstract class MyStorage<T> {
    setItem(<key>, <value>): T;
    getItem(<key>): T;
    clearItem(<key>): T;
    clear(): T;
}

class LocalStorage<T> extends Storage {
    @Override
    setItem(<key>, <value>): T {};
}

// overloading을 사용하세요.
interface GeolocationAPI {

}

localStorage.setItem(<key>, <value>);
localStorage.getItem(<key>);
localStorage.clearItem(<key>);
localStorage.clear();

geolocation.getCurrentPosition(successFn);
geolocation.getCurrentPosition(successFn, errorFn);
geolocation.getCurrentPosition(successFn, errorFn, optionsObj);
geolocation.watchPosition(success);
geolocation.watchPosition(success, error);
geolocation.watchPosition(success, error, options);
geolocation.clearWatch(id);