const User = require("../models/User");

const users = [
  {
    username: "Benjamin Smith",
    email: "user@mail.com",
    password: "$2a$10$W2LgNO8cuine/.6yzfPRxO8V4ZV//WqMFBVfKzlfKLOt/TACsASNC",
  },
  {
    username: "Alice Johnson",
    email: "user1@mail.com",
    password: "$2a$10$W2LgNO8cuine/.6yzfPRxO8V4ZV//WqMFBVfKzlfKLOt/TACsASNC",
  },
  {
    username: "John Doe",
    email: "user2@mail.com",
    password: "$2a$10$W2LgNO8cuine/.6yzfPRxO8V4ZV//WqMFBVfKzlfKLOt/TACsASNC",
  },
];

const userSeeder = async () => {
  await User.deleteMany();

  await User.insertMany(users);
};

module.exports = userSeeder;
