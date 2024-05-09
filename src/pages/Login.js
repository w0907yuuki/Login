import './Login.css';
import React, { useRef, useState } from 'react';
import Password from '../ui/LoginPasswordInput.js';
import SubmitButton from '../ui/SubmitButton.js';
import Createbutton from '../ui/SignUpButton.js';
import SignUpButton from '../ui/SignUpButton.js';

const Login = () => {
  const refUserid = useRef(null);
  const [password,setPassword] = useState('');

  const PassToApp = (PassToApp) => {
    setPassword(PassToApp);
  }

  return (
      <div className='main'>
        <div className='position'>
          <h2>システムにログイン</h2>
          <input type='text' placeholder="IDを入力" className='UserID' id = "txtUserID"ref={refUserid}></input>
          <Password PassToApp ={PassToApp}/><br></br>
          <SubmitButton password={password} /><br></br>
          <a href='#'>アカウントを忘れた場合</a>
          <p className='info'>——————————または——————————</p><br></br>
          <SignUpButton />
        </div>
      </div>
  );
};

export default Login;
