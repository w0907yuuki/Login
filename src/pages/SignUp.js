import './SignUp.css';
import React, { useRef, useState } from 'react';
import SignUpPasswordInput from '../ui/SignUpPasswordInput.js';
import SubmitButton from '../ui/SubmitButton.js';
import SelectYear from '../ui/SelectYear.js';
import SelectMon from '../ui/SelectMon.js';
import SelectDay from '../ui/SelectDay.js';
import CheckBoxMan from '../ui/CheckBoxMan.js';
import CheckBoxWoMan from '../ui/CheckBoxWoman.js';
import CheckBoxOther from '../ui/CheckBoxOther.js';

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
          <SignUpPasswordInput PassToApp ={PassToApp}/><br></br>
          <SubmitButton password={password} /><br></br>
        </div>
      </div>
    </form>
  );
};

export default SignUp;