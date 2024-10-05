window.addEventListener('load', function() {
    // Set button text and hide help section
    document.getElementsByClassName('btn1')[0].value = 'Conectarse';
    document.getElementsByClassName('login-help')[0].style.display = 'none';
    document.getElementsByTagName('img')[0].style.width = '100px';
    document.getElementsByTagName('img')[0].style.height = '100px';

    // Create and style the "Contáctenos" button
    var btn = document.createElement('a'); 
    btn.href = 'https://hicomp.com.ar'; 
    btn.innerText = 'Contáctenos'; 
    btn.style.display = 'block'; 
    btn.style.marginTop = '10px'; 
    btn.style.textAlign = 'center'; 
    btn.style.padding = '10px'; 
    btn.style.backgroundColor = '#4CAF50'; 
    btn.style.color = 'white'; 
    btn.style.textDecoration = 'none'; 
    btn.style.borderRadius = '5px'; 
    document.querySelector('.login-card').appendChild(btn);
});
