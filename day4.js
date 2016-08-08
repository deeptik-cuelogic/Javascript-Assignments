/*
  1. Write a program to copy two objects. It should accept two arguments - source ( the object from which we need to copy) and target ( to which we need to copy). The target object will initially be empty.
*/

  function copy_objects(obj1, obj2){
    obj2 = obj1
    console.log(obj2);
  }

  var obj1 = { name: 'test', age: 20 }
  var obj2 = {}
  copy_objects(obj1, obj2)


/*
  2. Write a program to merge two objects. It should accept two arguments - objectA and objectB. The result object will have the combined values and should not change the structure of either objectA or objectB. If both objects have same properties, consider using objectA property instead.
*/

    function merge_objects(obj1, obj2){
      objC = Object.assign({}, obj1, obj2)
      console.log(objC);
    }

    var objA = { name: 'test', age: 10 }
    var objB = { id: 1 }
    var objC;
    merge_objects(objA, objB)

/*
  3. Extend number type to have a 'float()' function that will convert any given 'integer' value to its float equivalent. (a no such as 5 should become 5.00) The function should only return that value and should not affect the actual number's value.
*/

    function convert_int_to_float(int_num){
      var float_val = int_num.toFixed(2);
      console.log(float_val);
      return float_val;
    }

    var num = 45;
    convert_int_to_float(num);

/*
  4. Extend number type to have a 'int()' function that will convert any given 'float' value to its integer equivalent. (a no such as 5.00 should become 5). The function should only return that value and should not affect the actual number's value.
*/

    function convert_float_to_int(float_num){
      var int_val = parseInt(float_num);
      console.log(int_val);
      return int_val;
    }

    var num = 45.00;
    convert_float_to_int(num);


/*
  5.Write a program to loop through the children of a ul element(ul will have 5 li's). Loop through each of the li and attach a function on it that will alert the value of that li (html text inside the li).
*/

    function showText(item) {
      console.log(item.innerText)
      return item.innerText
    }

    function getTextCallback(item) {
      return function() {
        showHelp(item);
      };
    }


    document.body.innerHTML = '<ul id="fruits_name"><li>Apple</li><li>Orange</li><li>Banana</li><li>Mango</li></ul>'

    function printLitext() {
      ul = document.getElementById("fruits_name");
      var items = ul.getElementsByTagName("li");
      for (var i = 0; i < items.length; i++) {

        var link = items[i];

        // First Way to show text using closure
         link.onclick = (function(value) {
            return function() { alert(value.innerText); }
        })(link);

        // Second way to print text using closure
        link.onclick = makeHelpCallback(link)
      }

    }

    printLitext();
