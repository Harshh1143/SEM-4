// Write a node js Asynchronous program to perform CRUD operation of file management
// which should perform below task in sequence. [Callback Hell]
// 1. Create folder named "hello"
// 2. create a file in it named a.txt and add some data in it.
// 3.add more data at last in file
// 4. read data without getting buffer at first
// 5. rename the file
// 6. delete both the file and folder.

const fs = require("fs");

fs.mkdir("hello", (err) => {
  if (err) throw err;
  console.log("Folder created succesfully");
  fs.writeFile("hello/a.txt", "Hello Writing some text in this", (err) => {
    if (err) throw err;
    console.log("File write Successfullly");
    fs.appendFile("hello/a.txt", " Appending some more files", (err) => {
      if (err) throw err;
      console.log("File appended successfully");
      fs.readFile("hello/a.txt", "utf-8", (err, data) => {
        if (err) throw err;
        console.log("File content : ", data);
        fs.rename("hello/a.txt", "hello/a1.txt", (err) => {
          if (err) throw err;
          console.log("File renamed succesfully");
          fs.unlink("hello/a1.txt", (err) => {
            if (err) throw err;
            console.log("File deleted Successfully");
            fs.rmdir("hello", (err) => {
              if (err) throw err;
              console.log("Directory removed successfully ");
            });
          });
        });
      });
    });
  });
});
