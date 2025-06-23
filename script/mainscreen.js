export class MainScreen {
    render() {
        const chapter1 = document.createElement('div');
        chapter1.style.background = "red";
        chapter1.style.width = "200px";
        chapter1.style.height = "200px";
        const body = document.querySelector('body');
        if (!body)
            return;
        body.append(chapter1);
    }
}
