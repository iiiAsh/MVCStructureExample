function itemToHTML(item) {
    return `<li>${item.id} ${item.label}</li>`;
}

export function itemsView(items) {    
    return `
    <form method="POST">
        <label>new item</label>
        <input name="label">
    </form>
    <ul>
        ${items.map(itemToHTML).join("\n")}
    </ul>
    `
} 