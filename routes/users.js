const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { check } = require('express-validator')

router.post("/",[
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('surname', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'Ingresa un mail válido').isEmail(),
    check('password', 'El password debe tener al menos 6 caracteres').isLength({min:6}),


], userController.createUser);

module.exports = router;
