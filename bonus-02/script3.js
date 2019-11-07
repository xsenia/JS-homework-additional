'use strict';

const cityArr = {
    rus: ['Москва', 'Санк-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск'],
    uk: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Донецк', 'Запорожье', 'Львов'],
    bel: ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест'],
    jap: ['Токио', 'Киото', 'Осака', 'Иокогама'] 
}


let selectCountry = document.getElementById('country'),
    selectCity = document.getElementById('city'),
    result = document.querySelector('.result'),
    resultText = [];

    
selectCountry.addEventListener('change', function() {
    selectCity.style.display = 'inline-block';

    let country = selectCountry.value;
    resultText[0] = selectCountry.options[selectCountry.selectedIndex].text;

    while(selectCity.childNodes.length) {
        selectCity.removeChild(selectCity.firstChild);
    }    
    
    let newCityArr = cityArr[country];
    for(let i = 0; i < newCityArr.length; i++){
        let opt = document.createElement('option');
        opt = new Option(newCityArr[i], newCityArr[i]);
        selectCity.append(opt); 
    } 
    result.innerHTML = resultText[0];
});

selectCity.addEventListener("change", function() {
    resultText[1] = selectCity.options[selectCity.selectedIndex].text;
    result.innerHTML = resultText.join(', ');
});
