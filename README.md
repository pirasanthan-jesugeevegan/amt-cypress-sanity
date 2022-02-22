<p align="center">
 <img height="100px" src="https://www.gartner.com/imagesrv/peer-insights/vendors/logos/applitools.svg" />
 VS.
 <img height="100px" src="https://opencollective-production.s3-us-west-1.amazonaws.com/d83d7230-076f-11e8-ade1-411cb407edb2.png" />
 </p>
 <p align="center">
<img height="50px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png" /> 
 <img height="50px" src="https://spectrum.imgix.net/communities/3dd95226-4475-4f9a-8324-a4ac8ffdc4d5/B1Yr0X-oG-sanity_logo.png?w=256&h=256&dpr=2&auto=compress&expires=1642896000000&ixlib=js-1.3.0&s=35812bb7ddf8ad816b75fa959a695da6" />
 <img height="50px" src="https://miro.medium.com/max/7200/1*Jkb_tsMBOvL6wQ8bzldu8Q.png" />
   <img height="50px" src="https://iconape.com/wp-content/files/nn/51529/svg/cucumber.svg" />
  <img height="50px" src="https://cdn.iconscout.com/icon/free/png-256/mocha-1-1175012.png" /> 

 </p>
This is a Proof Of Concept for Intergrating visual testing tool (Applitool & Percy) to Cypress.io & Cucumber.io, Please see below for the Test Case that are automated 

## Background   
The application is a Next.js with Sanity.io, this is an example application uses to demonstrate how we can achive a CI/CD using cypress and cucumber and intergrating visual testing tool. 

## **Test Scenario**:  Nav Function  

| Test Case Number | Test Case |
|--|--|
|TC01| Verify nav contains movie & People |
|TC02| Verify nav link navigate to the right page|
|TC03| Verify user can see actor profile page|

## Install

1.  clone the repo
2.  `npm install` or 	`yarn install`


# Applitools - Branch `applitools`
Applitools intergration can be found on `applitools` branch

During intergrating Applitools, I have listed below the Pros & Cons 

**Pros**:
- AI Technology - Comparess Image by pixals | 99.99% accurate 
- Can be easily customised using config file
- Configuration can be passed as Environment varibale it will help with CI
- Outlines changed CSS for easy debugging 

**Cons**:
- Requires multiple lines of code to achieve visual testing 
- Applitool UI is not great comparied to Percy

## Run tests

**Prerequisites:**
select `applitool` branch
### Headless 
 ##### Run E2E test with Visual testing 

    APPLITOOLS_API_KEY={APPLITOOLS_API_KEY} npm run int-test 

##### Run Only E2E test without Visual testing 

    APPLITOOLS_IS_DISABLED=true APPLITOOLS_API_KEY={APPLITOOLS_API_KEY} npm run int-test


# Percy - Branch `percy`
Percy intergration can be found on `applitools` branch

During Percy Applitools, I have listed below the Pros & Cons 

**Pros**:
- Very easy to intergrate compared to Applitool
- Can be easily customised using config file
- Configuration can be passed as Environment varibale it will help with CI
- Requires only one line of code to capture compared to Applitool requires three lines of code 
- Dashboard UI is better than Applitool 

**Cons**:
- *Did not come across any* 

## Run tests

**Prerequisites:**
select `percy` branch
### Headless 
 ##### Run E2E test with Visual testing 

    PERCY_TOKEN={PERCY_TOKEN} npx percy exec -- cypress run

##### Run Only E2E test without Visual testing 

    PERCY_TOKEN={PERCY_TOKEN} PERCY_ENABLE=0 npx percy exec -- cypress run



## Technology used:

 - Next.js
 - Cypress 
 - Sanity
 - Cucumber
 - Mochawsome
 - Percy
 - Applitools

## DEMO
[Live report - Schedule to run everyday ](https://pirasanthan-jesugeevegan.github.io/amt-cypress-sanity/)
[Live APP ](https://sanity-cypress.netlify.app/)
