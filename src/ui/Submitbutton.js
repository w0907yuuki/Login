

const submitbutton = ({password}) =>{
    const handleSubmit = () => {
        console.log("Password",password);
        if(!password){
            alert('パスワードを入力してください')
        }
        else{
            alert('パスワード入力成功')
        }
    
    }
    return(
        <button className='submitbutton' onClick={handleSubmit}>送信</button>
    );
};
export default submitbutton;
