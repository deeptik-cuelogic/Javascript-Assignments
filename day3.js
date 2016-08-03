//http://doctrina.org/Javascript-Function-Invocation-Patterns.html
//http://www.w3schools.com/js/js_function_invocation.asp
//http://mattsnider.com/recursive-function-performance-static-vs-this/
// http://www.w3schools.com/js/js_object_prototypes.asp

// 1. Write a program to calculate factorial using recursive strategy.

function factorial(num)
{
    // If the number is less than 0, reject it.
    if (num < 0) {
        return -1;
    }
    // If the number is 0, its factorial is 1.
    else if (num == 0) {
        return 1;
    }
    // Otherwise, call factorial again.
    else {
        return (num * factorial(num - 1));
    }
}

var result = factorial(5);
console.log(result); // output is 120

// 2. Update program - 2 of Practicals Day 2 to add a method that will print name (called printName()) of each student object in its prototype.

  function Student(id, name, age) {
      this.id = id;
      this.name = name;
      this.age = age;
  }

  Student.prototype.printName = function(){
    console.log("Student Name:" + this.name);
  }

  var student1 = new Student(1, 'Jhon Clark', 12);
  var student2 = new Student(2, 'Eliza Marks', 13);

  student1.printName();

  var student4 = new Student(4, 'Dean Crook', 16);
  student4.printName();

/* 3. Write a program that will do the following:

    1. Accept two string values as arguments, where first value will be a long word(can be any random characters as well), second string will be a single character or substring that will         already exist in the first value.

    2. The function should then return an object with properties - 'count' which will count the no of occurrences of substring in the first value, ' lastIndex' which will return the index of             last occurrence of the substring in the first value.  return -1 if the substring can't be found
*/

  function find_substring(str1, str2){
    this.count =  str1.split(str2).length - 1; // or we can use str1.match(/is/g) || []).length
    this.lastIndex = str1.lastIndexOf(str2);   // Return last occurrence of a specified text in a string else returns -1
  }

  var str = new find_substring("This is a string","is");

  console.log(str.count);
  console.log(str.lastIndex);




// 4. Write a function that will accept a unix timeStamp and covert to its UTC equivalent value

  function time_converter(value){
    utc_time = (new Date(value)).toUTCString();
    console.log(utc_time);
  }

  time_converter(1291656749000);

/*  Write a function that will accept a single dimensional array whose value will be like ['00','01','11','10','11','00'] and break it into a 2 dimensional array like the following:
    [
        [0,0,1,1,1,0]
        [0,1,1,0,1,0]
    ]
    the  length of array can be dynamic and contain as many values as possible
*/

  function getSeperateArray(arr) {
    var len = arr.length;
    var arr1 = [];
    var count = 0;
    for (i = 0; i < len; i++) {
      if(count == 0) {
        arr1[count].push(count);
        count++;
      }
      if(count == 1) {
        arr1[count].push(count);
        count--;
      }
    }
    console.log(arr1);
  }
  var arr = ['00','01','11','10','11','06'];
  getSeperateArray(arr)



/* 6. Write a program to do the following:
    1. Create an array and add numbers 1 to 100 in it
    2. Print each element of that array in a new line WITHOUT using any loop structure.
*/
  var array = [];
  for(var i = 1; i <= 100; i++){
    array.push(i);
  }
  console.log(array.join('\n'));