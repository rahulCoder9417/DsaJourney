class TrieNode{
    constructor(){
        this.children ={}
    this.isEndOfTheWord=false
    }
}
var Trie = function (){
    this.root = new TrieNode()
}
Trie.prototype.insert = function(word){
    if(word.length===0) return
    let node = this.root
    for (const i of word) {
        if(!node[i])node[i]=new TrieNode()
        node = node[i]
    }
    node.isEndOfTheWord = true
    return
}
Trie.prototype.search = function(word){
    if(word.length===0) return true
    let node = this.root
    for (const i of word) {
        if(!node[i])return false
        node = node[i]
    }
    return node.isEndOfTheWord
}
Trie.prototype.startsWith = function(prefix){
    if(word.length===0) return true
    let node = this.root
    for (const i of prefix) {
        if(!node[i])return false
        node = node[i]
    }
    return (!node.isEndOfTheWord || Object.keys(node.children).length!==1)
}

