// # Zadanie 1

// Stwórz routing aplikacji (bazując na poprzednich zadaniach). Potrzebne będą:
// * /clients -> podstrona z danymi kontaktowymi klientów
// * /clients/add -> podstrona na dodawanie klientów
// * /clients/:id -> podstrona na detale klienta,
// * /clients/:id/edit -> podstrona na edycję klienta,
// * /orders - > podstrona na wszystkie zamowienia,
// * /orders/:id -> podstrona na podgląd pojedynczego zamowienia,
// * /orders/add -> podstrona na dodawanie zamowien,
// * /invoices - > podstrona na faktury,


// # Zadanie 2

// Podstrona na dodawanie klientów implementacja. <br />
// Stwórz formularz, który zawiera pola z walidacją
// * imie - pole wymagane, minimum 3 litery,
// * nazwisko - pole wymagane, minimum 3 litery,
// * ulica- pole wymagane, minimum 5 liter,
// * kod pocztowy - format 2 cyfr, następnie znak - i 3 cyfry, wymagane
// * miasto - minimum 3 litery, wymagane,
// * region - pole opcjonalne, napis, minimum 3 litery,
// * link do zdjecia - pole opcjonalne, string,
// * numer telefonu - zaczyna się od + i 11 cyfr, wymagane, <br />



// # Zadanie 3

// Podstrona na dodawanie zamowien powinna zawierać pola:
// * select z imieniem i nazwiskiem klienta (jako value weź jego numer telefonu), pole wymagane,
// * ilość, liczba większa od 1 mniejsza od 15, wymagane,
// * tytuł zamowienia - pole tekstowe, minimum 5 liter, wymagane
// * treść zamowienia- pole tekstowe minimum 10 liter, wymagane, <br />
// ## TODO:
// - [ ] na podstronie orders add zaimplementuj formularz do dodawania zamówień,
// - [ ] na podstronie orders wyświetl numer telefonu zamawiającego, tytuł i ilość, dodaj przycisk details przenoszący na podstronę orders/:id, statyczne UI,
// - [ ] na podstronie orders/:id, wyświetl dane zamawiającego (imię, nazwisko) i przycisk do przejścia do jego detali oraz dane zamówienia, czyli tytuł, treść i ilość, (statyczne UI)<br />