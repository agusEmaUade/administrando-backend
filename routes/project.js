const { Router } = require("express");
const ProjectController = require("../controllers/project");
const { body, check } = require("express-validator");
const validateRequest = require("../middlewares/request_validator");

const router = Router();

router.post(
  "/:userId",
  [
    check("titulo").not().isEmpty(),
    check("descripcion").not().isEmpty(),
    validateRequest,
  ],
  ProjectController.createProject
);

router.post(
  "/:userId/assign",
  [
    check("projectId").not().isEmpty(),
    validateRequest,
  ],
  ProjectController.assignUserToProject
);

router.delete(
  "/:id", ProjectController.deleteProject
);

router.get("/:userId", ProjectController.getProjectsByUser);

module.exports = router;
