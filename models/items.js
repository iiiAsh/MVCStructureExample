import { db } from "../tools/db.js";

export function getItems() {
    return db.prepare("SELECT * FROM items").all();
}

export function createItem(label) {
    db.prepare("INSERT INTO items (label) VALUES (?)").run(label);
}