class Node {
    constructor(head, next = null){
        this.head = head
        this.next = next
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }

    //add element to front of list
    insertFirst(data){
        this.head = new Node(data, this.head)
        this.size++
    }

    printLinkedList(){
        for(let curr = this.head; curr; curr = curr.next){
            console.log(curr.head)
        }
    }

    insertIndex(data, index){
        let node = new Node(data)
        if(index > this.size || index < 0){
            console.log('index not in linkedList')
            return
        }
        else if(index == 0){
            this.insertFirst(data)
        }
        else if(index == this.size){
            let curr = this.head
            for(; curr.next; curr=curr.next){         
            }
            curr.next = node
            this.size++;
        }
        else{

            let current = this.head
            let previous

            let i = 0;
            for(; i < index; current = current.next){   
                previous = current
                i++
            }
            node.next = current
            previous.next = node
            this.size++;
        }
    }
    
    getIndex(index){
        let current = this.head
        let i = 0
        if (index < 0 || index >= this.size) {
            console.log('invalid index')
            return
        }
        else {
            while(current){
                if(i == index){
                    return current.head
                }
                else{
                    current = current.next
                    i++
                }
            }
        }
    }

    removeIndex(index){
        let i = 0
        let current = this.head
        let previous

        if (index < 0 || index >= this.size) {
            console.log('invalid index')
            return
        }
        else if(index == 0){
            this.head = this.head.next
            this.size--
        }
        else{
            
            for( ; i < index; current = current.next){
                i++
                console.log(i)
                previous = current
                }
                console.log(previous)
                console.log(current)
                previous.next = current.next
                this.size--
        }
    }

    clearList(){
        this.head = null
        this.size = 0
    }

}





    

const ll = new LinkedList();
ll.insertFirst(100)
ll.insertFirst(200)
ll.insertFirst(300)

console.log(ll)

ll.printLinkedList()

ll.insertIndex(5, 2)
console.log('here')
ll.printLinkedList()

console.log(`index at 2 is ${ll.getIndex(2)}`)

ll.removeIndex(2)
console.log('here')
ll.printLinkedList()
