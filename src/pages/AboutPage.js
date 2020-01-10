import React from 'react';
import styled from 'styled-components';

import PageTemplate from 'components/common/PageTemplate';
import { Title as T, Description as D, palette as p, media } from 'styles';

const Title = styled(T)`
    margin-top: 50px;
    margin-bottom: 10px;
    font-size: 34px;

    ${media.mobile`
        font-size: 24px;
    `};
`;

const Description = styled(D)`
    font-weight: 100;
    font-size: 20px;
    padding-bottom: 12px;
    border-bottom: 1px solid ${p.lightgray};

    ${media.mobile`
        font-size: 17px;
    `};
`;

const AboutPage = () => {
    return (
        <PageTemplate>
            <Title>한국어 암호화가 무엇인가요?</Title>
            <Description>
                한국어 암호화는 한국인들만 알아볼 수 있는 한국어로 변환하는 웹사이트입니다. 보통
                부정적인 리뷰를 남길 때 삭제되지 않기 위해서 사용합니다.
            </Description>
            <Title>예시를 보여주세요</Title>
            <Description>Hello</Description>
            <Title>어떤 계기로 만들었나요?</Title>
            <Description>Hello</Description>
            <Title>깃헙에 Pull Request도 할 수 있나요?</Title>
            <Description>누구라도 할 수 있습니다.</Description>
        </PageTemplate>
    );
};

export default AboutPage;
