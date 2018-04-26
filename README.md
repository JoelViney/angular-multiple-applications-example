
# Angular 5 Multi Applications Example

This project was created to demonstrate how to create multiple applications within one Angular 5 project. It also shows how to share stuff between multiple applications.

### How to Run the Applications
To run the project use the following command:
> ng serve --app 0 --port 4200

And in another terminal window enter the following command:
> ng serve --app 1 --port 4400

Then navigate to: http://localhost:4200/ and http://localhost:4400/


## Some notes on the Implementation

### Creating a Second Application
1. In order to create a second application you define it in the angular-cli.json file's 'apps' segment, just copy the existing one and change the root and outDir values.

### Shared Components and Data
To create components that can be shared between the two applications is pretty simple. Simply create a folder and start referencing it it from the applications. In the example the folder has been called `/global`.

#### How do I access environment variables in global components?
Accessing environmental variables in global components is problematic as the environments file uses relative paths and is tightly bound to each individual application.

So to get around this wrap the environments in a settings component with a shared i-settings interface and dynamically load them with the settings-factory.

See:
/src/global/settings-factory.ts
/src/global/i-settings.ts
/src/application-a/app/settings.ts
/src/application-b/app/settings.ts
/src/global/settings.component.html
/src/global/settings.component.ts

#### 1. How can global component dynamically load application components?
This became a problem when I wanted shared pages to display the navigation bar of each application. Each application's navigation bar is different.

So in order to load an application's component we use the appComponentFactory which dynamically loads a component based on name.

#### 3. Using Routed Data to Identify the calling Application...
Sometimes a global component will need to know which project loaded it. 

A simple approach to this is to define the router path in each application and then pass through information with ActivatedRoute's data.

See:
/src/global/routed-data-common-page.component.ts
/src/application-a/app/app.module.ts
/src/application-b/app/app.module.ts


See:
/src/global/component-factory-directive.ts
/src/global/routed-data-common-page.component.html
/src/global/routed-data-common-page.component.ts
