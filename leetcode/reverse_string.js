// Reverse string in js




function helper(s,l,r) {
    // console.log([s,l,r])
    if (l>=r) {
        console.log(s)
        return
    }
    var temp = s[l]
    s[l]=s[r]
    s[r]=temp
    helper(s,l+1,r-1)
}

function reverseString(s) {
    helper(s,0,s.length-1)

}
reverseString("raju")