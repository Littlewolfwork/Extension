$(function(){
    var storage = chrome.storage.sync;
    storage.get("tasks",function(items){
        console.log(items);
        if(items.tasks){
            current_tasks = items.tasks;       
            if(current_tasks.length >0){
              for(var i in current_tasks){
                  var add_html = '<li><strong>'+current_tasks[i].date+' '+current_tasks[i].time+'</strong> '+current_tasks[i].task+'</li>';
                  $("ul").append(add_html);
              }
            }
        }
  });
});

$('.clear-button').click(function(e){
    chrome.storage.sync.clear();
});
