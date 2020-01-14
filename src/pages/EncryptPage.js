import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import TextareaAutosize from 'react-textarea-autosize';

import PageTemplate from 'components/common/PageTemplate';
import ToggleButton from 'components/common/ToggleButton';
import encryptHangul, {
    CHANGE_CONSONANT,
    CHANGE_VOWEL,
    RANDOM_FINAL,
    ADD_FINAL,
    ADD_SHIFT,
    CHANGE_ORDER
} from 'utils/hangul';
import { copyToClipboard } from 'utils';
import { media, palette as p } from 'styles';

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;

    & .options {
        margin: 40px 0 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        ${media.mobile`
            flex-direction: column;
            margin: 10px 0 0;
        `};
    }

    & .non-options {
        position: relative;
        display: flex;
        width: 100%;
        margin-bottom: 30px;

        & .icon {
            font-size: 16px;
            padding: 0 8px;
            align-self: center;
            outline: none;
            color: ${p.lightgray};
        }
    }
`;

const TextArea = styled(TextareaAutosize)`
    width: calc(50% - 24px);
    border: 1px solid ${p.lightgray};
    border-radius: 4px;
    padding: 10px 10px 30px;
    font-size: 20px;
    min-height: 300px;
    height: auto;
    overflow-y: hidden;
    resize: none;
    outline: none;
    color: initial;
    margin-bottom: 20px;
`;

const Button = styled.button`
    cursor: pointer;
    outline: none;
    position: absolute;
    right: 10px;
    bottom: 10px;
    color: ${p.lightgray};

    &:hover {
        color: ${props => darken(0.1, p.lightgray)};
    }
`;

const optionButtons = [
    {
        name: 'consonant',
        title: '자음',
        dataAction: CHANGE_CONSONANT
    },
    {
        name: 'vowel',
        title: '모음',
        dataAction: CHANGE_VOWEL
    },
    {
        name: 'final',
        title: '랜덤 받침',
        dataAction: RANDOM_FINAL
    },
    {
        name: 'final',
        title: 'ㅄ 받침',
        dataAction: ADD_FINAL
    },
    {
        name: 'shift',
        title: '쉬프트',
        dataAction: ADD_SHIFT
    },
    {
        name: 'order',
        title: '순서 바꾸기',
        dataAction: CHANGE_ORDER
    }
];

const EncryptPage = () => {
    const outputRef = useRef(null);
    const [values, setValues] = useState({
        text: '안녕하세요',
        consonant: '',
        vowel: '',
        final: '',
        order: ''
    });
    const [output, setOutput] = useState('');

    useEffect(() => {
        const [, ...options] = Object.values(values);
        setOutput(encryptHangul(values.text, options));
    }, [values]);

    const onChange = useCallback(
        e => {
            setValues({
                ...values,
                [e.target.name]:
                    e.target.type === 'checkbox'
                        ? e.target.checked
                            ? e.target.dataset.action
                            : ''
                        : e.target.value
            });
        },
        [setValues, values]
    );

    const onSubmit = useCallback(
        e => {
            e.preventDefault();
            const [, ...options] = Object.values(values);
            setOutput(encryptHangul(values.text, options));
        },
        [values]
    );

    const onClick = useCallback(() => {
        copyToClipboard(outputRef);
    }, [outputRef]);

    return (
        <PageTemplate>
            <Form onSubmit={onSubmit}>
                <div className="options">
                    {optionButtons.map(attr => (
                        <ToggleButton
                            {...attr}
                            onChange={onChange}
                            value={values[attr.name]}
                            key={attr.name}
                        />
                    ))}
                </div>
                <div className="non-options">
                    <TextArea
                        useCacheForDOMMeasurements
                        value={values.text}
                        name="text"
                        onChange={onChange}
                    />
                    <div className="icon">
                        <i className="far fa-arrow-alt-circle-right fa-2x" />
                    </div>
                    <TextArea
                        useCacheForDOMMeasurements
                        className="output"
                        inputRef={outputRef}
                        name="output"
                        value={output}
                        disabled
                    />
                    <Button className="copy-button" onClick={onClick}>
                        <i className="far fa-clipboard fa-2x" />
                    </Button>
                </div>
            </Form>
        </PageTemplate>
    );
};

export default EncryptPage;
