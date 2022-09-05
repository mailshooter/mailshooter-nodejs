# mailshooter

## 1. Go to mailshooter.dev and purchase a plan to receive your API-KEY
https://mailshooter.dev

## 2. Install mailshooter
```
npm i mailshooter
```

## 3. Start sending emails
```
const mailshooter = require('mailshooter');

const sendmail = async ({ email, subject, html }) => {
	const response = await mailshooter({
		apikey: 'YOUR-API-KEY',
		email, subject, html
	})
	console.log(response);
}

sendmail({
	email: 'receiver@domain.com',
	subject: 'Hello World',
	html: '<b>Hello World</b><br/>This is my first email sent with mailshooter.dev!'
})
```
