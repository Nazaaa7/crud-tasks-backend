const {newConnection} = require("../bd/bd")



app.get("/tareas", async (req, res) =>{
    const conexion =  await newConnection()

    const results = await conexion.query(`SELECT *  FROM tasks`);

    res.json(results[0]);

    conexion.end()//siempre terminar la funcion 
});

app.get("/tareas/:id", async (req, res) =>{
    const conexion =  await newConnection()
    const id = req.params.id
    const results = await conexion.query(`SELECT *  FROM tasks where id = ?`, id);

    res.json(results[0]);

    conexion.end()//siempre terminar la funcion 
});



app.delete("/tareas/:id", async (req, res) =>{
    const conexion =  await newConnection()
    const id = req.params.id
    const results = await conexion.query(`DELETE  FROM tasks where id = ?`, id);

    res.send("Tarea Eliminada")

    conexion.end()//siempre terminar la funcion 
});

app.post("/tareas", async (req, res)=>{
    console.log(req.body)
    const conexion = await newConnection()
    const { title } = req.body
    const { descripcion } = req.body
    const { isComplete } = req.body
    conexion.query('INSERT INTO tasks (title, description, isComplete) values (?)', [title, descripcion, isComplete]);
    res.send("crear");
    conexion.end()//siempre terminar la funcion 
    
});


app.put("/tareas/:id", async (req, res) => {
    const conexion = await newConnection();

    try {
        const id = req.params.id;
        const { descripcion } = req.body;

        // Corrección en la llamada al método 'query' para usar el array de parámetros
        const results = await conexion.query('UPDATE tabla1 SET descripcion = ? WHERE idTabla = ?', [descripcion, id]);

        res.send("Tarea actualizada");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error actualizando la tarea");
    } finally {
       conexion.end(); // Asegurarse de cerrar la conexión en cualquier caso
    }
});