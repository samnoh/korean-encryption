import React, { useState, useCallback } from 'react';

import encryptHangul, {
    CHANGE_CONSONANT,
    CHANGE_VOWEL,
    RANDOM_FINAL,
    CHANGE_ORDER
} from 'utils/hangul';

const HomePage = () => {
    const [value, setValue] = useState('가사');

    const onChange = useCallback(
        e => {
            setValue(e.target.value);
        },
        [setValue]
    );

    const onSubmit = useCallback(e => {
        e.preventDefault();
    }, []);

    return (
        <form onSubmit={onSubmit}>
            <input value={value} onChange={onChange} />
            {encryptHangul(value, [CHANGE_CONSONANT, CHANGE_VOWEL, RANDOM_FINAL, CHANGE_ORDER])}
        </form>
    );
};

export default HomePage;
