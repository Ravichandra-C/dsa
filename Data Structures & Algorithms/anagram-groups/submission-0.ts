class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map=new Map<string, string[]>();

        strs.forEach(str=>{
            const key=str.split("").sort().join("");
            if(map.has(key)){
                const val=map.get(key)
                val.push(str)
            }
            else{
                map.set(key,[str])
            }
        })

        return Array.from(map.values())
    }
}
