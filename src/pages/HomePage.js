import React, { useState, useCallback } from 'react';

import { encryptHangul } from 'utils';

const HomePage = () => {
    const [value, setValue] = useState('한하나');

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
            {encryptHangul(value)}
        </form>
    );
};

export default HomePage;
