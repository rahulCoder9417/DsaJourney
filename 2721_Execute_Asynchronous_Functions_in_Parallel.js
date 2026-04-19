/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve,reject)=>{
        let result = new Array(functions.length)
        let comp = 0
        functions.forEach((f,index)=>{
            f()
            .then(
                (res)=>{
                    result[index] = res;
                    comp++
                    if(comp===functions.length){
                        resolve(result)
                    }
                }
            )
            .catch(reject)
        })
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */