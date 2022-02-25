# InfoPage version 1.0  WORK IN PROGRESS
### Author: Jérémie Planta                                                                                          
Source: https://github.com/JeremiePlanta/InfoPage/

InfoPage ist eine mit dem Jexxa Framework entwickelte applikation die eine Webseite zur verfügung stellt in der Informationen zur Konfiguration von Anwendungen
zur verfügung gestellt werden(z.B Versionsnummer).
 
### Anforderungen

* Entwicklungsumgebung mit Maven Support (z.B. IntelliJ)
         
## Compilieren und Starten der Anwendung
```
mvn clean install
java -jar target/InfoPage-jar-with-dependencies.jar 
```
Folgende Ausgabe sollte erscheinen:
```
[main] INFO io.jexxa.core.JexxaMain - 2022-02-02 07:05 4.1.0; built: Jexxa-Core; vcs: scm:git:https://github.com/repplix/Jexxa.git/jexxa-core;
[main] INFO io.jexxa.core.JexxaMain - Start BoundedContext 'InfoPage' with 1 Driving Adapter
[main] INFO io.javalin.Javalin - Starting Javalin ...
[main] INFO io.javalin.Javalin - You are running Javalin 4.3.0 (released January 13, 2022).
[main] INFO org.eclipse.jetty.server.Server - jetty-9.4.44.v20210927; built: 2021-09-27T23:02:44.612Z; git: 8da83308eeca865e495e53ef315a249d63ba9332; jvm 11.0.1+13
[main] INFO org.eclipse.jetty.server.AbstractConnector - Started ServerConnector@6a01e23{HTTP/1.1, (http/1.1)}{0.0.0.0:7500}
[main] INFO org.eclipse.jetty.server.Server - Started @1434ms
[main] INFO io.javalin.Javalin - Listening on http://0.0.0.0:7500/
[main] INFO io.javalin.Javalin - Javalin started in 285ms \o/
[main] INFO io.jexxa.infrastructure.drivingadapter.rest.RESTfulRPCAdapter - OpenAPI documentation available at: http://0.0.0.0:7500/swagger-docs
[main] INFO io.jexxa.core.JexxaMain - BoundedContext 'InfoPage' successfully started in 1.249 seconds

```