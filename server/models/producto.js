var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var productoSchema = new Schema({
	nombre: 		{ type: String },
	cantidad: 		{ type: Number },
	stockMin: 	{ type: Number },
});


module.exports = mongoose.model('Producto', productoSchema);