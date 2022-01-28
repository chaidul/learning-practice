# Git & Github

## what is Git ?
###### Git is a version control systen (cmd tool).

## Git setup ?
#### install for Linux .
```bash
pkg install git
```
#### check version and config name, email
```bash
git --version
git config --global user.name Chaidul
git config --global user.email technicalgyanassam@gmail.com
```
#### git start
```bash
mkdir Git-dir
cd Git-dir
git init  #(initialize git diractory)

editor index.txt   #(create file)

git add index.txt | git add .  #(add file staging area [git add .added all file])

git commit -m "commit message / file chnages messgae" #(ready to push file)

git status  #(check commit status)
git log   #(git commit list)

git chackout "hash-code"  #(go to other commit using hash-code)

git show index.html | hash-code   #(show changes)
git diff   #(show changes file)

git reset --hard HEAD^ (delete final commit & changes)
git reset --soft <hash-code>(delete only commit)

git branch   #(all branch list)
git branch new_branch   #(create new branch)
git checkout new_branch   #(go to other branch)
git branch -d <branch-name>  #(delete branch)
git merge <branch-name>  #(other branch merge with default branch)


```
## what is Github ?
 ###### GitHub, Inc. is a provider of Internet hosting for software development and version control using Git. It offers the distributed version control and source code management functionality of Git, plus its own features.

### started git
 - create github account and make good profile.
 - create github repo public/private

### how to push local repo using git
 - copy github repo link ssh/https

```bash
git remote add origin https://github.com/chaidul/personal-project.git   #(add remote link, origin is alias name)

  #before add ssh auth key
  
git branch -m <branch-name>  #(add branch)
git push -u origin <branch-name>

```

## problem and solution !

- before edit and add file github file after the git pushing error b
```bash
git pull | git pull --rebase origin <branch-name>

```

## how to add ssh auth key
[check](git-github/add-ssh.md)



 
 
