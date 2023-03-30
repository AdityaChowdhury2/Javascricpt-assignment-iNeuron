// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

contract structure_gas {
    struct Book {
        string title;
        string author;
        uint8 bookId;
        uint8 price;

    }
    // define a struct
    Book book; 

    // function setBookMemory(Book memory _book) public { // total gas 106508 , Transaction cost 92615, execution cost 70051
    //    book = _book; 
    // }
    function setBookCalldata(Book calldata _book) public { // total gas 106104 , Transaction cost 92264, execution cost 69700
       book = _book;
    }
    
    // function setBook() public{ // total gas 102444 , Transaction cost 89081, execution cost 68017
    //     book = Book("Blockchain for beginners", "Ineuron", 4,100);
    // }
    // function setBook(Book storage _book) public{ //error we can not pass argument as storage data location.
    //     book = _book;
    // }
    function getBook() public view returns(Book memory){
        return book;
    }

    function getBookId() public view returns(uint8)
    {
        return book.bookId;
    }
    function getBookTitle() public view returns(string memory) //here we cannot pass storage cause function returns temporary variable so 
    //it should either memory or calldata but it can not be calldata cause it returns the state variables which is in storage. 
    {
        return book.title;
    }
    function getBookAuthor() public view returns(string memory)
    {
        return book.author;
    }
    function getBookPrice() public view returns(uint8)
    {
        return book.price;
    }
}