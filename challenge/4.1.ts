// 1. Dict: 단어 삭제, 단어 업데이트 메소드
// 2. Word: 단어 정의 추가, 수정, 출력 메소드

type Words = {
    [key: string]: string
};

class Dict {
    private words: Words
    
    constructor() {
        this.words = {}
    }

    add(word: Word) {
        if(this.words[word.term] === undefined){
            this.words[word.term] = word.def;
        }
    }
    getDef(term: string) {
        return this.words[term];
    }
    updateWord(word: Word) {
        if(this.words[word.term] !== undefined){
            this.words[word.term] = word.def;
        }
    }
    deleteWord(term: string) {
        if(this.words[term] !== undefined){
            delete this.words[term];
        }
    }
}

class Word {
    constructor(
        public term: string,
        public def: string    
    ) {}

    setDef(def: string){
        this.def = this.def + "; " + def;
    }
    updateDef(def: string){
        this.def = def;
    }
    printDef(){
        console.log(this.term + ": " + this.def);
    }
}

const kimchi = new Word("kimchi", "한국의 음식");
kimchi.printDef();
kimchi.setDef("전용 냉장고가 있다");
kimchi.printDef();
kimchi.updateDef("한국의 소울푸드");
kimchi.printDef();

const dict = new Dict();
dict.add(kimchi);
console.log(dict.getDef("kimchi"));
dict.updateWord(new Word("kimchi", "빨갛다"));
console.log(dict.getDef("kimchi"));
dict.deleteWord("kimchi");
console.log(dict.getDef("kimchi"));