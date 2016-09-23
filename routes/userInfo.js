
/*
 * GET users listing.
 */

exports.userInfo_index = function(req, res){
  res.render('userInfo', { title: 'KeinDust' });
};