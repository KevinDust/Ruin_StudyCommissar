/*
 * Upload page
 */
var fs = require('fs');

exports.upload_get = function(req,res){
	res.render('upload',{ title : '文件上传' });
};


exports.upload_post = function(req,res){
	// 获得文件临时路径
	var tmp_path = req.files.myFile.path;
	console.log(tmp_path);
	// 指定文件上传后的目录
	var target_path = './public/files/'+req.files.myFile.name;
	// 移动文件
	fs.rename(tmp_path,target_path,function(err){
		if(err) {
			console.log(err);
			throw err;
		}
		// 删除临时文件夹
		fs.unlink(tmp_path, function(){
			if(err) {
				console.log(err);
				throw err;
			}
			//res.send('File uploaded to: '+target_path+'-'+req.fles.thumbnail.size+'bytes');
			console.log("文件上传成功");
		});
	})
	req.flash("success","文件上传成功");
	res.render('upload_success',{title:"上传成功"});
};