import React,{ useState } from "react";
import './SignUpPasswordInput.css';

const SignUpPasswordInput = (props) =>{
    const [Password,setPassword] = useState('');
    const [errorpassword,seterrorpassword] = useState('');

    const handleChange = (event) => {
        //もしpassword入力したらPasswordを取得してAppに値を渡す
        const newPassword = event.target.value;
        setPassword(newPassword);
        props.PassToApp(newPassword); 
      };

    const Blurpass = (event) =>{
        const newPassword = event.target.value;
        if(newPassword===""){
            seterrorpassword('パスワードを入力してください');
            props.ErrorPassword('パスワードを入力してください');
        }
        else{
            seterrorpassword('');
            props.ErrorPassword('');
        }
    }
    console.log(errorpassword)
    return(
        <>
        <input type='password' placeholder="パスワードを入力" className='SignUpPasswordInput' id = "txtPassword" value={Password} onChange={handleChange} onBlur={Blurpass} ></input><br></br>
        </>
    );
};
export default SignUpPasswordInput;
