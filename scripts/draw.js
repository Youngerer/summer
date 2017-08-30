

var lineColor="#000000";
var lineWidth=1;
window.onload = function ()
{
    var oC = document.getElementById('c1');
    var oCG = oC.getContext('2d');

    oC.onmousedown = function (ev)
    {
        lineWidth = $('#lineWidth').val();
        oCG.beginPath();
        var ev = ev || window.event;
        oCG.moveTo(ev.clientX - oC.offsetLeft, ev.clientY - oC.offsetTop);

        //ev.clientX-oC.offsetLeft,ev.clientY-oC.offsetTop鼠标在当前画布上X,Y坐标
        document.onmousemove = function (ev) {
            var ev = ev || window.event;//获取event对象
            
            oCG.lineTo(ev.clientX - oC.offsetLeft, ev.clientY - oC.offsetTop);
            oCG.strokeStyle = lineColor;
            oCG.lineWidth = lineWidth;
            oCG.stroke();
        };
        oC.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };


	oC.touchstart = function (ev) {
        lineWidth = $('#lineWidth').val();
        oCG.beginPath();
        var ev = ev || window.event;
        oCG.moveTo(ev.clientX - oC.offsetLeft, ev.clientY - oC.offsetTop);

        //ev.clientX-oC.offsetLeft,ev.clientY-oC.offsetTop鼠标在当前画布上X,Y坐标
        document.onmousemove = function (ev) {
            var ev = ev || window.event;//获取event对象

            oCG.lineTo(ev.clientX - oC.offsetLeft, ev.clientY - oC.offsetTop);
            oCG.strokeStyle = lineColor;
            oCG.lineWidth = lineWidth;
            oCG.stroke();
        };
        oC.touchend = function () {
            document.touchmove = null;
            document.touchend = null;
        };
    };




};

function cleanDraw() {
    var c = document.getElementById("c1");
    var cxt = c.getContext("2d");
    cxt.fillStyle = "#FFFFFF";
    cxt.beginPath();
    cxt.fillRect(0, 0, c.width, c.height);
    cxt.closePath();
}


$(function () {

    $('#red').bind("click", function ()
    {
        if ($('#red').hasClass('colorSelect')) {
            $('#red').removeClass('colorSelect');
            lineColor = "#000000";
        }
        else
        {
            $('#red').addClass('colorSelect');
            $('#blue,#orange,#yellow,#green,#lightblue,#purple').removeClass('colorSelect');
            lineColor = "#FF0000";
        }
    });

    // orange
    $('#orange').bind('click', function () {
        if ($('#orange').hasClass('colorSelect')) {
            $('#orange').removeClass('colorSelect');
            lineColor = "#000000";
        }
        else {
            $('#orange').addClass('colorSelect');
            $('#red,#blue,#yellow,#green,#lightblue,#purple').removeClass('colorSelect');
            lineColor = "#FF9900";
        }
    });
    // yellow
    $('#yellow').bind('click', function () {
        if ($('#yellow').hasClass('colorSelect')) {
            $('#yellow').removeClass('colorSelect');
            lineColor = "#000000";
        }
        else {
            $('#yellow').addClass('colorSelect');
            $('#red,#orange,#green,#blue,#lightblue,#purple').removeClass('colorSelect');
            lineColor = "#FFFF66";
        }
    });
    // green
    $('#green').bind('click', function () {
        if ($('#green').hasClass('colorSelect')) {
            $('#green').removeClass('colorSelect');
            lineColor = "#000000";
        }
        else {
            $('#green').addClass('colorSelect');
            $('#red,#orange,#yellow,#blue,#lightblue,#purple').removeClass('colorSelect');
            lineColor = "#66FF00";
        }
    });
    // blue
    $('#blue').bind('click', function () {
        if ($('#blue').hasClass('colorSelect')) {
            $('#blue').removeClass('colorSelect');
            lineColor = "#000000";
        }
        else {
            $('#blue').addClass('colorSelect');
            $('#red,#orange,#yellow,#green,#lightblue,#purple').removeClass('colorSelect');
            lineColor = "#3333CC";
        }
    });
    // lightblue
    $('#lightblue').bind('click', function () {
        if ($('#lightblue').hasClass('colorSelect')) {
            $('#lightblue').removeClass('colorSelect');
            lineColor = "#000000";
        }
        else {
            $('#lightblue').addClass('colorSelect');
            $('#red,#orange,#yellow,#green,#blue,#purple').removeClass('colorSelect');
            lineColor = "#6699FF";
        }
    });
    // purple
    $('#purple').bind('click', function () {
        if ($('#purple').hasClass('colorSelect')) {
            $('#purple').removeClass('colorSelect');
            lineColor = "#000000";
        }
        else {
            $('#purple').addClass('colorSelect');
            $('#red,#orange,#yellow,#green,#lightblue,#blue').removeClass('colorSelect');
            lineColor = "#CC00FF";
        }
    });

});