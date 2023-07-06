let runs1 = document.getElementById("ru")
let runs2 = document.getElementById("run")
let on = document.getElementById("1")
let tw = document.getElementById("2")
let th = document.getElementById("3")
let fou = document.getElementById("4")
let si = document.getElementById("6")
let wi = document.getElementById("w")
let one = document.getElementById("11")
let two = document.getElementById("22")
let thr = document.getElementById("33")
let four = document.getElementById("44")
let six = document.getElementById("66")
let wic = document.getElementById("ww")
let ou = document.getElementById("ou")
let out = document.getElementById("out")
let rr = document.getElementById("exampleModalLabel")
let lu = document.getElementById("lu")

on.onclick = function() {
    let ad = runs1.textContent
    let intt = parseInt(ad)
    let www = wi.textContent
    let aw = parseInt(www)
    if (aw < 10) {
        let add = intt + 1
        runs1.textContent = add
    }
}
tw.onclick = function() {
    let ad = runs1.textContent
    let intt = parseInt(ad)
    let www = wi.textContent
    let aw = parseInt(www)
    if (aw < 10) {
        let add = intt + 2
        runs1.textContent = add
    }
}
th.onclick = function() {
    let ad = runs1.textContent
    let intt = parseInt(ad)
    let www = wi.textContent
    let aw = parseInt(www)
    if (aw < 10) {
        let add = intt + 3
        runs1.textContent = add
    }
}
fou.onclick = function() {
    let ad = runs1.textContent
    let intt = parseInt(ad)
    let www = wi.textContent
    let aw = parseInt(www)
    if (aw < 10) {
        let add = intt + 4
        runs1.textContent = add
    }
}
si.onclick = function() {
    let ad = runs1.textContent
    let intt = parseInt(ad)
    let www = wi.textContent
    let aw = parseInt(www)
    if (aw < 10) {
        let add = intt + 6
        runs1.textContent = add
    }
}
ou.onclick = function() {
    let www = wi.textContent
    let aw = parseInt(www)
    if (aw < 10) {
        let add = aw + 1
        wi.textContent = add
    }

}
one.onclick = function() {
    let ad = runs2.textContent
    let intt = parseInt(ad)
    let www = wic.textContent
    let aw = parseInt(www)
    if (aw < 10) {
        let add = intt + 1
        runs2.textContent = add
    }
}
two.onclick = function() {
    let ad = runs2.textContent
    let intt = parseInt(ad)
    let www = wic.textContent
    let aw = parseInt(www)
    if (aw < 10) {
        let add = intt + 2
        runs2.textContent = add
    }
}
thr.onclick = function() {
    let ad = runs2.textContent
    let intt = parseInt(ad)
    let www = wic.textContent
    let aw = parseInt(www)
    if (aw < 10) {
        let add = intt + 3
        runs2.textContent = add
    }
}
four.onclick = function() {
    let www = wic.textContent
    let aw = parseInt(www)
    let ad = runs2.textContent
    let intt = parseInt(ad)
    if (aw < 10) {
        let add = intt + 4
        runs2.textContent = add
    }
}
six.onclick = function() {
    let www = wic.textContent
    let aw = parseInt(www)
    let ad = runs2.textContent
    let intt = parseInt(ad)
    if (aw < 10) {
        let add = intt + 6
        runs2.textContent = add
    }
}
out.onclick = function() {
    let www = wic.textContent
    let aw = parseInt(www)
    if (aw < 10) {
        let add = aw + 1
        wic.textContent = add
    }
}

lu.onclick = function() {
    let rrr = rr.textContent
    if (parseInt(runs1.textContent) > parseInt(runs2.textContent)) {
        rr.textContent = "Congratulations!! Team 1 has won the match"

    } else if (parseInt(runs1.textContent) < parseInt(runs2.textContent)) {
        rr.textContent = "Congratulations!! Team 2 has won the match"
    } else {
        rr.textContent = "OOPS!! MATCH HAS BEEN TIED"
    }
    runs1.textContent = "0"
    runs2.textContent = "0"
    wi.textContent = "0"
    wic.textContent = "0"
}