// ===== VRAGEN =====
let vragen = [
    {
        vraag: "Wat is 2 + 2?",
        antwoorden: ["3", "4", "5", "6"],
        correct: 1
    },
    {
        vraag: "Welke taal gebruiken we in de browser?",
        antwoorden: ["Python", "C#", "JavaScript", "Java"],
        correct: 2
    }
];

// ===== VARIABELEN =====
let huidigeVraag = 0;


// ===== START KNOP =====
document.getElementById("start").onclick = function () {
    huidigeVraag = 0;
    toonVraag();
};


// ===== VRAAG TONEN =====
function toonVraag() {

    let vraagElement = document.getElementById("vraag");
    let antwoordenDiv = document.getElementById("antwoorden");
    let feedback = document.getElementById("feedback");

    // TODO: vraag tonen
    vraagElement.textContent = vragen[huidigeVraag].vraag;
    

    // TODO: antwoorden genereren (buttons!)
    antwoordenDiv.innerHTML = ""; // oude antwoorden verwijderen
    feedback.textContent = ""; // oude feedback verwijderen
    console.log(vragen[huidigeVraag].antwoorden);
    feedback.textContent = ""; // oude feedback verwijderen
    vragen[huidigeVraag].antwoorden.forEach((antwoord, index) => {
        let button = document.createElement("button");
        button.textContent = antwoord;
        button.onclick = function () {
            controleerAntwoord(index);
        };
        antwoordenDiv.appendChild(button);
    }
        );




}


// ===== ANTWOORD CONTROLEREN =====
function controleerAntwoord(index) {
    let feedback = document.getElementById("feedback");

    // TODO: controleer of antwoord juist is
    if (index === vragen[huidigeVraag].correct) {

    // TODO: feedback tonen
        feedback.textContent = "Correct!";

    document.getElementById("volgende").disabled = false;
}
else {
    feedback.textContent = "Helaas, probeer het nog eens!.";
    }


// ===== VOLGENDE VRAAG =====


// TODO: nieuwe vraag tonen
};
