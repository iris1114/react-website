# Secret Cake

A bakery website that can create your own custom greeting cards and send to your loved ones.

## demo 
https://secret-cake.netlify.app/

## issue
- Airtable API has a rate limit of 5 requests per second, per base.
- When an app on Heroku has only one web dyno and that dyno doesn't receive any traffic in 1 hour, the dyno goes to sleep.it means app will take some time (around 5–10 seconds) to wake up.
