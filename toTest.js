import express from "express";
import { engine } from "express-handlebars";
import { marked } from "marked";
import { getMovies, getMovie } from "./movies.js";

const app = express();


app.engine("handlebars", engine({
    helpers: {
        markdown: md => marked(md),
    },
}));
app.set("view engine", "handlebars");
app.set("views", "./templates");

//get all movies from api and render them after handlebars template

app.get('/movies', async (req, res) => {
    const movies = await getMovies(req.params);
    if (movies){
    res.render('home', { movies })
    
    }else{
        app.status(404).render("404");
    }
});

//get specific movie by id from api and render it after handlebars template

app.get('/movies/:movieId', async (req, res) =>{
    // call api with movieId parameter
    const movie = await getMovie(req.params.movieId);
    if(movie){
    res.render("movie", { movie });
    
    }
    else{
        res.status(404).render("404");
    }
});
app.use("/static", express.static("./static"));


export default app;
