import './App.css';
import React, { useRef, useState } from 'react';
import Password from './Password.js';
import Submitbutton from './Submitbutton.js';

const App = () => {
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
        <button className='createbutton'>新しいアカウント作成</button>
        <a>{password}</a>
      </div>
    </div>
  );
};

export default App;
