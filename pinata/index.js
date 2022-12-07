const pinataSDK = require('@pinata/sdk');
// calling the sdk
require('dotenv').config()
// needs to get data from .env file
const fs = require('fs');
const pinata = pinataSDK(process.env.PINATA_API_KEY, process.env.PINATA_API_SECRET);
// simply calls for .dotenv file to show what the pinata key and secret key is

const readableStreamForFile = fs.createReadStream('./artworks/1.jpeg');
// will read from artworks folder and which specific picture we want
const options = {
    pinataMetadata: {
        name: "Closed Beach Collection",
        keyvalues: {
            customKey: 'customValue',
            customKey2: 'customValue2'
        }
    },
    pinataOptions: {
        cidVersion: 0
    }
};
// test
pinata.pinFileToIPFS(readableStreamForFile, options).then((result) => {
    //handle results here
    console.log(result);
}).catch((err) => {
    //handle error here
    console.log(err);
});



/////////////// Basic Test Case for each Pinata SDK Function Calls //////////////////
// this is a user test to make sure functionality is running smoothly
//pinata.testAuthentication().then((result) => {
    //handle successful authentication here
   // console.log(result);
//}).catch((err) => {
    //handle error here
   // console.log(err);
//});