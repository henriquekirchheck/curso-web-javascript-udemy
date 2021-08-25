const conteudo = document.querySelector('section#conteudo')

document.querySelectorAll('a').forEach(link => {
    link.onclick = function(e) {
        if (link.getAttribute('show') !== null) {
            e.preventDefault()

            fetch(link.href)
                .then(resp => resp.text())
                .then(html => conteudo.innerHTML = html)
        }
    }
})