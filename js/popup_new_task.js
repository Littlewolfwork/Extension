function checkTime(i){
    if (i<10){
        i="0" + i;
    }
    return i;
}

/*
* Функция для проверки строки на символ @ и другие спецсимволы для автоопределения отвественного за задачу.
*/
function getExec(str){
    return "";
}

function viewPopup(info){
var div = document.createElement('div');

        div.innerHTML = `<div id="task-form-container">
            <form id="task-form">
                <label for="date">Дата</label><input type="text" id="date"> <br>
                <label for="time">Время</label><input type="text" id="time"> <br>
                <label for="exec">Ответственный</label><input type="text" id="exec"> <br>
                <label for="task">Текст</label><input type="text" id="task"> <br>
                <input type="hidden" id="edit" value="0">
                <input type="button" value="ОК" class="button-ok">  <input type="button" value="Отмена" class="button-cancel">
            </form>
        </div>`;

        document.body.appendChild(div);
        console.log("append div");
        let currentDate = new Date();
        document.getElementById("date").innerHTML = currentDate.getDate()+"."+(parseInt(currentDate.getMonth())+1)+"." + currentDate.getFullYear();
        document.getElementById("time").innerHTML = checkTime(currentDate.getHours())+":"+ checkTime(currentDate.getMinutes());
         document.getElementById("exec").innerHTML = getExec(info.selectionText); 
        document.getElementById("task").innerHTML = info.selectionText;

        document.getElementById('task-form-container').style.display="block";
}