/*
 * Upload page
 */

exports.upload_get = function(req,res){
	res.render('upload',{ title : '文件上传' });
};
