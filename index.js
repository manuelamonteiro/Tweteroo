import express from 'express';
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let tweetsServer = [
    {
        username: "bobesponja1",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    },
    {
        username: "bobesponja2",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    },
    {
        username: "bobesponja3",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    },
    {
        username: "bobesponja4",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    },
    {
        username: "bobesponja5",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    },
    {
        username: "bobesponja6",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    },
    {
        username: "bobesponja7",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    },
    {
        username: "bobesponja8",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    },
    {
        username: "bobesponja9",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    },
    {
        username: "bobesponja10",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    },
    {
        username: "bobesponja11",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    },
    {
        username: "bobesponja12",
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

    res.status(200).send(lastTweets);
});

app.post("/sign-up", (req, res) => {
    const { username, avatar } = req.body;

    const user = {
        username: username,
        avatar: avatar
    };

    userServer.push(user);

    res.send("OK!");
});

app.post("/tweets", (req, res) => {
    const { username, tweet } = req.body;
    const isUser = userServer.find((object) => object.username === username);

    if (isUser){
        avatar = isUser.avatar;
    }

    const userTweet = {
        username: username,
        avatar: avatar,
        tweet: tweet
    };

    tweetsServer.push(userTweet);

    res.send("OK!");
})

app.listen(5000, () => {
    console.log("Server running in port: 5000");
});