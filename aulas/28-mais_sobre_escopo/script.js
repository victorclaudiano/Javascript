let x = 10; 

if(x > 5){
    let x = 20;  //escopo if
    x++;          //incremento
    console.log(x);

}

console.log(x); //escopo global 