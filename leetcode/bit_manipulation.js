// Bit manipulation in javascript

class BitManipulate{
    constructor(){
        this.binary = []
    }
    toBinary(num){
        if(num==1){
            this.binary.push(1)
            console.log(this.binary.reverse())
            return;
        }else{
        var calc = num % 2
        var divide = num/2
        if (calc==0){
            this.binary.push(0)
            this.toBinary(divide)
            return
        }else{
            this.binary.push(1)
            this.toBinary(Math.floor(divide))
        }
    }
    }
}
const bit = new BitManipulate;
bit.toBinary(5)
