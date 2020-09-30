---
title: 'Setting Up React With Parcel'
date: '2020-09-30'
tags: ['React']
---


This is a brief post on how to get started with react using the Parcel bundler. <a href="https://parceljs.org/" target="_blank">**Parcel**</a> is a zero-configuration web application bundler for JavaScript applications.
Before Parcel, <a href="https://webpack.js.org/" target="_blank">Webpack</a> was used for bundling JS applications. With Webpack you have to do some configurations yourself and this can be kinda frustrating especially if you are  a newbie. However since version 4 of <a href="https://webpack.js.org/concepts/" target="_blank">Webpack</a>, it does not require you to have a configuration file to bundle your project and hence they have also decided to go with a zero-configuration approach. 
Another way to setup a React application is by using <a href="https://create-react-app.dev/docs/getting-started/" target="_blank">create-react-app</a>. This is quicker to setup in comparison to Parcel and Webpack. Some developers, however, don't like create-react-app because it comes with a ton of default configuration that they may not like or even need for that matter. Developers like that either opt for Webpack or Parcel.
But this post is about Parcel so let's jump right into it.

<br />

## INITIAL SETUP
Before we get started, make sure you have <a href="https://nodejs.org/en/" target="_blank">node</a> installed. After this, create an empty folder using the command line or you could just create a folder using your OS's GUI tools (eg. on Windows, right-click, go to New, select Folder). Any approach is fine.
If you decide to use the command line, you can use this command.

```bash
mkdir react-with-parcel
```
<br />
After that navigate into the folder

```bash
cd react-with-parcel
```
<br />
After this run the following command

```bash
npm init -y
```
<br />

This creates a package.json file which will help you manage your project dependencies, scripts and other setting related to your project. 

The file should look something like this

<br />

**package.json**

```json
{
  "name": "react-parcel",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

<br />

It comes with some pre-defined configurations. If you want to have more control over the configuration, you can run

```bash
npm init
```

<br />

This asks a series of questions related to your project. The answers you give will determine the contents of this config file

After this, let's install our parcel-bundler

```bash
npm i -D parcel-bundler

or

npm install parcel-bundler --save-dev
```

<br />

The first approach is just a shorthand. Both lines do the same thing. The --save-dev or -D enables parcel to be installed as a development dependency. This means the Parcel package will not be added to your code and shipped to production. Its purely for development purposes.

After this, you should see devDependencies in your package.json with parcel-bundler listed within it

```json
{
  "name": "react-parcel",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "parcel-bundler": "^1.12.4"
  }
}
```

<br />

Now in the root folder (react-with-parcel), create two folders: public and src. Within the public folder, create an index.html file with the follwoing content

<br />

**public/index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React with Parcel</title>
</head>
<body>

    <script src="../src/index.js"></script>
</body>
</html>
```

<br />

This is just a basic HTML file. There's nothing fancy going on in here. Right before the closing body tag, we have a reference to an external script called index.js. We are yet to create this file.

So navigate out of the public folder into the src folder and create the index.js file

<br />

**src/index.js**

```javascript
console.log('Its about to go down!');
```

<br />

Here, we're just console logging a string to make sure out setup works

Now add a start script to your package.json file.

<br />

**package.json**

```json
{
  "name": "react-parcel",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "parcel ./public/index.html",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "parcel-bundler": "^1.12.4"
  }
}
```

<br />

In this script, we're saying whenever we run npm start , we want parcel to locate our index.html file inside our public folder and use that as an entry point for our application. 

Now run


```bash
npm start
```
<br />

You should see a message like this in your terminal

```bash
Server running at http://localhost:1234
√  Built in 1.30s.
```

<br />

Now open your favourite browser and type **http://localhost:1234** in the address bar. Now open your developer tools and check your console out. You should see the log message in the index.js fie.

We're not done yet. this is just the basic Parcel setup. Let's now set it up with React.

<br />

## REACT SETUP WITH PARCEL
This is very quick and easy, so we should be done in no time. You can close the local server now using **Ctrl + C** on Windows or **Command + C** on Mac.

Now install **react** and **react-dom** using npm

```bash
npm i react react-dom
```

<br />

Add a div with an id of root in your index.html file

<br />

**public/index.html**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React with Parcel</title>
</head>
<body>
    <div id="root"></div>
    <script src="../src/index.js"></script>
</body>
</html>
```

<br />

The div placeholder is where our React app will be inserted. With the help of ReactDOM, our React app will be able to hook into the index.html file.

Let's make the following changes to our index.js file

<br />

**src/index.js**

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <h1>Its about to go down</h1>,
    document.getElementById('root')
);
```
<br />

This is a very very minimal React application :joy: . The ReactDOM.render basically takes the h1 and renders it in our div placeholder in the index.html file. Take note that this h1 is not actually HTML but <a href="https://reactjs.org/docs/introducing-jsx.html" target="_blank">JSX</a>. You can read more about it later. Now run npm start and navigate to **http://localhost:1234** . You should see our h1 rendered. Et voila (emoji), that's a basic React setup with Parcel.

However, let's try to set up a folder structure like we would in a real application

This is just an example. You can set your folders and files up anyhow you would like.

In the src folder create the following folders and files:
- **components** : This will house the various components of your site eg. buttons, headers, etc
- **assets**: This could hold stuff like images, videos, audios, etc.
- **pages**: As the name suggests, holds different pages or routes that will be navigated to on your site (provided you have routing setup)
- **App.jsx** : This is the main component that houses other components. this will basically be imported into the index.js files and rendered to our placeholder div in our index.html file
- **App.css** : Contains styles of the App.jsx files. 
    
I'm going to put in some random content into some of these files, but I won't go too much into detail since this is not a React tutorial. You can however learn  more about <a href="https://reactjs.org/" target="_blank">React</a> on their official website.

<br />

**src/pages/home/home.jsx**

```jsx
import React from 'react';
import './home.styles.css';

const Home = () => {
    return (
        <div>
            <h1>This is the home page</h1>
        </div>
    );
};

export default Home;
```

<br />

**src/pages/home/home.styles.css**

```css
h1 {
    font-size: 30px;
    color: darkblue;
}
```

<br />

**src/App.jsx**

```jsx
import React from 'react';
import Home from "./pages/home/home";
import './App.css';

const App = () => {
    return (
        <>
            <Home />
        </>
    );
};

export default App;
```

<br />

**src/App.css**

```css
body {
    box-sizing: border-box;
    background-color: bisque;
}
```

<br />

**src/index.js**

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
```

<br />

All we basically did was create a home components and styled it using the home.styles.css. We then imported this into the App.jsx file. In the App.jsx file, we also import our App.css to make use of our App styles. Finally, we import the App component into the index.js to render our App component to the screen.

That's basically it. We have successfully set up React using Parcel. You can find the code in this Github repo. Until the next post, happy coding! :punch: