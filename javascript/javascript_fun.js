
let datatopdf={
    
}

////////////////////////////////////// Pay Calculator //////////////////////////////////////

function pay_calculator(hoursprice,perhour,date,credithour,totalhour,hourrate,crosspay){
    // alert("run");

    var per_hour= document.getElementById(hoursprice).value;
    for(i=1 ; i<=5 ; i++){
        document.getElementById(perhour+i.toString()).value = per_hour;
    }
    var date_credit_hours=[];
    for(i=1; i<=5 ; i++){
       var get_date =  document.getElementsByClassName(date+i.toString());
       date_credit_hours[i] =find_credit_hour(get_date);
    }
    for(i=1;i<=5;i++){
        document.getElementById(credithour+i.toString()).value = date_credit_hours[i];
    }
    
    if(per_hour == "400"){
        for(i=1;i<=5;i++){
            document.getElementById(totalhour+i.toString()).value = parseInt( date_credit_hours[i])*2;
           }
           
    }else{
        for(i=1;i<=5;i++){
            document.getElementById(totalhour+i.toString()).value = parseInt( date_credit_hours[i]);
           }
     }
    for(var i=1 ; i<=5 ; i++){
        sethourxrate(i.toString(),totalhour,perhour,hourrate,crosspay);
    }
}


//////////////////////////////Send Values To Calculator////////////////////////////////////


function sethourxrate(row,totalhour,perhour,hourrate,crosspay){

    var _totalhour = document.getElementById(totalhour+row).value;
    var _perhour = document.getElementById(perhour+row).value;
    document.getElementById(hourrate+row).value = _totalhour+" x "+_perhour+" =";
    document.getElementById(crosspay+row).value = parseInt(_totalhour)*parseInt(_perhour)

}

/////////////////////////////////Check Number Of Dates///////////////////////////////////

function find_credit_hour(data){
    var credit_hour = 0;
    for(var i = 0 ;i<5 ;i++){
    if(data[i].value != "0" && data[i].value != "00" && data[i].value != ""){
     credit_hour += char_count(data[i].value+",",",");
    }
    }
    return credit_hour;
}


//////////////////////////////Counter Of Checking Dates//////////////////////////////

function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

/////////////////////////////Show and Hide Time ///////////////////////////////////
function show_time_date(timeanddate,option1,option2){
    var select=document.getElementById(timeanddate).value;
    var opt1 = document.getElementsByClassName(option1.toString());
    var opt2 = document.getElementsByClassName(option2.toString());
    
    if(select == '1'){
        hide_fields(opt2);
        show_fields(opt1);
    }else if(select == '2')
    {
        show_fields(opt1);
        show_fields(opt2);
    }
}


function show_fields(opt){
    opt[0].style.display = "block";
    opt[1].style.display = "block";
    opt[2].style.display = "block";
   
}
function hide_fields(opt){
    opt[0].style.display="none";
    opt[1].style.display="none";
    opt[2].style.display="none";
    
}


function senddatatopdf(){}




