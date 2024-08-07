
const { connectDB } = require("../bd/bd");

const ctrl = {};
        
// Controlador para obtener todas las tareas
ctrl.obtenerTareas = async (req, res) => {
    try {
        const connection = await connectDB();
        const [results] = await connection.query('SELECT * FROM tasks');
        
        res.json(results);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error con la base de datos');
    }
};
// Controlador para obtener una tarea por su id
ctrl.obtenerTarea = async (req, res) => {
    try {
        const connection = await connectDB();
        const id = req.params.id
        const [results] = await connection.query(`SELECT *  FROM tasks where id = ?`, id);
        res.json(results[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error con la base de datos');
            }
};

// Controlador para agregar una tarea
ctrl.agregarTarea = async (req, res) => {
    try {
        const connection = await connectDB();
        const { title } = req.body
        const { description } = req.body
        const { isComplete } = req.body
        
        const [results] = await connection.query('INSERT INTO tasks (title, description, isComplete) values (?, ?, ?)', [title, description, isComplete]);
        
        res.send("Nueva tarea agregada");
    } catch (error) {
        console.error(error);
        res.status(500).send('Error con la base de datos');
    }
};

// Controlador para editar una tarea, por el id
ctrl.editarTarea = async (req, res) => {
    try {
        const connection = await connectDB();
        const id = req.params.id;
        const { title } = req.body;
        const { description } = req.body; 
        const { isComplete } = req.body;
        // Corrección en la llamada al método 'query' para usar el array de parámetros
        const results = await connection.query('UPDATE tasks SET title = ? , description = ? , isComplete = ? WHERE id = ?', [title, description, isComplete, id]);
        
        res.send("Tarea editada");
     } catch (error) {
         console.error(error);
         res.status(500).send("Error en la base de datos");
         } finally {
             if (connection) {
                await connection.end(); // Asegurarse de cerrar la conexión 
            }
        }
    };

    // Controlador para eliminar una tarea
ctrl.eliminarTarea = async (req, res) => {
    try {
        const connection = await connectDB();
        const id = req.params.id;
        const results = await connection.query(`DELETE  FROM tasks where id = ?`, id);
    
        res.send("Tarea eliminada");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error en la base de datos");
        
       }
   };
    module.exports = ctrl;
    