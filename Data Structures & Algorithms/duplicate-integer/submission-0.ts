class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const set: Set<number>= new Set();
        nums.forEach((num: number)=> set.add(num))
        return (set.size != nums.length)
    }
}
