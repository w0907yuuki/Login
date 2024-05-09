import './SignUp.css';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SignUpPasswordInput from '../ui/SignUp/SignUpPasswordInput.js';
import SelectYear from '../ui/SignUp/SelectYear.js';
import SelectMon from '../ui/SignUp/SelectMon.js';
import SelectDay from '../ui/SignUp/SelectDay.js';
import CheckBoxMan from '../ui/SignUp/CheckBoxMan.js';
import CheckBoxWoMan from '../ui/SignUp/CheckBoxWoman.js';
import CheckBoxOther from '../ui/SignUp/CheckBoxOther.js';
import TextID from '../ui/SignUp/TextID.js';
import CreateAccount from '../ui/SignUp/CreateAccount.js';

const SignUp = () => {
  const refUserid = useRef(null);
  const [password,setPassword] = useState('');

  const PassToApp = (PassToApp) => {
    setPassword(PassToApp);
  }

  return (
    <form>
      <div className='main'>
        <div className='position'>
          <h2>アカウント作成</h2>
          <div className='textbox-container'>
            <input type='text' placeholder="姓" className='firstName' ref={refUserid}></input>
            <input type='text' placeholder="名" className='lastName' ref={refUserid}></input>
          </div>
          <p className='p-birth'>生年月日</p>
          <div className='selectbirthday'>
            <SelectYear />
            <SelectMon />
            <SelectDay />
          </div>
          <p className='p-gender'>性別　※任意</p>
          <div className='checkgender'>
            <CheckBoxMan />
            <CheckBoxWoMan />
            <CheckBoxOther />
          </div>
          <input type='text' placeholder='メールアドレス' className='mailaddress' />
          <TextID />
          <SignUpPasswordInput PassToApp ={PassToApp}/><br></br>
          <CreateAccount password={password} /><br></br>
          <Link to = "/Login">ログイン</Link>
        </div>
      </div>
    </form>
  );
};

export default SignUp;