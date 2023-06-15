fetch('../layouts/footer.html').then(response => {

    if(!response.ok){
        return console.log('Error', response.status)
    }
    return response.text()
}
).then(footer => {
    const body = document.body
    body.insertAdjacentHTML('beforeend', footer)
})
