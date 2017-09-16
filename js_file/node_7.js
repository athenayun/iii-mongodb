var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/iii-2017-09');
var Schema = mongoose.Schema;


var dogSchema = new Schema(
  { name: String }
 );

var Cat = mongoose.model('Cats', dogSchema);

var kitty = new Cat({ name: "MARRY"});



kitty.save(function (err,obj) {
	if(err) {
		console.log(err)
		throw err
	}
	else{
		console.log(obj)
		mongoose.disconnect();
	}
});
