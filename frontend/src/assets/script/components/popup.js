export class Popup {
    title;
    content;
    footer;
    type;




    constructor(title, content, footer, type) {
        this.title = title;
        this.content = content;
        this.footer = footer;
        this.type = type;
    }

    display() {
        alert(this.content);
    }

}

export const PopupType = {
    Notice: 0,
    Success: 1,
    Error: 2,
    Warning: 3,
    Info: 4,
}