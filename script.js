// //While ցիկլի օրինակներ

// //1.
// let tiv = 1;
// while(tiv <= 10){
//     alert(tiv);
//     tiv ++;
// }


// //2.
// let tiv1 = 1;  
// let summ = 0;  
// while (tiv1 <= 100){   
//     summ += tiv1;
//     tiv1++;           
// }
// alert("Գումարը = " + summ);


// //3.
// let i1 = 0;       
// let numb = 2;    
// while(i <= 10){ 
//    alert(numb)
//    numb += 2;          
//    i1++;     
// }

// //4.
// let num = 10;
// while(num >= 1){
//     alert(num);
//     num --;
// }

// //5.
// let mttiv = 14;
// let guess ;
// while(guess != mttiv){
//     guess = prompt("Գուշակիր թիվը (1-20):"); 
//     if(guess == mttiv){
//         alert("Շատ լավ , ճիշտ գուշակեցիր!");
//      } else {
//         alert("Սխալ է, փորձիր նորից...");
//      }
// }

// //Array 

// //1.
// let x = [1, 2, 3, 4, 5];
// let i = 0;
// while(i < x.length){
//    alert(x[i]);
//    i++;
// };

// //2.
// let y = [1, 2, 3, 4, 5];
// let j = 0;
// let sum = 0;
// while (j< y.length){
//     sum = sum +y[j];
//     j++;
// };
// alert("Գումարը = " + sum);

// //3.
// let nums = [1, 2, 3, 4, 5];
// let max = nums[0];
// let k = 1;
// while (k < nums.length) {
//   if (nums[k] > max) {
//     max = nums[k];
//   }
//   k++;
// }
// alert("Ամենամեծ թիվը =" + max);

// //4.
// let arr = [1, 2, 3, 4, 5];
// let l = 0;
// let newArr = [];

// while (l < arr.length){
//     newArr.push(arr[l] * arr[l]);
//     l++;
// }

// alert("Նոր զանգվածը = " + newArr);

// //5.
// let del = [1, 2, 3, 4, 5];
// let m = 0;
// while (m < del.length){
//     if (del[m] % 2 === 0) {
//         del.splice(m, 1);  
//     } else {
//         m++;
//     }
// }
// alert("Արդյունքը = " + del);

// //6.
// let rev = [1, 2, 3, 4, 5]
// rev.reverse();
// alert(rev);   

//7.
let words = ["apple", "banana", "kiwi", "watermelon", "pear"];
let i = 0;
let long = words[0];

while (i < words.length) {
    if (words[i].length > long.length) {
        long = words[i]; 
    }
    i++;
}
alert("Ամենաերկար բառը է՝ " + long);
