

$(function () {

   
    
 $.getJSON('base.json',function(data){
    for (var i = 0; i < data.length; i++)
        {
             $('#forumarea').append($("<div style='border:solid 1px'><strong>By:</strong>"+data[i].phone+":"+data[i].content+"  -- --  "+data[i].date+"</div>"));
        }
 
 });

});


function forumadd() {
 
    var phone = document.getElementById('phone').value;
    var content = document.getElementById('content').value;
 
   Var node={'phone':phone,'content':content,'date':getNowFormatDate(),'punish':'default'};
   $.getJSON('base.json',function(data){
     
     data[data.length]=node;
   });
    //alert(phone + '--------' + content + '---------' + getNowFormatDate());
}

function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
    return currentdate;
}
