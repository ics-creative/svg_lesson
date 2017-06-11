new Vivus("city", {duration: 120}, function () {
    Snap("#city").selectAll("path").animate({
        "fill-opacity": 1
    }, 120)
});

new Vivus("map", {duration: 60}, function () {
    Snap("#map").selectAll("path").animate({
        "fill-opacity": 1
    }, 60, function() {
    });

    Snap("#mapPin").animate({
        transform:"translate(0, 0px)"
    }, 120, mina.easeout);
});

Snap("#mapPin").attr({
    transform:"translate(0, -400px)"
});