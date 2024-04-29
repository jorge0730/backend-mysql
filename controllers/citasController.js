import Citas from '../models/citas.js'; // importar citas


// función para mostrar todos los registros de citas
export const getAllCitas = async (req,res) => {
    try {
        const citas = await Citas.findAll();
        res.json(citas);
    } catch (error) {
        res.json({msg: error.message})
    }
}

// función para buscar un solo registro
export const getCita = async (req,res) => {
    try {
        const cita = await Citas.findAll({
            where: {id:req.params.id}
        });
        res.json(cita);
    } catch (error) {
        console.log(error);
        res.status(500).send('No se encuentra registro de su cita');  
    }
}

//función para crear nuevo registro
export const agregarCita = async (req,res) => {
    try {
        await Citas.create(req.body);
        res.json({msg:'Registro creado'})
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//función de modificar cita
export const modificarCita = async (req,res) => {
    try {
        await Citas.update(req.body, {
            where: {id:req.params.id}
        });
        res.json({msg:'Registro actualizado'});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// función eliminar
export const eliminarCita = async (req,res) => {
    try {
        await Citas.destroy({
            where: {id: req.params.id}
        });
        res.json({msg:'Registro eliminado'});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}