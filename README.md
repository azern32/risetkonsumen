# risetkonsumen
Git untuk penelitian eksperimen di mata kuliah Psikologi Konsumen. Sebuah tugas kelompok.



# Cara deploy di komputer masing-masing
Website ini bersifat lokal, yang artinya servernya berasa dari komputer sendiri yang kemudian dibuka melalui web browser yang sudah terinstall pada komputer pribadi teman-teman sekalian.

Untuk bisa membuka website ini di komputer teman-teman, dibutuhkan beberapa aplikasi dan langkah-langkah sebagai berikut:

* Aplikasi :
  - Install XAMPP terbaru
    - Lakukan instalasi secara default.
    - Setelah menginstall XAMPP secara default, seharusnya ada folder C:/xampp
    - Masuk ke folder tersebut, lalu masuk lagi ke folder /htdocs
    - Dalam folder ini akan digunakan untuk menyimpan folder proyek
  - Install Git terbaru
    - Lakukan instalasi secara default.
  - Web broser yang anda percayai
    - Sebaiknya tidak menggunakan Internet Explorer ataupun Microsoft Edge

* Langkah-langkah :

  GIT
    - Pastikan teman-teman sudah menginstall git secara default
    - Teman-teman bisa sebelumnya mendaftarkan akun terlebih dahulu pada github.com agar nantinya lebih mudah mengakses
    - Pada folder C:/xampp/htdocs tadi, klik kanan untuk membuka menu, pilih "Git bash here"
    - Tunggu sampai tanda dollar muncul dalam terminal tersebut
    - Setelah muncul, ketik code berikut
      git clone https://github.com/azern32/risetkonsumen.git
    - File-file akan terdownload beserta dengan foldernya, tunggu sampai selesai

  XAMPP
    - Buka aplikasi xampp
    - Klik "Start" pada row Apache

  Browser
    - Setelah memulai apache tadi, silahkan buka browser teman-Teman
    - Pada adressbar, ketik "127.0.0.1/risetkonsumen" tanpa tanda petik


# Keterangan tambahan

Setiap update yang saya lakukan, teman-teman bisa dengan mudah mengikuti update menggunakan git, caranya seperti berikut:
- masuk ke folder c:/xampp/htdocs/risetkonsumen
- klik kanan untuk membuka menu
- pilih "Git bash here"
- ketik "git pull" tanpa tanda petik
- setiap ada update terbaru, git akan mendownload perubahan terbaru
