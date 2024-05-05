import App from "./App";
import React,{ useState } from "react";

const Password = () =>{
    const [Password,setPassword] = useState('');
    const handleChange = (event) => {
        setPassword(event.target.value); // テキストボックスの値を更新
      };
    return(
        <input type='password' placeholder="パスワードを入力" className='Password' id = "txtPassword" value={Password} onChange={handleChange} ></input>
    );
};
export default Password;
