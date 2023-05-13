import styled from 'styled-components'
import Button from '../buttons/Button'

function newsletter() {
    return (
        <NewsLetterSection>
                <div className="newsletter_wrapper">
                    <h2 className="newsletter_quiz">Ready To Build Your Community?</h2>
                    <Button color={'pink'} text={'Get Started For Free'} />
                </div>
        </NewsLetterSection>
    )
}

const NewsLetterSection = styled.div`
    background: var(--white);
    box-shadow: var(--box-shadow);
    text-align: center;
    border-radius: 10px;
    width: 50%;
    margin: 2rem auto;
    position: relative;
    top: 80px;

.newsletter_wrapper {
    padding: 3rem 1rem;
}

.newsletter_wrapper .newsletter_quiz {
    margin-bottom: 2rem;
}

@media only screen and (max-width:768px){
    width: 70%;
}

@media only screen and (max-width:500px) {
    width: 90%;

.newsletter_wrapper .newsletter_quiz {
    font-size: 1.5rem;
    margin-bottom: 1.6rem;
}
}









`














export default newsletter