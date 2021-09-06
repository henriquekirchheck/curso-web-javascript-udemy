const conteudo = document.querySelector('section#conteudo')

document.querySelectorAll('a').forEach(link => {
    link.onclick = function(e) {
        e.preventDefault()
        if (link.getAttribute('show') !== null) {

            fetch(link.href)
                .then(resp => resp.text())
                .then(html => conteudo.innerHTML = html)
        }
    }
})