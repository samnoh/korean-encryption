import React, { useState, useCallback, useRef } from 'react';
import styled from 'styled-components';

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
        margin: 40px 0 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        ${media.mobile`
            flex-direction: column;
            margin: 10px 0 0;
        `};
    }

    & + .output {
        border: 1px solid ${p.lightgray};
        border-radius: 4px;
        white-space: pre;
        margin-bottom: 40px;
        width: 100%;
    }
`;

const TextArea = styled.textarea`
    border: 1px solid ${p.lightgray};
    border-radius: 4px;
    padding: 10px 10px 0;
    font-size: 20px;
    height: 200px;
    resize: none;
    outline: none;
    margin-bottom: 40px;
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
                        <ToggleButton {...attr} onChange={onChange} value={values[attr.name]} />
                    ))}
                </div>
                <TextArea value={values.text} name="text" onChange={onChange} />
                <Button type="submit" background={p.blue}>
                    변환
                </Button>
            </Form>
            {output && (
                <div
                    className="output"
                    ref={outputRef}
                    dangerouslySetInnerHTML={{ __html: output.replace(' ', '&nbsp;') }}
                />
            )}
            {document.queryCommandSupported('copy') && output && (
                <button className="copy-button" onClick={onClick}>
                    Copy
                </button>
            )}
        </PageTemplate>
    );
};

export default EncryptPage;
