var mongodb=require('mongodb');

var mongoClient=mongodb.MongoClient;

var url='mongodb://127.0.0.1:27017';

var dbs='web';

//collectionName:数据表名
//selector:增删查改条件
//fn:回调函数

//查询
var find=function(client,collectionName,selector,fn){
	var collection=client.db(dbs).collection(collectionName);
	collection.find(selector).toArray(function(err,data){
		if(err) throw err;
		fn(data);
		client.close()
	})
}

//插入
var ins=function(client,collectionName,selector,fn){
	var collection=client.db(dbs).collection(collectionName);
	collection.insert(selector,function(err,data){
		if(err) throw err;
		fn(data);
		client.close()
	})	
}

//删除一条
var del=function(client,collectionName,selector,fn){
	var collection=client.db(dbs).collection(collectionName);
	collection.deleteOne(selector,function(err,data){
		if(err) throw err;
		fn(data);
		client.close()
	})	
}

//删除多条
var dels=function(client,collectionName,selector,fn){
	var collection=client.db(dbs).collection(collectionName);
	collection.deleteMany(selector,function(err,data){
		if(err) throw err;
		fn(data);
		client.close()
	})	
}

//修改一条
//selector=[{},{}]
var updateone=function(client,collectionName,selector,fn){
	var collection=client.db(dbs).collection(collectionName);
	collection.updateOne(selector[0],selector[1],function(err,data){
		if(err) throw err;
		fn(data);
		client.close()
	})	
}

//修改多条
var updatemany=function(client,collectionName,selector,fn){
	var collection=client.db(dbs).collection(collectionName);
	collection.updateMany(selector[0],selector[1],function(err,data){
		if(err) throw err;
		fn(data);
		client.close()
	})	
}

var method={
	'find':find,  //查询
	'ins':ins,	  //插入
	'del':del,	  //删除一条
	'dels':dels,   //删除多条
	'updateone':updateone, //修改一条
	'updatemany':updatemany//修改多条
}
//method.find()
//method['find']()

module.exports=function(type,collectionName,selector,fn){
	mongoClient.connect(url,function(err,client){
		method[type](client,collectionName,selector,fn)		
	})	
}
