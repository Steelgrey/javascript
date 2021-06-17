const islem = 1;
switch (islem) {
    case 1:
        console.log("İşlem 1");
        break;
    case 2:
        console.log("İşlem 2");
        break;
    case 2:
        console.log("İşlem 2");
        break;
    default:
        console.log("Geçersiz İşlem");
        break; // Default kullanılması şart değil
}
// Eğer case sonunda break kullanılmazsa bir alttaki case de çalışır
// Bu işlem içerisinde break barındıran case'e kadar devam eder
// Bu yüzden default'ta kullanılması şart değil. Çünkü altında başka seçenek yok