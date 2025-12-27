// 🔹 Normal SDK banane ke steps
// Step 1: Decide functionality

// SDK kya karega, ye pehle decide karo

// Example:

// Chatbot widget show kare

// Analytics track kare

// Image gallery embed kare

// Step 2: Create SDK folder structure

// Simple structure:

// my-sdk/
//  ├── src/
//  │   └── index.js     <-- SDK ka entry point
//  ├── dist/            <-- Final build files
//  └── package.json     <-- npm project file

// Step 3: Define client config

// Client SDK ko customize kar sake

// Example window.MySDKConfig:

// window.MySDKConfig = {
//   productId: "prod_123",
//   theme: "dark"
// };

// Step 4: Read & validate config

// SDK me read config karo

// Optional: default values set karo

// Mandatory fields check karo

// const config = window.MySDKConfig || {};
// if (!config.productId) throw new Error("productId required");

// Step 5: Inject root container

// SDK DOM me ek div create kare

// Ye UI render karne ke liye placeholder hoga

// const root = document.createElement('div');
// root.id = '__sdk_root__';
// document.body.appendChild(root);

// Step 6: Add core functionality

// Jo SDK ka main kaam hai, wo yahan implement karo

// Example:

// Floating button

// Chat UI

// Analytics event logging

// Step 7: Entry point script

// IIFE (Immediately Invoked Function Expression) use karo

// SDK load hote hi run ho jaaye

// Prevent double initialization:

// (function(){
//   if(window.__SDK_INITIALIZED__) return;
//   window.__SDK_INITIALIZED__ = true;
//   // SDK init code here
// })();

// Step 8: Build / bundle

// SDK ko single JS file me bundle karo (optional)

// Tools: Vite, Rollup, Webpack, Parcel

// Client ko bas <script src="sdk.js"></script> include karna ho

// Step 9: Test & share

// Local HTML page me test karo

// Check console logs, DOM elements

// Share client ko:

// Direct JS file

// Ya hosted CDN URL

// 🔹 Summary Flow

// Client sets config → window.MySDKConfig

// SDK reads config → validates

// SDK injects root container

// SDK renders UI / performs functionality

// Client sees widget / feature working

// Future updates → just replace JS file