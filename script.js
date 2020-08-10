document.querySelector('input[type="file"]').addEventListener('change', function() {
    // Объект FileReader позволяет веб-приложениям асинхронно читать 
    // содержимое файлов (или буферы данных), хранящиеся на компьютере
    // пользователя, используя объекты File или Blob, с помощью которых
    // задается файл или данные для чтения.
    const reader = new FileReader();
    // Запускает процесс чтения данных
    // Так же есть:
    // readAsDataURL(),
    // readAsText
    reader.readAsDataURL(this.files[0]);
    // При загрузке файла
    reader.addEventListener('load', () => {
        // result - Данные из файла
        document.querySelector('.block').style.backgroundImage = `url(${reader.result})`;
    });
});