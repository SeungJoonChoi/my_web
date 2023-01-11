var Body = {
    setColor:function (color){
        $('body').css('color', color);
    },
    setBackgroundColor:function (color){
        $('body').css('backgroundColor', color);
    }
}

var Links = {
    setColor:function(color){
        $('a').css('color', color);
    }
}

var NightDayButton = {
    setValue:function (input){
        $('.night_day').prop('value', input);
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