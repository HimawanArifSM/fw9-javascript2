
// arrray/string buat contoh

const names= ["Abigail", "Alexandra", "Alison",
             "Amanda", "Angela", "Bella",
             "Carol", "Caroline", "Carolyn",
             "Deirdre", "Diana", "Elizabeth",
             "Ella", "faith", "Olivia", "penelope"]

const names2="Himawan"


//1
// forEach
// ini berfungsi untuk mengeksekusi tiap elemen pada sebuah array dan me return undefined
//biasanya digunakan jika proses sudah final
function funcMania2(){
    names.forEach((element) => {
        console.log(element)
    });
}
funcMania2()

//2
// to lowercase
//sebuah method yang berfungsi untuk mengubah string input menjadi huruf kecil dengan return memanggil string yang sudah 
//diubah menjadi huruf kecil
console.log(names2.toLowerCase())

//3
//pop
//berfungsi untuk menghapus elemen terakhir dari sebuah array dengan return array yang sudah dihilangkan elemen terakhirnya
//dan me-return undefined jika array input koson
console.log(names.pop())

//4
// includes
//berfungsi untuk melakukan cek setiap elemen dari sebuah array yang sesuai dengan parameter inputan 
//dan mengeluarkan hasil true/false
console.log(names.includes("Ella"))

//5
//slice
//berfungsi untuk memotong sebuah array sesuai dengan indeksnya, pemotongan dimulai dari 
//parameter inputan pertama hingga sebelum parameter inputan kedua
console.log(names.slice(2, 5))

//6
//unshift
//berfungsi untuk menambahkan elemen baru ke dalam sebuah array dan diletakkan diposisi paling depan
console.log(names.unshift(names2))

//7
//length
//berfungsi untuk mencari tau jumlah elemen di sebuah array
console.log(names2.length)

//8
//join
//berfungsi untuk mengubah sebuah array menjadi string dengan separator tertentu
const names3=["Ella", "faith", "Olivia", "penelope"]
console.log(names3.join(" and "))

//9
//reverse
// berfungsi untuk mengurutkan array dari belakang ke depan
console.log(names.reverse())

//10
//from
//berfungsi untuk merubah menjadi array yang lebih proper
console.log(Array.from(names2))