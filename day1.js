/*
1. Write a program to create variables of the following types:
        int
        string
        boolean
        object
        array
    then add values in array(can be value of any type). Delete values from the array using array built in methods.
    Toggle values of boolean variables
    Concatenate string with more values(without creating new string variables)
*/

// Javascript supports number type for integer and decimal values.
  var int_ex = 10;


// String
  var test_string = "Cuelogic Technologies";


// boolean
  var a = true;
  var b = false;


// Object
  var employee = { id: 252, name: 'Deepti', designation: 'SSE', technology: 'ROR'};


// Array
  var array = [1, 2, 3, "abc"];


// Insert values into array
  array.push(true)


// Delete an element from array
  var index = array.indexOf(2);
  array.splice(index, 1);


// Toggle boolean values

  var flag = true;
  console.log(flag);

  flag = !flag;
  console.log(flag);


// String Concatenation

  var str = 10 + 5 + ' ' + 'abc' + 10 + true + [1, 2, 'test']
  // output: "15 abc10true1,2,3,test"




/*2. Write a program that uses at least three ways to create an object variable,array variable */

   // Followings are the ways to create a object variable:

      //1) Object Notation

          var employee = { id: 252, name: 'Deepti', designation: 'SSE', technology: 'ROR'};

      // 2) With new keyword:

          var employee = new Object();
          employee.id = 252;
          employee.name = 'Deepti';
          employee.designation = 'SSE';
          employee["technology"] = 'ROR';

   // 3) Constructor

          function employee(id, name, designation, technology) {
            this.id = id;
            this.name = name;
            this.designation = designation;
            this.technology = technology;
          }

          var emp1 = new employee(252, 'Deepti', 'SSE', 'ROR');

// Array Declartion
  var array = new Array();         // Array with initial size 0
  var array = new Array(2);        // Array with size 2
  var array = new Array(1, 2, 3);  // Array with size 3

  var array = [];                 // Array with 0 size
  var a = [1, 2, 3];              // Array with size 3