
import linkedList from "./list.js";

const list = new linkedList();

list.append('john');
list.append('patrick');
console.log(list.toString())
list.prepend('dean');
console.log(list.head());
console.log(list.size());
list.prepend('joe');
console.log(list.toString());
list.pop();
console.log(list.toString());
console.log(list.at(2));
console.log(list.contains('patrick'))
 console.log(list.toString());
  