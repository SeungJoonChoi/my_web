var Body = {
    setColor:function (color){
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor:function (color){
        document.querySelector('body').style.backgroundColor = color;
    }
}

var Links = {
    setColor:function (color){
        var alist = document.querySelectorAll('a');
        for (var i = 0; i < alist.length; ++i)
            alist[i].style.color = color;
    }
}

var NightDayButton = {
    setValue:function (input){
        var status = document.querySelectorAll('.night_day');
        for (var i = 0; i < status.length; ++i)
            status[i].value = input;
    }
}

function nightDayHandler(self){
    if(self.value === 'night'){
        Body.setColor('white');
        Body.setBackgroundColor('black');
        Links.setColor('powerblue');
        NightDayButton.setValue('day');
    }
    else {
        Body.setColor('black');
        Body.setBackgroundColor('white');
        Links.setColor('blue');
        NightDayButton.setValue('night');
    }
}