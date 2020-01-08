import React, { useState, useCallback } from 'react';

import encryptHangul, {
    CHANGE_CONSONANT,
    CHANGE_VOWEL,
    RANDOM_FINAL,
    CHANGE_ORDER
} from 'utils/hangul';

const HomePage = () => {
    const [values, setValues] = useState({
        text: '',
        consonant: '',
        vowel: '',
        final: '',
        order: ''
    });
    const [output, setOutput] = useState();

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

    return (
        <>
            <form onSubmit={onSubmit}>
                <input value={values.text} name="text" onChange={onChange} />
                <label htmlFor="consonant">
                    자음
                    <input
                        type="checkbox"
                        value={values.consonant}
                        id="consonant"
                        name="consonant"
                        onChange={onChange}
                        data-action={CHANGE_CONSONANT}
                    />
                </label>
                <label htmlFor="vowel">
                    모음
                    <input
                        type="checkbox"
                        value={values.vowel}
                        id="vowel"
                        name="vowel"
                        onChange={onChange}
                        data-action={CHANGE_VOWEL}
                    />
                </label>
                <label htmlFor="final">
                    받침
                    <input
                        type="checkbox"
                        value={values.final}
                        id="final"
                        name="final"
                        onChange={onChange}
                        data-action={RANDOM_FINAL}
                    />
                </label>
                <label htmlFor="order">
                    순서 바꾸기
                    <input
                        type="checkbox"
                        value={values.order}
                        id="order"
                        name="order"
                        onChange={onChange}
                        data-action={CHANGE_ORDER}
                    />
                </label>
                <button type="submit">변환</button>
            </form>
            {output}
        </>
    );
};

export default HomePage;
