class MyHashSet {
    private arr:Array<any>;
    constructor() {
        this.arr=[];
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key: number): void {
        if(!this.arr.includes(key)){
            this.arr.push(key)
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key: number): void {
        const index=this.arr.indexOf(key);
        if(index!=-1){
            this.arr.splice(index,1)
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key: number): boolean {
         const index=this.arr.indexOf(key);
         return index!=-1
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
