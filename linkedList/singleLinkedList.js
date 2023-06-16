//method is used for creating a node with the value
class Node {
    constructor(value){
        
        this.value = value;
//initially created node will point to the null
        this.next = null;
    }
}

//
class linkedList{
    constructor(){
        this.head = null;
        this.size = 0
    }

    isEmpty(){
        return this.size===0
    }

    getSize(){
        return this.size 
    }

    prepend(value){
        const node = new Node(value)
        //if list is empty making newly created node as head Node
        if(this.isEmpty()){
            this.head = node

        }else{
        // making new node's next pointer points to the headnode
            node.next = this.head;
        // making new node as headnode
            this.head = node 
        }
        this.size++
    }

    append(value){
        const node = new Node(value)
    //checking if the list is empty so the making the new node as headnode
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head
        //run the loop until there is no next node exists
            while(prev.next){
        //assign the next node to the prev node
                prev = prev.next
            }
        //change the next node's next pointer to point newly created node
            prev.next = node
        }
        this.size++
    }

    insert(value,index){
        if(index<0||index>this.size){
            return
        }
        if(index===0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next

            }

            node.next = prev.next
            prev.next = node
            this.size++

        }
    }

removeFrom(index){
    if(index<0||index>this.size){
        return null
    } 
    let removedNode;
    if(index===0){
        removedNode = this.head
        this.head = this.head.next
    }else{
        let prev = this.head
        for(let i =0; i<index-1;i++){
            prev = prev.next
        }
        removedNode = prev.next
        prev.next = removedNode.next

    }
    this.size--
    return removedNode.value
}

    printList(){
        if(this.isEmpty()){
            console.log('linked list is empty')
        }else{
            let current = this.head
            let listValues = ''
            while(current){
                listValues+=`${current.value}------------>`
                current = current.next
            }
            console.log(listValues)
        }
    }
}

const list = new linkedList()

list.insert(11,0)
list.insert(12,0)
list.insert(13,1)
list.printList()
list.removeFrom(1)

list.printList()


