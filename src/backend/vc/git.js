const git = require('isomorphic-git');
const fs = require('fs');
const http = require('http');

async function createRepo(path){
    return await git.init({fs, dir: path});
}

async function clone(path, url, githubToken){
    return await git.clone({
        fs,
        http,
        dir: path,
        url: url,
        singleBranch: true,
        onAuth: () => ({ username: githubToken })
    })
}

async function add(repoPath, file){
    return await git.add({fs, dir: repoPath, filepath: file});
}

async function remove(repoPath, file){
    return await git.remove({fs, dir: repoPath, filepath: file});
}

async function commit(repoPath, authorName, authorEmail, message){
    let sha = await git.commit({
        fs,
        dir: repoPath,
        author: {
            name: authorName,
            email: authorEmail
        },
        message: message
    });
    return sha;
}

async function addRemote(repoPath, remoteName, remoteURL){
    return await git.addRemote({fs, dir: repoPath, remote: remoteName, url: remoteURL})
}

async function removeRemote(repoPath, remoteName){
    return await git.deleteRemote({fs, dir: repoPath, remote: remoteName})
}

async function createBranch(repoPath, name){
    return await git.branch({fs, dir: repoPath, ref: name})
}

async function deleteBranch(repoPath, name){
    return await git.deleteBranch({fs, dir: repoPath, ref: name})
}

async function renameBranch(repoPath, newName, oldName){
    return await git.renameBranch({fs, dir: repoPath, ref: newName, oldref: oldName})
}

async function push(repoPath, remote, ref, githubToken){
    return await git.push({
        fs,
        http,
        dir: repoPath,
        remote: remote,
        ref: ref,
        onAuth: () => ({ username: githubToken })
    });
}

async function pull(repoPath, branch){
    return await git.pull({
        fs,
        http,
        dir: repoPath,
        ref: branch,
        singleBranch: true
    })
}

module.exports = {createRepo, clone, add, remove, commit, addRemote, removeRemote, createBranch, deleteBranch, renameBranch, push, pull}