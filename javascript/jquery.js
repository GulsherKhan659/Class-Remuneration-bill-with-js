$(document).ready(function () {
	dateincrement();
	
});

function dateincrement(){
	$('#Selectdata').change(function(){
debugger;
	if ($('#Selectdata').val()=='1') {

		$('.op1').css({ "display": "block" })
		
		$('.op2').css({ "display": "none" })
		
		$('.op3').css({ "display": "none" })
	}
	if($('#Selectdata').val()=='2'){
		$('.op2').css({ "display": "block" })
		
		$('.op1').css({ "display": "block" })
		
		$('.op3').css({ "display": "none" })
	}
	if($('#Selectdata').val()=='3') {
		$('.op1').css({ "display": "block" })
		$('.op2').css({ "display": "block" })
		$('.op3').css({ "display": "block" })
	}
else{
	$('').css({ "display": "block" })
}
})
};
function click_alert(){
	alert("ADD");
}

$(document).ready(function () {
	var _container=$(".addforms");
	var _btn=$(".addbutton");
	var _formnumber=1;
	$(_btn).click(function(e){
		

		if(_formnumber<=5){
			 //////////////////////////////////////////////////// Set HTML Code For New Fields ///////////////////////////////////////////////////////////////
            
            var _timedate ='<div class="form-group"><label>Class Time And Date</label><select name="" data-error="You must select an option." id="classTimeAndDate'+_formnumber+'" onchange="show_time_date(\'classTimeAndDate'+_formnumber+'\',\'opt1'+_formnumber+'\',\'opt2'+_formnumber+'\')" class="form-control"><option disabled selected value="-1">select an option</option><option value="1">1</option> <option value="2">2</option></select><div class="help-block with-errors"></div></div>';
			var option1  ='<div class="row"><div class="form-group col-5 opt1'+_formnumber+'" style="display: none;"><label>Start Time</label><input type="time" class="form-control" data-error="You must have a date." id="starttime'+_formnumber+'1"  required><div class="help-block with-errors"></div></div><div class="form-group col-5 opt1'+_formnumber+'" style="display: none;"><label>End Time</label><input type="time" class="form-control" data-error="You must have a date." id="endtime'+_formnumber+'1" placeholder="Name" required> <div class="help-block with-errors"></div></div><div class="form-group col-2 opt1'+_formnumber+'" style="display: none;"><label>Select</label><select name="" data-error="You must select an option." id="dayselect'+_formnumber+'1" class="form-control"><option disabled selected value="-1">option</option><option value="monday">Monday</option><option  value="tuesday">Tuesday</option><option value="wednesday">Wednesday</option><option  value="friday">Friday</option><option value="thursday">Thursday</option></select><div class="help-block with-errors"></div></div></div>';
			var option2  ='<div class="row"><div class="form-group col-5 opt2'+_formnumber+'" style="display: none;"><label>Start Time</label><input type="time" class="form-control" data-error="You must have a date." id="starttime'+_formnumber+'2"  required><div class="help-block with-errors"></div></div><div class="form-group col-5 opt2'+_formnumber+'" style="display: none;"><label>End Time</label><input type="time" class="form-control" data-error="You must have a date." id="endtime'+_formnumber+'2" placeholder="Name" required> <div class="help-block with-errors"></div></div><div class="form-group col-2 opt2'+_formnumber+'" style="display: none;"><label>Select</label><select name="" data-error="You must select an option." id="dayselect'+_formnumber+'2" class="form-control"><option disabled selected value="-1">option</option><option value="monday">Monday</option><option  value="tuesday">Tuesday</option><option value="wednesday">Wednesday</option><option  value="friday">Friday</option><option value="thursday">Thursday</option></select><div class="help-block with-errors"></div></div></div>';
			var numofinc ='<div class="row"> <div class="form-group col-6"><label>Name of Incumbent</label><input type="text" class="form-control" data-error="You must have a name." id="subject'+_formnumber+'" placeholder="Name of Incumbent" required> <div class="help-block with-errors"></div></div>';
            var group_desg = '<div class="form-group col-6"><label>Group</label><input type="text" class="form-control" name="designation" maxlength="10" minlength="3" pattern="^[a-zA-Z0-9_.-]*$" id="group'+_formnumber+'" placeholder="Group" required><div class="help-block with-errors"></div></div></div>';
			var date1 = '<div class="row"><div class="form-group col-4"><label>Months</label><div class="form-group" class=""><input type="month" class="form-control" id="date'+_formnumber+'1" required /><div class="help-block with-errors"></div></div></div><div class="form-group col-1 mr-4"><label>Dates</label><input type="text"  class="form-control date'+_formnumber+'1" data-error="You must have a  date." id=" " placeholder="  " required><div class="help-block with-errors"></div> </div><div class="form-group col-1 mr-4"><label>Dates</label><input type="text" class="form-control date'+_formnumber+'1" data-error="You must have a  date." id=" " placeholder="  " required><div class="help-block with-errors"></div></div><div class="form-group col-1 mr-4"><label>Dates</label><input type="text" class="form-control date'+_formnumber+'1" data-error="You must have a  date." id=" " placeholder="  " required><div class="help-block with-errors"></div></div><div class="form-group col-1 mr-4"><label>Dates</label> <input type="text" class="form-control date'+_formnumber+'1" data-error="You must have a  date." id=" "placeholder="  " required> <div class="help-block with-errors"></div></div> <div class="form-group col-1 mr-4"><label>Dates</label> <input type="text" class="form-control date'+_formnumber+'1" data-error="You must have a  date." id=" " placeholder="  " required><div class="help-block with-errors"></div></div> </div>';
			var date2 = '<div class="row"><div class="form-group col-4"<div class="form-group" class=""><input type="month" class="form-control" id="date'+_formnumber+'2" required /><div class="help-block with-errors"></div></div><div class="form-group col-1 mr-4"><input type="text"  class="form-control date'+_formnumber.toString()+'2" data-error="You must have a  date." id=" " placeholder="  " required><div class="help-block with-errors"></div> </div><div class="form-group col-1 mr-4"><input type="text" class="form-control date'+_formnumber.toString()+'2" data-error="You must have a  date." id=" " placeholder="  " required><div class="help-block with-errors"></div></div><div class="form-group col-1 mr-4"><input type="text" class="form-control date'+_formnumber.toString()+'2" data-error="You must have a  date." id=" " placeholder="  " required><div class="help-block with-errors"></div></div><div class="form-group col-1 mr-4"><input type="text" class="form-control date'+_formnumber.toString()+'2" data-error="You must have a  date." id=" "placeholder="  " required> <div class="help-block with-errors"></div></div> <div class="form-group col-1 mr-4"><input type="text" class="form-control date'+_formnumber.toString()+'2" data-error="You must have a  date." id=" " placeholder="  " required><div class="help-block with-errors"></div></div> </div>';
            var date3 = '<div class="row"><div class="form-group col-4"<div class="form-group" class=""><input type="month" class="form-control" id="date'+_formnumber+'3" required /><div class="help-block with-errors"></div></div><div class="form-group col-1 mr-4"><input type="text"  class="form-control date'+_formnumber.toString()+'3" data-error="You must have a  date." id=" " placeholder="  " required><div class="help-block with-errors"></div> </div><div class="form-group col-1 mr-4"><input type="text" class="form-control date'+_formnumber.toString()+'3" data-error="You must have a  date." id=" " placeholder="  " required><div class="help-block with-errors"></div></div><div class="form-group col-1 mr-4"><input type="text" class="form-control date'+_formnumber.toString()+'3" data-error="You must have a  date." id=" " placeholder="  " required><div class="help-block with-errors"></div></div><div class="form-group col-1 mr-4"><input type="text" class="form-control date'+_formnumber.toString()+'3" data-error="You must have a  date." id=" "placeholder="  " required> <div class="help-block with-errors"></div></div> <div class="form-group col-1 mr-4"><input type="text" class="form-control date'+_formnumber.toString()+'3" data-error="You must have a  date." id=" " placeholder="  " required><div class="help-block with-errors"></div></div> </div>';
            var date4 = '<div class="row"><div class="form-group col-4"<div class="form-group" class=""><input type="month" class="form-control" id="date'+_formnumber+'4" required /><div class="help-block with-errors"></div></div><div class="form-group col-1 mr-4"><input type="text"  class="form-control date'+_formnumber.toString()+'4" data-error="You must have a  date." id=" " placeholder="  " required><div class="help-block with-errors"></div> </div><div class="form-group col-1 mr-4"><input type="text" class="form-control date'+_formnumber.toString()+'4" data-error="You must have a  date." id=" " placeholder="  " required><div class="help-block with-errors"></div></div><div class="form-group col-1 mr-4"><input type="text" class="form-control date'+_formnumber.toString()+'4" data-error="You must have a  date." id=" " placeholder="  " required><div class="help-block with-errors"></div></div><div class="form-group col-1 mr-4"><input type="text" class="form-control date'+_formnumber.toString()+'4" data-error="You must have a  date." id=" "placeholder="  " required> <div class="help-block with-errors"></div></div> <div class="form-group col-1 mr-4"><input type="text" class="form-control date'+_formnumber.toString()+'4" data-error="You must have a  date." id=" " placeholder="  " required><div class="help-block with-errors"></div></div> </div>';
            var date5 = '<div class="row"><div class="form-group col-4"<div class="form-group" class=""><input type="month" class="form-control" id="date'+_formnumber+'5" required /><div class="help-block with-errors"></div></div><div class="form-group col-1 mr-4"><input type="text"  class="form-control date'+_formnumber.toString()+'5" data-error="You must have a  date." id=" " placeholder="  " required><div class="help-block with-errors"></div> </div><div class="form-group col-1 mr-4"><input type="text" class="form-control date'+_formnumber.toString()+'5" data-error="You must have a  date." id=" " placeholder="  " required><div class="help-block with-errors"></div></div><div class="form-group col-1 mr-4"><input type="text" class="form-control date'+_formnumber.toString()+'5" data-error="You must have a  date." id=" " placeholder="  " required><div class="help-block with-errors"></div></div><div class="form-group col-1 mr-4"><input type="text" class="form-control date'+_formnumber.toString()+'5" data-error="You must have a  date." id=" "placeholder="  " required> <div class="help-block with-errors"></div></div> <div class="form-group col-1 mr-4"><input type="text" class="form-control date'+_formnumber.toString()+'5" data-error="You must have a  date." id=" " placeholder="  " required><div class="help-block with-errors"></div></div> </div>';
			var select_cal ='<div class="form-group col-12"><label>Select</label><select id="hoursprice'+_formnumber.toString()+'" onchange="pay_calculator(\'hoursprice'+_formnumber.toString()+'\',\'perhour'+_formnumber.toString()+'\',\'date'+_formnumber.toString()+'\',\'credithour'+_formnumber.toString()+'\',\'totalhour'+_formnumber.toString()+'\',\'hourrate'+_formnumber.toString()+'\',\'crosspay'+_formnumber.toString()+'\')" name="" data-error="You must select an option." class="form-control"><option disabled selected value="-1">option</option><option value="400">Lab 400/Hours</option><option  value="1500">Theory 1500/Lecture</option></select><div class="help-block with-errors"></div></div>'
            var result1= '<div class="row"><div class="form-group col-2 mr-6 "><label>Credit Hours</label><input type="text" class="form-control" data-error="You must have a  date." id="credithour'+_formnumber.toString()+'1" placeholder="  " readonly="true"><div class="help-block with-errors"></div> </div><div class="form-group col-3 mr-6 "><label>Total working Hours</label><input type="text" class="form-control" data-error="You must have a  date." id="totalhour'+_formnumber.toString()+'1" readonly="true" placeholder="  " ><div class="help-block with-errors"></div></div><div class="form-group col-3 mr-6"> <label>Per Hours Amount</label><input type="text" class="form-control " data-error="You must have a date." id="perhour'+_formnumber.toString()+'1" readonly="true" placeholder="  " ><div class="help-block with-errors"></div></div><div class="form-group col-2 mr-6"><label>Hours X Rate</label><input type="text" class="form-control " data-error="You must have a date." id="hourrate'+_formnumber.toString()+'1"  placeholder="  " readonly="true"><div class="help-block with-errors"></div></div><div class="form-group col-2 mr-20"><label>Cross Pay</label><input type="text" class="form-control" data-error="You must have a date." id="crosspay'+_formnumber.toString()+'1" placeholder="  " readonly="true">  <div class="help-block with-errors"></div></div></div>'
            var result2= '<div class="row"><div class="form-group col-2 mr-6 "><input type="text" class="form-control" data-error="You must have a  date." id="credithour'+_formnumber.toString()+'2" placeholder="  " readonly="true"><div class="help-block with-errors"></div> </div><div class="form-group col-3 mr-6 "><input type="text" class="form-control" data-error="You must have a  date." id="totalhour'+_formnumber.toString()+'2" readonly="true" placeholder="  " ><div class="help-block with-errors"></div></div><div class="form-group col-3 mr-6"><input type="text" class="form-control " data-error="You must have a date." id="perhour'+_formnumber.toString()+'2" readonly="true" placeholder="  " ><div class="help-block with-errors"></div></div><div class="form-group col-2 mr-6"><input type="text" class="form-control " data-error="You must have a date." id="hourrate'+_formnumber.toString()+'2"  placeholder="  " readonly="true"><div class="help-block with-errors"></div></div><div class="form-group col-2 mr-20"><input type="text" class="form-control" data-error="You must have a date." id="crosspay'+_formnumber.toString()+'2" placeholder="  " readonly="true">  <div class="help-block with-errors"></div></div></div>'
            var result3= '<div class="row"><div class="form-group col-2 mr-6 "><input type="text" class="form-control" data-error="You must have a  date." id="credithour'+_formnumber.toString()+'3" placeholder="  " readonly="true"><div class="help-block with-errors"></div> </div><div class="form-group col-3 mr-6 "><input type="text" class="form-control" data-error="You must have a  date." id="totalhour'+_formnumber.toString()+'3" readonly="true" placeholder="  " ><div class="help-block with-errors"></div></div><div class="form-group col-3 mr-6"><input type="text" class="form-control " data-error="You must have a date." id="perhour'+_formnumber.toString()+'3" readonly="true" placeholder="  " ><div class="help-block with-errors"></div></div><div class="form-group col-2 mr-6"><input type="text" class="form-control " data-error="You must have a date." id="hourrate'+_formnumber.toString()+'3"  placeholder="  " readonly="true"><div class="help-block with-errors"></div></div><div class="form-group col-2 mr-20"><input type="text" class="form-control" data-error="You must have a date." id="crosspay'+_formnumber.toString()+'3" placeholder="  " readonly="true">  <div class="help-block with-errors"></div></div></div>'
            var result4= '<div class="row"><div class="form-group col-2 mr-6 "><input type="text" class="form-control" data-error="You must have a  date." id="credithour'+_formnumber.toString()+'4" placeholder="  " readonly="true"><div class="help-block with-errors"></div> </div><div class="form-group col-3 mr-6 "><input type="text" class="form-control" data-error="You must have a  date." id="totalhour'+_formnumber.toString()+'4" readonly="true" placeholder="  " ><div class="help-block with-errors"></div></div><div class="form-group col-3 mr-6"><input type="text" class="form-control " data-error="You must have a date." id="perhour'+_formnumber.toString()+'4" readonly="true" placeholder="  " ><div class="help-block with-errors"></div></div><div class="form-group col-2 mr-6"><input type="text" class="form-control " data-error="You must have a date." id="hourrate'+_formnumber.toString()+'4"  placeholder="  " readonly="true"><div class="help-block with-errors"></div></div><div class="form-group col-2 mr-20"><input type="text" class="form-control" data-error="You must have a date." id="crosspay'+_formnumber.toString()+'4" placeholder="  " readonly="true">  <div class="help-block with-errors"></div></div></div>'
            var result5= '<div class="row"><div class="form-group col-2 mr-6 "><input type="text" class="form-control" data-error="You must have a  date." id="credithour'+_formnumber.toString()+'5" placeholder="  " readonly="true"><div class="help-block with-errors"></div> </div><div class="form-group col-3 mr-6 "><input type="text" class="form-control" data-error="You must have a  date." id="totalhour'+_formnumber.toString()+'5" readonly="true" placeholder="  " ><div class="help-block with-errors"></div></div><div class="form-group col-3 mr-6"><input type="text" class="form-control " data-error="You must have a date." id="perhour'+_formnumber.toString()+'5" readonly="true" placeholder="  " ><div class="help-block with-errors"></div></div><div class="form-group col-2 mr-6"><input type="text" class="form-control " data-error="You must have a date." id="hourrate'+_formnumber.toString()+'5"  placeholder="  " readonly="true"><div class="help-block with-errors"></div></div><div class="form-group col-2 mr-20"><input type="text" class="form-control" data-error="You must have a date." id="crosspay'+_formnumber.toString()+'5" placeholder="  " readonly="true">  <div class="help-block with-errors"></div></div></div>'
     		
            ////////////////////////////////////// Add New Form When Button Is Clicked ///////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            //////////////////////_container is empty <div class="addforms"> in info.html after button click html code is add in this///////////////////////
            
            _container.append(_timedate+option1+option2+numofinc+group_desg+date1+date2+date3+date4+date5+select_cal+result1+result2+result3+result4+result5);
			
            _formnumber++;
		}
	});
	
});
		