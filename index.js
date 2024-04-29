import express from 'express'; // importar express
import cors from 'cors'; // importar cors
import conectarDb from './configDB/db.js'; // importar la db
import Routes from './routes/routes.js' // importar routes


const app = express();
app.use(cors()); 

//rutas 
app.use(express.json());
app.use('/v0', Routes); // llamado a las rutas

// conexión de servidor
const port = 5000; 
app.listen(port, ()=> {
    console.log(`Servidor conectado por el puerto ${port}`)
});


//petición para validación de correcta conexión del servidor
app.get('/',(req,res)=>{
    res.send('Hola mundo desde el backend')
})

// confirmar conexión con la db 
try {
  await conectarDb.authenticate();
  console.log('Conexión establecida correctamente a la db');
} catch (error) {
  console.error('Error al conectar con la db: ', error);
}