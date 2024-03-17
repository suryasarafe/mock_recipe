# json-generator-api [![Netlify Status](https://api.netlify.com/api/v1/badges/519507f5-0375-43bc-a360-bc0051ae6216/deploy-status)](https://app.netlify.com/sites/saerecipe/deploys)
make mock api for make recipe page

## Usage
do `npm install` then run the app then open
`http://localhost:3000/costum?count=1`

## URL
created with 2 url
- /list
- /costum

the list url is static, the costum have params keys that can be configurable example:

 `http://localhost:3000/costum?count=1&keys=id,title`

 this only get the id and title, more params in response or in the code,
