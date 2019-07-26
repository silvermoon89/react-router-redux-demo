import Mock from 'mockjs';
let data=[];
const Random=Mock.Random;
for(let i = 0; i < 4; i ++) { // 可自定义生成的个数
    let template = {
      'id': i+1, 
      'title': Random.name(), // 生成姓名
      'price': Random.float(0, 100, 0, 2), // 生成0到100之间的浮点数,小数点后尾数为0到5位
      'inventory': Random.integer(1, 20), // 生成1到100之间的整数
    }
    data.push(template);
}
  

// module.export = [
//     Mock.mock(/\/goods/,'get',data)
// ]
Mock.mock('http://test.com','get',data);