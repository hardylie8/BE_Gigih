const Comment = require("../models/Comment");
const User = require("../models/User");
const Video = require("../models/Video");

const comments = [
  {
    message:
      "Apakah ada diskon atau penawaran khusus untuk pembelian beberapa produk?",
  },
  {
    message:
      "Bisa ditampilkan dengan lebih dekat agar bisa melihat detail produknya?",
  },
  {
    message: "Dikirim dari mana ??",
  },
  {
    message: "Kapan mulai dikirim??",
  },
];

const commentSeeder = async () => {
  const videos = await Video.find().limit(5);
  const users = await User.find().limit(2);

  const result = [];
  users.forEach((user) => {
    videos.forEach((video) => {
      comments.forEach((comment) => {
        result.push({
          userId: user.id,
          videoId: video.id,
          message: comment.message,
        });
      });
    });
  });
  await Comment.deleteMany();
  await Comment.insertMany(result);
};
module.exports = commentSeeder;
