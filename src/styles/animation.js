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
