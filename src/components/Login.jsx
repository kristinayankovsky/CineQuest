import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            // Firebase handles the auth state automatically
        } catch (error) {
            console.error("Login error: ", error);
            alert("Login failed: " + error.message);
        }
    };

    return (
        <section className='login'>
            <h2>Login</h2>
            <form id="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </section>
    );
};

export default Login;