import { keyframes } from "@emotion/react";

export const firstKeyframesHero = keyframes`
  0% {
    transform: translateY(-58%);
  }
  50% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-58%);
  }
`;

export const secondKeyframesHero = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-70%);
  }
  100% {
    transform: translateY(0);
  }
`;