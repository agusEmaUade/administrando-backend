const UserSerice = require('../services/users');

const getUsers = async (req, res) => {
    try {
        const users = await UserSerice.getUsers();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

const getUserById = async (req, res) => {
    const {
        id
    } = req.params;
    try {
        const user = await UserSerice.getUserById(Number(id));
        if (!user) res.status(404).json({
            message: 'Not Found!'
        });

        res.status(200).json(user);

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

const getUserByEmailAndPassword = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserSerice.getUserByEmailAndPassword(String(email), String(password));
        if (!user) res.status(404).json({
            message: 'Not Found!'
        });

        res.status(200).json(user);

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

const createUser = async (req, res) => {
    try {
        const user = await UserSerice.createUser(req.body);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

const updateUserById = async (req, res) => {
    const { id } = req.params;

    try {
        // Verificar si el usuario existe
        const user = await UserSerice.getUserById(Number(id));
        if (!user) {
            return res.status(404).json({
                message: 'Usuario no encontrado',
            });
        }

        // Actualizar los campos especificados
        const updatedFields = {
            email: req.body.email,
            password: req.body.password,
        };

        // Llamar al servicio para actualizar
        const [rowsUpdated] = await UserSerice.updateUser(Number(id), updatedFields); // Devuelve un array con el número de filas afectadas

        if (rowsUpdated === 0) {
            return res.status(400).json({ message: 'No se pudo actualizar el usuario' });
        }

        return res.status(200).json({
            message: 'Usuario actualizado exitosamente',
        });

    } catch (err) {
        return res.status(500).json({
            message: err.message,
        });
    }
};

module.exports = {
    getUsers,
    createUser,
    getUserById,
    getUserByEmailAndPassword,
    updateUserById
};