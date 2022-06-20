

function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray){
    if (nilaiAwal<nilaiAkhir && dataArray.length>5){
        const result= dataArray.filter(dataArray=> dataArray>nilaiAwal && dataArray<nilaiAkhir)
        function urutan(a,b){
            return a-b
        }
        result.sort(urutan)
        return console.log(result)
    }
    else if (nilaiAwal>nilaiAkhir && dataArray.length>5){
        return console.log("nilai akhir harus lebih besar nilai awal")
    }
    else if (nilaiAwal<nilaiAkhir && dataArray.length<=5){
        return console.log("data harus lebih dari 5")
    }
    else {
        return console.log("nilai akhir harus lebih besar dari nilai awal dan data harus lebih dari 5")
    }
    
}

seleksiNilai(50, 20, [2, 25, 4, 14, 17, 30, 8])

