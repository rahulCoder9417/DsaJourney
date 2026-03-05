/**
 * @param {number} n
 * @param {number[][]} edgeList
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var distanceLimitedPathsExist = function(n, edgeList, queries) {
    edgeList.sort((a,b) => a[2] - b[2]);

    let q = queries.map((v,i)=>[v[0],v[1],v[2],i]);
    q.sort((a,b)=>a[2]-b[2]);

    let parent = Array(n).fill(0).map((_,i)=>i);
    
    function find(x){
        if(parent[x]!==x) parent[x]=find(parent[x]);
        return parent[x];
    }
    
    function union(a,b){
        parent[find(a)] = find(b);
    }

    let res = Array(queries.length).fill(false);
    let i=0;

    for(let [u,v,limit,idx] of q){
        while(i<edgeList.length && edgeList[i][2] < limit){
            union(edgeList[i][0], edgeList[i][1]);
            i++;
        }
        if(find(u)===find(v)) res[idx]=true;
    }

    return res;
};