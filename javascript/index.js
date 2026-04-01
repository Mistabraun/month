function goTo(link) {
    document.querySelectorAll('button').forEach(function name(element) {
        element.disabled = true
    })

    document.location.href = link + "?visit=true"

}

function removeUrlParameter(key) {
    let url = new URL(window.location.href);
    url.searchParams.delete(key);

    window.history.replaceState(null, '', url);
}
removeUrlParameter("visit")

window.addEventListener('load', function () {
    const loader = document.getElementById('loader');
    if (!loader) {
        return;
    }
    loader.setAttribute("disabled", true);
    setTimeout(function () {
        loader.style.display = "none";
    }, 300);
})