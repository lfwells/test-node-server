# test-node-server

## Overview
Lindsay playing around with node-js and git-hub. Server uses `express` to serve `moustache-express` pages and also can statically server files in the `public` folder.

## Installation
After cloning or downloading the repo, install the npm packages:
```
npm install
```
Then start the server using node (or nodemon if you're into that kind of thing):
```
node server
```

### Notes
Currently the server uses port 3000, just because I was trying random things. Maybe one day I will make it use a customizable port (with a sensible default like 80!).

## Mongo DB
This server uses Mongo DB.
Follow the instructions on https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/ to set up and run a Mongo DB.
Then follow the instructions on https://ianlondon.github.io/blog/mongodb-auth/ to open the db up to external connections (if you want to, otherwise this as a standalone can just connect on localhost)