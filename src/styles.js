import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

const slideDown = keyframes`
  0% {
      transform: translateY(-300px) scale(0);
  }
  20% {
      transform: translateY(-300px) scale(0.8);
  }
  40% {
      transform: translateY(-300px) scale(0.8);
  }
  80% {
      transform: translateY(0px) scale(0.8);
  }
  100% {
      transform: translateY(0px) scale(1);
  }
`;

const fadeIn = keyframes`
  from {
      opacity: 0
  }
  to {
      opacity: 1
  }
`;

export const StreemshotBottom = styled.div({
  backgroundColor: "#FFF",
  padding: "10px",
  width: "100%",
  position: "absolute",
  top: "100%",
  border: "1px solid black"
});

export const StreemshotImageGrid = styled.div({
  display: "flex",
  flexDirection: "row",
  // flexWrap: 'wrap',
  width: "100%"
});

export const StreemshotImageWrap = styled.span({
  marginRight: "20px",
  marginBottom: "20px"
});

export const StreemshotImage = styled.img({
  width: "300px",
  height: "300px",
  willChange: "width, transform",
  objectFit: "cover",
  animation: `${slideDown} 1.7s ease`,
  ":hover": {
    objectFit: "contain"
  }
});

export const StreemshotLower = styled.div({
  paddingLeft: "4px",
  color: "blue",
  animation: `${fadeIn} .25s ease-in forwards`,
  animationDelay: ".75s",
  opacity: 0
});

export const StreemshotLabel = styled.span({
  textTransform: "uppercase",
  fontWeight: 600,
  fontSize: "14px"
});

export const StreemshotTime = styled.span({
  fontSize: "14px",
  fontWeight: 400
});
