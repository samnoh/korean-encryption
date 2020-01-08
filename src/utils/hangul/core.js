import hangul from 'hangul-js';

import { initial, medial, final } from './constants';
import {
    CHANGE_CONSONANT,
    CHANGE_VOWEL,
    RANDOM_FINAL,
    CHANGE_ORDER,
    changeConsonant,
    changeVowel,
    randomFinal,
    changeOrder
} from './options';

// ref: https://m.blog.naver.com/tk2rush90/221085154547
export const disassembleHangul = char => {
    const uni = char.charCodeAt(0) - 44032;
    const initialIdx = parseInt(uni / 588);
    const medialIdx = parseInt((uni - initialIdx * 588) / 28);
    const finalIdx = parseInt(uni % 28);

    return [
        initial.indexOf(initial[initialIdx]),
        medial.indexOf(medial[medialIdx]),
        final.indexOf(final[finalIdx])
    ].filter(sound => sound > -1);
};

// ref: https://gist.github.com/sooop/4958873
export const getHangulIdx = ([initial, medial, final]) => {
    // initial 0~18, medial 0~20, final 0~27
    return String.fromCharCode(0xac00 + 588 * initial + 28 * medial + final);
};

const encryptHangul = (input, option) => {
    const result = [];

    for (let i = 0; i < input.length; i++) {
        const char = input[i];

        if (!/[가-힣]/.test(char)) {
            result.push(char);
            continue;
        }

        let arr = disassembleHangul(char);

        if (option.includes(CHANGE_CONSONANT)) {
            arr = changeConsonant(arr);
        }
        if (option.includes(CHANGE_VOWEL)) {
            arr = changeVowel(arr);
        }
        if (option.includes(RANDOM_FINAL)) {
            arr = randomFinal(arr);
        }

        result.push(getHangulIdx(arr));
    }

    if (option.includes(CHANGE_ORDER)) {
        changeOrder(result);
    }

    return hangul.assemble(result);
};

export default encryptHangul;
