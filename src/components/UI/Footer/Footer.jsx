import React from 'react';
import s from '../Footer/Footer.module.css'

import fb from '../../../img/socials/facebook.svg'
import insta from '../../../img/socials/insta.svg'
import telegram from '../../../img/socials/telegram.svg'
import twitter from '../../../img/socials/twitter.svg'

const Footer = () => {

    return (
        <div className={s.footer}>
            <div className={s.social}>
                <div className={s.wrapperLogo}>
                    <a href="#"><img src={fb} alt="fb" /></a>
                </div>
                <div className={s.wrapperLogo}>
                    <a href="#"><img src={insta} alt="insta" /></a>
                </div>
                <div className={s.wrapperLogo}>
                    <a href="#"><img src={telegram} alt="telegram" /></a>
                </div>
                <div className={s.wrapperLogo}>
                    <a href="#"><img src={twitter} alt="twitter" /></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
