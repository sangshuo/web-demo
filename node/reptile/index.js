const http = require("http")
const unirest = require("unirest")
const fs = require("fs")
const cheerio = require("cheerio")
const url = require("url")
const data = require("./src/index.json")
const path = require("path")
const mime = require("./src/mime")
let webUrl = "http://news.ifeng.com/"

const server = http.createServer((req, res) => {
    let urlObj = url.parse(req.url)
    let str = ""
    if (urlObj.pathname === "/" || urlObj.pathname === "/index") {
        data.forEach(v => {
            str += `<li class="news">
            <a href="javascript:;">
                <img src="${v.imgUrl}" alt="">
            </a>
            <div>
                <h3>
                    <a href="javascript:;">${v.title}</a>
                </h3>
                <div class="info">
                    <span class="tips"><span>${v.from}</span></span>
                    <!-- <span class="line"></span> -->
                    <span class="time">${v.newsTime}</span>
                </div>
            </div>
        </li>`
        })
        let indexData = fs.readFileSync("./list/index.html")
        let $ = cheerio.load(indexData)
        $(".news-list").html(str)
        res.end($.html())
    }  else {
        if (urlObj.pathname !== "/favicon.ico") {
            // 获取扩展名；
            let ext = path.extname(urlObj.pathname);
            //    console.log("??",ext);
            res.setHeader("Content-Type", mime[ext]);
            // console.log("/views/css" + urlObj.pathname);
            let resData = fs.createReadStream("./list" + urlObj.pathname);
            resData.pipe(res);
        }
    }
})
server.listen(3000)

// http.get("http://news.ifeng.com/",function (res) {
//     let str = ""
//     res.on("data",chunk => {
//         str += chunk
//     })
//     res.on("end",chunk=> {
//         // fs.writeFileSync('./src/index.html',str)
//         formatData(str)
//     })
//     function formatData(html) {
//         let $ = cheerio.load(html)
//         let arr = []
//         $(".news-stream-basic-news-list li").each((k,v)=> {
//             let obj = {
//                 title: $(v).find('H2').find('a').text(),
//                 imgUrl: $(v).find('img').attr("src"),
//                 from: $(v).find(".news-stream-newsStream-mr10").text(),
//                 newsTime: $(v).find("time").text()
//             }
//             arr.push(obj)
//         })
//         fs.writeFileSync('./src/index.json',JSON.stringify(arr))
//     }
// })
