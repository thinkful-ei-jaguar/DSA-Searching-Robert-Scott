import React, { Component } from 'react'

const list=[89,30,25,32,72,70,51,42,25,24,53,55,78,50,13,40,48,32,26,2,14,33,45,72,56,44,21,88,27,68,15,62,93,98,73,28,16,46,87,28,65,38,67,16,85,63,23,69,64,91,9,70,81,27,97,82,6,88,3,7,46,13,11,64,76,31,26,38,28,13,17,69,90,1,6,7,64,43,9,73,80,98,46,27,22,87,49,83,6,39,42,51,54,84,34,53,78,40,14,5]

const listA = list.sort();



export default class BinarySearch extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentnumber:0,
        searchnum:null,
        counter:0,
      };
    }

    binarySearch = (array, value, start=0, end=array.length-1) => {
        if (start > end) return -1;
        //find the midpoint and the item at the midpoint
        let index = Math.floor((start + end) / 2);
        let item = array[index];
        
        //if the middle element is the target them return that location
        if (item === parseInt(value)) {
            this.state.counter++;
            console.log(item);
            return index ;
        }
        //if the middle element is less than the target then the target lies 
        //on the right side so eliminate all left side and only 
        //consider after the middle to the end of the array
        else if (item < parseInt(value)) {
            console.log(item);
            this.state.counter++;
            return this.binarySearch(array, value, index + 1, end);
        }
        //if the middle element is greater than the target then the 
        //target is on the left side so the left of the middle 
        else if (item > parseInt(value)) {
            this.state.counter++;
            return this.binarySearch(array, value, start, index - 1);
        }
    };



    thisHandleChange=event=>{
        //console.log(this.state.currentnumber);
        this.setState({
            currentnumber:event.target.value,
        })
    }
    
    
    submit = e => {
        e.preventDefault();
        console.log(this.state.currentnumber);
        const i = this.binarySearch(listA, this.state.currentnumber)
        console.log(i);
        this.setState({
            searchnum:listA[i],
        })    
    }



    render() {
        return (
            <>
            <form onSubmit={this.submit}>
            <label>Search number</label>
            <input onChange={this.thisHandleChange}></input>
            <button type ="submit">submit</button>
            </form>
            {this.state.searchnum ? 
            <>
            <h2>it took {this.state.counter} tries to get {this.state.searchnum} using binary search</h2>
            </>:<></>}
            </>
        )
    }
}