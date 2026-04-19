// 👉 One-Line Interview Answer:
// Environment-specific builds in Angular allow us to use different configurations (like API URLs, flags) for different environments such as development and production using file replacements during build.

// 🔥 What are Environment-Specific Builds?

// 👉 In simple words:
// They allow us to run the same app with different settings for different environments.


// 🔹 Example Environments
// Development (dev)
// Production (prod)
// Testing (qa)


// 🔹 Environment Files
// // environment.ts (development)
// export const environment = {
//   production: false,
//   apiUrl: 'http://localhost:3000'
// };
// // environment.prod.ts (production)
// export const environment = {
//   production: true,
//   apiUrl: 'https://api.live.com'
// };



// 🔥 How Angular Uses Them

// 👉 Angular replaces files during build


// "fileReplacements": [
//   {
//     "replace": "src/environments/environment.ts",
//     "with": "src/environments/environment.prod.ts"
//   }
// ]



// 🔹 Usage in Component/Service

// import { environment } from 'src/environments/environment';

// console.log(environment.apiUrl);





// 🔹 Build Commands
// Development
// ng serve
// Production
// ng build --configuration=production