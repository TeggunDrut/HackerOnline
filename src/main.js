const win = document.querySelector("#window");

let w = new Window(win);

let calculator = new App(w, "Calcuator", "./images/calculator.png", "./programs/Calcuator.html");
calculator.setPosition(win.clientWidth/2-(250/2), win.clientHeight / 2 - (330/2));
calculator.setSize(250, 330);

let browser = new App(w, "StratSurfer", "./images/StratSurfer.png", "./programs/StratSurfer.html")
browser.setSize(win.clientWidth / 1.5, win.clientHeight / 1.5);
browser.setPosition(win.clientWidth / 2 - (win.clientWidth / 3), win.clientHeight / 2 - (win.clientHeight / 3));

let desktop = w.createDesktop();
desktop.setSize(3);
desktop.addApp(calculator);
desktop.addApp(browser);