// //declare an array
//  let dessert = ['bolo', 'bolacha', 'semifrio, 'pudim']
//   for(let i = 0; i<dessert.lenght[])  
//   for(let elemnt of dessert )

//ex. 01 05/09
// Utilizando os loops e as condições que já aprendemos, construa uma lista de 
//compras.


// let shoppingList = [];
// let item ='';
// while(item != 'fim'){
//     item = prompt('Informa o item?')    ;
//     shoppingList.push(item);
// } 

// shoppingList.pop();
// for (let list of shoppingList){
//     console.log(list)
// }
 //   function shoppingList(){

 ///       console.log(lit);
 //   }
 function people(){
 const fullNames = [{
    first: 'Albus', 
    last: 'Dumbledore'
    },{
    first: 'Harry', 
    last: 'Potter'
    },{
    first: 'Hermione', 
    last: 'Granger'
    },{
    first: 'Ron', 
    last: 'Weasley'
    },{
    first: 'Rubeus',
    last: 'Hagrid'
    }, {
    first: 'Minerva',
    last: 'McGonagall'
    }, {
    first: 'Severus', 
    last: 'Snape'}];
    const firstname = fullNames.map( (fName) =>{
    return fName.first;
    })
    console.log(fullNames);
    console.log(firstname);

}
    

  
  //Escreva uma função chamada validUserNames que aceite um array de 
  //usernames (que serão strings)
  //A nossa função deverá retornar um novo array contendo apenas os usernames
  //que têm menos de 10 caracteres.
//   function validadUserNames(usernames);{
//       const validUserNames = usernames.filter(
//           elem=> elem.length<10
//        )
//        console.log(usernames);

//    }
   //1. Escreva uma função chamada allEvens que aceite um array de números. 
   //2. A nossa função deverá retornar verdadeiro se todos os números forem pares. pg97
//   function allEvens(numberArr){
//       return numbers.every(myNumber=> myNumber% ===0)

//   }
  
