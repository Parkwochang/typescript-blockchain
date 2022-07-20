abstract class User {
  constructor(
    protected firstName: string, // private이면 여기서만 접근 가능하다
    protected lastName: string, //protected면 User를 상속받는 모든 클래스에서 사용 가능
    protected nickname: string //외부의 모든 곳에서 사용가능하게 만들려면 public을 사용
  ) {}
  abstract getNickName(): void; //추상 메소드
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Player extends User {
  //추상 클래스
  getNickName() {
    console.log(this.nickname);
  }
}

const nico = new Player("nico", "las", "니꼬");

nico.getFullName();

(function (a) {
  return a;
})();

type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words; // property가 constructor부터 바로 초기화되지 않는 이 부분
  constructor() {
    this.words = {}; // 수동으로 초기화
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) this.words[word.term] = word.def;
  }
  def(term: string) {
    return this.words[term];
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word("kimchi", "한국의 음식");

const dict = new Dict();

dict.add(kimchi);
dict.def("kimchi");

interface Userq {
  name: string;
}
interface Userq {
  lasteName: string;
}
interface Userq {
  health: number;
}
//인터페이스를 3번 각각 만들기만 하면, 타입스크립트가 알아서 하나로 합쳐준다

interface Playerq extends Userq {}
const nilo: Playerq = {
  name: "nico",
  lasteName: "n",
  health: 10,
};

abstract class Userk {
  constructor(protected firstName: string, protected lastName: string) {}
  abstract sayHi(name: string): string;
  abstract fullName(): string;
}
