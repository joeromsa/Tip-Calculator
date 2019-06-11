function calculateTip() {
    var amt = document.getElementById("billamt").value;
    var per = serviceConv(document.getElementById("service").value);
    
    var tip = amt * per;

    var split = document.getElementById('peopleamt').value;

    tip = tip / split;
    tip = Math.round(tip * 100) / 100;


    tip = round(tip);
    
    return tip;
}

function round(number) {
    var rounded;

    if (number >= 1)
    {
        rounded = Number.parseFloat(number).toPrecision(3);
    }
    else 
    {
        rounded = number;
    }
    return rounded;
}

function serviceConv(service) {
    var percent;

    if (service == 'great')
    {
        percent = .3;
    }
    else if (service == 'good')
    {
        percent = .2;
    }
    else if (service == 'average')
    {
        percent = .15;
    }
    else if (service == 'bad')
    {
        percent = .1;
    }
    else
    {
        percent = .05;
    }

    return percent;
}

function replace(tip) {
    var old = document.getElementById("tip").innerHTML;
    var new1 = old.replace(old, tip);
    document.getElementById("tip").innerHTML = new1;

    if (document.getElementById('peopleamt').value == 1)
    {
        document.getElementById("each").innerHTML = "";
    }
    else
    {
        document.getElementById("each").innerHTML = "each";
    }
}

function buttonEvent() {
    var tip = calculateTip();
    replace(tip);


}

calculate.addEventListener('click', buttonEvent);
