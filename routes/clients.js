const express = require("express");
const router = express.Router();
const clientController = require("../controllers/clientController");
const auth = require("../middleware/auth");
const { check } = require("express-validator");

router.post(
  "/",
  [check("identificator", "El identificador es obligatorio").not().isEmpty()],
  auth,
  clientController.createClient
);

router.get("/", auth, clientController.getClients);

router.put(
  "/:id",
  auth,
  [check("identificator", "El identificador es obligatorio").not().isEmpty()],
  clientController.updateClients
);

module.exports = router;
