const dialogflow = require('@google-cloud/dialogflow');
const { WebhookClient, Suggestion } = require('dialogflow-fulfillment');
const express = require("express")
const cors = require("cors");

const app = express();
app.use(express.json())
app.use(cors());

const PORT = process.env.PORT || 8080;

app.post("/webhook", async (req, res) => {
    var id = (res.req.body.session).substr(43);
    console.log(id)
    const agent = new WebhookClient({ request: req, response: res });

    function hi(agent) {
        console.log(`intent  =>  hi`);
        agent.add("hi there, this is Iraj Ansari")
    }
    function sendNotes(agent) {
        console.log(`intent  =>  sendNotes`);
        agent.add("courses are available, select any one")
    }
    function Mathematics(agent) {
        console.log(`intent  =>  Mathematics`);
        agent.add("XI year mathematics notes are available, you can solve the problems by clicking")
    }
    function Physics(agent) {
        console.log(`intent  =>  Physics`);
        agent.add("XI year physics notes are available")
    }
    function Chemistry(agent) {
        console.log(`intent  =>  Chemistry`);
        agent.add("XI year chemistry notes are available")
    }
    // function sendNotes(agent) {
    //     const { number , date , email} = agent.parameters;
    //    agent.add("")
    // }

    let intentMap = new Map();
    intentMap.set('Default Welcome Intent', hi ); 
    intentMap.set('Courses', sendNotes);
    intentMap.set('Mathematics', Mathematics );
    intentMap.set('Physics', Physics);
    intentMap.set('Chemistry', Chemistry);
    agent.handleRequest(intentMap);
})
app.listen(PORT, () => {
    console.log(`server is running http://localhost:${PORT}/`);
});