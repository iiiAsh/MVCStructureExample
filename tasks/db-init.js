import { db } from "../tools/db.js";

db.exec(`
    DROP TABLE items;
    CREATE TABLE items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        label TEXT NOT NULL
    );

    INSERT INTO items (label) VALUES ('apples');
`);