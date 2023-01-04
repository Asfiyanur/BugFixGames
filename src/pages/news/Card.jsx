import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import {
  CardBody,
  CardLeft,
  CardRight,
  ContentBottom,
  ContentTop,
  H3,
  IconDiv,
  Img,
  P,
  P1,
  Span,
} from "./Card.style";

const Card = ({ name, image, created }) => {
  return (
    <CardBody>
      <Img src={image} alt="" />

      <CardRight>
        <ContentTop>
          <H3>{name}</H3>
          <Span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
            eveniet, veniam earum quisquam totam corrupti quaerat laudantium
            sint rem, pariatur ullam nostrum recusandae odio fugit saepe
            officiis aperiam esse possimus veritatis. Perspiciatis ipsum
            consectetur dolore, amet eligendi atque eum unde maxime cupiditate
            veniam, quo, corporis voluptates quae delectus fugit ex!
          </Span>
        </ContentTop>
        <ContentBottom>
          <P1>{created}</P1>
          <IconDiv>
            <FontAwesomeIcon icon={faArrowUpFromBracket} />
            <P>Beğen</P>
          </IconDiv>
        </ContentBottom>
      </CardRight>
    </CardBody>
  );
};

export default Card;
