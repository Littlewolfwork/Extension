$(function(){
    var storage = chrome.storage.sync;
    storage.get("tasks",function(items){
        console.log(items);
        if(items.tasks){
            currentTasks = items.tasks;       
            if(currentTasks.length >0){
              for(var i in currentTasks){
                  var add_html = '<li><b>'+currentTasks[i].date+' '+currentTasks[i].time+'</b> '+currentTasks[i].task+' <img src="/image/del.png" alt="Удалить" class="task-delete"></li>';
                  $("ul").append(add_html);
              }
            }
        }
  });
});

$('.clear-button').click(function(e){
    chrome.storage.sync.clear();
});
