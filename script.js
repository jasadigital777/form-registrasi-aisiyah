document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('ppdbForm');
    const responseMessage = document.getElementById('responseMessage');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Mengambil data form
        const nama = document.getElementById('nama').value;
        const program = document.getElementById('program').value;

        // Simulasi pengiriman data
        responseMessage.style.color = "#27ae60";
        responseMessage.style.marginTop = "20px";
        responseMessage.innerHTML = `Terima kasih, Bapak/Ibu. Data <strong>${nama}</strong> untuk program <strong>${program}</strong> telah kami terima. Tim admin akan segera menghubungi Anda.`;

        // Reset form
        form.reset();

        // Opsional: Redirect ke WhatsApp
        /*
        const whatsappNumber = "628123456789"; // Ganti dengan nomor asli
        const text = `Halo Admin TK Aisyiyah, saya ingin mendaftarkan anak saya yang bernama ${nama} di program ${program}.`;
        window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
        */
    });
});
