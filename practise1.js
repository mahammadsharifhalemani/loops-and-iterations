let arr_1 = [3,5,22,5,7,2,45,75,89,21,2];
let arr_2 = [9,2,42,55,71,22,4,5,90,25,26];
let sum1 = 0;
for(i=0;i<arr_1.length;i++){
    sum1 +=arr_1[i];
};
let sum2 = 0;
for(j=0; j<arr_2.length;j++){
    sum2 +=arr_2[j];
};
console.log(sum1 + sum2);
//Output:627