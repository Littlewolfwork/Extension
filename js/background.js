chrome.contextMenus.create({
    'title': 'Добавить задачу', /* Текст пункта меню */
    'contexts':['selection'], /* Тип пункта меню */
    'onclick': function(info, tab) {   

        let div = document.createElement('div');

        div.innerHTML = `<div id="task-form-container">
            <form id="task-form">
                <label for="date">Дата</label><input type="text" id="date"> <br>
                <label for="time">Время</label><input type="text" id="time"> <br>
                <label for="exec">Отвественный</label><input type="text" id="exec"> <br>
                <label for="task">Текст</label><input type="text" id="task"> <br>
                <input type="hidden" id="edit" value="0">
                <input type="button" value="ОК" class="button-ok">  <input type="button" value="Отмена" class="button-cancel">
            </form>
        </div>';

        document.body.appendChild(div);
        let currentDate = new Date();
        popup.getElementById("date").innerHTML = currentDate.getDate()+"."+(parseInt(currentDate.getMonth())+1)+"." + currentDate.getFullYear();
        popup.getElementById("date").innerHTML = checkTime(currentDate.getHours())+":"+ checkTime(currentDate.getMinutes());
        popup.getElementById("date").innerHTML = info.selectionText;

        $('#task-form-container').css("display","none");

       /* var storage = chrome.storage.sync;
        storage.get("tasks",function(items){
            if(items.tasks){
                var tasks = items.tasks;
            }
            else{
                var tasks = new Array();
            }
            
            var currentDate = new Date();
            var newTask = new Object();
            newTask.date = currentDate.getDate()+"."+(parseInt(currentDate.getMonth())+1)+"." + currentDate.getFullYear();
            newTask.time = checkTime(currentDate.getHours())+":"+ checkTime(currentDate.getMinutes());
            newTask.task = info.selectionText;
            tasks[tasks.length] = newTask;
            storage.set({
                tasks:tasks
            });
        });
*/

    } 
});

function checkTime(i)
{
if (i<10)
{
i="0" + i;
}
return i;
}