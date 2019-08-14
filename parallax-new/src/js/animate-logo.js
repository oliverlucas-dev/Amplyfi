
import {TweenMax, Power2, TimelineLite, TimelineMax} from "gsap/TweenMax";
//import * from "./js/vendor/morphsvgplugin-min.js";

console.log('animate-logo-js: File was imported');

export default {
    init() {
        var master = new TimelineMax({delay:0.5, repeat:0, repeatDelay:0.5}),
        mt = 0.85,
        es = Elastic.easeOut.config(2.2, 0.2),
        el = Back.easeOut.config(1.7);

        function intro() {
        var tl = new TimelineMax({id:"intro"});
        tl.set("#logo", {autoAlpha:1})
            //.set("#maskMorph", {x:"-=660"})
            .set("#morphGroup", {autoAlpha:1})
            .staggerFrom("#logo path", 5.6, {
                scale:0.7, 
                // cycle:{
                //   y:["-=100", "+100"]
                // }, 
                autoAlpha:0, 
                // yoyo:true,
                ease:es, 
                transformOrigin: "center center"}, -0.10, 0.15)
        return tl;
        }

        master.add( intro() )

        console.log('animate-logo: init() function was called');
    }
}
