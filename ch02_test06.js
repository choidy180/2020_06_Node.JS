let nconf = require('nconf');
nconf.env();

console.log('JAVA_HOME 환경 변수의 값 : %S', nconf.get('JAVA_HOME'))