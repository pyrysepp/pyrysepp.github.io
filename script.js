window.onload=function(){
    document.getElementById('mywebsite_button').addEventListener('click', 
function() {
    document.querySelector('.modal-bg').style.display = 'flex';
    console.log("jou")
});
    document.getElementById('modal-close').addEventListener('click',
    function() {
        document.querySelector('.modal-bg').style.display = 'none';
    });
    
}
