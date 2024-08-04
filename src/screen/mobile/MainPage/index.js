import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import logoImage from '../../../images/logo.png';
import blankBoxImage from '../../../images/main.png';

const MainPage = ({ isLoggedIn, user, logout }) => {
  const navigate = useNavigate();

  const handleCreateSpeechPage = () => {
    navigate('/create');
  };

  const handleHelpWithSpeech = () => {
    navigate('/help-with-speech');
  };

  const handleViewMemories = () => {
    navigate('/view-memories');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  const handleLogoClick = () => {
    navigate('/');
    window.location.reload();
  };

  return (
    <div className="main-page-container">
      <div className="header">
        <div className="main-logo-container">
          <img src={logoImage} alt="고래고래" className="main-logo" onClick={handleLogoClick} />
        </div>
        <div className="auth-buttons">
          {isLoggedIn ? (
            <>
              <button className="auth-button user-button">사용자님</button>
              <button className="auth-button" onClick={logout}>로그아웃</button>
            </>
          ) : (
            <>
              <button className="auth-button" onClick={handleLogin}>로그인</button>
              <button className="auth-button" onClick={handleRegister}>회원가입</button>
            </>
          )}
        </div>
      </div>
      <div className="content-frame">
        <div className="content">
          <div className="image-frame">
            <img src={blankBoxImage} alt="Blank Box" className="image" />
          </div>
          <button className="main-button" onClick={handleCreateSpeechPage}>WIS와 발표하기</button>
          {isLoggedIn ? (
            <>
              <button className="main-button" onClick={handleHelpWithSpeech}>WIS의 도움받기</button>
              <button className="main-button" onClick={handleViewMemories}>추억 살펴보기</button>
            </>
          ) : (
            <>
              <button className="main-button" onClick={handleLogin}>🔒 WIS의 도움받기</button>
              <button className="main-button" onClick={handleLogin}>🔒 추억 살펴보기</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;