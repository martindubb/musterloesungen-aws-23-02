const express = require('express');
const app = express();


// host und port festlegen
const host = "127.0.0.1";
const port = 3000;


// http statuscodes
app.all('/status', (req, res) => {
    // status explizit setzen, nicht zwingend notwendig
    res.status(200);
    res.send();
});

app.all('/status/:code', (req, res) => {
    let c = parseInt(req.params.code);
    res.status(c);
    res.send();
});

// robots
app.get('/robots', (req, res) => {
    let txt = `
    User-agent: Googlebot
    Disallow: /nogooglebot/ 

    User-agent: Bingbot
    User-agent: yandexbot
    Disallow: /

    User-agent: *
    Disallow: *.jpg
    `;
    res.send(txt);
});

// random-text
app.get('/random', (req, res) => {
    const texts = ["Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.",
    "It's urgent, but we don't have time in the next two years to test it, but we must prioritize it. At least we don't need to obfuscate it. You must rethink the whole process. We will give you a slice of pizza if you finish the code until yesterday. Make it pop remember, the entirety is equal or better. We must build a queue system to ensure it gets the data from our API so this will result in a delay. How does this indicator should look? Also please answer to question from the next mail. Kind reminder. Please inform us where we are on this. After the release, we will need to test it individually. This was the last time when you are allowed to promote something urgent in the production when you was asked for.",
    "Dropping the production database is the best coffee in the morning. Also, if you don't have a backup it will work well. We don't want a backup, it in no way is going down! We must start to do it in this way. Did you develop on production code using the UAT Database? This is the method that we choose. I don't believe we talked about the same thing. We must check Jira and you must put everything there, even tasks that you didn't do. We exceed the client's expectancies, but he fired us. Put everything on git. Why this password is encrypted, how I can use it? We will not update any information received from you, so you will be the master of the data. Please create an extra line in the source code file with a comment contends.",
    "The most important part of the workday is lunchtime. I don't see your task in Jira so that means you didn't work in this sprint. Can we attempt some other colors maybe just do what you think? I agree with you, yet desires to be smoother can you are making it appear like this clipart I created nor are we able to have any other option, for making it look like Spotify, or I want you to take it to the next level. I don't believe that you did some unit tests. Send me the password in plain text on email. Hurry up! Let's do the Secret Santa Party in November. The client said that he just want a website to generate data, nothing more, now he told us what he means is a website like Facebook."];
    let r = Math.floor(Math.random() * 4);
    res.send(texts[r]);
});


// starte den server
app.listen(port, host, () => {
    console.log(`Server ready at http://${host}:${port}`);
});