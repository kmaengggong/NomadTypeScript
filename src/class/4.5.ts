// interface MyStorage<T> {
//     [key: string]: T;
// }

// class LocalStorage<T> {
//     private storage: MyStorage<T> = {};

//     get(key: string): T {
//         return this.storage[key];
//     }
//     set(key: string, value: T) {
//         this.storage[key] = value;
//     }
//     remove(key: string) {
//         delete this.storage[key];
//     }
//     clear() {
//         this.storage = {};
//     }
// }

// const stringStorage = new LocalStorage<string>();
// stringStorage.get("btc");
// stringStorage.set("hello", "world");

// const booleanStorage = new LocalStorage<boolean>();
// booleanStorage.get("eth");
// booleanStorage.set("bye", true);
