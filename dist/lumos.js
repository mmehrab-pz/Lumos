(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Lumos = factory());
})(this, (function () { 'use strict';

    const lumos = document.querySelectorAll('.lumos');
    console.log(lumos);

    lumos.forEach((item) => {
        item.classList.add(item.getAttribute('data-lumos'));
        item.classList.add(item.getAttribute('data-lumos-duration'));
        item.classList.add(item.getAttribute('data-lumos-timingFunction'));
        item.classList.add(item.getAttribute('data-lumos-delay'));

    });

    window.addEventListener('scroll', () => {
        let SY = window.innerHeight;

        lumos.forEach((item) => {
            let rec = item.getBoundingClientRect();

            if (SY > rec.bottom) {
                item.classList.remove(item.getAttribute('data-lumos'));
            } else {
                item.classList.add(item.getAttribute('data-lumos'));

            }
        });
    });

    class Lumos {
        constructor(options = {}) {
            this.options = options;
        }

        init() {
            console.log("✨ Lumos initialized!");
        }
    }

    return Lumos;

}));
