// JavaScript Document


function call_num(num)
{
	
	var result = document.getElementById("result");
	result.value += num;
}

function clear_screen ()
{
	var result = document.getElementById("result");
	result.value = "0";
}

function get_result()
{
	var result = document.getElementById("result");
	result.value = eval(result.value)
}

function gett_result()
{
	var result = document.getElementById("result");
	result.value = eval(result.value)
}