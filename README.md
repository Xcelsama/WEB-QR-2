ℹ️DOESN'T WORK ON ALL BOTS.. 
##  
STILL WORKING ON
[![BAT-MD](https://i.ibb.co/ssWTfH4/89c8d44eae2dd5f00cd18989c95387096bcf64e8.gif)](https://wa.me/2347045035241)
<h1 align="center">  🕸𝐖𝐄𝐁-𝐐𝐑-𝟐🕸
</p>

<h1 align="center"> WEB BASED MULTIDEVICE QR </h1>

  <html>
   <body>
  <p align="center">  
  <a aria-label="FORK" href="https://github.com/Xcelsama/Web-Qr/fork" target="_blank">
    <img alt="License: GPL-3" src="https://img.shields.io/github/stars/Xcelsama/Web-QR-2?style=social" target="_blank" />
  </a>
  
     
  </body>
</html>


## Deployment Methods
---
1.  ***Click [`FORK`](https://github.com/Xcelsama/Web-QR-2/fork) and `Star ⭐ Repository` if you get help from repo.***
2.  ***Deploy on [`HEROKU`](https://dashboard.heroku.com/new?template=https://github.com/Xcelsama/Web-QR-2).***
3.  ***Deploy on [`REPLIT`](https://replit.com/github/Xcelsama/Web-QR-2).***
4. ***Deploy on [`RENDER`](https://dashboard.render.com/login).***
```
RENDER PROCESS:
    1: Click "NEW".
    2: Select "Web Service".
    3: Click "Build and deploy from a Git repository".
    4: Now Choose this forked git repo from list.
    5: And JUST CLICK "Connect". 
```




- Dependencies
```sh
    "@hapi/boom": "^10.0.1",
    "@whiskeysockets/baileys": "6.5.0",      
    "pino": "^8.1.0",
    "express": "^4.18.2",
    "qrcode": "latest"
```


- WASocket Options
```js
    let Smd =SuhailWASocket({ 
        printQRInTerminal: false,   // make it false if you're using web
        logger: pino({ level: "silent" }),     // make it silent to prevent baileys buffering
        browser: Browsers.baileys("Desktop"),  // awailable browsers : ubuntu, macOS, baileys.
        auth: state 
    });
```



- Getting Session in BASE64
```js
    let CREDS = fs.readFileSync(__dirname + '/auth_info_baileys/creds.json')
    var Scan_Id = Buffer.from(CREDS).toString('base64')    // converting into Base64 ---- IMPLEMENT ACCOEDING TO YOUR NEED
    // res.json({status:true,Scan_Id })
```




- Environment variable
```js
    const PORT = process.env.PORT ||  5000
    const MESSAGE = process.env.MESSAGE || "Don't Provide your session id to someone!" 
    //   Set Confirmation Message According to your need! 
```









## Owner
[![Xcelsama](https://github.com/Xcelsama.png?size=300)](https://github.com/Xcelsama)
