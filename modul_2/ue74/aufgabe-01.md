# Aufgabe 1: Verständnis Fragen

1. Welche HTML-Elemente werden verwendet, um das Tic Tac Toe-Spielfeld zu erstellen?

> Die Zellen werden je mit einem `div`-Element programmatisch erstellt.

1. Welche CSS-Eigenschaften werden verwendet, um das Tic Tac Toe-Spielfeld zu gestalten?

> Das Layout ist ein Grid-System mit 3 Reihen und 3 Spalten; die Zellen/Spalten per `display: flex` mit Hintergrundfarbe und `cursor: pointer` gestyled.

1. Wie wird der Klick auf eine Zelle im Spielfeld erkannt?

> Es gibt einen Event-Listener auf jeder Zelle, der auf das Klick-Event reagiert.

- Wo ist der relevante Code Ausschnitt?

> `createBoard()-Funktion` : `cell.addEventListener('click', () => makeMove(i));`

1. Was passiert, wenn auf eine bereits belegte Zelle geklickt wird?

> es wird ebenfalls die `makeMove()`-Funktion aufgerufen, jedoch zielt die erste if-Abfrage darauf ab zu prüfen, ob die geklickte Zelle noch leer ist.

- Wo ist der relevante Code Ausschnitt?

> `if (cells[index].textContent === '') {...}`

1. Wie wird der aktuelle Spielstand überprüft, um festzustellen, ob ein Spieler gewonnen hat?

> Es wird geprüft, ob eine der möglichen Gewinnkombinationen zustande gekommen ist.

- Wo ist der relevante Code Ausschnitt?

> in Funktion `gameFinished()`:
>
> ```javascript
> for (let i = 0; i < winningCombinations.length; i++) {
>   const combination = winningCombinations[i];
>   if (combination.every((value) => xMoves.includes(value))) { // Überprüfe ob alle Werte der Kombination im xMoves Array sind
>   finishGame('Player X hat gewonnen');
>   return;
>   }
>   if (combination.every((value) => oMoves.includes(value))) { // Überprüfe ob alle Werte der Kombination im oMoves Array sind
>   finishGame('Player O hat gewonnen');
>   return;
>   }
> }
> ```

1. Wie wird das Spielfeld zurückgesetzt, um ein neues Spiel zu starten?

> Die Seite wird nach der AlertBox neu geladen, dadurch wird `createBoard()` wieder ausgeführt und setzt das Spielfeld.

- Wo ist der relevante Code Ausschnitt?
`finishGame(text)`-Funktion : `if(!alert(text)){window.location.reload();}`

1. Fasse in deinen eigenen Worten zusammen, wie das Tic Tac Toe-Spielfeld erstellt wird

> Der HTML-Code enthält ein `div`-Element mit ID `board`, welches im CSS als grid-Layout mit 3 Spalten und 3 Reihen deklariert wird. Beim Laden der Seite wird `createBoard()` ausgeführt, was in jede Zelle im grid ein `div`-Element mit der Klasse `cell` erstellt.

1. Fasse in deinen eigenen Worten zusammen, wie erkannt wird ob es einen Gewinner gibt

> Bei jedem Klick auf eine Zelle wird `makeMove(index)` ausgeführt, welches nach jedem Spielzug wiederum `gameFinished()` aufruft. Diese Funktion vergleicht die vorliegende Situation des Spielfelds mit allen möglichen Gewinnkombinationen. Wenn ein Treffer gefunden wurde, wurde der Gewinner gefunden. Falls kein Gewinner ermittelt wurde und 9 Spielzüge gespielt wurden ist das Spiel mit unentschieden zuende gegangen.
