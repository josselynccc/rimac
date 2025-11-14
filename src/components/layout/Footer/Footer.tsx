import "./_footer.scss"
import footer__logo from '@/assets/footer_logo.png'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <img src={footer__logo} alt="footer__logo" />
                <p className="footer__text">© 2023 RIMAC Seguros y Reaseguros.</p>
            </div>
        </footer>
    )
}

export default Footer;