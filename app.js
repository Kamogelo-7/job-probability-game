//*Job probability game

$("#submit").on("click",function (){
  let userNames = $("#txt").val(); //Stores the users name

  let randomNumber = Math.floor(Math.random() * 100) + 1; //Generates a random number from 1 to 100

  if (randomNumber > 70) {
    $("p").text("😀 Wow you should start applying!");
    $("h3").text(`${randomNumber}%`);
    $("h2").text(`Hey ${userNames}, you got`);
  } 
  else if (randomNumber >= 40 && randomNumber <= 70) {
    $("p").text("You are able to get a job!");
    $("h3").text(`${randomNumber}%`);
    $("h2").text(`Hey ${userNames}, you got`);
  }
  if (randomNumber < 30) {
    $("p").text("YOOO WATCH OUT, YOUR COOKED NGL JUST CRY! 😂");
    $("h3").text(`${randomNumber}%`);
    $("h2").text(`Hey ${userNames}, no luck you got`);
    $("h4").text("Sorry try again 😖");
  }
})
