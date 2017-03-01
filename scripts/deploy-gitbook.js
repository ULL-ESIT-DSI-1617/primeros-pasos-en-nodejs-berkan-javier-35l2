'use strict';

var path = require('path');
var fs = require('fs-extra');
var ghpages = require('gh-pages');

var repository = JSON.parse(fs.readFileSync('package.json','utf8')).repository.url;

main();

function main(){
    console.log("Deploy Gitbook on Github");
    publish();
}

function publish(){
    ghpages.publish('gh-pages',{
        repo: repository,
        message: 'Updating gh-pages branch'
    },function(err){});
}