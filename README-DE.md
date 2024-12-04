## Was ist Redux?
- Redux ist eine State-Management-Bibliothek für JavaScript-Anwendungen, insbesondere in Verbindung mit React. Es wird verwendet, um den Zustand einer Anwendung zentral zu verwalten, sodass der Zustand nicht direkt in einzelnen Komponenten, sondern in einem zentralen Store gespeichert wird.
- Dadurch wird die Datenflusslogik übersichtlicher, vor allem in großen Anwendungen.

## Grundkonzepte von Redux:
1. **Store:** Der zentrale Speicher, der den gesamten Zustand der Anwendung enthält.
2. **Actions:** Beschreiben, was passieren soll. Es sind einfache JavaScript-Objekte mit einer type-Eigenschaft (z. B. { type: 'INCREMENT' }).
3. **Reducers:** Funktionen, die den aktuellen Zustand (state) und eine Action verarbeiten und den neuen Zustand zurückgeben. Sie sind pure Funktionen (d.h., sie ändern den Zustand nicht direkt, sondern erstellen eine neue Kopie des Zustands).
4. **Dispatch:** Methode, um eine Action an den Store zu senden.
5. **Selector:** Funktionen, die den Zustand (State) aus dem Store abrufen.

## was ist redux-toolkit
- Redux Toolkit (RTK) ist eine modernisierte Version von Redux. Es wurde entwickelt, um den Boilerplate-Code (übermäßigen Setup-Aufwand) zu reduzieren und eine einfache, standardisierte Möglichkeit zur Verwendung von Redux zu bieten.

## Was ist redux-react?
- Das Paket react-redux ist die offizielle Bindung von Redux für React-Anwendungen.
- Einfach gesagt, verbindet Redux mit React-Anwendung.

## was ist ConfigureStore
- configureStore ist eine Funktion aus Redux Toolkit, die den Store erstellt und automatisch Standard-Middleware (wie redux-thunk) hinzufügt.
- ConfigureStore nimmt drei Parameters:
1. reducer: Eine Sammlung von Reducer-Funktionen, die den Zustand der Anwendung verwalten.
2. Middleware: Optionale benutzerdefinierte Middleware.
3. DevTools: Aktiviert standardmäßig die Redux DevTools.

## Was ist ein Reducer?
- Ein Reducer ist eine Funktion, die:
  Den aktuellen Zustand (state) und eine   Action als Parameter entgegennimmt.
- Den neuen Zustand zurückgibt, ohne den alten direkt zu verändern

## Beispiel:
```javascript
// In store.js

import { configureStore } from '@reduxjs/toolkit';

// Reducer
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

// Store
const store = configureStore({
  reducer: {
    counter: counterReducer, // Reducer wird hier hinzugefügt
  },
});
export default store;
```

```javascript
// in CounterComponent
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export function CounterComponent() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </div>
  );
}
```

```javascript
// in index.js oder main.js

import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import  store  from './store';
import { Provider } from 'react-redux';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```
---
## was ist createSlice in Redux-Toolkit?
- ist eine Funktion aus Redux Toolkit, die den Prozess der Erstellung von Redux-Slices (Teilbereiche des Zustands) vereinfacht. Sie kombiniert die Definition des Initialzustands, der Aktionen und der Reduzierfunktionen in einer übersichtlichen Weise.

##### Das Konzept dahinter
- Das Ziel von createSlice ist es, die Boilerplate (wiederholenden Code) in Redux zu reduzieren. Es erlaubt Entwicklern, sich auf die eigentliche Logik zu konzentrieren, anstatt immer wieder manuell:
- Aktionstypen zu erstellen,
- Action Creators zu schreiben und
- Reducer-Funktionen zu definieren.

##### Vorteile von createSlice
- Automatische Generierung von Aktionstypen und Action Creators.
- Reduzierte Fehleranfälligkeit.
- Weniger Boilerplate-Code.
- Klar strukturierter Code durch Slices.

```javascript
// in features/cartSlide.js
const initialState = {
    cartItems: [],   // Liste der Produkte im Warenkorb
    amount: 0,       // Gesamtanzahl der Artikel
    total: 0,        // Gesamtkosten der Artikel
    isLoading: true, // Zustand, ob Daten geladen werden
};

const cartSlice = createSlice({
    name: 'cart',        // Name des Slices (wird für Aktionstypen verwendet)
    initialState,        // Initialer Zustand
});
 export default cartslide.reducer;
 ```

 ```javascript
// in store.js
import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from './features/cart/cartSlice.js'

export const store = configureStore({
    reducer:{
        cart:cartSliceReducer
    }
})
 ```
