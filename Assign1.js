console.log('hai')


for (var i = 1; i <=100; i++) {
    if(i%3==0){
               console.log(i+'fizz');
              }
      else if(i%5==0){
                      console.log(i+'bizz')
                     }
else if (i%3==0 && i%5==0 ) {
                             console.log(i+'fizzbizz')
                            }             
      else{console.log(i);
                    }
                }
