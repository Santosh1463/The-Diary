import React,{useState, useEffect} from 'react';
import {auth} from '../../firebase';

function ForgotPassword({setLoginState}) {

  const [values, setValues] = useState({
    email: '',
  });
  const [noUser, setNoUser] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleResetPassword = (email) => {
    auth.sendPasswordResetEmail(email)
    .then(() => {
        setLoginState('resetpassword');
    }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(errorCode, errorMessage)
        if(errorCode === 'auth/invalid-email'){
            setInvalidEmail(true);
        }else if(errorCode === 'auth/user-not-found'){
            setNoUser(true);
        }
    });
  };

  useEffect(() => {
    setInvalidEmail(false);
    setNoUser(false);
  },[values.email])

  return (
    <div className='w-full h-full flex flex-col justify-center items-center '>
        <h1 className="m-2 text-3xl leading-normal">Reset Password</h1>
        <div className="h-full flex flex-col justify-center items-center border-2 rounded border-[#be1558]">
            <div>
                <h1 className="text-gray-500 mx-2">
                    Email 
                    <span className={`text-red-500 text-sm ml-2 ${invalidEmail ? 'blocked' : 'hidden'}`}>
                        Please enter a valid email address.
                    </span>
                    <span className={`text-red-500 text-sm ml-2 ${noUser ? 'blocked' : 'hidden'}`}>
                        This email address does not exist.
                    </span>
                </h1>
                <input 
                            className={`w-80 h-12 my-2 mx-2 p-4 rounded outline-0 bg-gray-500 bg-opacity-10 focus:border focus:border-[#1de9b6] ${invalidEmail || noUser ? 'border border-red-500' : ''}`}
                            value={values.email} 
                            placeholder=""
                            onChange={handleChange('email')}
                />
            </div>
            <div onClick={() => handleResetPassword(values.email)}>
                <h5 className='font-bold'>Reset Password</h5>
            </div>
            <h1 className='text-gray-400'>Already have an account? <span className="text-[#be1558] cursor-pointer font-bold" onClick={() => setLoginState('login')}>Sign In</span></h1>
        </div>
    </div>
  )
}

export default ForgotPassword