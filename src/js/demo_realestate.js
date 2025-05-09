// 町のラインアート
new Vivus("city", { duration: 120 }, () => {
  // city内のpathの塗りの透明度を1にする
  Snap("#city").selectAll("path").animate(
    {
      "fill-opacity": 1,
    },
    120,
  );
});

// 地図のピンを上部に固定しておく
Snap("#mapPin").attr({
  transform: "translate(0, -400px)",
});

// 地図のラインアート
new Vivus("map", { duration: 60 }, () => {
  // map内のpathの塗りの透明度を1にする
  Snap("#map").selectAll("path").animate(
    {
      "fill-opacity": 1,
    },
    60,
  );

  // 地図のピンを下ろす
  Snap("#mapPin").animate(
    {
      transform: "translate(0, 0px)",
    },
    120,
    mina.easeout,
  );
});
