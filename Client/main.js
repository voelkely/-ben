"use strict";
var Konzeption;
(function (Konzeption) {
    window.addEventListener("load", handleLoad);
})(Konzeption || (Konzeption = {}));
window.setTimeout(animate, 300000);
let url = "http://localhost:5001/";
//let url: string = "https://fiveminutenonsense.herokuapp.com";
function handleLoad(_event) {
    console.log("start the chat");
    //  let loginBtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#BtnLogin");
    //   loginBtn.addEventListener("click", enterchat); UNWICHTIG! DER BUTTON LÖST NICHTS AUS
    let messageField = document.getElementById("message");
    messageField.addEventListener("keyup", sendText);
}
function animate() {
    console.log("animation");
}
//async function sendText (_event: KeyboardEvent): Promise <void> {
//  console.log("dein Text wurde gesendet");
// if (_event.key === "Enter") {
//   sendMessageToServer(messageField.value);
//  messageField.value = ""; // clear message text field
//  }
//}
//function getText(_event: MouseEvent): void {
// console.log("hier ist dein Text");
//}
//function sendMessageToServer(text: string): void {
// if (text !== null && text.length > 0) {
//const data: ClientMessage = {
// client: id,
// text: text,
// };
// sendPostRequest("/message", JSON.stringify(data));
// }
// }
//function allText();
//function likeIt();
//# sourceMappingURL=main.js.map