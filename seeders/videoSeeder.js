const Video = require("./../models/Video");

const videos = [
  {
    title: "Ngeliat laptop dengan logo ini? Yang punya pasti orang kaya.",
    thumbnailUrl:
      "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/7/15/6094f1ab-8581-46b9-ab60-81216dc3139c.jpg",
    embeddedComponent:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/hLXIik8dmdg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    title: "Ini. HP. MAHAL 😎 - Review realme 11 Pro+ Indonesia",
    thumbnailUrl:
      "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/7/24/9a861388-416a-4a3f-abd2-b48fbd1957b2.jpg",
    embeddedComponent:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/N4rqRd9P4p8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    title:
      "19 Juta, Core i9 + RTX4060: Racikan Kencang yg Murah! Review Axioo Pongo 960",
    thumbnailUrl:
      "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/7/25/896935d5-7362-4441-8ec3-0a75fc55f980.png",
    embeddedComponent:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/jGYyXipzZjE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    title: "SUSAH CARI LAWANNYA! REVIEW Asus ROG Phone 7 + Ultimate",
    thumbnailUrl:
      "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/7/20/2a1bf6b1-0df9-4fa5-975e-8a4779d3af4d.jpg",
    embeddedComponent:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/kYfrnqeQUVU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    title: "HP 5 Juta PALING GARANG🔥 - Review POCO F5 Indonesia!",
    thumbnailUrl:
      "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/7/13/3c9452f6-6d0a-4c44-bcca-84cebca98ba8.jpg",
    embeddedComponent:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/zh1NNWmwQak" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
];

const videoSeeder = async () => {
  await Video.deleteMany();
  await Video.insertMany(videos);
};
module.exports = videoSeeder;
