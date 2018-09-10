//models/Expense.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var pdfSchema = new Schema({
    //needs schema desc here
});
module.exports = mongoose.model('PDF', pdfSchema);
