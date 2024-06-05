import './Login.css';
import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

Modal.setAppElement('#root');

function Login() {

  // 입력 필드 값 저장
  const [form, setForm] = useState({
    name: '',
    birthdate: '',
    phoneNumber: '',
  });

  // 필드 유효성 상태 저장
  const [errors, setErrors] = useState({
    name: false,
    birthdate: false,
    phoneNumber: false,
  });

  //modal 제어
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [responseMap, setResponseMap] = useState({});

  // 입력값 변경될 때 호출, 입력값 업데이트하고 유효성 검사 수행
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: !e.target.validity.valid,
    }));
  };

  // 입력 필드에 포커스 갈 때 호출, placeholder 설정
  const handleFocus = (e) => {
    const placeholder = e.target.name === 'birthdate' ? 'YYYYMMDD' : e.target.name === 'phoneNumber' ? '01012345678' : '';
    e.target.placeholder = placeholder;
  };

  // 입력 필드에서 포커스 벗어날 때 호출, placeholder 지우고 유효성 검사 수행
  const handleBlur = (e) => {
    e.target.placeholder = '';
    setErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]: !e.target.validity.valid,
    }));
  };

  // 폼 제출 시 호출
  const handleSubmit = async (e, loginTypeLevel) => {
    e.preventDefault();
    const userData = { ...form, loginTypeLevel }
    console.log("userData : ",userData);
    const result = await sendData({ ...form, loginTypeLevel });
    console.log("result : ",result);
    setResponseMap(result);
    setModalIsOpen(true);
  };

  const sendData = async (data) => {
      try {
        const response = await axios.post('http://localhost:8080/mh/social-login', data);
        return response.data;
      } catch (error) {
        console.error('Error:', error);
        return {};
      }
    };

  // 입력 필드의 렌더링과 유효성 검사
  const renderInputField = (field, type, placeholder, pattern, title) => (
    <div key={field} className={`form-group ${errors[field] ? 'invalid' : form[field] ? 'valid' : ''}`}>
      <input
        type={type}
        id={field}
        name={field}
        placeholder=" "
        value={form[field]}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        pattern={pattern}
        title={title}
        required
      />
      <label htmlFor={field}>{placeholder}</label>
      <span className="error-message">{title}</span>
    </div>
  );

  return (
      <div className="login-container">
        <div className="Login">
          <div className="main">
            <span>MediHistory</span>
          </div>
          <div className="sub">
            <span>개인 진료 정보 조회</span>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-container">
              {renderInputField('name', 'text', '이름', undefined, '이름은 필수 정보입니다.')}
              {renderInputField('birthdate', 'text', '생년월일', '\\d{8}', '생년월일은 8자리로 입력하세요.')}
              {renderInputField('phoneNumber', 'tel', '핸드폰번호', '\\d{11}', '핸드폰 번호는 숫자만 입력하세요.')}

              <div className="login-buttons">
                <div className="kakao-button">
                  <button type="button" onClick={(e) => handleSubmit(e, "1")} className="kakao-login">
                    <img src="\kakao_logo.png" width="100" height="130" alt="Kakao Login" />
                  </button>
                </div>
                <div className="naver-button">
                  <button type="button" onClick={(e) => handleSubmit(e, "6")} className="naver-login">
                    <img src="\naver_logo.png" width="100" height="130" alt="Naver Login" />
                  </button>
                </div>
              </div>
            </div>
          </form>
          <Modal className="auth-background" isOpen={modalIsOpen}>
            <div className="auth-wait">인증서 동의 후 확인 버튼을 눌러주세요</div>
            <div align="center">
              <button className="cancel-btn" onMouseUp={() => setModalIsOpen(false)}>취소</button>
              <button className="regist-btn" onMouseUp={() => setModalIsOpen(false)}>확인</button>
            </div>
          </Modal>
        </div>
      </div>
      );
}

export default Login;
