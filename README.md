# Login_and_SignUp
## Installation and Configurations

- Create github repo, clone to your local machine and then go to your cloned repo directory
- ``npm init vite`` Choose the options and create a project
- ``npm install bootstrap axios react-router-dom``
- ``cd login_and_signup_client/``
- ``npm run dev``
- create a directory for the backend
- ``cd login_and_signup_backend/``
- ``npm init -y``
- ``npm install express mongoose cors nodemon``
- create ``index.js`` file inside the backed folder
- Goto package.json file inside the backend folder
    - under the ``scripts`` add ``"start": "nodemon index.js"``
- ``npm start``
- Remove the ``index.css`` and ``App.css`` file from ``srs`` folder -> Since it's default page
- Remove import lines that are associated with the index.css and App.css file existed inside the ``src`` folder.
- Remove all the code snippets inside the ``return`` function existed on ``App.jsx``

## Errors
- When react-router-dom is missing from client ``packgae.json`` file.
- 
## Installing MongoDB in Kubunutu server and UI (compass)
- Refer ```https://www.mongodb.com/docs/v8.0/tutorial/install-mongodb-on-ubuntu/```
- sudo apt-get install gnupg curl
- curl -fsSL https://www.mongodb.org/static/pgp/server-8.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-serr" clver-8.0.gpg \
   --dearmor
- echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] https://repo.mongodb.org/apt/ubuntu noble/mongodb-org/8.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list
- sudo apt-get update
- sudo apt-get install -y mongodb-org
- sudo systemctl daemon-reload
- sudo systemctl start mongod
- sudo systemctl status mongod
- sudo systemctl enable mongod
- Log on ``/var/log/mongodb/mongod.log``
- ``mongosh``

**Compass**
- Refer ```https://www.mongodb.com/try/download/compass```
- After downloading the ``.deb`` file
    - ```sudo apt install -f ./mongodb-compass_1.48.2_amd64.deb```
- Search ``Mongo`` on your serach bar and open it
- Start by creating ``new connection``
### Phase 1 video completed"
### The next one will be deploying this pages via docker and connect them