//enum 
// no duplicate
//numeric, string, hererogenous(mixed)


enum RequestType{
    readData=4,
    saveData,
    deleteData,

}

console.log(RequestType);


enum RequestType2{
    readData= "Read_Data",
    deleteData="Delete_Data",

}

console.log(RequestType2.readData)