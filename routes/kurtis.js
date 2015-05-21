var KurtiModel = require('../models/kurti');
var express = require('express');
var router = express.Router();

router.route('/api/kurtis').get(function (req, res){
  return KurtiModel.find(function (err, kurtis) {
    if (!err) {
      return res.send(kurtis);

    } else {
      return console.log(err);
    }
  });
});

router.route('/api/kurtis').post(function (req, res){
  var kurti;
  kurti = new KurtiModel({
    image: req.body.image,
    name: req.body.name,
    price: req.body.price,
    color: req.body.color,
    size: req.body.size,
    available: req.body.available,
    delivery: req.body.delivery
  });
  kurti.save(function (err) {
    if (!err) {
      return console.log("created");
    } else {
      return console.log(err);
    }
  });
  return res.send(kurti);
});

router.route('/api/kurtis/:id').delete(function( request, response ) {
	console.log( 'Deleting kurti with id: ' + request.params.id );
	return KurtiModel.findById( request.params.id, function( err, kurti) {
	return kurti.remove( function( err ) {
	  if( !err ) {
	console.log( 'kurti removed' );
	return response.send( '' );
	} else {
	console.log( err );
	}
	});
	});
});

router.route('/api/kurtis/:id').put(function( request, response ) {
	console.log( 'Updating kurti ' + request.body.name );
	return KurtiModel.findById( request.params.id, function( err,kurti) {
		kurti.image = request.body.image;
		kurti.name = request.body.name;
		kurti.price = request.body.price;
		kurti.color = request.body.color;
		kurti.size = request.body.size;
		kurti.available = request.body.available;
		kurti.delivery = request.body.delivery;
	return kurti.save( function( err ) {
	  if( !err ) {
	  console.log( 'kurti updated' );
	  } else {
	  console.log( err );
	  }
	  return response.send(kurti);
	});
	});
});

module.exports = router;