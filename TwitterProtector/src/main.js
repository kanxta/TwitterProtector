let keys = []

chrome.storage.sync.get((data) => {
    console.log(!data.protect)
    if (!data.protect) {
        console.log("return")
        return;
    }
    document.getElementsByTagName("body")[0].innerHTML = `<p>failed to load. error code:023</p>`
})

document.onkeydown = (e) => {
    if (keys[0] == e.keyCode) {
        keys[1] += 1;
    } else {
        keys[0] = e.keyCode;
        keys[1] = 1;
    }
    update()
}

function update() {
    if (keys[1] == 7) {
        chrome.storage.sync.get((data) => {
            if (data.protect) return;
            let password = prompt("Set password....");
            while(password == null || password == "") {
                password = prompt("Set password....\nError!");
            }
            chrome.storage.sync.set({ "protect": true, "password": password }, () => {
                //reload
                window.location.reload()
            });
        })
    }
}