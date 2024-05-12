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
        if(!mailaddress){
          seterroraddress('メールアドレスにメールを入力してください');
          props.ErrorAddress(erroraddress);
        }
        else{
          seterroraddress('');
          props.ErrorAddress('');
        }
      }

    return(
        <>
        <input type='text' placeholder='メールアドレス' 
            className='mailaddress' onChange={handleaddless} onBlur={Bluraddress}
          />
        </>
    )
}

export default TextMailAddress;