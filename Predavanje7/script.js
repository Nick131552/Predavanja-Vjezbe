function A(){
    let a = [];

    for (let i=0; i<47; i++) {
        a.push(i);
    }
    /*for (let I=0; I<1000; I++){
        let b = Math.floor(Math.random()*(a.length+1));
        if(b === 47) {
            console.log(b);
        }
    }
    */
    let b = [];
    for (let I=0; I<100; I++){
        b.push(Math.floor(Math.random()*a.length));
    }
    console.log(b);
    
}

console.log(A());