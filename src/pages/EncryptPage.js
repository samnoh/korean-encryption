import React, { useState, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

import PageTemplate from 'components/common/PageTemplate';
import Button from 'components/common/Button';
import ToggleButton from 'components/common/ToggleButton';
import encryptHangul, {
    CHANGE_CONSONANT,
    CHANGE_VOWEL,
    RANDOM_FINAL,
    CHANGE_ORDER
} from 'utils/hangul';
import { copyToClipboard } from 'utils';
import { media, palette as p } from 'styles';

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;

    & button[type='submit'] {
        margin-bottom: 40px;
    }

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
        display: flex;
        width: 100%;
        margin-bottom: 30px;

        & button {
            margin-bottom: 0;
            padding: 0 8px;
            cursor: pointer;
            outline: none;
            font-size: 16px;
            color: ${p.lightgray};

            &:hover {
                color: ${props => darken(0.1, p.lightgray)};
            }
        }
    }
`;

const TextArea = styled.textarea`
    border: 1px solid ${p.lightgray};
    border-radius: 4px;
    padding: 10px 10px 0;
    font-size: 20px;
    height: 300px;
    resize: none;
    outline: none;
    flex-grow: 1;
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
        title: '받침',
        dataAction: RANDOM_FINAL
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
                    <TextArea value={values.text} name="text" onChange={onChange} />
                    <button type="submit">
                        <i class="far fa-arrow-alt-circle-right fa-2x" />
                    </button>
                    <TextArea
                        className="output"
                        ref={outputRef}
                        value={output.replace(' ', '&nbsp;')}
                        name="output"
                        disabled
                    />
                </div>
            </Form>
            {output && (
                <button className="copy-button" onClick={onClick}>
                    Copy
                </button>
            )}
        </PageTemplate>
    );
};

export default EncryptPage;
