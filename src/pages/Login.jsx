import React, { useContext, useState, useEffect } from 'react';
import MyInput from "../components/UI/input/MyInput";
import { AuthContext } from "../context";

const Login = () => {

    const users = [
        {
            username: 'max',
            password: '202'
        },
        {
            username: 'maksim',
            password: '111'
        },
        {
            username: 'guest',
            password: '123'
        }
    ];

    const [data, setData] = useState({
        username: '',
        password: ''
    });

    const [usercheck, setUsercheck] = useState(true);

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const checkUser = () => {
        setUsercheck(users.find(user => (user.username === data.username && user.password === data.password)));
        if (!usercheck) {
            console.log("Login successful");
        } else {
            console.log("Wrong password or username");
        }
        console.log(usercheck);
    }


    useEffect(() => {
        checkUser(users)
    }, [data.username, data.password])

    console.log(data)


    const { isAuth, setIsAuth } = useContext(AuthContext);

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }

    return (
        <div className="loginPageWrapper">
            <h1>Логінація</h1>
            <form onSubmit={login}>
                <MyInput name="username" value={data.username} onChange={changeHandler} type="text" placeholder="Введіть логін" />
                <MyInput name="password" value={data.password} onChange={changeHandler} type="password" placeholder="Введіть пароль" />
                <button className="buttonLogin" disabled={!usercheck}>Ввійти</button>
            </form>
        </div >
    );
};

export default Login;
