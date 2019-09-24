const quiz = [{
   id: 1, question: "In the Tekken fighting series, who is the character that grapples and has an animals head?",
    choices: ["Nina", "Hihachi", "King", "Panda"],
    answer: 2
},{
    id: 2, question: "Which Battle Royale came first?",
    choices: ["Fortnite", "PUBG", "Ring of Elysium", "H1Z1"],
    answer: 3

},{ id: 3, question: "Complete the following iconic warning: It's dangerous to go alone...",
    choices: ["...take this sword", "...take this.", "...take that", "...be careful!"],
    answer: 1

},{
    id: 4, question: "Direct X is in conjucnction with the following console...",
    choices:['Xbox','Playstation 4','Nintendo Switch','Sega'],
    answer: 0
},{
    id :5, question: "During the alpha phase of PUBG which of the following places where you able to land?",
    choices: ['Pecado', 'Pochinki','Bootcamp','Pai Nan'],
    answer: 1
}
]

function renderTemplate(quiz) {
    let template = ''
    quiz.forEach(item => {
        template += `<div>${item.question}<br/>`
        item.choices.forEach(choice => {
            template += `<input type='radio'>${choice}<br />`
        })
        template += `<button type='submit'>Submit</button></div>`

    })
    $('#quiz').html(template)

}

function getQuestionOnebyOne(){
    const currentQuestion = 0
    quiz[currentQuestion]
}


$(function(){ renderTemplate(quiz) })

//1_Starting Screen
//2_Question Prompt, based off of arrays for the questions and arrays from the answers questions will be prompt to user one by one
//user should not beable to skip questions without answering or recieving the correct answer, granted they answer incorrectly
//3_Users should beable to see which question they are on and which questions they have gotten correct from the once in which they didnt within footer
//4_User will be shown their overall grade for the quiz at the end and also will be given a chance to restart the quiz upon a press of a button 