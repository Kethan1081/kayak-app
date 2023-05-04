# kayak-app
Tech Stack: Front end - React js, Backend server - Java(spring boot)

# How to Build and run
 Backend
 1. Requirement - mavan
 2. Navigate to root directory (./kethan-project2) and build project using command (mvn clean install)
 3. Run using command(mvn spring-boot:run)
 4. Port 8080 will now accept requests on localhost:8080
 
 # FrontEnd
 1. Requirement - Node js 
 2. Navigate to root directory (./kethan-project2) and install dependencies using (npm install) command
 3. Run using command (npm start)
 4. React App is not available on localhost:3000 
 
 # Backend Server Description
 1. Aim of this server is to fetch data from Kayak API and transform it into JSON list and supply it for React app.
 2. This can be done in the react app directly but I choose to do it in a backend server to provide scalability options.
 3. Main Components are Airline Object, Airline Controller and Airline service.
 4. When 8080 port is hit the controller will call service class and service class will call Kayak API.
 5. The output is in string format it is parsed into JSON list and returned.
 
 # Front End React Description
 1. For this project the pages are divided into 2 components (Header Coponent (Kayak Logo) + View Component)
 2. As both pages have a common logo the Header Component is reusable.
 3. For View Component I defined 2 routes in App.js (MainComponent.js and DetailsComponent.js).
 4. Maincomponent.js contains airlines list - So it calls port 8080 and fetch entire airline info asyncronously using axios and list them.
 5. DetailsComponent.js is routed form Maincomponent.js using useNavigate() along with airline info using onClick() event.
 
 # Imoportant additions
 1. As the airlines list is very high. I choose to implement pagenation in List view with pagesize 10.
