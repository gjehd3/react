import React from 'react';
// react를 불러와서 사용할 수 있게 해줌, NODE.js에서 지원하는 기능(require로 패키지 불러오기 가능)
// 번들 : 파일을 묶듯이 연결 -> 브라우저에서 이 기능을 사용하기 위해 번들러 사용
// 리액트 프로젝트에서는 웹팩 사용
import logo from './logo.svg';
import './App.css';
// 웹팩을 사용하여 svg, css 파일을 사용 가능
// 번들러 도구를 사용하여 import/require로 불러온 모듈을 모두 합쳐 하나의 파일로 생성 햣

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
// APP 컴포너트를 생성, function을 사용하였기에 함수형 컴포넌트
// JSX 코드이다