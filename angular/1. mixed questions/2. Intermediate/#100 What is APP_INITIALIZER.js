// Interview Answer:

// APP_INITIALIZER is a special injection token in Angular that allows us to run one or more functions during application startup before the app is fully initialized.


// 🔹 What it means (simple)
// It runs before Angular app loads completely
// Used to load required data/config first
// App waits until it finishes


// 🔹 Why we use it
// Load configuration from server 🌐
// Get environment settings
// Check authentication/token
// Preload essential data


// 🔹 Example

// export function loadConfig(configService: ConfigService) {
//   return () => configService.load();
// }

// @NgModule({
//   providers: [
//     {
//       provide: APP_INITIALIZER,
//       useFactory: loadConfig,
//       deps: [ConfigService],
//       multi: true
//     }
//   ]
// })
// export class AppModule {}



// 🔹 How it works
// Angular starts app
// APP_INITIALIZER runs first
// It executes the function (can return Promise/Observable)
// App loads only after completion