React=require("react")

TodoInput=require("./components/TodoInput.js")
TodoList=require("./components/TodoList.js")
React.render(
  <div><TodoInput></TodoInput><TodoList></TodoList></div>,
  document.getElementById('helloworld')
);