var JeansModel = require('../models/jeans');
var express = require('express');
var router = express.Router();

router.route('/api/jeanses').get(function (req, res){
  return JeansModel.find(function (err, jeanses) {
    if (!err) {
      return res.send(jeanses);

    } else {
      return console.log(err);
    }
  });
});

router.route('/api/jeanses').post(function (req, res){
  var jeans;
 // console.log("POST: ");
 // console.log(req.body);
  jeans = new JeansModel({
    image: req.body.image,
    name: req.body.name,
    price: req.body.price,
    color: req.body.color,
    size: req.body.size,
    available: req.body.available,
    delivery: req.body.delivery
  });
  jeans.save(function (err) {
    if (!err) {
      return console.log("created");
    } else {
      return console.log(err);
    }
  });
  return res.send(jeans);
});

router.route('/api/jeanses/:id').delete(function( request, response ) {
	console.log( 'Deleting jeans with id: ' + request.params.id );
	return JeansModel.findById( request.params.id, function( err, jeans ) {
	return jeans.remove( function( err ) {
	  if( !err ) {
	console.log( 'Jeans removed' );
	return response.send( '' );
	} else {
	console.log( err );
	}
	});
	});
});

router.route('/api/jeanses/:id').put(function( request, response ) {
	console.log( 'Updating jeans ' + request.body.name );
	return JeansModel.findById( request.params.id, function( err, jeans ) {
	jeans.image = request.body.image;
	jeans.name = request.body.name;
	jeans.price = request.body.price;
	jeans.color = request.body.color;
	jeans.size = request.body.size;
	jeans.available = request.body.available;
	jeans.delivery = request.body.delivery;

	return jeans.save( function( err ) {
	  if( !err ) {
	  console.log( 'jeans updated' );
	  } else {
	  console.log( err );
	  }
	  return response.send( jeans );
	});
	});
});

module.exports = router;