# mailshooter

## 1. Go to mailshooter.dev and purchase a plan to receive your API-KEY
https://mailshooter.dev

## 2. Install mailshooter
```
npm i mailshooter
```

## 3. Start sending emails
```
const ms = require('mailshooter');

ms({
	apikey: 'YOUR-API-KEY',
	from: 'sender@domain.com',
	to: 'receiver@domain.com',
	subject: 'Hello World',
	html: 'This is my first MailShooter Email!'
}).then(console.log);
```
