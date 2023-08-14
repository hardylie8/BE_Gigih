const getUser = async (req, res) => {
  res.status(201).send({
    message: "data has been successfully retrieved ",
    data: req.user,
  });
};

module.exports = { getUser };
