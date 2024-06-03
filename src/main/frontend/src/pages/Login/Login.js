import './Login.css';
import React from 'react';


function Login() {


  return (
    <div className="Login">
     <div className="main">
      <span>MediHistory</span>
     </div>
     <div className="sub">
     <span>개인 진료 정보 조회</span>
     </div>

    <div className='login-buttons'>
      
    <div className='kakao-button'>
    <a href="/medi_history">
        <button className="kakao-login">
          <img src="\kakao_logo.png" width="100" height="130" alt="kakao"/>
        </button>
      </a>
    </div>

    <div className="naver-button"> 
    <a href="/medi_history">
        <button className="naver-login">
          <img src="\naver_logo.png" width="100" height="130" alt="naver" />
        </button>
      </a>
    </div>
    </div>


    </div>
  );
}

export default Login;
 