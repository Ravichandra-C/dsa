class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        let map= new Map<number,number>()
        for(let i=0;i<nums.length;i++){
            let val;
            if(map.has(nums[i])){
                val=map.get(nums[i])+1
                map.set(nums[i],val)
                
            }else{
                val=1
                map.set(nums[i],1)
            }

            if(val>nums.length/2){
                return nums[i]
            }
        }
    }
}
