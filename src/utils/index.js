import hangul from 'hangul-js';

const initial = [
    'ㄱ',
    'ㄲ',
    'ㄴ',
    'ㄷ',
    'ㄸ',
    'ㄹ',
    'ㅁ',
    'ㅂ',
    'ㅃ',
    'ㅅ',
    'ㅆ',
    'ㅇ',
    'ㅈ',
    'ㅉ',
    'ㅊ',
    'ㅋ',
    'ㅌ',
    'ㅍ',
    'ㅎ'
];
const medial = [
    'ㅏ',
    'ㅐ',
    'ㅑ',
    'ㅒ',
    'ㅓ',
    'ㅔ',
    'ㅕ',
    'ㅖ',
    'ㅗ',
    'ㅘ',
    'ㅙ',
    'ㅚ',
    'ㅛ',
    'ㅜ',
    'ㅝ',
    'ㅞ',
    'ㅟ',
    'ㅠ',
    'ㅡ',
    'ㅢ',
    'ㅣ'
];
const final = [
    '',
    'ㄱ',
    'ㄲ',
    'ㄳ',
    'ㄴ',
    'ㄵ',
    'ㄶ',
    'ㄷ',
    'ㄹ',
    'ㄺ',
    'ㄻ',
    'ㄼ',
    'ㄽ',
    'ㄾ',
    'ㄿ',
    'ㅀ',
    'ㅁ',
    'ㅂ',
    'ㅄ',
    'ㅅ',
    'ㅆ',
    'ㅇ',
    'ㅈ',
    'ㅊ',
    'ㅋ',
    'ㅌ',
    'ㅍ',
    'ㅎ'
];

// ref: https://m.blog.naver.com/tk2rush90/221085154547
const disassembleHangul = char => {
    const uni = char.charCodeAt(0) - 44032;
    const initialIdx = parseInt(uni / 588);
    const medialIdx = parseInt((uni - initialIdx * 588) / 28);
    const finalIdx = parseInt(uni % 28);

    return [
        initial.indexOf(initial[initialIdx]),
        medial.indexOf(medial[medialIdx]),
        final.indexOf(finalIdx ? final[finalIdx] : -1)
    ].filter(sound => sound > -1);
};

// ref: https://gist.github.com/sooop/4958873
const getHangulByIdx = ([initial, medial, final]) => {
    // initial 0~18, medial 0~20, final 0~27
    return String.fromCharCode(0xac00 + 588 * initial + 28 * medial + final);
};

export const encryptHangul = (input, option) => {
    const result = [];

    for (let i = 0; i < input.length; i++) {
        let char = input[i];
        const arr = disassembleHangul(char);

        if (arr.length === 3) {
            arr[2] = 1 + Math.floor(Math.random() * 27);
            char = getHangulByIdx(arr);
        }

        result.push(char);
    }

    return hangul.assemble(result);
};
