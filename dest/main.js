// console.log('Hello CFD Circle');

// 1 
// function laSoNguyenDuong (value) {
//     return (Number.isInteger(value) && value > 0);
// }
// console.log(laSoNguyenDuong(5));


//2
// function chanLe (value) {
//     if ( value % 2 == 0) {
//         return 'so chan'  ;
//     } else {
//         return 'so le' ;
//     }    
// }
// console.log(chanLe(5));

//3 
// function tongSoChan (value) {
//     let sum = 0 ;
//     let num = 0 ;
//     while (num <= value){
//         if (num % 2 ==0) {
//             sum += num;
//         }
//         num ++;
//     }
//     return sum;
// }
// console.log(tongSoChan(4))

//4 
function soLonNhat  (value) {
    let max = value[0];
  
    for (let i = 0; i < value.length; i++) {
      if (max < value[i]) {
        max = value[i];
      }
      return max;
    }
  };
  console.log(soLonNhat([100, -1, 2, 25, 9, 30]));