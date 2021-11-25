function fibonacci(n) {
  let pre = 0;
  let cur = 1;
  let last = 0;
  for(var num = 1; num<n; num++){
    last = pre + cur;
    pre = cur;
    cur = last;
  }
  return last;
}