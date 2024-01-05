// adding 100 para


// const t1 = performance.now();
// for(let i = 0; i<=100; i++){
//     let newElement = document.createElement('p');
//      newElement.textContent = 'This is para'+i;
//      document.body.appendChild(newElement);
// }

//  const t2 = performance.now();
//  console.log("this took " + (t2-t1) + "ms");
// //optimize a bit 

// const t3 = performance.now();
// let myDiv = document.createElement('div');

// for(let i = 0; i<=100;i++){
//    let element = document.createElement('p');
//     element.textContent = 'this is para' + i;
//     myDiv.appendChild(element);
//  }
//  const t4 = performance.now();
//  console.log("this took " + (t3-t4) + "ms");
//  document.body.appendChild(myDiv);


    //  let document  = document.createDocumentFragment();
    //       for(let i = 0; i<=100; i++){
    //      let newElement = document.createElement('p');
    //     newElement.textContent = 'This is para'+i;
    //        fragment.appendChild(newElement);
    //  }

    //  document.body.appendChild( fragment);
    //  // 1 Reflow, 1 Reapaint

    // function addPara(){
    //     let para = document.createElement('p');
    //     para.textContent = 'js is single threded';
    //     document.body.appendChild(para);
    // }

    // function appendNewMessage() {
    //     let para = document.createElement('p');
    //     para.textContent = 'kya haal chal hai';
    //     document.body.appendChild(para);

    // }
    // addPara();
    // appendNewMessage();


       // js dom 4 class


    //      setTimeout(  function () {
    //       console.log('third');  
    //      },3000); 
    //   function sync() {
    //     console.log('first');
    //   }
    //   sync();
    //   console.log('second');

    // promis hai yrr

        
    // let meraPromis = new Promise(function(resolve,reject){
    //         console.log(' I am inside of the code');
    //         resolve(1998);
    // });

    // console.log('pehla');


    // let meraPromis1 = new Promise(function(resolve,reject){
    //     setTimeout(function(){
    //         console.log('Iam inside of the code1');
    //     }, 5000);
    //  //  resolve(123456789);
    //     reject(new Error('Bhai yrr kya kr rhe ho'))
    // });

    // meraPromis1.then((value) => {console.log(value)} , (error) => {console.log("Recieved an error")});
    

    // let meraPromis2 = new Promise(function(resolve,reject){
    //     setTimeout(function(){
    //         console.log('Iam inside of the code2');
    //     }, 5000);
    //   //  resolve(33333);
    //    // reject(new Error('Bhai yrr kya kr rhe ho'))
    // });

  //  console.log('phla');mis

//   let meravada1 = new Promise(function(resolve,reject) {
//      setTimeout(() => {
//         console.log('settimeout1');
//      },3000);
//      resolve(true);
//   })

//   let output = meravada1.then(() => {
//     let meravada2 = new Promise(function(resolve,reject){
//         setTimeout(() => {
//             console.log('settiomout2 ');
//         } , 4000);
//         resolve("wwadd2 resolver");
//     })
//     return meravada2;
//   })

//   output.then((value) => console.log(value));


//   async function adcd(){
//           return abhishek;
//    }
 
    //   async function utility() {

    //   let delMausam = new Promise((resolve,reject) => {
    //     setTimeout( () => {
    //         resolve("Delhi me aapka swagat hai");
    //     }, 4000);

    //   });

       
    //   let hydMausam = new Promise((resolve,reject) => {
    //     setTimeout( () => {
    //         resolve("hydrabad eme aapka swagat hai");
    //     }, 5000 );

    //   });
 
    //    let dM = await delMausam();
    //    let hM = await hydMausam();

    //    return[dM, hM];


    // //         }


    //      let obj = {
    //         heading:"head"    

    //      };

    //    async function abhi() {
    // let content = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    // let output = await content.json();
    // console.log(output);
    //    }

    //    abhi();

    // async function helpr(){
    //     let options = {
    //             methode:'POST',
    //             body:JSON.stringify({
    //                 title: 'eng',
    //                 body: 'abhishek',
    //                 userId:1,
    //                 weight:66,
                
    //             }),

    //             Headers: {
    //                 'content-type': 'application/json; charset=UTF',
    //             },      
    //     };

    //     let content = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    //     let response = content.json();
    //     return response;
    // }


    // async function utility(){
    //     let ans = await helpr();
    //     console.log(ans);
    // }

    // utility();


    function init(){
        var name = "Mozila";
        function displayName() {
            console.log(name);
        }
        displayName();
    }
    
    init();