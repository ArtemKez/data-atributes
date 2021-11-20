for (const button of document.querySelectorAll('.btn')) {
    button.addEventListener('click', function () {
        document.getElementById('wrapper').style.flexDirection = this.dataset.prop;
    })
}