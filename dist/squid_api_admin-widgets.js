this["squid_api"] = this["squid_api"] || {};
this["squid_api"]["template"] = this["squid_api"]["template"] || {};

Handlebars.registerPartial("squid_api_navigator-list", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li>\r\n    "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + " <a href=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "</a>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.nodes : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</li>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <ul>\r\n    "
    + ((stack1 = container.invokePartial(partials["squid_api_navigator-list"],depth0,{"name":"squid_api_navigator-list","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + " \r\n    </ul>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.nodes : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true}));

this["squid_api"]["template"]["squid_api_base_collection_management_widget"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                <button type=\"button\"  class=\"create btn btn-default\">\n                    <i class=\"fa fa-plus\"></i> New "
    + container.escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"type","hash":{},"data":data}) : helper)))
    + "\n                </button>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return " ";
},"5":function(container,depth0,helpers,partials,data) {
    return " class=\"no-values\" ";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.collection : depth0)) != null ? stack1.models : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(22, data, 0),"data":data})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.collection : depth0)) != null ? stack1.models : stack1),{"name":"each","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.visible : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                                        <tr "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " data-attr=\""
    + alias4(((helper = (helper = helpers.oid || (depth0 != null ? depth0.oid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"oid","hash":{},"data":data}) : helper)))
    + "\">\n                                                                                <td class=\"select selected\">\n                                                                                    "
    + alias4(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper)))
    + "\n                                                                                </td>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.roles : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                                                                            </tr>\n";
},"11":function(container,depth0,helpers,partials,data) {
    return " class=\"selected\" ";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.roles : depth0)) != null ? stack1.relation : stack1),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.roles : depth0)) != null ? stack1.refresh : stack1),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.roles : depth0)) != null ? stack1.edit : stack1),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.roles : depth0)) != null ? stack1["delete"] : stack1),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    return "                                                                                        <td class=\"relation collection-option\">\n                                                                                            <svg title=\"relations\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"16.5\" height=\"21\" viewBox=\"0 0 44.09 50.85\" version=\"1.1\">\n                                                                                            <defs>\n                                                                                            <clipPath id=\"clip1\">\n                                                                                              <path d=\"M 14 0 L 44.089844 0 L 44.089844 22 L 14 22 Z M 14 0 \"/>\n                                                                                            </clipPath>\n                                                                                            <clipPath id=\"clip2\">\n                                                                                              <path d=\"M 22 9 L 44.089844 9 L 44.089844 42 L 22 42 Z M 22 9 \"/>\n                                                                                            </clipPath>\n                                                                                            <clipPath id=\"clip3\">\n                                                                                              <path d=\"M 14 29 L 44.089844 29 L 44.089844 50.851562 L 14 50.851562 Z M 14 29 \"/>\n                                                                                            </clipPath>\n                                                                                            <clipPath id=\"clip4\">\n                                                                                              <path d=\"M 6 21 L 38 21 L 38 50.851562 L 6 50.851562 Z M 6 21 \"/>\n                                                                                            </clipPath>\n                                                                                            </defs>\n                                                                                            <g id=\"surface1\">\n                                                                                            <path style=\"fill:none;stroke-width:4;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(102,102,102);stroke-opacity:1;stroke-miterlimit:50;\" d=\"M 66.658125 -0.001875 C 66.658125 5.502031 62.197187 9.962969 56.693281 9.962969 C 51.189375 9.962969 46.732344 5.502031 46.732344 -0.001875 C 46.732344 -5.501875 51.189375 -9.962812 56.693281 -9.962812 C 62.197187 -9.962812 66.658125 -5.501875 66.658125 -0.001875 Z M 66.658125 -0.001875 \" transform=\"matrix(1,0,0,-1,-44.33,27.42)\"/>\n                                                                                            <path style=\"fill:none;stroke-width:4;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(102,102,102);stroke-opacity:1;stroke-miterlimit:10;\" d=\"M 56.693281 10.361406 L 56.693281 10.361406 \" transform=\"matrix(1,0,0,-1,-46.33,25.42)\"/>\n                                                                                            <g clip-path=\"url(#clip1)\" clip-rule=\"nonzero\">\n                                                                                            <path style=\"fill:none;stroke-width:4;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(102,102,102);stroke-opacity:1;stroke-miterlimit:10;\" d=\"M 81.720625 20.045 C 81.720625 22.795 79.490156 25.025469 76.73625 25.025469 C 73.98625 25.025469 71.755781 22.795 71.755781 20.045 C 71.755781 17.295 73.98625 15.064531 76.73625 15.064531 C 79.490156 15.064531 81.720625 17.295 81.720625 20.045 Z M 81.720625 20.045 \" transform=\"matrix(1,0,0,-1,-48.33,27.42)\"/>\n                                                                                            </g>\n                                                                                            <g clip-path=\"url(#clip2)\" clip-rule=\"nonzero\">\n                                                                                            <path style=\"fill:none;stroke-width:4;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(102,102,102);stroke-opacity:1;stroke-miterlimit:10;\" d=\"M 90.021406 -0.001875 C 90.021406 2.752031 87.790937 4.9825 85.040937 4.9825 C 82.290937 4.9825 80.060469 2.752031 80.060469 -0.001875 C 80.060469 -2.751875 82.290937 -4.982344 85.040937 -4.982344 C 87.790937 -4.982344 90.021406 -2.751875 90.021406 -0.001875 Z M 90.021406 -0.001875 \" transform=\"matrix(1,0,0,-1,-48.33,25.42)\"/>\n                                                                                            </g>\n                                                                                            <g clip-path=\"url(#clip3)\" clip-rule=\"nonzero\">\n                                                                                            <path style=\"fill:none;stroke-width:4;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(102,102,102);stroke-opacity:1;stroke-miterlimit:10;\" d=\"M 81.720625 -20.044844 C 81.720625 -17.294844 79.490156 -15.064375 76.73625 -15.064375 C 73.98625 -15.064375 71.755781 -17.294844 71.755781 -20.044844 C 71.755781 -22.794844 73.98625 -25.025312 76.73625 -25.025312 C 79.490156 -25.025312 81.720625 -22.794844 81.720625 -20.044844 Z M 81.720625 -20.044844 \" transform=\"matrix(1,0,0,-1,-47.33,23.42)\"/>\n                                                                                            </g>\n                                                                                            <path style=\"fill:none;stroke-width:4;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(102,102,102);stroke-opacity:1;stroke-miterlimit:10;\" d=\"M 64.021406 7.32625 L 72.931562 16.240313 \" transform=\"matrix(1,0,0,-1,-46.33,25.42)\"/>\n                                                                                            <path style=\"fill:none;stroke-width:4;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(102,102,102);stroke-opacity:1;stroke-miterlimit:10;\" d=\"M 67.056562 -0.001875 L 79.662031 -0.001875 \" transform=\"matrix(1,0,0,-1,-46.33,25.42)\"/>\n                                                                                            <g clip-path=\"url(#clip4)\" clip-rule=\"nonzero\">\n                                                                                            <path style=\"fill:none;stroke-width:4;stroke-linecap:butt;stroke-linejoin:miter;stroke:rgb(102,102,102);stroke-opacity:1;stroke-miterlimit:10;\" d=\"M 64.021406 -7.326094 L 72.931562 -16.240156 \" transform=\"matrix(1,0,0,-1,-45.33,25.42)\"/>\n                                                                                            </g>\n                                                                                            </g>\n                                                                                            </svg>\n                                                                                        </td>\n";
},"16":function(container,depth0,helpers,partials,data) {
    return "                                                                                        <td class=\"refresh collection-option\"><i class=\"fa fa-refresh\" title=\"force refresh\"></i></td>\n";
},"18":function(container,depth0,helpers,partials,data) {
    return "                                                                                        <td class=\"edit collection-option\" ><i class=\"fa fa-pencil-square-o\" title=\"edit\"></i></td>\n";
},"20":function(container,depth0,helpers,partials,data) {
    return "                                        	                                            <td class=\"delete collection-option\"><i class=\"fa fa-trash-o\" title=\"delete\"></i></td>\n";
},"22":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                                <div class=\"no-data\">\n                                    No "
    + container.escapeExpression(((helper = (helper = helpers.typeLabelPlural || (depth0 != null ? depth0.typeLabelPlural : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"typeLabelPlural","hash":{},"data":data}) : helper)))
    + " available\n                                </div>\n";
},"24":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                        	<div class=\"no-data\">\n                            	<i class=\"fa fa-refresh fa-spin\"></i> "
    + container.escapeExpression(((helper = (helper = helpers.typeLabelPlural || (depth0 != null ? depth0.typeLabelPlural : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"typeLabelPlural","hash":{},"data":data}) : helper)))
    + " loading in progress...\n                            </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"modal-header\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n  <h4 class=\"modal-title\" id=\"myModalLabel\">"
    + alias4(((helper = (helper = helpers.typeLabelPlural || (depth0 != null ? depth0.typeLabelPlural : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeLabelPlural","hash":{},"data":data}) : helper)))
    + "</h4>\n</div>\n<div class=\"modal-body\">\n    <div class=\"squid-api-collection-management-widget\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.createRole : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            <div class=\"input-group search-wrapper\">\n                            <input type=\"text\" class=\"form-control search\" placeholder=\"Search for...\" value=\""
    + alias4(((helper = (helper = helpers.searchText || (depth0 != null ? depth0.searchText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"searchText","hash":{},"data":data}) : helper)))
    + "\">\n                                <span class=\"input-group-btn\">\n                                    <button class=\"btn btn-default\" type=\"button\"><i class=\"fa fa-search\"></i></button>\n                                </span>\n                        </div>\n            <div class=\"squid-api-"
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "-collection-management list\">\n                    <table style=\"width:100%\">\n                        <tbody "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.valueSelected : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.collectionLoaded : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(24, data, 0),"data":data})) != null ? stack1 : "")
    + "                        </tbody>\n                </table>\n            </div>\n    </div>\n</div>\n<div class=\"squid-api-model-management-footer\">\n  	<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n</div>\n<!--  end of modal - -->\n</div>\n";
},"useData":true});

this["squid_api"]["template"]["squid_api_base_model_management_widget"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "<div class=\"modal-header\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n  <h4 class=\"modal-title\" id=\"myModalLabel\">"
    + ((stack1 = ((helper = (helper = helpers.headerLabel || (depth0 != null ? depth0.headerLabel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"headerLabel","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h4>\n</div>\n<div class=\"modal-body squid-api-"
    + container.escapeExpression(((helper = (helper = helpers.modelDefinition || (depth0 != null ? depth0.modelDefinition : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"modelDefinition","hash":{},"data":data}) : helper)))
    + "-model-management squid-api-model-management\">\n\n</div>\n<div class=\"modal-footer\">\n  "
    + ((stack1 = ((helper = (helper = helpers.footerLabel || (depth0 != null ? depth0.footerLabel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"footerLabel","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n</div>\n<div class=\"squid-api-model-management-footer\">\n      <button type=\"button\" class=\"btn btn-default btn-cancel-form\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-primary btn-save-form\">Save</button>\n</div>\n<!--  end of modal - -->\n</div>\n";
},"useData":true});

this["squid_api"]["template"]["squid_api_bookmark_collection_management_widget"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                <button type=\"button\"  class=\"create btn btn-default\">\n                    <i class=\"fa fa-plus\"></i> New "
    + container.escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"type","hash":{},"data":data}) : helper)))
    + "\n                </button>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return " ";
},"5":function(container,depth0,helpers,partials,data) {
    return " class=\"no-values\" ";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.collection : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(18, data, 0),"data":data})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                             <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.collection : depth0),{"name":"each","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                             </div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=helpers.helperMissing, alias5="function";

  return "                                    <div class=\"panel panel-default "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.path : depth0)) != null ? stack1.type : stack1), depth0))
    + "\">\n                                        <div class=\"panel-heading\" role=\"tab\">\n                                            <h4 class=\"panel-title\">\n                                                <a role=\"button\" data-toggle=\"collapse\" href=\"#bookmark-collapse-"
    + alias2(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" aria-expanded=\"false\" aria-controls=\"collapseOne\">\n                                                    "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.path : depth0)) != null ? stack1.userFriendlyName : stack1), depth0)) != null ? stack1 : "")
    + "\n                                                </a>\n                                            </h4>\n                                        </div>\n                                        <div id=\"bookmark-collapse-"
    + alias2(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\n                                            <div class=\"panel-body\">\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.bookmarks : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                                            </div>\n                                        </div>\n                                    </div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.visible : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                                                        <li data-toggle=\"tooltip\" title=\""
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " data-attr=\""
    + alias4(((helper = (helper = helpers.oid || (depth0 != null ? depth0.oid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"oid","hash":{},"data":data}) : helper)))
    + "\">\n                                                            <span class=\"select\">\n                                                                <i class=\"fa fa-bookmark-o\"></i> "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\n                                                            </span>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.roles : depth0)) != null ? stack1["delete"] : stack1),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.roles : depth0)) != null ? stack1.edit : stack1),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                                                        </li>\n";
},"12":function(container,depth0,helpers,partials,data) {
    return " class=\"selected\" ";
},"14":function(container,depth0,helpers,partials,data) {
    return "                                                                <span class=\"delete collection-option\">\n                                                                    <i class=\"fa fa-trash-o\" title=\"delete\"></i>\n                                                                </span>\n";
},"16":function(container,depth0,helpers,partials,data) {
    return "                                                                <span class=\"edit collection-option\">\n                                                                    <i class=\"fa fa-pencil-square-o\" title=\"edit\"></i>\n                                                                </span>\n";
},"18":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                                <div class=\"no-data\">\n                                    No "
    + container.escapeExpression(((helper = (helper = helpers.typeLabelPlural || (depth0 != null ? depth0.typeLabelPlural : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"typeLabelPlural","hash":{},"data":data}) : helper)))
    + " available\n                                </div>\n";
},"20":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                        	<div class=\"no-data\">\n                            	<i class=\"fa fa-refresh fa-spin\"></i> "
    + container.escapeExpression(((helper = (helper = helpers.typeLabelPlural || (depth0 != null ? depth0.typeLabelPlural : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"typeLabelPlural","hash":{},"data":data}) : helper)))
    + " loading in progress...\n                            </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"modal-header\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n  <h4 class=\"modal-title\" id=\"myModalLabel\">"
    + alias4(((helper = (helper = helpers.typeLabelPlural || (depth0 != null ? depth0.typeLabelPlural : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeLabelPlural","hash":{},"data":data}) : helper)))
    + "</h4>\n</div>\n<div class=\"modal-body\">\n    <div class=\"squid-api-collection-management-widget\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.createRole : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            <div class=\"input-group search-wrapper\">\n                <input type=\"text\" class=\"form-control search\" placeholder=\"Search for...\" value=\""
    + alias4(((helper = (helper = helpers.searchText || (depth0 != null ? depth0.searchText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"searchText","hash":{},"data":data}) : helper)))
    + "\">\n                    <span class=\"input-group-btn\">\n                        <button class=\"btn btn-default\" type=\"button\"><i class=\"fa fa-search\"></i></button>\n                    </span>\n            </div>\n            <div class=\"squid-api-"
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "-collection-management list\">\n                    <table style=\"width:100%\">\n                        <tbody "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.valueSelected : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.collectionLoaded : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(20, data, 0),"data":data})) != null ? stack1 : "")
    + "                        </tbody>\n                </table>\n            </div>\n    </div>\n</div>\n<div class=\"squid-api-model-management-footer\">\n  	<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n</div>\n<!--  end of modal - -->\n</div>\n";
},"useData":true});

this["squid_api"]["template"]["squid_api_bookmark_config_editor"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div style=\"\n  display: block;\n  width: 100%;\n  padding: 6px 12px;\n  margin-bottom: 10px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n  -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;\n       -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n          transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n\">\n	<a id=\"view\" role=\"button\"  data-toggle=\"collapse\" aria-expanded=\"false\" href=\"#bookmark-configPanel\">View</a>\n	<br>\n	<div id=\"bookmark-configPanel\" class=\"collapse\">\n		<br>\n		<textarea rows=3 id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\"form-control\"></textarea>\n		<br>\n		<a class=\"btn btn-default\" id=\"set\" role=\"button\" >Replace with current config</a>\n	</div>\n</div>";
},"useData":true});

this["squid_api"]["template"]["squid_api_bookmark_save_widget"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " class=\"btn btn-success save\" ";
},"3":function(container,depth0,helpers,partials,data) {
    return " class=\"btn\" ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<button "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.usable : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + ">Save</button>\n";
},"useData":true});

this["squid_api"]["template"]["squid_api_button_view"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "selected";
},"3":function(container,depth0,helpers,partials,data) {
    return " disabled=\"true\" ";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    "
    + container.escapeExpression(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"label","hash":{},"data":data}) : helper)))
    + "\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <i class=\"fa fa-refresh fa-spin\"></i> "
    + container.escapeExpression(((helper = (helper = helpers.typeLabelPlural || (depth0 != null ? depth0.typeLabelPlural : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"typeLabelPlural","hash":{},"data":data}) : helper)))
    + " loading\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<button class=\"form-control squid-api-button-view "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.selectedModel : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" "
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.usable : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.collectionLoaded : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "</button>\n\n";
},"useData":true});

this["squid_api"]["template"]["squid_api_columns_management_widget"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <option "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.parentId : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return " class=\"child\" ";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.parentId : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " selected=\"selected\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return " class=\"child"
    + container.escapeExpression(((helper = (helper = helpers.depth || (depth0 != null ? depth0.depth : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"depth","hash":{},"data":data}) : helper)))
    + "\" ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"modal-header\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n  <h4 class=\"modal-title\" id=\"myModalLabel\">"
    + container.escapeExpression(((helper = (helper = helpers.typeLabelPlural || (depth0 != null ? depth0.typeLabelPlural : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"typeLabelPlural","hash":{},"data":data}) : helper)))
    + "</h4>\n</div>\n<div class=\"modal-body\">\n    <div class=\"squid-api-collection-management-widget\">\n        <div class=\"squid-api-admin-widget-columns-management\">\n            <select multiple=\"multiple\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.dynamic : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.nonDynamic : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </select>\n            <div class=\"management\">\n                <button type=\"button\" class=\"btn btn-default create\">\n                    Create\n                </button>\n                <button type=\"button\" class=\"btn btn-default edit\" disabled=\"true\">\n                    Edit\n                </button>\n                <button type=\"button\" class=\"btn btn-default delete\" disabled=\"true\">\n                    Delete\n                </button>\n                <button type=\"button\" class=\"btn btn-default close-modal\" data-dismiss=\"modal\">\n                    Close\n                </button>\n            </div>\n        </div>\n    </div>\n</div>\n<!--  end of modal - -->\n</div>\n";
},"useData":true});

this["squid_api"]["template"]["squid_api_dimension_selector_widget"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "multiple";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <option>No dimensions available</option>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <option value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.error : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\r\n            "
    + alias4(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper)))
    + "\r\n        </option>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "selected";
},"8":function(container,depth0,helpers,partials,data) {
    return " disabled ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<select class=\"sq-select form-control\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.multiple : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.empty : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.options : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select>\r\n";
},"useData":true});

this["squid_api"]["template"]["squid_api_metric_selector_widget"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "        <option disabled=\"true\">No metrics available</option>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <option value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\r\n            "
    + alias4(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper)))
    + "\r\n        </option>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "selected";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<select class=\"sq-select form-control squid-api-data-widgets-metric-selector\" multiple>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.empty : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.options : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select>\r\n";
},"useData":true});

this["squid_api"]["template"]["squid_api_modal_view"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "fade";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\n          <h4 class=\"modal-title\" id=\"myModalLabel\">"
    + container.escapeExpression(((helper = (helper = helpers.headerTitle || (depth0 != null ? depth0.headerTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"headerTitle","hash":{},"data":data}) : helper)))
    + "</h4>\n        </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"modal-footer\">\n          	<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"squid-api-modal-view squid-api-modal-view-"
    + container.escapeExpression(((helper = (helper = helpers.modalCount || (depth0 != null ? depth0.modalCount : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"modalCount","hash":{},"data":data}) : helper)))
    + " modal "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.fadeAnimation : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.header : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      <div class=\"content\">\n\n      </div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.footer : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n</div>\n";
},"useData":true});

