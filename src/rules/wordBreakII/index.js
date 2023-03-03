/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    let trie = new Trie();
    
    for(let word of wordDict){
        trie.add(word);    
    }
    
    let trieRoot = trie.root;
    let queue = [{ idx: 0, str: '' }];
    let result = [];
    
    while(queue.length){
        
        let {idx, str} = queue.shift();
        
        if(idx === s.length){
            result.push(str);
        }
        
        let st = '';
        
        while(s[idx] in trieRoot.children){
            
            trieRoot = trieRoot.children[s[idx]];
            
            st += trieRoot.value;
            
            if(trieRoot.isEnd){
                let newStr = str !== '' ? `${str} ${st}` : st;
                queue.push({str: newStr, idx: idx + 1});
            }
            
            idx++;
            
        }
        
        trieRoot = trie.root;
    }
    
    return result;
};

class TrieNode {
    constructor(val){
        this.value = val;
        this.children = {};
        this.isEnd = false;
    }
}


class Trie {
    constructor(){
        this.root = new TrieNode(null);
    }
    
    add(word){
        let current = this.root;
        
        for(let char of word){
            if(!(char in current.children)){
                current.children[char] = new TrieNode(char);
            }
            current = current.children[char];
        }
        
        current.isEnd = true;
    }
}

export default wordBreak;
