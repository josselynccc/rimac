import "./_header.scss"
import { Phone } from 'lucide-react';
import header__logo from '@/assets/header__logo.png'
const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <img src={header__logo} alt="header__logo" />
                </div>
                <div className="header__contact">
                    <p className="header__contact-desc">¡Compra por este medio!</p>
                    <div className="header__contact-phone">
                        <Phone size={20} className="header__phone-icon" />
                        <p className="header__contact-phone-number">(01) 4116001</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;