/*
  1. Write a program to create functions that will do the following
    1. Add 2 numbers
    2. Subtract 2 numbers
    3. Divide 2 numbers
    4. Multiply 2 numbers
    Then update the program to get dynamic no of arguments(there can be 2,3,4 etc no of variables passed in when invoking the functions) The function should accept at least 2 variables and throw error if less then 2 are passed. The function should also validate the type of argument passed in
*/


  // Addition of 2 numbers
    function add(op1, op2){
      return op1 + op2;
    }

  // Substarction of 2 numbers
    function substraction(op1, op2){
      return op1 - op2;
    }

  // Multiplication of 2 numbers
    function multiply(op1, op2){
      return op1 * op2;
    }

  // Division of 2 numbers
    function division(op1, op2){
      return op1/op2;
    }

  // Function calling
    add(10, 5);           // will reurn 15
    substraction(10, 5);  // will return 5
    multiply(10, 5);      // will return 50
    division(10, 5);      // Will reurn 2

  // Dynamic arguments

    function sum_calculation(){
      try{

        if(arguments.length < 2) throw 'Please pass at least 2 parameters';

        var sum = 0;

        for(var i = 0; i < arguments.length; i++){
          if(typeof(arguments[i]) != 'number') throw 'Please pass only numbers as parameters'
          sum += arguments[i];
        }

        console.log(sum);

      }catch(exception) {
        alert(exception);
      }

    } // End of function

  sum_calculation();
  sum_calculation(1);
  sum_calculation(1, null);
  sum_calculation(1, 2, 3);
/*
  2. Write a program that will do the following:
      1. Create a student class and then create multiple student objects out of it.
      2. Using a student object, add a method in the student class that will be then accessible from new objects created.
*/

    function Student(id, name, age) {
      this.id = id;
      this.name = name;
      this.age = age;
    }

    var student1 = new Student(1, 'Jhon Clark', 12);
    var student2 = new Student(2, 'Eliza Marks', 13);
    var student3 = new Student(3, 'Nick Timms', 15);


    var student4 = new Student(4, 'Dean Crook', 16);

    // adding a method to an Object
    student4.full_name = function(){
      return this.name + " " + this.name;
    }
/*
  3. Write a program that can make the use of 'reserved' keywords in JS without getting any error.
*/

  function reserve_words(){

    var number = 10;
    const MY_CONSTANT = "Cuelogic"; // Constant defination
    console.log(MY_CONSTANT);

    if(number > 100)
      break;  // break statement

    var num = number + 10;
    debugger;  // Debugger: stops execution of JavaScript, and calls (if available) the debugging function.

    eval(number * 10); // evaluate

    for(var i = 0; i < 10; i++){
      console.log(i);
    }
    console.log(i)// i is available here

    for(let k = 0; k < 10; k++){
      console.log(k);
    }
    console.log(k); // k is not available here, it will through an error

    encodeURI('https://demo.found.ly/prospects?utf8=%E2%9C%93&search_string=abc&tag_list=&by_name=');

    void('http://stackoverflow.com/questions/666936/what-is-the-point-of-void-operator-in-javascript');

    throw new Error('Throw error message for testing');
  }

  reserve_words();
/*
  4. Write a program that will print number from 1 to 100 using all the variants of a loop structure(for,while,do while etc)
*/

  // For loop
    for(var i = 1; i <= 100; i++){
      console.log(i);
    }

  // while loop
    var num = 1;
    while(num <= 100){
      console.log(num);
      num++;
    }

  // Do while loop
    var num = 1;
    do{
      console.log(num);
      num++;
    }while(num <= 100);