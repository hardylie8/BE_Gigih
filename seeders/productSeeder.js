const Product = require("../models/Product");
const Video = require("../models/Video");

const products = [
  {
    title: "laptop Razer Blade 18",
    price: 95000000,
    url: "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/7/15/6094f1ab-8581-46b9-ab60-81216dc3139c.jpg",
  },
  {
    title: "Realme 11 Pro",
    price: 11000000,
    url: "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/7/24/9a861388-416a-4a3f-abd2-b48fbd1957b2.jpg",
  },
  {
    title: "Axioo Pongo 960",
    price: 17999999,

    url: "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/7/25/896935d5-7362-4441-8ec3-0a75fc55f980.png",
  },
  {
    title: "Asus ROG Phone 7",
    price: 20999999,
    url: "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/7/20/2a1bf6b1-0df9-4fa5-975e-8a4779d3af4d.jpg",
  },
  {
    title: "Poco F5",
    price: 5999999,
    url: "https://images.tokopedia.net/img/cache/900/VqbcmM/2023/7/13/3c9452f6-6d0a-4c44-bcca-84cebca98ba8.jpg",
  },
];

const productSeeder = async () => {
  const videos = await Video.find().limit(5);
  const productData = products.flatMap((product) =>
    videos.map(({ id: videoId }) => ({ ...product, videoId }))
  );

  await Product.deleteMany();
  await Product.insertMany(productData);
};

module.exports = productSeeder;
