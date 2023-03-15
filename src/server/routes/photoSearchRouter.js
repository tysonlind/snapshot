import express from "express";
import path from "path";
import fetch from "isomorphic-fetch";

const router = express.Router();

router.get("/", (req, res, next) => {
    let { query } = req.query;
    if (!query) {
        query = "nature";
    }

    fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=24&client_id=${process.env.API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
        res.send(data.results);
    });
});



export default router;