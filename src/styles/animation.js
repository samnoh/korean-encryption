import { keyframes } from 'styled-components';

export const moveRight = distance => keyframes`
    to {
        transform: translateX(${distance});
    }
`;

export const moveLeft = (distance1, distance2 = 0) => keyframes`
    from {
        transform: translateX(${distance1});
    }
    to {
        transform: translateX(${distance2});
    }
`;

export const moveUp = (distance1, distance2 = 0) => keyframes`
    from {
        transform: translateY(${distance1});
        opacity: 0;
    }
    to {
        transform: translateY(${distance2});
        opacity: 1;
    }
`;

export const fade = (opacity1 = 1, opacity2 = 0) => keyframes`
    0% {
        opacity: ${opacity1};
    }
    80% {
        transform: scale(1.15);
    }
    99% {
        opacity: ${opacity2};
    }
    100% {
        opacity: ${opacity2};
        display: none;
    }
`;
