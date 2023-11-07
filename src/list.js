
import { node } from "./node.js";
 
  export default class linkedList{
    constructor(){
        this.listHead = null;
    }
     
    append(value){
       
       if(this.listHead ==null){
        this.prepend(value);
       }else{
        let temp = this.listHead; 
       }}
    prepend(value){
        let temp = null;
        if(this.listHead !=null)temp = this.listHead;
        this.listHead = new node(value);
        this.listHead.nextNode = temp;

    }
    size(){
        let count = 0;
        let temp = this.listHead;
        while(temp.nextNode!=null){
            count++
            temp = temp.nextNode;
        }
        return count;
    }

   
    tail(){
        let temp = this.listHead;
        while(temp.nextNode != null){
            temp = temp.nextNode;
        }
        return temp;
    }
    at(index){
        let count = 0;
        temp = this.listHead;
         for(let i = 0; i<index; i++){
            temp = temp.nextNode;
            if(temp ==null){ return 'No item for this index';}
         }

        return temp;
    }

    pop(){
        let temp = this.listHead;
        let previous = null
        while(temp.nextNode !=null){
            previous = temp;
            temp = temp.nextNode;
        }
        previous.nextNode = null

    }
    contains(value){
        let temp = this.listHead;
        while(temp.value!=value){
            temp = temp.nextNode;
            if(temp.nextNode ==null){
                return false;
            }
        }
        return true;
    }
    find(value){
        let count = 0;
        let temp = this.listHead;
        while(temp.value!=value){
           
            if(temp.nextNode ==null){
                return null;
            }
            temp = temp.nextNode; 
            count++;        
        }
        return count;

    }
    toString(){
        let temp = this.listHead;
        let listString = '';
        while(temp!=null){
            
            listString += `(${temp.value}) -> `;
            temp = temp.nextNode;
        }
       
            listString += 'null';
        
        return listString;
    }
    head(){
        return this.listHead;
    }

}