const http = require('http')
const fs = require('fs');
const path = require("path");

function downloadMaven(){
    fs.mkdirSync("./tmp");
    fs.mkdirSync("./tmp/mvn");
    let f = fs.createWriteStream("./tmp/mvn/maven.zip")
    http.get("https://downloads.apache.org/maven/maven-3/3.6.3/binaries/apache-maven-3.6.3-bin.zip", function (response){
        response.pipe(f);
    });
}