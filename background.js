chrome.contextMenus.create({
    'title': 'Добавить задачу', /* Текст пунтка меню */
    'contexts':['selection'], /* Тип пункта меню */
    'onclick': function(info, tab) { 

        var storage = chrome.storage.sync;
        storage.get("tasks",function(items){
            //console.log(items);
            if(items.tasks){
                var tasks = items.tasks;
            }
            else{
                var tasks = new Array();
            }
            
            var today = new Date();
            var new_task = new Object();
            new_task.date = today.getDate()+"."+(parseInt(today.getMonth())+1)+"." + today.getFullYear();
            new_task.time = checkTime(today.getHours())+":"+ checkTime(today.getMinutes());
            new_task.task = info.selectionText;
            tasks[tasks.length] = new_task;
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