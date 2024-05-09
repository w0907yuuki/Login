import "./CreateAccount.css";

const CreateAccount = ({password}) =>{
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
        <button className='createaccont' onClick={handleSubmit}>送信</button>
    );
};
export default CreateAccount;
