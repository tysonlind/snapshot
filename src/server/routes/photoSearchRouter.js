import express from "express";
import path from "path";
import fetch from "isomorphic-fetch";

const router = express.Router();

router.get("/", (req, res, next) => {
    let { query } = req.query;
    if (!query) {
        // add in functionality for a random query from an array of values so that it's different every time it loads
        query = "nature";
    }

    fetch(`https://api.unsplash.com/search/photos?query=${query}&page=1&per_page=16&client_id=${process.env.API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
        res.send(data.results);
    });
});

router.get("/:id", (req, res, next) => {
    let { id } = req.params;
    fetch(`https://api.unsplash.com/photos/${id}?client_id=${process.env.API_KEY}`)
    .then((res) => res.json())
    .then((data) => res.send(data));
})



export default router;