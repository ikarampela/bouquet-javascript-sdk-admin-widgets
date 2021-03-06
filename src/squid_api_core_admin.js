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
