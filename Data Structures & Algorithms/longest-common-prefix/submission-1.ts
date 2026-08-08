class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        const arr=strs.sort((a,b)=>a.length-b.length)
        let lcp=arr[0]
        for(let i=1;i<arr.length;i++){
            
            if(arr[i].includes(lcp)){
                continue;
            }

            while(!arr[i].startsWith(lcp)){
                if(lcp.length==1){
                    return ""
                }
                lcp=lcp.substring(0,lcp.length-1)
            }
        }
        return lcp
    }
}
