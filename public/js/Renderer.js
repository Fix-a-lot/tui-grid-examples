/**
* <p>토스트 그리드 렌더러용 슈퍼 타입.</p>
* <p>새 렌더러 정의할 때 이 타입을 상속해서 사용하면 코드를 줄일 수 있음.</p>
* <p>SimpleTextReplaceRenderer 참고할 것.</p>
*/
class Renderer {
  constructor(props) {
    this.el = document.createElement('div');
    this.el.className = 'tui-grid-cell-content';
    this.createElement(props);
  }

  createElement(props) {
    // 이 메서드만 재정의 하세요
    // this.el = 화면에 그려넣을 div 객체
    // this.el의 속성을 변경하거나 새 객체를 재할당하는 코드가 위치해야 합니다.
  }

  getElement() {
    return this.el;
  }
}

export {Renderer};
