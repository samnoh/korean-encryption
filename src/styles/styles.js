import styled from 'styled-components';
import { lighten } from 'polished';

import media from './media';
import p from './palette';

export const Title = styled.h1`
    color: ${p.darkblue};
    font-size: 48px;
    margin-bottom: 20px;

    ${media.mobile`
        font-size: 46px;
    `};
`;

export const Description = styled.p`
    font-size: 24px;
    color: ${props => lighten(0.3, p.darkblue)};
    margin-bottom: 60px;

    ${media.mobile`
        font-size: 18px;
    `};
`;
