import { registerApplication, start } from "single-spa";
// import {
//   constructApplications,
//   constructRoutes,
//   constructLayoutEngine,
// } from "single-spa-layout";
// import microfrontendLayout from "./microfrontend-layout.html";

// const routes = constructRoutes(microfrontendLayout);
// const applications = constructApplications({
//   routes,
//   loadApp({ name }) {
//     return System.import(name);
//   },
// });
// const layoutEngine = constructLayoutEngine({ routes, applications });

// applications.forEach(registerApplication);
// layoutEngine.activate();

registerApplication({
  name: '@header/header',
  app: () => System.import('@header/header') as any,
  activeWhen: '/'
})

registerApplication({
  name: '@portal/portal',
  app: () => System.import('@portal/portal') as any,
  activeWhen: '/'
})

start({urlRerouteOnly: true});
