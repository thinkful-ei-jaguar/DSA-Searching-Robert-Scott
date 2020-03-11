class BinarySearchTree{
    constructor(key=null,parent=null){
        this.key=key;
        this.parent=parent;
        this.left=null;
        this.right=null;
    }
    insert(item){
        if(this.key===null){
            this.key=item;
        }
        else if(item<this.key){
            if(this.left===null){
                this.left = new BinarySearchTree(item,this)
            }
            else{
            this.left.insert(item);
            }
        }
        else{
            if(this.right===null){
                this.right = new BinarySearchTree(item,this)
            }else{
                this.right.insert(item);
            }
        }
    }
    find(key) {
        if (this.key == key) {
            return this.value;
        }
        else if (key < this.key && this.left) {
            return this.left.find(key);
        }
        else if (key > this.key && this.right) {
            return this.right.find(key);
        }
        else {
            throw new Error('Key Error');
        }
    }

    remove(key) {
        if (this.key == key) {
            if (this.left && this.right) {
                const successor = this.right._findMin();//node with 4
                this.key = successor.key;//change node 3 to  node 4
                this.value = successor.value;//change values
                successor.remove(successor.key);
            }
            else if (this.left) {
                this._replaceWith(this.left);
            }
            else if (this.right) {
                this._replaceWith(this.right);
            }
            else {
                this._replaceWith(null);
            }
        }
        else if (key < this.key && this.left) {
            this.left.remove(key);
        }
        else if (key > this.key && this.right) {
            this.right.remove(key);
        }
        else {
            throw new Error('Key Error');
        }
    }
    _replaceWith(node) {
        if (this.parent) {
            if (this == this.parent.left) {
                this.parent.left = node;
            }
            else if (this == this.parent.right) {
                this.parent.right = node;
            }

            if (node) {
                node.parent = this.parent;
            }
        }
        else {
            if (node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            }
            else {
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }
    }
    _findMin() {
        if (!this.left) {
            return this;
        }
        return this.left._findMin();
    }
    postorder(){
    if(this.left){
        this.left.postorder();
    }
    if(this.right){
        this.right.postorder();
    }
        console.log(this.key)
    }
    inorder(){
        if(this.left){
        this.left.inorder();
        }
        console.log(this.key)
        if(this.right){
            this.right.inorder();
        }
       
    }
    preorder(){
        console.log(this.key)
        if(this.left){
        this.left.preorder();
        }
        if(this.right){
            this.right.preorder();
        }
       
    }
}

//##1
const list1=[3, 5, 6, 8, 11, 12, 14, 15, 17, 18];
//recursive binary search algorithm
//first 11->5->6
//will take in 3 calls
const list2=[3, 5, 6, 8, 11, 12, 14, 15, 17, 18];
//11->15->17 return null
//will take in 3 calls

//##3
//find book 
/* Imagine you are looking for a book in a library with a Dewey Decimal 
index. How would you go about it? Can you express this process as a search algorithm? 
Implement your algorithm to find a book whose Dewey and book title is provided. */
function findbook(allbooks,book,deweydec,start=0,end=arr.length-1){
    const category = allbooks[Math.floor(deweydec)];//all books in that category
    for(let i =0;i<category.length;i++){
        if(book == category[i]){
            return category[i]
        }
    }
    return -1;
}
//##4
const list3=[14,15,19,25,27,35,79,89,90,91];//inorder

const list4=[35,25,15,14,19,27,89,79,91,90];//preorder

function postorder(){
    if(this.left){
    this.left.postorder();
    }
    if(this.right){
        this.right.postorder
    }
    console.log(this.key)
}
const list5=[14,19,15,23,25,90,79,91,89,35]//postorder without code

const list6=[5,7,6,9,11,10,8]//postorder
const list7=[8,6,5,7,10,9,11]//preorder



//##5

function main(){
const tree= new BinarySearchTree();
tree.insert(25);
tree.insert(15);
tree.insert(50);
tree.insert(10);
tree.insert(24);
tree.insert(35);
tree.insert(70);
tree.insert(4);
tree.insert(12);
tree.insert(18);
tree.insert(31);
tree.insert(44);
tree.insert(66);
tree.insert(90);
tree.insert(22);
console.log("preorder")
tree.preorder();
console.log("postorder")
tree.postorder();
console.log("inorder")
tree.inorder();
}
main();
//##6


