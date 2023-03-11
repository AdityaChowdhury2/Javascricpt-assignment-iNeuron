// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

contract removeZero{
    uint[] nums= [1,2,3]; 
    // uint[] nums= [1,2,3,4,5,6]; 
    // uint[] nums= [1,2,3,4,5,6]; 
    // uint[] nums= [1]; 
    function remove(uint n) public returns(uint[] memory){
        for(uint i=n;i< nums.length-1;i++){
            nums[i]=nums[i+1];
        }
        nums.pop();
        return nums;
    }
    function getValue() public view returns(uint[] memory){
        return nums;
    }
}