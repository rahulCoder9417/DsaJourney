/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let l =0
  let r= height.length -1
  let max=0
  while(l<r){
    let a =Math.min(height[r],height[l])
    let area = a*(r-l)
    max=Math.max(area,max)
    if(height[l]<height[r]){
      l++
    }else{
      r--
    }
  }  
  return max
};