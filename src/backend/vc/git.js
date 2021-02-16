let shell = require('shelljs');

let workingDirectory = '.';

function init(){
    shell.exec("git init");
}

function clone(url){
    shell.exec("git clone " + url)
}

function add(file){
    shell.exec("git add " + file)
}

function remove(file){
    shell.exec("git remove " + file)
}

function commit(message){
    shell.exec("git commit -m \"" + message + "\"")
}

function addRemote(name, url){
    shell.exec("git remote add " + name + " " + url)
}

function removeRemote(name){
    shell.exec("git remote remove " + name)
}

function renameBranch(newName){
    shell.exec("git branch -M " + newName)
}

function push(remote, localBranch){
    shell.exec("git push -u " + remote + " " + localBranch)
}

function pull(remote, localBranch){
    shell.exec("git pull " + remote  + " " + localBranch)
}

function checkEnv(){
    if(!shell.which("git") || !shell.which("node")){
        return false;
    }else {
        return true;
    }
}

function initEnv(){
    shell.config.execPath = shell.which("node").toString();
}

function setCurrentWorkingDirectory(path){
    workingDirectory = path;
    shell.cd(workingDirectory);
}

module.exports = {init, clone, add, remove, commit, addRemote, removeRemote, renameBranch, push, pull, checkEnv, initEnv, setCurrentWorkingDirectory};