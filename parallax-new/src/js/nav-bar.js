
console.log('nav bar: File was imported');
import $ from "jquery";

export default {
    init() {
        function addRemoveClass(){
            $(".navigation li").hover(function () {
                $(this).toggleClass("hover");
             });
        }
        addRemoveClass();
        console.log('Navbar: init() function was called');
    }
}
