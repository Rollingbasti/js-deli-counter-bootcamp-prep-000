var katzDeli = [];

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  var number = 0;
  if(katzDeliLine.length === 0){
    number = katzDeliLine.length + 1;
  }else{
    number = katzDeliLine.length;
  }
  return "Welcome, " + name + ". You are number " + number + " in line.";
}

function nowServing(){
  var sentence;
  if(katzDeli.length === 0){
    sentence = "There is nobody waiting to be served!";
  }else{
    sentence = katzDeli[0];
    katzDeli.shift();
  }
  return sentence;
}