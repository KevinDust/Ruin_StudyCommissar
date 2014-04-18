var home = require('./routes/home');
var sign = require('./routes/sign');
var userInfo = require('./routes/userInfo');
var upload = require('./routes/upload');
var fileList = require('./routes/fileList');

module.exports = function(app){

	//home
	app.get('/', home.index);
	//app.get('/users', user.list);
	
	//Regist
	app.get('/reg', sign.reg_get);
	app.post('/reg', sign.reg_post);

	//user
	app.get('/userInfo', userInfo.userInfo_index);

	// Upload Resources
	app.get('/upload', upload.upload_get);
	
	// list Resources
	app.get('/fileList', fileList.fileList_index);
}
