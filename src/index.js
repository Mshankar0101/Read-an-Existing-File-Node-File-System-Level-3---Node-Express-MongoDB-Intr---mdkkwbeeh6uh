const fs = require("fs/promises");
const fileName = "myfile.txt";
const reader = async (fileName) => {
  // write code here
	// dont change function name
  // const content =  await fs.readFile(fileName);
  // console.log(content.toString());
  // return  content.toString();


  await fs.readFile(fileName, (err,content)=>{
    if(err){
      console.log(err.message);
    }
    else{
       return content.toString();
    }
  })
  
};


module.exports =  reader ;
