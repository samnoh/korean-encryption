export const copyToClipboard = ref => {
    const el = document.createElement('textarea');
    el.value = ref.current.innerText;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};
