import React from 'react';
import styled from 'styled-components';

import PageTemplate from 'components/common/PageTemplate';
import { Title as T, Description as D, palette as p, media } from 'styles';

const Title = styled(T)`
    margin-top: 50px;
    font-size: 34px;

    ${media.mobile`
        margin-top: 24px;
        margin-bottom: 10px;
        font-size: 24px;
    `};
`;

const Description = styled(D)`
    font-weight: 100;
    font-size: 20px;
    padding-bottom: 12px;
    border-bottom: 1px solid ${p.lightgray};

    ${media.mobile`
        margin-bottom: 0;
        font-size: 17px;
    `};
`;

const AboutPage = () => {
    return (
        <PageTemplate>
            <Title>한국어 암호화가 무엇인가요?</Title>
            <Description>
                한국어 암호화는 한국어에 능통한 자만 알아볼 수 있게 일반적인 한국어를 철자를 파괴한
                한국어로 변환하는 웹사이트입니다. 한국어를 모국어로 하는 사람은 대부분 분명히 알아볼
                수 있습니다.
            </Description>
            <Title>목적이 무엇인가요?</Title>
            <Description>
                한국어를 능통하지 않은 사람들이 구글 번역기 등을 이용해 한국어를 제대로 번역할 수
                없게 하기 위함입니다. 그래서 일반적으로 해외에서 AirBnB 같은 숙박서비스 등을 이용 후
                부정적인 리뷰를 남길 때 관리자에 의해 삭제되지 않기 위해서 사용합니다.
            </Description>
            <Title>예시를 보여주세요</Title>
            <Description>Test</Description>
            <Title>깃헙에 Pull Request 할 수 있나요?</Title>
            <Description>누구라도 환영합니다.</Description>
        </PageTemplate>
    );
};

export default AboutPage;
