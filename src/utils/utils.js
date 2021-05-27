// 延时防抖
export function debounce(func, wait) {
    let timeout = '';
    return (v) => {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            func(v);
        }, wait);
    }
}
