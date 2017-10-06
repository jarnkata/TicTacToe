**TicTacToe Game instructions**

**To play my game you need to install listed applications / plugins**
This game is using Runtime Environment :
1. Install Visual Studio code and Install Code runner extension to it.
It is easier running of node and other apps.
2. Install Node.js :Node.js contains a npm that can be udes to install various packages and extensions to it.
https://nodejs.org/en
https://marketplace.visualstudio.com/items?itemName=waderyan.nodejs-extension-pack

3. Check Node.js version. It should be 8.x
  Create Node.js project folder. In this folder give command npm init to create package.json 
  -file. witch will be main source file of your app.

  Now create application that generates passwords, use and install separate **module** for this locally. See the dependency in package,json after installing. Install **ESlint** also locally ( use **--save-dev**) see depedency in package.json.

  Create preset for ESLint where you decide your code style **eslint.js --init**

  **node ./node_modules/eslint/bin/eslint.js --init**
  Now you should apple to see style problems also in my code. if you download my file in same folder.

  install also readline-sync with npm... npm install readline-sync

3. Download my game from Github https://github.com/jarnkata/TicTacToe

**Bugs: Winner checking is not working.** 
