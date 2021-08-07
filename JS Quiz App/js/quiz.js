window.onload=function(){
  show(0);
}
function start(event){
   event.preventDefault(); // for prevent submit form
    let name = document.forms["form"]["stdname"].value;
  // store name in session storage
    sessionStorage.setItem("name",name);
    location.href="quiz.html";
}
     let student_name = sessionStorage.getItem("name");
 document.getElementById("users").innerHTML=`<h2> Welcome! ${student_name} </h2>`;
 
let questions = [
  {
    id: 1,
    question: "Which one of these is a JavaScript package manager?",
    answer: "npm",
    options: [
      "Node.js",
      "TypeScript",
      "npm",
      "None of these"
    ]
  },
 
  
  {
    id: 2,
    question: "Who invented JavaScript?",
    answer: "Brendan Eich",
    options: [
      "Douglas Crockford",
      "Sheryl Sandberg",
      "None of these",
      "Brendan Eich"
    ]
  },
  {
    id: 3,
    question: "Which tool can you use to ensure code quality?",
    answer: "ESLint",
    options: [
       "Angular",
       "jQuery",
        "RequireJS",
        "ESLint"
    ]
  },
  {
    id: 4,
    question: "Which one of these is a JavaScript package manager?",
    answer: "npm",
    options: [
      "Node.js",
      "TypeScript",
      "npm",
      "None of these"
    ]
  },
  {
    id: 5,
    question: "Which tool can you use to ensure code quality?",
    answer: "ESLint",
    options: [
       "Angular",
       "jQuery",
        "RequireJS",
        "ESLint"
    ]
  },
  {
    id: 6,
    question: "Which one of these is a JavaScript package manager?",
    answer: "npm",
    options: [
      "Node.js",
      "TypeScript",
      "npm",
      "None of these"
    ]
  }
];

let question_count = 0;
let mark = 0;
function next(){
  
  //Redirect to end page 
  if(question_count == questions.length-1){
    location.href="end.html";
  }
  
    // fetching Answer
  let ans = document.querySelector("li.option.active").innerHTML;
  // Conmparing with Answer
 if(ans==questions[question_count].answer){
   mark++;
   sessionStorage.setItem("score",mark);
 }
  question_count++;
  show (question_count);
}
function show(count){
  document.getElementById("questions").innerHTML = `<h2> Q.${count+1} ${questions[count].question} </h2>`;
   // Fetching and saving question number out total length
  document.getElementById("mcq_number").innerHTML = `<h2> ${count+1} / ${questions.length} </h2>`;

               let x = document.getElementsByClassName("option");
               x[0].innerHTML = questions[count].options[0];
               x[1].innerHTML = questions[count].options[1];
               x[2].innerHTML = questions[count].options[2];
               x[3].innerHTML = questions[count].options[3];
               toggleactive();
              
  
}
function toggleactive (){
  
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick=function(){
      for (let j = 0; j < option.length; j++) {
      if (option[j].classList.contains("active")){
       option[j].classList.remove("active");
    }
  }
  option[i].classList.add("active");
  
}
}

}

// $('#RefreshPage').click(function() { 
    	     
// });