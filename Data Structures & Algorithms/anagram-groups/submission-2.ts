class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map=new Map<string, string[]>();

        for(const str of strs){
            const key=str.split("").sort().join("");
            const anagrams = map.get(key)
            if(anagrams!==undefined){
                anagrams.push(str)
            }
            else{
                map.set(key,[str])
            }
        }

        return Array.from(map.values())
    }
}
