function hideInformation(){
    document.getElementById('information').hidden = true
}

function showInformation(){
    document.getElementById('information').hidden = false
    document.getElementById('displayName').innerHTML = document.getElementById('name').value
    document.getElementById('displayEmail').innerHTML = document.getElementById('email').value
    document.getElementById('displayPhone').innerHTML = document.getElementById('phone').value
    document.getElementById('displayAadhar').innerHTML = document.getElementById('aadhar').value
    document.getElementById('info').innerHTML = 'Registered Successfully'
}
