"use strict";
var Einkaufsliste;
(function (Einkaufsliste) {
    //     /*
    //     Aufgabe: <L02_EventInspector>
    //     // Name: <David Zahn>
    //     // Matrikel: <275010>
    //     // Datum: <27.04.2024>
    //     // Quellen: <"">
    //     */
    // Warten bis das Fenster geladen ist
    window.addEventListener("load", handleLoad);
    // Funktion zum Laden der Einträge aus json, (fetch:Abrufen der Daten aus data.json), (foreach verarbeitung vom jedem Eintrag und füge ihn zur Tabelle hinzu.
    function loadEntries() {
        fetch('data.json')
            .then(response => response.json())
            .then((data) => {
            let tableBody = document.querySelector('#liste table tbody');
            if (tableBody) {
                data.forEach((entryData) => {
                    const entry = {
                        name: entryData.name,
                        menge: parseInt(entryData.amount),
                        letzterKauf: new Date(entryData.lastBought),
                        kommentar: entryData.comment,
                        gekauft: entryData.wasBought === "true"
                    };
                    addRowToTable(entry);
                });
            }
        });
    }
    loadEntries();
    // Funktion, beim Laden der seite ausgeführt, suche nach "add" Button und füge einen Eventlistener hinzu
    function handleLoad(_event) {
        let addButton = document.getElementById("add");
        if (addButton) {
            addButton.addEventListener("click", handleAdd);
        }
    }
    // Funktion, die beim hinzufügen Button ausgeführt wird, suche nach Produktname, Menge, Kommentar und Kaufdatum
    function handleAdd(_event) {
        let productNameInput = document.getElementById("product");
        let amountInput = document.getElementById("amount");
        let commentsInput = document.getElementById("comments");
        let timeInput = document.getElementById("time");
        // Überprüfe, ob alle Eingabefelder gefunden wurden und sortierung der Eingaben
        if (productNameInput && amountInput && commentsInput && timeInput) {
            let name = productNameInput.value;
            let menge = parseInt(amountInput.value);
            let kommentar = commentsInput.value;
            let letzterKauf = new Date(timeInput.value);
            let gekauft = false;
            // Neue Reihe für Einträge hinzufügen
            addRowToTable({ name, menge, letzterKauf, kommentar, gekauft });
            // Formularfelder zurücksetzen
            productNameInput.value = "";
            amountInput.value = "0";
            commentsInput.value = "";
            timeInput.value = "";
        }
    }
    // Funktion zum Hinzufügen eines Eintrags in die Tabellenform
    function addRowToTable(entry) {
        let tableBody = document.querySelector("table tbody");
        if (tableBody) {
            let newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td>${entry.name}</td>
                <td>${entry.menge}</td>
                <td>${entry.letzterKauf.toLocaleDateString()}</td>
                <td>${entry.kommentar}</td>
                <td><input type="checkbox" ${entry.gekauft ? 'checked' : ''} onclick="toggleBought(this)"></td>
                <td><button onclick="deleteRow(this)">Löschen</button></td>
            `;
            tableBody.appendChild(newRow);
        }
    }
})(Einkaufsliste || (Einkaufsliste = {}));
// Funktion zum Löschen einer Zeile aus der Tabelle, suche von übergeordnete Zeile des geklickten Buttons, Entferne die Zeile aus dem DOM
function deleteRow(button) {
    let row = button.closest("tr");
    if (row) {
        row.remove();
    }
}
//# sourceMappingURL=list.js.map