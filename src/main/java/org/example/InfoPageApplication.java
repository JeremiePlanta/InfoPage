package org.example;

import io.jexxa.core.JexxaMain;
import io.jexxa.infrastructure.drivingadapter.rest.RESTfulRPCAdapter;

public final class InfoPageApplication
{

    public static void main(String[] args)
    {
        //Create your jexxaMain for this application
        var jexxaMain = new JexxaMain("InfoPage");

        jexxaMain

                // Bind a REST adapter to the BoundedContext
                .bind(RESTfulRPCAdapter.class).to(jexxaMain.getBoundedContext())

                // Bind a REST adapter to class HelloJexxa and expose its methods
                .bind(RESTfulRPCAdapter.class).to(InfoPageApplication.class)

                //Start Jexxa and all bindings
                // - Open following URL in browser to get greetings: http://localhost:7500/HelloJexxa/greetings
                // - You can also use curl: `curl -X GET http://localhost:7500/HelloJexxa/greetings`
                .start()

                //Wait until shutdown is called by one of the following options:
                // - Press CTRL-C
                // - Use `jconsole` to connect to this application and invoke method shutdown
                .waitForShutdown()

                //Finally invoke stop() for proper cleanup
                .stop();
    }
}
