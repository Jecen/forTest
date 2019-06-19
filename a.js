// 根据起始字符获取指定长度的字母数组
const getArr = (start, length) => {
    const rst = []
    const startASC = start.charCodeAt() // 起始字符对应的ASCII
    let cursor = 0 // 游标
    const loop = () => { // 自循环
        if (cursor === length) {
            return 
        } else {
            rst.push(String.fromCharCode(startASC + cursor)) 
            cursor += 1
            loop()
        }
    }
    loop()
    return rst
}

const getRest = (target) => {
    const targetSet = new Set(target) // 去重
    const arr = new Set(getArr('a', 26)) // 获取全量字母数组
    targetSet.forEach(c => arr.delete(c)) // 去除已存在字母
    return [...arr]
}

console.log(getRest('xefewedeeexkkjjndse'))
