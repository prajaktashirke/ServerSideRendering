import React from "react";
import express from "express";
import {renderToString} from "react-dom/server";
import Home from "./client/Components/Home";
import path from "path";
const app = express();
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'))

app.get("/", (req,res) => {
    const content = renderToString(<Home />);

    const html = `
        <html>
        <head></head>
            <body>
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `
    res.send(html);
});

app.listen(3000, () => {
    console.log("listening on port 3000")
})