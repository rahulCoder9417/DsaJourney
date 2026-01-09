/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */

function adjList(n, flights) {
    const adj = Array.from({ length: n }, () => []);
    for (let [u, v, price] of flights) {
      adj[u].push([v, price]);
    }
    return adj;
  }
  
  var findCheapestPrice = function (n, flights, src, dst, k) {
        
      let adjlist=adjList(n,flights)
  
      if(adjlist[src].length==0) return -1
  
      let distance=Array(n).fill(Infinity);
  
      distance[src]=0;
  
      let q=[];
  
      q.push([src,0,0]);
  
      let steps=0;;
  
  
      while (q.length && steps<=k) { 
  
              let [node, cost,steps] = q.shift();
  
              if(steps>k) break;
  
              for (let [next, price] of adjlist[node]) {
                  if (cost + price < distance[next]) {
                      distance[next] = cost + price;
                      q.push([next, distance[next],steps+1]);
                  }
              }
      
      }
  
  
      return distance[dst] === Infinity ? -1 : distance[dst];
  
  };