class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const hm=new Map<number,number>()
        for(let i=0;i<nums.length;i++){
            const bal=target-nums[i];
            console.log(bal,i)
            if(hm.has(bal)){
                return [hm.get(bal),i]
            }
            hm.set(nums[i],i)
        }
    }
}
