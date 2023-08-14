const Comment = require("../models/Comment");

const getComments = (page, limit, videoId) => {
  return Comment.paginate(
    { videoId: videoId },
    {
      // sort: "-createdAt",
      populate: ["videoId", "userId"],
      lean: true,
      page: page,
      limit: limit,
    }
  );
};

const createComment = async (userId, videoId, message) => {
  const newComment = new Comment({
    userId: userId,
    videoId: videoId,
    message: message,
  });
  const comment = await newComment.save();
  return comment.populate("userId");
};

module.exports = {
  getComments,
  createComment,
};
