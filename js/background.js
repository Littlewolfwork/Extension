chrome.contextMenus.create({
    'title': 'Добавить задачу', /* Текст пункта меню */
    'contexts':['selection'], /* Тип пункта меню */
    'onclick': function(info, tab) {  
        
        chrome.tabs.executeScript(
            {
                //Для подключения JavaScript файла нужно указать
                //file : "content_script.js",
                file : "js/popup_new_task.js",
                code : "viewPopup("+info+")"
            },
            function() {
                console.log("JavaScript executed!");
            });
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

function checkTime(i){
    if (i<10){
        i="0" + i;
    }
    return i;
}
