const Koa = require('koa');
const app = new Koa();
app.use(async(ctx)=>{
    let url = ctx.url;
    //从request中接受get请求
    let request = ctx.request;
    let req_query = request.query;  //接受并不是字符串  而是对象
    let req_querystring = request.querystring;
    
    //从上下文ctx中直接获取get请求
    let ctx_querry = ctx.query;
    let ctx_querrystring = ctx.querystring;
    ctx.body={
        url,
        req_query,
        req_querystring,
        ctx_querry,
        ctx_querrystring
    }
});

app.listen(3001,()=>{   //服务器来后
    console.log('[get.js] server is starting at port 3001');
});