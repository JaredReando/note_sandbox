import React from "react";
import { streemshots } from "./streemshots";
import StreemshotNote from "./streemshot_note";

// import

import {
  StreemshotBottom,
  StreemshotImageGrid,
  StreemshotImageWrap,
  StreemshotLower,
  StreemshotImage,
  StreemshotLabel,
  StreemshotTime
} from "./styles";

const Carousel = () => {
  return (
    // <StreemshotBottom>
    //   <StreemshotImageGrid>
    //     {streemshots.map((streemshot, index) => {
    //       return (
    //         <StreemshotImageWrap key={index}>
    //           <StreemshotImage src={streemshot.source} />
    //           <StreemshotLower>
    //             <StreemshotLabel>Streemshot: </StreemshotLabel>
    //             <StreemshotTime>12:23pm</StreemshotTime>
    <StreemshotNote note="new note feature" />
    //           </StreemshotLower>
    //         </StreemshotImageWrap>
    //       )
    //     })}
    //   </StreemshotImageGrid>
    // </StreemshotBottom>
  );
};

export default Carousel;
