//Problem 3 : Given an array of numbers find the average of all the even numbers
let sum=0;
let arr=[1,4,6,5,3];
for(i=0;i<=arr.length-1;i++){
  if(arr[i]%2==0){
    sum+=arr[i];
  }
}console.log(sum);