import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <div className="App">
     <div className="main">
      <span>MediHistory</span>
     </div>
     <div className="sub">
     <span>개인 진료 정보 조회 ㅎㅎ</span>
     </div>

    <div className='login-buttons'>
      
    <div className='kakao-button'>
    <a href="https://kauth.kakao.com/oauth/authorize?client_id={YOUR_CLIENT_ID}&redirect_uri={YOUR_REDIRECT_URI}&response_type=code">
        <button className="kakao-login">
          <img src="kakao_logo.png" width="100" height="130"/>
        </button>
      </a>
    </div>

    <div className="naver-button"> 
    <a href="https://nid.naver.com/oauth2.0/authorize?response_type=token&client_id={YOUR_CLIENT_ID}&redirect_uri={YOUR_REDIRECT_URI}&state={YOUR_STATE_STRING}">
        <button className="naver-login">
          <img src="naver_logo.png" width="100" height="130"/>
        </button>
      </a>
    </div>
    </div>


    </div>
  );
}



export default App;
 