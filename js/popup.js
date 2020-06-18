$(function(){
    var storage = chrome.storage.sync;
    storage.get("tasks",function(items){
       // console.log(items);
        if(items.tasks){
            currentTasks = items.tasks;       
            if(currentTasks.length >0){
              for(var i in currentTasks){
                  var add_html = '<li id="li_task'+i+'"><b>'+currentTasks[i].date+' '+currentTasks[i].time+'</b> '+currentTasks[i].task+' <img src="/image/del.png" alt="Удалить" class="task-delete" id="task'+i+'"></li>';
                  $("ul").append(add_html);
              }
            }
        }
  });
});


$('.clear-button').click(function(e){
    chrome.storage.sync.clear();
});

$("ul").on("click", ".task-delete", function(e){ 
  
  let id = Number((e.target.id).slice(4));
  console.log(id);
  var storage = chrome.storage.sync;
        storage.get("tasks",function(items){
            if(items.tasks){
                var tasks = items.tasks;
            }
            else{
                exit();
            }

            tasks.splice(id, 1);
            storage.set({
                tasks:tasks
            });
            $('#li_task'+id).remove();
        });
});

