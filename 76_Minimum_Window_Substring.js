/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const mapOfT = new Map()
    for(i of t){
        mapOfT.set(i,(mapOfT.get(i) ||  0)+1)
    }
    let left=0
    let start=0
    let coun= t.length
    let minLen = Infinity
    for(let right = 0;right<s.length;right++){
        let char = s[right]
        if(mapOfT.has(char)){
            if(mapOfT.get(char)>0)coun--;
            mapOfT.set(char,mapOfT.get(char)-1)
        }
        while(coun === 0){
            if(right - left +1 <minLen){
                minLen = right - left +1
                start = left
            }
            let leftChar = s[left]
            if(mapOfT.has(leftChar)){
                mapOfT.set(leftChar,mapOfT.get(leftChar)+1)
                if(mapOfT.get(leftChar)>0)coun++
            }
            left++
        }
    }
    return minLen === Infinity ? "" :s.substring(start,start+minLen)
}