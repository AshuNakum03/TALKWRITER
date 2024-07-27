function func() {
    window.location.href = "Blog.html";
}
function func1() {
    window.location.href = "index.html";
}
function func2() {
    window.location.href = "contact.html"
}
function meth1() {
    window.location.href = "method.html"
}
function book() {
    window.location.href = "Book.html"
}
function story() {
    window.location.href = "storytelling.html";
}

function submit() {
    let c = document.getElementById("name").value;
    let a = document.getElementById("b");
    a.textContent = c

    let e = document.getElementById("mail").value;
    let f = document.getElementById("b1");
    f.textContent = e

    let h = document.getElementById("number").value;
    let k = document.getElementById("b2");
    k.textContent = h

    let w = document.getElementById("text").value;
    let q = document.getElementById("b3");
    q.textContent = w
}