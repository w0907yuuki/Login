import React,{ useState } from "react";
import './SignUpPassCheck.css';

const SignUpPassCheck = (props) =>{
    const [Password,setPassword] = useState('');
    const [errorpassword,seterrorpassword] = useState('');

    const handleChange = (event) => {
        //もしpassword入力したらPasswordを取得してAppに値を渡す
        const newPassword = event.target.value;
        setPassword(newPassword);
        props.CheckPassToApp(newPassword); 
      };
      console.log(errorpassword);
    const Blurpass = (event) =>{
        const newPassword = event.target.value;
        if(!newPassword){
            seterrorpassword('パスワードが間違ってます');
            props.ErrorCheckPass(errorpassword);
        }
        else{
            seterrorpassword('');
            props.ErrorCheckPass('');
        }
    }
    return(
        <>
        <input type='password' placeholder="パスワード確認" className='SignUpPassCheck' id = "txtPassword" value={Password} onChange={handleChange} onBlur={Blurpass} ></input><br></br>
        </>
    );
};
export default SignUpPassCheck;
