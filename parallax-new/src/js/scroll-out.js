
import ScrollOut from "scroll-out";
console.log('ScrollOut: File was imported');

export default {
    init() {
        ScrollOut({
            /* options */
            threshold: .2
        });
        console.log('ScrollOut: init() function was called');
    }
}
