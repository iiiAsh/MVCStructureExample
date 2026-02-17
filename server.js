import { createItemController, itemsController } from "./controllers/items.js";
import { staticController } from "./controllers/static.js";

export function server(request) {
    const url = new URL(request.url);
    const path = url.pathname;
    console.log("\n", request.method, url.pathname);

    if(path.endsWith(".css")) return staticController(request);
    if(path == "/" & request.method == "GET") return itemsController(request);
    if(path == "/" & request.method == "POST") return createItemController(request);

}