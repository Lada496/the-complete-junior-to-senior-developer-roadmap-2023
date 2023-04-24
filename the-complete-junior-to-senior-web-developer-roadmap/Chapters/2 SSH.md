# 2. SSH

# Introduction

- ssh is a protocol which allows as to communicate b/w two computers over the Internet. It allows users to share files as well as control and modify remote computers over the Internet with encrypted way
    
    Client ↔ Internet (secure shell protocol) ↔ host
    

Other examples

- HTTP: it allows you to send files (HTML, CSS, JavaScript) over the Internet between browsers and servers
- FTP: it allows you to send files as well, often used to upload files to hosting platform from your computer
- HTTPS: it’s similar to HTTP but it’s encrypted, which means third parties can’t read the files

# SSH Command

## how to use it

syntax: `ssh {user}@{host}` 

**user**: the account you want to access

**host**: refers to the computer you want to access. This can be an IP address, or domain name

e.g: `ssh root@167.99.146.57`

cloud server service: [Digital Ocean](../The%20Complete%20Junior%20to%20Senior%20Web%20Developer%20Roadma%2085f2e020da1c49118f64311680bc2da7.md) 

## Where you use it

- Communication b/w GitHub
- You can remotely access another computer
- Remotely re-run npm install

ref: [https://www.makeuseof.com/tag/beginners-guide-setting-ssh-linux-testing-setup/](https://www.makeuseof.com/tag/beginners-guide-setting-ssh-linux-testing-setup/)

### Example usages

- nodejs installation: `sudo apt-get install nodejs`
- uploading a folder (superawesome.com in this case):
    1. exit from the remote server with `exit`
    2. at your local computer, `cd` to your target folder: e.g. cd `superawesome.com`
    3. at superawesome.com, type `rsync -av . {user}@{host}:{folder-name}` : this allows you to copy a folder including child elements recursively. e.g `rsync -av . {root}@{167.99.146.57}:~/superawesome.com`

ref:

- apt-get: [https://help.ubuntu.com/community/AptGet/Howto](https://help.ubuntu.com/community/AptGet/Howto)
- rsync: [https://www.tecmint.com/rsync-local-remote-file-synchronization-commands/](https://www.tecmint.com/rsync-local-remote-file-synchronization-commands/)
- [https://www.digitalocean.com/community/tutorials/how-to-set-up-apache-virtual-hosts-on-ubuntu-16-04](https://www.digitalocean.com/community/tutorials/how-to-set-up-apache-virtual-hosts-on-ubuntu-16-04)

# How SSH works

## Symmetrical Encryption

- Symmetrical Encryption uses one secret key for both encryption and decryption. So with symmetrical Encryption, anyone who possesses the key can decrypt the message being transferred.
- image: Client 💻 ”Helloooo” → 🔑 ”EI320+@2” → 🔑 ”Helloooo” 🖥️ Host
- We have to keep the key in secure way so that others can’t find it. This is done through what we call “Key exchange algorithm”: what makes this algorithm particularly secure is the fact that the key never actually transmitted b/w client and host. Instead, the two computers share public pieces of data and manipulate it to independently calculate the secret key.
- A secret key is a specific to each ssh session and is generated prior to something called authentication

## Asymmetrical Encryption

How to get Symmetric key with Asymmetrical Encryption

- image 🔑 private key 💻 🔑 public key 🗝️ public key 🖥️
- private key should never be shared with anyone
- public key can only be decrypted by the same machine’s private key (one way relationship)
- Difii Hellman Key Exchange: it uses a bit of host’s public key information and a bit of client’s private/public key information but without ever exchanging keys, each machine on this computer can generate the symmetric key from data from each computer.

ref: 

- [https://www.youtube.com/watch?v=NmM9HA2MQGI](https://www.youtube.com/watch?v=NmM9HA2MQGI)
- [https://www.youtube.com/watch?v=Yjrfm_oRO0w](https://www.youtube.com/watch?v=Yjrfm_oRO0w)
- [https://www.youtube.com/watch?v=vsXMMT2CqqE&t=](https://www.youtube.com/watch?v=vsXMMT2CqqE&t=)
- [https://www.youtube.com/watch?v=NF1pwjL9-DE](https://www.youtube.com/watch?v=NF1pwjL9-DE)

## Hashing

- With hashes we’re able to verify the authentication of the messages.
- The MAC itself is sent outside of the symmetrically encrypted area.
- With the hashed code we can determine the message is not modified by someone.

## Password vs SSH

Summary of how ssh works

1. Diffie-Hellman Key Exchange
2. Arrive at Symmetric Key
3. Make sure of no funny business (Hashing)
4. Authenticate User ←

Although password is encrypted it’s still not recommended to use a password for secure connection. The better alternative is SSH

## SSH into a server

1. at your computer: `cd ~/.ssh`
2. `open .` to see .ssh folder
3. `ssh-keygen -C "test@gmail.com"`
4. You’ll receive `Enter file in which to save the key (/Users/{username}/.ssh/id_rsa):`
5. Give a name to store the key: e.g. `/Users/{username}/.ssh/id_rsa_digitalocean`
6. add a password if you want
7. `ls` to make sure you have `id_rsa_digitalocean` and `id_rsa_digitalocean.pub` 
    
    ⚠️ NEVER SHARE `id_rsa_digitalocean` 
    
8. copy the public key with   `pbcopy < ~/.ssh/id_rsa_digitalocean.pub`
9. paste it in the host computer(⚠️ it’s not necessary for the current digital ocean):chc`
    1. `ls -a` to check if we have `.ssh` and  `mkdir .ssh` to create the folder if not
    2. `cd /.ssh`
    3. `ls` to check if we have `authorized_keys`
    4. `nano authorized_keys`
    5. paste the public key and save it
10. add our identity at local computer: 
    1. `cd ~/.ssh`
    2. `ssh-add ~/.ssh/id_rsa_digitalocean`

ref: 

- recommended ssh-keygen command `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`
- ****How Secure Shell Works (SSH) - Computerphile:****

[How Secure Shell Works (SSH) - Computerphile](https://www.youtube.com/watch?v=ORcvSkgdA58)

## ****Exercise: Set Up SSH on Github****

- `ssh-add -l` : provides the all list of identities
- `ssh-add -D` : deletes all identities in the list

# Summary

1. Diffie-Hellman Key Exchange: provides for us a way to share a shared secret
2. Arrive at Symmetric Key: so that we have two computers who are able to talk with one another
3. Make sure of no funny business: We are also using hashing to make sure the messages aren’t modified
4. Authenticate User (one example of ssh usage): We have to authenticate users in two ways either providing passwords or using ssh keys and something called rsa which allows us to prove our identity without password

ref: [https://www.ssh.com/home-page](https://www.ssh.com/home-page)