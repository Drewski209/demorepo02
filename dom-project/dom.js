let output;

//Shows all HTML inputs into an single array
output = document.all;

// Shows single HTML input in the array index 
output = document.all[2];

// Shows how many items are in the array 
output = document.all.length;

// Gets the HTML tags and its content 
output = document.documentElement;

// Gets the head of the HTML code
output = document.head;

// Gets the body of the HTML code 
output = document.body;

// Gives everything the head tag in the HTML
output = document.head.children;

//Gives everything in the body tag in the HTML
output = document.body,children;

// Gives the doctype used in the HTML code
output = document.doctype

//Gives the domain used for the HTML code 
output = document.domain

//Gives URL link and domain 
output = document.URL;

// Gives character set used in HTML 
output = document.characterSet;

// Gives content used in the code
output = document.contentType;

//Gives forms in the HTML 
output = document.forms;

// Gives a specified item in the form 
output = document.forms[0];

// Gives the method used for the form. Defaults to "get" if not called already 
output = document.forms[0].method;


console.log(output);
