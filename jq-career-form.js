$(document).ready(function(){
	$('.sign-up-form').submit(function(){
		
		event.preventDefault();

		//all fields are mandatory
		$('input').each(function(){
			var currentTagClass = $(this).attr('class');
			var errorClass = '.' + currentTagClass + '-error';
			if($(this).val() == ''){
				$(errorClass).html("This field is required");
				$(this).addClass('form-wrapper-after');
			}else{
				$(errorClass).hide();
				$(this).removeClass('form-wrapper-after');
				
			}
		})

	})




})
