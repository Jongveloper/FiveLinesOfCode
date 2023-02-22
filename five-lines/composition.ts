// 상속
// interface Bird {
//   hasBeak(): boolean;
//   canFly(): boolean;
// }
// class CommonBird implements Bird {
//   hasBeak() { return true; }
//   canFly() { return true; }
// }
// class Penguin extends CommonBird {
//   canFly() {return false; }
// }

// 컴포지션
interface Bird {
  hasBeak(): boolean;
  canFly(): boolean;
}

class CommonBird implements Bird {
  hasBeak(): boolean {
    return true;
  };
  canFly(): boolean {
    return true;
  }
}
class Penguin implements Bird {
  private bird = new CommonBird(); // 컴포지션
  hasBeak(): boolean {
    return this.bird.hasBeak();
  }
  canFly(): boolean {
    return false;
  }
}

/**
 * 컴포지션의 장점
 * 추가(addition)로 변경이 가능하다
 * 이것은 기존 기능에 영향을 주지 않고 기능을 추가하거나 변경할 수 있음을 의미한다.
 * 어떤 경우에는 기존 코드를 변경하지 않고도 가능하다.
 * 이 속성을 개방-폐쇄 원칙이라고 하는데, 소프트웨어 구성 요소들은 확장에 대해 열려있어야 하고, 수정에 대해 닫혀있어야한다는 의미다.
 */
