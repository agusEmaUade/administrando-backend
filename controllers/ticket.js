const TicketService = require("../services/ticket");

const getTicketsByProject = async (req, res) => {
  const { projectId } = req.params;

  try {
    const tickets = await TicketService.getTicketsByProject(projectId);
    if (!tickets || tickets.length === 0) {
      return res.status(404).json({ message: "No se encontraron tickets para este proyecto." });
    }
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createTicket = async (req, res) => {
  const { projectId } = req.params;
  const { monto, fecha, archivoNombre, archivoData, userIds } = req.body;

  try {
    const newTicket = await TicketService.createTicket(
      projectId,
      { monto, fecha, archivoNombre, archivoData },
      userIds
    );
    res.status(201).json(newTicket);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTicket = async (req, res) => {
  const { ticketId } = req.params;
  const updatedFields = req.body;

  try {
    const rowsUpdated = await TicketService.updateTicket(ticketId, updatedFields);

    if (rowsUpdated === 0) {
      return res.status(404).json({ message: "Ticket no encontrado." });
    }

    res.status(200).json({ message: "Ticket actualizado exitosamente." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTicket = async (req, res) => {
  const { ticketId } = req.params;

  try {
    const rowsDeleted = await TicketService.deleteTicket(ticketId);

    if (rowsDeleted === 0) {
      return res.status(404).json({ message: "Ticket no encontrado." });
    }

    res.status(200).json({ message: "Ticket eliminado exitosamente." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getTicketsByProject,
  createTicket,
  updateTicket,
  deleteTicket,
};
