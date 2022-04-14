const express = require('express')
const routerprofilDosen=require('./routers/profilDosen')
const app = express()
const port = 8000

// menerima request body
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use(routerprofilDosen)
app.listen(port, () => {
  console.log(`Berjalan pada port ${port}`)
})