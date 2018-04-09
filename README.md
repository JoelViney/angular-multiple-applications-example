
# Angular 5 Multi Applications Example

This was created to demonstrate how to create multiple applications within one Angular 5 project. It also demonstrates how to share components and data between multiple applications.

## How to Run the Applications
To run the project use the following command:
> ng serve --app 0 --port 4200

And in another terminal window enter the following command:
> ng serve --app 1 --port 4400

Then navigate to: http://localhost:4200/ and http://localhost:4400/

## How to Create a Second Application

1. You define the 2nd 2nd application in the angular-cli.json file's 'apps' segment, just copy the existing one and change the root and outDir values.
2.  Done.

## Sharing Components and Data
To create components that can be shared between the applications you can simply create a folder and start referencing it it from your applications. In the example the folder has been called `/global`

#### 1. Global Components Accessing Environment Values...

Chances are your going to need to set values in the environment variables and then access them in the global components. The catch is that the environments file uses relative paths and is tightly bound to the project.

So to get around this we wrap the environments in a settings component with a shared i-settings interface and dynamically load them with the settings-factory.

See:
[/global/settings-factory.ts](../../global/settings-factory.ts)
[/global/i-settings.ts](../../global/i-settings.ts)
[/application-a/app/settings.ts](../../application-a/app/settings.ts)
[/application-b/app/settings.ts](../../application-b/app/settings.ts)
[/global/settings.component.html](../../global/settings.component.html)
[/global/settings.component.ts](../../global/settings.component.ts)


#### 2. Using Routed Data to Identify the calling Application...

Sometimes a global component will need to know which project loaded it. 

A simple approach to this is to define the router path in each application and then pass through information with ActivatedRoute's data.

See:
[/global/routed-data-common-page.component.ts](../../global/routed-data-common-page.component.ts)
[/application-a/app/app.module.ts](../../application-a/app/app.module.ts)
[/application-b/app/app.module.ts](../../application-b/app/app.module.ts)

#### 2. Global Components Dynamically Loading Application Components...

In order for global components to load a component from the application we use the appComponentFactory which dynamically loads a component based on name. 
This means that we can pass through components like the navbar to shared pages that live in the global section of the application.

See:
[/global/component-factory-directive.ts](../../global/component-factory-directive.ts)
[/global/routed-data-common-page.component.html](../../global/routed-data-common-page.component.html)
[/global/routed-data-common-page.component.ts](../../global/routed-data-common-page.component.ts)
