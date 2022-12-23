import React,{useState} from "react";
import LoginPage from "./LoginPage";
import ForgotPassword from "./ForgotPassword";
import CreateAccount from "./CreateAccount";
import {auth} from "../../firebase";

function Login({setUser,setState,setIsNewUser}) {

  const [loginState, setLoginState] = useState('login');

  return (
    <>
    {
      loginState === 'login' ?
      <LoginPage setIsNewUser={setIsNewUser} setLoginState={setLoginState} setUser={setUser} />
      : loginState === 'forgotpassword' ?
      <ForgotPassword setLoginState={setLoginState} />
      : loginState === 'verifyemail' ?
      <div className='w-full h-full flex flex-col justify-center items-center'>
        <h1 className='text-2xl'>Check {auth.currentUser?.email} for verification!</h1>
        <div onClick={() => setLoginState('login')}>
          <h1>Continue</h1>
        </div>
      </div>
      : loginState === 'resetpassword' ?
      <div className='w-full h-full flex flex-col justify-center items-center'>
        <h1 className='text-2xl'>An email has been sent to reset your password</h1>
        <div onClick={() => setLoginState('login')}>
          <h5>Back to Login</h5>
        </div>
      </div>
      :
      <CreateAccount setIsNewUser={setIsNewUser} setLoginState={setLoginState} />
    }
    </>
  )
}

export default Login;
