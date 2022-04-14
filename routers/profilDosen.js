const express=require("express");
const routerprofilDosen= express.Router()
const controllerprofilDosen=require('../controllers/profilDosen');
// const profilDosen = require("../models/profilDosen");


routerprofilDosen.route('/dosen')
   .get(controllerprofilDosen.getprofilDosen)

   .post(controllerprofilDosen.insert)

// routerprofilDosen.route('/dosen')
//     .get((req,res)=>{
//         res.send(profilDosen)
//     })

//     .post((req,res)=>{
//         res.send('data mahasiswa sukses tersimpan')
//     })

routerprofilDosen.route('/dosen/:nidn')
    .put(controllerprofilDosen.update)
    .delete(controllerprofilDosen.delete)
    .get(controllerprofilDosen.getprofilDosenByNidn)

routerprofilDosen.get('/dosen/:nama/:telepon',(req,res)=>{
        const nama= req.params.nama
        const telepon=req.params.telepon
        res.send('dosen dengan nama:' + nama+ 'telepon' +telepon)
    })
    
module.exports=routerprofilDosen