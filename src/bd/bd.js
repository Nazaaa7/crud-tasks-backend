// Requerimos mysql.
import { createConnection } from 'mysql2/promise';

// Creamos una funcion para realizar la conexion a la bd.
const connectDB = async ()=> {
    return await createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'tasks_db'
    })
}

// Exportamos la funcion para realizar la conexion desde cualquier archivo.
export {connectDB}