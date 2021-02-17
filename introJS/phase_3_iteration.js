
Array.prototype.bubbleSort = function() {
    let sorted = false 

    while (!sorted) {
        sorted = true 

    
        for (let i = 0; i < this.length - 1; i++) {

            

            let next_idx = i + 1

            if ( this[next_idx] < this[i] ) {
                sorted = false 

                this[next_idx], this[i] =  this[i], this[next_idx];

        };

        }; 

        
    };

return this 
};