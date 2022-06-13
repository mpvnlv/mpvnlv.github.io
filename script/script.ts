 
//  async function fetchbad(){
//     const res = await fetch("https://api.imgflip.com/get_memes");
//     const json = await res.json();
//     console.log(json.data.memes[0].name);
//     console.log(json.data)
//     return json;
// }

// let mem: HTMLElement;

// const mem1 = document.getElementById('memes');
// if(mem1){
//     mem = mem1;
// }
// let memes_photo: HTMLElement;
// const memes_photo1 = document.getElementById('memes_photo');
// if (memes_photo1){
//     memes_photo = memes_photo1;
// }


// fetchbad().then(memes =>{
//     console.log(memes);
//     const mem_photo = new Image();
//     let k:number = 0;
//     mem.textContent = memes.data.memes[k].name;
//     mem_photo.src = memes.data.memes[k].url;
//     mem_photo.style.width = "100%";
//     mem_photo.style.margin = "auto"
//     memes_photo.append(mem_photo);

//     const variable2 =  document.querySelector("#btn_mem") as HTMLButtonElement;
//     let variable: HTMLButtonElement;
    

//     if (variable2){
//         variable = variable2;
//         variable.onclick = function(){
//             k=k+1;
//             mem.textContent = memes.data.memes[k].name;
//             mem_photo.src = memes.data.memes[k].url;
//             mem_photo.style.width = "100%";
//             mem_photo.style.margin = "auto"
//             memes_photo.append(mem_photo);
//             if (k===100){
//               k = 0;
//             }
          
//     }
// }


//     })
    

