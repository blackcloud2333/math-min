/**
 *  计算参数类型
 * @param obj 任意类型
 * @returns {null}
 */
function ide(obj) {
    let  type = Object.prototype.toString.call(obj).slice(8,-1);
    if(type === "String" ) return "String";
    if(type === "Null" ) return "Null";
    if(type === "RegExp" ) return "RegExp";
    if(type === "Array" ) return "Array";
    if(type === "Boolean" ) return "Boolean";
    if(type === "global" ) return "window";
    if(type === "Undefined" ) return "Undefined";
    if(type === "Function" ) return "Function";
    if(type === "Number" ) return "Number";
    if(type === "Date" ) return "Date";
}

/**
 * 判断num到底是几位小数
 * @param num
 * @returns {number}
 */
function calLen(num) {
    if(ide(num) === 'Number') {
        let  length = num.toString().split(".")[1].length;
        return length;
    }
}

export default function bar() {
    console.log('bar')
}

