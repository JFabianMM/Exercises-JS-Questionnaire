// **************************** //
// Exercise 25
// **************************** //

// Given the following input values, 
// how will the code snipped behave? (30 mins)

function log(v){
  if(v){ console.log('ok');}
  else{ console.log('no'); }
}

let v=true;
log(v);

// true         Result:     ok
// false        Result:     no
// ‘true’       Result:     ok
// ‘false’      Result:     ok
// {}           Result:     ok     
// []           Result:     ok
// NaN          Result:     no
// 0            Result:     no
// 1            Result:     ok
// undefined    Result:     no
// null         Result:     no
            