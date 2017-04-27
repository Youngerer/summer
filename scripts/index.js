function myconsole()
{
  window.location.href='pages/forum.html';

}

        function getupload() {
            var code = document.getElementById("code").value;
            var phone = document.getElementById("phone").value;
            if (code !=""&& phone !="") {
                alert('商品编号：'+code+',电话：'+phone+',订单成功！'+',联系电话：17310557925');
            }
            else {
                alert('填写完整订单');
            }
        }
