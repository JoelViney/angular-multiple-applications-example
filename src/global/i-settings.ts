
/*
  This is a concrete interface for the environment variables used within the application.
  Each project needs to implement a concrete version of this interface which is then loaded by the app-settings-factory.
*/
export interface ISetttings {
  title: string;
}
