var btPut = document.getElementById('put')

btPut.addEventListener('click', ()=>{
    console.log('boton modifii:')
    fetch('update', {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            'name': 'cualquiera',
            'apellido': 'cualquiera'
        })
    })
})

