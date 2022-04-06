
// JavaScript code
function search_book() {
    let input = document.getElementById('header_search').value;
    input=input.toLowerCase();
    console.log(input);
    let x = document.getElementsByClassName('card-name');
    for (i = 0; i < x.length; i++) { 
        let parent = x[i].parentNode.parentElement;
        if (!x[i].innerText.toLowerCase().includes(input)) {
            parent.style.display="none";
            console.log('inside if', parent);
        }
        else {
            parent.style.display="list-item"; 
            console.log('inside else', parent);                
        }
    }
}

const sort_by = ()=>{
    // let option = document.getElementById();
    let books = document.getElementById('category-details-items').getElementsByClassName('card-name');
    console.log(books);
    console.log(books.sort());
}