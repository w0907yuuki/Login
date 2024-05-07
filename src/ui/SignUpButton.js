import {useNavigate} from 'react-router-dom';
import './SignUpButton.css';

const SignUpButton = () => {
    const navigate = useNavigate();
    const handleMovePage = () =>{
        navigate("/SignUp");
    }

    return(
        <div>
        <button className='signupbutton' onClick={handleMovePage}>新しいアカウント作成</button>
        </div>
    );

};
export default SignUpButton;