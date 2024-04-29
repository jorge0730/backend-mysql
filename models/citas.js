import conectarDb from '../configDB/db.js';
import { DataTypes } from 'sequelize';   

const Citas = conectarDb.define('citas',{
    nombreMedico: {
        type: DataTypes.STRING,
        allowNull: false
    },
    especialidad: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    duracion: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Citas;