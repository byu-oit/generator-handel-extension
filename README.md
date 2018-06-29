# generator-handel-extension
This repository contains a Yeoman generator for creating Handel extensions

# Usage
First, make sure you have Yeoman installed:
```
npm install -g yo
```

Next, install this generator:
```
npm install -g generator-handel-extension
```

Next run the generator:
```
yo handel-extension
```

Answer the series of questions asked by the generator:
```
Welcome to the handel-extension generator!
? Extension name 
? Extension description
? Service type name
```

Once you answer the questions, it will create the files and show output like this:
```
Creating the initial files for the extension
   create package.json
identical .gitignore
   create README.md
   create tsconfig.json
   create tslint.json
   create src/extension.ts
   create src/service.ts
   create test/fake-account-config.ts
   create test/service-test.ts
```
