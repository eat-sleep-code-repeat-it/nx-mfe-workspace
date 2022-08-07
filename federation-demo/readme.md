# How to create mfe with module federation


## Create MFE1 with feature module

1. Create mfe1 application and home component

```js
ng new mfe1 --routing=true --style=css 
ng g c home
ng serve mfe1

```

2. Create a new feature module mfefeature and a component under the feature module

```js
ng g m mfefeature --routing
ng g c mfefeature

```

3. Add the route to the mfefeature component in the mfefeature-routing.module.ts

```js
const routes: Routes = [
  {
    path: '',
    component: MfefeatureComponent
  }
];
```

4. Change App routing

```js
const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'mfe1',
    loadChildren: () => 
      import("./mfefeature/mfefeature.module").then((m) => m.MfefeatureModule),
  },
];
```

5. Change home.component.html

```js
<p>home in MFE1 works!</p>
```

6. app.component.html

```js
<h1> MFE1 Landing Page </h1>
<a routerLink="/" > Home</a>&#160;
<a routerLink="/mf11" > MFE1</a>
<router-outlet></router-outlet>
```

7. run mfe1

```bash
ng serve mfe1
```

8. Add Webpack and Module Federation

```bash
ng add @angular-architects/module-federation --project mfe1 --port 5000
npm install  webpack
```

9. update webpack.config.js

```js
        // For remotes (please adjust)
        name: "mfe1",
        filename: "mfe1remoteEntry.js",
        exposes: {
            './MfefeatureModule': 'src/app/mfefeature/mfefeature.module.ts',
        },  
```

10. run mfe1

```bash
ng serve mfe1
```

## Create Host Application

1. Create host application

```js
ng new host --routing=true --style=css 
ng g c home
ng serve host
ng add @angular-architects/module-federation --project host --port 4200
npm install  webpack
```

2. Update app-routing.module.ts

```js
const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    pathMatch: 'full'    
  }
];
```

3. Update app.component.html
```js
<h1> Angular MFE Host</h1>
<router-outlet></router-outlet>
```

4. run host
```bash
ng serve host
```

5. Add federation

```bash
ng add @angular-architects/module-federation --project host --port 4200
```

6. update webpack.config.js

```js
        // For hosts (please adjust)
        remotes: {
          "mfe1": "http://localhost:5000/mfe1remoteEntry.js",
        },
```
7. Lazy loading in  app-routing.module.ts

create 'decl.d.ts' under app/, and put the following in it.
```js
declare module 'mfe1/MfefeatureModule'
```

8. Add route to mfe1 in app.component.html, make the following changes

```js
<h1>Angular MFE Host</h1>
<a routerLink='/'>Main</a> &#160;
<a routerLink='/mfe1'>Link to MFE</a>
<router-outlet></router-outlet>
```

## run both host and mfe1

```bash
ng serve mfe1
ng serve host

```

## reference

- https://dev.to/sbhuvane/micro-frontend-in-angular-using-module-federation-31om
- https://github.com/manfredsteyer/module-federation-plugin-example
- https://www.npmjs.com/package/webpack
- https://itnext.io/what-to-expect-from-angular-14-in-2022-is-micro-frontend-coming-7932566f773