const req = require("express/lib/request")

let profilDosen=[{nidn:'1127657',nama:'Eko', telepon:'0827625255',create:new Date()},
                {nidn:'1127658',nama:'Hadiq', telepon:'082776433',create:new Date()},
                {nidn:'1127659',nama:'Yulian', telepon:'0827627689',create:new Date()},

                ]

               
                module.exports={
                    getprofilDosen: profilDosen,

                    insert :(req)=>{
                        const newItem={
                            nidn:req.body.nidn,
                            nama:req.body.nama,
                            telepon:req.body.telepon
                        }
                        profilDosen.push(newItem)
                        return newItem
                    }
                }