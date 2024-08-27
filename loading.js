document.addEventListener('DOMContentLoaded', () => {
    const loading = document.getElementsByClassName('loading')[0]
    const loaded = document.getElementsByClassName('loaded')[0]
    window.addEventListener('load', () => {
        loading.style.display = "none"
        loaded.style.display = "flex"
    })
})