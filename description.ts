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
