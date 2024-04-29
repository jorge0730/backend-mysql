import Pacientes from '../models/pacientes.js';

export const getAllPacientes = async (req,res) => {
    try {
        const pacientes = await Pacientes.findAll();
        res.json(pacientes);
    } catch (error) {
        res.json({msg: error.message})
    }
}

export const getPaciente = async (req,res) => {
    try {
        const paciente = await Pacientes.findAll({
            where: {id:req.params.id}
        });
        if(!paciente){
            res.json({msg:'No se encuentra paciente con el id proporcionado'});
        }else{
            res.json(paciente);
        }
       
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al buscar registro del paciente');  
    }
}
export const agregarPaciente = async (req,res) => {
    try {
        await Pacientes.create(req.body);
        res.json({msg:'Paciente creado'})
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const modificarPaciente = async (req,res) => {
    try {
        await Pacientes.update(req.body, {
            where: {id:req.params.id}
        });
        res.json({msg:'Paciente actualizado'});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const eliminarPaciente = async (req,res) => {
    try {
        await Pacientes.destroy({
            where: {id: req.params.id}
        });
        res.json({msg:'Paciente eliminado'});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}