console.log('Initialization app');
let uploadFilesButton = document.getElementById('uploadFilesButton');

const upload = (file) => {
    const formData = new FormData();

    formData.append('userPhoto', file);

    fetch('http://localhost:3000/users/uploadFile', {
        method: 'POST',
        body: formData 
    }).then(
        response => response.json()
    ).catch(
        error => console.error('Error:', error)
    ).then(
        response => console.log('Success:', JSON.stringify(response))
    );
};

uploadFilesButton.onclick = (events) => {
    let userPhoto = document.getElementById('userPhoto');
    if (!userPhoto.value) {
        alert('Debes agregar un archivo para poder cargarlo');
    } else {
        upload(userPhoto.files[0]);
    }
};