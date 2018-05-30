/**
 * Funktion zum Aktualisieren der dargestellten Einkaufsliste
 */
function update() {
	// Auf Liste im HTML zugreifen
	var list = document.getElementById('list');

	// "Alte" Listenpunkte entfernen
	list.innerHTML = '';

	// Alle Listenpunkte einzeln durchgehen
	for (var i = 0; i < shopping.length; i++) {
		// Aktuellen Listenpunkt im HTML ausgeben
		list.innerHTML += '<li>' + '<button onclick="remove(' + i + ')">Entfernen</button>' + shopping[i] + '</li>';
	}
}

/**
 * Neues Produkt zur Einkaufsliste hinzufügen
 */
function add() {
	// Titel aus Eingabefeld auslesen
	var newItem = document.getElementById('item').value;

	// Produkt zur Einkaufsliste hinzufügen
	shopping.push(newItem);

	// Darstellung aktualisieren
	update();
}

/**
 * Produkt aus Einkaufsliste entfernen
 */
function remove(index) {
	// Produkt aus Einkaufsliste entfernen
	shopping.splice(index, 1);

	// Darstellung aktualisieren
	update();
}

/**
 * Einkaufsliste im localStorage speichern
 */
function save() {
	// Daten in String (JSON) umwandeln
	var encoded = JSON.stringify(shopping);

	// Daten im LocalStorage speichern
	localStorage.setItem('shopping', encoded);
}

// Variable für Einkaufsliste definieren
var shopping;
// Daten für Einkaufsliste laden
var data = localStorage.getItem('shopping');

// Wurden Daten im LocalStorage gefunden?
if (data) {
	// Daten in Array umwandeln
	shopping = JSON.parse(data);
} else {
	// Mit leerem Datensatz weiterarbeiten
	shopping = [];
}

// Darstellung beim Laden der Webseite aktualisieren
update();
