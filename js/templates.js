define(['handlebars'], function(Handlebars) {

this["appshaper"] = this["appshaper"] || {};
this["appshaper"]["templates"] = this["appshaper"]["templates"] || {};

this["appshaper"]["templates"]["app"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "		<section id=\"todoapp\" class=\"todoapp\">\n			<header id=\"header\" class=\"header\">\n				<h1>todos</h1>\n				<input id=\"new-todo\" class=\"new-todo\" placeholder=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.header : depth0)) != null ? stack1.placeholder : stack1), depth0))
    + "\" autofocus>\n			</header>\n			<section id=\"main\" class=\"main\">\n				<input id=\"toggle-all\" class=\"toggle-all\" type=\"checkbox\">\n				<label for=\"toggle-all\">Mark all as complete</label>\n				<ul id=\"todo-list\" class=\"todo-list\"></ul>\n			</section>\n			<footer id=\"footer\" class=\"footer\"></footer>\n		</section>\n		<footer id=\"info\" class=\"info\">\n			<p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.footer : depth0)) != null ? stack1.description : stack1), depth0))
    + "</p>\n			<p>Created by <a href=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.footer : depth0)) != null ? stack1.author : stack1)) != null ? stack1.url : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.footer : depth0)) != null ? stack1.author : stack1)) != null ? stack1.name : stack1), depth0))
    + "</a></p>\n			<p>Part of <a href=\"http://todomvc.com\">TodoMVC</a></p>\n		</footer>";
},"useData":true});

this["appshaper"]["templates"]["item"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "					<li "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.completed : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n						<div class=\"view\" data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n							<input class=\"toggle\" type=\"checkbox\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.completed : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n							<label>"
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "</label>\n							<button class=\"destroy\"></button>\n						</div>\n						<input class=\"edit\" value=\""
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "\">\n					</li>\n";
},"2":function(depth0,helpers,partials,data) {
    return "class=\"completed\"";
},"4":function(depth0,helpers,partials,data) {
    return "checked";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "					<!-- These are here just to show the structure of the list items -->\n					<!-- List items should get the class `editing` when editing and `completed` when marked as completed -->\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.todos : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["appshaper"]["templates"]["stats"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "item";
},"3":function(depth0,helpers,partials,data) {
    return "items";
},"5":function(depth0,helpers,partials,data) {
    return "class=\"selected\"";
},"7":function(depth0,helpers,partials,data) {
    var helper;

  return "    <button id=\"clear-completed\" class=\"clear-completed\">Clear completed ("
    + this.escapeExpression(((helper = (helper = helpers.completed || (depth0 != null ? depth0.completed : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"completed","hash":{},"data":data}) : helper)))
    + ")</button>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing;

  return "<span id=\"todo-count\" class=\"todo-count\"><strong>"
    + this.escapeExpression(((helper = (helper = helpers.remaining || (depth0 != null ? depth0.remaining : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"remaining","hash":{},"data":data}) : helper)))
    + "</strong> "
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias1).call(depth0,(depth0 != null ? depth0.remaining : depth0),"===",1,{"name":"ifCond","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + " left</span>\n<ul class=\"filters\">\n    <li>\n        <a "
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias1).call(depth0,(depth0 != null ? depth0.page : depth0),"===","/",{"name":"ifCond","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " href=\"#/\">All</a>\n    </li>\n    <li>\n        <a "
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias1).call(depth0,(depth0 != null ? depth0.page : depth0),"===","active",{"name":"ifCond","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " href=\"#/active\">Active</a>\n    </li>\n    <li>\n        <a "
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias1).call(depth0,(depth0 != null ? depth0.page : depth0),"===","completed",{"name":"ifCond","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " href=\"#/completed\">Completed</a>\n    </li>\n</ul>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.completed : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

return this["appshaper"];

});