var $newTask = $("#new-task");
var $incompletedTasks = $("#incomplete-tasks");
var $completedTasks = $("#completed-tasks");
var $addButton = $("#add-button");

//generate a new list item
var makeNewListItem = function(taskToAdd) {

  var $newListItem = $("<li></li>");
  var $newCheckbox = $("<input type='checkbox' class='checkbox'>");
  var $newLabel = $("<label></label>");
  var $newDeleteButton = $("<button class='delete-button'>Remove</button>");

  $newListItem.append($newCheckbox)
  .append($newLabel.html(taskToAdd))
  .append($newDeleteButton);

  return $newListItem;
}

//add new list item to To-Do list when add-button is clicked.
$addButton.on( "click", function(){
  //the value of the new task is passed as an argument in the makeNewListItem function; a new list item is returned and stored as the variable of listItemToAdd
  var listItemToAdd = makeNewListItem($newTask.val());
  //append the new list item to the "To Do" list
  $incompletedTasks.append(listItemToAdd);
  //clears the text in the "add item" input after task is added
  $newTask.val("");
})

//remove a task from the "To-Do" list when the delete button is clicked
$incompletedTasks.on( "click", ".delete-button", function(){
  $(this).parent().remove();
})

//remove a task from the "Completed" list when the delete button is clicked
$completedTasks.on( "click", ".delete-button", function(){
  $(this).parent().remove();
})


//when you click on the checkbox in the "To-Do" list...
$incompletedTasks.on( "click", "input.checkbox", function(){
 //the list item of the checkbox
 var listItem = $(this).parent();
 //appends the list item to the "Completed" list
 $completedTasks.append(listItem);
})

//when you click on the checkbox in the "Completed" list...
$completedTasks.on( "click", "input.checkbox", function(){
 //the list item of the checkbox
 var listItem = $(this).parent();
 //appends the list item to the "To-Do" list
 $incompletedTasks.append(listItem);
})
