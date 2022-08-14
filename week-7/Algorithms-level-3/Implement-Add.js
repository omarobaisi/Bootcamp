const add = function(x, y) {
    if(y) {
        return x + y
    } else {
       return function(y) {
         return x + y
       } 
    }
}

add(2, 5);
add(2)(5);