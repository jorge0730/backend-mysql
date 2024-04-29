import express from 'express';
import {getAllCitas, getCita, agregarCita, modificarCita, eliminarCita} from '../controllers/citasController.js'; // importar controlador de citas
import { getAllPacientes, getPaciente, agregarPaciente, modificarPaciente, eliminarPaciente } from '../controllers/pacientesController.js';
const router = express.Router();

// rutas para crud citas
router.get('/allcitas', getAllCitas);
router.get('/citas/:id', getCita);
router.post('/agregarCita', agregarCita);
router.put('/modificarCita/:id', modificarCita);
router.delete('/eliminarCita/:id', eliminarCita);

// rutas para crud pacientes
router.get('/allPacientes', getAllPacientes);
router.get('/paciente/:id', getPaciente);
router.post('/agregarPaciente', agregarPaciente);
router.put('/modificarPaciente/:id', modificarPaciente);
router.delete('/eliminarPaciente/:id', eliminarPaciente);

export default router;