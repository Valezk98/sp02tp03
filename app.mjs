import express from 'express';
import { mongoDbCon } from './src/config/dbConfig.mjs';
import router from './src/routes/superHeroRoutes.mjs';

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware para parsear JSON
app.use(express.json());

//Conexión
mongoDbCon();

//Router
app.use('/api', router)

//Para las rutas no encontradas
app.use((req,res)=>{
    res.status(404).send(
        {
            mensaje: 'Ruta no encontrada'
        }
    )
})


//Iniciar el servidor

app.listen(PORT, ()=>{
    console.log(`Escuchando servidor en http://localhost:${PORT}`);
});