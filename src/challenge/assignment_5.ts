type Words = {
    [term: string]: string
};

class Dict {
    private words: Words;

        constructor() {
            this.words = {};
        }

    // add: 단어를 추가함.
    add(word: Word) {
        if(this.words[word.term] === undefined){
            this.words[word.term] = word.definition;
        }
    }

    // get: 단어의 정의를 리턴함.
    get(term: string) {
        return this.words[term];
    }

    // delete: 단어를 삭제함.
    delete(term: string) {
        if(this.words[term] !== undefined){
            delete this.words[term];
        }
    }

    // update: 단어를 업데이트 함.
    update(word: Word) {
        if(this.words[word.term] !== undefined){
            this.words[word.term] = word.definition;
        }
    }

    // showAll: 사전 단어를 모두 보여줌.
    showAll() {
        Object.keys(this.words).forEach((term) => {
            console.log(`${term}: ${this.words[term]}`);
        });
    }

    // count: 사전 단어들의 총 갯수를 리턴함.
    count() {
        return Object.keys(this.words).length;
    }

    // upsert 단어를 업데이트 함. 존재하지 않을시. 이를 추가함. (update + insert = upsert)
    upsert(word: Word) {
        this.words[word.term] = word.definition;
    }

    // exists: 해당 단어가 사전에 존재하는지 여부를 알려줌.
    exists(term: string) {
        if(this.words[term] !== undefined) return true;
        else return false;
    }

    // bulkAdd: 다음과 같은 방식으로. 여러개의 단어를 한번에 추가할 수 있게 해줌. [{term:"김치", definition:"대박이네~"}, {term:"아파트", definition:"비싸네~"}]
    bulkAdd(newWords: Word[]) {
        newWords.forEach((word) => {
            this.words[word.term] = word.definition;
        });
    }

    // bulkDelete: 다음과 같은 방식으로. 여러개의 단어를 한번에 삭제할 수 있게 해줌. ["김치", "아파트"]
    bulkDelete(terms: string[]) {
        terms.forEach((term) => delete this.words[term]);
    }
}

class Word {
    constructor(
        public term: string,
        public definition: string
    ) {}
}

const dict = new Dict();

dict.add(new Word("Nina", "Vocal"));
dict.showAll();  // Nina: Vocal

console.log(dict.get("Nina"));  // Vocal

dict.delete("Nina");
dict.showAll();  // no print.

dict.add(new Word("Momoka", "Diamond Dust"));
dict.showAll();  // Momoka: Diamond Dust
dict.update(new Word("Momoka", "Togenashi Togeari"));
dict.showAll();  // Momoka: Togenashi Togeari

console.log(dict.count());  // 1

dict.upsert(new Word("Momoka", "Guitar"));
dict.upsert(new Word("Subaru", "Drum"));
dict.showAll();  // Momoka: Guitar\n Subaru: Drum

console.log(dict.exists("Subaru"));  // true
console.log(dict.exists("Tomo"));  // false

dict.bulkAdd([{"term":"김치", "definition":"대박이네~"}, {"term":"아파트", "definition":"비싸네~"}]);
dict.showAll();  // Momoka: Guitar\n Subaru: Drum\n김치: 대박이네~\n아파트: 비싸네~

dict.bulkDelete(["김치", "아파트"]);
dict.showAll();  // Momoka: Guitar\n Subaru: Drum