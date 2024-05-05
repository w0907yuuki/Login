import './App.css';
import React, { useRef, useState } from 'react';
import Password from './Password.js';

const App = () => {
  const refUserid = useRef(null);
  

  const handleSubumit = () => {
    if(!Password){
      alert('パスワードを入力してください')
    }
    else{
      alert('パスワード入力成功')
    }
  };

  return (
    <div className='main'>
      <div className='position'>
        <h2>システムにログイン</h2>
        <input type='text' placeholder="IDを入力" className='UserID' id = "txtUserID"ref={refUserid}></input>
       <Password />
        <button className='submitbutton' onClick={handleSubumit}>送信</button><br></br>
        <a href="#" className='link'>アカウントを忘れた場合</a><br></br><br></br>
        <a className='info'>——————————または——————————</a><br></br>
        <button className='createbutton'>新しいアカウント作成</button>
      </div>
    </div>
  );
};

export default App;
