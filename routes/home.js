
exports.index = function(req,res){
  res.render('index', { title: 'Express' });
};
exports.home = function(req,res){
  res.render('home', { title: 'Express' });
};