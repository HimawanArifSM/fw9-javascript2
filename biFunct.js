
// arrray/string buat contoh

const names= ["Abigail", "Alexandra", "Alison",
             "Amanda", "Angela", "Bella",
             "Carol", "Caroline", "Carolyn",
             "Deirdre", "Diana", "Elizabeth",
             "Ella", "faith", "Olivia", "penelope"]

const names2="Himawan"


//1
// forEach
// ini berfungsi untuk mengeluarkan tiap elemen dari array dan mem
function funcMania2(){
    names.forEach((element) => {
        console.log(element)
    });
}
funcMania2()

//2
// to lowercase
//sebuah method yang berfungsi untuk mengubah string input menjadi huruf kecil
console.log(names2.toLowerCase())

//3
// filter
//sebuah method yang digunakan untuk memfilter sebuah array dan membuat array baru yang sesuai dengan perintah fungsi
const ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18
}
console.log(ages.filter(checkAdult))

//4
// includes
//berfungsi untuk melakukan cek setiap elemen dari sebuah array yang sesuai dengan parameter inputan dan mengeluarkan hasil true/false
console.log(names.includes("Ella"))

//5
//slice
//berfungsi untuk memotong sebuah array sesuai dengan indeksnya, pemotongan dimulai dari parameter inputan pertama hingga sebelum parameter inputan kedua
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