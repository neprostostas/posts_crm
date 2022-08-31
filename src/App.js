import React, { useEffect, useState } from 'react';
import './styles/App.css';
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";
import MainLayout from './components/MainLayout/MainLayout';

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
        setLoading(false);
    }, [])

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading
        }}>
            <BrowserRouter>
                <MainLayout>
                    <AppRouter />
                </MainLayout>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App;
