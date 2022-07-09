const employee = {}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    let temp = {...employee}
    temp[key]=value 
   
    return temp

}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key]=value
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    let temp = {...employee}
    delete temp[key]
    return temp
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}