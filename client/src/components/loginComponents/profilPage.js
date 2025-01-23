import React, { useState, useEffect } from 'react';

const ProfilPage = ({ loggeduser, onClick }) => {
    const [id, setID] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [changeduser, setChangedUser] = useState({})

    const handleClick = (e) => {
        e.preventDefault();
        onClick(changeduser);

        setID('');
        setUsername('');
        setPassword('');
        setEmail('');
    }

    useEffect(() => {
        if (loggeduser) {
            setID(loggeduser.id);
            setUsername(loggeduser.username);
            setPassword(loggeduser.password);
            setEmail(loggeduser.email);
        }
    }, [loggeduser]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'id') setID(value);
        if (name === 'username') setUsername(value);
        if (name === 'password') setPassword(value);
        if (name === 'email') setEmail(value);
        setChangedUser({ id, username, password, email });
    };

    return (
        <div>
            <h1>Profile Page</h1>
            {loggeduser ? (
                <form onSubmit={handleClick} >
                    <label>
                        ID:
                        <input type="text" name="id" value={id} />
                    </label>
                    <label>
                        Username:
                        <input type="text" name="username" value={username} onChange={handleChange} />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input type="text" name="password" value={password} onChange={handleChange} />
                    </label>
                    <br />
                    <label>
                        Email:
                        <input type="text" name="email" value={email} onChange={handleChange} />
                    </label>

                    <button type="submit"  >Change Credentials</button>
                </form>
            ) : (
                <p>No user is logged in.</p>
            )}
        </div>
    );
};

export default ProfilPage;
