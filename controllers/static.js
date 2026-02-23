import { serveDir } from '@std/http';


export function staticController(request) {
    return serveDir(request, {fsRoot: 'week_2/assets'});
}