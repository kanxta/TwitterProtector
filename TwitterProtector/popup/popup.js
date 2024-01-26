let elements = {
    cam: document.getElementById('cam'),
    make: document.getElementById('make'),
    url: document.getElementById('url'),
    img: document.getElementById('qr'),
    protect: document.getElementById('protect')
};

let keys = [];

window.onload = () => {
    chrome.storage.sync.get((data) => {
        document.getElementById("switch1").checked = data.protect;
    })
}

// show qr code
elements.make.addEventListener('click', () => {
    let url = elements.url.value;
    if (url) {
        elements.img.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + url;
    }
})

function showhide() {
    if (keys[1] == 10) {
        keys = []
        elements.cam.style.display = 'none';
        elements.protect.style.display = 'inline';
    }
}
//switch1
document.getElementById("switch1").onchange = () => {
    if (document.getElementById("switch1").checked) {
        let password = prompt("Set password....");
        while(password == null || password == "") {
            password = prompt("Set password....\nError!");
        }
        save(password);
    } else {
        chrome.storage.sync.get((data) => {
            let password = prompt("Enter password....");
            while(password == null || password == "") {
                password = prompt("Enter password....\nError!");
            }
            if (password == data.password) {
                chrome.storage.sync.set({ "protect": false, "password": null }, () => {
                    return;
                });
            }
        })
    }
}

//save 
function save (pass) {
    chrome.storage.sync.set({ "protect": true, "password": pass }, () => {
        return;
    });
}

document.onkeydown = (e) => {
    if (keys[0] == e.keyCode) {
        keys[1] += 1;
    } else {
        keys[0] = e.keyCode;
        keys[1] = 1;
    }
    showhide()
}