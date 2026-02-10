/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    //[1,0,0,0,1]
    let curr = 0 
    for (let i = 0; i < flowerbed.length; i++) {
        if (curr === n) return true
        if (flowerbed[i]===1 || (flowerbed[i-1]===1)) continue
        if(flowerbed[i+1]===0 || i===flowerbed.length-1){
            flowerbed[i]=1
            curr++
        }
        if (curr === n) return true
    }
    return false
};