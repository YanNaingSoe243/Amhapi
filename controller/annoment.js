

const fs = require('fs');
const path = require('path');

exports.write = async (req, res, next) => {
  try { 
     const filePath = path.resolve('./annoment.json');
        console.log(filePath);
    const findcategory1=  fs.readFile(filePath, 'utf8');
    
    const jsonData = JSON.stringify(req.body, null, 2);
      fs.writeFile(filePath, jsonData , 'utf8', (error) => {
        if (error) {
            console.error('An error occurred while writing to the file:', error);
            return;
        }
        console.log('File has been written successfully.');
    });
      return res.status(200).json({      
        message:"complete",
      });
  } catch (err) {
    res.status(500).send(err);
  }
};



exports.readall = async (req, res, next) => {
  try {

    const filePath = path.resolve('./annoment.json');
    console.log(filePath);
     
       const findcategory1=  fs.readFile(filePath, 'utf8', (error, data) => {
            if (error) {
                console.error('An error occurred while reading the file:', error);
                return;
            }
           // console.log('File content:', data);
            return res.status(200).send( data );
        });
     

  } catch (err) {
    res.status(500).send(error);
  }
};

