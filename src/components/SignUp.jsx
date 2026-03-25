import React, { useState } from "react";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

const SignUp = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            // Firebase handles the auth state automatically
        } catch (error) {
            console.error('Registration error:', error);
            alert('Registration failed: ' + error.message);
        }
    };

    return (
        <section className="register">
            <h2>Register</h2>
            <form id="register-form" onSubmit={handleSubmit}>
                <label htmlFor="reg-email">Email: </label>
                <input type="email" name="email" id="reg-email" placeholder="Email" required onChange={handleChange} />

                <label htmlFor="reg-password">Password: </label>
                <input type="password" name="password" id="reg-password" placeholder="Password" required onChange={handleChange} />
                <button type="submit">Register</button>
            </form>
        </section>
    );
};

export default SignUp;