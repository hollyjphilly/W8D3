Array.prototype.uniq = function() {
    let new_arr = []

    this.forEach(function(el) {
            
        if ( !new_arr.includes(el) ) {
            new_arr.push(el)
        }    
        
    });

    return new_arr
};


Array.prototype.twoSum = function() {
    let new_arr = []

    for ( let i = 0; i < this.length; i++ ) {

        for (let n = 0; n < this.length; n++) {

            if ( n > i && this[i] + this[n] === 0) {
                let pair = [i,n]
                new_arr.push(pair)
            }

        }

    }

    return new_arr

};