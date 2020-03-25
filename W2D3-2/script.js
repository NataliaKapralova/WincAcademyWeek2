// const array = ["vet", "stoer" , "loco " ];

// array.push("cool"); 

// console.log(array); 

// const arrayWithWords = ["nice","awesome","tof"]


const addTheWordCool = function(array){
array.push('cool');
return array


}
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));



const amountOfElementsInArray = function(array){
    return array.length;
    
    }
    console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen']));


    const ArrayFirstNum = function(array){
        return array[0]; 
        
        }
        console.log(ArrayFirstNum(['appels', 'peren', 'citroenen']));

        const ArrayLastNum = function(array){
            return array[2]; 
            
            }
            console.log(ArrayLastNum(['appels', 'peren', 'citroenen']));

          
             //splice && slice 

             const presidents = ["Trump", "Obama", "Bush", "Clinton"] 
    
             const impeachTrumpSlice = function(array) {
               const NewArray = array.slice(1);
               return NewArray
             };

            
             const impeachTrumpSplice = function(array) {
             const removedElement = array.splice(0,1);
              console.log(
                "removed element:",
                removedElement,
                "De mutated array, Trump is missing:",
                array
              );
             return array 
            
            };
    

            console.log(impeachTrumpSlice(presidents)); 
            console.log(impeachTrumpSplice(presidents));


            // Join Method 
          
            const stringsTogether = function(array){ 
            return array.join(' ');
            }

            console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}'])) 


              // concat 
            
            // const array1 = [1,2,3,4]; 
            // const array2 = [5,6,7,8]; 

            // const combineArrays = function(array){
            // return array1.concat(array2)
            
            // }

            // console.log(combineArrays(array1 + array2))
        

        
      const combineArrays = function(array1, array2) {
        return array1.concat(array2);
            };
  
                console.log(combineArrays([1, 2, 3], [4, 5, 6]));
               // result should be [1,2,3,4,5,6]
                console.log(combineArrays(["hoi", "hey", "hallo"], [4, 5, 6]));
                // result should be ["hoi","hey","hallo",4,5,6]
 

    
        
 

    
        

