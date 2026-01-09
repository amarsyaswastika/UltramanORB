// --- KONFIGURASI EMAILJS (ISI DISINI) ---
const PUBLIC_KEY = "UsUpAyFti1M_zop3S";  // Contoh: "user_123xyz..."
const SERVICE_ID = "service_y27vbtu";            // Contoh: "service_gmail"
const TEMPLATE_ID = "template_mheehmo";          // Contoh: "template_welcome"

// --- INISIALISASI ---
(function () {
    emailjs.init(PUBLIC_KEY);
})();

// --- LOGIKA PENGIRIMAN ---
document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('form-pendaftaran');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Mencegah reload halaman

            // Ambil elemen tombol untuk efek loading
            const btn = document.getElementById('btn-kirim');
            const originalText = btn.innerText;

            // Ubah status tombol
            btn.innerText = 'Sedang Mengirim...';
            btn.disabled = true;

            // Siapkan data parameter (sesuaikan dengan variabel di Template EmailJS)
            const templateParams = {
                to_name: document.getElementById('nama').value,
                user_email: document.getElementById('email').value,
                // Tambahkan variabel lain jika perlu
            };

            console.log("Mengirim dengan parameter:", templateParams);

            // Kirim Email
            emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
                .then(function () {
                    // JIKA SUKSES
                    console.log('SUCCESS!');
                    btn.innerText = 'Berhasil Terkirim!';
                    alert('Selamat! Pendaftaran berhasil. Cek email kamu sekarang.');

                    form.reset(); // Kosongkan form

                    // Kembalikan tombol normal setelah 3 detik
                    setTimeout(() => {
                        btn.innerText = originalText;
                        btn.disabled = false;
                    }, 3000);

                }, function (error) {
                    // JIKA GAGAL
                    console.log('FAILED...', error);
                    btn.innerText = 'Gagal';
                    // Tampilkan error detail ke user agar mudah didebug
                    alert('Maaf, terjadi kesalahan: ' + JSON.stringify(error));

                    btn.disabled = false;
                });
        });
    } else {
        console.error("Form dengan ID 'form-pendaftaran' tidak ditemukan!");
    }
});