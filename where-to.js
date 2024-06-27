// document.getElementById('toggleButton').addEventListener('click', function() {
//     var nameList = document.getElementById('nameList');
//     if (nameList.style.display === 'none') {
//         nameList.style.display = 'block';
//         this.textContent = 'Category';
//     } else {
//         nameList.style.display = 'none';
//         this.textContent = 'Category';
//     }
// });



document.getElementById('toggleButton').addEventListener('click', function() {
    var nameList = document.getElementById('nameList');
    if (nameList.classList.contains('collapsed')) {
        nameList.classList.remove('collapsed');
        nameList.classList.add('expanded');
        this.textContent = 'Category';
    } else {
        nameList.classList.remove('expanded');
        nameList.classList.add('collapsed');
        this.textContent = 'Category';
    }
});
