export default n => {
  let count=0;
  let pointer=0;
  let m=n;
  let total=1;
  while (m>1){
    total*=m;
    m=m-1;
  }
  const st= total.toString().split("").reverse();
  while(st[pointer]==="0"){
    count+=1;
    pointer+=1;
  }
  
  return count;
};
