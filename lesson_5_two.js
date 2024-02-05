function isPalindrom (txt) {
    let newTxt = "";
    txt = txt.toLowerCase()
    newTxt = txt.split('').reverse().join('');
    if (newTxt == txt){
        return 'yes'
    }else{
        return 'no';
    }
    }
    let a = isPalindrom ("abb");
    let b = isPalindrom ("abA")
    console.log (a)
    console.log (b)