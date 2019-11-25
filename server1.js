const server = require('express')()
const port = 5000

let nilai = 20
// let data = {
//     nama: 'NIAR SUSANTY',
//     npm: 17411009,
//     jurusan: 'SISTEM INFORMASI',
//     kuliah: (namamatkul, nama) => {
//   console.log('selamat kuliah anak anak '+ nama +', dimatakuliah '+ namamatkul)
//     }
// }
// data.kuliah('Pemograman 3',data.nama)

let listMhs = [
       {
            nama: 'NIAR SUSANTY',
            npm: 17411009
       },
    
        {
            nama: 'NOVI',
            npm: 17411059
        },
        {
            nama: 'ARIF',
            npm: 17411090
        }
    
]
for (let i = 0; i < listMhs.length; i++) {
    console.log(listMhs[i].nama+' - '+ listMhs[i].npm)
}


// if (nilai >80) {
//    console.log('Nilai anda A')
// }else if (nilai >70) {
//    console.log('Nilai anda B')
// } else {
//    console.log('Nilai anda C')
// }


server.listen(port, function() {
    console.log('Server started on port'+port)
})