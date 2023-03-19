import LoginSignUp from '../Components/LoginSignUp.js';
import FooterS from '../Components/Footer';

import {useDispatch} from 'react-redux';
 import { loginAC, signAC } from '../Action/index';
import {useNavigate} from 'react-router-dom';

const LoginupPage = () => {
 const dispatch = useDispatch();
 const navigate = useNavigate();
 const login = (user)=>{
   dispatch(loginAC(user,navigate));
 }
 const signup = (user)=>{
  dispatch(signAC(user,navigate));
}

  return (
     <>
     <LoginSignUp login={login} signup={signup}></LoginSignUp>
     {/* <LoginSignUp ></LoginSignUp> */}

     <FooterS></FooterS>
     </> 
  );
}

export default LoginupPage;