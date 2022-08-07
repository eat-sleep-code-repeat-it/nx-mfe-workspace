# Create Host Application

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
`
