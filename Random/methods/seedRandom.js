const sr = require("./selectRandom")

class SeedRandom{
    constructor(num = {}) {
        this._seed = num ;
    }

    seed(num){
        if(!this._seed){
            this._seed  = num
        }
    }

    choice(list){
        if(this._seed._choice){
            return this._seed._choice
        }
        else{
            this._seed._choice = sr(list);
            return this._seed._choice;
        }
    }

}

module.exports = SeedRandom