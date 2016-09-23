
/*
 * GET users listing.
 */

exports.fileList_index = function(req, res){
  
  var page = req.query.p ? parseInt(req.query.p) : 1;  //浏览第几页

  
  var fileList=[];   //总列表
  var fileList_part=[];  //部分列表
  
  for (var i =0;i<101;i++) {
    fileList[i]= '计算机导论（第'+(i+1)+'章）'
  }

  //要显示的10个资源
  for (var i =(page - 1)*10,j=0;i<page*10&&i<fileList.length;i++,j++) {
    fileList_part[j]= fileList[i];
  }
  
  
  
  var isFirstPage=(page-1==0);   //是否在第一页
  var isLastPage=((page - 1) * 10 + fileList_part.length == fileList.length);    //是否在最后一页
  
  //((page - 1) * 10 + posts.length) == total
  res.render('fileList',{ 
    title:'123', 
	  fileList:fileList_part,
	  isFirstPage:isFirstPage,
	  isLastPage:isLastPage,
	  page:page
	});
};
