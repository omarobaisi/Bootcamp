class UniqueArray {
    constructor() {
        this.array = []
    }
    add(item) {
        let exist = false
        this.array.forEach(element => {
            if(this.exists(item)) {
                exist = true
            }
        })
        if(!exist) {
            this.array.push(item)   
        }
    }
    showAll() {
        return this.array;
    }
    exists(item) {
        let exist = false
        this.array.forEach(element => {
            if(element === item) {
                exist = true
            }
        })
        return exist
    }
    get(index) {
        for(let i=0; i<this.array.length; i++) {
            if(i === index) {
                return this.array[index]
            }
        }
        return -1
    }
}

const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.exists("toy") //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"