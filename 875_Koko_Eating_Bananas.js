/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    function getH(speed) {
        return piles.reduce((acc, bananas) => acc + Math.ceil(bananas / speed), 0);
    }

    let min = 1, max = Math.max(...piles);
    let res = max; 

    while (min <= max) {
        let mid = Math.floor((min + max) / 2);
        let cH = getH(mid);

        if (cH <= h) {
            res = mid;    
            max = mid - 1;  
        } else {
            min = mid + 1;  
        }
    }

    return res;
};
