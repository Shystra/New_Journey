// Promessa que vai comprar um sorver 

/** -> Possibilidades:
 * 1 - Comprar o sorvete e tudo dar certo;
 * 2 - Alguma coisa dar errado.
 * 
 * Uma promisse basicamente aguarda o resultado de uma promessa
 * */ 


// const comprarSorvete = true;
// const resultPromise = new Promise( ( resolve, reject ) => {
//     if(comprarSorvete){
//     resolve ({message:'comprei o sorvete'})
// };
    
//     reject ({message: 'deu tudo errado'});
// });
// // console.log(resultPromise);
// resultPromise.then((resolve) => console.log(resolve)).catch((error) => console.log(error))
//_______________________?______________________?___________________________?____________________________
const buyIceScream = false;
const resultPromise = new Promise((resolve, reject) => {
    if(buyIceScream){

        return resolve ({message: 'compra realizada'})
    };

        return reject ({message: 'compra rejeitada'})
        

});

async function start () {
    try{
        const result = await resultPromise;
        console.log(result);
    }catch(error){
        console.log('error =>', error)
    }
}
start();



