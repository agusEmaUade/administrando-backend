const { Usuario } = require("../db/db");

const getUsers = async () => await Usuario.findAll();
const getUserById = async (id) => await Usuario.findByPk(id);
const createUser = async (user) => await Usuario.create(user);
const getUserByEmailAndPassword = async (email, password) =>
  await Usuario.findOne({
    where: { email, password },
  });
const updateUser = async (id, updatedFields) => {
  return await Usuario.update(updatedFields, {
    where: { id },
  });
};
module.exports = {
  getUsers,
  getUserById,
  createUser,
  getUserByEmailAndPassword,
  updateUser,
};
