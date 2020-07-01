let input1 = {
                value: 1,
                next: {
                    value: 4,
                    next: {
                        value: 2,
                        next: {
                            value: 5,
                            next: {
                                value: 3
                            }
                        }
                    }
                }
            };
console.log(groupEvenOdd(input1)); 
function groupEvenOdd(input){
let currentNode=input;
let oddArray=[];
let evenArray=[];
while(currentNode.next!==undefined){
  oddArray.push(currentNode.value);
  evenArray.push(currentNode.next.value);
  if(currentNode.next.next!==undefined){
    currentNode=currentNode.next.next;
  }
}
oddArray.push(currentNode.value);
// console.log(oddArray);
// console.log(evenArray);
let newArray=oddArray.concat(evenArray);
// console.log(newArray);
let head={value:newArray[0],next:undefined};
currentNode=head;
for(let i=1;i<newArray.length;i++){
  let newNode={value:newArray[i],next:undefined};
  currentNode.next=newNode;
  currentNode=currentNode.next;
}
return JSON.stringify(head);
}