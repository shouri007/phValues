$('document').ready(function(){
	
    var url = "http://phvalues.herokuapp.com/";
    $.ajax({
            method:'GET',
            url:url,
            contentType:"application/json",
            success:function(data){
                console.log(data);
            }
    });
})