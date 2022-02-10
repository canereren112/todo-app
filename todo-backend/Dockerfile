FROM openjdk:11-oracle
ARG JAR_FILE=build/libs/\*.jar
COPY ${JAR_FILE} app.jar
EXPOSE 8088
ENTRYPOINT ["java","-jar","/app.jar"]