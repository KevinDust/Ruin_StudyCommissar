
/*
 * GET home page.
 */
var crypto = require('crypto');
var User = require('../models/user.js');

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.reg_get = function(req,res){
	res.render('reg',{ title: 'Regist' });
};

exports.reg_post = function(req,res){
	if(req.body['password-repeat'] != req.body['password']){
		req.flash('error','两次输入的口令不一致');
		return res.redirect('/req');
	}
	var md5 = crypto.createHash('md5'); 
	var password = md5.update(req.body.password).digest('base64'); 
	  
	var newUser = new User({ 
	  name: req.body.username, 
	  password: password, 
	}); 
	  
	//检查用户名是否已经存在 
	User.get(newUser.name, function(err, user) { 
	  if (user) 
	    err = 'Username already exists.'; 
	  if (err) { 
	    req.flash('error', err); 
	    return res.redirect('/reg'); 
	  } 
	  //如果不存在则新增用户 
	  newUser.save(function(err) { 
	    if (err) { 
	      req.flash('error', err); 
	      return res.redirect('/reg'); 
	    } 
	    req.session.user = newUser; 
	    req.flash('success', '注册成功'); 
	    res.redirect('/'); 
	  }); 
	});
};