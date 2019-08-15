
import $ from "jquery";
import ScrollMagic from 'scrollmagic';
import { TimelineMax, TweenMax, Linear } from 'gsap';

import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'

console.log('magic scroll: File was imported');

export default {
    init() {
        function pathPrepare ($el) {
            var lineLength = $el[0].getTotalLength();
            $el.css("stroke-dasharray", lineLength);
            $el.css("stroke-dashoffset", lineLength);
        }
        
        var $scene2Anim = $("path#scene2-anim");
    
        // prepare SVG
        pathPrepare($scene2Anim);
        
        //glow tip path
        var glowTipPath = {
			entry : {
				curviness: 1.25,
				autoRotate: true,
				values: [
						{x: 0,	y: 0},
                        {x: 30,	y: 10}]

			}
			
			// leave : {
			// 	curviness: 1.25,
			// 	autoRotate: true,
			// 	values: [
			// 			{x: 60,	y: 20},
			// 			// {x: 80,	y: 10},
			// 			// {x: $(window).width() + 300,	y: -100},
			// 		]
			// }
		};
        // init controller
        var controller = new ScrollMagic.Controller();
    
        // build tween

        var tweenGlowTip = new TimelineMax()
        //    .add(TweenMax.to($("#glow-tip"), 1.2, {css:{bezier:glowTipPath.entry}, ease:Power1.easeInOut}))
           // .add(TweenMax.to($("#glow-tip"), 1, {css:{bezier:glowTipPath.leave}, ease:Power1.easeInOut}));

        var tweenScene2Line = new TimelineMax()
            .add(TweenMax.to($scene2Anim, 1.2, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
            // .add(TweenMax.to($word, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone}))  // draw dot for 0.1
            .add(TweenMax.to("path", 1, {stroke: "#ffffff", ease:Linear.easeNone}), 0);	// change color during the whole thing
    
        // build scene
        // var scene = new ScrollMagic.Scene({triggerElement: "#scene2", duration: 400, tweenChanges: true})
        //                 .setPin("#target")
        //                 .setTween(tweenGlowTip)
        //                 .addIndicators() // add indicators (requires plugin)
        //                 .addTo(controller);
        
                        // build scene
        var scene1 = new ScrollMagic.Scene({triggerElement: "#scene2", duration: 400, tweenChanges: true})
                        .setTween(tweenScene2Line)
                        .addIndicators() // add indicators (requires plugin)
                        .addTo(controller);

        console.log('Magic scroll: init() function was called');
    }
}
