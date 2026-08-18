const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let submittedArtworks = [];

app.get("/", (req, res) => {
    res.send("Backend works!");
});

app.post("/submit-art", (req, res) => {
    const artworkData = req.body;
    submittedArtworks.push(artworkData);

    res.json({
        message: "Artwork submitted successfully!",
        received: artworkData
    });
});

app.get("/all-art", (req, res) => {
    res.json(submittedArtworks);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

