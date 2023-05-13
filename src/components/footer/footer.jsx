import styled from "styled-components"

import logo from "../../assets/images/logo.svg"
import location from "../../assets/images/icon-location.svg"
import phone from "../../assets/images/icon-phone.svg"
import email from "../../assets/images/icon-email.svg"

import { FaFacebookF ,FaTwitter, FaInstagram } from 'react-icons/fa'

function footer() {

        const getyear = () => {
            return new Date().getFullYear();
        }

    return (
        <FooterSection>
            <div className="wrapper">
                    <img src={logo} alt="logo" className="logo" />
                <div className="footer_wrapper">
                    <div className="footer_infos">
                        <div className="footer_info">
                            <img src={location} alt="location" className="img" />
                            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda impedit aut odio, natus libero quasi.</p>
                        </div>
                        <div className="footer_info">
                            <img src={phone} alt="phone" className="img" />
                            <p className="text">+1-234-567-8902</p>
                        </div>
                        <div className="footer_info">
                            <img src={email} alt="location" className="img" />
                            <p className="text">example@huddle.com</p>
                        </div>
                    </div>
                    <ul className="footer_links">
                        <li className="footer_link">
                            <a href="{}">About Us</a>
                        </li>
                        <li className="footer_link">
                            <a href="{}">What We Do</a>
                        </li>
                        <li className="footer_link">
                            <a href="{}">FAQ</a>
                        </li>
                    </ul>
                    <ul className="footer_links">
                        <li className="footer_link">
                            <a href="{}">Career</a>
                        </li>
                        <li className="footer_link">
                            <a href="{}">Blog</a>
                        </li>
                        <li className="footer_link">
                            <a href="{}">Contact Us</a>
                        </li>
                    </ul>
                    <div className="footer_socials">
                        <div className="footer_socials-icon">
                            <a href="{}" ><FaFacebookF/></a>
                        </div>
                        <div className="footer_socials-icon">
                            <a href="{}"><FaTwitter/></a>
                        </div>
                        <div className="footer_socials-icon">
                            <a href="{}"><FaInstagram/></a>
                        </div>
                    </div>
                    <p className="footer_copyright">&copy; Copyright {getyear()} Huddle.All rights reserved.</p>
                </div>
            </div>
        </FooterSection>
    )
}

const FooterSection  = styled.footer`
    background: var(--footerBg);
    padding: 5rem 0 2rem 0;

.logo {
    background: var(--white);
    padding: 1rem;
    margin-top: 3rem;
}

.footer_wrapper {
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 2rem;
    margin-top: 2rem;
}

.footer_wrapper .footer_infos .footer_info {
    display: flex;
    margin-bottom: 1.6rem;
    width: 100%;
    max-width: 400px;
}

.footer_wrapper .footer_infos .footer_info .text {
    margin-left: 1rem;
}

.footer_wrapper .footer_infos .footer_info .img {
    object-fit: contain;
}

.footer_wrapper .footer_links .footer_link {
    margin-bottom:1rem;
}

.footer_wrapper .footer_links .footer_link a {
    color: var(--textColor);
    transition: var(--transition);
}

.footer_wrapper .footer_links .footer_link a:hover {
    text-decoration: underline;
}

.footer_wrapper .footer_socials {
    display: flex;
}

.footer_wrapper .footer_socials .footer_socials-icon a {
    display: inline-flex;
    margin-right: 1rem;
    color: var(--white);
    border: 2px solid var(--white);
    padding: .5rem;
    border-radius: 50%;
    transition: var(--transition);
}

.footer_wrapper .footer_socials .footer_socials-icon a:hover {
    color: var(--btnColor);
    border-color: var(--btnColor);
}

.footer_wrapper .footer_socials .footer_copyright {
    font-size: .8rem;
    margin-top: 3rem;
}

@media only screen and (max-width:960px) {
.footer_wrapper {
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 2rem;
    margin-top: 2rem;
}
}

@media only screen and (max-width:768px){
.footer_wrapper {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-gap: 2rem;
    margin-top: 2rem;
}
}

@media only screen and (max-width:500px) {
.footer_wrapper {
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 2rem;
    margin-top: 2rem;
}

}

`


















export default footer