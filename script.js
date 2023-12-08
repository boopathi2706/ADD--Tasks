const quizData = [
    {
        question:"whish language runs in a web browser?",
        a:"Java",
        b:"C",
        c:"Python",
        d:"Java script",
        correct: "d",
    },

    {
        question:"What does css stand for?",
        a:"Central style sheets",
        b:"Cascading style sheets",
        c:"Cascading simple sheets",
        d:"cars SUVs sailboats",
        correct: "b",

    },
    {
        question:"What does HTML stand for?",
        a:"Hypertext markup language",
        b:"Hypertext markdown language",
        c:"Hyperloop machine language",
        d:"Hyper markup language",
        correct: "a", 
    },
    {
        question:"What year was javascript lunched?",
        a:"1996",
        b:"1995",
        c:"1994",
        d:"none of the above",
        correct: "b",
    }
];
 
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

} 

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)

}

function getselected(){
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click',() => {
    const answer = getselected()
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()

        }
        else{
            quiz.innerHTML = ` <h2>You answer ${score}/${quizData.length} questions correctly<h2>
            
            <button onclick= "location.reload()">Reload</button> `
         
           
            
            
        }
    }
})