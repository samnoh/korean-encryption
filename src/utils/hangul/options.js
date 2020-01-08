// actions
export const CHANGE_CONSONANT = 'CHANGE_CONSONANT';
export const CHANGE_VOWEL = 'CHANGE_VOWEL';
export const RANDOM_FINAL = 'RANDOM_FINAL';
export const CHANGE_ORDER = 'CHANGE_ORDER';

const initial = text => {
    switch (text) {
        case 0:
            return 1;
        case 3:
            return 4;
        case 7:
            return 8;
        case 9:
            return 10;
        case 12:
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

export const changeConsonant = arr => {
    const [i, ...rest] = [...arr];
    return [initial(i), ...rest];
};

export const changeVowel = arr => {
    const [i, m, f] = [...arr];
    return [i, medial(m), f];
};

export const randomFinal = arr => {
    const result = [...arr];
    if (result[2] !== 0) result[2] = 1 + Math.floor(Math.random() * 27);
    return result;
};
