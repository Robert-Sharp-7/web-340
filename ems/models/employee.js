// required variables
var mongoose = require("mongoose");
var Schema = mongoose.Schema;


// defines the employee schema
var employeeSchema = new Schema({
    
    firstName: String,
    lastName: String

});


// defines the employee model
var Employee = mongoose.model("Employee", employeeSchema);


// exposes the Employee to calling files
module.exports = Employee;