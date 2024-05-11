function ShowNowYear() {
    var now = new Date();
    var year = now.getFullYear();
    document.write(year);
 }

 function ShowLastModify() {
    var lastday = new Date(document.lastModified);
    document.write(lastday);
 }

 