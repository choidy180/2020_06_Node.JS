let os = require('os');

console.log('시스템의 hostname : %s', os.hostname());
console.log('시스템의 메모리 : %d / %d', os.freemem(), os.totalmem());
console.log('시스템의 cpu 정보\n');
console.dir(os.cpus());
console.log('시스템의 네트워크 인터페이스 정보\n');
console.log(os.networkInterfaces());

let path = require('path');

//디렉터리 이름 합치기
let directories = ["users","mike","docs"];
let docsDirectory = directories.join(path.sep);
console.log('문서 디렉터리 : %s', docsDirectory);

//디렉터리 이름과 파일 이름 합치기
let curPath = path.join('/User/mike','notepad.exe');
console.log('파일 패스 : %s', curPath);

//패스에서 디렉터리, 파일 이름, 확장자 구별하기
let filename = "C:\\Users\\mike\\notepad.exe";
let dirname = path.dirname(filename);
let basename = path.basename(filename);
let extname = path.extname(filename);

console.log('디렉터리 : %s, 파일 이름 : %s, 확장자 : %s',dirname,basename,extname);