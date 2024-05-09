import './Login.css';
import React, { useRef, useState } from 'react';
import Password from '../ui/Login/LoginPasswordInput.js';
import SubmitButton from '../ui/Login/SubmitButton.js';
import SignUpButton from '../ui/Login/SignUpButton.js';

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
          
          <p className='info'>——————————または——————————</p><br></br>
          <SignUpButton />
        </div>
      </div>
  );
};

export default Login;
//<a href='#'>アカウントを忘れた場合</a>
//現時点では実装予定なし