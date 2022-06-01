//MVC-
//MODEL - sekcija atsakinga uz duomenu ir administravima
//View- Grazintas html kodas
//Controller- Routerio administratorius

import express from 'express'
import tasks from './controller/tasks.js'

const app = express()
// const hbs = create()

//Handlebars variklio prijungimas
// app.engine('handlebars', hbs.engine)
// app.set('view engine', 'handlebars')
// app.set('views', './templates')

//Statiniu failu perdavimas adrese /assets i narsykle is folderio assets
// app.use('/assets', express.static('assets'))

//POST metodu perduodamu duomenu  
app.use( express.urlencoded({
  extended: false
}))

//Perduodamu duomenu body lygmenyje json formatu issifravimas
app.use(express.json())

app.use('/api/', tasks)

app.listen(3001)


// await insert({task: `Išplauti indus`, done: 0})

// try{
// await _delete(1)
// }catch {
//     console.log('Istrinti nepavyko')
// }

// try{
//     await update(4, {
//         task: 'Pataisyti mašiną',
//         done: 0
//     })
// }catch {
//     console.log('Nepavyko atnaujinti įrašo')
// }