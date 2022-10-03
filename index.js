const btnsuccess = document.getElementById('car--success');
btnsuccess.addEventListener('click', function () {
    test('success')
})

const btnalert = document.getElementById('car--alert');
btnalert.addEventListener('click', function () {
    test('alert')
})


function test(name) {
    console.log(name)
}