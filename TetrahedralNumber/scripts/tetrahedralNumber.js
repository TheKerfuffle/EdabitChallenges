const tetrahedralNumber = n => {
  let t = 0;
  if (n<=0) {
    return null;
  }
  for (let h=n; h>0; h--) {
  //  console.log('in loop 1', h);
    for (let l=h; l>0; l--){
  //    console.log('in loop 2', l);
  // Used these bits of commented out code to test that the loops were behaving as expected.
      t+=l;
    }
  }
  return t;
}

console.log('Testing tetrahedralNumber with 2, should be 4:', tetrahedralNumber(2));
console.log('Testing tetrahedralNumber with 5, should be 35:', tetrahedralNumber(5));
console.log('Testing tetrahedralNumber with 6, should be 56:', tetrahedralNumber(6));