this["squid_api"]["template"]["squid_api_navigator"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul>\r\n"
    + ((stack1 = container.invokePartial(partials["squid_api_navigator-list"],depth0,{"name":"squid_api_navigator-list","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</ul>";
},"usePartial":true,"useData":true});

this["squid_api"]["template"]["squid_api_relation_collection_management_widget"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "				<button type=\"button\"  class=\"create btn btn-default\">\n					<i class=\"fa fa-plus\"></i> New "
    + container.escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"type","hash":{},"data":data}) : helper)))
    + "\n				</button>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return " ";
},"5":function(container,depth0,helpers,partials,data) {
    return " class=\"no-values\" ";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.models : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            						<tr class=\"no-background\" data-attr="
    + alias4(((helper = (helper = helpers.oid || (depth0 != null ? depth0.oid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"oid","hash":{},"data":data}) : helper)))
    + ">\n            							<td class=\"domain\">"
    + alias4(((helper = (helper = helpers.leftName || (depth0 != null ? depth0.leftName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"leftName","hash":{},"data":data}) : helper)))
    + "</td>\n            							<td class=\"leftIcon\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.leftMany : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + "            							</td>\n            							<td class=\"rightIcon\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.rightMany : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.program(19, data, 0),"data":data})) != null ? stack1 : "")
    + "                                        <td class=\"domain\">"
    + alias4(((helper = (helper = helpers.rightName || (depth0 != null ? depth0.rightName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rightName","hash":{},"data":data}) : helper)))
    + "</td>\n            							</td>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.roles : depth0)) != null ? stack1.edit : stack1),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.roles : depth0)) != null ? stack1["delete"] : stack1),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            						</tr>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "            									<svg width=\"110\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\">\n              										<ellipse stroke=\"#666\" ry=\"0.15625\" rx=\"42.53032\" id=\"svg_8\" cy=\"10.62595\" cx=\"65.93316\" fill-opacity=\"null\" stroke-opacity=\"null\" stroke-width=\"1.5\" fill=\"none\"/>\n              										<ellipse stroke=\"#666\" transform=\"rotate(23.859294891357422 14.261151313781737,6.493025302886963) \" ry=\"0.15625\" rx=\"9.98315\" id=\"svg_10\" cy=\"6.49303\" cx=\"14.26115\" fill-opacity=\"null\" stroke-opacity=\"null\" stroke-width=\"1.5\" fill=\"none\"/>\n              										<ellipse stroke=\"#666\" transform=\"rotate(0.7375706434249878 14.573644638061372,10.555437088012791) \" ry=\"0.15625\" rx=\"9.98315\" id=\"svg_11\" cy=\"10.55544\" cx=\"14.57365\" fill-opacity=\"null\" stroke-opacity=\"null\" stroke-width=\"1.5\" fill=\"none\"/>\n              										<ellipse stroke=\"#666\" transform=\"rotate(-20.462926864624023 14.4486494064331,14.430353164672844) \" ry=\"0.15625\" rx=\"9.98315\" id=\"svg_13\" cy=\"14.43035\" cx=\"14.44865\" fill-opacity=\"null\" stroke-opacity=\"null\" stroke-width=\"1.5\" fill=\"none\"/>\n            									</svg>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.leftZeroOrOne : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(14, data, 0),"data":data})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    return "            								<svg width=\"110\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\">\n            										<ellipse fill=\"none\" stroke-width=\"1.5\" stroke-opacity=\"null\" fill-opacity=\"null\" cx=\"51.62104\" cy=\"10.37595\" id=\"svg_8\" rx=\"46.84273\" ry=\"0.15625\" stroke=\"#666\"/>\n            										<ellipse fill=\"none\" stroke-width=\"12\" stroke-opacity=\"null\" fill-opacity=\"null\" cx=\"22.24682\" cy=\"10.28729\" id=\"svg_15\" rx=\"1.71832\" ry=\"1.53145\" transform=\"rotate(-0.039470430463552475 22.246822357181806,10.287289619445572) \" stroke=\"#666\"/>\n            										<ellipse fill=\"none\" stroke-width=\"1.5\" stroke-opacity=\"null\" fill-opacity=\"null\" cx=\"60.32387\" cy=\"54.48737\" id=\"svg_16\" rx=\"29.16739\" ry=\"0.15625\" transform=\"rotate(90.55730438232422 60.323867797851555,54.48736953735351) \" stroke=\"#666\"/>\n            										<ellipse fill=\"none\" stroke-width=\"1.5\" stroke-opacity=\"null\" fill-opacity=\"null\" cx=\"10.70595\" cy=\"10.10935\" id=\"svg_17\" rx=\"6.82828\" ry=\"0.15625\" transform=\"rotate(89.25360107421875 10.705955505371094,10.109351158142088) \" stroke=\"#666\"/>\n            								</svg>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.leftOne : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"15":function(container,depth0,helpers,partials,data) {
    return "            									<svg width=\"110\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\">\n            										<ellipse stroke=\"#000\" ry=\"0.15625\" rx=\"46.84273\" id=\"svg_8\" cy=\"10.18846\" cx=\"55.99588\" fill-opacity=\"null\" stroke-opacity=\"null\" stroke-width=\"1.5\" fill=\"none\"/>\n            										<ellipse stroke=\"#000\" transform=\"rotate(90.55730438232422 60.323867797851555,54.48736953735351) \" ry=\"0.15625\" rx=\"29.16739\" id=\"svg_16\" cy=\"54.48737\" cx=\"60.32387\" fill-opacity=\"null\" stroke-opacity=\"null\" stroke-width=\"1.5\" fill=\"none\"/>\n            									</svg>\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "            							<svg width=\"110.00000000000001\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\">\n            								<ellipse fill=\"none\" stroke-width=\"1.5\" stroke-opacity=\"null\" fill-opacity=\"null\" cx=\"65.93316\" cy=\"10.62595\" id=\"svg_8\" rx=\"42.53032\" ry=\"0.15625\" stroke=\"#666\"/>\n            								<ellipse fill=\"none\" stroke-width=\"1.5\" stroke-opacity=\"null\" fill-opacity=\"null\" cx=\"98.59446\" cy=\"6.49303\" id=\"svg_10\" rx=\"9.98315\" ry=\"0.15625\" transform=\"rotate(-20.98859405517578 98.59446716308595,6.493030071258536) \" stroke=\"#666\"/>\n            								<ellipse fill=\"none\" stroke-width=\"1.5\" stroke-opacity=\"null\" fill-opacity=\"null\" cx=\"14.57365\" cy=\"10.55544\" id=\"svg_11\" rx=\"9.98315\" ry=\"0.15625\" transform=\"rotate(0.7375706434249878 14.573644638061372,10.555437088012791) \" stroke=\"#666\"/>\n            								<ellipse fill=\"none\" stroke-width=\"1.5\" stroke-opacity=\"null\" fill-opacity=\"null\" cx=\"98.28197\" cy=\"14.76368\" id=\"svg_13\" rx=\"9.98315\" ry=\"0.15625\" transform=\"rotate(19.652103424072266 98.28196716308591,14.763684272766087) \" stroke=\"#666\"/>\n            							</svg>\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.rightZeroOrOne : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.program(22, data, 0),"data":data})) != null ? stack1 : "");
},"20":function(container,depth0,helpers,partials,data) {
    return "            									<svg width=\"110\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\">\n            										<ellipse stroke=\"#666\" ry=\"0.15625\" rx=\"46.84273\" id=\"svg_8\" cy=\"10.37595\" cx=\"60.37079\" fill-opacity=\"null\" stroke-opacity=\"null\" stroke-width=\"1.5\" fill=\"none\"/>\n            										<ellipse stroke=\"#666\" transform=\"rotate(-0.039470430463552475 88.36991882324197,10.287286758425585) \" ry=\"1.53145\" rx=\"1.71832\" id=\"svg_15\" cy=\"10.28729\" cx=\"88.36992\" fill-opacity=\"null\" stroke-opacity=\"null\" stroke-width=\"12\" fill=\"none\"/>\n            										<ellipse stroke=\"#666\" transform=\"rotate(90.55730438232422 60.323867797851555,54.48736953735351) \" ry=\"0.15625\" rx=\"29.16739\" id=\"svg_16\" cy=\"54.48737\" cx=\"60.32387\" fill-opacity=\"null\" stroke-opacity=\"null\" stroke-width=\"1.5\" fill=\"none\"/>\n            										<ellipse stroke=\"#666\" transform=\"rotate(89.25360107421875 100.32839202880858,10.109345436096195) \" ry=\"0.15625\" rx=\"6.82828\" id=\"svg_17\" cy=\"10.10935\" cx=\"100.32839\" fill-opacity=\"null\" stroke-opacity=\"null\" stroke-width=\"1.5\" fill=\"none\"/>\n            									</svg>\n";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.rightOne : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"24":function(container,depth0,helpers,partials,data) {
    return "											<td class=\"edit collection-option\"><i class=\"fa fa-pencil-square-o\"  title=\"edit\"></i></td>\n";
},"26":function(container,depth0,helpers,partials,data) {
    return "                                            <td class=\"delete collection-option\"><i class=\"fa fa-trash-o\"  title=\"delete\"></i></td>\n";
},"28":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                                <div class=\"no-data\">\n                                    No "
    + container.escapeExpression(((helper = (helper = helpers.typeLabelPlural || (depth0 != null ? depth0.typeLabelPlural : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"typeLabelPlural","hash":{},"data":data}) : helper)))
    + " available\n                                </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"modal-header\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n  <h4 class=\"modal-title\" id=\"myModalLabel\">"
    + alias4(((helper = (helper = helpers.typeLabelPlural || (depth0 != null ? depth0.typeLabelPlural : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeLabelPlural","hash":{},"data":data}) : helper)))
    + "</h4>\n</div>\n<div class=\"modal-body\">\n    <div class=\"squid-api-collection-management-widget\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.createRole : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            <div class=\"squid-api-"
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "-collection-management list\">\n                    <table style=\"width:100%\">\n                        <tbody "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.valueSelected : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.models : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(28, data, 0),"data":data})) != null ? stack1 : "")
    + "                        </tbody>\n                </table>\n            </div>\n    </div>\n</div>\n<div class=\"squid-api-model-management-footer\">\n    <button type=\"button\" class=\"btn btn-default cancel\">Cancel</button>\n  	<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n</div>\n<!--  end of modal - -->\n</div>\n";
},"useData":true});

this["squid_api"]["template"]["squid_api_shortcuts_admin_widget"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"squid-api-shortcuts-widgets\">\n<form>\n<div class=\"form-group\">\n    <label for=\"shortcutId\">Id</label>\n    <p class=\"help-block\">\n    This is the shortcut identifier which will be used as a URL parameter (\"index.html?shortcut=myid\").\n    If not set it will automatically be generated.</p>\n    <input type=\"text\" class=\"form-control\" id=\"shortcutId\">\n</div>\n<div class=\"form-group\">\n    <label for=\"shortcutName\">Name</label>\n    <p class=\"help-block\">This is a descriptive name for your shortcut. (Optional)</p>\n    <input type=\"text\" class=\"form-control\" id=\"shortcutName\">\n</div>\n<a href=\"#\" class=\"btn btn-primary\" id=\"saveBtn\">Save</a>\n</form>\n</div>";
},"useData":true});

this["squid_api"]["template"]["squid_api_users_admin_widget"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "        <tr data-attr=\"add\">\n            <td><input class=\"add form-control input-sm\" placeholder=\"Login Value...\" data-attribute=\"login\"></td>\n            <td><input class=\"add form-control input-sm\" placeholder=\"Email Value...\" data-attribute=\"email\"></td>\n            <td><input class=\"add form-control input-sm\" placeholder=\"Password...\" data-attribute=\"password\" type=\"password\"></td>\n            <td class=\"user-value group-section\"><i class='field-icon fa fa-plus-square'></i><select class=\"add form-control input-sm\" data-attribute=\"groups\"></select></td>\n            <td class=\"action-section\"><span class=\"send-email-label\">Send Email: </span><input class=\"email-checkbox\" type=\"checkbox\" data-attribute=\"sendemail\"><button class=\"add btn btn-default\" data-value=\"add\">Add</button></td>\n        </tr>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class='sq-loading' style='position:absolute; width:100%; top:40%; z-index: 1;'>\n    <div class=\"spinner\">\n    <div class=\"rect5\"></div>\n    <div class=\"rect4\"></div>\n    <div class=\"rect3\"></div>\n    <div class=\"rect2\"></div>\n    <div class=\"rect1\"></div>\n    <div class=\"rect2\"></div>\n    <div class=\"rect3\"></div>\n    <div class=\"rect4\"></div>\n    <div class=\"rect5\"></div>\n    </div>\n</div>\n<div id=\"squid-api-admin-widgets-user-table\">\n<div class=\"api-feedback\"></div>\n<table class=\"sq-table\">\n    <thead>\n        <tr>\n            <th>Login</th>\n            <th>Email</th>\n            <th>Password</th>\n            <th>Groups</th>\n            <th>Action</th>\n        </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.addUser : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n</table>\n</div>";
},"useData":true});
(function (root, factory) {
    root.squid_api.view.BaseCollectionManagementWidget = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_base_collection_management_widget);

}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({
        template : template,
        collection : null,
        selectedModel : null,
        config : null,
        type : null,
        typeLabel : null,
        typeLabelPlural : null,
        configSelectedId : null,
        comparator : null,
        parentType : null,
        modelView : null,
        cancelCallback : null,
        collectionLoading : false,
        afterRender : null,
        onFormContentsChange: null,
        modelViewEl : null,

        initialize: function(options) {
            this.config = squid_api.model.config;
            this.status = squid_api.model.status;
            var me = this;

            if (options) {
                if (options.type) {
                    this.type = options.type;
                }
                if (options.comparator) {
                    this.comparator = options.comparator;
                } else {
                    // default sorting
                    this.comparator =  squid_api.utils.defaultComparator;
                }
                if (options.onFormContentsChange) {
                    this.onFormContentsChange = options.onFormContentsChange;
                }
                if (options.cancelCallback) {
                    this.cancelCallback = options.cancelCallback;
                }
                if (options.onSelect) {
                    this.onSelect = options.onSelect;
                }
                if (options.onEdit) {
                    this.onEdit = options.onEdit;
                }
                if (options.afterRender) {
                    this.afterRender = options.afterRender;
                }
                if (options.template) {
                    this.template = options.template;
                }
                if (options.modelViewEl) {
                    this.modelViewEl = options.modelViewEl;
                }
            }

            this.init(options);

            this.initModel(this.config, true, false);
            // listen for config change
            this.listenTo(this.config,"change", function () {
                var parentChanged = this.config.hasChanged(me.configParentId);
                var a =this.config.hasChanged(me.configSelectedId);
                var b = !this.config.has(me.configSelectedId) || this.config.get(me.configSelectedId);
                var c = (typeof this.selectedModel === 'undefined' || !this.selectedModel);
                var selectionChanged = a || (b && c);
                this.initModel(this.config, parentChanged || selectionChanged, selectionChanged);
            });
            // listen for status change
            this.listenTo(this.status, "change:status", this.statusUpdate);

            //this.render();
        },

        statusUpdate: function() {
            // to be overridden
        },

        /**
         * Init the Model : selectedModel, collection and listeners
         */
        initModel : function(config, loadParent, loadSelection) {
            var me = this;
            var selectedId = config.get(me.configSelectedId);

            if (me.configParentId) {
                if (loadParent) {
                    // parent has changed
                    var parentId = config.get(me.configParentId);
                    me.render();
                    if (parentId) {
                        // set the collection to listen to
                        if (me.collection) {
                            me.stopListening(me.collection);
                        }
                        me.collectionLoading = true;
                        me.loadCollection(parentId).done(function(collection) {
                            me.collection = collection;
                            me.listenTo(me.collection, "sync remove add", me.render);
                            me.collectionLoading = false;
                            if (loadSelection) {
                                // selected also changed
                                me.setSelectedModel(selectedId);
                            } else {
                            	if (me.selectedModel) {
                            		me.render();
                            	} else {
                            		me.setSelectedModel(selectedId);
                            	}
                            }
                        }).fail(function() {
                            me.collection = null;
                            me.collectionLoading = false;
                            me.setSelectedModel(null);
                        });
                    }
                } else if (loadSelection) {
                    // selection only has changed
                    me.setSelectedModel(selectedId);
                }
            } else if (loadSelection) {
                // no parent but selection has changed
                me.collectionLoading = true;
                me.render();
                // set collection
                if (me.collection) {
                    me.stopListening(me.collection);
                }
                me.loadCollection(null).done(function(collection) {
                    me.collection = collection;
                    // listen to collection fetch or removed element
                    me.listenTo(me.collection, "sync remove add", me.render);
                    me.collectionLoading = false;
                    me.setSelectedModel(selectedId);
                }).fail(function() {
                    me.collection = null;
                    me.collectionLoading = false;
                    me.render();
                });
            }
        },

        /**
         * Set the selectedModel attribute.
         * Loads the corresponding Model object and listen for its changes.
         */
        setSelectedModel : function(modelId) {
            var me = this;
            if (this.selectedModel) {
                this.stopListening(me.selectedModel);
            }
            if (me.collection && modelId) {
                me.collection.load(modelId).done(function(model) {
                    me.selectedModel = model;
                    me.render();
                    me.listenTo(me.selectedModel, "change", me.render);
                }).fail(function() {
                    console.error("setSelectedModel - model not found : "+modelId+" in collection "+me.collection);
                    me.render();
                });
            } else {
                me.selectedModel = null;
                me.render();
            }
        },

        init: function(options) {
            // may be overridden
        },

        /**
         * Load main collection
         * @return Promise
         */
        loadCollection : function() {
            console.error("loadCollection must be overridden");
        },

        alphaNameComparator : function(a,b) {
            var va;
            var vb;
            if (a.name && b.name) {
                va = a.name.toLowerCase();
                vb = b.name.toLowerCase();
            } else if (a.label && b.label) {
                va = a.label.toLowerCase();
                vb = b.label.toLowerCase();
            }
            if (va < vb) {
                return -1;
            }
            if (va > vb) {
                return 1;
            }
            return 0;
        },

        dynamicComparator : function(a,b) {
            var da = a.dynamic;
            var db = b.dynamic;
            return (da === db) ? 0 : da ? 1 : -1;
        },

        getSelectedModel : function(event) {
            var id = $(event.target).data("attr") || $(event.target).parents('tr').data("attr");
            var model = this.collection.get(id);
            return model;
        },

        eventSelect :  function(event) {
            var model = this.getSelectedModel(event);
            this.config.set(this.configSelectedId, model.get("oid"));
            if (this.onSelect) {
                this.onSelect.call();
            }
        },

        eventCreate : function() {
            var me = this;
            // create a new model
            var model = new this.collection.model();
            model.set("id", this.collection.parent.get("id"));

            this.renderModelView(new this.modelView({
                model : model,
                cancelCallback : function() {
                    me.render();
                },
                onFormContentsChange: this.onFormContentsChange,
                onSave : function(model) {
                    me.collection.add(model);
                    // call any super onSave
                    me.modelView.prototype.onSave.call(me, model);
                    me.render();
                }
            }));
        },

        eventRefresh : function(event) {
            var me = this;
            var model = this.getSelectedModel(event);
            var objectType = model.get("objectType");
            var url = squid_api.apiURL + "/projects/" + model.get("id").projectId;
            if (objectType === "Project") {
                url = url + "/refreshDatabase";
            } else if (objectType === "Domain") {
                url = url + "/domains/" + model.get("id").domainId + "/cache/refresh";
            }
            url = url + "?access_token=" + squid_api.model.login.get("accessToken");
            if (model) {
                var request = $.ajax({
                    type: "GET",
                    url: url,
                    dataType: 'json',
                    contentType: 'application/json'
                });
                request.done(function () {
                    squid_api.model.status.set("message", objectType + " successfully refreshed");
                });
                request.fail(function () {
                    squid_api.model.status.set("message", objectType + " refresh failed");
                    squid_api.model.status.set("error", "error");
                });
            }
        },

        eventEdit : function(event) {
            var me = this;
            var model = this.getSelectedModel(event);
            // listen for model changes (TODO check this code)
            if (model) {
                me.listenTo(model, "change", function() {
                    me.render();
                });
                this.renderModelView(new this.modelView({
                    model : model,
                    onFormContentsChange: this.onFormContentsChange,
                    cancelCallback : function() {
                        me.render();
                    }
                }));
            }
            if (this.onEdit) {
                this.onEdit.call(event);
            }
        },

        eventDelete : function(event) {
            var me = this;
            var model = this.getSelectedModel(event);
            if (model) {
                if (confirm("are you sure you want to delete the " + model.definition.toLowerCase() + " '" + model.get("name") + "'?")) {
                    if (true) {
                        model.destroy({
                            wait : true,
                            success:function(model) {
                                // set status
                                var name = model.get("name");
                                var reference = model.get("oid");
                                if (name) {
                                    reference = name;
                                }
                                var message = model.get("objectType") + " '" + reference + "' has been successfully deleted";
                                me.status.set({'message' : message});

                                // call once saved
                                if (me.onDelete) {
                                    me.onDelete(model);
                                }
                            },
                            error : function(collection, response) {
                                me.status.set({'error' : response});
                            }
                        });
                    }
                }
            }
        },

        eventMouseEnter : function(event) {
            // hide all (as sometimes when moving fast, some may still be visible)
            var elements = [$(event.target).parent('tr').find(".collection-option i"), $(event.target).parent('tr').find(".collection-option svg")];
            for (i=0; i<elements.length; i++) {
                elements[i].show();
            }
        },

        eventMouseLeave : function(event) {
            var elements = [$(event.target).parent('tr').parent().find(".collection-option i"), $(event.target).parent('tr').parent().find(".collection-option svg")];
            for (i=0; i<elements.length; i++) {
                elements[i].hide();
            }
        },

        events: {
            'mouseenter tr': function(event) {
                this.eventMouseEnter(event);
            },
            'mouseleave tr': function(event) {
                this.eventMouseLeave(event);
            },
            'input .search' : function(event) {
                this.eventSearch(event);
            },
            "click .create" : function(event) {
                this.eventCreate(event);
            },
            "click .edit": function(event) {
                this.eventEdit(event);
            },
            "click .refresh": function(event) {
                this.eventRefresh(event);
            },
            "click .delete": function(event) {
                this.eventDelete(event);
            },
            "click .select": function(event) {
                this.eventSelect(event);
            }
        },

        eventSearch: function(event) {
            // obtain search box text
            var text = $(event.currentTarget).val();
            // filter collection
            var filteredCollection = this.filterCollection(text);
            // update list
            var listHtml = $(this.template(filteredCollection)).find(".list").html();
            this.$el.find(".list").html(listHtml);

            if (this.afterRender) {
                this.afterRender.call(this);
            }
        },

        filterCollection: function(text) {
            if (this.jsonData.collection) {
                if (this.jsonData.collection.models) {
                    var models = this.jsonData.collection.models;
                    for (i=0; i<models.length; i++) {
                        var item = this.jsonData.collection.models[i];
                        if (item.label.toLowerCase().indexOf(text.toLowerCase()) >= 0) {
                            item.visible = true;
                        } else {
                            item.visible = false;
                        }
                        this.jsonData.collection.models[i] = item;
                    }
                }
                return this.jsonData;
            }
        },

        getCreateRole: function() {
            var role = false;
            if (this.collection) {
                if (this.collection.parent) {
                    var parentRole = this.collection.parent.get("_role");
                    // write role
                    if (parentRole === "OWNER" || parentRole === "WRITE") {
                        role = true;
                    }
                }
            }
            return role;
        },

        onDelete: function(model) {
            // to be overridden from other collection management widgets
        },

        getModelRoles: function(model) {
            var roles;
            var role = model.get("_role");
            if (!role || (role === "OWNER" || role === "WRITE")) {
                roles = {"edit" : true, "delete" : true, "refresh" : true};
            } else {
                roles = {"edit" : false, "delete" : false, "refresh" : false};
            }
            return roles;
        },

        /**
         * Method called to get displayed label for a model.
         * If null is returned, this model not be displayed.
         */
        getModelLabel: function(model) {
            var label = model.get("name");
            if (!label) {
                label = model.get("oid");
            }
            return label;
        },

        renderModelView: function(modelView) {
            if (this.modelViewEl) {
                $(this.modelViewEl).html(modelView.el);
            } else {
                this.$el.html(modelView.el);
            }

            // focus on first element
            this.$el.find('input[type=text],textarea,select').filter(":visible:first").focus();
        },

        render: function() {
            this.jsonData = {
                collectionLoaded : !this.collectionLoading,
                collection : this.collection,
                roles : null,
                createRole : null,
                typeLabel : this.typeLabel,
                typeLabelPlural : this.typeLabelPlural,
                modalHtml : true
            };
            if (this.collection) {
                var models = [];
                this.jsonData.collection = {};
                this.jsonData.createRole = this.getCreateRole();

                var selectedId = this.config.get(this.configSelectedId);

                // store model data
                for (i=0; i<this.collection.size(); i++) {
                    var item = this.collection.at(i);
                    var model = {};
                    model.label = this.getModelLabel(item);
                    if (model.label !== null) {
                        // copy model attributes
                        for (var att in item.attributes) {
                            model[att] = item.get(att);
                        }
                        model.visible = true;
                        model.dynamic = item.get("dynamic");
                        model.roles = this.getModelRoles(item);
                        model.selected = (model.oid === selectedId);
                        models.push(model);
                    }
                }

                // sort model data
                models.sort(this.comparator);

                // store model view data
                this.jsonData.collection.models = models;

                var html = this.template(this.jsonData);
                this.$el.html(html);

                this.$el.find("input.search").focus();

                if (this.afterRender) {
                    this.afterRender.call(this);
                }
            }

            return this;
        }
    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.BaseModelManagementWidget = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_base_model_management_widget);

}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({

        model : null,
        collectionPluralLabel : null,
        onFormContentsChange: null,
        afterRenderCallback: null,
        externalCollection: null,

        initialize: function(options) {
            this.status = squid_api.model.status;
            this.config = squid_api.model.config;

            if (options.model) {
                this.model = options.model;
            }
            // setup options
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = template;
            }
            if (options.cancelCallback) {
                this.cancelCallback = options.cancelCallback;
            }
            if (options.onSave) {
                this.onSave = options.onSave;
            }
            if (options.openModelCallback) {
                this.openModelCallback = options.openModelCallback;
            }
            if (options.afterRenderCallback) {
                this.afterRenderCallback = options.afterRenderCallback;
            }
            if (options.onFormContentsChange) {
                this.onFormContentsChange = options.onFormContentsChange;
            }
            if (options.externalCollection) {
                this.externalCollection = options.externalCollection;
            }
            if (options.comparator) {
                this.comparator = options.comparator;
            } else {
                // default is : sort by alpha name and dynamic last
                this.comparator =  squid_api.utils.defaultComparator;
            }
            this.render();
        },

        dataManipulation: function(data) {
            for (var x in data) {
                if (typeof(data[x]) == "object") {
                    for (var y in data[x]) {
                        if (data[x][y] !== null) {
                            if (!data[x][y] || (data[x][y].length === 0)) {
                                data[x][y] = null;
                            }
                        }
                    }
                } else if (!data[x] || (data[x].length === 0)) {
                    data[x] = null;
                }
            }
            return data;
        },

        customDataManipulation: function(data) {
            return data;
        },

        events: {
            "click .open-model": function() {
                if (this.openModelCallback) {
                    this.openModelCallback(this);
                }
            },
            "click .btn-save-form" : function() {
                var me = this;
                var error = this.formContent.validate();
                if (! error) {
                    // global data manipulation
                    var data = this.dataManipulation(this.formContent.getValue());

                    // for any custom model manipulation before save
                    data = this.customDataManipulation(data);
                    
                    var isNewModel = this.model.isNew();
                    
                    // prevent from saving children collections
                    var modelClone = this.model.clone();
                    var children = this.model.get("_children");
                    if (children) {
                        for (var i=0; i<children.length; i++) {
                            modelClone.set(children[i], []);
                        }
                    }

                    // save model
                    modelClone.save(data, {
                        wait: true,
                        success: function() {
                            // update the original model with non-children attributes
                            var excluded = children;
                            var attributes = modelClone.attributes;
                            for (var att in attributes) {
                                if (!excluded || (excluded.indexOf(att)<0)) {
                                    me.model.set(att, modelClone.get(att));
                                }
                            }
                            
                            // status update
                            if (me.cancelCallback) {
                                me.cancelCallback.call();
                            }

                            // allow an externalCollection to be updated
                            if (me.externalCollection) {
                                if (isNewModel) {
                                    me.externalCollection.collection.add(me.model);
                                    me.externalCollection.collection.trigger('add');
                                } else {
                                    me.externalCollection.collection.set(me.model,{remove: false});
                                    me.externalCollection.collection.trigger('sync');
                                }
                            }

                            // call once saved
                            if (me.onSave) {
                                me.onSave(me.model);
                            }

                            me.status.set("message", "Sucessfully saved");
                        },
                        error: function(xhr) {
                            me.status.set("error", xhr);
                        }
                    });
                }
            },
            "click .btn-cancel-form": function() {
                this.formContent.render();
                this.$el.find(".modal-body").html(this.formContent.el);
                // reset parent view if cancel button clicked
                if (this.cancelCallback) {
                    this.cancelCallback.call();
                }
            },
            "click .copy-id": function() {
                var clipboard = new Clipboard(".copy-id");
                clipboard.on('success', function(e) {
                    squid_api.model.status.set("message", e.text + " has been copied to the clipboard");
                });
            }
        },

        onSave: function(model) {
            // to be overridden from other model management widgets
        },

        formEvents: function() {
            // to be overridden from other model management widgets
        },

        setSchema: function() {
            var dfd = $.Deferred();
            // to be overridden from other model management widgets
            return dfd.resolve(this.schema);
        },

        removeView: function() {
            // Unbind view completely
            this.undelegateEvents();
            this.$el.removeData().unbind();
        },

        afterRender: function() {
            // to be overridden from other model management widgets
        },

        beforeRender: function() {
            // to be overridden from other model management widgets
        },

        render: function() {
            var me = this;
            var jsonData = {modelDefinition : "unknown"};

            // add type to view data
            if (this.model.definition) {
                jsonData.modelDefinition = this.model.definition.toLowerCase();
            }

            if (this.model.isNew()) {
                jsonData.headerLabel = "Creating a new " + this.model.definition.toLowerCase();
            } else {
                jsonData.headerLabel = "Editing " + this.model.definition.toLowerCase() + " " +this.model.get("name");
            }

            jsonData.footerLabel = "<div class='object-id'><label>Object ID</label> <br /> <input data-clipboard-text='" + this.model.get("oid") + "' class='copy-id' value='" + this.model.get("oid") + "' /></div>";

            this.setSchema().then(function(schema) {
                me.beforeRender();

                // create form
                me.formContent = new Backbone.Form({
                    schema: schema,
                    model: me.model
                }).render();

                // append save buttons
                me.$el.html(me.template(jsonData));

                // expression editor to be updated
                // me.originalFormContent = me.formContent.getValue();

                me.formContent.on("change", function() {

                    if (me.onFormContentsChange) {
                        me.onFormContentsChange.call(me);
                    }

                    // if (me.formContent.getValue() !== me.originalFormContent) {
                    //     saveBtn.fadeIn();
                    // } else {
                    //     saveBtn.fadeOut();
                    // }
                });

                // place the form into a backbone view
                me.$el.find(".modal-body").html(me.formContent.el);

                // form events
                me.formEvents();

                // after render handler
                me.afterRender();

                if (me.afterRenderCallback) {
                    me.afterRenderCallback(me);
                }

                if (me.model.isNew()) {
                    me.$el.find(".object-id").hide();
                }
            });

            return this;
        }

    });

    return View;
}));

