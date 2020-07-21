/*
    读文件全部内容
 */
function ownedGetFileContent(fileUrl) {
    if(!fso){
        var fso = new ActiveXObject("Scripting.FileSystemObject");
    }
    if (fso.FileExists(fileUrl)) {
        openf1 = fso.OpenTextFile(fileUrl);
        try{
            return openf1.ReadAll()
        }catch(e){
            openf1.close();
            openf1=null;
        }

    }
}
//写入文件的cookie
function fileWrite(c_key, c_name) {
    let openf = null
    const fso = new ActiveXObject("Scripting.FileSystemObject");
    if (!fso.FileExists(flieUrl)) {
        fso.CreateTextFile(flieUrl,true)
    }
    openf = fso.OpenTextFile(flieUrl, 8);
    try {
        openf.writeLine(c_key + '=' + c_name + ';');
        openf.close();
        openf = null;
    } catch (e) {
        openf.close();
        openf = null;
    }
}
/*
    删除文件
 */
function delFile(fileUrl) {
    //	f1.close();
    if (!fso) {
        var fso = new ActiveXObject("Scripting.FileSystemObject");
    }
    if (fso.FileExists(fileUrl)) {
        fso.DeleteFile(fileUrl);
    }
}
/**
 * @author SangShuo
 * @date 2019/12/6 16:42
 * @Description: 获取文件内容
 * param: fileUrl 》》文件路径 c_key 》》要找的key
 * return:
 */
function ownedGetFile(fileUrl,c_key) {
    if(!fso){
        var fso = new ActiveXObject("Scripting.FileSystemObject");
    }
    if (fso.FileExists(fileUrl)) {
        openf1 = fso.OpenTextFile(fileUrl);
        try{
            var str = openf1.ReadAll();
            var c_start = str.indexOf(c_key + "=");
            if (c_start !== -1) {
                c_start = c_start + c_key.length + 1;
                c_end = str.indexOf(";", c_start);
                if (c_end === -1){
                    c_end = str.length;
                }
                openf1.close();
                openf1=null;
                return str.substring(c_start, c_end)
            }else{
                openf1.close();
                openf1=null;
            }
        }catch(e){
            openf1.close();
            openf1=null;
        }

    }
}
