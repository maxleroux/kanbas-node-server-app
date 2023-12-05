import model from "./model.js";

export const createUser = (user) => model.create(user);
const findAllUsers = async (req, res) => {
    const users = await dao.findAllUsers();
    res.json(users);
  };
export const findUserById = (userId) => model.findById(userId);
export const findUserByUsername = (username) =>
  model.findOne({ username: username });
  export const findUserByCredentials = (usr, pass) => 
  model.findOne({ username: usr, password: pass });
export const updateUser = (userId, user) =>
  model.updateOne({ _id: userId }, { $set: user });
export const deleteUser = (userId) => model.deleteOne({ _id: userId });
