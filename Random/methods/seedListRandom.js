const selectNRandom  = require('./selectNitem')
class SeedListRandom{
    constructor() {
        this._seed = null;
    }

    seed(num){
        if(this._seed.num  != num){
            this._seed = {num};
        }
    }

    choice(N, list) {
        if(this._seed.choice ){
            return this._seed.choice
        }
        else{
            this._seed.choice = selectNRandom(list,n)
        }
    }
}