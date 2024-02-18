# ReadyTech Frontend Engineer Assessment Submission

Submission for Cameron Topping.<br>

## Installation

To install and run the React project locally, follow these steps:

1. **Install Node.js and Node Package Manager (npm)**<br>
    Node.js and npm are required to run this project. This particular project was created with Node.js v20.11.1

2. **Navigate to the project directory:**<br>
    ```
    cd .\readytech-assessment\
    ```

3. **Install dependencies:**<br>
    ```
    npm install
    ```
    This will install all the necessary dependencies for the project.

4. **Run the Project Locally:**<br>
    ```
    npm start
    ```
    This will run a localhost of the React app. From there, you can see it on your browser by viewing `<http://localhost:3000>`.
    Note your port may be different depending on your settings.

5. **Run the unit tests**<br>
    ```
    npm test
    ```
    This will run the unit tests for the React app, created using Jest.<br>
    Currently, these are limited to testing the inline validation functions.


## Repository <br>

A copy of the repository can be found on my GitHub page. Please feel free to check it out!
```
git clone https://github.com/camTopping/readytech-assessment
```

## Dockerfile<br>

A Dockerfile is also included if you would like to run the project in a container. <br>
Note, Docker Engine will need to be installed on your PC to run this.
```
docker build . -t readytechassessment
docker run -p 3000:3000 readytechassessment
```