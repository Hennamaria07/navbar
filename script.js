const showSideBar  = document.getElementById('sidebar-el');
showSideBar.addEventListener('click', (e) => {
    document.querySelector('.sidebar').style.display = 'flex';
});
const hideSideBar  = document.getElementById('hide-side-bar');
hideSideBar.addEventListener('click', (e) => {
    document.querySelector('.sidebar').style.display = 'none';
});
