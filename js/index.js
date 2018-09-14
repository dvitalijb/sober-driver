(function() {
    const text = 'Наші професійні водії візьмуть турботу за ваше авто на себе.' +
     ' Зателефонуйте нам +8 (033) 115 - 95 - 95; +8 (032) 117 - 95 - 95' + 
     ' або по безлімітній лінії по всій Україні 8 (800) 301 - 80 - 88,' + 
     ' назвіть адресу вашого місця розташування і потрібного часу прибуття водія.' + 
     ' Так само Ви можете замовити водія без дзвінка диспетчеру, скачавши наш додаток.' + 
     ' При необхідності, водій нашої компанії, прибуде в указане місце протягом 15' + 
     ' хвилин після виклику. Наш шофер сяде за кермо вашого автомобіля і відвезе вас в' + 
     ' заданому напрямку.'
    const delay = 10;
    const elem = $("#result");

    const print_text = function(text, elem, delay) {
        if (text.length > 0) {
            elem.append(text[0]);
            setTimeout(function() {
                print_text(text.slice(1), elem, delay);
            }, delay);
        }
    }

    print_text(text, elem, delay);
}
)();
