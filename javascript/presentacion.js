;(function() {
    var throttle = function(type, name, obj) {
        var obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
            requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };
    throttle ("scroll", "optimizedScroll");
})();

var leftgear = document.getElementById("leftgear"),
rightgear = document.getElementById("rightgear");
    


window.addEventListener("optimizedScroll", function() {
    leftgear.style.transform = "rotate("+window.pageYOffset+"deg)";
    rightgear.style.transform = "rotate(-"+window.pageYOffset+"deg)";
});