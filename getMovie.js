class MovieStore{
    constructor(){
        this.moveData = require('./data.json');
    }
 
    // lấy tất cả phim
    getAllData(){
        return this.moveData;
    }

    findFilmById(id){
        return this.moveData.filter(x => x.id === id);
    }
}

module.exports = MovieStore;