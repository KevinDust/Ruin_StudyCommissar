var home = require('./routes/home');
var sign = require('./routes/sign');
var userInfo = require('./routes/userInfo');
var sourceInfo=require('./routes/sourceInfo');
var upload = require('./routes/upload');
var fileList = require('./routes/fileList');

module.exports = function(app){

	//home
	app.get('/', home.index);
	//app.get('/users', user.list);
	
	//登陆后的首页
	app.get('/home',home.home);

	//Regist
	app.get('/reg', sign.reg_get);
	app.post('/reg', sign.reg_post);

	//Login

	//user
	app.get('/userInfo', userInfo.userInfo_index);

	//资源介绍页面
	app.get('/sourceInfo',sourceInfo.sourceInfo);

	// Upload Resources
	//app.get('/upload',checkLogin);
	app.get('/upload', upload.upload_get);
	
	app.post('/upload',upload.upload_post);
	// list Resources
	app.get('/fileList', fileList.fileList_index);
}
