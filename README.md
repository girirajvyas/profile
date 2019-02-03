# Table of Contents
 - About Project (Introduction)
 - Pre-requisites and Technology stack
 - How to build and run this project
 - Do It Yourself

# About Project (Introduction)
  This project is build to publish any developer profile. Only thing that is supposed be changed is Json file from which the data is fetched.  
  
# Pre-requisites and Technology stack
  - Angular 6
  - Bootstrap
  - Node/npm
  
  
# How to build and run this project
  clone the project  
  ng build --base-href "https://girirajvyas.github.io/profile/"  
  
# Do It YourSelf  
## Module 1: Set-Up  
**Create repository**    
1. Go to your git hub home (github.com/girirajvyas)   
2. Click on + on top right -> create repository -> profile  

**Create new project**  
1. Go to: D:/sources -> cmd here -> ng new profile --style scss --routing  
2. Wait 7-8 minutes  
3. cd profile  
4. fire commands:  
```cmd
   D:\sources\profile> git remote add origin https://github.com/girirajvyas/profile.git
   
   D:\sources\profile> git push -u origin master
   Username for 'https://github.com': username
   Password for 'https://username@github.com':
   Counting objects: 39, done.
   Delta compression using up to 4 threads.
   Compressing objects: 100% (37/37), done.
   Writing objects: 100% (39/39), 97.17 KiB | 0 bytes/s, done.
   Total 39 (delta 0), reused 0 (delta 0)
   remote:
   remote: Create a pull request for 'master' on GitHub by visiting:
   remote:      https://github.com/girirajvyas/profile/pull/new/master
   remote:
   To https://github.com/girirajvyas/profile.git
	* [new branch]      master -> master
   Branch master set up to track remote branch master from origin.
```

**Publish Project via gh-pages**  
In case you have to publish your code to gh-pages  
 e.g: girirajvyas.github.io/profile   
 
Create a branch at start and delete everything in it so that we can finally deploy the dist folder.  
  ```cmd
  
     git checkout gh-pages (-b if branch not already created)  

     git rm -r *  

     git commit -m "removed everything from gh-pages"    

     git push --set-upstream origin gh-pages  
  ```

**Switch back to master again to work**  
    ```
       git checkout master
    ```
	
**Start project**    
    ```
       ng serve -o
    ```
	
**Test e2e (Protractor)**   
    ```
       ng e2e
    ```
	
**Unit test (Karma)**   
    ```
       ng test
	```   

## Module 2: Externalize configurations 
1. Create config folder -> new file env.js -> declare variable here say envs -> 
   ```
   e.g: var envs = {  
       "APPLICATION_NAME": "profile"  
   }
   ```   
   
2. Go to angular.json -> add "src/config" folder entry in "architect/build/options/assets"  
  (It is mandatory to specify in angular.json any folder other than assets folder, else error when it tries to load env.js)  
  
3. Add "<script src="config/env.js"></script>" in the index.html  

4. Create shared folder in "src/app"-> Create class AppSettings -> Import this env file -> read this env   

5. Use AppSettings across the Application  

## Module 3: Create Timeline component  
   ```
   ng g c timeline
   ```

Info:  
`npm i npm@latest -g` to upgrade your npm version, and then `npm audit`


## Module 4: Create Skills Component  
go to folder:   

npm install chart.js --save
npm install rxjs-compat.js --save

Setup ng-bootstrap  
1. In cmd: npm install --save @ng-bootstrap/ng-bootstrap  
2. In app.module.ts:  
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';  
Imports: [  
	NgbModule.forRoot()  
]  
3. In style.scss: @import url('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css');  
4. TODO: check if importing individually in the component is required or not  

https://ng-bootstrap.github.io/#/components/carousel/api  

References:  
https://www.technouz.com/4772/angular-6-app-structure-with-multiple-modules/  

## Google fire-base  
login  
go to console  
add project**  
Choose Real-time Database  
Create database  
start in test mode  
Enable  
three dots on right -> import Json -> select attachment icon and copy url: eg: https://profile-b3312.firebaseio.com/organizations.json and append json  

http://doctoc.herokuapp.com/  
https://github.com/laravel/docs  
https://appdividend.com/2018/09/12/angular-charts-example-tutorial/  



# Profile

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
