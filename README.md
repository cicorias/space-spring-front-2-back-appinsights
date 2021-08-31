# Overview
The purpose of this solution is to provide a complete front to back implementation of a Spring Boot Application with React as the front end, and fully integrated with Application Insights for Request Tracking through OpenTelemetry support.

## Core Tenets
- Application should be targetted for Spring Boot developers
  - ideally limited React knowledge is needed other than to just start the app and make minor modifications
- Gradle is the default tool for performing builds, assembly, etc.
- An option to run entirely locally using Docker compose or a local kubernetes cluster with Kind or Docker for Desktop
  - When in docker and isolated, ideally use RabbitMQ instead of Azure Event Hubs
  - This should be 100% Spring Boot configuration driven by way of Spring Streams
- Kubernetes deployments provided for Azure Kubernetes Services
- Scripts preferably via Terraform to create base Azure Services such as
  - Resource Groups
  - Cosmos DB
  - Event Hubs
  - Kubernetes Cluster
- There should be near zero direct logging via any logging libraries or TelemetryClient
  - the core goal is to demonstrate the configuration driven no-code telemetry provided
  - unless it's an important part of the feature
- The Application Insights Java Agent model for running is to be used

## Other Tenets
- Tooling is to be centered on Visual Studio Code (primarily) with IntelliJ Community Edition (secondary)
- Only shipping frameworks and libraries are to be used, or Open Source


## Background Informatino

For the existing artifacts, the following is provided on how the base elements were initially bootstrapped

### Generating Spring Boot Site

The primary `site` which hosts the static React Web app components, along with several API endpoints was created using the Spring Boot Starter script.

```bash
curl https://start.spring.io/starter.tgz \
 -d type=gradle-project \
 -d language=java \
 -d platformVersion=2.5.4 \
 -d packaging=jar \
 -d jvmVersion=11 \
 -d groupId=wt.app \
 -d artifactId=website \
 -d baseDir=site \
 -d name=wtappsite \
 -d description="react app with spring boot for application insights" \
 -d packageName=wt.app.website \
 -d dependencies=devtools,lombok,web,data-rest,thymeleaf,security \
 | tar -xzvf -
```

### React Site

The React site was created with the `create-react-app` using `yarn`. Yarn was chosen due to simpler tooling and is the default tooling for the React developers. Generally, this should not matter significantly.

```bash
yarn create react-app
```

### Gradle Plugins

- The [Gradle-node](https://github.com/node-gradle/gradle-node-plugin/blob/master/docs/installation.md) is used to abstract and essentially hide any need to install `yarn, npm, node` during normal running and development.

>NOTE: if there is a need to run the React tools for development (hot load, etc.) through the `react-scripts` then it is suggested to install `node, npm, and yarn` so the scripts can be executed directly; unfortunately, there is an issue with running Gradle and the React development server. A custom task was attempted, and is in the `build.gradle` file for `:site`, however, the processor does not properly handle `SIGINT` for terminating the development server.  No fix is known right now, but there are notes and links in the `build.gradle` file if you want to try to fix it - PR's are welcome.

## Buidling and Running

The following is the easiest way to get up and running with the site using the fake data Service.

```groovy
./gradlew clean build && \
./gradlew deployReactApp && \
./gradlew bootRun TBD -Dspring.boot.profile=development
```
