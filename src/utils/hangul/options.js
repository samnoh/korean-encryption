// actions
export const CHANGE_CONSONANT = 'CHANGE_CONSONANT';
export const CHANGE_VOWEL = 'CHANGE_VOWEL';
export const ADD_SHIFT = 'ADD_SHIFT';
export const RANDOM_FINAL = 'RANDOM_FINAL';
export const ADD_FINAL = 'ADD_FINAL';
export const SEPARATE_LETTER = 'SEPARATE_LETTER';
export const CHANGE_ORDER = 'CHANGE_ORDER';

const initial = text => {
    switch (text) {
        case 0: // ㄱ -> ㄲ
            return 1;
        case 3: // ㄷ -> ㄸ
            return 4;
        case 7: // ㅂ -> ㅃ
            return 8;
        case 9: // ㅅ -> ㅆ
            return 10;
        case 12: // ㅈ -> ㅉ
            return 13;
        default:
            return text;
    }
};

const medial = text => {
    switch (text) {
        case 1: // ㅐ-> ㅞ
            return 15;
        case 5: // ㅔ -> ㅐ
            return 1;
        case 7: // ㅖ -> ㅒ
            return 3;
        case 13: // ㅜ -> ㅡ
            return 18;
        case 20: // ㅣ -> ㅟ
            return 16;
        default:
            return text;
    }
};

// CHANGE_CONSONANT
export const changeConsonant = arr => {
    const [i, ...rest] = [...arr];
    return [initial(i), ...rest];
};

// CHANGE_VOWEL
export const changeVowel = arr => {
    const [i, m, f] = [...arr];
    return [i, medial(m), f];
};

// ADD_SHIFT
export const addShift = arr => {
    const [i, ...rest] = [...arr];
    return [initial(i), ...rest];
};

// RANDOM_FINAL
export const randomFinal = arr => {
    const result = [...arr];
    const temp = result[2]; // final

    // if there is not a empty string ' '
    if (temp !== 0) {
        while (temp === result[2]) {
            result[2] = 1 + Math.floor(Math.random() * 27);
        }
    }

    return result;
};

// ADD_FINAL
export const addFinal = arr => {
    const [i, m] = [...arr];
    return [i, m, 18];
};

// SEPARATE_LETTER
export const separateLetter = arr => {};

// CHANGE_ORDER
export const changeOrder = arr => {
    return arr;
};
