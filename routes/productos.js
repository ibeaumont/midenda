//File: routes/productos.js
module.exports = function(app) {

  var Producto = require('../models/producto.js');

  //GET - Return all products in the DB
  findAllProductos = function(req, res) {
  	Producto.find(function(err, productos) {
  		if(!err) {
        console.log('GET /productos')
  			res.send(productos);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  //GET - Return a prod with specified ID
  findById = function(req, res) {
  	Producto.findById(req.params.id, function(err, producto) {
  		if(!err) {
        console.log('GET /producto/' + req.params.id);
  			res.send(producto);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  //POST - Insert a new producto in the DB
  addProducto = function(req, res) {
  	console.log('POST');
   	var producto = new Producto({
  		nombre:    req.body.nombre,
  		cantidad: 	  req.body.cantidad,
  		stockMin:  req.body.stockMin,
  	});
    console.log(req);
    console.log(producto);

  	producto.save(function(err) {
  		if(!err) {
  			console.log('Created');
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});

  	res.send(producto);

  };

  //PUT - Update a register already exists
  updateProducto = function(req, res) {
  	Producto.findById(req.body._id, function(err, producto) {
     producto.set('nombre',req.body.nombre);
     producto.set('cantidad',req.body.cantidad);
     producto.set('stockMin',req.body.stockMin);
  	 producto.save(function(err) {
  			if(!err) {
  				console.log('Updated');
  			} else {
  				console.log('ERROR: ' + err);
  			}
  			res.send(producto);
  		});
  	});
  }

  //DELETE - Delete a prod with specified ID
  deleteProducto = function(req, res) {
  	Producto.findById(req.bodi._id, function(err, producto) {
  		producto.remove(function(err) {
  			if(!err) {
  				console.log('Removed');
  			} else {
  				console.log('ERROR: ' + err);
  			}
  		})
  	});
  }

  //Link routes and functions
  app.get('/productos', findAllProductos);
  app.get('/producto/:id', findById);
  app.post('/producto', addProducto);
  app.put('/producto', updateProducto);
  app.delete('/producto', deleteProducto);

}