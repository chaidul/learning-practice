# Git/Github ssh key auth

```bash
ssh-keygen -t rsa -b 4096 -C "technicalgyanassam@gmail.com"
 # ssh-keygen meaning "ssh key generate" -t=security(RSA), -b=byts(4096 default), -C=comment "technicalgyanassam@gmail.com"
 
 ls ~/.ssh #list all ssh file (id_rsa, id_rsa.pub "public and private key important")

eval $(ssh-agent -s)   #add ssh agent
ssh-add ~/.ssh/id_rsa   #add private key on your device

cat ~/.ssh/id_rsa.pub  # copy this output and go to github settings/SSH_key,add new ssh key Paste output 
 
ssh -T git@github.com   #check git/github connection
```
