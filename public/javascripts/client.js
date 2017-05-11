$('document').ready(function(){
	getData();
    setInterval(getData,100000);
});

function getData(){

	var url = "http://localhost:3000/";
	$.ajax({
            method:'GET',
            url:url,
            contentType:"application/json"
    });
}