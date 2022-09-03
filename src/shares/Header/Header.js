import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';


const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <Link to='/' className='btn btn-ghost'>CarBuddy</Link>
                </div>
                <div className="navbar-end">
                    <div className="dropdown">
                        <Link className='navigation-link' to='/products'>Products</Link>
                        <Link className='navigation-link' to='/products'>Products</Link>
                        {
                            user ? <button onClick={logout} className='navigation-link'>Sign Out</button>
                                :
                                <Link className='navigation-link' to='/signup'>SignUp</Link> || <Link className='navigation-link' to='/login'>Login</Link>}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;