# Radiant project

This project is built with Vite React.

[Live site](https://simple-website-ltwf.onrender.com/)

## Folder Structure in src

.  
├── src/  
│   ├── assets/ # This directory houses static assets such as images, and data files.  
│   │   └── data.js # An example data file. This contain example data.  
│   ├── components/ # Contains all the React components.  
│   │   ├── Navbar.jsx # Top of page.  
│   │   ├── Body.jsx # Middle of page.  
│   │   └── Footer.jsx # Bottom of page.  
│   ├── ComponentStyles/ # The CSS pages for the JSX files in component folder.  
│   ├── Pages/ # The main page inside which the components exist.  
│   │   └── Homepage.jsx  
│   ├── subcomponents/ # This has all the sub parts of the component folder.  
│   │   ├── jsx/  
│   │   │   ├── Bodypart/ # This folder holds subcomponents of the Body.jsx.  
│   │   │   └── Middle_Bodypart/ # This has all the bodypart for the middle part of the body inside the Bodypart folder.  
│   │   └── style/ # Holds style for the folders.  
│   ├── utils/ # This folder is for some functions that will be used throughout the app multiple times, so it is stored here. Currently, it holds the 5-star function.  
│   ├── App.jsx # Inside this, all the pages exist.  
│   ├── index.css # This is for the styles to apply to all the files. This is not something special but it is just for easier navigation.  
│   └── main.jsx # The root folder.  
└── README.md # Add a README file for project description.  



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

Open http://localhost:5173 to view it in the browser. The page will automatically reload if you make changes to the code.

Building for Production
To create an optimized version of the app:

npm run build
# or
yarn build
