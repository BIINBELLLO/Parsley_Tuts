function checkPasswordStrength(id) {
    var psw = document.getElementById(id).value;
    psw = psw.trim();
    var allow = false;
    pl = psw.length;
    var score = 0;
    if (pl >= 4) score += 10;
    if (pl >= 6) score += 20;
    if (pl >= 8) score += 30;
    if (pl >= 12) score += 40;
    al = pl;
    if (al > 12) al = 12;
    score += al * 4;
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
    if ((nl < 3 || nd == 0) && score > 80) score = 80;
    var perc = score / 140;
    var fg = Math.round(perc * 100);
    if (fg > 99) fg = 99;
    var bg = 100 - fg;
    var strength = '';
    var psfg = document.getElementById('password_strength_foreground');
    var psbg = document.getElementById('password_strength_background');
    if (fg < 50) {
        strength = 'Too Weak';
        if (fg < 30) {
            psfg.style.backgroundColor = '#D00000';
            psbg.style.backgroundColor = '#E08080';
        } else {
            psfg.style.backgroundColor = '#D0D000';
            psbg.style.backgroundColor = '#E0E080';
        }
    } else if (fg < 90) {
        strength = 'Strong Enough';
        psfg.style.backgroundColor = '#00D000';
        psbg.style.backgroundColor = '#80E080';
        allow = true;
    } else {
        strength = 'Very Strong';
        psfg.style.backgroundColor = '#00D000';
        psbg.style.backgroundColor = '#80E080';
        allow = true;
    }
    document.getElementById('password_strength_caption').innerHTML = strength;
    psfg.style.width = fg + 'px';
    psbg.style.width = bg + 'px';
    return allow;
}