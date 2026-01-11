/**
 * File ini HANYA UNTUK TESTING SEMGREP
 * Mengandung kerentanan XSS (Cross Site Scripting)
 */

// CONTOH 1: DOM-based XSS
// Semgrep mendeteksi aliran data dari URL (location.search) ke Sink berbahaya (innerHTML)
function showWelcomeMessage() {
    const params = new URLSearchParams(window.location.search);
    const user = params.get("user"); // <-- Input tidak dipercaya

    // VULNERABLE: Menulis input mentah langsung ke HTML
    document.getElementById("welcome-banner").innerHTML = "Welcome, " + user;
}

// CONTOH 2: Eval Injection (Sangat Berbahaya)
// Semgrep akan langsung teriak "High Severity" melihat ini
function calculateExpression(userInput) {
    // VULNERABLE: Menjalankan string apapun sebagai kode program
    const result = eval(userInput); 
    console.log(result);
}

// CONTOH 3: Node.js / Express Reflected XSS
// Jika repo anda terdeteksi sebagai backend Node.js
// const express = require('express');
// const app = express();

function handleRequest(req, res) {
    const name = req.query.name;
    
    // VULNERABLE: Mengirim input user langsung ke response browser
    res.send("<h1>Hello " + name + "</h1>");
}
