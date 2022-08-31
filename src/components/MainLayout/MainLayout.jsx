import React from 'react'
import Navbar from "../..//components/UI/Navbar/Navbar";
import Footer from '../UI/Footer/Footer';
import s from '../MainLayout/MainLayout.module.css'

export default function MainLayout({ children }) {

    return (
        <div className={s.wrapper}>

            <nav className={s.customNav}>
                <Navbar />
            </nav>

            <main className={s.customMain}>
                {children}
            </main>

            <footer>
                <div className={s.footer}>
                    <Footer />
                </div>
            </footer>

        </div>
    )
}
