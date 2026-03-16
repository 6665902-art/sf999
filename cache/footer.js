
$(function(){

	$('.hky').click(function(){
		var vkey = $(this).text();
		
		if(vkey == ""){ alert("请先输入查询的关键词!"); return; }
		
		if("全部" == vkey){
			$('tr').removeClass('nokey');
			$('#key').val("");	
			return;
		}
		
		$('#key').val(vkey);	
		
		$('tr').removeClass('nokey');
		
		$('tr').each(function(){
			var tc = $(this).prop("class");
			if(tc != "ther"){
				var txt = $(this).text();			
				if(txt.indexOf(vkey) == -1 && txt.indexOf("详细介绍") == -1){
					$(this).addClass("nokey");
				}
			}			
		});							 
	});
	
	// 点击按钮搜索
	$('#schbtn').click(function(){
		var vkey = $('#key').val();
		
		if(vkey == ""){ alert("请先输入查询的关键词!"); return; }
				
		$('#key').val(vkey);			
		$('tr').removeClass('nokey');		
		$('tr').each(function(){
			var tc = $(this).prop("class");
			if(tc != "ther"){
				var txt = $(this).text();
				if(txt.indexOf(vkey) == -1 && txt.indexOf("详细介绍") == -1){
					$(this).addClass("nokey");
				}
			}
		});								
	});
	
	$('.more').click(function(){
							  
		$('.select_edition_ul').toggle();
	});
	
});