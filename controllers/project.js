const ProjectService = require('../services/project');

const getProjectsByUser = async (req, res) => {
    const {
        userId
    } = req.params;
    try {
        const projects = await ProjectService.getProjectsByUser(Number(userId));
        if (!projects) res.status(404).json({
            message: 'Not Found!'
        });

        res.status(200).json(projects);

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

const createProject = async (req, res) => {
    const {
        userId
    } = req.params;
    const { titulo , descripcion } = req.body;
    try {
        const user = await ProjectService.createProject(titulo, descripcion, 0, Number(userId));
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

const assignUserToProject = async (req, res) => {
    const {
        userId
    } = req.params;
    const { projectId } = req.body;
    try {
        const project = await ProjectService.assignUserToProject(Number(userId), Number(projectId));
        res.status(200).json(project);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

const deleteProject = async (req, res) => {
    const {
        id
    } = req.params;
    try {
        const result = await ProjectService.deleteProject(Number(id));
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

module.exports = {
    getProjectsByUser,
    createProject,
    assignUserToProject,
    deleteProject
};