// Handle text updates

function addDiv(name, icon, description){
    var info_row = document.getElementById("info_row");
    var div = document.createElement('div');
    div.className = 'col-sm';

    var h5 = document.createElement('h5');
    h5.innerHTML = name;
    div.appendChild(h5);

    var logo = document.createElement("i");
    logo.className = "logo main_color fas fa-" + icon;
    div.appendChild(logo);

    var description_elem = document.createElement("p");
    description_elem.innerHTML = description;
    div.appendChild(description_elem);

    info_row.appendChild(div);
}

function loadDetails(){
    details.forEach(function(i){
        addDiv(i.title, i.icon, i.description)
    });
}

function main(){
    var d = new Date();
    // Load variables
    document.getElementById("title").innerText = config.title;
    document.getElementById("navbar_title").innerText = config.title;
    document.getElementById("header_title").innerText = config.title;
    document.getElementById("description").innerText = config.description;
    document.getElementById("copyright").innerText = "\u00A9 " + config.title + " " + d.getFullYear();
    loadDetails();
}