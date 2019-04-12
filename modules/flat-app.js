(function(){
    var modules={
        "panel-main":                       {url:"$A/modules/f/flat/panel-main.html",router:1},
        "panel-child": 		                {url:"$A/modules/f/flat/panel-child.html"},

        "randomisation-data":		        {url:"$A/modules/f/flat/randomisation-data.html",Table:"20010891",form_module:"randomisation-form"},
        "randomisation-form":		        {url:"$A/modules/f/flat/randomisation-form.html",Table:"20010891"},
        "participant-data":     	        {url:"$A/modules/f/flat/participant-data.html", Table:"20010817",
                                                form_module:"participant-form",
                                                panel_child:"panel-child",
                                                online_questionnaire_setup:"online-questionnaire-setup"
                                            },
        "participant-form":     	        {url:"$A/modules/f/flat/participant-form.html", Table:"20010817"},
        "edc-notes-data":	  		        {url:"$A/modules/f/flat/edc-notes-data.html",Table:"20010818",form_module:"edc-notes-form"},
        "edc-notes-form":	  		        {url:"$A/modules/f/flat/edc-notes-form.html",Table:"20010818"},
        "online-questionnaire-setup": 	    {url:"$A/modules/f/flat/online-questionnaire-setup.html",Table:"20010817"},
        "online-questionnaire-panel":       {url:"$A/modules/f/flat/online-questionnaire-panel.html"},
        "online-questionnaire-login":       {url:"$A/modules/f/flat/online-questionnaire-login.html"},
        "job-tracking-data":	  		    {url:"$A/modules/j/job-tracking-data.html",Table:"91000685",form_module:"job-tracking-form"},
        "job-tracking-form":	  		    {url:"$A/modules/j/job-tracking-form.html",Table:"91000685"},
    }
    var prefix="flat-";
    for(m in modules){
        $vm.module_list[prefix+m]=modules[m];
        $vm.module_list[prefix+m].prefix=prefix;
    }
})();
