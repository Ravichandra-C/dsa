class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(t.length!=s.length){
            return false;
        }
        let a=t
        for(let i=0;i<s.length;i++){
            a=a.replace(s[i],"")
        }
        return a.length==0
    }
}
