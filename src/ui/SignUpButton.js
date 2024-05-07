import {useNavigate} from 'react-router-dom';

const SignUpButton = () => {
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
export default SignUpButton;