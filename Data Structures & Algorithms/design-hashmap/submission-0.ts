class MyHashMap {
    private map:Record<string,any>;
    constructor() {
        this.map={}
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        this.map[key]=value
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        if(Object.hasOwn(this.map,key)){
            return this.map[key]
        }
        return -1
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key: number): void {
        delete this.map[key]
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
