const {readFileSync , writeFfileSync, writeFileSync} = require ('fs')
const first = readFileSync ('./content/first.txt','utf-8');
const second = readFileSync ('./content/second.txt','utf-8');

writeFileSync('./content/result-sync',`here is the result file: ${first},${second}`)
