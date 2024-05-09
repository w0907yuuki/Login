import React,{ useState } from "react";
import './SignUpPasswordInput.css';

const SignUpPasswordInput = (props) =>{
    const [Password,setPassword] = useState('');

    const handleChange = (event) => {
        //もしpassword入力したらPasswordを取得してAppに値を渡す
        const newPassword = event.target.value;
        setPassword(newPassword);
        props.PassToApp(newPassword); 
      };
    return(
        <>
        <input type='password' placeholder="パスワードを入力" className='SignUpPasswordInput' id = "txtPassword" value={Password} onChange={handleChange} ></input>
        </>
    );
};
export default SignUpPasswordInput;
