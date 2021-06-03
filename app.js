let express = require("express");
let app = express();
 
let MovieStore = require('./getMovie');
let datamovie = new MovieStore()

app.get('/movies', function(req, res){
    return res.send(datamovie.getAllData());
})

app.get("/" , (req, res) =>{
    return res.redirect('/movies')
}) 


app.get('/movies/:id/:description', (req,res)=>{
    return res.send(req.params);
})
 

app.listen(4000, () =>{
    console.log("Server start!!!!")
})

///lấy thông tin phim

app.get('/movies/:id', (req,res)=>{    
    const findMovie = datamovie.findFilmById(parseInt(req.params.id));
    if(findMovie.length < 1){
        res.statusCode = 404;
        return res.send({message:"Không tìm thấy id movie"})
    }
    else{
        return res.send(
            findMovie.pop()
        )
    }
})