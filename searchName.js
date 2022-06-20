const names= ["Abigail", "Alexandra", "Alison",
             "Amanda", "Angela", "Bella",
             "Carol", "Caroline", "Carolyn",
             "Deirdre", "Diana", "Elizabeth",
             "Ella", "faith", "Olivia", "penelope"]

function seacrhName(temp, n, callback){
    if (callback(temp).length==0){
        console.log("tidak ada hasil ditemukan")
    }
    else{
    return console.log(callback(temp).slice(0, n))
    } 
}

function findName(char){
    let temp=[]
    names.map(element => {
        if (element.toLowerCase().includes(char.toLowerCase())==true){
            temp.push(element)  
        }
    });
    //console.log(temp)
    return temp
}

seacrhName("an", 3, findName)
//findName("an")