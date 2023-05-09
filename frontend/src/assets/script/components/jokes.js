import { Popup, PopupType } from './popup';

export class Joke {

    constructor() {
    }

    getJoke() {
        fetch("https://icanhazdadjoke.com/", {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        }).then(res => {
            return res.json()
        }).then(data => {
            let popup = new Popup('Bad Joke', data.joke, null, PopupType.Notice);
            popup.display();

        }).catch(err => {
            console.log(err)
        })
    }
}