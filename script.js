function calculateTip() {
    var amt = getAmt();
    var per = getPer();
    
    var tip = amt * per;

    var split = getSplit();

    tip = tip / split;
    tip = Math.round(tip * 100) / 100;


    tip = round(tip);
    
    return tip;
}

function getAmt() {
    var amt = document.getElementById("billamt").value;
    return amt;
}

function getPer() {
    var per = serviceConv(document.getElementById("service").value);
    return per;
}

function getSplit() {
    var split = document.getElementById("peopleamt").value;
    return split;
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
    else if (service == 'terrible')
    {
        percent = .05;
    }
    else
    {
        percent = '';
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

function isEmpty() {
    var empty;
    if (getAmt() === '' || getPer() === '' || getSplit() === '')
    {
        empty = true;
    }
    else 
    {
        empty = false;
    }

    return empty;
}

function buttonEvent() {
    var tip = calculateTip();
    replace(tip);
}

calculate.addEventListener('click', buttonEvent);

