import React from 'react';

const MyComponent = () => {
  return <div>나의 새롭고 멋진 컴포넌트</div>;
};

export default MyComponent;
// 화살표 함수를 사용할 경우 this는 자신이 종속된 인스턴스를 가리킨다
// 일반 함수의 경우 자신이 종속된 객체를 this로 가리킨다

// 함수형 컴포넌트를 불러올 때 에디터에서 rsc를 입력하면 MyComponent를 불러올 수 있다
// 클래스형 컴포넌트의 경우 rcc를 입력하면 된다
