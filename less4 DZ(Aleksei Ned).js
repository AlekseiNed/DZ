//zadanie 1//
// const num = 3
// if(num<=0){console.log(num)}
//  else{console.log(-1*num)}


//zadanie 2//
// function winnerKNB(player1, player2){
//     if(player1=== 'bumaga' && player2==='kamen'){return 'win player1'}
//     else if (player1=== 'kamen' && player2==='bumaga'){return 'win player2'}
//     else if(player1=== 'bumaga' && player2==='nozhnicy'){return 'win player2'}
//     else if(player1=== 'nozhnicy' && player2==='bumaga'){return 'win player1'}
//     else if(player1=== 'kamen' && player2==='nozhnicy'){return 'win player1'}
//     else if(player1=== 'nozhnicy' && player2==='kamen'){return 'win player2'}
//     else {return 'Nichya'}
// }
// console.log(winnerKNB('kamen', 'nozhnicy'))


//zadanie 3//
// const newMassive=[1,-2, 3, -4, 5, -6, -7, 8]
// let sum=0
// let j=0
// while (j<newMassive.length){
//     let i=newMassive[j]
//     j=j+1
//     if (i>0){sum=sum+i} 
// }
// console.log(sum)


//zadanie 4//
// let fourMassive=[]
// let i=0
// function newFunction(step, maxValue){
//     while(i<step*maxValue){
//         i=i+step
//         fourMassive.push(i)
//     }
//     return fourMassive
// }
// console.log(newFunction(3,10))



//zadanie5//

const cvetMassive=['red', 'yellow', 'green', 'yellow']
let i=0
function svetofor(cvet, steps){
    while(cvetMassive[i]!=cvet){ i=i+1}
    
    }


console.log(svetofor('green', 4))
