$(function(){
    var storage = chrome.storage.sync;
    storage.get("tasks",function(items){
       // console.log(items);
        if(items.tasks){
            currentTasks = items.tasks;       
            if(currentTasks.length >0){
              for(var i in currentTasks){
                  let add_html = '<li id="li_task'+i+'"><b>'+currentTasks[i].date+' '+currentTasks[i].time+'</b> '+currentTasks[i].task+
                  '<img src="/image/edit.png" alt="Редактировать" class="task-edit" id="task_edit'+i+'">'+
                  '<img src="/image/del.png" alt="Удалить" class="task-delete" id="task_del'+i+'"></li>';
                  $("ul").append(add_html);
              }
            }
        }
  });
});


function windowEditTask(){

}

$('.clear-button').click(function(e){
    chrome.storage.sync.clear();
});

$("ul").on("click", ".task-delete", function(e){ 
  
  let id = Number((e.target.id).slice(8));
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

$("ul").on("click", ".task-edit", function(e){ 
  
    let id = Number((e.target.id).slice(8));
    console.log(id);
    console.log('editing!!!');
    $('#task-form-container').css("display","block");
  });

$('.button-cancel').click(function(e){
    $('#task-form-container').css("display","none");
});

$('.button-ok').click(function(e){
    $('#task-form-container').css("display","none");
});