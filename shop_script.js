function aboRadio() {
    for (var i = 0; i < document.myForm.length; i++) {
        if (document.myForm.elements[i].checked == true) {
            var aboCost = document.myForm.elements[i].value;
        }
    }
    document.getElementById("aboCost").innerHTML = "Dieses Abo kostet " + aboCost + " €.";
}

function aboOrder() {
    var firstname = document.getElementById("firstname").value
    var lastname = document.getElementById("lastname").value
    var abo = ""

    for (var i = 0; i < document.myForm.length; i++) {
        if (document.myForm.elements[i].checked == true) {
            abo = document.myForm.elements[i].id;
        }
    }
    if (abo == "") {
        alert("Bitte wähle ein Abo aus.");
    } else if (firstname == "" || firstname == "Dein Vorname") {
        alert("Bitte Vornamen eingeben. ");
    } else if (lastname == "" || lastname == "Dein Nachname") {
        alert("Bitte Nachnamen eingeben.");
    } else {
        alert("Hallo " + firstname + " " + lastname + "! Du hast dich für ein " + abo + " entschieden. Vielen Dank.");
    }
}

function singleOrder() {
    var firstname = document.getElementById("firstname").value
    var lastname = document.getElementById("lastname").value
    var edition = document.getElementById("edition")
    var price = edition.options[edition.selectedIndex].value;
    var amount = document.getElementById("amount").value
    var total = price * amount

    if (edition.selectedIndex == 0) {
        alert("Bitte eine Ausgabe wählen!");
    } else if (firstname == "" || firstname == "Dein Vorname") {
        alert("Bitte Vornamen eingeben. ");
    } else if (lastname == "" || lastname == "Dein Nachname") {
        alert("Bitte Nachnamen eingeben.");
    } else {
        alert("Hallo " + firstname + " " + lastname + "! Danke für die Bestellung.");
        alert("Deine Bestellung kostet " + total.toFixed(2) + " Euro.");
    }
}

function reset() {
    document.getElementById("myForm").reset();
}

function calculate() {
    var edition = document.getElementById("edition")
    var price = document.getElementById("edition").value;
    var amount = document.getElementById("amount").value;
    var total = price * amount;

    if (edition.selectedIndex == 0) {
        document.getElementById("total").innerHTML = "Bitte eine Ausgabe wählen!";
    } else {
        document.getElementById("total").innerHTML = "Gesamtkosten: " + total.toFixed(2) + " €";
    }
}
