
var home = require('./routes/home');
var sign = require('./routes/sign');
var userInfo = require('./routes/userInfo');

module.exports = function(app){

	//home
	app.get('/', home.index);
	//app.get('/users', user.list);
	
	//Regist
	app.get('/reg', sign.reg_get);
	app.post('/reg', sign.reg_post);

	//user
	app.get('/userInfo', userInfo.userInfo_index);
}