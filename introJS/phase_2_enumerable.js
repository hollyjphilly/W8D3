Array.prototype.myEach = function(callback) {

    for (let i = 0; i < this.length; i++) {
        callback(this[i], i)
    };

};


Array.prototype.myMap = function(callback) {
    let new_arr = []

    this.myEach( function (el, i) {
        new_arr.push(callback(el))
    });

    return new_arr
    // console.log(new_arr) 

};


Array.prototype.myReduce = function(callback, initialValue) {
    if (initialValue === undefined) {
        let acc = this[0]

        this.slice(1).myEach(function (el, i) {
            acc = callback(acc, el)
        });
        return acc
    } else {
        let acc = initialValue

        this.myEach(function (el, i) {
            acc = callback(acc, el)
        });
        return acc
    }
}






