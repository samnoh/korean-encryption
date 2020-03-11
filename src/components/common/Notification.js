import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { moveUp, fade, palette } from 'styles';

const NotificationBox = styled.div`
    display: flex;
    font-size: 20px;
    user-select: none;
    padding: 10px 20px;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 80px;
    bottom: 120px;
    width: 180px;
    height: 70px;
    background: gray;
    border-radius: 6px;
    background: ${palette.darkblue};
    color: ${palette.lightgray};
    animation: ${moveUp('60px')} 0.6s ease forwards,
        ${fade()} 0.3s ease forwards ${({ duration }) => duration - 0.3}s;

    span {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
`;

const Notification = () => {
    const { isOpen, text, duration } = useSelector(({ app }) => app.notification);

    if (isOpen && text)
        return (
            <NotificationBox duration={duration / 1000}>
                <span>{text}</span>
            </NotificationBox>
        );

    return null;
};

export default Notification;
