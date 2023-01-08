import express from "express";
import renderer from "./helpers.js/renderer"
const app = express();
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'))

app.get("*", (req,res) => {
    res.send(renderer(req));
});

app.listen(3000, () => {
    console.log("listening on port 3000")
})