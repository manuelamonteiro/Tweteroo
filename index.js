import express from 'express';
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let tweetsServer = [
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    }
];

let userServer = [];
let avatar;

app.get("/tweets", (req, res) => {
    let lastTweets = [];
    let lastsPositions = tweetsServer.length - 10;

    if (tweetsServer.length < 10) {
        lastTweets = tweetsServer;
    } else {
        lastTweets = tweetsServer.slice(lastsPositions);
    }

    res.status(200).send(lastTweets.reverse());
});

app.post("/sign-up", (req, res) => {
    const { username, avatar } = req.body;

    if (!username || !avatar) {
        res.status(400).send({ message: "Todos os campos são obrigatórios!" });
        return;
    };

    const isUserExists = userServer.find((user) => user.username === username);

    if (isUserExists) {
        res.status(409).send({ message: "O usuário já existe." });
        return;
    };

    const user = {
        username: username,
        avatar: avatar
    };

    userServer.push(user);

    res.status(201).send({ message: "OK!" });
});

app.post("/tweets", (req, res) => {
    const { username, tweet } = req.body;
    const isUser = userServer.find((object) => object.username === username);
    
    if (isUser){
        avatar = isUser.avatar;
    }

    if(!username || !tweet){
        res.status(400).send("Todos os campos são obrigatórios!");
        return;
    }

    const userTweet = {
        username: username,
        avatar: avatar,
        tweet: tweet
    };

    tweetsServer.push(userTweet);

    res.status(201).send("OK!");
});

app.listen(5000, () => {
    console.log("Server running in port: 5000");
});