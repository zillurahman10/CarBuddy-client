import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const login = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const name = e.target.name.value

        localStorage.setItem('userName', name)

        signInWithEmailAndPassword(email, password)
    }

    return (
        <div>
            <div className="hero min-h-screen rounded-3">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img className='signUp-iamge' src="https://img.freepik.com/premium-vector/online-registration-sign-up-login-account-smartphone-app-user-interface-with-secure-password-mobile-application-ui-web-banner-access-cartoon-people-vector-illustration_2175-1060.jpg?w=2000" alt="" />
                    </div>
                    <form onSubmit={login} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="example@gmail.com" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder=". . . . . . . . . . " className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div class="flex flex-col w-full border-opacity-50">
                                <div className="form-control mt-6">
                                    <input className='btn btn-primary' type="submit" value="Login" />
                                </div>
                                <div class="divider">OR</div>
                                <div onClick={() => signInWithGoogle()} className="form-control">
                                    <button className="btn btn-active btn-ghost">Login With GOOGLE</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;