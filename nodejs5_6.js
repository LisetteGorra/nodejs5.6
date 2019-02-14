var fs = require('fs');

fs.readFile('nodename.txt', 'utf8', function(error, data){
    if(error) throw error;
    
    var arraydat = data.split('\n')
    console.log(arraydat);

 for (var i = 0; i < arraydat.length; i++) {
     console.log("The data on line", i+1, "is:", arraydat[i]);
    }
});
    