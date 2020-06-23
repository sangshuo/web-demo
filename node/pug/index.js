const Koa = require("koa")
const Router = require("koa-router")
const views = require("koa-views")
let app = new Koa();
let router = new Router()
app.use(views(__dirname + "/views", {
    map: {
        html: "pug"
    }
}))
router.get("/",async ctx => {
    let users = [{name:"张三",age:20,height:"178cm"},{name:"李四",age:25,height:"179cm"},{name:"王五",age:26,height:"180cm"}]
    await ctx.render("index.pug", {
        data: users
    })
})
app.use(router.routes())
app.listen(3000)
