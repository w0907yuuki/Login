import "./TextMailAddress.css";
import { useState } from "react";
const TextMailAddress = (props) =>{

    const[mailaddress,setmailaddress] =useState('');
    const[erroraddress,seterroraddress] = useState('');
        const handleaddless = (e) =>{
        const newmailaddress = e.target.value;
            setmailaddress(newmailaddress);
            props.AddToApp(newmailaddress); 
      };
      const Bluraddress = (e) =>{
        const newMailAddress = e.target.value;
        if(!newMailAddress){
          props.ErrorAddress('メールアドレスにメールを入力してください');
        }
        else if(!/\S+@\S+\.\S+/.test(newMailAddress)){
            props.ErrorAddress('メールアドレスの形式が正しくありません');
        }
        else{
          seterroraddress('');
          props.ErrorAddress('');
        }
      }
      console.log(mailaddress);
      console.log(erroraddress);
    return(
        <>
        <input type='text' placeholder='メールアドレス' 
            className='mailaddress' onChange={handleaddless} onBlur={Bluraddress}
          />
        </>
    )
}

export default TextMailAddress;