export function render(viewFn, viewData={}, status=200) {
    const content = viewFn(viewData)
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fruit Creation</title>
    <link rel="stylesheet" href="../week_2/assets/styles.css">
</head>
<body>
    <header>
        <h1>Fruit Invention</h1>
        <nav>
            <a href="/">Home</a>
        </nav>
    </header>
    ${content}
</body>
</html>`;
    const headers = new Headers({ "content-type": "text/html" })
    return new Response(html, { headers, status });

}