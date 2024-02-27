# Radiant project

This project is built with Vite React.

## Folder Structure in src

src/
│
├── assets/ # This directory houses static assets such as images, and data files.
│ └── data.js # An example data file. This contain example data
│
├── components/ # Contains all the React components. 
│ ├── Navbar.jsx/ # Top of page.
| ├── Body.jsx /# Middle of page
│ └── Footer.jsx /# Bottom of page.
|
|
├── ComponentStyles /# the css pages for the jsx files in component folder 
|
├── Pages /# the main page inside which the the components exist.
| ├── Homepage.jsx
|
├── subcomponents /# this has all the sub parts of the componet folder
| ├── jsx 
|    ├── Bodypart /# this folder holds subcomponents of the Body.jsx
|    ├── Middle_Bodypart /# this has all the bodypart for the midle part of the body in side the bodypart folder
| ├── style /# holds style for the folders
├── utils /# this folder is for some functions that i will use through out the app for multiple times so it is stored here currently it holds the 5 star function
├── App.jsx /# inside this all the pages exist
├── index.css /# this is for the styles i want to apply to all the files this is not something special but it is just for easier navigation
├── main.jsx /# the root folder

## Running the Project Locally

First, install the project dependencies:

```bash
npm install
# or
yarn

Then, you can start the local development server:

npm run dev
# or
yarn dev

Open http://localhost:5000 to view it in the browser. The page will automatically reload if you make changes to the code.

Building for Production
To create an optimized version of the app:

npm run build
# or
yarn build
