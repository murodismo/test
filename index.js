//////// 1-masala

// function func(arr, num) {
//     let resultArr = [];
//     let minDiff = Infinity;
//     for (let i = 0; i < arr.length - 1; i++) {
//       let sumNumber = arr[i] + arr[i + 1];
//       let diff = Math.abs(num - sumNumber);
  
//       if (diff < minDiff) {
//         minDiff = diff;
//         resultArr = [arr[i], arr[i + 1]];
//       }
//     }
//     return resultArr;
// }

// console.log(func([11, 43, 11, 45, 4, 32, 54], 35)); // [4, 32]
  

///////// 2-masala

// function myFunc(arr) {
//     let a = 0
//     let res = []

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0 && a == 0) {
//             a = arr[i]
//             res.push(arr[i] + a)
//             console.log(arr[i]);
            
//         }else if (arr[i] % 2 == 0) {
//             res.push(arr[i] + a)
//         }else{
//             res.push(arr[i])
//         }
//     }
//     return res
// }
// console.log(myFunc([1,2,6,3,4,4,8,6]));


/////////// 3-masala

// function myFunc(arr) {
//     let a = 0
//     let res = []

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 1) {
//             res.push(arr[i])
//         }
//     }
//     for (let i = 0; i < res.length; i++) {
//         res[i] = res[i] + res[res.length-1]        
//     }
//     return res
// }
// console.log(myFunc([11,23,32,22,3]));


//////////// 4-masala

// function myFunc(arr) {
//     let max = Math.max(...arr)
//     let min = Math.min(...arr)

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == max) {
//             arr[i] = min
//         }else if (arr[i] == min) {
//             arr[i] = max
//         }
//     }
//     return arr
// }

// console.log(myFunc([11,23,32,22,3]));


/////////// 5-masala

// function myFunc(arr) {
//     let maxIdx = arr.indexOf(Math.max(...arr))
//     let minIdx = arr.indexOf(Math.min(...arr))    

//     for (let i = 0; i < arr.length; i++) {
//         if (maxIdx < minIdx) {
//             if (maxIdx < i && i < minIdx) {
//                 arr[i] = 0
//             }
//         }else if (minIdx < maxIdx) {
//             if (minIdx < i && i < maxIdx) {
//                 arr[i] = 0
//             }
//         }        
//     }
//     return arr
// }
// console.log(myFunc([11,34,23,32,22,3]));


/////////// 6-masala

// function myFunc(arr) {
//     let maxIdx = arr.indexOf(Math.max(...arr))
//     let minIdx = arr.indexOf(Math.min(...arr))    
//     let first = []
//     let mid = []
//     let last = []
    
//     for (let i = 0; i < arr.length; i++) {
//         if (maxIdx < minIdx) {
//             if (maxIdx < i && i < minIdx) {
//                 mid.push(arr[i])
//             }else if (i <= maxIdx) {
//                 first.push(arr[i])
//             }else{
//                 last.push(arr[i])
//             }
//         }else if (minIdx < maxIdx) {
//             if (minIdx < i && i < maxIdx) {
//                 mid.push(arr[i])
//             }else if (i <= minIdx) {
//                 first.push(arr[i])
//             }else{
//                 last.push(arr[i])
//             }
//         }
//     }

//     return [...first,...(mid.reverse()), ...last]
// }

// console.log(myFunc([11,34,23,32,22,3]));


/////////// 7-masala

// function myFunc(arr,k) {
//     let res = []
//     for (let i = 0; i < arr.length; i++) {
//         if (i != k) {
//             res.push(arr[i])
//         }
//     }
//     return res
// }
// console.log(myFunc([0,1,2,3,4,5,6,7,8,9], 7));


/////////// 8-masala

// function myFunc(arr) {
//     let res = []

//     for (let i = 0; i < arr.length; i++) {
//         if (res[res.length-1] !== arr[i]) {
//             res.push(arr[i])
//         }
//     }
//     return res
// }
// console.log(myFunc([1,2,3,3,4,5,5,5,6,7]));


/////////// 9-masala

// function myFunc(arr) {
//     let res = []

//     for (let i = 0; i < arr.length; i++) {
//         let a = 0
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 a += 1
//             }
//         }  
//         if (a === 3) {
//             if (!res.includes(arr[i])) {
//                 res.push(arr[i])
//             }
//         }
//     }
//     return res
// }

// console.log(myFunc([1,2,2,3,3,4,3,2,1]));



////////// 10-masala

// function myFunc(arr) {
//     let res = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             res += i
//         }        
//     }
//     return res
// }
// console.log(myFunc([1,2,3,4,5,6,7,8,9]));



//////////// qoshimcha

///////////// 2-masala

// function sortFunc(arr) {
//     let numbers = []
//     let other = []
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] == 'number') {
//             numbers.push(arr[i])
//         }else{
//             other.push(arr[i])
//         }
//     }
//     return {
//         sorted : numbers,
//         other: other
//     }
// }
// console.log(sortFunc([1,true,3,5,'hello', false]));


////////////////// 3-masala

// function sortTypeFunc(arr) {
//     let numbers = []
//     let boolean = []
//     let string = []
    
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] == 'number') {
//             numbers.push(arr[i])
//         }else if(typeof arr[i] == 'string'){
//             string.push(arr[i])
//         }else if (typeof arr[i] == 'boolean') {
//             boolean.push(arr[i])
//         }
//     }
//     return {
//         sorted : numbers,
//         boolean: boolean,
//         string: string
//     }
// }
// console.log(sortTypeFunc([1,true,3,5,'hello', false]));


//////////// 4-masala

// function typeFunc(arr) {
//     let res = []
//     for (let i = 0; i < arr.length; i++) {
//         res.push(typeof arr[i])        
//     }
//     return res
// }
// console.log(typeFunc([1,2,'hello', undefined, null, true]));
