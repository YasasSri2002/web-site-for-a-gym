function showSide(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = "flex";
}
function hideSide(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = "none";
}


document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('img1');
    
    image.addEventListener('mouseover', function() {
        image.src = 'img/free2.jpg';
       // image.style.width = '50%';
       // image.style.height = '400px';
    });
    
    image.addEventListener('mouseout', function() {
        image.src = 'img/free.jpg';
        
    });
});



