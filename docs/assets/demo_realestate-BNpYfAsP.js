import "./modulepreload-polyfill-DaKOjhqt.js";
new Vivus("city", { duration: 120 }, () => {
  Snap("#city").selectAll("path").animate(
    {
      "fill-opacity": 1
    },
    120
  );
});
Snap("#mapPin").attr({
  transform: "translate(0, -400px)"
});
new Vivus("map", { duration: 60 }, () => {
  Snap("#map").selectAll("path").animate(
    {
      "fill-opacity": 1
    },
    60
  );
  Snap("#mapPin").animate(
    {
      transform: "translate(0, 0px)"
    },
    120,
    mina.easeout
  );
});
