<!-- PROJECT LOGO -->
<p align="center">


  
  ![image](https://user-images.githubusercontent.com/109315248/216972417-aa75a92f-8e6e-4c6b-8435-4f1871f1e1c0.png)

</p>

  <p align="center">
    frontend
    <br />
  <a href="https://projectconfigurator.pioterandrzejew.repl.co/">View Demo</a>
  </p>
</div>

## Getting started

After cloning the repository and installing dependencies run the app using npm start command. 

  ```sh
  $ git clone https://github.com/PioterAndrzejewski/project_configurator_frontend.git
  $ cd project_configurator_frontend
  $ npm i
  $ npm start
  ```

The back-end repository is [>here<](https://github.com/PioterAndrzejewski/project_configurator_backend)

### Built With

- react,
- SASS,

with help of:
- material ui icons,

And form handling tools:
- chakra UI,
- formik,
- yup,

## About The Project

This is an application for an example architectural office that calculates the initial valuation of a design study.

### Project Aim

The goal was to use in practice programming skills learned from courses and in the same time create application that may be used in practice. This two objectives were leading the way during the whole project development and indicating the features that may be useful and should be created.

The project is valued on the basis of the valuation guidelines - a document promoted by the Association of Polish Architects ("Uchwała nr 70 z dnia 5 kwietnia 2014 r.
Zarządu Głównego Stowarzyszenia Architektów Polskich").

The valuation consists in calculating the appropriate percentage index taking into account:
- the type of building being designed, which defines the complexity category,
- scope and complexity of the project,
- any additions to the project,

The amount of the project fee is based on the total value of the investment and the above percentage.

## UI

The appearance of the application was first designed in Figma

![image](https://user-images.githubusercontent.com/109315248/216726218-f4f0b290-80fb-4453-9d15-9d5a84bfeb3a.png)


### Back-end

Team Manager is full stack app. 

See back-end repo [>Here<](https://github.com/PioterAndrzejewski/project_configurator_backend)

    
 ## Features
 
The front-end single page application allows you to configure a project and send meeting request using following features

 ### home screen

![image](https://user-images.githubusercontent.com/109315248/216977895-b61c3a5b-922e-4da6-9050-9201e8b75b30.png)

![image](https://user-images.githubusercontent.com/109315248/216977929-e7ab9e05-5cb4-42a2-a43c-b3c8d9904e5f.png)

The start page greets the potential customer and encourages action with an animated tagline.
This is also the time for the application to download information from the backend, because all the elements that will be selected later are each time downloaded from the current database. 
 
  ### configure a project
 
![image](https://user-images.githubusercontent.com/109315248/216982963-d0b74753-64ae-49f6-8911-b3205c60fa0e.png)
 
The project configurator allows you to describe the project using:
  - project type,
- budget,
- scope,
- any additives

If the application has enough data, it sends a request to the backend for the current price / visualization.

For visualization you need:
- object type,
- project phase,

![image](https://user-images.githubusercontent.com/109315248/216983955-e2162ee3-e868-4837-8313-223c4b00547b.png)
![image](https://user-images.githubusercontent.com/109315248/216984011-058f7ed1-5ad3-4357-9cf7-2bdcfe8338fd.png)



All information is needed to calculate the price.
![image](https://user-images.githubusercontent.com/109315248/216984108-9a4536a0-c5e5-417f-866a-c7880b7030de.png)


  ### Make a booking

![image](https://user-images.githubusercontent.com/109315248/219855555-c5f70601-3eb6-4f2a-a5ab-ef2171c162e5.png)

With the project details set, you can go to the summary page.

On the left is a summary of your project.
On the right, a short form with validation and the ability to send information to the backend.

![image](https://user-images.githubusercontent.com/109315248/219855629-a76e93cc-f756-4170-88d8-48ee4dea8324.png)


### error handling

![image](https://user-images.githubusercontent.com/109315248/216979719-a5ff4c61-6897-43ff-9031-1f4d494729b4.png)

If there was a connection error with the server, the application informs the user about it, additionally trying to establish this connection every 10 seconds.

 ## Project status
 
 The main core of the application is finished. Is has all the functions that were established at the beginning of the project. The architecture of the application allows to add more features without major interference with the current ones.

## Room for improvement

The main development opportunities are:

- expanding the base with additional options, e.g. for office or industrial construction
- 

