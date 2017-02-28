'use strict';

var shell = require('shelljs');

main();

function main(){
    console.log("Generate gitbook");
    shell.exec("gitbook build txt/ gh-pages/");
}