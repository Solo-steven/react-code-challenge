import styled, { keyframes } from "styled-components";

const Loading = keyframes`
  0%{
    background-position: -315px 0px,  0px 0px;
  }

  100% {
     background-position: 315px 0px,  0px 0px;
  }
`;

export const Skleton = styled.div`
    background-image: 
        linear-gradient(-90deg, transparent , #6d748191,  transparent),
        linear-gradient(90deg, #484f5bb1 , #484f5bb1 90%);
    background-repeat: no-repeat;
    animation: ${Loading} 1.5s infinite linear;
`;

export default Skleton;