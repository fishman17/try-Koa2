const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
// const router = new Router({
//     prefix: '/dmy'
// });

let home = new Router();
home.get('/dmy',async(ctx)=>{
    ctx.body = 'home dmy page';
}).get('/todo',async(ctx)=>{
    ctx.body = 'home todo page'
})
//父级路由
let page = new Router();
page.get('/dmy',async(ctx)=>{
    ctx.body = 'page dmy page';
}).get('/todo',async(ctx)=>{
    ctx.body = 'page todo page'
})

let router = new Router();
router.use('/home',home.routes(),home.allowedMethods());
router.use('/page',page.routes(),page.allowedMethods());

app
    .use(router.routes())
    .use(router.allowedMethods())
    .use(async (ctx)=>{
        
    });
// router
//     .get('/',(ctx,next)=>{
//     ctx.body = "Hello DMY";
//     })
//     .get('/todo',(ctx,body)=>{
//         ctx.body = "todo page";
//     })



app.listen(3000,()=>{
    console.log('starting at port 3000');
});