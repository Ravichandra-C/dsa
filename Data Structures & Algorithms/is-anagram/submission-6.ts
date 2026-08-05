class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    private map:Map<string,number>;
    getFrequencyMap(s:string){
        this.map= new Map<string,number>()
        for(let i=0;i<s.length;i++){
            const c=s[i]
            if(this.map.has(c)){
                this.map.set(c,this.map.get(c)+1)
            }else{
                this.map.set(c,1);
            }
        }
    }
    isCharCountSame(c:string):boolean{
        if(this.map.has(c)){
            const val= this.map.get(c);
            if(val==0){
                return false
            }else{
                this.map.set(c,val-1)
                return true;
            }
        }{
            return false
        }
    }
    isAnagram(s: string, t: string): boolean {
        const sortedS=s.split("").sort().join("")
        const sortedT = t.split("").sort().join("")
        console.log({sortedS,sortedT})
        return sortedS===sortedT;
    }
}
