# Aufgabe 2: CSS Anpassungen

1. **Hover-Effekt für Zellen**: Füge einen Hover-Effekt hinzu, sodass sich die Hintergrundfarbe der Zellen ändert, wenn der Mauszeiger darüber schwebt.

> ```css
> .cell:hover {
>     background-color: darkgray;
> }
> ```

1. **Anpassbare Hintergrundbilder**: Füge benutzerdefinierte Hintergrundbilder in jeder der Zellen hinzu, um das gesamte Spielfeld zu verschönern.

> ```css
> // global variable initialisieren
> let images = ['albari.jpg', 'alexis.jpg', 'brett.jpg', 'johnson.jpg', 'miguel.jpg', 'pixabay.jpg', 'pixabay2.jpg', 'pixabay3.jpg', 'putzer.jpg'];
>
> // in function `createBoard()` hinzufuegen
> cell.setAttribute('style', 'background-image: url("img/'+images[i]+'")');
>
> // im CSS Klasse `.cell` hinzufuegen
> background-size: contain;
> color: white;
> ```

1. **Schriftart**: Ändere die Schriftart des gesamten Texts zu einer anderen Schriftart

> `body { color: yellow; } /* im CSS hinzufuegen */`

1. **Transparenz für Zellen**: Reduziere die Transparenz der Zellen, um den Fokus auf die aktuellen Symbole zu lenken und eine gewisse Tiefe zu erzeugen.

> ```javascript
> // Im CSS Klasse `.cell` hinzufuegen
> opacity: 0.6; 
> 
> // Im CSS Klasse `.cell:hover`
> .cell:hover {
>     background-color: darkgray;
>     opacity: 1; 
> }
> 
> // Im Script bei `makeMove()` hinzufuegen
> cells[index].style.opacity = 1;
> ```

## Optional

1. Responsive Design: Passe das Styling an, um sicherzustellen, dass das Spielfeld und die Zellen auf verschiedenen Bildschirmgrößen und Geräten gut aussehen.
