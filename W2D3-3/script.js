
// find method 

const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"}, 
    {name: "Superman", alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"}];
    
    const findSpiderMan = function(array){ 
    return array.find(function(superheroes){

    return superheroes.name === "Spiderman";
    });
    }

    console.log(findSpiderMan(superheroes));

// Map method 

    const doubleArrayValues = [1, 2, 3];

    const double = doubleArrayValues.map(i => i * 2);

    console.log(double);

// some 

const containsNumberBiggerThan10 = function(array) {
    return array.some (number =>{
      return number > 10;
    });
  };

  console.log( containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11])
  ); 

// includes 
  
const isItalyInTheGreat7 = function(array) {
      return array.includes("Italy");
        };

       console.log(isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States'])
       );

 
  // Map 
  const multiplies = [1, 2, 3];
  
  const multi = multiplies.map(i => i * 10);

  console.log(multi);


// Every 

const isBelow100 = function(array) {
    return array.every (number =>{
      return number < 100;
    });
  };

  console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]));


// Reduce 
const items = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];

const total = items.reduce ((currentTotal, items) => { 
return items + currentTotal
},0 )

console.log(total); 


