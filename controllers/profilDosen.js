
const modelprofilDosen= require('../models/profilDosen')
const cari=(arrData,nidn)=>{
    ketemu =-1
    indeks =0
    while (ketemu== -1 && indeks < arrData.length) {
        if(arrData[indeks].nidn == nidn){
            ketemu=indeks
            return indeks
        }
        indeks++
    }
    return -1
}
module.exports={
    getprofilDosen:(req,res)=>{
        profilDosen= modelprofilDosen.getprofilDosen
        res.json(profilDosen)
    },
    insert : (req,res)=>{
        newItem= modelprofilDosen.insert(req)
        res.status(201).json(newItem)
    },
    getprofilDosenByNidn: (req,res)=>{
        profilDosen=modelprofilDosen.getprofilDosen;
        nidn= req.params.nidn;
        indeks=cari(profilDosen,nidn);
        if(indeks!= -1){
            const dataDosen={nidn:profilDosen[indeks].nidn,
                                nama:profilDosen[indeks].nama,
                                telepon:profilDosen[indeks].telepon
        }
        res.json(dataDosen)
    }
    else{
        res.send('dosen dengan nidn:'+nidn+ 'tidak ditemukan')
    }

    res.send('dosen dengan nidn:'+req.params.nidn)

},

update:(req,res)=>{
    // update
    profilDosen=modelprofilDosen.getprofilDosen;
    nidn=req.params.nidn;
    indeks=cari(profilDosen,nidn);
    if(indeks!= -1){
        profilDosen[indeks].nidn=nidn
        profilDosen[indeks].nama=req.body.nama
        profilDosen[indeks].telepon=req.body.telepon

        res.json(profilDosen[indeks])
    }
    else{
        res.send('data dosen dengan nidn '+ req.params.nidn + 'tidak ditemukan')
    }
},
delete : (req,res)=>{
    nidn=req.params.nidn;
    profilDosen=modelprofilDosen.getprofilDosen;
    indeks=cari(profilDosen,nidn);

    if (indeks !=-1){
        profilDosen.splice(indeks,2)

        res.send('dosen dengan nidn '+ nidn+ 'telah dihapus')
    }
    else{
        res.send('dosen dengan nidn '+ req.params.nidn+'tidak ditemukan')
    }
}
}