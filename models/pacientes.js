import conectarDb from '../configDB/db.js';
import { DataTypes } from 'sequelize';   

const Pacientes = conectarDb.define('pacientes',{
    nombrePaciente: {
        type: DataTypes.STRING,
        allowNull: false
    },
    documento: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    edad: {
        type: DataTypes.NUMBER,
        allowNull: false
    }
})

export default Pacientes;