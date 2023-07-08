import React from 'react';
import { auth, provider } from '../../../firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../Header/header';

function AdminLogin({ setIsAuth }) {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem('isAuth', true);
      setIsAuth(true);
      navigate('/');
    });
  };

  return (
    <div className='AdminloginPage'>
      <Header />
      <p>Sign In With Google to Continue</p>
      <button className='Adminlogin-with-google-btn' onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
}

export default AdminLogin;
