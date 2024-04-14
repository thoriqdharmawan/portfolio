import { keyframes } from "@emotion/react";

export const firstKeyframesHero = keyframes`
  0% {
    transform: translateY(-100%);
  }
  50% {
    transform: translateY(-40%);
  }
  100% {
    transform: translateY(-100%);
  }
`;

export const secondKeyframesHero = keyframes`
  0% {
    transform: translateY(-60%);
  }
  50% {
    transform: translateY(-95%);
  }
  100% {
    transform: translateY(-60%);
  }
`;
