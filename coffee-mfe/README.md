# CoffeeMfe ng-14

```bash

ng new shared-lib --no-create-application
cd shared-lib
ng generate library shared


npm run build
cd dist/shared
npm pack


ng new shell --routing=true --style=css
npm install tailwindcss
npm install shared-0.0.1.tgz
ng add @angular-architects/module-federation  --project shell --port 4200
npm install webpack

ng new mfe-backet --routing=true --style=css
ng add @angular-architects/module-federation  --project mfe-backet --port 4201
npm install webpack
```
