class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map=new Map<string, string[]>();

        strs.forEach(str=>{
            const key=str.split("").sort().join("");
            const anagrams = map.get(key)
            if(anagrams!==undefined){
                anagrams.push(str)
            }
            else{
                map.set(key,[str])
            }
        })

        return Array.from(map.values())
    }
}
