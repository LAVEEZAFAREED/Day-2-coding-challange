//Day 2 coding challange
//Question 1: FI=ind a quote from a famous person you admire.print the quote and the name of its auther.
console.log("Albert Einstein once said,\"A person who never made a mistake never  tried anything new\"");
//Question 2:Repeat Exercise 1,but this time store the famous person's name in a variable called famous_person.
//Then compose your message and store it in a nw=ew variable called message.print your message.
var Famous_person = "Albert Einstein";
var message = "".concat(Famous_person, " once said,\"A person who never made a mistake never tried anything new.\"");
console.log(message);
//Question 3:Store a person's name,and include some whitespace characters at the beginning and end the name.
//Use "\t"(tab) and "\n"(new line) at least once. Print the name once,so the whitespace around the name is displayed.
//Then print the name after stripping the white space.
var Name = "\t\n Asharib \t\n"; //This saves the name with whitespace
console.log(Name); //Shows the name with whitespace
console.log(Name.trim()); //Shows the name without whitespace 
