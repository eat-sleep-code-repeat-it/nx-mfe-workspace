# Create MFE1 with feature module

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
