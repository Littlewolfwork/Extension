chrome.contextMenus.create({
    'title': 'Добавить задачу', /* Текст пункта меню */
    'contexts':['selection'], /* Тип пункта меню */
    'onclick': function(info, tab) {  
        var storage = chrome.storage.sync;
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
            newTask.responsible = getResponsibleTask(info.selectionText);
            newTask.task = info.selectionText;
            tasks[tasks.length] = newTask;
            storage.set({
                tasks:tasks
            });
        });


    } 
});

/*
* Функция, которая парсит выделенную строку на предмет отвественного за задачу
*/

function getResponsibleTask(str){
    if (str.includes('@')){
        strArr = str.split(' ');
        returnArr = strArr.filter(function(strItem) {
            return strItem.includes('@');
          });
          return returnArr[0].slice(1);
    }
    else{
        return "";
    }

}

function checkTime(i){
    if (i<10){
        i="0" + i;
    }
    return i;
}
