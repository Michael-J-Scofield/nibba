# Nibba.js

Convert normie text to ni🅱️🅱️a text

## Installation
```
npm install nibba
```
## Usage

### From the command line
Run the nibba.js from where you have it installed.
```
./nibba.js 'Is the big mac machine fixed?'
```
Tha result:
```
Is the 🅱️ig Ma🅱️ ma🅱️ine fixed?
```
### As node.js module
```javascript
var nibba = require('nibba');

console.log(nibba.convert('Is the big mac machine fixed?')); //Is the 🅱️ig Ma🅱️ ma🅱️ine fixed?
```

### Optional arguments

- mockify (default set to false)

*Example*
```javascript
nibba.convert('Is the big mac machine fixed?', mockify = true); //Is tHe 🅱️Ig mA🅱️ mA🅱️HiNe fIxEd?
```
