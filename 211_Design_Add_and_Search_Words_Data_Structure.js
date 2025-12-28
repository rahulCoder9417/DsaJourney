class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfTheWord = false;
    }
}

var WordDictionary = function () {
    this.root = new TrieNode();
};

WordDictionary.prototype.addWord = function (word) {
    if (word.length === 0) return;
    let node = this.root;
    for (const char of word) {
        if (!node.children[char]) node.children[char] = new TrieNode();
        node = node.children[char];
    }
    node.isEndOfTheWord = true;
};

WordDictionary.prototype.search = function (word) {
    const dfs = (node, idx) => {
        if (idx === word.length) return node.isEndOfTheWord;

        const char = word[idx];

        if (char === ".") {
            for (const child of Object.values(node.children)) {
                if (dfs(child, idx + 1)) return true;
            }
            return false;
        }

        const nextNode = node.children[char];
        if (!nextNode) return false;
        return dfs(nextNode, idx + 1);
    };

    return dfs(this.root, 0);
};
