import styled from "styled-components";
import Card from "./aboutCard";
// about card images
import image1 from "../../assets/images/illustration-grow-together.svg";
import image2 from "../../assets/images/illustration-flowing-conversation.svg";
import image3 from "../../assets/images/illustration-your-users.svg";

function about() {
  return (
    <AboutSection>
      <div className="wrapper">
        <Card
          layout="card_wrapper"
          title={"Grow Together"}
          text={
            "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insighful conversations you miss out with feedback form."
          }
          img={image1}
        />
        <Card
          layout="card_wrapper reverse"
          title={"Flowing Conversations"}
          text={
            "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow."
          }
          img={image2}
        />
        <Card
          layout="card_wrapper"
          title={"Your Users"}
          text={
            "It takes no time at all to intergrate Huddle with your app's authentication solution. This means, once signed in to your app, your user can start chatting immediately."
          }
          img={image3}
        />
      </div>
    </AboutSection>
  );
}

const AboutSection = styled.div`
  margin: 5rem 0;
`;

export default about;
