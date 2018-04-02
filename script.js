// edit the good word to anything you want as feedback.
// don't edit anything else, even the double quotes.
let feedback = "good";
let userChoice = prompt('Enter choice\n\n1. Strongly Agree\n2. Agree\n3. Neutral\n4. Disagree\n5. Strongly Disagree\n')-1;

let questions = new Array(4,7,6,4,4);

// checks all feedbacks
questions.forEach(function(item, index){
  for (let i=1; i<= item; i++) {
    let id = '#ctl00_ContentPlaceHolder1_rptFeedback_ctl0'+(index+1)+'_dgFeedback_ctl0'+(i+1)+'_rblRating_'+userChoice;
    let element = document.querySelector(id);
    console.log(id);
    console.log(element);
    element.click();
  }
});

// checks all yes or no questions
for (let j = 1; j<4 ; j++) {
  document.querySelector('#ctl00_ContentPlaceHolder1_rdbQuestion'+j+'_0').click();
}


document.getElementById('ctl00_ContentPlaceHolder1_txtComments').innerText = feedback;

document.getElementById('ctl00_ContentPlaceHolder1_btnSubmit').click();
