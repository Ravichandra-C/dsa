class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        
        for(let i=nums.length-1;i>=0;i--){
            const j=nums[i]
            if(j==val){
             nums.splice(i,1)
             i++;
             continue;
            }
            
        }
        console.log(nums)
        // nums.sort((a,b)=> typeof(a)!=undefined?-1:1)
        console.log(nums)
        return nums.length;
    }
}
