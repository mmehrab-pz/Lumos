(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
})((function () { 'use strict';

    const lumos = document.querySelectorAll('.lumos');

    const attrs = [
        'data-lumos',
        'data-lumos-duration',
        'data-lumos-timingFunction',
        'data-lumos-delay'
    ];

    lumos.forEach((item) => {
        attrs.forEach(attr => {
            const val = item.getAttribute(attr);
            if (val) {
                item.classList.add(val);
            }
        });
    });

    window.addEventListener('scroll', () => {
        let SY = window.innerHeight;

        lumos.forEach((item) => {
            let rec = item.getBoundingClientRect();

            attrs.forEach(attr => {
                const val = item.getAttribute(attr);
                if (val) {
                    if (SY > rec.bottom) {
                        item.classList.remove(item.getAttribute('data-lumos'));
                    } else {
                        item.classList.add(item.getAttribute('data-lumos'));

                    }
                }
            });
        });
    });

}));
