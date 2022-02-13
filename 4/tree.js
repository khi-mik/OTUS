var fs = require('fs');
var path = require('path');

var resultObject = {"dirs": [], "files": []};

const isDir = function(dirpath) {
  return (fs.existsSync(dirpath) && (fs.lstatSync(dirpath).isDirectory())) ;
}

const getDirsAndFiles = function(dirpath) {
  if(!isDir(dirpath)) {
    console.log('Entered directory is incorrect');
    console.log(dirpath);
    console.log('Entered directory is incorrect');
    return;
  };

  fs.readdir(dirpath, (err, files) => {
    if(files.length !== 0) {
      files.forEach( function(file) {
        let filePath = path.join(dirpath, file);
        if( isDir(filePath) ) {
          resultObject.dirs.push(filePath);
          getDirsAndFiles(filePath);
        } else {
          resultObject.files.push(filePath);
        }
      })
    }
  })
}

const displayDirsAndFilesStructure = function(obj){
  console.log("DIRS:")
  obj.dirs.forEach( (item) => {
    console.log(item)
  })
  console.log("FILES:")
  obj.files.forEach( (item) => {
    console.log(item)
  })
}

textPath = 'c:\\';

if( (process.argv[2] !== '') ) {
  textPath = process.argv[2];
  textPath = textPath.replace(/"/g, '');
}

setTimeout(() => {
  getDirsAndFiles(textPath);
}, 0);

setTimeout(() => {
  displayDirsAndFilesStructure(resultObject)
}, 100);