document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah pengiriman form secara default

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Validasi sederhana
    if (name === '' || email === '') {
        alert('Harap isi semua bidang!');
    } else {
        alert(`Terima kasih, ${name}. Kami akan menghubungi Anda di ${email}.`);
    }
});
