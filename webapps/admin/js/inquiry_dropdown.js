 $(document).ready(function(){
    $('.inquiry_table td .inquiry_list li:nth-child(3)').click(function(){
       $(this).parents('.inquiry_list').addClass( 'inquiry_list_visible' );
      });
    $('.tr_line_01').click(function(){
    if($('.tr_line_01').hasClass('tr_line_01')){
       $('.tr_line_01').addClass('close_off_01').removeClass('tr_line_01').text("▲").css('background','#007ed8').css('color','#fff');
        $('.inquiry_table tbody tr td:nth-child(-n+4)').children('.inquiry_list').addClass( 'inquiry_list_visible' );
    }else if($('.close_off_01').hasClass('close_off_01')){
       $('.close_off_01').addClass('tr_line_01').removeClass('close_off_01').text("▼").css('background','#eee').css('color','#007ed8');  
        $('.inquiry_table tbody tr td:nth-child(-n+4)').children('.inquiry_list').removeClass( 'inquiry_list_visible' );
    }
 });
 $('.tr_line_02').click(function(){
    if($('.tr_line_02').hasClass('tr_line_02')){
       $('.tr_line_02').addClass('close_off_02').removeClass('tr_line_02').text("▲").css('background','#007ed8').css('color','#fff');
        $('.inquiry_table tbody tr td:nth-child(n+5):nth-child(-n+8)').children('.inquiry_list').addClass( 'inquiry_list_visible' );
    }else if($('.close_off_02').hasClass('close_off_02')){
       $('.close_off_02').addClass('tr_line_02').removeClass('close_off_02').text("▼").css('background','#eee').css('color','#007ed8');  
        $('.inquiry_table tbody tr td:nth-child(n+5):nth-child(-n+8)').children('.inquiry_list').removeClass( 'inquiry_list_visible' );
    } 
});
$('.tr_line_03').click(function(){
    if($('.tr_line_03').hasClass('tr_line_03')){
       $('.tr_line_03').addClass('close_off_03').removeClass('tr_line_03').text("▲").css('background','#007ed8').css('color','#fff');
        $('.inquiry_table tbody tr td:nth-child(n+9):nth-child(-n+12)').children('.inquiry_list').addClass( 'inquiry_list_visible' );
    }else if($('.close_off_03').hasClass('close_off_03')){
       $('.close_off_03').addClass('tr_line_03').removeClass('close_off_03').text("▼").css('background','#eee').css('color','#007ed8');  
        $('.inquiry_table tbody tr td:nth-child(n+9):nth-child(-n+12)').children('.inquiry_list').removeClass( 'inquiry_list_visible' );
    } 
    });
$('.tr_line_04').click(function(){
    if($('.tr_line_04').hasClass('tr_line_04')){
       $('.tr_line_04').addClass('close_off_04').removeClass('tr_line_04').text("▲").css('background','#007ed8').css('color','#fff');
        $('.inquiry_table tbody tr td:nth-child(n+13):nth-child(-n+16)').children('.inquiry_list').addClass( 'inquiry_list_visible' );
    }else if($('.close_off_04').hasClass('close_off_04')){
       $('.close_off_04').addClass('tr_line_04').removeClass('close_off_04').text("▼").css('background','#eee').css('color','#007ed8');  
        $('.inquiry_table tbody tr td:nth-child(n+13):nth-child(-n+16)').children('.inquiry_list').removeClass( 'inquiry_list_visible' );
    } 
});
$('.tr_line_05').click(function(){
    if($('.tr_line_05').hasClass('tr_line_05')){
       $('.tr_line_05').addClass('close_off_05').removeClass('tr_line_05').text("▲").css('background','#007ed8').css('color','#fff');
        $('.inquiry_table tbody tr td:nth-child(n+17):nth-child(-n+20)').children('.inquiry_list').addClass( 'inquiry_list_visible' );
    }else if($('.close_off_05').hasClass('close_off_05')){
       $('.close_off_05').addClass('tr_line_05').removeClass('close_off_05').text("▼").css('background','#eee').css('color','#007ed8');  
        $('.inquiry_table tbody tr td:nth-child(n+17):nth-child(-n+20)').children('.inquiry_list').removeClass( 'inquiry_list_visible' );
    } 
    });
$('.tr_line_06').click(function(){
    if($('.tr_line_06').hasClass('tr_line_06')){
       $('.tr_line_06').addClass('close_off_06').removeClass('tr_line_06').text("▲").css('background','#007ed8').css('color','#fff');
        $('.inquiry_table tbody tr td:nth-child(n+21):nth-child(-n+24)').children('.inquiry_list').addClass( 'inquiry_list_visible' );
    }else if($('.close_off_06').hasClass('close_off_06')){
       $('.close_off_06').addClass('tr_line_06').removeClass('close_off_06').text("▼").css('background','#eee').css('color','#007ed8');  
        $('.inquiry_table tbody tr td:nth-child(n+21):nth-child(-n+24)').children('.inquiry_list').removeClass( 'inquiry_list_visible' );
    } 
    });

$('.tr_line_07').click(function(){
    if($('.tr_line_07').hasClass('tr_line_07')){
       $('.tr_line_07').addClass('close_off_07').removeClass('tr_line_07').text("▲").css('background','#007ed8').css('color','#fff');
        $('.inquiry_table tbody tr td:nth-child(n+25):nth-child(-n+28)').children('.inquiry_list').addClass( 'inquiry_list_visible' );
    }else if($('.close_off_07').hasClass('close_off_07')){
       $('.close_off_07').addClass('tr_line_07').removeClass('close_off_07').text("▼").css('background','#eee').css('color','#007ed8');  
        $('.inquiry_table tbody tr td:nth-child(n+25):nth-child(-n+28)').children('.inquiry_list').removeClass( 'inquiry_list_visible' );
    }     
 

  });
  $('.all_line_btn').click(function(){
    if($('.all_line_btn').hasClass('all_line_btn')){
       $('.all_line_btn').addClass('all_close_off').removeClass('all_line_btn').text("▲전체 닫기");
       $('.tr_line_01').addClass('close_off_01').removeClass('tr_line_01').text("▲").css('background','#007ed8').css('color','#fff');
       $('.tr_line_02').addClass('close_off_02').removeClass('tr_line_02').text("▲").css('background','#007ed8').css('color','#fff');
       $('.tr_line_03').addClass('close_off_03').removeClass('tr_line_03').text("▲").css('background','#007ed8').css('color','#fff');
       $('.tr_line_04').addClass('close_off_04').removeClass('tr_line_04').text("▲").css('background','#007ed8').css('color','#fff');
       $('.tr_line_05').addClass('close_off_05').removeClass('tr_line_05').text("▲").css('background','#007ed8').css('color','#fff');
       $('.tr_line_06').addClass('close_off_06').removeClass('tr_line_06').text("▲").css('background','#007ed8').css('color','#fff');
       $('.tr_line_07').addClass('close_off_07').removeClass('tr_line_07').text("▲").css('background','#007ed8').css('color','#fff');
        $('.inquiry_table tbody tr td').children('.inquiry_list').addClass( 'inquiry_list_visible' );
    }else if($('.all_close_off').hasClass('all_close_off')){
       $('.all_close_off').addClass('all_line_btn').removeClass('all_close_off').text("▼ 전체 열기");  
        $('.inquiry_table tbody tr td').children('.inquiry_list').removeClass( 'inquiry_list_visible' );
        $('.close_off_01').addClass('tr_line_01').removeClass('close_off_01').text("▼").css('background','#eee').css('color','#007ed8'); 
        $('.close_off_02').addClass('tr_line_02').removeClass('close_off_02').text("▼").css('background','#eee').css('color','#007ed8'); 
        $('.close_off_03').addClass('tr_line_03').removeClass('close_off_03').text("▼").css('background','#eee').css('color','#007ed8'); 
        $('.close_off_04').addClass('tr_line_04').removeClass('close_off_04').text("▼").css('background','#eee').css('color','#007ed8'); 
        $('.close_off_05').addClass('tr_line_05').removeClass('close_off_05').text("▼").css('background','#eee').css('color','#007ed8'); 
        $('.close_off_06').addClass('tr_line_06').removeClass('close_off_06').text("▼").css('background','#eee').css('color','#007ed8'); $('.close_off_07').addClass('tr_line_07').removeClass('close_off_07').text("▼").css('background','#eee').css('color','#007ed8'); 
     }
  });
    }); 