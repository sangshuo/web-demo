const fs = require("fs")

function deleteDir(paths) {
    let dir = fs.readdirSync(paths)
    for (let i=0;i < dir.length; i++) {
        let stat = fs.statSync(paths + '/' + dir[i])
        if (stat.isDirectory()) {
            deleteDir(paths + '/' + dir[i])
        } else {
            fs.unlinkSync(paths + '/' + dir[i])
        }
    }
    fs.rmdirSync(paths)
}
deleteDir("./22");
