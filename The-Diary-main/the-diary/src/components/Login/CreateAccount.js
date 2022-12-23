import React, {useState, useEffect} from 'react';
import {auth} from '../../firebase';
import { FaRegEnvelope, FaUser } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

function CreateAccount({setLoginState,setIsNewUser}) {


  const [values, setValues] = useState({
    email: '',
    password: '',
    name:'',
    showPassword: false,
  });

  const [invalidName, setInvalidName] = useState(false)
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [weakPassword, setWeakPassword] = useState(false);
  const [existingEmail, setExistingEmail] = useState(false);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleCreateAccount = async (email, password, displayName) => {
    if(!values.name){
        setInvalidName(true);
    }else{
        try{
            var newUser = await auth.createUserWithEmailAndPassword(email, password);
            localStorage.setItem("isNewUser", newUser.additionalUserInfo.isNewUser)
            setIsNewUser(newUser.additionalUserInfo.isNewUser);
            auth.currentUser.updateProfile({
                displayName: displayName
            });
            auth.currentUser.sendEmailVerification();
            setLoginState('verifyemail');
        } catch(error){
            console.log(error);
            if(error.code === 'auth/invalid-email'){
                setInvalidEmail(true);
            }else if(error.code === 'auth/weak-password'){
                setWeakPassword(true);
            }else if(error.code === 'auth/email-already-in-use'){
                setExistingEmail(true);
            }
        }
    }
  };

  useEffect(() => {
    setInvalidName(false);
    setInvalidEmail(false);
    setWeakPassword(false);
    setExistingEmail(false);
  },[values.email,values.password, values.name])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className=" bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              The<span className="text-[#be1558]">Diary</span>
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold mb-2">
                Sign Up to your Account
              </h2>
              <div className="border-2 w-12 border-[#be1558] inline-block mb-2"></div>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 rounded-md ">
                  <FaUser className="text-gray-400 m-2" />
                  <input
                    placeholder="Name"
                    className={`bg-gray-100 outline-none text-sm flex-1 rounded focus:border focus:border-[#1de9b6] ${invalidName ? 'border border-red-500' : ''}`}
                    value={values.name}
                    onChange={handleChange('name')}
                  />
                </div>
                <span className={`text-red-500 text-sm my-2 ${invalidName ? 'blocked' : 'hidden'}`}>
                  Enter a valid name
                </span>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 rounded-md">
                  <FaRegEnvelope className="text-gray-400 m-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={values.email} 
                    onChange={handleChange('email')}
                    className={`bg-gray-100 outline-none text-sm flex-1  rounded focus:border focus:border-[#1de9b6] ${invalidEmail ? 'border border-red-500' : ''} ${existingEmail ? 'border border-yellow-500' : ''} `}
                  />
                </div>
                <span className={`text-red-500 text-sm my-2 ${invalidEmail ? 'blocked' : 'hidden'}`}>
                  Invalid email address
                </span>
                <span className={`text-yellow-500 text-sm my-2 ${existingEmail ? 'blocked' : 'hidden'}`}>
                  This email address already exists
                </span>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 rounded-md">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange('password')}
                    className={`bg-gray-100 outline-none text-sm flex-1 rounded focus:border focus:border-[#1de9b6] ${weakPassword ? 'border border-red-500' : ''} `}
                  />
                </div>
                <span className={`text-red-500 text-sm ${weakPassword ? 'blocked' : 'hidden'}`}>Incorrect password.</span>
                <div className='border-2 border-[#be1558] text-[#be1588] rounded-full px-12 py-2 inline-block font-semibold hover:bg-[#be1588] hover:text-white' onClick={() => handleCreateAccount(values.email,values.password,values.name)}>
                  Sign Up
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/5 bg-[#be1558] text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2 ">Hey, Diarist!</h2>
            <div className="border-2 w-12 border-white inline-block mb-2"></div>
            <p className="mb-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
              animi ex, sunt officia quisquam
            </p>
            <div className='border-2 border-white text-white rounded-full px-12 py-2 inline-block cursor-pointer font-semibold hover:bg-white hover:text-[#be1588]' onClick={() => setLoginState('login')}>
              Sign In
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CreateAccount