const grl= require("./generateRandomList")

class SeedRandomList{
    constructor(list) {
        this._seed = [];
    }

    seed(seed){
        let newObj =  {seed:seed,list:null}
        this._seed.push(newObj)
        return this._seed;
    }
    generateRandomList (n,min, max){
        if(!this.hasSeed()){
            return  grl(n,min,max);
        }
        else if(this.hasSeed() && this._seed[0].list === null){
            this._seed[0].list = grl(n,min,max);
            return this._seed[0].list;
        }
        else{
            return this._seed[0].list;
        }
    }


    hasSeed(){
        if(this._seed.length <= 0){
            return false;
        }
        else{
            let flag = true;
            if(!this._seed[0].seed){
                flag = false;
            }
            return flag;
        }
    }
}

module.exports = SeedRandomList;

let newSeedRandomList = new SeedRandomList(3)
console.log(newSeedRandomList.seed(3))
console.log(newSeedRandomList.hasSeed())