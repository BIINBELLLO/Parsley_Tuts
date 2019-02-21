function checkPasswordStrength() {
    var psw = document.getElementById('pswd1').value;
    psw = psw.trim();
    var allow = false;
    pl = psw.length;
    var score = 0;
    if (pl >= 4) score += 10;
    if (pl >= 6) score += 20;
    if (pl >= 8) score += 30;
    if (pl >= 12) score += 40;
    al = pl;
    // if (al > 12) al = 12;
    // score += al * 4;
    var nl = contains(psw, 'abcdefghijklmnopqrstuvwxyz');
    if (nl > 0) score += 10;
    var nd = contains(psw, '1234567890');
    if (nd > 0) score += 5;
    if (nd > 1) score += 10;
    if (nd > 2) score += 15;
    var ns = contains(psw, '~!@#$%^&*()_+{}|:"<>?`-=[]\;,./');
    if (ns > 0) score += 10;
    if (ns > 1) score += 10;
    if (ns > 2) score += 10;
    var perc = score / 170;
    var fg = Math.round(perc * 100);
    var bad = document.getElementById('bad');
    var good = document.getElementById('good');
    var better = document.getElementById('better');
    var best = document.getElementById('best');
    if (fg < 50) {
        if (fg < 30) {
            bad.style.width = fg+'%';
            bad.innerHTML = fg+'% Too Weak';
            bad.style.display = 'block';
            good.style.display = 'none';
            better.style.display = 'none';
            best.style.display = 'none';
        } else {
            bad.style.display = 'none';
            good.style.width = fg+'%';
            good.style.display = 'block';
            good.innerHTML = fg+'% Still Weak, But Better';
            better.style.display = 'none';
            best.style.display = 'none';
        }
    } else if (fg < 80) {
            bad.style.display = 'none';
            good.style.display = 'none';
            better.style.width = fg+'%';
            better.innerHTML = fg+'% Much Better';
            better.style.display = 'block';
            best.style.display = 'none';
    } else {
            bad.style.display = 'none';
            good.style.display = 'none';
            better.style.display = 'none';
            best.style.width = fg+'%';
            best.innerHTML = fg+'%, Very Strong';
            best.style.display = 'block';
    }
}

function contains(password, validChars) {
    var c = 0;
    for (i = 0; i < password.length; i++) {
        var char = password.charAt(i);
        if (validChars.indexOf(char) > -1) {
            c++;
        }
    }
    return c;
}


function checkPasswordMatch() {
    var initial = document.getElementById('pswd1').value;
    var current = document.getElementById('cpaswd1').value;
    var shw = document.getElementById('pmatch');
    if (initial === current) {
        shw.innerHTML = "YES";
        shw.className = 'text-success font-weight-bolder';
    }else{
        shw.innerHTML = "NO";
        shw.className = 'text-danger font-weight-bolder';
    }
}