/* eslint-disable prettier/prettier */
import { app } from "../../../Firebase/firebase";

export const addItem = (item) => {
    app.ref('/items').push({
        name: item
    });
}

