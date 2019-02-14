# nodejs5.6

readlineSync 

Installation - npm install readline-sync

- The interface is used with process.stdin and process.stdout in order to accept user input.

----------------------------------------------------------------------------------

    1. install node js readline sync 

    2. lookup how to read from a file in node js 

- you can read files synchronously (line by line)

    3. create a file with your first and last name on line one and your favorite color in line two 

    4. create a progam to read the file in step 3 and console.log: 
        "The data on line 1 is:" {{{the line one data}}}
        "The data on line 2 is:" {{{the line two data}}}
        
- To produce output in the workspaces or command prompt we use "console.log()" so how can we take input using them in node.js?


var fs = require('fs'); 
- we need to access the file system 
- require brings in the library 
- and allows the files to opperate 

- type in the console to populate info in a file automatically 

touch - myfile.txt 
echo Lisette Gorra > myfile.txt 
cat myfile.txt Lisette Gorra 
echo Green >> myfile.txt Green (append to end of previous text = >>)
cat myfile.text Green 
----------------------------------------------------------------------------------


fs.readFile('myfile.txt', 'utf8', function(error, data){
    if(error) throw error;
    console.log(data);
});

----------------------------------------------------------------------------------
var arraydat = data.split('\n')
    console.log(arraydat);
    
    split turns a string into an array 
    
----------------------------------------------------------------------------------
now loop it 

 for (var i = 0; i < arraydat.length; i++) {
     console.log("The data on line", i+1, "is:", arraydat[i]);
    }
});




the text file would be better names as: readtxt.txt
the js file would be better names as: readfile.js 
    