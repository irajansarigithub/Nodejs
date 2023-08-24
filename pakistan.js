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

    function Pakistan(agent) {
        console.log(`intent  =>  Pakistan`);
        agent.add("There are five provinces of Pakistan, Sindh, Balochistan, KPK, Punjab, Gilgit- Baltistan.")
    }
    
    function Sindh(agent) {
        console.log(`intent  =>  Sindh`);
        agent.add("Sindh is the second-largest province of Pakistan by population and economy.")
    }
    
    function Punjab(agent) {
        console.log(`intent  =>  Punjab`);
        agent.add("Punjab means the land of five rivers.")
    }
    
    function Balochistan(agent) {
        console.log(`intent  =>  Balochistan`);
        agent.add("Balochistan is the Largest province of Pakistan by area")
    }
    
    function KPK(agent) {
        console.log(`intent  =>  KPK`);
        agent.add("Khyber Pakhtunkhwa is the smallest province of Pakistan by area.")
    }
    
    function GilgitBaltistan(agent) {
        console.log(`intent  =>  GilgitBaltistan`);
        agent.add("Gilgit Baltistan is famous for its landmarks, culture, history, and people, in addition to its mountains. ")
    }
    
    // function sendNotes(agent) {
    //     const { number , date , email} = agent.parameters;
    //    agent.add("")
    // }

    let intentMap = new Map();
    intentMap.set('Pakistan', Pakistan ); 
    intentMap.set('Sindh', Sindh);
    intentMap.set('Punjab', Punjab);
    intentMap.set('Balochistan',  Balochistan);
    intentMap.set('K.P.K', KPK);
    intentMap.set('Gilgit-Baltistan', GilgitBaltistan);
    agent.handleRequest(intentMap);
})
app.listen(PORT, () => {
    console.log(`server is running http://localhost:${PORT}/`);
});