import React from 'react'
import styled from 'styled-components'


function aboutCard({layout, title, text, img}) {
  return (
    <AboutCard>
        <div className="wrapper">
          <div className={layout}>
            <div className="card_info">
              <h2 className="card_title">{title}</h2>
              <p className="card_text">{text}</p>
            </div>
            <div className="card_img">
              <img src={img} alt="img" />
            </div>
          </div>
        </div>
    </AboutCard>
  )
}

const AboutCard = styled.div`
  background: var(--white);
  box-shadow: var(--box-shadow);
  border-radius: 10px;
  margin-bottom: 2rem;

.card_wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 3rem 0;
  gap: 2rem;
  margin: auto;
}

.card_wrapper.reverse {
  flex-direction: row-reverse;
}

.card_wrapper .card_info {
  max-width: 500px;
  width: 100%;
}

.card_wrapper .card_info .card_title {
  margin-bottom: 1.2rem;
}

.card_wrapper .card_img {
  max-width: 350px;
}

.card_wrapper .card_img img {
  width: 100%;
  height: auto;
}


@media only screen and (max-width:768px){
.card_wrapper,
.card_wrapper.reverse {
  flex-direction: column;
}

.card_wrapper .card_info {
  max-width: 100%;
  width: 100%;
}
}

@media only screen and (max-width:500px) {
.card_wrapper .card_info .card_title {
  font-size: 1.4rem;
  margin-bottom: .8rem;
}
}









`

export default aboutCard