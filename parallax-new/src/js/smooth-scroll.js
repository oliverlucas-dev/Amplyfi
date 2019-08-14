
import smoothscroll from 'smoothscroll-polyfill';
console.log('Smooth Scroll: File was imported');

export default {
    init() {
        smoothscroll.polyfill();
        // var scroll = new SmoothScroll('a[href*="#"]', {
        //     speed: 1000,
        //     speedAsDuration: true
        // });
        console.log('Smooth Scroll: init() function was called');
    }
}
