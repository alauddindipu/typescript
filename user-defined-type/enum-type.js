//enum 
// no duplicate
//numeric, string, hererogenous(mixed)
var RequestType;
(function (RequestType) {
    RequestType[RequestType["readData"] = 4] = "readData";
    RequestType[RequestType["saveData"] = 5] = "saveData";
    RequestType[RequestType["deleteData"] = 6] = "deleteData";
})(RequestType || (RequestType = {}));
console.log(RequestType);
var RequestType2;
(function (RequestType2) {
    RequestType2["readData"] = "Read_Data";
    RequestType2["deleteData"] = "Delete_Data";
})(RequestType2 || (RequestType2 = {}));
console.log(RequestType2.readData);
