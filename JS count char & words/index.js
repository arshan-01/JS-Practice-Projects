const count=() => {
    //character count
    let char=document.getElementById('text').value.length;
    document.getElementById('chars').innerHTML="Number of characters are "+ char;
    //words count
    let words=document.getElementById('text').value;
    words=words.match(/\w+/g);

    document.getElementById('word').innerHTML="Number of words are "+ words.length;


    // alert("Number of characters are "+ char);
}