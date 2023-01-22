/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
 var mostCommonWord = function(paragraph, banned) {
    // remove all punctuations
    const replaced = paragraph.toLowerCase().replaceAll(/[!?',;.]/g," ");
    console.log("cleaned:", replaced);
    // convert to array
    const parArray = replaced.split(/\s+/);
    console.log("arrayed:\n", parArray);
    // count instances of each non-banned word
    const bannedMap = new Map(banned.map((x,i)=>([x, i])));
    const wordInstances = {}
    // let count;
    for(let word of parArray){
        if(bannedMap.has(word) || word === "") continue;
        let count = (word in wordInstances)?wordInstances[word]:0;
        wordInstances[word] = ++count;
    }
    // order counts by desc
    let mostCommonWordItem = Object
                            .entries(wordInstances)
                            .sort(([,a],[,b])=> b-a)[0];
                        
    return mostCommonWordItem[0].toLowerCase();
};



// ================================== FASTEST ================================
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
 var mostCommonWord = function(paragraph, banned) {
    let matches = paragraph.toLowerCase().match(/[a-z]+/g), obj = {};
    for (const word of matches) {
        if (banned.includes(word)) continue;
        obj[word] = obj[word] + 1 || 1
    }
    let ent = Object.entries(obj);
    return ent.find(a => a[1] == Math.max(...ent.map(a => a[1])))[0]
};