(function (root, factory) {
	root.squid_api.view.BookmarkCollectionManagementWidget = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_bookmark_collection_management_widget);

}(this, function (Backbone, squid_api, template) {

    var View = squid_api.view.BaseCollectionManagementWidget.extend({
        template: template,
        type : "Bookmark",
        typeLabel : "Bookmark",
        typeLabelPlural : "Bookmarks",
        configSelectedId : "bookmark",
        modelView : null,
        configParentId : "project",
        headerText : null,
        filteredPaths: null,
        filteredOids: null,
        excludedPaths: null,
        excludedOids: null,
        onChangeHandler : null,
        descriptionHover : null,
        returnPaths: null,
        hierarchialList: null,
        disableRightClickOnSelect: null,

        init : function(options) {
            var me = this;
            this.modelView = squid_api.view.BookmarkModelManagementWidget;

            if (options.headerText) {
                this.headerText = options.headerText;
            }
            if (options.config) {
                this.config = options.config;
            }
            if (options.configSelectedId) {
                this.configSelectedId = options.configSelectedId;
            }
            if (options.filteredPaths) {
                this.filteredPaths = options.filteredPaths;
            }
            if (options.filteredOids) {
                this.filteredOids = options.filteredOids;
            }
            if (options.excludedPaths) {
                this.excludedPaths = options.excludedPaths;
            }
            if (options.excludedOids) {
                this.excludedOids = options.excludedOids;
            }
            if (options.onChangeHandler) {
                this.onChangeHandler = options.onChangeHandler;
            }
            if (options.returnPaths) {
                this.returnPaths = options.returnPaths;
            }
            if (options.descriptionHover) {
                this.descriptionHover = options.descriptionHover;
            }
            if (options.hierarchialList) {
                this.hierarchialList = options.hierarchialList;
            }
            if (options.disableRightClickOnSelect) {
                this.disableRightClickOnSelect = options.disableRightClickOnSelect;
            }
        },

        loadCollection : function(parentId) {
            return squid_api.getCustomer().then(function(customer) {
                return customer.get("projects").load(parentId).then(function(project) {
                    return project.get("bookmarks").load();
                });
            });
        },

        statusUpdate: function() {
            var status = this.status.get("status");
            if (status === "RUNNING") {
                this.$el.find("a").addClass("disabled");
            } else {
                this.$el.find("a").removeClass("disabled");
            }
        },

        createModel : function() {
            var model = new this.collection.model();
            // set config to current state
            var config = this.config.toJSON();
            delete config.bookmark;
            delete config.project;
            model.set("config",config);
            return model;
        },

        eventSelect : function(event) {
            if (! $(event.target).hasClass("disabled")) {
                var value = $(event.target).parents("li").attr("data-attr");
                if (! value) {
                    value = $(event.target).attr("data-attr");
                }
                //Callback to keep filters selection on Counter apps for ex
            
                if (this.onChangeHandler) {
                    if (squid_api.model.config && value != squid_api.model.config.get("bookmark")) {
                        this.onChangeHandler(value ,this.collection);
                    }
                }
                else {
                    squid_api.setBookmarkId(value);
                    if (this.onSelect) {
                        this.onSelect.call();
                    }
                }
            } else {
                event.preventDefault();
            }
        },

        filterCollection: function(text) {
            var collection = this.jsonData.collection;
            for (i=0; i<collection.length; i++) {
                var item = this.jsonData.collection[i];
                for (ix=0; ix<item.bookmarks.length; ix++) {
                    if (item.bookmarks[ix].label.toLowerCase().indexOf(text.toLowerCase()) >= 0) {
                        item.bookmarks[ix].visible = true;
                    } else {
                        item.bookmarks[ix].visible = false;
                    }
                }
                this.jsonData.collection[i] = item;
            }
            return this.jsonData;
        },

        eventSearch: function(event) {
            // obtain search box text
            var text = $(event.currentTarget).val();
            // filter collection
            var filteredCollection = this.filterCollection(text);
            // update list
            var listHtml = $(this.template(filteredCollection)).find(".list").last().html();
            this.$el.find(".list").last().html(listHtml);

            if (text.length > 0) {
                this.templateWidgets("open");
            } else {
                this.templateWidgets();
            }
            if (this.afterRender) {
                this.afterRender.call(this);
            }
        },

        eventCreate : function() {
            var me = this;
            // create a new model
            var model = new this.collection.model();
            model.set("id", this.collection.parent.get("id"));
            var config = this.config.toJSON();
            delete config.bookmark;
            delete config.project;
            model.set("config",config);

            this.renderModelView(new this.modelView({
                model : model,
                cancelCallback : function() {
                    me.render();
                },
                onSave : function(model) {
                    me.collection.add(model);
                    // call any super onSave
                    me.modelView.prototype.onSave.call(me, model);
                    me.render();
                }
            }));
        },

        events : {
            "click .select" : function(event) {
                this.eventSelect(event);
            },
            "click .create" : function(event) {
                this.eventCreate(event);
            },
            "input .search" : function(event) {
                this.eventSearch(event);
            },
            'mouseenter tr': function(event) {
                this.eventMouseEnter(event);
            },
            'mouseleave tr': function(event) {
                this.eventMouseLeave(event);
            },
            "click .edit": function(event) {
                this.eventEdit(event);
            },
            "click .branch": function(event) {
                var path = $(event.currentTarget).attr("data-value");
                this.render(path);
            },
            "click .refresh": function(event) {
                this.eventRefresh(event);
            },
            "click .delete": function(event) {
                this.eventDelete(event);
            }
        },

        getSelectedModel : function(event) {
            var id = $(event.target).parents("li").attr("data-attr");
            var model = this.collection.get(id);
            return model;
        },

        getCreateRole: function() {
            // anyone can create a bookmark
            return true;
        },

        getPathLabel : function(model) {
            var path = model.get("path");
            if (path) {
                var user = path.indexOf("/USER/");
                if (user === 0) {
                    path = path.substring(6);
                    var userId;
                    if (path.indexOf("/") > -1) {
                        userId = path.substring(0,path.indexOf("/"));
                        path = path.substring(path.indexOf("/"));
                    } else {
                        userId = path;
                        path = "";
                    }
                    if (userId === squid_api.model.login.get("oid")) {
                        // self
                        path = "/My Bookmarks"+path;
                    } else {
                        path = "/Others Bookmarks"+path;
                    }
                } else {
                    var shared = path.indexOf("/SHARED");
                    if (shared === 0) {
                        if (path.length>7) {
                            path = "/Shared Bookmarks/"+path.substring(8);
                        } else {
                            path = "/Shared Bookmarks";
                        }
                    }
                }
            }
            return path;
        },

        getModelLabel : function(model) {
            var name = model.get("name");
            var path = getPathLabel(model);
            if (path) {
                name = path +"/"+ name;
            }
            return name;
        },
        bookmarkFolderState: function(item) {
            if (item || item === 0) {
                this.$el.find("#bookmark-collapse-" + item).collapse('toggle');
            }
        },
        render: function(activePath) {
            console.log("render CollectionManagementWidget "+this.type);
            var project = this.config.get("project");
            var currentBookmark = this.config.get("bookmark");
            var selectedId = this.configSelectedId;
            if (this.config.has("bookmark") && this.configSelectedId === "bookmark") {
            	selectedId = currentBookmark;
            }
            this.jsonData = {
                collectionLoaded : !this.collectionLoading,
                collection : this.collection,
                roles : null,
                createRole : null,
                typeLabel : this.typeLabel,
                typeLabelPlural : this.typeLabelPlural,
                hierarchialList : this.hierarchialList,
                modalHtml : true,
                type : this.type
            };
            if (this.headerText) {
                this.jsonData.typeLabelPlural = this.headerText;
            }
            if (this.collection) {
                var collection = [];
                var models = [];
                var paths = [];
                this.jsonData.collection = {};
                this.jsonData.createRole = this.getCreateRole();

                
                
                // store model data
                for (i=0; i<this.collection.size(); i++) {
                    var item = this.collection.at(i);
                    var validPath = false;
                    if (this.filteredPaths === null) {
                        validPath = true;
                    } else {
                        for (j=0; j<this.filteredPaths.length; j++) {
                            if (this.filteredPaths[j] === item.get("path")) {
                                validPath = true;
                            }
                        }
                    }
                    if (this.excludedPaths !== null) {
                        for (j=0; j<this.excludedPaths.length; j++) {
                            if (this.excludedPaths[j] === item.get("path")) {
                                validPath = false;
                            }
                        }
                    }
                    var validOid = false;
                    if (this.filteredOids === null) {
                        validOid = true ;
                    } else {
                        for (j=0; j<this.filteredOids.length; j++) {
                            if (this.filteredOids[j] === item.get("oid")) {
                                 validOid = true;
                            }
                        }
                    }
                    if (this.excludedOids !== null) {
                        for (j=0; j<this.excludedOids.length; j++) {
                            if (this.excludedOids[j] === item.get("oid")) {
                                 validOid = false;
                            }
                        }
                    }
                    if (validOid && validPath) {
                        var bookmark = {
                            label : item.get("name"),
                            description : item.get("description")
                        };

                        //var existingPath = this.getModelLabel(item);
                        var path =  this.getPathLabel(item);
                        if (path) {
                            var friendlyPath = path;

                            // if multiple levels exist, remove the first folder from friendlypath
                            if (friendlyPath.split("/").length > 1) {
                                friendlyPath = friendlyPath.slice(friendlyPath.search(/.\//i) + 2);
                            }

                            // replace all '/' with '>'
                            friendlyPath = friendlyPath.replace(/\//g, ' > ');

                            // split friendlyPath to wrap styling divs
                            var obj = friendlyPath.split(" ");
                            var tmpString = "";
                            for (var str in obj) {
                                if (obj[str] == ">") {
                                    tmpString += "<span>" + obj[str] + "</span>";
                                } else {
                                    tmpString += " " + obj[str];
                                }
                            }

                            friendlyPath = tmpString;

                            // see if path already exists
                            var pathExists = false;
                            for (ix=0; ix<collection.length; ix++) {
                                if (collection[ix].path.value === path) {
                                    pathExists = true;
                                }
                            }
                            if (! pathExists) {
                                // store different paths
                                paths.push(path);
                                collection.push({
                                    "path" : {
                                        "value" : path,
                                        "userFriendlyName" : friendlyPath,
                                        "type" : path.substr(1).split(" ", 1)[0]
                                    },
                                    "bookmarks" : []
                                });
                            }

                            // update collection models
                            for (var x in collection) {
                                if (collection[x].path.value == path) {
                                    if (bookmark.label !== null) {
                                        // copy model attributes
                                        for (var att in item.attributes) {
                                            bookmark[att] = item.get(att);
                                        }
                                        bookmark.roles = this.getModelRoles(item);
                                        bookmark.selected = (bookmark.oid === selectedId);
                                        bookmark.visible = true;
                                        bookmark.userFriendlyName = friendlyPath;
                                    }
                                    // store active folder
                                    if (activePath === collection[x].path.value) {
                                        collection[x].active = true;
                                    }
                                    if (currentBookmark === bookmark.oid) {
                                        collection[x].currentBookmarkInside = true;
                                    }
                                    collection[x].bookmarks.push(bookmark);
                                }
                            }
                        }
                    }
                }

                // sort bookmarks by label
                for (ix=0; ix<collection.length; ix++) {
                    collection[ix].bookmarks = _.sortBy(collection[ix].bookmarks, 'label');
                }

                // store model view data
                collection.sort(function(a, b) {
                    if (a.path.type==("Shared")) {
                        if (b.path.type!=("Shared")) {
                            return -1;
                        }
                    }
                    if (b.path.type==("Shared")) {
                        if (a.path.type!=("Shared")) {
                            return 1;
                        }
                    }
                    var textA = a.path.value.replace(/\//g, '').replace(/ /g, '').toUpperCase();
                    var textB = b.path.value.replace(/\//g, '').replace(/ /g, '').toUpperCase();
                    return (textA > textB) ? 1 : (textA < textB) ? -1 : 0;
                });
                if (_.where(collection, {active: true}).length === 0 && collection.length > 0) {
                    collection[0].active = true;
                }
                this.jsonData.collection = collection;
                if (this.returnPaths) {
                    this.returnPaths.call(paths);
                }
            }

            // render template
            var html = this.template(this.jsonData);
            this.$el.html(html);

            this.$el.find("input.search").focus();

            this.statusUpdate();

            if (this.jsonData.collection) {
                // if no active collection, open the parent folder of currently selected bookmark
                if (! activePath) {
                    var indexToOpen = _.indexOf(_.pluck(this.jsonData.collection, 'currentBookmarkInside'), true);
                    if (indexToOpen === -1) {
                        indexToOpen = 0;
                    }
                    this.bookmarkFolderState(indexToOpen);
                }
                this.templateWidgets();
            }

            return this;
        },
        templateWidgets: function(collapseState) {
            // hoverover
            if (this.descriptionHover) {
                this.$el.find("li").tooltip({
                    placement: "top",
                    trigger: "hover"
                });
            }
            if (collapseState == "open") {
                var folders = this.$el.find(".collapse");
                for (var i=0; i<folders.length; i++) {
                    if ($(folders[i]).find("li").length > 0) {
                        $(folders[i]).collapse('toggle');
                    }
                }
            }
        }
    });

    return View;
}));

/*! Squid Core API Bookmark Controller V1.0 */
(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD.
		define(['Backbone', '_', 'squid_api'], factory);
	} else {
		factory(root.Backbone, _, root.squid_api);
	}
}(this, function (Backbone, _, squid_api) {

	// Enhance Squid API controller
	var Controller = {

			savedAnalysesConfig: new Map(),
			customAddedFacets: new Map(),
			customDeletedFacets: new Map(),

			/**
			 * Function allowing to reset the whole user navigation (for ex when changing the project)
			 */
			resetAll: function() {
				Controller.savedAnalysesConfig = new Map();
				Controller.customAddedFacets = new Map();
				Controller.customDeletedFacets = new Map();
			},

			/**
			 * @return available facets from a domain
			 */
			loadFacets: function (projectId, domainId) {
				var dfd = new $.Deferred();
				if (domainId) {
					var filters = new squid_api.model.FiltersJob();
					filters.set("id", {
						"projectId": projectId
					});
					filters.set("engineVersion", "2");
					filters.setDomainIds([domainId]);

					//JTH 2016-08-24 add dynamic flag
					filters.set("includeDynamic", false);

					console.log("compute (initFilters)");
					squid_api.controller.facetjob.compute(filters).then(function() {
						// search for time facets
						var sel = filters.get("selection");
						//JTH 2016-08-24 copy facets
						/**/
						var facets;
						if (sel && sel.facets) {
							facets=  sel.facets;
						}
						dfd.resolve(facets);
						/**/
						/* remove the new code for the moment
						var selFacets = [];
                        var facets = sel.facets;
                        for (i = 0; i < facets.length; i++) {
                            var facet = facets[i];
                            var selFacet = {
                                    "id" : facet.id,
                                    "name" : facet.name ? facet.name : facet.dimension.name,
                                    "items" : [],
                            		"dimension" : facet.dimension
                            };
                            var selectedItems = facet.selectedItems;
                            for (ix = 0; ix < selectedItems.length; ix++) {
                                selFacet.selectedItems.push({
                                        "id" : selectedItems[ix].id,
                                        "name" : selectedItems[ix].value
                                });
                            }
                            var items = facet.items;
                            for (ix = 0; ix < items.length; ix++) {
                                selFacet.items.push({
                                        "id" : items[ix].id,
                                        "name" : items[ix].value
                                });
                            }
                            selFacet.available = (facet.dimension.type === "CATEGORICAL" || facet.dimension.type === "SEGMENTS" || (facet.dimension.type === "CONTINUOUS" && facet.dimension.valueType === "DATE") || selFacet.items.length > 0);
                            if (selFacet.available) {
                            	selFacets.push(selFacet);
                            }
                        }
                        dfd.resolve(selFacets);
						 */
					});
				} else {
					dfd.resolve();
				}
				return dfd;
			},

			/**
			 * @return the facet related to segments
			 */
			getSegmentFacet: function (facets) {
				if (facets) {
					for (var i=0; i<facets.length;i++) {
						if (facets[i].id === "__segments") {
							return facets[i];
						}
					}
				}
			},

			/**
			 * Remove the current domain id to get only the relations path up to the the facet
			 */
			getRelationPath: function (id) {
				var splitted = id.split("@");
				var result = '';
				if (splitted.length > 3) {
					for (var i=2; i < splitted.length; i++) {
						result = result + splitted[i];
					}    
				}
				return result;
			},

			/**
			 * Limitation: selected items from a config don't include the facet name, this is why we use oid in case the facet comes from a sub domain
			 * @return a facet from its name or oid
			 */
			findFacetByName: function (facets, facet) {
				if (facets) {
					for (var i=0; i<facets.length;i++) {
						if (Controller.normalyzeFacetName(facets[i]) === Controller.normalyzeFacetName(facet)) {
							return facets[i];
						}
					}
				}
			},

			/**
			 * @return name from the dimension of the facet as selected items from a config don't include the facet name
			 */
			normalyzeFacetName: function (facet) {
				var facetName = facet.name;
				//Segments have to be handled at a domain level
				if (facet.id === "__segments") {
					facetName = facet.dimension.id.domainId;
					//} else if ((facet.id.split("@").length - 1) > 2){ //In case of relations, we use the relations path as name to deduplicate the same facet used through multiple paths
					//	facetName = this.getRelationPath(facet.id);
				} else if (facetName === false) {
					facetName = facet.dimension.name;
				}
				return facetName;
			},

			/**
			 * @return a custom selection of items (not defined in a reference such as a bookmark)
			 */
			getCustomSelection: function (currentItems, referenceItems, availableItems) {
				var segmentItems = [];
				if (currentItems) {
					for (var i=0; i<currentItems.length; i++) {
						var item = currentItems[i];
						var add=true;
						if (referenceItems) {
							for (var j=0; j<referenceItems.length; j++) {
								var referenceItem = referenceItems[j];
								if (item.type && referenceItem.type && item.type === referenceItem.type && item.id && referenceItem.id && item.id === referenceItem.id) {
									add=false;
								}
							}
						}
						if (add) {
							if (availableItems) {
								if (Controller.containsSelection(availableItems,item)) {
									segmentItems.push(item);
								}
							} else {
								segmentItems.push(item);
							}
						}
					}
				}
				return segmentItems;
			},

			/**
			 * @return if an item is contained in an array through ids or names
			 */
			containsSelection: function (a, obj) {
				var i = a.length;
				while (i--) {
					if (!a[i].name && !obj.name) {
						if (a[i].id === obj.id) {
							return true;
						}
					} else if (a[i].name === obj.name) {
						return true;			 
					}
				}
				return false;
			},

			/**
			 * Remove/clean from a custom selection items 
			 * Remove an facet when no more custom items are present
			 * the commented code is an attempt to strengthen with all available items from the facet if they can be sent
			 * @param customSelections: array of all custom selection facets
			 * @param facetName: the facet name to look at
			 * @param availableItems: the list of all available items from the facet
			 */
			cleanCustomSelection: function(customSelections, facetName, availableItems) {
				if (customSelections.has(facetName)) {
					/*					if (availableItems) {
					cleanedItems = Controller.cleanItems(customSelections.get(facetName), availableItems);
					if (cleanedItems && cleanedItems.length>=1) {
						customSelections.set(facetName, cleanedItems);
					} else {
						customSelections.delete(facetName);
					}
				} else {
					 */						
					customSelections.delete(facetName);
					/*					}
					 */				
				}
			},

			/**
			 * Build a clean list of custom items (not present in the list of all available items from the facet
			 * @param items: the list of items to consider
			 * @param availableItems: the list of all available items from the facet
			 */
			cleanItems: function(items, availableItems) {
				var cleanedItems = [];
				for (var i=0; i<items.length; i++) {
					if (Controller.containsSelection(availableItems, items[i]) === false) {
						cleanedItems.push(items[i]);
					}
				}
				return cleanedItems;
			},

			/**
			 * Merge several list of items into a new list, used to define the new selection from user's interaction
			 * @param savedSelection: custom items selected by the user
			 * @param forcedSelection: last selection known on the same bookmark
			 * @param facetForItems: list of facet's item (optional) for strengthening 
			 * @param bookmarkSelection: selected items defined in the bookmark
			 * @param deletedSelection: custom items recently deleted by the user
			 * @return the merged list of selected items
			 */
			mergeSelection: function (savedSelection, forcedSelection, facetForItems, bookmarkSelection, deletedSelection) {
				var segments = [];
				var toAdd = [];

				//Define starting point depending if the user has already used or not the bookmark
				if (forcedSelection && !savedSelection) {
					toAdd = segments.concat(forcedSelection.selectedItems);
				} else if (bookmarkSelection && bookmarkSelection.selectedItems){
					toAdd  = segments.concat(bookmarkSelection.selectedItems);
				}

				//remove recently deleted items if any
				for (var f=0; f<toAdd.length; f++) {
					if (!deletedSelection) {
						segments.push(toAdd[f]);					 
					} else if (Controller.containsSelection(deletedSelection, toAdd[f]) === false) {
						segments.push(toAdd[f]);			
					}
				}

				//Apply custom items if possible
				if (savedSelection) {
					for (var i=0; i<savedSelection.length; i++) {
						var segment = savedSelection[i];
						var add = true;
						/*//Remove this as we don't initalize anymore from forced selection
                        //Do we remove because it is already in the forced config?
                        if (forcedSelection) {
                            for (var j=0; j<forcedSelection.selectedItems.length; j++) {
                                if (segment.value && forcedSelection.selectedItems[j].value && segment.value === forcedSelection.selectedItems[j].value) {
                                    add=false;
                                }
                            }
                        }
						 */
						//Do we remove because it is not all segments from the domain (strengthen)
						if (add === true) {
							var addItem = false;
							if (facetForItems) {
								for (var k=0; k<facetForItems.items.length; k++) {
									if (segment.value && facetForItems.items[k].value && segment.value === facetForItems.items[k].value) {
										addItem=true;
										segment = facetForItems.items[k];
									}
								}
							} else {
								//Items not provided (because list too long), set true as default
								addItem=true;
							}
							add = addItem;
						}
						//Do we remove because it is a segment defined in the bookmark?
						if (add === true) {
							if (bookmarkSelection) {
								for (var l=0; l<bookmarkSelection.selectedItems.length; l++) {
									if (segment.value && bookmarkSelection.selectedItems[l].value && segment.value === bookmarkSelection.selectedItems[l].value) {
										add=false;
									}
								}
							}
						}
						if (add === true) {
							segments.push(segment);
						}
					}
				}
				return segments;
			},

			/**
			 * Setup the facet name in selected items from the domain facets
			 */
			addNameToSelectedFacets: function(domainFacets, selectedFacets) {
				for (var i=0; i<selectedFacets.length; i++) {
					selectedFacets[i].name = Controller.getSelectedFacetName(domainFacets, selectedFacets[i]);
				}
			},

			/**
			 * return the facet name from the domain'facet itself instead of the selection
			 */
			getSelectedFacetName: function(facets, selectedFacet) {
				for (var j=0; j<facets.length; j++) {
					if (facets[j].id === selectedFacet.id) {
						return facets[j].name;
					}
				}
			},


			/**
			 * Handle the construction of the new configuration when switching from one bookmark to another one, applying filters change operated by the user
			 * @param bookmarkId
			 * @param bookmarksCollection
			 * @returns the new configuration
			 */
			setBookmarkAction: function(bookmark, forcedConfig, attributes) {
				if (!squid_api.model.config.get("bookmark")) {
					// first time opening a bookmark
					squid_api.setBookmark(bookmark, forcedConfig, attributes);
				} else {
					var me = Controller;
					var bookmarkId = bookmark.id;
					var config = squid_api.model.config;
					var copyConfig = $.extend(false, {}, config);

					var oldFacets = Controller.loadFacets(copyConfig.get("project"), copyConfig.get("domain"));
					var newBookmark = bookmark;
					var newFacets = Controller.loadFacets(copyConfig.get("project"), newBookmark.get("config").domain);

					var cleanedItems;
					if (squid_api.model.config.get("bookmark") === bookmarkId && (
							typeof attributes === 'undefined')) {
						// force bookmark reset
						$.when(oldFacets).done(function(oldFacets)  {
							if (oldFacets) {
								for (var k=0; k<oldFacets.length; k++) {
									var availableFacet = oldFacets[k];
									var facetName = me.normalyzeFacetName(availableFacet);
									var availableItems = null;
									if (availableFacet.id === "__segments") {
										availableItems = availableFacet.items;
									}
									me.cleanCustomSelection(me.customAddedFacets, facetName, availableItems);
									me.cleanCustomSelection(me.customDeletedFacets, facetName, availableItems);
								}
							}
							squid_api.setBookmark(bookmark, forcedConfig, attributes);
						});
					} else {
						// get the previous Bookmark
						squid_api.getCustomer().then(function(customer) {
							customer.get("projects").load(copyConfig.get("project")).then(function(project) {
								project.get("bookmarks").load(copyConfig.get("bookmark")).done(function(previousBookmark) {

									//Get list of available facets for each domains
									$.when(oldFacets, newFacets).done(function(oldFacets, newFacets) {
										console.log("merge filters from bookmarks");
										var forcedConfig = function(newConfig) {
											newConfig.project = project.get("oid");
											newConfig.bookmark = bookmarkId;

											me.addNameToSelectedFacets(newFacets, newConfig.selection.facets);
											var oldSelection = copyConfig.get("selection");
											if (oldSelection && oldSelection.facets)  {
												me.addNameToSelectedFacets(oldFacets, oldSelection.facets);
											}
											var facetName;
											var facetForItems;

											if (previousBookmark && previousBookmark.id) {
												me.savedAnalysesConfig.set(copyConfig.get("bookmark"), copyConfig.attributes);
											}

											//Get the latest config used on the new bookmark used if any
											var savedNewConfig = me.savedAnalysesConfig.get(newBookmark.id);
											//In case it is the first bookmark selected
											if (!savedNewConfig || !savedNewConfig.selection) {
												savedNewConfig = newConfig;
											} else {
												//V3 compatibility: initialize dimensions, metrics & order by from last saved state for the same bookmark
												newConfig.chosenDimensions = savedNewConfig.chosenDimensions;
												newConfig.chosenMetrics = savedNewConfig.chosenMetrics;
												newConfig.orderBy = savedNewConfig.orderBy;
											}
											var forcedSelection = { "compareTo" : [], "facets" : [], "rootFacets" : []};
											if (newConfig.selection.rootFacets && newConfig.selection.rootFacets) {
												forcedSelection.rootFacets =  newConfig.selection.rootFacets;
											}
											if (oldSelection && oldSelection.facets) {
												//Save/update any facet selected
												if (oldFacets) {
													//We put back the names in the selected items from the domain's facets
													me.addNameToSelectedFacets(oldFacets, previousBookmark.get("config").selection.facets);

													for (var k=0; k<oldFacets.length; k++) {
														var availableFacet = oldFacets[k];
														var existsInNewConfig = me.containsSelection(newFacets, availableFacet);
														facetName = me.normalyzeFacetName(availableFacet);
														var selectedItems = [];
														var deletedItems = [];

														facetForItems = me.findFacetByName(oldSelection.facets, availableFacet);

														var availableItems = null;
														if (facetForItems && facetForItems.selectedItems) {
															if (facetForItems.id === "__segments" && me.getSegmentFacet(newFacets)) {
																availableItems = me.getSegmentFacet(newFacets).items;
															} 
															//else {
															selectedItems = facetForItems.selectedItems;
															//}
														} 

														var bookmarkFacet = me.findFacetByName(previousBookmark.get("config").selection.facets, availableFacet);
														var diffItems = [];
														if (bookmarkFacet) {
															diffItems = me.getCustomSelection(selectedItems, bookmarkFacet.selectedItems);   
														} else {
															diffItems = selectedItems;
														}

														if (diffItems && diffItems.length>0) {
															selectedItems=diffItems;
														}
														/* T1778 - non needed code but may be useful at some points
                                                        if (previousBookmark.get("config").domain === newConfig.domain && newConfig.period) {
                                                        	if (Object.keys(newConfig.period) && Object.keys(previousBookmark.get("config").period)) {
                                                        		if (facetForItems.id === previousBookmark.get("config").period[newConfig.domain] && 
                                                        				newConfig.period[newConfig.domain] !== previousBookmark.get("config").period[newConfig.domain]) {
                                                        			selectedItems = [];
                                                        			if (savedNewConfig.selection.facets && savedNewConfig.selection.facets.length) {
                                                        				for (var l=0; l<savedNewConfig.selection.facets.length; l++) {
                                                        					if (savedNewConfig.selection.facets[l].id === newConfig.period[newConfig.domain] && savedNewConfig.selection.facets[l].selectedItems) {
                                                        						selectedItems = savedNewConfig.selection.facets[l].selectedItems;
                                                        					}
                                                        				}
                                                        			}
                                                        		}
                                                        	}
                                                        }
														 */
														//Now we clean deleted items if segments as it is shared among bookmarks on same domain
														if (availableFacet.id === "__segments" && me.customDeletedFacets.get(facetName) && diffItems.length>0) {
															me.customDeletedFacets.set(facetName, me.cleanItems(me.customDeletedFacets.get(facetName), diffItems));
														}

														//diffItems = me.getCustomSelection(bookmarkFacet.selectedItems, selectedItems, availableItems);

														//Now we copy back remaining deleted items if segments as it is shared among bookmarks on same domain
														if (availableFacet.id === "__segments" && me.customDeletedFacets.get(facetName)) {
															diffItems = diffItems.concat(me.customDeletedFacets.get(facetName));
														}

														//No need for period as it is a single selection
														if ((availableFacet.dimension.type === "CONTINUOUS" && availableFacet.dimension.valueType === "DATE") === false) {
															if (diffItems && diffItems.length>0) {
																deletedItems=diffItems;
															}		
														}

														if (diffItems && diffItems.length>0) {
															me.customAddedFacets.set(facetName, diffItems);
														} else {
															if (me.customAddedFacets.get(facetName)) {
																deletedItems =  me.customAddedFacets.get(facetName);
															}
															me.cleanCustomSelection(me.customAddedFacets, facetName, availableItems);
														}
														if (deletedItems && deletedItems.length>0) {
															me.customDeletedFacets.set(facetName, deletedItems);
														} else if (me.customDeletedFacets.has(facetName)) {
															me.cleanCustomSelection(me.customDeletedFacets, facetName, availableItems);
														}
													}
												}

												//We add new selected facets on other dashboards
												if (newFacets) {
													for (var f=0; f<newFacets.length; f++) {
														var newFacet = newFacets[f];
														facetName = me.normalyzeFacetName(newFacet);
														var complementFacetItems = null;
														if (newFacet.dimension.type === "CONTINUOUS" && newFacet.dimension.valueType === "DATE") {
															//For dates there is only one selection item

															if (oldSelection.compareTo && oldSelection.compareTo.length === 1) {
																var bookmarkCompare = null;
																if (previousBookmark.get("config").selection) {
																	bookmarkCompare = previousBookmark.get("config").selection.compareTo;
																	if (bookmarkCompare && bookmarkCompare.length === 1 && bookmarkCompare[0].selectedItems && bookmarkCompare[0].selectedItems.length ===1 &&oldSelection.compareTo[0].selectedItems && oldSelection.compareTo[0].selectedItems.length ===1) {
																		if (newConfig.selection && bookmarkCompare[0].id === oldSelection.compareTo[0].id && bookmarkCompare[0].selectedItems[0].lowerBound === oldSelection.compareTo[0].selectedItems[0].lowerBound && bookmarkCompare[0].selectedItems[0].upperBound === oldSelection.compareTo[0].selectedItems[0].upperBound) {
																			forcedSelection.compareTo = newConfig.selection.compareTo;
																		} else {
																			bookmarkCompare = null;
																		}
																	} else if (!bookmarkCompare && oldSelection.compareTo) {
																		bookmarkCompare = null;								
																	} else {
																		bookmarkCompare = null;
																	}
																}
																if (bookmarkCompare === null) {
																	var savedNewCompare = $.extend(true, {}, newFacet);
																	savedNewCompare.selectedItems = $.extend(true, [], oldSelection.compareTo[0].selectedItems);
																	forcedSelection.compareTo.push(savedNewCompare);
																}
															} else {
																forcedSelection.compareTo = null;
																if (newConfig.selection && newConfig.selection.compareTo) {
																	forcedSelection.compareTo = newConfig.selection.compareTo;
																}
																/*We don't copy anymore the new compare
                                                                if (savedNewConfig.selection.compareTo) {
                                                                    forcedSelection.compareTo = $.extend(true, [], savedNewConfig.selection.compareTo);
                                                                }
																 */
															}
															complementFacetItems = me.customAddedFacets.get(facetName);
															if (!complementFacetItems) {
																var periodFacet = me.findFacetByName(newConfig.selection.facets, newFacet); 
																if (periodFacet) {
																	complementFacetItems = periodFacet.selectedItems;
																}// when renaming a child dimension, the dimension name in the bookmark is not updated
															}
															//T1778
															if (complementFacetItems && newConfig.period) {
																if (newFacet.id !== newConfig.period[newConfig.domain]) {
																	complementFacetItems = null;
																}
															}
														} else {
															var savedSelection = me.customAddedFacets.get(facetName);
															var deletedSelection = me.customDeletedFacets.get(facetName);
															var bookmarkSelection = me.findFacetByName(newConfig.selection.facets, newFacet); // when renaming a child dimension, the dimension name in the bookmark is not updated
															var lastSelection = me.findFacetByName(savedNewConfig.selection.facets, newFacet);
															facetForItems = null;
															if (newFacet.id === "__segments") {
																facetForItems = me.getSegmentFacet(newFacets);
															}
															complementFacetItems = me.mergeSelection(savedSelection, lastSelection, facetForItems, bookmarkSelection, deletedSelection);
														}
														if (complementFacetItems && complementFacetItems.length>0) {
															var copiedFacet = {
																	dimension: newFacet.dimension,
																	id: newFacet.id,
																	selectedItems: complementFacetItems
															};
															forcedSelection.facets.push(copiedFacet);
														}
													}
												}

												//Set then next config from selected facets
												newConfig.selection = forcedSelection;
											}

											return newConfig;
										};

										squid_api.setBookmark(bookmark, forcedConfig, null);           
									});
								});
							});
						});
					}
				}
			}
	};

	squid_api.controller.Bookmark = Controller;

	return squid_api;
}));

(function (root, factory) {
    root.squid_api.view.BookmarkModelManagementWidget = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_bookmark_config_editor);

}(this, function (Backbone, squid_api, template) {

    squid_api.model.BookmarkModel.prototype.definition = "Bookmark";
    squid_api.model.BookmarkModel.prototype.ignoredAttributes = ['accessRights'];
    squid_api.model.BookmarkModel.prototype.schema = {
        "name" : {
            "type" : "Text",
            "editorClass" : "form-control",
            "fieldClass" : "name",
            "editorAttrs" : {
                placeholder: "usage overview"
            }
        },
        "description" : {
            "type" : "TextArea",
            "editorClass" : "form-control",
            "fieldClass" : "description",
            "editorAttrs" : {
                placeholder: "overview combining unique and recurring visits in 2014"
            }
        },
        "path" : {
            "type" : "Text",
            "editorClass" : "form-control",
            "fieldClass" : "path",
            "editorAttrs" : {
                placeholder: "/reports/annual/2014"
            }
        },
        "config" : {
            "type" : "SetConfig",
            "title" : "Config",
            "fieldClass" : "config",
            "editorClass" : "form-control",
            "validators": [
                 function checkJSON(value, formValues) {
                     try {
                         if (value && (typeof value === "string")) {
                             JSON.parse(value);
                         }
                     } catch (e) {
                         return {
                             type: 'config',
                             message: 'Config must be valid JSON'
                         };
                     }
                 }
             ]
        },
        "id" : {
            "title" : "Object ID",
            "type" : "ObjectID",
            "editorClass" : "form-control",
            "fieldClass" : "object-id"
        }
    };

    // Define "setConfig" Custom Editor
    var configEditor = Backbone.Form.editors.Base.extend({

        template : template,

        initialize: function(options) {
            // Call parent constructor
            Backbone.Form.editors.Base.prototype.initialize.call(this, options);
        },

        setValue: function(value) {
            // beautify json value
            var val;
            if (value) {
                val = JSON.stringify(value, null, 4);
            }
            this.$el.find("textarea").val(val);
        },

        getValue: function() {
            // transform text value to json
            var json;
            var val = this.$el.find("textarea").val();
            if (val) {
                try {
                    json = JSON.parse(val);
                } catch (e) {
                    // parse error, ignore to let validation proceed
                    json = val;
                }
            }
            return json;
        },

        events: {
            "click #set" : "setConfig"
        },

        setConfig: function(event) {
            // prevent redirect
            event.preventDefault();
            // set config to current state
            var config = squid_api.model.config.toJSON();
            delete config.bookmark;
            delete config.project;
            this.setValue(config);
        },

        render: function() {
            var id = this.$el.attr("id");
            var name = this.$el.attr("name");
            this.$el.removeAttr("id");
            this.$el.removeAttr("name");
            this.$el.removeAttr("class");
            var data = {"id" : id, "name" : name};
            this.$el.append(this.template(data));
            this.setValue(this.value);
            return this;
        }
    });

    // Define "objectIDEditor" Custom Editor
    var objectIDEditor = Backbone.Form.editors.Text.extend({

        setValue: function(value) {
            this.value = value;
            this.$el.val(value.bookmarkId);
        },

        getValue: function() {
            var val = this.$el.val();
            return {
                projectId : this.value.projectId,
                bookmarkId : val
            };
        },

        render: function() {
            if (this.value.bookmarkId) {
                // editing not enabled
                this.$el.attr("disabled", true);
                this.$el.removeClass("form-control");
            } else {
                this.$el.removeAttr("disabled");
            }
            this.setValue(this.value);
            return this;
        }
    });

    Backbone.Form.editors.SetConfig = configEditor;
    Backbone.Form.editors.ObjectID = objectIDEditor;

    var View = squid_api.view.BaseModelManagementWidget.extend({

        customDataManipulation: function(data) {
            return data;
        },
        onSave: function(model) {
            // set bookmark as current
            this.config.set("bookmark", model.get("id").bookmarkId);
        },
    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.BookmarkSaveWidget = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_bookmark_save_widget);

}(this, function (Backbone, squid_api, template) {

    var View = squid_api.view.BookmarkCollectionManagementWidget.extend({

        init : function(options) {
            var me = this;
            if (! options.template) {
                this.template = template;
            }
            this.listenTo(this.config,"change", this.render);
        },

        events: {
            "click .save": function(event) {
                this.saveBookmark();
            }
        },

        saveBookmark: function() {
            var me = this;
            var bookmark = this.config.get("bookmark");
            var collectionFiltered = this.collection.where({oid : bookmark});
            if (collectionFiltered.length > 0) {
                var bookmarkModel = collectionFiltered[0];
                bookmarkModel.set("config", this.config.toJSON());
                bookmarkModel.save({}, {
                    success: function() {
                        me.status.set({"message" : "Bookmark successfully saved"});
                    },
                    error: function() {
                        me.status.set('message', model.responseJSON.error);
                    }
                });
            }
        },

        render: function() {
            var jsonData = {
                usable : false
            };
            if (this.collection) {
                jsonData.usable = true;
            }

            this.$el.html(this.template(jsonData));

            return this;
        }
    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.BookmarkSelectorButton = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_button_view);

}(this, function (Backbone, squid_api, template) {

    var View = squid_api.view.BookmarkCollectionManagementWidget.extend({

        displayName: false,
        displayPath: false,

        init : function(options) {
            if (options) {
                if (options.displayName) {
                    this.displayName = options.displayName;
                }
                if (options.displayPath) {
                    this.displayPath = options.displayPath;
                }
            }
            if (! options.template) {
                this.template = template;
            }
            var me = this;
            this.listenTo(this.config,"change", this.renderButtonState);
        },
        
        render: function() {
            var label = this.typeLabelPlural;
            var jsonData = {
                label : label,
                usable : false,
                collectionLoaded : !this.collectionLoading,
                collection : this.collection,
                typeLabel : this.typeLabel,
                typeLabelPlural : this.typeLabelPlural
            };
            if (this.collection) {
                jsonData.usable = true;
            }

            this.$el.html(this.template(jsonData));

            this.renderButtonState();

            return this;
        },

        renderButtonState: function() {
            /* add a class when the current config matches the selected models config */
            if (this.selectedModel) {
                var match = true;
                var selectedModelConfig = this.selectedModel.get("config");
                var currentConfig = _.omit(this.config.toJSON(), "project", "bookmark");
                // ignore the order of the two configurations
                for (var x in currentConfig) {
                    if (JSON.stringify(selectedModelConfig[x]) !== JSON.stringify(currentConfig[x])) {
                        match = false;
                    }
                }
                if (this.displayName) {
                    this.$el.find(".squid-api-button-view").text(this.selectedModel.get("name"));
                }
                if (this.displayPath) {
                    var path = this.selectedModel.get("path").split("/");
                    var display = "";
                    for (i=2; i<path.length; i++) {
                        if (path[i].length > 0) {
                            display += path[i];
                            if (i !== path.length) {
                                display += " > ";
                            }
                        }
                    }
                    display += this.selectedModel.get("name");
                    this.$el.find(".squid-api-button-view").text(display);
                    this.$el.find("button").text(display);
                }
                if (match) {
                    this.$el.find("button").addClass("match");
                } else {
                    this.$el.find("button").removeClass("match");
                }
            }
        }

    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.BookmarkWidget = factory(root.Backbone, root.squid_api);

}(this, function (Backbone, squid_api) {

    var View = Backbone.View.extend({

        initialize: function() {
            var bookmarkCollection = new squid_api.view.BookmarkCollectionManagementWidget({
                onSelect: function() {
                    bookmarkModal.close();
                }
            });

            var bookmarkModal = new squid_api.view.ModalView({
                view : bookmarkCollection
            });

            var bookmarkButton = new squid_api.view.BookmarkSelectorButton({
                el : this.$el
            });

            bookmarkButton.$el.click(function() {
                bookmarkModal.render();
            });
        }
    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.CollectionSelectorUtils = factory(root.Backbone, root.squid_api);

}(this, function (Backbone, squid_api) {

    /**
     * Utility class to provide common methods collection selectors
     */
    var Utils = {

        handleStatus: function() {
            var select = this.$el.find("select");
            var multiSelectDropdown = this.$el.find(".multiselect-container");
            if (select) {
                var isMultiple = true;
                var running = (squid_api.model.status.get("status") !== squid_api.model.status.STATUS_DONE);
                if (running) {
                    // computation is running : disable input
                    select.attr("disabled","disabled");
                    if (isMultiple) {
                        select.multiselect('disable');
                        multiSelectDropdown.append("<div class='dropdownDisabled'></div>");
                    }
                } else {
                    // computation is done : enable input
                    select.removeAttr("disabled");
                    if (isMultiple) {
                        select.multiselect('enable');
                        multiSelectDropdown.find(".dropdownDisabled").remove();
                    }
                }
            }
        },

        events: {
            "change": function() {
                var oid;
                if (this.$el.find("select").length > 0) {
                    oid = this.$el.find("select option:selected");
                } else if (this.$el.find("input").length > 0) {
                    oid = this.$el.find("input:checked");
                }

                // Remove Button Title Tag
                this.$el.find("button").removeAttr('title');

                var chosen = this.config.get(this.chosen);
                var selected = [];

                // build the selection array
                for (i = 0; i < oid.length; i++) {
                    var val = $(oid[i]).val();
                    if (val.length > 0) {
                        var selectedOid = $(oid[i]).val();
                        selected.push(selectedOid);
                    }
                }

                // check for additions
                chosenNew = _.intersection(_.union(chosen, selected), selected);

                // Update
                if (this.onChangeHandler) {
                    this.onChangeHandler.call(this, chosenNew);
                } else {
                    this.config.set(this.chosen,chosenNew);
                }
            }
        },

        showConfiguration: function() {
            var me = this;
            squid_api.getSelectedProject().done( function(project) {
                if (project.get("_role") === "WRITE" || project.get("_role") === "OWNER") {

                    // place dimension collection in modal view
                    if (! me.columnConfigurationModal) {
                        me.columnConfigurationModal = new squid_api.view.ModalView({
                            view : me.collectionManagementView
                        });
                    }

                    me.$el.find("ul").prepend("<li class='configure'> configure</option>");
                    me.$el.find("li").first().on("click", function() {
                        // trigger dimension management view
                       me.columnConfigurationModal.render();
                    });
                }
            });
        },

        sort: function(items) {
            return items.sort(function(a, b) {
                var labelA=a.label.toLowerCase(), labelB=b.label.toLowerCase();
                if (labelA < labelB) {
                    return -1;
                }
                if (labelA > labelB) {
                    return 1;
                }
                return 0; // no sorting
            });
        },

        isChosen : function(item) {
            var selected = false;
            var items = this.config.get(this.chosen);

            if (items) {
                for (var j=0; j<items.length; j++) {
                    if (item.get("oid") === items[j]) {
                        selected = true;
                    }
                }
            }
            return selected;
        },

        renderButton: function() {
            var label = this.typeLabelPlural;
            var jsonData = {
                label : label,
                usable : false,
                collectionLoaded : !this.collectionLoading,
                collection : this.collection,
                typeLabelPlural : this.typeLabelPlural
            };
            if (this.collection || this.collectionLoading) {
                jsonData.usable = true;
                if (this.selectedModel) {
                    if (this.selectedModel.get("oid")) {
                        jsonData.label = this.selectedModel.get("name");
                        jsonData.selectedModel = true;
                    }
                }

                if (this.afterRender) {
                    this.afterRender.call(this);
                }
            }

            this.$el.html(this.template(jsonData));

            return this;
        }

    };

    return Utils;
}));

(function (root, factory) {
    root.squid_api.view.ColumnCollectionManagementWidget = factory(root.Backbone, root.squid_api);

}(this, function (Backbone, squid_api) {

    var View = squid_api.view.BaseCollectionManagementWidget.extend({
        type : null,
        typeLabel : null,
        typeLabelPlural : null,
        configParentId : "domain",

        init : function(options) {
            var me = this;

            // set column type
            if (options) {
                if (options.type) {
                    this.type = options.type;
                }
            }

            this.typeLabel = this.type;
            this.typeLabelPlural = this.type + "s";

            this.modelView = squid_api.view.BaseModelManagementWidget;

            if (this.type === "Dimension") {
                this.modelView = squid_api.view.DimensionModelManagementWidget;
            }
        },

        loadCollection : function(parentId) {
            var me = this;
            return squid_api.getCustomer().then(function(customer) {
                return customer.get("projects").load(me.config.get("project")).then(function(project) {
                    return project.get("domains").load(parentId).then(function(domain) {
                        return domain.get(me.typeLabelPlural.toLowerCase()).load();
                    });
                });
            });
        },

        events: {
            'mouseenter tr': function(event) {
                this.eventMouseEnter(event);
            },
            'mouseleave tr': function(event) {
                this.eventMouseLeave(event);
            },
            "click .create" : function(event) {
                this.eventCreate(event);
            },
            'input .search' : function(event) {
                this.eventSearch(event);
            },
            "click .edit": function(event) {
                this.eventEdit(event);
            },
            "click .refresh": function(event) {
                this.eventRefresh(event);
            },
            "click .delete": function(event) {
                this.eventDelete(event);
            },
            "click .select": function(event) {
                this.eventSelect(event);
            }
        },

        getModelLabel: function(model) {
            if (model.get("dynamic")) {
                return "~ " + model.get("name");
            } else {
                return model.get("name");
            }
        },

        getModelRoles : function(model) {
            var roles = squid_api.view.BaseCollectionManagementWidget.prototype.getModelRoles.call(this, model);
            return roles;
        }

    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.ColumnsManagementWidget = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_columns_management_widget);

}(this, function (Backbone, squid_api, template) {

    var View = squid_api.view.BaseCollectionManagementWidget.extend({
        modelView : squid_api.view.ColumnsModelManagementWidget,
        configParentId : "domain",

        init : function() {
            var me = this;
            this.modelView = squid_api.view.ColumnsModelManagementWidget;
        },
        
        loadCollection : function(parentId) {
            var me = this;
            return squid_api.getCustomer().then(function(customer) {
                return customer.get("projects").load(me.config.get("project")).then(function(project) {
                    return project.get("domains").load(parentId).then(function(domain) {
                        return domain.get(me.typeLabelPlural.toLowerCase()).load();
                    });
                });
            });
        },
        
        getSelectedModel : function(event) {
            // handle both list and action buttons
            var id = $(event.target).data("value");
            if (!id) {
                id = $(event.target).parents('tr').data("attr");
            }
            var model = this.collection.get(id);
            return model;
        },

        eventSelect : function(event) {
            var me = this;
            var dynamic = [];
            var nonDynamic = [];

            // update edit element
            var name = $(event.target).find("option:selected:last").html();
            var value = $(event.target).find("option:selected:last").val();

            //update edit / delete buttons
            if (name !== undefined) {
                this.$el.find(".edit").removeAttr("disabled");
                this.$el.find(".edit").html("edit " + name);
                this.$el.find(".edit").attr("data-value", value);

                this.$el.find(".delete").removeAttr("disabled");
                this.$el.find(".delete").html("delete " + name);
                this.$el.find(".delete").attr("data-value", value);
            }

            // selected values in the second select box
            var options1 = $(this.$el.find("select")[1]).find("option");
            var options2 = $(this.$el.find("select")[0]).find("option");

            // store visually updated attributes
            for (i=0; i<options1.length; i++) {
                nonDynamic.push(options1[i]);
            }
            for (i=0; i<options2.length; i++) {
                dynamic.push(options2[i]);
            }
            // check nonDynamic Data
            var model;
            var changeCount = 0;
            for (i=0; i<nonDynamic.length; i++) {
                model = this.collection.get($(nonDynamic[i]).val());
                if (model.get("dynamic") === true) {
                    changeCount++;
                    model.set({"dynamic":false},{silent: true});
                }
            }
            // check dynamic Data
            for (i=0; i<dynamic.length; i++) {
                model = this.collection.get($(dynamic[i]).val());
                if (model.get("dynamic") === false) {
                    changeCount++;
                    model.set({"dynamic":true},{silent: true});
                }
            }
            return changeCount;
        },
        
        events: {
            "change select" : function(event) {
                this.eventSelect(event);
            },
            "click .create" : function(event) {
                this.eventCreate(event);
            },
            "click .edit": function(event) {
                this.eventEdit(event);
            },
            "click .delete": function(event) {
                this.eventDelete(event);
            }
        },

        sortData : function(data) {

            // build the parent index
            var lookup = {};
            for (var ix1=0; ix1<data.length; ix1++)  {
                lookup[data[ix1].id]=data[ix1];
            }
            // build the sort name
            for (var ix2=0; ix2<data.length; ix2++)  {
                var parentId = data[ix2].parentId;
                data[ix2].sortName = data[ix2].name;
                data[ix2].depth = 0;
                while (parentId) {
                    var parent = lookup[parentId];
                    if (parent) {
                        data[ix2].sortName = parent.name + "/" + data[ix2].sortName;
                        if (data[ix2].depth<5) data[ix2].depth++;
                        parentId = parent.parentId;
                    } else {
                        break;
                    }
                }
            }

            // alphabetical sorting
            data.sort(function(a, b){
                var nameA = a.sortName.toLowerCase();
                var nameB = b.sortName.toLowerCase();
                if (nameA < nameB)  {
                    // sort string ascending
                    return -1;
                } else if (nameA > nameB) {
                    return 1;
                } else {
                    return 0; // no sorting
                }
            });

            return data;
        },
        activatePlugin: function() {
            this.$el.find("select").bootstrapDualListbox({
                moveOnSelect: false,
                showFilterInputs: false,
                filterTextClear : " ",
                selectedListLabel: "Active",
                nonSelectedListLabel: "Inactive",
                infoText: '({0})',
                infoTextEmpty: "(0)",
                selectorMinimalHeight: 250
            });
        },
        viewData: function() {
            var viewData = {"dynamic" : [], "nonDynamic" : [], "typeLabelPlural" : this.typeLabelPlural};
            if (this.collection) {
                var models = this.collection.models;
                for (i=0; i<models.length; i++) {
                    var obj = {};
                    obj.name = models[i].get("name");
                    obj.id = models[i].get("oid");

                    if (models[i].get("parentId")) {
                        obj.parentId = models[i].get("parentId")[this.type.toLowerCase() + "Id"];
                    }

                    if (models[i].get("dynamic")) {
                        viewData.dynamic.push(obj);
                    } else {
                        viewData.nonDynamic.push(obj);
                    }
                }

                // sort data
                viewData.dynamic = this.sortData(viewData.dynamic);
                viewData.nonDynamic = this.sortData(viewData.nonDynamic);
            }
            return viewData;
        },
        render : function() {
            this.$el.html(template(this.viewData()));
            this.activatePlugin();
            return this;
        }
    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.ColumnsModelManagementWidget = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_model_management_widget);

}(this, function (Backbone, squid_api, template) {

    var View = squid_api.view.BaseModelManagementWidget.extend({

        customDataManipulation: function(data) {
            // to be overridden from other model management widgets
            if (data.expression) {
                if (data.expression.value === null) {
                    delete data.expression;
                }
            }
            return data;
        },

        onSave: function(model) {
            // to be overridden from other model management widgets
        },

        formEvents: function() {
            // parent ID population for dimensions
        }

    });

    return View;
}));

(function (root, factory) {
    factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    /*jshint multistr: true */

    squid_api.model.DomainModel.prototype.definition = "Domain";
    squid_api.model.DomainModel.prototype.ignoredAttributes = [
        'accessRights', 'dimensions', 'metrics'];
    squid_api.model.DomainModel.prototype.schema = {
        "id": {
            "title": " ",
            "type": "Object",
            "subSchema": {
                "projectId": {
                    "options": [],
                    "type": "Text",
                    "editorClass": "hidden"
                },
                "domainId": {
                    "options": [],
                    "type": "Text",
                    "editorClass": "form-control"
                }
            },
            "editorClass": "hidden",
            "fieldClass": "id"
        },
        "name": {
            "type": "Text",
            "editorClass": "form-control",
            "fieldClass": "name"
        },
        "description": {
            "type": "TextArea",
            "editorClass": "form-control",
            "fieldClass": "description"
        },
        "subject": {
            "type": "Object",
            "title": "",
            "subSchema": {
                "value": {
                    "title": "Subject Value (use Ctrl-Space to have completion)",
                    "type": "DomainExpressionEditor",
                    "editorClass": "form-control suggestion-box"
                }
            },
            "position": 1,
            "fieldClass": "subject"
        }
    };

    squid_api.model.RelationModel.prototype.definition = "Relation";
    squid_api.model.RelationModel.prototype.ignoredAttributes = ['accessRights'];
    squid_api.model.RelationModel.prototype.schema = {
        "id": {
            "title": " ",
            "type": "Object",
            "subSchema": {
                "projectId": {
                    "options": [],
                    "type": "Text",
                    "title": " ",
                    "editorClass": "hidden"
                },
                "relationId": {
                    "options": [],
                    "type": "Text",
                    "editorClass": "form-control"
                }
            },
            "editorClass": "hidden",
            "fieldClass": "id"
        },
        "rightId": {
            "title": " ",
            "type": "Object",
            "subSchema": {
                "projectId": {
                    "options": [],
                    "type": "Text",
                    "title": " ",
                    "editorClass": "hidden"
                },
                "domainId": {
                    "options": [],
                    "type": "Select",
                    "editorClass": "form-control",
                    "title": "Related With"
                }
            },
            "fieldClass": "rightId"
        },
        "leftId": {
            "title": " ",
            "type": "Object",
            "subSchema": {
                "projectId": {
                    "options": [],
                    "type": "Text",
                    "title": " ",
                    "editorClass": "hidden"
                },
                "domainId": {
                    "options": [],
                    "type": "Select",
                    "editorClass": "form-control",
                    "title": "Related With Left"
                }
            },
            "fieldClass": "leftId"
        },
        "leftName": {
            "type": "Text",
            "editorClass": "form-control",
            "fieldClass": "leftName",
            "title": " ",
            "validators": [{
                type: 'required',
                message: ' '
            }]
        },
        "cardinality": {
            "type": "Select",
            "editorClass": "form-control",
            "options": ["many to zero or one", "zero or one to many", "one to one", "one to many", "many to one", "zero or one to one", "one to zero or one"],
            "title": " ",
            "fieldClass": "cardinality"
        },
        "rightName": {
            "type": "Text",
            "editorClass": "form-control",
            "fieldClass": "rightName",
            "title": " ",
            "validators": [{
                type: 'required',
                message: ' '
            }]
        },
        "description": {
            "type": "Text",
            "editorClass": "form-control",
            "title": "Description",
            "fieldClass": "description",
        },
        "joinExpression": {
            "title": " ",
            "type": "Object",
            "subSchema": {
                "value": {
                    "title": "Join Expression",
                    "type": "RelationExpressionEditor",
                    "editorClass": "form-control suggestion-box"
                }
            },
            "fieldClass": "joinExpression"
        }
    };

    squid_api.model.DimensionModel.prototype.definition = "Dimension";
    squid_api.model.DimensionModel.prototype.ignoredAttributes = [
        'options', 'accessRights', 'dynamic', 'attributes',
        'valueType'];
    squid_api.model.DimensionModel.prototype.schema = {
        "id": {
            "title": " ",
            "type": "Object",
            "subSchema": {
                "projectId": {
                    "options": [],
                    "type": "Text",
                    "editorClass": "hidden"
                },
                "domainId": {
                    "options": [],
                    "type": "Text",
                    "editorClass": "form-control"
                },
                "dimensionId": {
                    "options": [],
                    "type": "Text",
                    "editorClass": "form-control"
                }
            },
            "editorClass": "hidden",
            "fieldClass": "id"
        },
        "name": {
            "type": "Text",
            "editorClass": "form-control",
            "fieldClass": "name"
        },
        "description": {
            "type": "TextArea",
            "editorClass": "form-control",
            "fieldClass": "description"
        },
       "type": {
            "type": "Checkboxes",
            "editorClass": " ",
            "options": [{
                "val": "CATEGORICAL",
                "label": "Use as a filter"
            }, {
                "val": "CONTINUOUS",
                "label": "Period"
            }],
            "position": 1,
            "fieldClass": "type checkbox"
        },
        "parentId": {
            "title": " ",
            "type": "Object",
            "subSchema": {
                "projectId": {
                    "options": [],
                    "type": "Text",
                    "editorClass": "hidden",
                    "fieldClass": "hidden"
                },
                "domainId": {
                    "options": [],
                    "type": "Text",
                    "editorClass": "form-control",
                    "fieldClass": "hidden"
                },
                "dimensionId": {
                    "options": [{val: null, label: " "}],
                    "type": "Select",
                    "editorClass": "form-control",
                    "title": "Parent Dimension"
                }
            },
            "position": 2,
            "fieldClass": "parentId"
        },
        "displayFormat": {
            "type": "Text",
            "editorClass": "form-control",
            "title": "Display Format",
            "fieldClass": "name"
        },
       "expression": {
            "type": "Object",
            title: "",
            "subSchema": {
                "value": {
                    "type": "DimensionExpressionEditor",
                    "editorClass": "form-control suggestion-box",
                    "title": "Expression Value (use Ctrl-Space to have completion)"
                }
            },
            "position": 3,
            "fieldClass": "expression"
        }
    };

    squid_api.model.MetricModel.prototype.definition = "Metric";
    squid_api.model.MetricModel.prototype.schema = {
        "id": {
            "title": " ",
            "type": "Object",
            "subSchema": {
                "projectId": {
                    "options": [],
                    "type": "Text",
                    "editorClass": "hidden"
                },
                "domainId": {
                    "options": [],
                    "type": "Text",
                    "editorClass": "form-control"
                },
                "metricId": {
                    "options": [],
                    "type": "Text",
                    "editorClass": "form-control"
                }
            },
            "editorClass": "hidden",
            "fieldClass": "id"
        },
        "dynamic": {
            "type": "Text",
            "editorClass": "form-control",
            "fieldClass": "dynamic hidden"
        },
        "name": {
            "type": "Text",
            "editorClass": "form-control",
            "fieldClass": "name"
        },
        "description": {
            "type": "TextArea",
            "editorClass": "form-control",
            "fieldClass": "description"
        },
        "displayFormat": {
            "type": "Text",
            "editorClass": "form-control",
            "title": "Display Format",
            "fieldClass": "name"
        },
        "expression": {
            "title": "",
            "type": "Object",
            "subSchema": {
                "value": {
                    "title": "Expression Value (use Ctrl-Space to have completion)",
                    "type": "MetricExpressionEditor",
                    "editorClass": "form-control suggestion-box"
                }
            },
            "position": 1,
            "fieldClass": "expression"
        }
    };

    // Define "dbCheckConnection" Custom Editor
    var dbCheckConnection = Backbone.Form.editors.Base.extend({

        tagName: 'button',
        defaultValue: "Check Connection",

        initialize: function (options) {
            // Call parent constructor
            Backbone.Form.editors.Base.prototype.initialize.call(this, options);

            this.status = squid_api.model.status;
            this.config = squid_api.model.config;
            this.login = squid_api.model.login;
        },
        events: {
            "click": "checkConnection"
        },

        checkConnection: function (event) {
            var me = this;

            // prevent redirect
            if (event) {
                event.preventDefault();
            }

            // add class for spinning wheel
            this.$el.addClass("in-progress");
            // collect prerequisites
            var dburl = this.form.fields.dbUrl.getValue();
            var dbPassword = this.form.fields.dbPassword.getValue();
            var dbUser = this.form.fields.dbUser.getValue();
            var id = this.form.fields.id.getValue();
            var url = squid_api.apiURL + "/connections/validate" + "?access_token=" + this.login.get("accessToken") + "&url=" + dburl + "&username=" + dbUser + "&password=" + encodeURIComponent(dbPassword);
            if (id && id.projectId) {
                url = url + "&projectId=" + id.projectId;
            }

            $.ajax({
                type: "GET",
                url: url,
                dataType: 'json',
                contentType: 'application/json',
                success: function (response) {
                    me.status.set({"error": null});
                    me.$el.removeClass("in-progress");
                    me.$el.removeClass("btn-danger");
                    me.$el.addClass("btn-success");
                    me.form.fields.dbSchemas.editor.setOptions(response.definitions);
                    me.form.fields.dbSchemas.$el.show();
                },
                error: function (xhr, textStatus, error) {
                    me.status.set({"error": xhr});
                    me.$el.removeClass("in-progress");
                    me.$el.removeClass("btn-success");
                    me.$el.addClass("btn-danger");
                    me.form.fields.dbSchemas.$el.hide();
                }

            });
        },
        render: function () {
            this.setValue(this.value);

            return this;
        },

        getValue: function () {
            return this.$el.html();
        },

        setValue: function (value) {
            this.$el.html(value);
        }
    });

    // Define "baseExpressionEditor" Custom Editor
    var baseExpressionEditor = Backbone.Form.editors.Base.extend({
        tagName: 'textarea',
        modelId: null,

        events: {
            'keyup': 'renderDialog',
            'click': 'renderDialog'
        },

        initialize: function (options) {
            // Call parent constructor
            Backbone.Form.editors.Base.prototype.initialize.call(this, options);
            if (options.schema.modelId) {
                this.modelId = options.schema.modelId;
            }
        },

        getValue: function () {
            return this.$el.val();
        },

        setValue: function (value) {
            this.$el.val(value);
        },

        render: function () {
            this.setValue(this.value);

            return this;
        },

        performRequest: function (url, data) {
            var me = this;
            var request = $.ajax({
                type: "GET",
                url: url,
                dataType: 'json',
                data: data,
                success: function (response) {
                    // remove any existing suggestions dialogs
                    me.$el.parents().find(".squid-api-pre-suggestions").dialog("destroy").remove();
                    // detemine if there is an error or not
                    if (response.validateMessage.length === 0) {
                        me.$el.removeClass("invalid-expression").addClass("valid-expression");
                    } else {
                        me.$el.removeClass("valid-expression").addClass("invalid-expression");
                    }
                    // append box if definitions exist
                    if (response.suggestions && response.suggestions.length > 0) {
                        // store offset
                        var beginRange = me.$el.prop("selectionStart");
                        var endRange = me.$el.prop("selectionEnd") - 1;
                        if (response.beginInsertPos !== undefined && response.endInsertPos !== undefined) {
                            if (response.beginInsertPos < beginRange) {
                                beginRange = response.beginInsertPos;
                            }
                            if (endRange < response.endInsertPos) {
                                endRange = response.endInsertPos;
                            }
                        }
                        // append div
                        me.$el.after("<div class='squid-api-pre-suggestions squid-api-dialog'><ul></ul></div>");
                        var suggestionList = me.$el.siblings(".squid-api-pre-suggestions").find("ul");
                        for (i = 0; i < response.suggestions.length; i++) {
                            var suggestionDisplay = response.suggestions[i].suggestion;
                            if (response.suggestions[i].display) {
                                suggestionDisplay = response.suggestions[i].display;
                            }
                            var item = $("<li class=\"" + response.suggestions[i].objectType.toString() + " " + response.suggestions[i].valueType.toLowerCase() + "\"><span class='suggestion'>" + suggestionDisplay + "</span><span class='valueType'>(" + response.suggestions[i].valueType.toLowerCase() + ")</span></li>");
                            item.data("suggestion-value", response.suggestions[i].suggestion);
                            item.appendTo(suggestionList);
                        }
                        me.$el.siblings(".squid-api-pre-suggestions").find("li").click(me, function (event) {
                            var item;
                            if ($(event.target).is("li")) {
                                item = $(event.target).data("suggestion-value");
                            } else {
                                item = $(event.target).closest("li").data("suggestion-value");
                            }
                            var value = me.$el.val();
                            var str = value.substring(0, beginRange);
                            str += item;
                            var newPos = str.length;
                            str += value.substring(endRange + 1);
                            me.setValue(str);
                            me.renderDialog();
                            me.$el[0].setSelectionRange(newPos, newPos);
                        });
                        me.$el.siblings(".squid-api-pre-suggestions").dialog({
                            dialogClass: "squid-api-suggestion-dialog squid-api-dialog",
                            width: "auto",
                            position: {my: "left top", at: "left bottom", of: me.$el},
                            open: function () {
                                $(this).width($(me.el).width());
                            },
                            clickOutside: true, // clicking outside the dialog will close it
                            clickOutsideTrigger: me.$el, // Element (id or class) that triggers the dialog opening
                        });
                    } else {
                        // set message
                        squid_api.model.status.set("message", response.validateMessage);
                    }
                    me.$el.focus();
                },
                error: function (response) {
                    if (response.responseJSON.error) {
                        squid_api.model.status.set({'message': response.responseJSON.error});
                    } else {
                        squid_api.model.status.set({'error': response});
                    }
                }
            });
        }
    });

    var AceExpressionEditor = Backbone.Form.editors.Base.extend({
        tagName: 'textarea',
        modelId: null,
        edit: null,
        type: null,
        previous_matched_word_tooltip: null,
        previous_matched_info_tooltip: null,

        events: {
            "keyup":function() {
                this.trigger('change', this);
            }
        },

        initialize: function (options) {
            // Call parent constructor
            Backbone.Form.editors.Base.prototype.initialize.call(this, options);
            if (options.schema.modelId) {
                this.modelId = options.schema.modelId;
            }
            this.template = options.template || this.constructor.template;
        },

        getValue: function () {
            return this.edit.getValue();
        },

        setValue: function (value) {
            this.edit.setValue(value);
        },

        uniq: function (a) {
            var prims = {"boolean": {}, "number": {}, "string": {}}, objs = [];

            return a.filter(function (item) {
                var type = typeof item;
                if (type in prims)
                    return prims[type].hasOwnProperty(item) ? false : (prims[type][item] = true);
                else
                    return objs.indexOf(item) >= 0 ? false : objs.push(item);
            });
        },

        latest: function (a){
            var max = 0;
            var current = [];
            a.forEach(function (item){
                if(item.origin && item.origin.length==max){
                    current.push(item);
                }else if (item.origin && item.origin.length>max){
                    max = item.origin.length;
                    current = [];
                    current.push(item);
                }else if(!item.origin){
                    current.push(item);
                }
            });
            return current;
        },

        updateTooltip: function (position, text) {
            //example with container creation via JS
            var div = document.getElementById('tooltip_0');
            if (div === null) {
                div = document.createElement('div');
                div.setAttribute('id', 'tooltip_0');
                div.setAttribute('class', 'ace_tooltip_hover'); // and make sure myclass has some styles in css
                document.body.appendChild(div);
            } else {
                document.getElementById('tooltip_0').remove();
                div = document.createElement('div');
                div.setAttribute('id', 'tooltip_0');
                div.setAttribute('class', 'ace_tooltip_hover'); // and make sure myclass has some styles in css
                document.body.appendChild(div);
            }

            div.style.left = position.pageX + 'px';
            div.style.top = position.pageY + 'px';
            if (text) {
                div.style.display = "block";
                div.innerText = text;
            } else {
                div.style.display = "none";
                div.innerText = "";
            }
            setTimeout(function () {
                var div = document.getElementById('tooltip_0');
                if (div) {
                    div.remove();
                }
            }, 2000);
        },

        removeTooltip: function () {
            var div = document.getElementById('tooltip_0');
            if (div) {
                div.remove();
            }
        },

        editor: function () {
            this.edit = ace.edit("expression-editor");
            this.edit.$blockScrolling = Infinity;
            if (this.value !== null) {
                this.edit.setValue("" + this.value);
            }else{
                this.edit.setValue("");
            }
            this.edit.getSession().type = this.type;
            this.edit.getSession().setMode("ace/mode/bouquet");

            this.edit.setOption("showPrintMargin", false);
            this.edit.setOption("maxLines", 10);
            this.edit.setOption("minLines", 5);

            var row = this.edit.session.getLength() - 1;
            var column = this.edit.session.getLine(row).length;
            this.edit.gotoLine(row + 1, column);

            var langTools = ace.require("ace/ext/language_tools");
            this.edit.setOptions({
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: false,
                enableSnippets: true
            });
            var me = this;

            var bouquetCompleter = {
                identifierRegexps: [/[ a-zA-Z_0-9\$\#\@\'\.\-\:\_\(]/],
                separatorRegexps: [/[\$\#\@\'\.\-\:\_\(\)]/],
                alphaRegexps: [/[a-zA-Z_0-9 ]/],
                getWordRange: function(editor, pos) {
                	var wordRange = editor.selection.getWordRange();
            		var start = 0;
              	  	var line = editor.session.getLine(pos.row);
            		var end = line.length;
                	if (pos.column >0) {
	               		this.alphaRegexps.forEach(function (regexp) {
	            			for (var i=pos.column-1; i>=0; i--) {
	               	    		var t = line[i];
	            				if (regexp.test(t) === false && i+1>start) {
	               	    			start = i+1;
	               	    			break;
	               	    		}
	            			}
	          	    	});
                	}
                	if (pos.column < line.length-1) {
                		this.alphaRegexps.forEach(function (regexp) {
                			for (var i=pos.column; i<line.length; i++) {
	               	    		var t = line[i];
                				if (regexp.test(t) === false && i<end) {
	               	    			end = i;
	               	    			break;
	               	    		}
                			}
              	    	});
                	}
                	var tt = line.substring(start, end);
                 	return {"start":{"row":pos.row, "column":start}, "end":{"row": pos.row, "column":end}};
                },
                getCompletions: function (editor, session, pos, prefix, callback) {
                    me.startEnclosing="";
                    me.endEnclosing="";
                    if (prefix.length === 0) {
                        //By default look for ID
                        prefix = "";
                    } else {
                     	var wordRange = this.getWordRange(editor, pos);
                    	var range = editor.selection.getRange();
                  	  	var line = editor.session.getLine(pos.row);
                        var suffix = line.substring(wordRange.start.column,wordRange.end.column );
                          
                   	  	if (suffix.length < prefix.length && pos.column === wordRange.end.column && wordRange.start.column !== range.end.column && wordRange.start.column === range.start.column && wordRange.end.column === range.end.column) {
                          prefix = prefix.substring(0,prefix.length - suffix.length);
                    	}
                  	  	var preChar =line.substring(wordRange.start.column-1,wordRange.start.column );
                  	    var postChar =line.substring(wordRange.end.column,wordRange.end.column+1 );
                  	    if (preChar === postChar) {
                   	    	this.separatorRegexps.forEach(function (regexp) {
                   	    		if (regexp.test(preChar) && regexp.test(postChar)) {
                   	    			me.startEnclosing = preChar;
                   	    			me.endEnclosing = postChar;
                   	    		}
                  	    	});
                   	    } else {
                   	   		var c1 = line[pos.column-1];
                  	    	var c2 = line[pos.column];
                   	    	this.separatorRegexps.forEach(function (regexp) {
                  	    		if (regexp.test(c1)) {
                  	    			me.startEnclosing = c1;
                  	    		}
                  	    		if (regexp.test(c2)) {
                  	    			me.endEnclosing = c2;
                  	    		}
                  	    	});
                  	    }
                    }
                    me.prefix = prefix;
                    squid_api.getSelectedProject().then(function (project) {

                        if (me.type === "relations" || me.type === "domains") {
                            me.url = squid_api.apiURL + "/projects/" + project.id + "/" + me.type + "-suggestion?access_token=" + squid_api.model.login.get("accessToken") + "&expression=" + encodeURIComponent(prefix);
                            if (me.type === "relations") {
                            	var leftId = squid_api.model.config.get("domain");
                                var rightId = document.getElementById('related-input').options[document.getElementById('related-input').selectedIndex].value;
                                me.url += "&leftDomainId=" + leftId + "&rightDomainId=" + rightId;
                            }
                            $.getJSON(
                                me.url,

                                function (suggestionList) {
                                    //{"suggestions":[{"display":"POWER(Numeric n,Numeric exponent)","description":"Function that take two arguments: a number and an exponent","caption":"POWER(Numeric n,Numeric exponent)","suggestion":"POWER(${1:n},${2:p})","objectType":"FORMULA","valueType":"NUMERIC"}],"definitions":["POWER(${1:n},${2:p})"],"validateMessage":"failed to parse expression:\n---\nPOWE\n\n---\n at token 'POWE' \n caused by Encountered \"<EOF>\" at line 1, column 4.\nWas expecting:\n    \"(\" ...\n    ","filterIndex":0,"beginInsertPos":0,"endInsertPos":2,"filter":"POW"}

                                    callback(null, me.latest(me.uniq(suggestionList.suggestions.map(function (ea) {
                                        var caption_default = ea.caption;
                                        if (!ea.caption && ea.suggestion) {
                                            caption_default = ea.suggestion;
                                        }
                                        if(!suggestionList.prefix){
                                            suggestionList.prefix = "";
                                        }
                                        /*
                                        var prefix_snippet = "";
                                        if(suggestionList.beginInsertPos){
                                            var cursor = me.edit.getSession().getSelection().getCursor();
                                            var range = me.edit.getSession().getWordRange(cursor.row, 0);
                                            range.start.row = cursor.row;
                                            range.end.row = cursor.row;
                                            //range.start.column = cursor.column - suggestionList.filterIndex;
                                            //range.end.column = cursor.column;
                                            range.start.column =  cursor.column - (suggestionList.filterIndex + suggestionList.filter.length);
                                            range.end.column = cursor.column - suggestionList.filter.length;
                                            // + (suggestionList.beginInsertPos - suggestionList.filterIndex) ;
                                            prefix_snippet  = suggestionList.prefix  + me.edit.getSession().getTextRange(range);
                                        }
                                        */
                                        var snippet = ea.suggestion;
                                        if (ea.suggestion.substring(ea.suggestion.length-1, ea.suggestion.length) === me.endEnclosing) {
                                        	snippet = snippet.substring(0, snippet.length-1);
                                        }
                                        if (ea.suggestion[0] === me.startEnclosing) {
                                        	snippet = snippet.substring(1, snippet.length);
                                        }
                                        if (ea.suggestion.substring(0, 1) === me.enclosing && me.prefix.substring(me.prefix.length-1, me.prefix.length) === me.enclosing) {
                                        	snippet = snippet.substring(1, snippet.length);
                                        }
                                        if(suggestionList.beginInsertPos){
                                        	snippet = me.prefix + snippet;
                                        }
                                        return {
                                            name: ea.display,
                                            caption: caption_default,
                                            value: ea.suggestion,
                                            snippet: snippet,
                                            description: ea.description,
                                            score: ea.ranking,
                                            meta: ea.valueType,
                                            origin: me.prefix,
                                            className: ea.objectType.toUpperCase() + " ." + ea.valueType.toLowerCase()
                                        };
                                    }))));
                                }
                            );
                        } else {
                            squid_api.getSelectedDomain().then(function (domain) {
                                me.url = squid_api.apiURL + "/projects/" + project.id + "/domains/" + domain.id + "/" + me.type + "-suggestion?access_token=" + squid_api.model.login.get("accessToken") + "&expression=" + encodeURIComponent(prefix);
                                $.getJSON(
                                    me.url,

                                    function (suggestionList) {
                                        //{"suggestions":[{"display":"POWER(Numeric n,Numeric exponent)","description":"Function that take two arguments: a number and an exponent","caption":"POWER(Numeric n,Numeric exponent)","suggestion":"POWER(${1:n},${2:p})","objectType":"FORMULA","valueType":"NUMERIC"}],"definitions":["POWER(${1:n},${2:p})"],"validateMessage":"failed to parse expression:\n---\nPOWE\n\n---\n at token 'POWE' \n caused by Encountered \"<EOF>\" at line 1, column 4.\nWas expecting:\n    \"(\" ...\n    ","filterIndex":0,"beginInsertPos":0,"endInsertPos":2,"filter":"POW"}
                                        callback(null, me.latest(me.uniq(suggestionList.suggestions.map(function (ea) {
                                            var caption_default = ea.caption;
                                            if (!ea.caption && ea.suggestion) {
                                                caption_default = ea.suggestion;
                                            }
                                            if(!suggestionList.prefix){
                                                suggestionList.prefix = "";
                                            }
                                            /*
                                            var prefix_snippet = "";
                                            if(suggestionList.beginInsertPos){
                                                var cursor = me.edit.getSession().getSelection().getCursor();
                                                var range = me.edit.getSession().getWordRange(cursor.row, 0);
                                                range.start.row = cursor.row;
                                                range.end.row = cursor.row;
                                                //range.start.column = cursor.column - suggestionList.filterIndex;
                                                //range.end.column = cursor.column;
                                                range.start.column =  cursor.column - (suggestionList.filterIndex + suggestionList.filter.length);
                                                range.end.column = cursor.column - suggestionList.filter.length;
                                                // + (suggestionList.beginInsertPos - suggestionList.filterIndex) ;
                                                prefix_snippet  = suggestionList.prefix  + me.edit.getSession().getTextRange(range);
                                            }
                                            */
                                            var snippet = ea.suggestion;
                                            if (snippet[snippet.length-1]  === me.endEnclosing) {
                                            	snippet = snippet.substring(0, snippet.length-1);
                                            }
                                            if (ea.suggestion[0] === me.startEnclosing) {
                                            	snippet = snippet.substring(1, snippet.length);
                                            }
                                            if(suggestionList.beginInsertPos){
                                            	snippet = me.prefix + snippet;
                                            }
                                            return {
                                                name: ea.display,
                                                caption: caption_default,
                                                value: ea.suggestion,
                                                snippet: snippet,
                                                description: ea.description,
                                                score: ea.ranking,
                                                meta: ea.valueType,
                                                origin: me.prefix,
                                                className: ea.objectType.toUpperCase() + " ." + ea.valueType.toLowerCase()
                                            };
                                        }))));
                                    }
                                );
                            });
                        }
                    });

                },
                getDocTooltip: function (item) {
                    if (!item.docHTML) {
                        if (typeof item.description !== "undefined" && item.description !== null && item.description.length>0 && item.name !== null)
                            item.docHTML = [
                                "<b>", /*lang.escapeHTML*/item.name, "</b>", "<hr></hr>",
                                /*lang.escapeHTML*/item.description
                            ].join("");
                    }
                }
            };
            langTools.addCompleter(bouquetCompleter);
            /* Incoherent behavior
             this.edit.on("mousedown", function (e) {
             e.editor.completer.autoInsert = false;
             e.editor.completer.showPopup(e.editor);
             });*/
            //Overriding the complters;
            me.edit.completers = [bouquetCompleter];

            this.edit.on("mousemove", function (e) {
                if (e.editor.completer && e.editor.completer.getPopup().isOpen) {
                    me.removeTooltip();
                } else {
                    var position = e.getDocumentPosition();
                    if (e.editor.session.getAnnotations()) {
                        var annotations = e.editor.session.getAnnotations();
                        if (position) {
                            if (annotations && annotations.length > 0) {
                                annotations.forEach(function (annotation) {
                                    if(annotation.type != "error" && annotation.type != "warning"){ //already present
                                        var text = annotation.text;
                                        if (text.length > 0) {
                                            var pixelPosition = me.edit.renderer.textToScreenCoordinates(position);
                                            pixelPosition.pageY += me.edit.renderer.lineHeight;
                                            me.updateTooltip(pixelPosition, text);
                                        }
                                    }
                                });
                            } else {
                                me.removeTooltip();
                                var wordRange = me.edit.getSession().getWordRange(position.row, position.column);
                                var text = me.edit.session.getTextRange(wordRange);
                                if (text.length > 0) {
                                    //Avoid uncessary call
                                    if (text.localeCompare(me.previous_matched_word_tooltip)!==0 && text.localeCompare("'")!==0 && text.length>2) {
                                        me.previous_matched_word_tooltip = text;
                                        squid_api.getSelectedProject().then(function (project) {

                                            if (me.type === "relations" || me.type === "domains") {
                                                me.url = squid_api.apiURL + "/projects/" + project.id + "/" + me.type + "-suggestion?access_token=" + squid_api.model.login.get("accessToken") + "&expression=" + encodeURIComponent(text);
                                                $.getJSON(
                                                    me.url,

                                                    function (suggestionList) {
                                                        //{"suggestions":[{"display":"POWER(Numeric n,Numeric exponent)","description":"Function that take two arguments: a number and an exponent","caption":"POWER(Numeric n,Numeric exponent)","suggestion":"POWER(${1:n},${2:p})","objectType":"FORMULA","valueType":"NUMERIC"}],"definitions":["POWER(${1:n},${2:p})"],"validateMessage":"failed to parse expression:\n---\nPOWE\n\n---\n at token 'POWE' \n caused by Encountered \"<EOF>\" at line 1, column 4.\nWas expecting:\n    \"(\" ...\n    ","filterIndex":0,"beginInsertPos":0,"endInsertPos":2,"filter":"POW"}
                                                        var best_match = me.uniq(suggestionList.suggestions).sort(function (a, b) {
                                                            return b.ranking - a.ranking;
                                                        })[0];
                                                        if (best_match) {
                                                            if (best_match.display.startsWith(text)) {
                                                                var info = best_match.objectType+":"+ best_match.valueType + "\n";
                                                                if(best_match.description){
                                                                    info += best_match.description;
                                                                }
                                                                me.previous_matched_word_tooltip = text;
                                                                me.previous_matched_info_tooltip = info;

                                                                if (info) {
                                                                    var pixelPosition = me.edit.renderer.textToScreenCoordinates(position);
                                                                    pixelPosition.pageY += me.edit.renderer.lineHeight;
                                                                    me.updateTooltip(pixelPosition, info);
                                                                }
                                                            }
                                                        }
                                                    }
                                                );
                                            } else {
                                                squid_api.getSelectedDomain().then(function (domain) {
                                                    me.url = squid_api.apiURL + "/projects/" + project.id + "/domains/" + domain.id + "/" + me.type + "-suggestion?access_token=" + squid_api.model.login.get("accessToken") + "&expression=" + encodeURIComponent(text);
                                                    $.getJSON(
                                                        me.url,

                                                        function (suggestionList) {
                                                            //{"suggestions":[{"display":"POWER(Numeric n,Numeric exponent)","description":"Function that take two arguments: a number and an exponent","caption":"POWER(Numeric n,Numeric exponent)","suggestion":"POWER(${1:n},${2:p})","objectType":"FORMULA","valueType":"NUMERIC"}],"definitions":["POWER(${1:n},${2:p})"],"validateMessage":"failed to parse expression:\n---\nPOWE\n\n---\n at token 'POWE' \n caused by Encountered \"<EOF>\" at line 1, column 4.\nWas expecting:\n    \"(\" ...\n    ","filterIndex":0,"beginInsertPos":0,"endInsertPos":2,"filter":"POW"}
                                                            var best_match = me.uniq(suggestionList.suggestions).sort(function (a, b) {
                                                                return b.ranking - a.ranking;
                                                            })[0];
                                                            if (best_match) {
                                                                if (best_match.display.startsWith(text)) {
                                                                    var info = best_match.objectType+":"+ best_match.valueType + "\n";
                                                                    if(best_match.description){
                                                                        info += best_match.description;
                                                                    }
                                                                    me.previous_matched_word_tooltip = text;
                                                                    me.previous_matched_info_tooltip = info;
                                                                    if (info) {
                                                                        var pixelPosition = me.edit.renderer.textToScreenCoordinates(position);
                                                                        pixelPosition.pageY += me.edit.renderer.lineHeight;
                                                                        me.updateTooltip(pixelPosition, info);
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    );
                                                });
                                            }
                                        });
                                    } else {
                                        if (me.previous_matched_info_tooltip) {
                                            var pixelPosition = me.edit.renderer.textToScreenCoordinates(position);
                                            pixelPosition.pageY += me.edit.renderer.lineHeight;
                                            me.updateTooltip(pixelPosition, me.previous_matched_info_tooltip);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            );
        },

        onSave: function (model) {
            console.log(this.value);
        },


        render: function () {
            var me = this;

            var $el = $(this.template());
            this.setElement($el);


            setTimeout(function () {
                me.editor();
            }, 0);

            return this;
        },

        performRequest: function (url, data) {
            console.log("perform");
        }
    }, {
        template: _.template('<div id="expression-editor" style="height: 200px;"></div>', null, this.templateSettings)
    });

    var MetricDomainExpressionEditor = AceExpressionEditor.extend({
        type: 'metrics'
    });

    var DimensionDomainExpressionEditor = AceExpressionEditor.extend({
        type: 'dimensions'
    });

    var DomainDomainExpressionEditor = AceExpressionEditor.extend({
        type: 'domains'
    });

    var RelationDomainExpressionEditor = AceExpressionEditor.extend({
        type: 'relations'
    });

    var domainExpressionEditor = DomainDomainExpressionEditor.extend({
        renderDialog: function () {
            var url = squid_api.apiURL + "/projects/" + this.$el.parents("form").find(".id input[name='projectId']").val() + "/domains-suggestion";
            var data = {
                "expression": this.$el.val(),
                "offset": this.$el.prop("selectionStart") + 1,
                "access_token": squid_api.model.login.get("accessToken")
            };
            this.performRequest(url, data);

        }
    });
    var dimensionExpressionEditor = DimensionDomainExpressionEditor.extend({
        renderDialog: function () {
            var url = squid_api.apiURL + "/projects/" + this.$el.parents("form").find(".id input[name='projectId']").val() + "/domains/" + this.$el.parents("form").find(".id input[name='domainId']").val() + "/dimensions-suggestion";
            var data = {
                "expression": this.$el.val(),
                "offset": this.$el.prop("selectionStart") + 1,
                "access_token": squid_api.model.login.get("accessToken")
            };
            data.dimensionId = this.modelId;
            this.performRequest(url, data);

        }
    });
    var metricExpressionEditor = MetricDomainExpressionEditor.extend({
        renderDialog: function () {
            var url = squid_api.apiURL + "/projects/" + this.$el.parents("form").find(".id input[name='projectId']").val() + "/domains/" + this.$el.parents("form").find(".id input[name='domainId']").val() + "/metrics-suggestion";
            var data = {
                "expression": this.$el.val(),
                "offset": this.$el.prop("selectionStart") + 1,
                "access_token": squid_api.model.login.get("accessToken")
            };
            this.performRequest(url, data);

        }
    });
    var relationExpressionEditor = RelationDomainExpressionEditor.extend({
        renderDialog: function () {
            var url = squid_api.apiURL + "/projects/" + this.$el.parents("form").find(".id input[name='projectId']").val() + "/relations-suggestion";
            var data = {
                "expression": this.$el.val(),
                "offset": this.$el.prop("selectionStart") + 1,
                "access_token": squid_api.model.login.get("accessToken")
            };
            data.leftDomainId = this.$el.parents("form").find(".leftId select[name='domainId']").val();
            data.rightDomainId = this.$el.parents("form").find(".rightId select[name='domainId']").val();
            this.performRequest(url, data);
        }
    });

    
    var multiSelect = Backbone.Form.editors.Select.extend ({

        getValue: function() {
            return this.$el.find('option:selected').map(function(i,v) {
                return this.value;
            }).get();
        },

        render: function() {
            var me = this;

            // set multiple on select
            this.$el.prop('multiple', true);
            setTimeout(function() {
                // use multiselect widget & set default schema
                me.$el.multiselect({
                    enableFiltering: true,
                    enableFullValueFiltering: true,
                    includeSelectAllOption: true,
                    maxHeight: 500
                });
                me.$el.multiselect("dataprovider", me.schema.options);
            }, 0);

            return this;
        }
    });

    // Register custom editors
    Backbone.Form.editors.DomainExpressionEditor = domainExpressionEditor;
    Backbone.Form.editors.DimensionExpressionEditor = dimensionExpressionEditor;
    Backbone.Form.editors.MetricExpressionEditor = metricExpressionEditor;
    Backbone.Form.editors.RelationExpressionEditor = relationExpressionEditor;
    Backbone.Form.editors.DbCheckConnection = dbCheckConnection;
    Backbone.Form.editors.MultiSelect = multiSelect;
}));

(function (root, factory) {
    root.squid_api.view.DimensionColumnsManagementWidget = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_columns_management_widget);

}(this, function (Backbone, squid_api, template) {

    var View = squid_api.view.ColumnsManagementWidget.extend({
        type : "Dimension",
        typeLabel : "Dimension",
        typeLabelPlural : "Dimensions",

        init : function() {
            this.modelView = squid_api.view.DimensionModelManagementWidget;
        },

        onDelete: function(model) {
            // reset filter selections
            var selection = $.extend(true, {}, this.config.get("selection"));
            if (selection) {
                var facets = selection.facets;
                var period = this.config.get("period");
                if (facets) {
                    var changed = false;
                    for (var i=0; i<facets.length; i++) {
                        var facet = facets[i];
                        // reset selected facets
                        if (model.get("oid") == facet.dimension.id.dimensionId) {
                            facets.splice(i, 1);
                        }
                    }
                    selection.facets = facets;
                    this.config.set("selection", selection);
                }
            }
        },

        events: {
            "change select" : function(event) {
                var me = this;
                var changeCount = squid_api.view.ColumnsManagementWidget.prototype.eventSelect.call(this, event);

                // update all models at the same time
                if (changeCount > 0) {
                    this.collection.saveAll(this.collection.models).then(function() {
                        // clone and fetch parent to check dynamic status
                        var parentClone = me.collection.parent.clone();
                        parentClone.fetch({
                            success: function (domain) {
                                me.collection.parent.set("dynamic", domain.get("dynamic"));

                                /* sync config selection with dimension collection */

                                var selection = me.config.get("selection");
                                if (selection) {
                                    var facets = selection.facets;
                                    if (facets) {
                                        for (i=0; i<facets.length; i++) {
                                            for (ix=0; ix<me.collection.size(); ix++) {
                                                var dimension = me.collection.at(ix);
                                                if (dimension) {
                                                    if (dimension.get("oid") == facets[i].dimension.oid) {
                                                        // update dynamic status in config selection
                                                        facets[i].dimension.dynamic = dimension.get("dynamic");
                                                    }
                                                }
                                            }

                                        }
                                        // remove selectedItems from config
                                        for (i=0; i<facets.length; i++) {
                                            if (facets[i].dimension.dynamic && ! domain.get("dynamic") && facets[i].selectedItems.length > 0) {
                                                facets[i].selectedItems = [];
                                            }
                                        }

                                        // reset config silently
                                        me.config.set({"selection" : selection}, {silent : true});
                                    }
                                }

                                // force a filters re-computation
                                me.config.trigger("change:selection");
                            }
                        });
                    });
                }
            },
            "click .create" : function(event) {
                this.eventCreate(event);
            },
            "click .edit": function(event) {
                this.eventEdit(event);
            },
            "click .delete": function(event) {
                this.eventDelete(event);
            }
        }
    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.DimensionModelManagementWidget = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_model_management_widget);

}(this, function (Backbone, squid_api, template) {

    var View = squid_api.view.BaseModelManagementWidget.extend({

        customDataManipulation: function(data) {
            if (data.type.length === 0) {
                data.type = "INDEX";
            } else {
                data.type = data.type[0];
            }
            if (data.parentId.dimensionId !== null) {
                data.parentId.projectId = data.id.projectId;
                data.parentId.domainId = data.id.domainId;
            }
            if (data.expression) {
                if (data.expression.value === null) {
                    delete data.expression;
                }
            }
            return data;
        },

        onSave: function(model) {
            this.config.trigger("change:selection");
        },

        formEvents: function() {
            // to be overridden from other model management widgets
        },
        setSchema: function() {
            var dfd = $.Deferred();
            var schema = this.model.schema;
            var me = this;
            var project = this.model.get("id").projectId;
            var domain = this.model.get("id").domainId;
            squid_api.getCustomer().then(function(customer) {
                customer.get("projects").load(project).then(function(project) {
                    project.get("domains").load(domain).then(function(domain) {
                        domain.get("dimensions").load().then(function(dimensions) {
                            me.model.schema.parentId.subSchema.dimensionId.options = [me.model.schema.parentId.subSchema.dimensionId.options[0]];
                            for (i=0; i<dimensions.size(); i++) {
                                var dimension = dimensions.at(i);
                                if (dimension.get("oid") !== me.model.get("oid")) {
                                    if (dimension.get("dynamic") === false && dimension.get("valueType") !== "OBJECT") {
                                        var obj = {
                                            "val" : dimension.get("oid"),
                                            "label" : dimension.get("name")
                                        };
                                        me.model.schema.parentId.subSchema.dimensionId.options.push(obj);
                                    }
                                }
                            }
                            dfd.resolve(schema);
                        });
                    });
                });
            });
            return dfd;
        }
    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.DimensionSelector = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_dimension_selector_widget);

}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({
        template : null,
        filters: null,
        available : null,
        chosen : "chosenDimensions",
        selected : "selectedDimensions",
        afterRender : null,
        displayAll : null,
        singleSelect : false,
        singleSelectIndex : null,
        configurationEnabled : false,
        updateMultiQuantity : null,

        initialize: function(options) {
            var me = this;

            // setup options
            if (options) {
                if (options.template) {
                    this.template = options.template;
                } else {
                    this.template = template;
                }
                if (options.filters) {
                    this.filters = options.filters;
                } else {
                    this.filters = squid_api.model.filters;
                }
                if (options.chosen) {
                    this.chosen = options.chosen;
                }
                if (options.available) {
                    this.available = options.available;
                }
                if (options.dimensionIdList) {
                    this.dimensionIdList = options.dimensionIdList;
                }
                if (options.dimensionIndex !== null) {
                    this.dimensionIndex = options.dimensionIndex;
                }
                if (options.displayAll) {
                    this.displayAll = options.displayAll;
                }
                if (options.afterRender) {
                    this.afterRender = options.afterRender;
                }
                if (options.singleSelect) {
                    this.singleSelect = options.singleSelect;
                }
                if (options.singleSelectIndex || options.singleSelectIndex === 0) {
                    this.singleSelectIndex = options.singleSelectIndex;
                }
                if (options.updateMultiQuantity) {
                    this.updateMultiQuantity = options.updateMultiQuantity;
                }
                if (options.configurationEnabled) {
                    this.configurationEnabled = options.configurationEnabled;
                }
            }

            // setup the models
            if (this.model) {
                this.config = this.model;
            } else {
                this.config = squid_api.model.config;
            }

            if (this.status) {
                this.status = options.status;
            } else {
                this.status = squid_api.model.status;
            }

            // listen for selection change as we use it to get dimensions
            this.listenTo(this.filters,"change:selection", this.render);

            if (this.available) {
                // listen config change as we use it to get available dimensions
                this.listenTo(this.config,"change:"+this.available, this.render);
            }
            // listen config change as we use it to get chosen dimensions
            this.listenTo(this.config,"change:"+this.chosen, this.render);

            if (this.configurationEnabled === true) {
                // initialize dimension collection for management view
                this.collectionManagementView = new squid_api.view.DimensionColumnsManagementWidget();
            }
            if (! this.singleSelect) {
                this.events = squid_api.view.CollectionSelectorUtils.events;
            }

            if (this.displayAll) {
                this.listenTo(this.config,"change:domain", this.fetchCollection);
            }
            this.listenTo(this.status,"change:status", this.enable);
        },

        fetchCollection: function() {
            var me = this;
            this.loadCollection().done(function(collection) {
                me.dimensionCollection = collection;
                me.render();
            }).fail(function() {
                console.error("Error Fetching Dimensions");
            });
        },

        loadCollection : function(parentId) {
            var me = this;
            return squid_api.getCustomer().then(function(customer) {
                return customer.get("projects").load(squid_api.model.config.get("project")).then(function(project) {
                    return project.get("domains").load(squid_api.model.config.get("domain")).then(function(domain) {
                        return domain.get("dimensions").load();
                    });
                });
            });
        },

        enableDisplay: function() {
            this.$el.attr("disabled", false);
        },

        disableDisplay: function() {
            this.$el.attr("disabled", true);
        },

        hide: function() {
            this.$el.hide();
        },

        show: function() {
            this.$el.show();
        },

        enable: function() {
            if (this.status.get("status") == "RUNNING") {
                this.$el.find("button").prop("disabled", true);
            } else {
                this.$el.find("button").prop("disabled", false);
            }
        },

        singleMultiSwitcher: function(single) {
           if (single) {
               this.singleSelect = true;
           } else {
               this.singleSelect = false;
           }
           this.render();
        },

        render: function() {
            var isMultiple = ! this.singleSelect;
            var me = this;

            var jsonData = {"selAvailable" : true, "options" : [], "multiple" : isMultiple};

            if (this.singleSelect) {
                // add an empty (none selected) option
                jsonData.options.push({"label" : "None"});
            }
            
            // iterate through all filter facets
            var selection = this.filters.get("selection");
            if (selection) {
                var facets = selection.facets;
                if (facets) {
                    var facetList = [];
                    for (var i=0; i<facets.length; i++){
                        var facet = facets[i];
                        var isBoolean = false;
                        if (facet.dimension.type === "SEGMENTS") {
                            isBoolean = true;
                        }
                        if (facet.items) {
                            if ((facet.items.length === 1) && (facet.items[0].value === "true")) {
                                isBoolean = true;
                            }
                        }
                        // do not display boolean dimensions
                        if (!isBoolean) {
                            if (this.dimensionIdList) {
                                // insert and sort
                                var idx = this.dimensionIdList.indexOf(facet.dimension.oid);
                                if (idx >= 0) {
                                    facetList[idx] = facet;
                                }
                            } else if (this.available) {
                                // check this facet is available
                                var availableArray = this.config.get(this.available);
                                if (!availableArray) {
                                    // use chosen
                                    availableArray = this.config.get(this.chosen);
                                }
                                if ((!availableArray) || (availableArray.length === 0)) {
                                    // use all facets
                                    facetList.push(facet);
                                } else {
                                    var addToArray = true;
                                    // don't allow dimension reselection if using a singleSelectIndex
                                    if (this.singleSelectIndex || this.singleSelectIndex === 0) {
                                        var chosenArray = this.config.get(this.chosen);
                                        var index = _.indexOf(chosenArray, facet.id);
                                        if (index > -1 && index !== this.singleSelectIndex) {
                                            addToArray = false;
                                        }
                                    }
                                    if (! this.config.get(this.available) && addToArray) {
                                        facetList.push(facet);
                                    } else if (addToArray && (this.config.get(this.available) && (this.config.get(this.available).indexOf(facet.id) > -1))) {
                                        facetList.push(facet);
                                    }
                                }
                            } else {
                                // default unordered behavior
                                facetList.push(facet);
                            }
                        }

                        // avoid holes
                        if (!facetList[i]) {
                            facetList[i] = null;
                        }
                    }
                    var noneSelected = true;
                    var dimIdx;
                    for (dimIdx=0; dimIdx<facetList.length; dimIdx++) {
                        var facet1 = facetList[dimIdx];
                        if (facet1) {
                            // check if selected
                            var selected = this.isChosen(facet1);
                            if (selected === true) {
                                noneSelected = false;
                            }
                            // add to the list
                            var name;
                            if (facet1.name) {
                                name = facet1.name;
                            } else {
                                name = facet1.dimension.name;
                            }
                            var option = {"label" : name, "value" : facet1.id, "selected" : selected, "error" : facetList[dimIdx].error, "oid" : facet1.dimension.oid};
                            jsonData.options.push(option);
                        }
                    }
                }

                // check if empty
                if (jsonData.options.length === 0) {
                    jsonData.empty = true;
                }

                if (this.displayAll) {
                    if (this.dimensionCollection) {
                        var notFound = [];
                        var dims = this.dimensionCollection.models;
                        for (var d=0; d<dims.length; d++) {
                            var model = this.dimensionCollection.at(d);
                            var found = false;
                            for(var c=0; c<selection.facets.length; c++) {
                                if (selection.facets[c].dimension.oid == model.get("oid")) {
                                    found = true;
                                    break;
                                }
                            }
                            if (! found) {
                                // jsonData.options.push({
                                //     "label" : model.get("name"),
                                //     "value" : "@'" + this.config.get("domain") + ".@'" + model.get("oid") + "'",
                                //     "selected" : this.isChosen(model),
                                //     "error" : model.get("error")
                                // });
                                notFound.push({
                                    "id" : model.get("oid"),
                                    "name" : model.get("name"),
                                    "valueType" : model.get("valueType")
                                });
                            }    
                        }
                        for (ix1=0; ix1<notFound.length; ix1++) {
                            console.log(notFound[ix1].name + " with id " + notFound[ix1].id + " is not found with valueType: " + notFound[ix1].valueType);
                        }
                    }
                }

                this.renderView(jsonData);

                // error tooltips
                for (var i2=0; i2<jsonData.options.length; i2++) {
                    var facet2 = jsonData.options[i2];
                    if (facet2.error) {
                        var input = this.$el.find(".squid-api-data-widgets-dimension-selector li:nth-child("+(i2+1)+") label");
                        input.tooltip({"title" : "Facet computation failed"});
                    }
                }

                // Remove Button Title Tag
                this.$el.find("button").removeAttr('title');

                if (this.afterRender) {
                    this.afterRender.call(this);

                    // re-delegate events if external widget is used in callback
                    this.delegateEvents();
                }
            }
        },

        renderView: function(jsonData) {
            var me = this;

            if (this.$el.find("select").length === 0) {
                var html = this.template(jsonData);
                this.$el.html(html);
                // Initialize plugin
                if (! this.singleSelect) {
                    this.$el.find("select").multiselect({
                        buttonContainer: '<div class="squid-api-data-widgets-dimension-selector" />',
                        buttonText: function() {
                            if (! me.updateMultiQuantity) {
                                return 'Dimensions';
                            } else {
                                return 'Dimensions (' + me.$el.find("option:selected").length + ')';
                            }
                        },
                        buttonClass: "form-control",
                        onDropdownShown: function() {
                            if (me.configurationEnabled) {
                                me.showConfiguration();
                            }
                        }
                    });
                }
            } else {
                this.$el.find("select").multiselect('dataprovider', jsonData.options);
                this.$el.find("select").multiselect('rebuild');
            }

            this.enable();

            return this;
        },

        events: {
            "change": function(one, two) {
                var oid = this.$el.find("select option:selected");

                var chosen = this.config.get(this.chosen);
                var chosenNew;

                if (this.singleSelect) {
                    chosenNew = _.clone(chosen);
                    var value = oid.val();
                    if (value) {
                        if (! chosenNew.includes(value)) {
                            chosenNew[this.singleSelectIndex] = value;
                        } else {
                            this.$el.find("select").val("");
                        }
                    } else {
                        chosenNew.splice(this.singleSelectIndex, 1);
                    }
                } else {
                    var selected = [];

                    // build the selection array
                    for (i = 0; i < oid.length; i++) {
                        var selectedOid = $(oid[i]).val();
                        selected.push(selectedOid);
                    }

                    // check for additions
                    chosenNew = _.intersection(_.union(chosen, selected), selected);
                }

                // Update
                if (this.onChangeHandler) {
                    this.onChangeHandler.call(this);
                } else {
                    this.config.set(this.chosen,chosenNew);
                }
            }
        },

        showConfiguration: squid_api.view.CollectionSelectorUtils.showConfiguration,

        sort: squid_api.view.CollectionSelectorUtils.sort,

        isChosen : function(facet) {
            var selected = false;
            var dimensions = this.config.get(this.chosen);
            if (this.singleSelect === true) {
                if (dimensions) {
                    if (dimensions[this.singleSelectIndex] === facet.id) {
                        selected = true;
                    }
                }
            } else {
                if (dimensions) {
                    for (var j=0; j<dimensions.length; j++) {
                        if (facet.id === dimensions[j]) {
                            selected = true;
                        }
                    }
                }
            }
            return selected;
        }

    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.DomainCollectionManagementWidget = factory(root.Backbone, root.squid_api);

}(this, function (Backbone, squid_api) {

    var View = squid_api.view.BaseCollectionManagementWidget.extend({
        type : "Domain",
        typeLabel : "Domain",
        typeLabelPlural : "Domains",
        modelView : null,
        collectionLoading : false,
        configSelectedId : "domain",
        configParentId : "project",

        init : function() {
            var me = this;
            this.modelView = squid_api.view.BaseModelManagementWidget;
            this.relationView = squid_api.view.RelationCollectionManagementWidget;
        },
        
        loadCollection : function(parentId) {
            return squid_api.getCustomer().then(function(customer) {
                return customer.get("projects").load(parentId).then(function(project) {
                    return project.get("domains").load();
                });
            });
        },

        events: {
            'mouseenter tr': function(event) {
                this.eventMouseEnter(event);
            },
            'mouseleave tr': function(event) {
                this.eventMouseLeave(event);
            },
            "click .create" : function(event) {
                this.eventCreate(event);
            },
            'input .search' : function(event) {
                this.eventSearch(event);
            },
            "click .edit": function(event) {
                this.eventEdit(event);
            },
            "click .refresh": function(event) {
                this.eventRefresh(event);
            },
            "click .delete": function(event) {
                this.eventDelete(event);
            },
            "click .select": function(event) {
                this.eventSelect(event);
            },
            "click .relation": function(event) {
                var me = this;
                var modelValue = $(event.target).parents('tr').attr("data-attr");
                this.renderRelationView(new this.relationView({
                    modelValue : modelValue,
                    cancelCallback : function() {
                        me.render();
                    }
                }));
            }
        },

        getModelLabel: function(model) {
            return model.get("name");
        },

        renderRelationView: function(relationView) {
            this.$el.html(relationView.el);
        },
        
        getModelRoles : function(model) {
            var roles = squid_api.view.BaseCollectionManagementWidget.prototype.getModelRoles.call(this, model);
            roles.relation = true;
            return roles;
        }

    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.DomainSelectorButton = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_button_view);

}(this, function (Backbone, squid_api, template) {

    var View = squid_api.view.DomainCollectionManagementWidget.extend({
        
        template : template,
        
        render : function() {
            squid_api.view.CollectionSelectorUtils.renderButton.call(this);
            
            if (this.afterRender) {
            	this.afterRender.call(this);
            }
        }

    });
    return View;
}));

(function (root, factory) {
    root.squid_api.view.MetricCollectionManagementWidget = factory(root.Backbone, root.squid_api);

}(this, function (Backbone, squid_api) {

    var View = squid_api.view.BaseCollectionManagementWidget.extend({
        type : "Metric",
        typeLabel : "Metric",
        typeLabelPlural : "Metrics",
        configParentId : "project",

        init : function() {
            var me = this;
            this.modelView = squid_api.view.BaseModelManagementWidget;
        },

        loadCollection : function(parentId) {
            return squid_api.getCustomer().then(function(customer) {
                return customer.get("projects").load(parentId).then(function(project) {
                    return project.get("domains").load(parentId).then(function(domain) {
                        return domain.get(me.typeLabelPlural.toLowerCase()).load();
                    });
                });
            });
        },

        events: {
            'mouseenter tr': function(event) {
                this.eventMouseEnter(event);
            },
            'mouseleave tr': function(event) {
                this.eventMouseLeave(event);
            },
            "click .create" : function(event) {
                this.eventCreate(event);
            },
            'input .search' : function(event) {
                this.eventSearch(event);
            },
            "click .edit": function(event) {
                this.eventEdit(event);
            },
            "click .refresh": function(event) {
                this.eventRefresh(event);
            },
            "click .delete": function(event) {
                this.eventDelete(event);
            },
            "click .select": function(event) {
                this.eventSelect(event);
            }
        },

        getModelLabel: function(model) {
            if (model.get("dynamic")) {
                return "~ " + model.get("name");
            } else {
                return model.get("name");
            }
        },

        getModelRoles : function(model) {
            var roles = squid_api.view.BaseCollectionManagementWidget.prototype.getModelRoles.call(this, model);
            return roles;
        }

    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.MetricCollectionWidget = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_columns_management_widget);

}(this, function (Backbone, squid_api, template) {

    var View = squid_api.view.BaseCollectionManagementWidget.extend({
        configParentId : "domain",
        
        loadCollection : function(parentId) {
            var me = this;
            return squid_api.getCustomer().then(function(customer) {
                return customer.get("projects").load(me.config.get("project")).then(function(project) {
                    return project.get("domains").load(parentId).then(function(domain) {
                        // listen to parent in case "dynamic" changes
                        me.listenTo(domain, "change:dynamic", me.render);
                        return domain.get("metrics").load();
                    });
                });
            });
        }
    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.MetricColumnsManagementWidget = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_columns_management_widget);

}(this, function (Backbone, squid_api, template) {

    var View = squid_api.view.ColumnsManagementWidget.extend({
        type : "Metric",
        typeLabel : "Metric",
        typeLabelPlural : "Metrics",

        events: {
            "change select" : function(event) {
                var me = this;
                var changeCount = squid_api.view.ColumnsManagementWidget.prototype.eventSelect.call(this, event);

                // update all models at the same time
                if (changeCount > 0) {
                    this.collection.saveAll(this.collection.models).then(function() {
                        // clone and fetch parent to check dynamic status
                        var parentClone = me.collection.parent.clone();
                        parentClone.fetch({
                            success: function (domain) {
                                me.collection.parent.set("dynamic", domain.get("dynamic"));
                            }
                        });
                    });
                }
            },
            "click .create" : function(event) {
                this.eventCreate(event);
            },
            "click .edit": function(event) {
                this.eventEdit(event);
            },
            "click .delete": function(event) {
                this.eventDelete(event);
            }
        }
    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.MetricSelectorView = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_metric_selector_widget);

}(this, function (Backbone, squid_api, template) {

    var View = squid_api.view.MetricCollectionWidget.extend({
        template : null,
        available: "availableMetrics",
        chosen : "chosenMetrics",
        selected : "selectedMetrics",
        configurationEnabled : null,
        onChangeHandler : null,
        filterBy : null,
        buttonText : null,
        displayAll : true,
        customView : null,

        init: function(options) {

            // setup options
            if (options) {
                if (options.template) {
                    this.template = options.template;
                } else {
                    this.template = template;
                }
                if (options.metricIdList) {
                    this.metricIdList = options.metricIdList;
                }
                if (options.chosen) {
                    this.chosen = options.chosen;
                }
                if (options.available) {
                    this.available = options.available;
                }
                if (options.metricIndex !== null) {
                    this.metricIndex = options.metricIndex;
                }
                if (options.configurationEnabled) {
                    this.configurationEnabled = options.configurationEnabled;
                }
                if (options.filterBy) {
                    this.filterBy = options.filterBy;
                }
                if (options.customView) {
                    this.customView = options.customView;
                }
                if (options.displayAll !== 'undefined' && options.displayAll !== null) {
                    this.displayAll = options.displayAll;
                }
                if (options.buttonText) {
                    this.buttonText = options.buttonText;
                }
                if (options.onChangeHandler) {
                    this.onChangeHandler = options.onChangeHandler;
                }
            } else {
                this.template = template;
            }

            // setup the models
            if (this.model) {
                this.config = this.model;
            } else {
                this.config = squid_api.model.config;
            }

            this.collectionManagementView = new squid_api.view.MetricColumnsManagementWidget();

            this.listenTo(this.config,"change:"+this.chosen, this.updateView);

            // listen for global status change
            this.listenTo(this.status,"change:status", this.enable);

            this.renderBase();
        },

        applyUserAttention: function() {
            if (this.userAttention) {
                this.$el.find("button").addClass("user-attention");
            } else {
                this.$el.find("button").removeClass("user-attention");
            }
        },

        activateUserAttention: function() {
            this.userAttention = true;
            this.applyUserAttention();
        },

        removeUserAttention: function() {
            this.userAttention = false;
            this.applyUserAttention();
        },

        enable: function() {
            if (this.status.get("status") == "RUNNING") {
                this.$el.find("button").prop("disabled", true);
            } else {
                this.$el.find("button").prop("disabled", false);
            }
        },

        updateView: function() {
            var me = this, isMultiple = true;
            var jsonData = {"selAvailable" : true, "options" : [], "multiple" : isMultiple};

            if (this.collection) {

                // iterate through all domains items
                var items = this.collection;
                var domain = this.collection.parent;
                var noneSelected = true;
                for (var idx=0; idx<items.models.length; idx++) {
                    var item = items.models[idx];

                    // check dynamic rules
                    var add = false;
                    if (this.filterBy) {
                        if (_.contains(this.filterBy, item.get("oid"))) {
                            add = true;
                        }
                    } else {
                        add = true;
                    }

                    if (!this.displayAll) {
	                    if ((add === true) && (this.available || this.chosen)) {
	                        // check this metric is available (or chosen)
	                        var availableArray = this.config.get(this.available);
	                        var chosenArray = this.config.get(this.chosen);
	                        if ((availableArray === 'undefined' || $.isArray(availableArray) ===false || availableArray.indexOf(item.get("oid")) < 0) &&
	                        		(chosenArray === 'undefined' || $.isArray(chosenArray) ===false || chosenArray.indexOf(item.get("oid")) < 0)) {
	                            add = false;
	                        }
	                    }
                    }

                    if (add === true) {
                        // check if selected
                        var selected = me.isChosen(item);
                        if (selected === true) {
                            noneSelected = false;
                        }
                        var option = {
                                "label" : item.get("name"),
                                "value" : item.get("oid"),
                                "selected" : selected
                        };
                        jsonData.options.push(option);
                    }
                }

                // Alphabetical Sorting
                jsonData.options = me.sort(jsonData.options);

                // check if empty
                if (jsonData.options.length === 0) {
                    jsonData.empty = true;
                }

                if (this.customView) {
                    this.renderBase(jsonData.options);
                } else {
                    // update dropdown content
                    this.$el.find("select").multiselect("dataprovider", jsonData.options);
                    this.$el.find("select").multiselect("rebuild");
                    if (this.configurationEnabled) {
                        this.showConfiguration();
                    }
                }
                this.applyUserAttention();
            }
            return this;
        },

        renderBase: function(data) {
            if (this.$el.find("select").length === 0) {
                var html = this.template({options : data});
                this.$el.html(html);
                if (this.afterRender) {
                    this.afterRender.call(this);

                    // re-delegate events if external widget is used in callback
                    this.delegateEvents();
                }
            } else {
                this.$el.find("select").multiselect("dataprovider", data);
                this.$el.find("select").multiselect("rebuild");
            }
        },

        render: function() {
            var me = this;

            // Initialize plugin
            if (! this.customView) {
                this.$el.find("select").multiselect({
                    "buttonContainer": '<div class="squid-api-data-widgets-metric-selector-open" />',
                    "buttonText": function() {
                        var label = "Metrics";
                        if (me.buttonText) {
                            label = me.buttonText;
                        }
                        return label;
                    },
                    enableHTML: true,
                    "onDropdownShown": function() {
                        if (me.configurationEnabled) {
                            me.showConfiguration();
                        }
                    }
                });

                // Remove Button Title Tag
                this.$el.find("button").removeAttr('title');
            }

            this.enable();

            // update view data if render is called after the metric change event
            this.updateView();
        },

        events: squid_api.view.CollectionSelectorUtils.events,

        showConfiguration: squid_api.view.CollectionSelectorUtils.showConfiguration,

        sort: squid_api.view.CollectionSelectorUtils.sort,

        isChosen : squid_api.view.CollectionSelectorUtils.isChosen

    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.ModalView = factory(root.Backbone, root.squid_api);

}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({

        internalView : null,
        template : null,
        views : [],
        el : "body",
        fadeAnimation : false,
        header: null,
        footer: null,
        headerTitle: null,

        initialize: function(options) {
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = squid_api.template.squid_api_modal_view;
            }
            if (options.view) {
                this.view = options.view;
            }
            if (options.fadeAnimation) {
                this.fadeAnimation = options.fadeAnimation;
            }
            if (options.header) {
                this.header = options.header;
            }
            if (options.headerTitle) {
                this.headerTitle = options.headerTitle;
            }
            if (options.footer) {
                this.footer = options.footer;
            }
            // output base html
            this.renderBase();
        },

        close: function() {
            this.$el.modal("toggle");
        },

        updateHeaderText: function(string) {
            this.$el.find(".modal-header h4").text(string);
        },

        renderBase: function() {
            var containerData = {
                modalCount : $(".squid-api-modal-view").length,
                fadeAnimation : this.fadeAnimation,
                header: this.header,
                footer: this.footer,
                headerTitle: this.headerTitle
            };
            var html = this.template(containerData);
            // print template
            this.$el.append(html);
            // set el
            this.setElement(this.$el.find(".squid-api-modal-view-" + containerData.modalCount));
            // place view into element
            this.$el.find(".content").html(this.view.el);
        },

        render: function() {
            // render view by default
            this.view.render();
            // display the modal
            this.$el.modal();

            return this;
        }
    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.Navigator = factory(root.Backbone, root.squid_api);
}(this, function (Backbone, squid_api) {

    View = Backbone.View.extend( {

        template : squid_api.template.squid_api_navigator,
        config : null,
        hierarchy : {},
        filter : null,

        initialize : function(options) {
            
            // setup options
            if (options) {
                if (options.template) {
                    this.template = options.template;
                }
                if (options.config) {
                    this.config = options.config;
                }
                if (options.filter) {
                    this.filter = options.filter;
                }
            }
            // listeners
            if (!this.config) {
                this.config = squid_api.model.config;
            }
            if (this.model) {
                this.model.on('change', this.loadHierarchy, this);
                this.loadHierarchy();
            }
            
        },

        setModel : function(model) {
            this.model = model;
            this.initialize();
        },
                
        loadNode : function(parent, node, filter) {
            var me = this;
            if (filter) {
                var children = Object.keys(filter);
                if (children) {
                    parent.nodes = [];
                    for (var i = 0; i < children.length; i++) {
                        var childName = children[i];
                        var newNode = {
                            "name" : childName,
                            "nodes" : []
                        };
                        parent.nodes.push(newNode);
                        filter = filter[childName];
                        this.loadCollection(newNode, node, childName, filter);
                    }
                }
            }
        },
        
        loadHierarchy : function() {
            var me = this;
            this.hierarchy = {};
            me.loadNode(me.hierarchy, this.model, me.filter);
        },
        
        loadCollection : function(parent, node, child, filter) {
            var me = this;
            node.get(child).load().then(function(childCollection) {
                for (var i1=0; i1<childCollection.length; i1++) {
                    var childNode = childCollection.at(i1);
                    var id = childNode.get("id");
                    var newNode = {
                            "id" : id,
                            "name" : childNode.get("name"),
                            "description" : childNode.get("description"),
                            "url" : squid_api.utils.idToPath(id)
                    };
                    parent.nodes[i1] = newNode;
                    me.render();
                    me.loadNode(newNode, childNode, filter);
                }
            });
        },

        render : function() {
            this.$el.html(this.template(this.hierarchy));
            return this;
        }

    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.ProjectCollectionManagementWidget = factory(root.Backbone, root.squid_api);

}(this, function (Backbone, squid_api) {

    var View = squid_api.view.BaseCollectionManagementWidget.extend({
        type : "Project",
        typeLabel : "Project",
        typeLabelPlural : "Projects",
        modelView : null,
        configSelectedId : "project",
        configParentId : "customer",

        init : function() {
            var me = this;
            this.modelView = squid_api.view.ProjectModelManagementWidget;
            me.render();
        },
        
        loadCollection : function() {
            return squid_api.getCustomer().then(function(customer) {
                return customer.get("projects").load();
            });
        },
        
        render : function() {
            // useful for debugging
            squid_api.view.BaseCollectionManagementWidget.prototype.render.call(this);
        }

    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.ProjectCreatorButton = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_button_view);

}(this, function (Backbone, squid_api, template) {

    var View = squid_api.view.ProjectCollectionManagementWidget.extend({

        init : function() {
            var me = this;
            this.listenTo(this.config,"change", this.configCompare);
        },

        render: function() {
            var label = this.typeLabelPlural;
            var jsonData = {
                label : "Create a new one",
                usable : this.getCreateRole(),
                collectionLoaded : !this.collectionLoading,
                collection : this.collection,
                typeLabelPlural : this.typeLabelPlural
            };

            this.$el.html(template(jsonData));

            return this;
        }

    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.ProjectModelManagementWidget = factory(root.Backbone, root.squid_api);

}(this, function (Backbone, squid_api, template) {
    
    squid_api.model.ProjectModel.prototype.definition = "Project";
    squid_api.model.ProjectModel.prototype.ignoredAttributes = [
                                                                'accessRights', 'config', 'relations', 'domains' ];
    squid_api.model.ProjectModel.prototype.schema = {
            "name" : {
                "type" : "Text",
                "editorClass" : "form-control",
                "fieldClass" : "name"
            },
            "description" : {
                "type" : "TextArea",
                "editorClass" : "form-control",
                "fieldClass" : "description"
            },
            "dbUrl" : {
                "title" : "Database URL",
                "type" : "Text",
                "editorClass" : "form-control",
                "position" : 1,
                "help" : "jdbc:[driver_name]://[host]:[port]/{[database]}{options}",
                "fieldClass" : "dbUrl"
            },
            "dbUser" : {
                "title" : "Database User",
                "type" : "Text",
                "editorClass" : "form-control",
                "position" : 2,
                "fieldClass" : "dbUser"
            },
            "dbPassword" : {
                "title" : "Database Password",
                "type" : "Password",
                "editorClass" : "form-control",
                "position" : 3,
                "fieldClass" : "dbPassword"
            },
            "dbCheckConnection" : {
                "type" : "DbCheckConnection",
                "fieldClass" : "squid-api-check-db-connection",
                "editorClass" : "form-control",
                "position" : 4
            },
            "dbSchemas" : {
                "title" : "Database Schemas",
                "type" : "Checkboxes",
                "editorClass" : " ",
                "options" : [],
                "position" : 5,
                "fieldClass" : "dbSchemas checkbox"
            },
            "credentials" : {
                "title" : "Credentials ",
                "type" : "Credentials",
                "editorClass" : "hidden",
                "fieldClass" : "hidden"
            },
            "id" : {
                "title" : "Object ID",
                "type" : "ProjectObjectID",
                "editorClass" : "form-control",
                "fieldClass" : "object-id"
            }
    };
    

    // Define "objectIDEditor" Custom Editor
    var projectObjectIDEditor = Backbone.Form.editors.Text.extend({

        setValue: function(value) {
            this.value = value;
            this.$el.val(value.projectId);
        },

        getValue: function() {
            var val = this.$el.val();
            return {
                projectId : val
            };
        },

        render: function() {
            if (this.value.bookmarkId) {
                // editing not enabled
                this.$el.attr("disabled", true);
                this.$el.removeClass("form-control");
            } else {
                this.$el.removeAttr("disabled");
            }
            this.setValue(this.value);
            return this;
        }
    });

    Backbone.Form.editors.ProjectObjectID = projectObjectIDEditor;

    var View = squid_api.view.BaseModelManagementWidget.extend({
        formEvents: function() {
            var me = this;
            this.formContent.on('dbUrl:change', function(form) {
                me.resetSchemas(form);
            });
            this.formContent.on('dbPassword:change', function(form) {
                me.resetSchemas(form);
            });
            this.formContent.on('dbUser:change', function(form) {
                me.resetSchemas(form);
            });
        },

        resetSchemas: function(form) {
            form.$el.find(".squid-api-check-db-connection button").removeClass("btn-danger");
            form.$el.find(".squid-api-check-db-connection button").removeClass("btn-success");
            form.$el.find('.dbSchemas').hide();
            form.$el.find(".squid-api-check-db-connection button").removeClass("btn-warning");
        },

        customDataManipulation: function(data) {
            if (data.dbCheckConnection) {
                delete data.dbCheckConnection;
            }
            return data;
        },
        
        onSave : function(model) {
            // TODO: when saving a new project kraken should return the project role (T713)
            model.set({"_role" : "OWNER"}, {silent : true});
            // set new project as current
            this.config.set("project", model.get("id").projectId);
        },
        afterRender: function() {
            var formValues = this.formContent.getValue();
            // check connection immediately after rending (only if the form value dbUrl exists)
            if (formValues.dbUrl) {
                this.formContent.fields.dbCheckConnection.editor.checkConnection();
            }
        }
    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.ProjectSelectorButton = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_button_view);

}(this, function (Backbone, squid_api, template) {

    var View = squid_api.view.ProjectCollectionManagementWidget.extend({
        
        template : template,
        
        render : function() {
            squid_api.view.CollectionSelectorUtils.renderButton.call(this);
            
            if (this.afterRender) {
            	this.afterRender.call(this);
            }
        }

    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.RelationCollectionManagementWidget = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_relation_collection_management_widget);

}(this, function (Backbone, squid_api, template) {

    var View = squid_api.view.BaseCollectionManagementWidget.extend({
        type : "Relation",
        typeLabel : "Relation",
        typeLabelPlural : "Relations",
        modelView : null,
        template: template,
        configParentId : "domain",

        init: function(options) {
            var me = this;

            this.modelView = squid_api.view.RelationModelManagementWidget;

            // init the relations collection
            var projectId = this.config.get("project");
            if (projectId) {
                this.modelValue = options.modelValue;

                this.loadCollection(options.modelValue).done(function(collection) {
                    me.collection = collection;
                    me.render();
                }).fail(function() {
                    me.render();
                });
            } else {
                // listen for config change
                this.listenTo(this.config,"change", function () {
                    var parentChanged = this.config.hasChanged(me.configParentId);
                    var selectionChanged = this.config.hasChanged(me.configSelectedId) || (this.config.get(me.configSelectedId) && ! this.selectedModel);
                    this.initModel(this.config, parentChanged, selectionChanged);
                    if (this.config.hasChanged("domain")) {
                        me.modelValue = this.config.get("domain");
                    }
                });
            }
        },

        loadCollection : function(parentId) {
            var me = this;
            var project = this.config.get("project");

            if (project) {
                // load the project's relations
                return squid_api.getCustomer().then(function(customer) {
                    return customer.get("projects").load(me.config.get("project")).then(function(project) {
                        return project.get(me.typeLabelPlural.toLowerCase()).load();
                    });
                });
            }
        },

        events: {
            'mouseenter tr': function(event) {
                this.eventMouseEnter(event);
            },
            'mouseleave tr': function(event) {
                this.eventMouseLeave(event);
            },
            "click .create" : function(event) {
                this.eventCreate(event);
            },
            "click .edit": function(event) {
                this.eventEdit(event);
            },
            "click .refresh": function(event) {
                this.eventRefresh(event);
            },
            "click .delete": function(event) {
                this.eventDelete(event);
            },
            "click .select": function(event) {
                this.eventSelect(event);
            },
            "click .cancel": function() {
                // reset parent view if cancel button clicked
                if (this.cancelCallback) {
                    this.cancelCallback.call();
                }
            }
        },

        viewData: function() {
            var filteredModels = [];
            for (i=0; i<this.collection.size(); i++) {
                if (this.collection.at(i).get("leftId") && this.collection.at(i).get("rightId")) {
                    var collection = this.collection.at(i);
                    if (this.collection.at(i).get("rightId").domainId == this.modelValue) {
                        collection.set("isRight", true);
                    }
                    if (this.collection.at(i).get("leftId").domainId == this.modelValue || this.collection.at(i).get("rightId").domainId == this.modelValue) {
                        filteredModels.push(collection);
                    }
                }
            }
            var models = [];
            for (ix=0; ix<filteredModels.length; ix++) {
                var obj = {};
                obj.oid = filteredModels[ix].get("oid");
                obj.leftName = filteredModels[ix].get("leftName");
                obj.rightName = filteredModels[ix].get("rightName");
                obj.roles = this.getModelRoles(filteredModels[ix]);
                obj.isRight = filteredModels[ix].get("isRight");

                // set cardinality booleans for handlebar display
                var leftCardinality = filteredModels[ix].get("leftCardinality");
                var rightCardinality = filteredModels[ix].get("rightCardinality");
                if (leftCardinality == "MANY") {
                    obj.leftMany = true;
                } else if (leftCardinality == "ZERO_OR_ONE") {
                    obj.leftZeroOrOne = true;
                } else if (leftCardinality == "ONE") {
                    obj.leftOne = true;
                }
                if (rightCardinality == "MANY") {
                    obj.rightMany = true;
                } else if (rightCardinality == "ZERO_OR_ONE") {
                    obj.rightZeroOrOne = true;
                } else if (rightCardinality == "ONE") {
                    obj.rightOne = true;
                }
                models.push(obj);
            }

            return models;
        },

        render: function() {
            // store models
            if (this.collection) {
                var jsonData = {
                    models : this.viewData(),
                    createRole : this.getCreateRole(),
                    roles : null,
                    typeLabelPlural : this.typeLabelPlural,
                    type : this.type,
                    modalHtml : true
                };

                // print template
                var html = this.template(jsonData);
                this.$el.html(html);
            }
        }
    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.RelationModelManagementWidget = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_base_model_management_widget);

}(this, function (Backbone, squid_api, template) {

    var View = squid_api.view.BaseModelManagementWidget.extend({

        model : null,
        collectionPluralLabel : null,

        dataManipulation: function(data) {
            for (var x in data) {
                if (typeof(data[x]) == "object") {
                    for (var y in data[x]) {
                        if (data[x][y] !== null) {
                            if (data[x][y].length === 0) {
                                data[x][y] = null;
                            }
                        }
                    }
                } else if (data[x].length === 0) {
                    data[x] = null;
                }
            }

            data = this.cardinalityManipulate(data);

            return data;
        },

        beforeRender: function() {
            var leftCardinality = this.model.get("leftCardinality");
            var rightCardinality = this.model.get("rightCardinality");

            if (leftCardinality === "MANY" && rightCardinality === "ZERO_OR_ONE") {
                this.model.set("cardinality", "many to zero or one");
            }
            if (leftCardinality === "ZERO_OR_ONE" && rightCardinality === "MANY") {
                this.model.set("cardinality", "zero or one to many");
            }
            if (leftCardinality === "ONE" && rightCardinality === "ONE") {
                this.model.set("cardinality", "one to one");
            }
            if (leftCardinality === "ONE" && rightCardinality === "MANY") {
                this.model.set("cardinality", "one to many");
            }
            if (leftCardinality === "MANY" && rightCardinality === "ONE") {
                this.model.set("cardinality", "many to one");
            }
            if (leftCardinality === "ZERO_OR_ONE" && rightCardinality === "ONE") {
                this.model.set("cardinality", "zero or one to one");
            }
            if (leftCardinality === "ONE" && rightCardinality === "ZERO_OR_ONE") {
                this.model.set("cardinality", "one to zero or one");
            }
        },

        afterRender: function() {
            var currentDomain = this.config.get("domain");
            if (this.formContent.getValue("rightId").domainId === currentDomain) {
                this.formContent.fields.leftId.$el.show();
                this.formContent.fields.rightId.$el.hide();
            } else {
                this.formContent.fields.leftId.$el.hide();
            }
        },

        cardinalityManipulate: function(data) {
            var cardinality = data.cardinality;
            if (cardinality === "many to zero or one") {
                data.leftCardinality = "MANY";
                data.rightCardinality = "ZERO_OR_ONE";
            }
            if (cardinality === "zero or one to many") {
                data.leftCardinality = "ZERO_OR_ONE";
                data.rightCardinality = "MANY";
            }
            if (cardinality === "one to one") {
                data.leftCardinality = "ONE";
                data.rightCardinality = "ONE";
            }
            if (cardinality === "one to many") {
                data.leftCardinality = "ONE";
                data.rightCardinality = "MANY";
            }
            if (cardinality === "many to one") {
                data.leftCardinality = "MANY";
                data.rightCardinality = "ONE";
            }
            if (cardinality === "zero or one to one") {
                data.leftCardinality = "ZERO_OR_ONE";
                data.rightCardinality = "ONE";
            }
            if (cardinality === "one to zero or one") {
                data.leftCardinality = "ONE";
                data.rightCardinality = "ZERO_OR_ONE";
            }
            delete data.cardinality;
            return data;
        },

        customDataManipulation: function(data) {
            if (data.joinExpression) {
                if (data.joinExpression.value === null) {
                    delete data.joinExpression;
                }
            }
            return data;
        },

        events: {
            "click .btn-cancel": function() {
                // reset parent view if cancel button clicked
                if (this.cancelCallback) {
                    this.cancelCallback.call();
                }
            },
            "click .btn-save-form" : function(e) {
                e.stopPropagation();
                var me = this;
                var error = this.formContent.validate();
                if (! error) {
                    // global data manipulation
                    var data = this.dataManipulation(this.formContent.getValue());

                    // for any custom model manipulation before save
                    data = this.customDataManipulation(data);

                    // save model
                    this.model.save(data, {
                        wait: true,
                        success: function(model) {
                            // status update
                            if (me.cancelCallback) {
                                me.cancelCallback.call();
                            }
                            // call once saved
                            if (me.onSave) {
                                me.onSave(model);
                            }
                            me.status.set("message", "Sucessfully saved");
                        },
                        error: function(xhr) {
                            me.status.set("error", xhr);
                        }
                    });

                }
            },
            "mouseover .rightId select" : function(e) {
                this.updateDomains(e);
            },
            "mouseover .leftId select" : function(e) {
                this.updateDomains(e);
            }
        },

        updateDomains: function(e) {
            if ($(e.currentTarget).find("option").length <= 1) {
                var optionsAsString = "";
                for(var i=0; i<this.domainList.length; i++) {
                    if (this.domainList[i].val !== $(e.currentTarget).val()) {
                        optionsAsString += "<option value='" + this.domainList[i].val + "'>" + this.domainList[i].label + "</option>";
                    } 
                }
                $(e.currentTarget).append(optionsAsString);
            }
        },

        onSave: function(model) {
            // reload filters
            this.config.trigger("change:selection");
        },
        formEvents: function() {
            var me = this;

            // set base values
            if (this.model.isNew()) {
                // automatically populate leftId
                this.formContent.fields.leftId.setValue({
                    "projectId": this.config.get("project"),
                    "domainId": this.config.get("domain")
                });
                // automatically populate rightId
                this.formContent.fields.rightId.setValue({
                    "projectId": this.config.get("project"),
                    "domainId" : this.domainList[0].val
                });
                // auto select default form fields
                this.formContent.fields.leftName.setValue(this.formContent.fields.leftId.getValue().domainId);
                this.formContent.fields.rightName.setValue(this.domainList[0].label);
                this.formContent.fields.cardinality.setValue(this.formContent.fields.cardinality.schema.options[0]);
            }

            // additional events
            this.formContent.on('leftId:change', function(form) {
                var rightText = form.$el.find(".leftId").find("select option:selected").text();
                form.$el.find(".leftName input").val(rightText);
            });
            this.formContent.on('rightId:change', function(form) {
                var rightText = form.$el.find(".rightId").find("select option:selected").text();
                form.$el.find(".rightName input").val(rightText);
            });
            this.formContent.on('leftCardinality:change', function(form) {
                if (form.fields.leftCardinality.getValue() == "MANY" && form.fields.rightCardinality.getValue() == "MANY") {
                    form.fields.leftCardinality.setValue("ZERO_OR_ONE");
                    squid_api.model.status.set("message", "cannot set the cardinality many to many");
                }
            });
            this.formContent.on('rightCardinality:change', function(form) {
                if (form.fields.leftCardinality.getValue() == "MANY" && form.fields.rightCardinality.getValue() == "MANY") {
                    form.fields.rightCardinality.setValue("ZERO_OR_ONE");
                    squid_api.model.status.set("message", "cannot set the cardinality many to many");
                }
            });
        },

        setSchema: function() {
            var dfd = $.Deferred();
            var schema = this.model.schema;
            var me = this;
            var project = this.model.get("id").projectId;
            squid_api.getCustomer().then(function(customer) {
                customer.get("projects").load(project).then(function(project) {
                    project.get("domains").load().then(function(domains) {
                        var domainList = [];

                        var currentLeftDomain = [];
                        var currentRightDomain = [];

                        for (i=0; i<domains.size(); i++) {
                            var domain = domains.at(i);

                            obj = {};
                            obj.val = domain.get("oid");
                            obj.label = domain.get("name");

                            // push for widget scope array
                            domainList.push(obj);

                            // current domains
                            if (me.model.get("leftId")) {
                                if (domain.get("oid") === me.model.get("leftId").domainId) {
                                    currentLeftDomain.push(obj);
                                }

                            }
                            if (me.model.get("rightId")) {
                                if (domain.get("oid") === me.model.get("rightId").domainId) {
                                    currentRightDomain.push(obj);
                                }
                            }
                            if (me.model.isNew()) {
                                if (domain.get("oid") === me.config.get("domain")) {
                                    currentLeftDomain.push(obj);
                                }
                            }
                        }

                        if (me.model.isNew()) {
                            currentRightDomain.push(domainList[0]);
                        }

                        schema.leftId.subSchema.domainId.options = currentLeftDomain;
                        schema.rightId.subSchema.domainId.options = currentRightDomain;

                        me.domainList = domainList.sort(me.comparator);

                        dfd.resolve(schema);
                    });
                });
            });
            return dfd;
        }
    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.ShortcutsAdminView = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_shortcuts_admin_widget);

}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({
        template : null,
        onSave : null,

        initialize: function(options) {

            // setup options
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = template;
            }

            if (options.onSave) {
                this.onSave = options.onSave;
            }

            this.render();
        },

        events: {
            'click #saveBtn'  : 'saveShortcut',
        },

        render: function() {
            var me = this;
            this.$el.html(this.template());
        },

        saveShortcut : function(event) {
            event.preventDefault();
            var me = this;
            var shortcutId = this.$el.find("#shortcutId").val();
            if (shortcutId === "") {
                shortcutId =  null;
            }
            var shortcutName = this.$el.find("#shortcutName").val();
            var currentStateId = squid_api.model.state.get("oid");
            // TODO handle the case when state ins't existing yet
            if (currentStateId) {
                var shortcutModel = new squid_api.model.ShortcutModel();
                var data = {
                    "id" : {
                        "customerId" : this.customerId,
                        "shortcutId" : shortcutId
                    },
                    "name" : shortcutName,
                    "stateId" : currentStateId
                };
                shortcutModel.save(data, {
                    success : function(model, response, options) {
                        squid_api.model.status.set("message", "Shortcut successfully saved with Id : "+model.get("oid"));
                        if (me.onSave) {
                            me.onSave.call();
                        }
                    },
                    error : function(model, response, options) {
                        squid_api.model.status.set('error', 'Shortcut save failed');
                    }
                });
            }
        }
    });

    return View;
}));

(function (root, factory) {
    root.squid_api.view.UsersAdminView = factory(root.Backbone, root.squid_api, squid_api.template.squid_api_users_admin_widget);

}(this, function (Backbone, squid_api, template) {

    var View = Backbone.View.extend({
        template : null,
        widgetContainer : '#squid-api-admin-widgets-user-table',
        groupData : {},
        messageToDisplay: '',

        initialize: function(options) {
            var me = this;

            // setup options
            if (options.template) {
                this.template = options.template;
            } else {
                this.template = template;
            }

            if (options.status) {
                this.status = options.status;
            }

            if (! this.model) {
                // Connect to the api to retrieve user/group collections
                this.model = new squid_api.model.UserCollection();
                this.groups = new squid_api.model.GroupCollection();
            }

            this.model.on("reset change remove sync", this.render, this);

            this.render();
        },

        events: {
            'click td.user-value'  : 'modifyUserValue',
            'click .delete'  : 'deleteUser',
            'click button.add'  : 'addUser',
            'blur .edit' : 'updateValue',
            'keypress .edit' : 'updateValue',
            'click .group-value .badge' : 'deleteGroup',
            'mouseenter .group-value' : 'groupMouseOver',
            'mouseleave .group-value' : 'groupMouseOut',
            'mouseover td.user-value' : 'groupIconOver',
            'mouseout td.user-value' : 'groupIconOut',
        },

        groupIconOver: function(item) {
            if ($(item.currentTarget).siblings('.action-section').find('button').attr('data-value') !== 'add') {
                $(item.currentTarget).addClass('field-icon-on');
            }
        },

        groupIconOut: function(item) {
            if ($(item.currentTarget).siblings('.action-section').find('button').attr('data-value') !== 'add') {
                $(item.currentTarget).removeClass('field-icon-on');
            }
        },

        addUser: function(item) {
            var me = this;

            // Get all input fields
            var toShow = $(item.currentTarget).parents('tr').find('td input');
            var inputFields = $(item.currentTarget).parents('tr').find('td .add');

            var data = {};

            // Set to user Add mode
            if ($(item.currentTarget).attr('data-value') === 'add') {
                // Change add button to save and change attr-value
                $(item.currentTarget).attr('data-value', 'save');
                $(item.currentTarget).text('save');

                // Show input fields
                $(toShow).show();
                $(item.currentTarget).parents('tr').find('td span.send-email-label').show();

                // Focus on all input fields
                $(toShow).focus();

                // Hide Select
            } else {
                for(i=0; i<inputFields.length; i++) {
                    var attr = $(inputFields[i]).attr('data-attribute');
                    var value = $(inputFields[i]).val();
                    if (attr !== undefined) {
                        if (attr !== 'sendemail') {
                            if (attr === 'groups') {
                                if (value !== null) {
                                    data[attr] = [value];
                                }
                            } else {
                                if (value !== null) {
                                    data[attr] = value;
                                }
                            }
                        }
                    }
                }

                // Add to collection and sync
                data.id = {'userId' : null};

                // Get checkbox status before model refresh
                var sendEmail = $(this.widgetContainer + ' .email-checkbox').is(':checked');

                this.model.create(data, {
                    wait: true,
                    success: function(model, response){
                        var message = 'You have successfully saved user with login: ' + data.login;
                        if (sendEmail) {
                            var linkUrl = encodeURIComponent(squid_api.apiURL.substring(0, squid_api.apiURL.indexOf('/v'), 1) + "/auth/password?access_token={access_token}");
                            var sendMailUrl = squid_api.apiURL + '/set-user-pwd?' + 'clientId=' + squid_api.clientId + '&email=' + data.email + '&customerId=' + squid_api.customerId + '&link_url=' + linkUrl;

                            $.get(sendMailUrl).done(function() {
                                message = message + ' and a confirmation email has been sent to:' + data.email;
                                me.status.set('message', message);
                            }).fail(function() {
                                message = message + ' but confirmation email was not sent';
                                me.status.set('message', message);
                            });
                        } else {
                            me.status.set('message', message);
                        }
                    },
                    error: function(model) {
                        me.status.set('message', model.responseJSON.error);
                    }
                });
            }
        },

        groupMouseOver: function(item) {
            $(item.currentTarget).append("<span class='badge'>x</span>");
        },

        groupMouseOut: function(item) {
            $(this.widgetContainer + ' .badge').remove();
        },

        deleteGroup: function(item) {
            var me = this;

            var itemData = $(item.currentTarget).parents('td');

            // Obtain current groupId
            var groupItems = $(item.currentTarget).parent("div").siblings('div');

            // Get the ID to find model in collection
            var modelId = $(item.currentTarget).parents('tr').attr('data-id');

            if (confirm('Are you sure you want to remove this group?')) {

                var groups = [];
                for (i=0; i<groupItems.length; i++) {
                    groups.push($(groupItems[i]).attr('attr-value'));
                }

                // Model to remove
                var model = this.model.get(modelId);

                // Create new object for model
                var data = {};
                data.groups = groups;

                // Save onto the server
                model.save(data, {
                    success : function(model, response) {
                        me.status.set('message', 'group successfully deleted');
                    }
                });
            } else {
                // To be refactored, (To remove the class after user-value click event)
                setTimeout(function() {
                    $(itemData).removeClass('editing');
                }, 1);
            }
        },

        deleteUser: function(item) {
            var me = this;

            // Get the ID to find model in collection
            var modelId = $(item.currentTarget).parents('tr').attr('data-id');

            if (confirm('Are you sure you want to remove this user?')) {
                // Model to remove
                var model = this.model.get(modelId);

                // Remove from collection
                this.model.remove(modelId);

                // Delete on the server
                model.destroy({success: function(model, response) {
                    me.status.set('message', 'user with login ' + model.get('login') + ' successfully deleted');
                }});
            }
        },

        remove: function() {
            this.$el.empty();
            this.stopListening();
            return this;
        },

        modifyUserValue: function(item) {
            // Show text inputs
            $(".editing").removeClass("editing");
            var currentTarget = $(item.currentTarget);

            currentTarget.addClass("editing");

            // Focus on input fields
            currentTarget.find("input").focus();

            // If Select Box
            if (currentTarget.find('select').length > 0 && currentTarget.find('select option').length < 1) {
                var groups = this.groups.toJSON();

                // Remove existing select options
                currentTarget.find("select options").remove();

                // Make sure select box is empty
                currentTarget.find("select").empty();
                // Append groups to dropdown
                for (var key in groups) {
                    if (groups[key].id) {
                        currentTarget.find("select").append("<option value='" + groups[key].id.userGroupId + "'>" + groups[key].name + "</option>");
                    }
                }
            }
        },

        updateValue: function(item) {
            var me = this;

            if (item.which == 13 || item.type == "focusout") {
                /*
                    Called after input areas have been manually focused by the user
                */

                // Variable setup
                var previousValue;
                var groupData;
                var groupArray = [];

                // Retrieve previous value from label / div fields
                if (this.$('.editing label').length > 0) {
                    previousValue = this.$('.editing label').text();
                }
                else {
                    groupData = this.$(this.widgetContainer + ' .editing div');
                    for (i=0; i<groupData.length; i++) {
                        groupArray.push($(groupData[i]).attr('attr-value'));
                    }
                    previousValue = "";
                }

                // Model Attribute to update
                var modelAttr = this.$(this.widgetContainer + ' .editing .edit').attr('data-attribute');

                // Updated Value
                var value;
                if (this.$(this.widgetContainer + ' .editing select.edit').length === 0) {
                    value = this.$(this.widgetContainer + ' .editing input.edit').val();
                } else {
                    value = this.$(this.widgetContainer + ' .editing select.edit option:selected').val();
                }

                // Get the ID to find model in collection
                var modelId = this.$('.editing').parent("tr").attr('data-id');

                // Trim the value
                var trimmedValue = false;
                if (value !== "null") {
                    trimmedValue = value.trim();
                }

                if (trimmedValue) {
                    if (previousValue !== trimmedValue) {
                        // Get model to update
                        var model = this.model.get(modelId);

                        // Create new object for model
                        var data = {};

                        if (modelAttr === 'groups') {
                            groupArray.push(value);
                            data[modelAttr] = groupArray;
                        } else {
                            data[modelAttr] = value;
                        }

                        // Update model (which also updates collection)
                        model.set(data);

                        // Update on server
                        model.save(data, {
                            success : function(model, response) {
                                me.status.set('message', 'successfully updated user with login : ' + model.get('login'));
                            },
                            error: function(model, response) {
                                me.model.fetch();
                            }
                        });
                    }
                }
                $(this.widgetContainer + ' .editing').removeClass('editing');
            }
        },

        fetchModels: function() {
            var me = this;

            this.groups.fetch({
                success : function(model, response) {
                    me.model.fetch({
                    success : function(model, response) {

                        }
                    });
                }
            });
        },

        render: function() {
            var me = this;

            // Store the role / ability to add
            var role;
            var addUser = true;

            // Obtain the role
            if (squid_api.model.customer) {
                role = squid_api.model.customer.get("_role");
            }

            // Can add user rules
            if (role !== "WRITE" && role !== "OWNER") {
                addUser = false;
            }

            // Render Template
            this.$el.html(this.template({
                addUser : addUser
            }));

            // Set ID for Table Render
            var globalID;

            if (this.$el.attr("id")) {
                globalID = "#" + this.$el.attr('id');
            } else {
                console.log("No ID assigned to DOM element for User Table");
            }

            // Collection models as an array of objects
            var users = this.model.toJSON();
            var groups = this.groups.toJSON();

            // If users exist then create data table in D3
            if (users && groups) {
                var tableRows = d3.select(globalID + " tbody").selectAll("tbody")
                    .data(users)
                    .enter()
                    .append("tr")
                    .attr("data-id", function(d) {
                        return d.id.userId; //So backbone recognises the model on update
                    });

                var loginValue = tableRows.append("td")
                    .html(function(d) {
                        return "<label>" + d.login + "</label><input class='edit form-control input-sm' data-attribute='login' value='" + d.login + "'/><i class='field-icon fa fa-pencil'></i>" ;
                    })
                    .attr('class', function(d) {
                        if (d._role !== "READ") {
                            return 'user-value';
                        }
                    });

                var emailValue = tableRows.append("td")
                    .html(function(d) {
                        return "<label>" + d.email + "</label><input class='edit form-control input-sm' data-attribute='email' value='" + d.email + "'/><i class='field-icon fa fa-pencil'></i>" ;
                    })
                    .attr('class', function(d) {
                        if (d._role !== "READ") {
                            return 'user-value';
                        }
                    });

                var passWordValue = tableRows.append("td")
                    .html(function(d) {
                        return "<label>*****</label><input class='edit form-control input-sm' type='password' data-attribute='password' value='null'/><i class='field-icon fa fa-pencil'></i>" ;
                    })
                    .attr('class', function(d) {
                        if (d._role !== "READ") {
                            return 'user-value';
                        }
                    });

                var groupValues = tableRows.append("td")

                    .html(function(d) {
                        var g = d.groups;
                        var data = "";
                        var canEdit;

                        if (d._role !== "READ") {
                            canEdit = 'group-value';
                        }

                        // Groups colour logic
                        if (g) {
                            for (i=0; i<g.length; i++) {
                                if (g[i] === "superuser") {
                                    data += "<div class='red " + canEdit + "' attr-id='groupId' class='red' attr-value='" + g[i] + "'></div>";
                                } else {
                                    var pattern = /admin/;
                                    if (pattern.test(g[i])) {
                                        data += "<div class='orange " + canEdit + "' attr-id='groupId' class='orange' attr-value='" + g[i] + "'></div>";
                                    } else {
                                        data += "<div class='" + canEdit + "' attr-id='groupId' attr-value='" + g[i] + "'></div>";
                                    }
                                }
                            }
                        }
                        data += "<i class='field-icon fa fa-plus-square'></i> <select class='edit form-control input-sm' data-attribute='groups'></select>";
                        return data;
                    })
                    .attr('class', function(d) {
                        if (d._role !== "READ") {
                            return ['user-value' + ' group-section'];
                        }
                    });

                // Print group names instead of their Id's
                this.assignGroupNames();

                var actionValues = tableRows.append("td")
                    .html(function(d) {
                        if (d._role !== "READ") {
                            return "<button class='delete form-control'>Delete</button>";
                        }
                    });
            }

            // Instantiate Data Table Plugin
            this.$el.find("#squid-api-admin-widgets-user-table table").DataTable({
                "lengthChange": false,
                "paging": false
            });
        },

        assignGroupNames: function() {
            /*
                Retrieve groupId / attribute values and match with api group data
                If we have a match, print the name of the group directly as the dom el.
            */
            var groupIds = $(this.widgetContainer + ' div[attr-id="groupId"]');
            var groups = this.groups.toJSON();
            if (groupIds.length > 0) {
                for (i=0; i<groupIds.length; i++) {
                    for (var key in groups) {
                        if (groups[key].oid === $(groupIds[i]).attr('attr-value')) {
                            $(groupIds[i]).text(groups[key].name);
                        }
                    }
                    var id = $(groupIds[i]).attr('attr-value');
                }
            }
        }
    });

    return View;
}));
