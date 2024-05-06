import React,{ useState } from "react";
import { BrowserRouter, Link, Switch, Route, Navigate } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import {SignUp} from "./SignUp.js";

const Createbutton = () => {
    const navigate = useNavigate();
    const handleMovePage = () =>{
        navigate("/SignUp");
    }

    return(
        <div>
        <button className='createbutton' onClick={handleMovePage}>新しいアカウント作成</button>
        </div>
    );

};
export default Createbutton;