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

type Team = "red" | "blue" | "yellow";
type Health = 1 | 5 | 10;

interface Player {
  nickname: string;
  team: Team;
  health: Health;
}
//인터페이스는 타입스크립트에게 오브젝트의 모양을 설명해주는 하나의 목적으로만 사용가능

interface Person {}

const nilo: Player = {
  nickname: "nico",
  team: "yellow",
  health: 10,
};
