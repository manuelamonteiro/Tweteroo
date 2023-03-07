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

app.get("/tweets", (req, res) => {
    let lastTweets = [];
    let lastsPositions = tweetsServer.length - 10;

    tweetsServer.forEach((tweet) => {
        const { avatar } = userServer.find((user) => user.username === tweet.username);
        tweet.avatar = avatar;
    });

    if (tweetsServer.length < 10) {
        lastTweets = tweetsServer;
    } else {
        lastTweets = tweetsServer.slice(lastsPositions).reverse();
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
    const { user } = req.headers;
    const { tweet } = req.body;

    if (!user || !tweet) {
        res.status(400).send({ message: "Todos os campos são obrigatórios!" });
        return;
    };

    const userTweet = {
        username: user,
        tweet: tweet
    };

    tweetsServer.push(userTweet);

    res.status(201).send({ message: "OK!" });
});

app.listen(5000, () => {
    console.log("Server running in port: 5000");
});