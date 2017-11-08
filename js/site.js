var curChoices;


/* var quotes = [
  '(BL)What process did you go through to produce this piece?',
  '(BL)In what ways do you think you need to improve?',
  '(BL)What problems did you encounter while you were working on this piece? How did you solve them?',
  '(IL)What was especially satisfying to you about either the process or the finished product?',
  '(IL)What did you learn about yourself as you worked on this piece?',
  '(IL)How did those changes come about?',
  '(OL)Did you do your work the way other people did theirs?',
  '(OL)What the one thing you particularly want people to notice when they look at your work?',
  '(OL)If someone else were looking at the piece, what might they learn about who you are?',
  '(FL)What would you change if you had a chance to do this piece over again?',
  '(FL)Whats one goal you would like to set for yourself for next time?',
  '(FL)What things you might want more help with?',
] */

var backwardArr = [
  '(BL)What process did you go through to produce this piece?',
  '(BL)In what ways do you think you need to improve?',
  '(BL)What problems did you encounter while you were working on this piece? How did you solve them?',
]


// var inwardArr = [
//   '(IL)What was especially satisfying to you about either the process or the finished product?',
//   '(IL)What did you learn about yourself as you worked on this piece?',
//   '(IL)How did those changes come about?'
// ]

var inwardArr = [
  "<h1><img class='listlogo' src='images/watch.png' style='width:61,4px;height:46px;'></h1></p><p class='lista'> <li>What was especially satisfying to you <br>about either the process or the finished product?</li></p>",
  "<b>(IL)</b><p class='lista'><li>What did you learn about yourself as you worked on this piece?</li></p>",
  "<b>(IL)</b><p class='lista'><li>How did those changes come about?</li></p>"
]

var outwardArr = [
  '(OL)Did you do your work the way other people did theirs?',
  '(OL)What the one thing you particularly want people to notice when they look at your work?',
  '(OL)If someone else were looking at the piece, what might they learn about who you are?',
]

var forwardArr = [
  '(FL)What would you change if you had a chance to do this piece over again?',
  '(FL)Whats one goal you would like to set for yourself for next time?',
  '(FL)What things you might want more help with?',
]


