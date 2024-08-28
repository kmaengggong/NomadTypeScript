# NomadTypeScript [24.08.28]

## 0. TypeScript
### 0-1. Info
- 타입 안정성: 런타임 전에 코드 작성 단에서 에러를 알려줌. 즉, 개발자의 실수로부터 보호.
- 타입스크립트 코드 컴파일 시, 자바스크립트 코드로 변환.

## 1. Types
### 1-1. Basic
```
type Band = {
    vocal?: string,  // 선택적 타입
    guitar: string,
    readonly drum: string,  // 읽기 전용
};

const togetoge: Band = {
    guitar: "Momoka",
    drum: "Subaru"
};
```
- type: Object 타입을 명시적으로 지정.
- 선택적 타입: ? 붙이면 type | undefined.
- readonly: 읽기 전용. 처음 할당 이후 수정 불가.

### 1-2. Other Types
- `any`: 변수 선언 후 값 초기화 안하면 기본적으로 any 타입.
- `unknown`: 이 변수의 타입이 뭔지 확인을 해야 사용 가능해짐.
- `void`: 다른 언어와 마찬가지. 함수 반환이나 이럴 때 굳이 안 적어도 됨.
- `never`: 함수 반환에 사용하면, 반환은 안되고 예외 발생시에만 사용 가능.

## 2. Functions
### 2-1. Call Signatures
```
const add = (a: number, b: number) => a + b;
```
- 함수 위에 마우스 올렸을 때 나오는 거.
- 위의 예제의 경우 `(a: number, b: number) => number`

```
type Add = (a: number, b: number) => number;
const add: Add = (a, b) => a + b;
```
- 혹은 위와 같이 타입으로 call signature를 만들 수 있음.

### 2-2. Overloading
```
type Add = {
    (a: number, b: number): number
    (a: number, b: string): number
};

const add: Add = (a, b) => {
    if(typeof b === "string") return a;
    return a + b;
};
```
- 다른 언어와 같음. 같은 함수에 파라미터가 다를 때.
- TS의 경우, 오버로딩은 여러 call signatures가 있는 함수.

```
type Add = {
    (a: number, b: number): number
    (a: number, b: number, c: number): number
};

const add: Add = (a, b, c?: number) => {
    if(c) return a + b + c;
    return a + b;
};
```
- 파라미터의 개수가 다를 때, 함수 선언에서 option이 될 수 있는 해당 파라미터에 ?을 붙임.

### 2-3. Polymorphism


## 3. Classes and Interfaces

## 4. Typescript Blockchain