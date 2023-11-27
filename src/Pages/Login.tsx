import React, { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props: { setName: (name: string) => void }) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const navigate = useNavigate();

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const response = await fetch("http://localhost:5171/api/users/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({
                userName,
                password
            })
        });

        const content = await response.json();

        setRedirect(true);
        props.setName(content.username);
    }

    if (redirect) {
        navigate("/");
    }

    return (
        <form onSubmit={ submit }>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating">
                <input className="form-control" placeholder="Your Username" onChange={e => setUserName(e.target.value)} />
                <label>Your Username</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                <label>Password</label>
            </div>

            <div className="form-check text-start my-3">
                <input className="form-check-input" type="checkbox" value="remember-me" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Remember me
                </label>
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
        </form>
    );
};

export default Login;