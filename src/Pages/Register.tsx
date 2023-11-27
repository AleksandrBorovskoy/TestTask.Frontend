import React, { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [address, setAddress] = useState('');
    const [redirect, setRedirect] = useState(false);
    const navigate = useNavigate();

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        
        await fetch("http://localhost:5171/api/users/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userName,
                password,
                name,
                surname,
                birthdate,
                address
            })
        });

        setRedirect(true);
    }


    if (redirect) {
        navigate("/login");
    }

    return (
        <div>
            <form onSubmit={ submit }>
                <h1 className="h3 mb-3 fw-normal">Please register</h1>

                <div className="form-floating">
                    <input className="form-control" placeholder="Your Username" onChange={e => setUserName(e.target.value)} />
                    <label>Your Username</label>
                </div>

                <div className="form-floating">
                    <input type="password" className="form-control mb-0" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                    <label>Password</label>
                </div>

                <div className="form-floating">
                    <input className="form-control" placeholder="Name" onChange={e => setName(e.target.value)} />
                    <label>Name</label>
                </div>

                <div className="form-floating">
                    <input className="form-control" placeholder="Surname" onChange={e => setSurname(e.target.value)} />
                    <label>Surname</label>
                </div>

                <div className="form-floating">
                    <input type="date" className="form-control" placeholder="BirthDate" onChange={e => setBirthdate(e.target.value)} />
                    <label>BirthDate</label>
                </div>

                <div className="form-floating">
                    <input className="form-control" placeholder="Address" onChange={e => setAddress(e.target.value)} />
                    <label>Address</label>
                </div>

                <div className="form-check text-start my-3">
                    <input className="form-check-input" type="checkbox" value="remember-me" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Remember me
                    </label>
                </div>
                <button className="btn btn-primary w-100 py-2" type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;