import styled from "styled-components"


import headerBg from "../../assets/images/bg-hero-desktop.svg"
import logo from "../../assets/images/logo.svg"
import heroImg from "../../assets/images/illustration-mockups.svg"
import Button from '../buttons/Button'

function header() {
    return (
        <HeaderSection >
            {/* Navbar Section */}
            <nav className="navbar">
                <div className="wrapper">
                    <div className="nav_wrapper">
                        <img src={logo} alt="logo" className="logo" />
                        <Button color="white" text={'Try It Free'}/>
                    </div>
                </div>
            </nav>
            {/* Hero section */}
            <div className="hero">
                <div className="wrapper">
                    <div className="hero_wrapper">
                    <div className="hero_info">
                        <h1 className="hero_info-title">Build The Community Your Fans Will Love</h1>
                        <p className="hero_info-text">Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
                        <Button color="pink" text={'Get Started For Free'}/>
                    </div>
                    <div className="hero_img">
                        <img src={heroImg} alt="img" />
                    </div>
                    </div>
                </div>
            </div>
        </HeaderSection>
    )
}

const HeaderSection = styled.div`
    background: url(${headerBg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 1.6rem 0 3rem 0;
    position: relative;

    ::after {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--heroBg);
        z-index: -1;
        opacity: .6;
    }

/* Navbar section styling */
.navbar .nav_wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.navbar .nav_wrapper .logo {
    padding-right: .8rem;
}

/* Hero section styling */
.hero {
    margin-top: 3rem;
}

.hero .hero_wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    align-items: center;
}

.hero .hero_wrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.hero .hero_wrapper .hero_info {
    width: 100%;
    max-width: 500px;
}

.hero .hero_wrapper .hero_info .hero_info-title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.hero .hero_wrapper .hero_info .hero_info-text {
    color: var(--footerBg);
    line-height: 1.8rem;
    margin-bottom: 1rem;
}

.hero .hero_wrapper .hero_img {
    max-width: 700px;
}

.hero .hero_wrapper .hero_img img {
    width: 100%;
    height: auto;
}


@media only screen and (max-width:768px){
.hero .hero_wrapper {
    display: grid;
    grid-template-columns: 100%;
    text-align: center;
}

.hero .hero_wrapper .hero_info {
    max-width: 100%;
}

.hero .hero_wrapper .hero_info .hero_info-title {
    font-size: 2rem;
}
}

@media only screen and (max-width:500px) {
.hero .hero_wrapper .hero_info .hero_info-title {
    font-size: 1.8rem;
}
}










`










export default header