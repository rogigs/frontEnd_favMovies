var login = document.getElementById("login")
var form = document.getElementById("form-login")

function valida(user) {
    let lengthArray = user.length
    for (let i = 0; i < lengthArray; i++) {
        if (form.user.value == user[i].USERS && form.password.value == user[i].PASSWORD_USERS) {
            localStorage.setItem("User", `${user[i].USERS}`);
            localStorage.setItem("id", `${user[i].ID_USERS}`);
            return true
        }
    }

    return false
}

login.addEventListener("click", (e) => {
    e.preventDefault();
    fetch(`http://localhost:4000/users`, {
        method: 'GET',
        headers: { "Content-Type": "application/json" },
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (user) {
            ret = valida(user)
            if (ret) {
                window.location.href = "catalogo.html"
            } else {
                let error = document.getElementById("error")
                error.innerHTML = "Usuário ou senhas estão incorretos"
            }

        })
})


