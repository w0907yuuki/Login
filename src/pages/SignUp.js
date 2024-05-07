import './SignUp.css';
import React, { useRef, useState } from 'react';
import Password from '../ui/LoginPasswordInput.js';
import Submitbutton from '../ui/Submitbutton.js';

const SignUp = () => {
  const refUserid = useRef(null);
  const [password,setPassword] = useState('');

  const PassToApp = (PassToApp) => {
    setPassword(PassToApp);
  }

  return (
      <div className='main'>
        <div className='position'>
          <h2>アカウント作成</h2>
          <input type='text' placeholder="姓" className='FirstName' id = "txtFirstName"ref={refUserid}></input>
          <input type='text' placeholder="名" className='LastName' id = "txtLastName"ref={refUserid}></input>
          <Password PassToApp ={PassToApp}/><br></br>
          <Submitbutton password={password} /><br></br>
          <p className='link'>アカウントを忘れた場合</p><br></br><br></br>
          <p className='info'>——————————または——————————</p><br></br>
        </div>
      </div>
  );
};

export default SignUp;