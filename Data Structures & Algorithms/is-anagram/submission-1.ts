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
        const acc=t.split("").reduce((acc,c:string)=>acc.replace(c,""),s)
        console.log(acc)
        return !acc 
    }
}
