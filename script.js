// Calculates tip. 
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

// Gets the bill amount.
function getAmt() {
    var amt = document.getElementById("billamt").value;
    return amt;
}

// Gets the tip percentage.
function getPer() {
    var per = serviceConv(document.getElementById("service").value);
    return per;
}

// Gets the amount of people the bill is being split with.
function getSplit() {
    var split = document.getElementById("peopleamt").value;
    return split;
}

// Rounds tip if needed to 2 decimal places.
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

// Checks to see if tip is a digit in the tenth place.
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

// Gets the tip amount.
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

// Replaces the html with the new tip amount.
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

// Replaces empty with an Error message.
function replaceEmpty() {
    var old = document.getElementById("tip").innerHTML;
    var new1 = old.replace(old, "ERROR: Missing Info");
    document.getElementById("tip").innerHTML = new1;

    document.getElementById("each").innerHTML = '';
    document.getElementById('dolla').innerHTML = '';
    document.getElementById('')
}

// Checks if any field has been left empty.
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

// Executes the button event.
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

// Button click listener.
calculate.addEventListener('click', buttonEvent);

