var express = require('express'); 
var router = express.Router(); 
var mongo = require('./mongo'); 
var crypto = require('crypto'); 
var code = require('./code'); 
router.post('/admin', function(req, res) {
	if(req.query.action=='login'){
		登录: /api/admin?action=login
			var md5=crypto.createHash('md5');
			var selector={
				email:req.body.email,
				pwd:md5.update(req.body.pwd).digest('base64')
			}
			mongo('find','user',selector,function(data){
				if(data.length==0){
					res.send({err:'邮箱或者密码错误'})
				}else{
//					登陆成功保存用户信到session里面
					req.session.user={
						email:selector.email,
						pwd:selector.pwd
					}
					res.send({success:'登陆成功',data:data[0]})
				}
			})
	}




})

module.exports = router; 
