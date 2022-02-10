# Getting Started

### Reference Documentation
For further reference, please consider the following sections:

* Running the Application in local : ./gradlew build && java -jar build/libs/todo-0.0.1.jar
* Docker Build: docker build --build-arg JAR_FILE=build/libs/\*.jar -t todo-backend-docker .
                docker build -t todo-backend-docker .
* Docker Run :  docker run todo-backend-docker

* Postgresql  path : /Users/canereren/Library/Application Support/Postgres/var-14

Mongodb Database
* configuration file
  
        /usr/local/etc/mongod.conf
        /opt/homebrew/etc/mongod.conf
    
* log directory 
  
        /usr/local/var/log/mongodb
        /opt/homebrew/var/log/mongodb
    
* data directory 
                
        /usr/local/var/mongodb 
        /opt/homebrew/var/mongodb

* To run MongoDB (i.e. the mongod process) as a macOS service, run:

        brew services start mongodb-community@5.0

To stop a mongod running as a macOS service, use the following command as needed:

        brew services stop mongodb-community@5.0


