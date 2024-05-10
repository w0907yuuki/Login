import "./TextID.css";
import { useState } from "react";

const TextID = (props) =>{
    const[id,setid]=useState('');
    const[errorid,seterrorid]=useState('');
    const handleerrorid = (e) =>{
        if(id ===""){
            seterrorid('IDを入力してください');
            props.ErrorID('IDを入力してください')
            
        }
        else{
            seterrorid('');
            props.ErrorID('');
        }
    }
     //もし選択したら値を渡す
    const handlechange= (e) =>{
        const newid = e.target.value;
        setid(newid);
        props.IDToApp(newid); 
}
    console.log(errorid)
    return(
        <>
            <input  type="text" 
                    placeholder="ID" 
                    className="textid" 
                    onChange={handlechange} 
                    onBlur={handleerrorid}>
            </input>
        </>

    );
};

export default TextID;