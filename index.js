const employee={name:"Sam",address:"11 Broadway"}
function updateEmployeeWithKeyAndValue(Obj,key,value){
    const newObj= {...Obj};
    newObj [key] = value;
    return newObj;

}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; 
    return employee; 
}



    function deleteFromEmployeeByKey(obj, key) {
        const newObj = { ...obj };
        delete newObj[key]; 
        return newObj;
    }
    

    function destructivelyDeleteFromEmployeeByKey(obj, key) {
        delete obj[key]; 
        return obj;
    }
    