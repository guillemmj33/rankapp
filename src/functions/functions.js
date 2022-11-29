import dataAPI from '../data/dataAPI.json';

const orderData = () => {
  let arr = dataAPI.data;
  arr.sort(function(a,b){
    return a - b;
  })
}

console.log(orderData);

export {
  orderData
}