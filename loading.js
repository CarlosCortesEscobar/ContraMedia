document.addEventListener('DOMContentLoaded', () => {
    const loading = document.getElementById('loading-wrapper')
    const loaded = document.getElementById('loaded-wrapper')
    window.addEventListener('load', () => {
        loading.style.display = "none"
        loaded.style.display = "flex"
    })
})