function submitform(event){
    event.preventDefault();

    const formData = new formData(event.target);
    const url = "/submit-form";

    fetch(url,{
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {

    })
    .catch(error => {
        
    })


}