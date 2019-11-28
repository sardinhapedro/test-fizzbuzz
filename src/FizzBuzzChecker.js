//let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,14,15, 30, 31,32,35,90]
//let array = [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
let array = [2,10,90,23,40,30,6]


const checkFizz = (array) => {
    var index = 0;

    
    array.forEach((element) => {
       
        if(element % 3 == 0 && element.toString().indexOf('3') > -1){ 
          
            array[index] = "fizzfizz"
        }

        else if(element % 3 == 0 || element.toString().indexOf('3') > -1){
           
            array[index] = "fizz"
        }

        index++;
    })
    
}

const checkBuzz = (array) => {
    var index = 0;
  
    
    array.forEach((element) => {
       
        if(element % 5 == 0 && element.toString().indexOf('5') > -1){ 
              
            array[index] = "buzzbuzz"
        }
        
        else if(element % 5 == 0 || element.toString().indexOf('5') > -1){
           
            array[index] = "buzz"
        }

        index++;
    })
   
}

const checkFizzBuzz = (array) => {
    var index = 0;

    array.forEach((element) => {
        if(element % 5 == 0 && element % 3 == 0){
            array[index] = "fizzbuzz"
         
        }
 
        index++
    })

}

const checkLucky = (array) => {
    var index = 0;

    array.forEach((element) => {
        if((element % 5 == 0 && element % 3 == 0 && element.toString().indexOf('5') > -1) || (element % 5 == 0 && element % 3 == 0 && element.toString().indexOf('3') > -1)){
            array[index] = "lucky"
         
        }
 
        index++
    })

}


const fizzBuzzChecker = (array) => {
    checkLucky(array);
    checkFizzBuzz(array);
    checkFizz(array);
    checkBuzz(array);
    console.log(array);

}

fizzBuzzChecker(array);
