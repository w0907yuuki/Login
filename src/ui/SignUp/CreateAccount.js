import { useState } from "react";
import "./CreateAccount.css";

const CreateAccount = ({password,id,lastname,firstname,birthyear,birtmon,birthday,mailaddress}) =>{
    const [error,seterror]=useState('');
    const handleSubmit = () => {
        if(!password){
            seterror('パスワードを入力してください');
        }
        else if(!id){
            seterror('IDを入力してください')
        }
        else if(!lastname){
            seterror('姓を入力してください')
        }
        else if(!firstname){
            seterror('名を入力してください')
        }
        else if(!birthyear){
            seterror('年を入力してください')
        }
        else if(!birtmon){
            seterror('月を入力してください')
        }
        else if(!birthday){
            seterror('日を入力してください')
        }
        else{
            
            alert('フォームが送信されました')
        }
    };
    return(
        <>
            <button className='createaccont' onClick={handleSubmit}>送信</button>
            <p>{error}</p>
        </>
    );
};
export default CreateAccount;
