// // function([string1, string2],target id,[color1,color2])    
// consoleText(['Hello World.', 'I am Vika Kruk', 'This site made with Love.'], 'text',['#04346C','#04346C','#04346C']);

// function consoleText(words, id, colors) {
//   if (colors === undefined) colors = ['#fff'];
//   var visible:boolean = true;
//   var con2 = document.getElementById('console') as HTMLElement;
//   let con: HTMLElement;
//   if (con2){
//     con = con2;
//   }
//   var letterCount:number = 1;
//   var x: number = 1;
//   var waiting = false;
//   var target2 = document.getElementById(id) as HTMLElement;
//   let target: HTMLElement;
//   if (target2){
//     target = target2;
//   }

//   window.setInterval(function() {

//     target.setAttribute('style', 'color:' + colors[0])

//     if (letterCount === 0 && waiting === false) {
//       waiting = true;
//       target.innerHTML = words[0].substring(0, letterCount)
//       window.setTimeout(function() {
//         var usedColor = colors.shift();
//         colors.push(usedColor);
//         var usedWord = words.shift();
//         words.push(usedWord);
//         x = 1;
//         target.setAttribute('style', 'color:' + colors[0])
//         letterCount += x;
//         waiting = false;
//       }, 1000)
//     } else if (letterCount === words[0].length + 1 && waiting === false) {
//       waiting = true;
//       window.setTimeout(function() {
//         x = -1;
//         letterCount += x;
//         waiting = false;
//       }, 1000)
//     } else if (waiting === false) {
//       target.innerHTML = words[0].substring(0, letterCount)
//       letterCount += x;
//     }
//   }, 120)
//   window.setInterval(function() {
//     if (visible === true) {
//       con.className = 'console-underscore hidden'
//       visible = false;

//     } else {
//       con.className = 'console-underscore'

//       visible = true;
//     }
//   }, 400)
// }
