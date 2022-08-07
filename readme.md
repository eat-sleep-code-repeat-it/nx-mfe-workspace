https://medium.com/tenable-techblog/7-module-federation-sharing-library-code-759ae98f7fc8
# How to Build a Micro Frontend with Webpack's Module Federation Plugin

- https://dev.to/bitovi/how-to-build-a-micro-frontend-with-webpacks-module-federation-plugin-n41
- https://medium.com/tenable-techblog/7-module-federation-sharing-library-code-759ae98f7fc8

```bash

npm install @angular/cli@13.2.3
ng new lunchhome --routing=true --style=less
npm i -D @angular-builders/custom-webpack@13.1.0 
npm i -D webpack@5.68.0
npm i  @tailwindcss/typography@0.5.1
npm i place-my-order-assets@0.2.2 
npm in -D tailwindcss@3.0.19 



ng new restaurant --routing=true --style=less
npm i -D @angular-builders/custom-webpack@13.1.0
npm i -D webpack@5.68.0

ng new orders --routing=true --style=less
npm i -D @angular-builders/custom-webpack@13.1.0
npm i -D webpack@5.68.0


ng new utils-lib --no-create-application
cd utils-lib
ng generate library utils

```