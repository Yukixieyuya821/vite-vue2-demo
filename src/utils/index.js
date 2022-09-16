/*
 * @Author: wilson
 * @Date: 2021-09-15 10:46:27
 * @LastEditors: wilson
 * @LastEditTime: 2021-09-26 13:37:14
 */

/* eslint-disable */
/*
 * fn [function] 需要防抖的函数
 * delay [number] 毫秒，防抖期限值
 */
export function debounce(fn, delay) {
    let timer = null;
    return function() {
        if(timer) clearTimeout(timer);

        timer = setTimeout(fn, delay);
    };
}

export function throttle(fn, wait) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        if(!timeout)
            timeout = setTimeout(() => {
                timeout = null;
                fn.apply(context, args);
            }, wait);
    };
}
