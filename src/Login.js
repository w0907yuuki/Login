import './App.css';
import React, { useRef, useState } from 'react';
import { BrowserRouter,Route,Link, Routes} from 'react-router-dom';
import Password from './Password.js';
import Submitbutton from './Submitbutton.js';
import Createbutton from './Createbutton.js';

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
          <Submitbutton password={password} /><br></br>
          <a href="#" className='link'>アカウントを忘れた場合</a><br></br><br></br>
          <a className='info'>——————————または——————————</a><br></br>
          <Createbutton />
          <a>{password}</a>
        </div>
      </div>
  );
};

export default Login;
