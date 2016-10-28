var express = require('express');
var path=require('path');
var favicon=require('serve-favicon');
var app  = express();
//引入body-parser中间件
app.use(require('body-parser')());
app.set('port',process.env.PORT || 3006);

//静态资源设置
app.use(express.static(__dirname + '/public'));
//__dirname全局变量，当前问价运行的目录

app.use(favicon(path.join(__dirname,'public','favicon.ico')));

//路由1
app.get('/',function(req,res){
    res.type('text/html');
    res.send('<span style="color:green">Welcome to My Site.</span>');

});

app.get('/text',function(req,res){
    if (req.query.t){ //get查询字符串，query（对象）查询t，req.query.email，req.query.name
        res.write('lcm:'+Date.now());
        res.end();
    }else {
        res.send('<p>hello</p>');
        res.end();
    }
});
//路由2
app.post('/',function(req,res){
    res.write('Hello===今天学得怎么样？');
    res.end();
});

//定制404页面
app.use(function(req,res){
    res.type('text/html');
    res.status(404);
    res.send('<span style="color: red">404 - Not Found</span>');
});

//定制500页面
app.use(function(err,req,res,next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

//定制启动服务器
app.listen(app.get('port'),function(){
    console.log('Express started on http://localhost:'+app.get('port')+';' +
        'press Ctrl-C to terminate.');
});
