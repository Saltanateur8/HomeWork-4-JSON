const root = document.getElementById("root")


function htmlToElement(html) {
    let template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}


const request = new XMLHttpRequest()
request.open("GET", "users.json", true)
request.setRequestHeader("Content-type", "application/json")
request.send(null)
request.addEventListener('load', responseCallBack)

function responseCallBack() {
    const data = JSON.parse(request.response)
    data.map(elem => {
        const userTemplate = htmlToElement(
            `
                        <div class="col-md-3 ">
                            <div class="card">
                                <img src="${elem.picture}" class="card-img-top" alt="User">
                                <div class="card-body">
                                    <h5 class="card-title">${elem.first_name + " " + elem.last_name}</h5>
                                    <p class="card-text">Username: ${elem.username}</p>
                                    <p class="card-text">Email: ${elem.email}</p>
                                    <p class="card-text">Birthdate: ${elem.birthdate}</p>
                                    <p class="card-text">Gender: ${elem.gender}</p>
                                    <p class="card-text">Phone: ${elem.phone_number}</p>
                                    <p class="card-text">Location: <br>${
                elem.location.state + " , " + elem.location.city + " , " + elem.location.street + " , " + elem.location.pastcode
            }</p>
                                </div>
                            </div>
                        </div>
                `
        )
        root.appendChild(userTemplate)
    })
}