function myFunction() {
  var x = document.getElementById("why");
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// document.getElementById("why").onclick = function() {myFunction()};

// function myFunction() {
//     document.getElementById("why").innerHTML = "YOU CLICKED ME!";
// }

function newzQuote(indexArr) {
  console.log("newzQuote:");
  if (indexArr == 001) {
    tempArray = backwardArr;
  } else if (indexArr == 002) {
    tempArray = inwardArr;
  } else if (indexArr == 003) {
    tempArray = outwardArr;
  } else if (indexArr == 004) {
    tempArray = forwardArr;
  }
//HÄR LÄGGER VI IN DROPDOWN SAMT TIMER, SE POOP//
  var randomNumber = Math.floor(Math.random() * (tempArray.length));
  var newQuote1 = tempArray[randomNumber];
  console.log(newQuote1);
  $("#question").html(newQuote1);

}


function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

var generateAnser = function(){
  generateQuestion();

  console.log("klick!!!"); // här gör vi magi 
  $("#quoteDisplay").css("display", "block"); // visa 
  // $("#generate").css("display", "none"); // göm 
  // $("#refelectionSelector").css("display", "none");
}

$(".button").on("click", );

var generateQuestion = function () {
  var curChoice = $("#groupmembers3").val();
  console.log("selected value is!", curChoice)
  if (curChoice == 1) {
    newzQuote(001);
  } else if (curChoice == 2) {
    newzQuote(002);
  } else if (curChoice == 3) {
    newzQuote(003);
  } else if (curChoice == 4) {
    newzQuote(004);
  }
  $("#quoteDisplay").css("display", "block")
}


btn.addEventListener("click", function (event) {
  container.classList.toggle("is-visible");
}, false);

$("#groupmembers1, #groupmembers2, #groupmembers3").change(function () {
  //curChoice = $("#groupmembers3").val();

})

function CountdownTimer(obnm){
  // http://coursesweb.net/javascript/
   var endct =0;  // it is set to 1 when script starts
   var ctmnts =0;  // minutes
   var ctsecs =0;  // seconds
   var startchr =0;  // used to control when to read data from form, and script finished
   var ctpause =-1;  //if -1, pause the script
 
   //get html elms.
   var el_showmns = document.getElementById('showmns');
   var el_showscs = document.getElementById('showscs');
   var el_mns = document.getElementById('mns');
   var el_scs = document.getElementById('scs');
   var el_btnct = document.getElementById('btnct');
   var el_btnct_res = document.getElementById('btnct_res');
   var el_btnct_end = document.getElementById('btnct_end');
 
   //to start/pause/resume Countdown Timer
   function startPauseCT(){
     if(parseInt(el_mns.value) >0 || parseInt(el_scs.value)>0 || endct ==1){
       ctpause *=-1;
       if(ctpause ==1){ //Start and set next click as Pause
         el_btnct.value ='PAUSE';
         window[obnm].countdownTimer();
       }
       else el_btnct.value ='RESUME';
     }
   }
 
   // HERE YOU CAN ADD TO EXECUTE JavaScript instructions WHEN COUNTDOWN TIMER REACHES TO 0
   function endCT(){
     // HERE ADD YOUR CODE
 
     return false;
   }
 
   this.countdownTimer = function(){
     // if $startchr is 0, and form fields exists, gets data for minutes and seconds, and sets $startchr to 1
     if(startchr == 0 && el_mns && el_scs) {
       // makes sure the script uses integer numbers
       ctmnts = parseInt(el_mns.value);
       ctsecs = parseInt(el_scs.value);
 
       // if data not a number, sets the value to 0
       if(isNaN(ctmnts)) ctmnts = 0;
       if(isNaN(ctsecs)) ctsecs = 0;
 
       // rewrite data in form fields to be sure that the fields for minutes and seconds contain integer number
       el_mns.value = ctmnts;
       el_scs.value = ctsecs;
       startchr = 1;
     }
 
     if(ctmnts >0 || ctsecs >0) endct =1;  //to can call endCT() at the ending
 
     // if minutes and seconds are 0, call endCT()
     if(ctmnts==0 && ctsecs==0 && endct ==1){
       startchr =0;
       ctpause =-1;
       endct =0;
       el_btnct.value ='START';
       endCT();
     }
     else if(startchr ==1 && ctpause ==1){
       // decrease seconds, and decrease minutes if seconds reach to 0
       ctsecs--;
       if(ctsecs < 0){
         if(ctmnts > 0) {
           ctsecs = 59;
           ctmnts--;
         }
         else {
           ctsecs = 0;
           ctmnts = 0;
         }
       }
       setTimeout(obnm +'.countdownTimer()', 1000); //auto-calls this function after 1 seccond
     }
 
     // display the time in page
     el_showmns.innerHTML = ctmnts;
     el_showscs.innerHTML = ctsecs;
     if(ctmnts == 0 && ctsecs == 0){
      //  alert("Tiden är slut!");
        document.getElementById("countdownSlut").innerHTML = "Tiden är slut!"
     }
   }
 
   //set event to button that starts the Countdown Timer
   if(el_btnct) el_btnct.addEventListener('click', startPauseCT);
 
   //restart Countdown Timer from the initial values
   if(el_btnct_res) el_btnct_res.addEventListener('click', function(){ startchr =0; if(ctpause ==-1) startPauseCT(); });
 
   //ending Countdown Timer, sets 0 form data
   if(el_btnct_end) el_btnct_end.addEventListener('click', function(){ el_mns.value =0; el_scs.value =0; startchr =0; startPauseCT(); });
 }
 
 //set object of CountdownTimer class
 var obCT = new CountdownTimer('obCT');
 // ]]