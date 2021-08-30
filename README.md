# Overview


## Generating Spring Boot Site

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


