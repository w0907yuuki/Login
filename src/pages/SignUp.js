import './SignUp.css';
import React, {useState } from 'react';
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
  const [password,setPassword] = useState('');
  const [firstname,setfirstname] = useState('');
  const [lastname,setlastname] = useState('');
  const [mailaddress,setmailaddress] = useState('');
  const [birthyear,setbirthyear] = useState('');
  const [birthmon,setbirthmon] = useState('');
  const [birthday,setbirthday] = useState('');
  const [id,setid] = useState('');
  const [errorfirstname,seterrorfirstname] =useState('');
  const [errorlastname,seterrorlastname] =useState('');
  const [errorbirthyear,seterrorbirthyear] =useState('');
  const [errorbirthmon,seterrorbirthmon] =useState('');
  const [errorbirthday,seterrorbirthday] =useState('');
  const [errorid,seterrorid] =useState('');
  const [eroraddress,seterroraddress] = useState('');
  const [errorpassword,seterrorpassword] = useState('');

  //名取得
  const handlelastname = (e) =>{
    const newlastname = e.target.value;
        setlastname(newlastname); 
  }; 
  //姓取得
  const handlefirstname = (e) =>{
    const newfirstname = e.target.value;
        setfirstname(newfirstname); 
  };
  //メールアドレス取得
  const handleaddless = (e) =>{
    const newmailaddress = e.target.value;
        setmailaddress(newmailaddress); 
  };
  
  //年リスト
  const BirthYearToApp =(BirthYearToApp) =>{
    setbirthyear(BirthYearToApp);
  };

  const ErrorYear = (ErrorYear) => {
    seterrorbirthyear(ErrorYear);
  };
  //月リスト
  const BirthMonToApp =(BirthMonToApp) =>{
    setbirthmon(BirthMonToApp);
  };
  const ErrorMon = (ErrorMon) =>{
    seterrorbirthmon(ErrorMon);
  }

  //日リスト
  const BirthDayToApp =(BirthDayToApp) =>{
    setbirthday(BirthDayToApp);
  };
  const ErrorDay = (ErrorDay) =>{
    seterrorbirthday(ErrorDay);
  }

  //ID取得
  const IDToApp = (IDToApp) => {
    setid(IDToApp);
  } ;
  const ErrorID =(ErrorID) =>{
    seterrorid(ErrorID);
  }
  //パスワード取得
  const PassToApp = (PassToApp) => {
    setPassword(PassToApp);
  };
  const ErrorPassword =(ErrorPassword) =>{
    seterrorpassword(ErrorPassword);
  }

  //フォーカスが外れたら実施
  const Blurfirstname= (e) =>{
    if(!firstname){
      seterrorfirstname('姓を入力してください')
    }
    else{
      seterrorfirstname('')
    }
  }
  const Blurlastname = (e) =>{
    if(!lastname){
      seterrorlastname('名を入力してください')
    }
    else{
      seterrorlastname('')
    }
  }
  const Bluraddress = (e) =>{
    if(!mailaddress){
      seterroraddress('メールアドレスにメールを入力してください');
    }
    else{
      seterroraddress('');
    }
  }

  return (
    <form>
      <div className='main'>
        <div className='position'>
          <h2>アカウント作成</h2>

          <div className='textbox-container'>
            <input type='text' placeholder="姓" className='firstName' onChange={handlefirstname}  onBlur={Blurfirstname}></input>
            <input type='text' placeholder="名" className='lastName' onChange={handlelastname} onBlur={Blurlastname}></input>
          </div>
          <p className='errorname'>{errorfirstname}<br></br> {errorlastname}</p>
          <p className='p-birth'>生年月日</p>
          {errorbirthyear && <p className='errormsg'>年を選択してください</p>}
          {errorbirthmon && <p className='errormsg'>月を選択してください</p>}
          {errorbirthday && <p className='errormsg'>日を選択してください</p>}
          <div className='selectbirthday'>
            <SelectYear BirthYearToApp={BirthYearToApp} ErrorYear={ErrorYear}/>
            <SelectMon BirthMonToApp={BirthMonToApp} ErrorMon={ErrorMon}/>
            <SelectDay BirthDayToApp={BirthDayToApp} ErrorDay={ErrorDay}/>
          </div>
          <p className='p-gender'>性別　※任意</p>
          <div className='checkgender'>
            <CheckBoxMan />
            <CheckBoxWoMan />
            <CheckBoxOther />
          </div>
          {eroraddress && <p className='erroraddressmsg'>メールアドレスを入力してください</p>}
          <input type='text' placeholder='メールアドレス' 
            className='mailaddress' onChange={handleaddless} onBlur={Bluraddress}
          /><br></br>
          {errorid && <p className='errormsg'>IDを入力してください</p>}
          <TextID IDToApp={IDToApp} ErrorID={ErrorID}/><br></br>
          {errorpassword && <p className='erroraddressmsg'>パスワードを入力してください</p>}
          <SignUpPasswordInput PassToApp ={PassToApp} ErrorPassword ={ErrorPassword}/><br></br>
          <CreateAccount 
          password={password} firstname={firstname} lastname={lastname} 
          id ={id} mailaddress={mailaddress} birthyear = {birthyear} 
          birthday={birthday} birthmon={birthmon}/><br></br>
          <Link to = "/Login">ログイン</Link>
        </div>
      </div>
    </form>
  );
};

export default SignUp;

            /*radio値の渡し方*/
            //onBlurでエラーメッセージ
            //