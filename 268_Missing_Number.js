    /**
    * @param {number[]} nums
    * @return {number}
    */
    var missingNumber = function(nums) {
        let xor1=0,xor2=0
        for(let i of nums){
            xor1^=i
        }
        for(let i=1;i<=nums.length;i++){
            xor2^=i
        }
        return (xor1^xor2)
    };