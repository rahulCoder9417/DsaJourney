var TimeLimitedCache = function() {
    this.map = new Map()

};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
   
    let exist = false
    if(this.map.has(key)){
        clearTimeout(this.map.get(key).timeoutId)
        exist=true }
        const timeoutId = setTimeout(()=>{
            this.map.delete(key)
        },duration)
        this.map.set(key,{value,timeoutId})
    return exist
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if(this.map.has(key)){
        return this.map.get(key).value
    }else{
        return -1
    }
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.map.size
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */