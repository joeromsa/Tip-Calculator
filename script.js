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
    else if (checkDigit(number))
    {
        rounded = number + '0';
    }
    else 
    {
        rounded = number;
    }
    return rounded;
}

function checkDigit(number) {
    var boo;

    if (number == .1 || number == .2 || number == .3 || number == .4 || number == .5 || number == .6 || number == .7 || number == .8 || number == .9)
    {
        boo = true;
    }
    else 
    {
        boo = false;
    }

    return boo;
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
    document.getElementById('dolla').innerHTML = '$';

    if (document.getElementById('peopleamt').value == 1)
    {
        document.getElementById("each").innerHTML = "";
    }
    else
    {
        document.getElementById("each").innerHTML = "each";
    }
}

function replaceEmpty() {
    var old = document.getElementById("tip").innerHTML;
    var new1 = old.replace(old, "ERROR: Missing Info");
    document.getElementById("tip").innerHTML = new1;

    document.getElementById("each").innerHTML = '';
    document.getElementById('dolla').innerHTML = '';
    document.getElementById('')
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

    if (isEmpty())
    {
        replaceEmpty();
    }
    else
    {
        replace(tip);
    }
}

calculate.addEventListener('click', buttonEvent);

