var fs = require('fs');


/*
Challenge 1
*/
let txt = fs.readFileSync('./challenge1/info.txt','utf8');
console.log(txt);

/*
Challenge 2
*/
let read = fs.readFileSync('./challenge2/info.txt','utf8');
read = `${read} \n Noel, Michael, Tessa , Catherine, Bryan , Joe`
//fs.writeFileSync('./challenge2/info.txt' , read);
console.log(read);

/*
Challenge 3
*/
let orig ="This file was named wrong. Rename it!";
//var orig = fs.readFileSync('./challenge3/binfo.txt','utf8');
//fs.unlinkSync('./challenge3/binfo.txt');
fs.writeFileSync('./challenge3/info.txt',orig);






/*
Challenge 4
*/
// fs.mkdirSync('./challenge4/copyfolder');
// fs.copyFileSync('./challenge4/info.txt', './challenge4/copyfolder/info.txt', (err)=>{
//   if(err){
//     console.log(err)
//   }
//   console.log('copied file');
// });

/*
Challenge 5
*/
var fsRead = fs.readFileSync('./challenge5/info.txt', 'utf8');
console.log(fsRead.replace(/-/g,' '));


/*
Challenge 6
*/
fs.readdir('./challenge6',(err,files)=>{
  let onlyTxt = [];
  files.forEach((value)=>{
    var leng = value.length;
    console.log(value.substr(leng - 3, leng));
    if(value.substr(leng -3,leng) == 'txt'){
      onlyTxt.push(value);
    }
  })
  console.log(onlyTxt);
});
