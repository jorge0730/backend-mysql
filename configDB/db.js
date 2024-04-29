import { Sequelize } from "sequelize";

const conectarDb = new Sequelize('dbtalentotech','root','',{
    host: 'localhost',
    dialect: 'mysql',
    port: 3308
});


export default conectarDb;