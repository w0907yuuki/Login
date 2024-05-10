import './SelectMon.css';
import { useState } from 'react';

const SelectMon = (props) =>{
    const[birthmon,setbirthmon]=useState('');
    const[errormon,seterrorbirthmon]=useState('');
    //入力チェック
    const errorbirthmon = (e) =>{
        if(birthmon ===""){
            seterrorbirthmon('月を選択してください');
            props.ErrorMon('月を選択してください')
            
        }
        else{
            seterrorbirthmon('');
            props.ErrorMon('');
        }
    }
    //もし選択したら値を渡す
    const handlechange= (e) =>{
        const newbirthmon = e.target.value;
        setbirthmon(newbirthmon);
        props.BirthMonToApp(newbirthmon); 
}
    console.log(errormon)

    return(
        <>
            <select className='selectmon'onChange={handlechange} onBlur={errorbirthmon}>
                <option value="">-</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
            </select>　月
        </>
    );
};

export default SelectMon;