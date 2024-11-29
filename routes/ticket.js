const { Router } = require("express");
const TicketController = require("../controllers/ticket");
const { check } = require("express-validator");
const validateRequest = require("../middlewares/request_validator");

const router = Router();

router.get("/:projectId", TicketController.getTicketsByProject);

router.post(
  "/:projectId",
  [
    check("monto").not().isEmpty().withMessage("El monto es requerido."),
    check("fecha").not().isEmpty().withMessage("La fecha es requerida."),
    check("userIds").isArray().withMessage("Los userIds deben ser un array."),
    validateRequest,
  ],
  TicketController.createTicket
);

router.patch(
  "/:ticketId",
  [
    check("monto").optional().isNumeric().withMessage("El monto debe ser un número."),
    check("fecha").optional().isISO8601().withMessage("La fecha debe tener un formato válido."),
    validateRequest,
  ],
  TicketController.updateTicket
);

router.delete("/:ticketId", TicketController.deleteTicket);

module.exports = router;
