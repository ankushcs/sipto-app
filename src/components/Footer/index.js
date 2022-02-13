import {FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa'
import {AiFillFacebook, AiFillLinkedin} from 'react-icons/ai'

import '../../Styles/Footer/Footer.css'

const Footer = () => {
    return(
        <div className="footer-main-container">
            <div className="footer__top-container">
                <div className="footer__top__first-container">
                    <h2 className="footer__heading">SIPTO</h2>
                    <p className="footer__top__first-container__text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum nihil dolores id aperiam. Laborum dolorum illo quisquam quos odit cum id numquam, corporis recusandae vel eveniet tempore, enim expedita iste.
                    </p>
                </div>
                <div className="footer__top__second-container">
                    <h2 className="footer__heading">
                       Quick Links 
                    </h2>
                    <ul className="footer__top__second-container__list-container">
                        <li>What is Sipto?</li>
                        <li>What it Works?</li>
                        <li>Investment Strategy</li>
                        <li>Completed Deal</li>
                        <li>Blog</li>
                        <li>Refer and Earn</li>
                    </ul>
                </div>
                <div className="footer__top__third-container">
                    <h2 className="footer__heading">Company</h2>
                    <ul>
                        <li>123-A, ABC Tower, Sector-44, Bangalore</li>
                        <li>invest@sipto.in</li>
                    </ul>
                </div>
            </div>
            <div className="footer__bottom-container">
                <ul className="footer__bottom-container__list-container">
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>FAQ</li>
                </ul>
                <ul className="footer__bottom-container__list-container">
                    <li><FaInstagramSquare size={26} color="#a09f9f"/></li>
                    <li><AiFillFacebook size={26} color="#a09f9f"/></li>
                    <li><AiFillLinkedin size={26} color="#a09f9f"/></li>
                    <li><FaTwitterSquare size={26} color="#a09f9f"/></li>
                </ul>
            </div>
        </div>
    )
};

export default Footer