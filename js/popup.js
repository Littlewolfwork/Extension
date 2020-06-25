$(function(){
    var storage = chrome.storage.sync;
    storage.get("tasks",function(items){
       // console.log(items);
        if(items.tasks){
            currentTasks = items.tasks;       
            if(currentTasks.length >0){
              for(var i in currentTasks){
                  let add_html = '<li id="li_task'+i+'"><b><span class="date">'+currentTasks[i].date+
                  '</span> <span class="time">'+currentTasks[i].time+
                  '</span></b> <span class="task">'+currentTasks[i].task+'</span> '+
                  '<span class="responsible">'+currentTasks[i].responsible+'</span>'+
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
    $("ul").empty();
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
  
    let id = Number((e.target.id).slice(9));
    console.log(id);
    console.log('editing!!!');
    $("#idTask").val(id);
    $("#date").val($("#li_task"+id+" .date").text());
    $("#time").val($("#li_task"+id+" .time").text());
    $("#responsible").val($("#li_task"+id+" .responsible").text());
    $("#task").val($("#li_task"+id+" .task").text());

    $('#task-form-container').css("display","block");
  });

$('.button-cancel').click(function(e){
    $('#task-form-container').css("display","none");
});

$('.button-ok').click(function(e){
    $('#task-form-container').css("display","none");
    var storage = chrome.storage.sync;
    storage.get("tasks",function(items){

        // console.log(items);
        currentTasks = items.tasks;  
        let idTask =  $("#idTask").val();
        currentTasks[idTask].date = $("#date").val();
        currentTasks[idTask].time = $("#time").val();
        currentTasks[idTask].responsible = $("#responsible").val();
        currentTasks[idTask].task = $("#task").val();
        storage.set({
            tasks:currentTasks
        });
        
        const editLi = '<li id="li_task'+idTask+'"><b><span class="date">'+currentTasks[idTask].date+
        '</span> <span class="time">'+currentTasks[idTask].time+
        '</span></b> <span class="task">'+currentTasks[idTask].task+
        '<img src="/image/edit.png" alt="Редактировать" class="task-edit" id="task_edit'+idTask+'">'+
        '<img src="/image/del.png" alt="Удалить" class="task-delete" id="task_del'+idTask+'"></li>';

        $('#li_task'+idTask).html(editLi);
    });
        
  

});