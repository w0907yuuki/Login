import "./CheckBoxWoman.css";
const CheckBoxWoMan = () =>{
    return(
        <>
        <input type="radio" name="radiogender" className="radiowoman" value="women"/>
        <label htmlFor='checkboxwoman'>女性</label>
        </>
    );
} ;

export default CheckBoxWoMan;