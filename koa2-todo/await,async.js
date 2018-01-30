

//处理异步请求 await async
function getSomeThing(){
    return 'something';
}

async function testAsync(){
    return 'Hello world';
}

async function test(){
    const v1 = await getSomeThing();
    const v2 = await testAsync();
    console.log(v1,v2);
}

// const result = testAsync();
// console.log(result);
// test();


function takeLongTime(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("long time no see")
        },1000)
    })
}

async function test1(){
    const v = await takeLongTime();
    console.log(v);
}
test1();