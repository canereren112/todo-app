# todo-app


# todo-backend

### Reference Documentation

* Running the Application in local : ./gradlew build && java -jar build/libs/todo-0.0.1.jar
* Docker Build: docker build --build-arg JAR_FILE=build/libs/\*.jar -t              todo-backend-docker .
                docker build -t todo-backend-docker .
* Docker Compose Build : docker-compose build
* Docker Compose Run : docker-compose up
    

# todo-frontend

* Build dist app : ng build

* Build docker : docker build -t webstep/todo-frontend:latest  .

* Docker Run : docker run webstep/todo-frontend:latest

