chrome.contextMenus.create({
    'title': 'Добавить задачу', /* Текст пунтка меню */
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
            newTask.task = info.selectionText;
            tasks[tasks.length] = newTask;
            storage.set({
                tasks:tasks
            });
        });
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