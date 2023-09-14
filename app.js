const express = require(`express`);
const BodyParser = require(`body-parser`);
const ejs = require(`ejs`);
const _ = require(`lodash`);
const app = express();
const port = 3333;

app.use(BodyParser.urlencoded({extended: true}));
app.use(express.static(`public`));
app.set(`view engine`, `ejs`);


const HomeStartContent = `The Daily Bugle is a fictional New York City tabloid newspaper appearing as a plot element in American comic books 
published by Marvel Comics. The Daily Bugle is a regular fixture in the Marvel Universe, 
most prominently in Spider-Man comic titles and their derivative media. 
The newspaper first appeared in the Human Torch story in Marvel Mystery Comics (April 1941). 
It returned in Fantastic Four (January 1962), and its offices were first depicted in The Amazing Spider-Man (March 1963).`;

const AboutContent = `The Daily Bugle is featured prominently in many Marvel Comics titles, especially those in which Spider-Man is the lead character.
In 1996, a three-issue (black and white) limited series was printed.
Since 2006, Marvel has published a monthly Daily Bugle newspaper reporting on the company's publications and authors. 
Marvel earlier used the newspaper format to promote Marvel's crossover events Civil War and House of M—reporting on storyline events 
as if the comic book Daily Bugle had come to life. Marvel restored this promotional function for the 2007 death of Captain America.`;

const ContactContent = `J. Jonah Jameson, Inc. purchased the Goodman Building on 39th Street and Second Avenue in 1936 and 
moved its entire editorial and publishing facilities there.Now called the Daily Bugle Building, the office complex is forty-six stories tall, 
and is capped by the Daily Bugle logo in 30-foot (9.1 m) letters on the roof. There are loading docks in the rear of the building, 
reached by a back alley. Three floors are devoted to the editorial office of the Bugle and two sub-basement levels to the printing presses, 
while the rest of the floors are rented. (A panel in #105 of The Amazing Spider-Man showed the Bugle building located near a street sign 
at the corner of Madison Avenue and a street in the East Fifties (the second digit was not shown). 
This suggests that the building may have been relocated at some point.)`;

const posts = [];

app.get(`/`, (req, res)=>{
    res.render(`index`, {
        IndexContent: HomeStartContent,
        posts: posts,
    });
});
app.post(`/`, (req, res)=>{
    res.render(`index`,{
    })
});

app.get(`/about`, (req, res)=>{
    res.render(`about`,{
        AboutContent: AboutContent,
    });
});
app.post(`/about`, (req, res)=>{
    res.render(`about`,{
    })
});

app.get(`/contact`, (req, res)=>{
    res.render(`contact`,{
        ContactContent: ContactContent,
    });
});
app.post(`/contact`, (req, res)=>{
    res.render(`contact`,{
    })
});

app.get(`/compose`, (req, res)=>{
    res.render(`compose`,{
    });
});
app.post(`/compose`, (req, res)=>{
    const post = {
        title: req.body.title,
        content: req.body.publish,
    };
    posts.push(post);
    res.redirect(`/`);
});


app.get(`/posts/:PostName`, (req, res)=>{
    const RequestedTitle = _.lowerCase(req.params.PostName);
    posts.forEach(post => {
        const StoredTitle = _.lowerCase(post.title);
        if (StoredTitle === RequestedTitle){
            res.render(`post`, {
                title: post.title,
                content: post.content,
            });
        };
    });
});
app.post(`/posts/:PostName`, (req, res)=>{
})

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
});