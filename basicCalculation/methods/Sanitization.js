class Sanitization{
    static checkIfNumber(a){
        let check = new Promise(function(resolve, reject){
            if (typeof a === 'number') {
                resolve(true)
            }
            else{
                reject(new TypeError('Not a Number'))
            }
        })
        return check;
    }

    
}

module.exports = Sanitization;