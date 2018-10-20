const tools = require('./tools');

/**
 * 加法函数
  * @param num1 Number
 * @param num2  Number
 * @returns {*} Number
 */
function add(num1,num2) {
    let sum = 0;
   if(tools.ide(num1)==='Number'&& tools.ide(num2) === "Number"){
       let dotlen1 = tools.calLen(num1);
       let dotlen2 = tools.calLen(num2);
       let maxDotLen = Math.abs(dotlen1 - dotlen2);
       // 计算到底要还原多少位
       let digit = Math.pow(10,Math.max(dotlen1,dotlen2));
       // 还原开始
       let calNum1 = num1*digit;
       let calNum2 = num2 *digit;
       //还原结束
       // 计算开始 100,10和10,100 加的时候是一样的
       sum = Math.abs(calNum1 + calNum2);
       return sum/digit;
   }
 }

 // 为啥换这个就行了？？？
module.exports = { add };
