import { createItem, getItems } from "../models/items.js";
import { redirect } from "../tools/redirect.js";
import { render } from "../tools/render.js";
import { itemsView } from "../views/items.js";


export function itemsController() {
    const items = getItems();
    console.log(items);
    return render(itemsView, items);
}

export async function createItemController(request) {
    const formData = await request.formData();
    const label = formData.get('label');
    createItem(label)
    return redirect("/");
}