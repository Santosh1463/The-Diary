import React, {useEffect, useState} from 'react';
import {auth, provider,db, storage} from '../../firebase';
import { FaFacebookF, FaGoogle, FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";


var newUser = {
  name: '',
  photo: '',
  uid: '',
  email : '',
  type : '',
}

function LoginPage({setLoginState,setUser,setIsNewUser}) {

  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false,
  });
  const [noUser, setNoUser] = useState(false);
  const [verifyemail, setVerifyEmail] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleUserLogin = async (email, password) => {
    try{
        var signedInUser = await auth.signInWithEmailAndPassword(email, password);
        if(signedInUser.user.emailVerified){
            newUser = {
                email: signedInUser.user.email,
                name: signedInUser.user.displayName,
                photo: signedInUser.user.photoURL,
                uid: signedInUser.user.uid,
                type: signedInUser.additionalUserInfo.providerId,
            }
            localStorage.setItem("user", JSON.stringify(newUser));
            setUser(newUser);
            db.collection('users').doc(newUser.uid).get().then((doc) => {
                if(doc.exists){
                    return
                }else{
                    db.collection('/users').doc(newUser.uid).set(newUser)
                }
            })
            var storageRef = storage.ref('/'+ (newUser.uid));
            storageRef.child(newUser.name).put();
        }else{setVerifyEmail(true)};
    } catch(error) {
        console.log(error.code);
        if(error.code === 'auth/wrong-password'){
            setInvalidPassword(true);
        }else if(error.code === 'auth/user-not-found'){
            setNoUser(true);
        }else if(error.code === 'auth/invalid-email'){
            setInvalidEmail(true);
        }else if(error.code === 'auth/too-many-requests'){
            alert('too-many-requests. Please try again later')
        }
    }
  };

  const handleGoogleLogin = async () => {
    try{
        var signedInUser = await auth.signInWithPopup(provider);    
        localStorage.setItem("isNewUser", signedInUser.additionalUserInfo.isNewUser)
        setIsNewUser(signedInUser.additionalUserInfo.isNewUser);
        newUser = {
            email: signedInUser.user.email,
            name: signedInUser.user.displayName,
            photo: signedInUser.user.photoURL,
            uid: signedInUser.user.uid,
            type: signedInUser.additionalUserInfo.providerId,
        }
        localStorage.setItem("user", JSON.stringify(newUser));
        setUser(newUser);
        db.collection('users').doc(newUser.uid).get().then((doc) => {
            if(doc.exists){
                return
            }else{
                db.collection('/users').doc(newUser.uid).set(newUser)
            }
        })
        var storageRef = storage.ref('/'+ (newUser.uid));
        storageRef.child(newUser.name).put();
    } catch(e){
        console.log(e);
    }
  };

  useEffect(() => {
    setInvalidEmail(false);
    setInvalidPassword(false);
    setNoUser(false);
  },[values.email,values.password])

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
                    Sign In to Your Thoughts
                  </h2>
                  <div className="border-2 w-12 border-[#be1558] inline-block mb-2"></div>
                  <div className="flex justify-center my-2">
                    <div className="border-2 border-gray-200 rounded-full p-3 mx-1">
                      <FaFacebookF className="text-sm" />
                    </div>
                    <div className="border-2 border-gray-200 rounded-full p-3 mx-1 cursor-pointer" onClick={() => handleGoogleLogin()}>
                      <FaGoogle className="text-sm" />
                    </div>
                  </div>
                  <p className="text-gray-400">or use your email</p>
                  <div className="flex flex-col items-center">
                    <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 rounded-md">
                      <FaRegEnvelope className="text-gray-400 m-2" />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={handleChange('email')}
                        className={`bg-gray-100 outline-none text-sm flex-1 rounded focus:border focus:border-[#1de9b6] ${invalidEmail || noUser ? 'border border-red-500' : '' } ${verifyemail ? 'border border-yellow-500' : '' }`}
                      />
                    </div>
                    <span className={`text-red-500 text-sm my-2 ${invalidEmail ? 'blocked' : 'hidden'}`}>
                      Please enter a vaild email address
                    </span>
                    <span className={`text-red-500 text-sm my-2 ${noUser ? 'blocked' : 'hidden'}`}>
                      This email address does not exist
                    </span>
                    <span className={`text-red-500 text-sm my-2 ${verifyemail ? 'blocked' : 'hidden'}`}>
                      Please verify your email address
                    </span>
                    <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 rounded-md">
                      <MdLockOutline className="text-gray-400 m-2" />
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange('password')}
                        className={`bg-gray-100 outline-none text-sm flex-1 rounded focus:border focus:border-[#1de9b6] ${invalidPassword ? 'border border-red-500' : ''}`}
                      />
                    </div>
                    <span className={`text-red-500 text-sm my-2 ${invalidPassword ? 'blocked' : 'hidden'}`}>Incorrect password.</span>
                  <div className='flex justify-between w-64 mb-5'>
                    <div className='flex items-center text-xs'>Reset Password</div>
                    <div className='text-xs cursor-pointer underline' onClick={() => setLoginState('forgotpassword')} >Forgot Password?</div>
                  </div>
                    <div className='border-2 border-[#be1558] text-[#be1588] rounded-full px-12 py-2 inline-block cursor-pointer font-semibold hover:bg-[#be1588] hover:text-white' onClick={() => handleUserLogin(values.email, values.password)}>
                      Sign In
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
                <div className='border-2 border-white text-white rounded-full px-12 py-2 inline-block cursor-pointer font-semibold hover:bg-white hover:text-[#be1588]'onClick={() => setLoginState('createaccount')}>
                      Sign Up
                </div>
              </div>
            </div>
          </main>
    </div>
  )
}

export default LoginPage