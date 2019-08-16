
import $ from "jquery";
import ScrollMagic from 'scrollmagic';
import { TimelineMax, TweenMax, Linear } from 'gsap';

import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'
import 'imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg'
console.log('magic scroll: File was imported');

export default {
    init() {
        function pathPrepare ($el) {
            var lineLength = $el[0].getTotalLength();
            $el.css("stroke-dasharray", lineLength);
            $el.css("stroke-dashoffset", lineLength);
        }
        
        var $scene2Anim = $("path#scene2-anim"),
            $scene3Anim = $("path#scene3-anim"),
            $scene4Anim = $("path#scene4-anim"),
            $glowTip2 = $("#glow-tip2"),
            $glowTip3 = $("#glow-tip3"),
            $glowTip4 = $("#glow-tip4");
        console.log($glowTip2);
        console.log($glowTip3);
        // prepare SVG
        pathPrepare($scene2Anim);
        pathPrepare($scene3Anim);
        pathPrepare($scene4Anim);
        
        // init controller
        var controller = new ScrollMagic.Controller();
    
        // build tween

        var pathString1 = "M1.25 210.15 1.25 2.15 444.25 253.15 231.25 371.14";
        var pathString2 = "M0 1.25 1095.87 1.25 1011.75 150.68";
       // var pathString3 = "M700.5 1.5H.5";
        //d="M1097.84,2.05H1099" M1012.51,153,1099,0" M1097.84,2.05l-84.21,149Z"M0,3.57l1095.11.75L1012.51,1533.75 4.33 1095.87 0 1013.26 149.08

        var arrayPath1 = [];
        var arrayPath2 = [];
      //  var arrayPath3 = [];
        
        // Snap SVG method to create a set of cubic bezier curves from the path string
        var newPath1 = Snap.path.toCubic(pathString1);
        var newPath2 = Snap.path.toCubic(pathString2);
       // var newPath3 = Snap.path.toCubic(pathString3);

        function setUpPoint1(segment){
        
            //using +=2 in the loop thanks to GSAP's Geek Ambassador, animation superhero Carl Schooff :D
            for(var i = 0; i < segment.length; i+=2){
        
                //create a new object for the point so it can be passed into the bezier plugin
                var point = {};
    
                point.x = segment[i];
                point.y = segment[i+1];
        
                //add the point to the array
                arrayPath1.push(point);
              
            }//loop end
        }
        function setUpPoint2(segment){
        
            //using +=2 in the loop thanks to GSAP's Geek Ambassador, animation superhero Carl Schooff :D
            for(var i = 0; i < segment.length; i+=2){
        
                //create a new object for the point so it can be passed into the bezier plugin
                var point = {};
    
                point.x = segment[i];
                point.y = segment[i+1];
        
                //add the point to the array
                arrayPath2.push(point);
              
            }//loop end
        }
       
        
        // loop through the curves collection
        for(var i = 0; i < newPath1.length; i++){
            var segment = newPath1[i],
                    point;
        
            // the first element returned in the array is a letter, quite useless for the bezier Plugin, so we remove it
            segment.shift();
        
            //call the function to set up the points based on the segment returned	
            point = setUpPoint1(segment);
            
        }

        for(var i = 0; i < newPath2.length; i++){
            var segment = newPath2[i],
                    point;
            // the first element returned in the array is a letter, quite useless for the bezier Plugin, so we remove it
            segment.shift();
            //call the function to set up the points based on the segment returned	
            point = setUpPoint2(segment);
        }
        
    

        var tweenScene2Line = new TimelineMax()
            .add(TweenMax.to($scene2Anim, 1.2, {strokeDashoffset: 0, ease:Linear.easeNone})) 
            .add(TweenMax.to($glowTip2, 1.2, {
                bezier:{
                    type:"cubic",
                    values:arrayPath1
                },
                force3D:true,ease:Linear.easeNone
            }), 0)  
            .add(TweenMax.to("path", 1, {stroke: "#ffffff", ease:Linear.easeNone}), 0);	// change color during the whole thing
            
        var tweenScene3Line = new TimelineMax()
            .add(TweenMax.to($scene3Anim, 1.2, {strokeDashoffset: 0, ease:Linear.easeNone})) 
            .add(TweenMax.to($glowTip3, 1.2, {
                bezier:{
                    type:"cubic",
                    values:arrayPath2
                },
                force3D:true,ease:Linear.easeNone
            }), 0);
        
        // var tweenScene4Line = new TimelineMax()
        //     .add(TweenMax.to($scene4Anim, 1.2, {strokeDashoffset: 0, ease:Linear.easeNone})) 
        //     .add(TweenMax.to($glowTip4, 1.2, {
        //         bezier:{
        //             type:"cubic",
        //             values:arrayPath3
        //         },
        //         force3D:true,ease:Linear.easeNone
        //     }), 0);    
           // .add(TweenMax.to("path", 1, {stroke: "#ffffff", ease:Linear.easeNone}), 0);	// change color during the whole thing
                
            // build scene
            // var scene = new ScrollMagic.Scene({triggerElement: "#scene2", duration: 400, tweenChanges: true})
            //                 .setPin("#target")
            //                 .setTween(tweenGlowTip)
            //                 .addIndicators() // add indicators (requires plugin)
            //                 .addTo(controller);

            // build scene
        var scene2 = new ScrollMagic.Scene({triggerElement: "#scene2", duration: 400, tweenChanges: true})
                        .setTween(tweenScene2Line)
                        .addIndicators() // add indicators (requires plugin)
                        .addTo(controller);

        var scene3 = new ScrollMagic.Scene({triggerElement: "#scene3", duration: 400, tweenChanges: true})
                       // .setPin("#glow-tip3")
                        .setTween(tweenScene3Line)
                        .addIndicators() // add indicators (requires plugin)
                        .addTo(controller);
        // var scene3 = new ScrollMagic.Scene({triggerElement: "#scene3", duration: 400, tweenChanges: true})
        //                // .setPin("#glow-tip3")
        //                 .setTween(tweenScene4Line)
        //                 .addIndicators() // add indicators (requires plugin)
        //                 .addTo(controller);

        // var scene4 = new ScrollMagic.Scene({triggerElement: "#scene4", duration: 400, tweenChanges: true})
        //                 .setTween(tweenScene2Line)
        //                 .addIndicators() // add indicators (requires plugin)
        //                 .addTo(controller);                

        console.log('Magic scroll: init() function was called');
    }
}
