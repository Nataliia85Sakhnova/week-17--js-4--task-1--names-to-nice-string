// Сделайте интерфейс преобразования ФИО на три поля (input).
// Учтите, пожалуйста, все нюансы - лишние пробелы, отсутствие больших букв в именах и пр.



const surname = document.getElementById("surname") //передали имя, такое как пользователь ввел
const niceSurname = surname[0].toUpperCase() + surname[1].toLowerCase(); //первая буква стала заглавной


for (const val of values)
{
    const option = document.createElement("option");//<option>
    option.value = val;//<option value='Картошка'>
    option.text = val.charAt(0).toUpperCase() + val.slice(1);//<option value='Картошка'>Картошка</option>
    select.appendChild(option);
}