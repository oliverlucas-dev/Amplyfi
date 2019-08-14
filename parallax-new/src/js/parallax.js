
import Parallax from 'parallax-js'
console.log('parallax-js: File was imported');

export default {
    init() {
        var scene1 = document.getElementById('scene1');
        var parallaxInstance1 = new Parallax(scene1);

        var scene2 = document.getElementById('scene2');
        var parallaxInstance2 = new Parallax(scene2);

        var scene3 = document.getElementById('scene3');
        var parallaxInstance3 = new Parallax(scene3);

        var scene4 = document.getElementById('scene4');
        var parallaxInstance4 = new Parallax(scene4);

        var scene5 = document.getElementById('scene5');
        var parallaxInstance5 = new Parallax(scene5);

        var scene6 = document.getElementById('scene6');
        var parallaxInstance6 = new Parallax(scene6);
        
        console.log('parallax-js: init() function was called');
    }
}
