import express, {Request, Response} from 'express'

const app= express()
const port = 8087


// Crea un middleware para convertir
// todos los bodies de los request en JSON
app.arguments(express.json())

app.get('/api/v1/doctors', (req: Request, rest: Response) =>{
    const doctors = [
        {id_doctor: '1', nombre: 'juan', apellido: 'castro', especialidad: 'Ortodoncia', consultorio: 101, correo: 'juan@gmail.com'},
        {id_doctor: '2', nombre: 'jose', apellido: 'casper', especialidad: 'Otorrino', consultorio: 201, correo: 'joseee@gmail.com'},
    ]
    rest.json(doctors)
}
) 

app.listen(port, () =>{
    console.log('server is listening on port ${port}')
})
