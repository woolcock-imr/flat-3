(function(){
    //-------------------------------------------------------------------------------------
    //flat permission
    var modules={
        "panel-permission":   			    {url:"$A/modules/p/permission/panel-permission.html",router:1},
        "permission-check":                 {url:"$A/modules/p/permission/permission-check.html"},
        "permission-role-login-data":       {url:"$A/modules/p/permission/permission-role-login-data.html",Table:"91000684",form_module:"permission-role-login-form"},
        "permission-role-login-form":       {url:"$A/modules/p/permission/permission-role-login-form.html",Table:"91000684"},
        "permission-role-table-group-data": {url:"$A/modules/p/permission/permission-role-table-group-data.html",Table:"91000683",form_module:"permission-role-table-group-form"},
        "permission-role-table-group-form": {url:"$A/modules/p/permission/permission-role-table-group-form.html",Table:"91000683"},
        "permission-query-data":            {url:"$A/modules/p/permission/permission-query-data.html",Table:"91000682",form_module:"permission-query-form"},
        "permission-query-form":            {url:"$A/modules/p/permission/permission-query-form.html",Table:"91000682"},
    }
    var prefix="";  for(m in modules){   $vm.module_list[prefix+m]=modules[m];   $vm.module_list[prefix+m].prefix=prefix;  }
    //-------------------------------------------------------------------------------------
    //flat app
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
    var prefix="flat-";  for(m in modules){   $vm.module_list[prefix+m]=modules[m];   $vm.module_list[prefix+m].prefix=prefix;  }
    //-------------------------------------------------------------------------------------
    //flat tasks
    var modules={
        "file-notes-data":		        {url:"$A/modules/f/flat/tasks/file-notes-data.html",Table:"20010822",form_module:"file-notes-form"},
        "file-notes-form":		        {url:"$A/modules/f/flat/tasks/file-notes-form.html",Table:"20010822"},
        
        "adverse-event-data":		    {url:"$A/modules/f/flat/tasks/adverse-event-data.html",Table:"20010824",form_module:"adverse-event-form"},
        "adverse-event-form":		    {url:"$A/modules/f/flat/tasks/adverse-event-form.html",Table:"20010824"},
        
        "concomitant-medication-data":	{url:"$A/modules/f/flat/tasks/concomitant-medication-data.html",Table:"20010826",form_module:"concomitant-medication-form"},
        "concomitant-medication-form":	{url:"$A/modules/f/flat/tasks/concomitant-medication-form.html",Table:"20010826"},
        
        "s-visit-date-data":		    {url:"$A/modules/f/flat/tasks/visit-date-data.html",Table:"20010827",form_module:"s-visit-date-form"},
        "s-visit-date-form":		    {url:"$A/modules/f/flat/tasks/visit-date-form.html",Table:"20010827"},
        
        "s-bloods-data":		        {url:"$A/modules/f/flat/tasks/bloods-data.html",Table:"91000710",form_module:"s-bloods-form"},
        "s-bloods-form":		        {url:"$A/modules/f/flat/tasks/bloods-form.html",Table:"91000710"},

        "s-psg-upload-data":		        {url:"$A/modules/f/flat/tasks/psg-300-data.html",Table:"91000711",form_module:"s-psg-upload-form"},
        "s-psg-upload-form":		        {url:"$A/modules/f/flat/tasks/psg-300-form.html",Table:"91000711"},
        
        /*
        "s-anthropometry-data":		    {url:"$A/modules/f/flat/tasks/anthropometry-data.html",Table:"20010829",form_module:"s-anthropometry-form"},
        "s-anthropometry-form":		    {url:"$A/modules/f/flat/tasks/anthropometry-form.html",Table:"20010829",task_name:"Anthropometry"},
        
        "s-ess-data":                   {url:"$A/modules/f/flat/tasks/epworth-sleepiness-scale-data.html",Table:"20010831",form_module:"s-ess-form"},
        "s-ess-form":	                {url:"$A/modules/f/flat/tasks/epworth-sleepiness-scale-form.html",Table:"20010831",task_name:"Epworth Sleepiness Scale"},
        */
       

        "b-visit-date-data":		    {url:"$A/modules/f/flat/tasks/visit-date-data.html",Table:"20010832",form_module:"b-visit-date-form"},
        "b-visit-date-form":		    {url:"$A/modules/f/flat/tasks/visit-date-form.html",Table:"20010832"},
        
        "b-visit-info-data":		    {url:"$A/modules/f/flat/tasks/visit-info-data.html",Table:"91000712",form_module:"b-visit-info-form"},
        "b-visit-info-form":		    {url:"$A/modules/f/flat/tasks/visit-info-form.html",Table:"91000712"},
        "w1-visit-info-data":		    {url:"$A/modules/f/flat/tasks/visit-info-data.html",Table:"91000713",form_module:"w1-visit-info-form"},
        "w1-visit-info-form":		    {url:"$A/modules/f/flat/tasks/visit-info-form.html",Table:"91000713"},
        "w2-visit-info-data":		    {url:"$A/modules/f/flat/tasks/visit-info-data.html",Table:"91000714",form_module:"w2-visit-info-form"},
        "w2-visit-info-form":		    {url:"$A/modules/f/flat/tasks/visit-info-form.html",Table:"91000714"},
        "m1-visit-info-data":		    {url:"$A/modules/f/flat/tasks/visit-info-data.html",Table:"91000715",form_module:"m1-visit-info-form"},
        "m1-visit-info-form":		    {url:"$A/modules/f/flat/tasks/visit-info-form.html",Table:"91000715"},
        "m2-visit-info-data":		    {url:"$A/modules/f/flat/tasks/visit-info-data.html",Table:"91000716",form_module:"m2-visit-info-form"},
        "m2-visit-info-form":		    {url:"$A/modules/f/flat/tasks/visit-info-form.html",Table:"91000716"},
        "m3-visit-info-data":		    {url:"$A/modules/f/flat/tasks/visit-info-data.html",Table:"91000717",form_module:"m3-visit-info-form"},
        "m3-visit-info-form":		    {url:"$A/modules/f/flat/tasks/visit-info-form.html",Table:"91000717"},
        "m5-visit-info-data":		    {url:"$A/modules/f/flat/tasks/visit-info-data.html",Table:"91000718",form_module:"m5-visit-info-form"},
        "m5-visit-info-form":		    {url:"$A/modules/f/flat/tasks/visit-info-form.html",Table:"91000718"},
        "m7-visit-info-data":		    {url:"$A/modules/f/flat/tasks/visit-info-data.html",Table:"91000719",form_module:"m7-visit-info-form"},
        "m7-visit-info-form":		    {url:"$A/modules/f/flat/tasks/visit-info-form.html",Table:"91000719"},
        "m9-visit-info-data":		    {url:"$A/modules/f/flat/tasks/visit-info-data.html",Table:"91000720",form_module:"m9-visit-info-form"},
        "m9-visit-info-form":		    {url:"$A/modules/f/flat/tasks/visit-info-form.html",Table:"91000720"},
        "m12-visit-info-data":		    {url:"$A/modules/f/flat/tasks/visit-info-data.html",Table:"91000721",form_module:"m12-visit-info-form"},
        "m12-visit-info-form":		    {url:"$A/modules/f/flat/tasks/visit-info-form.html",Table:"91000721"},

        "b-dxa-data":		    {url:"$A/modules/f/flat/tasks/dxa-data.html",Table:"91000722",form_module:"b-dxa-form"},
        "b-dxa-form":		    {url:"$A/modules/f/flat/tasks/dxa-form.html",Table:"91000722",task_name:"DXA"},
        "m3-dxa-data":		    {url:"$A/modules/f/flat/tasks/dxa-data.html",Table:"91000723",form_module:"m3-dxa-form"},
        "m3-dxa-form":		    {url:"$A/modules/f/flat/tasks/dxa-form.html",Table:"91000723",task_name:"DXA"},
        "m12-dxa-data":		    {url:"$A/modules/f/flat/tasks/dxa-data.html",Table:"91000724",form_module:"m12-dxa-form"},
        "m12-dxa-form":		    {url:"$A/modules/f/flat/tasks/dxa-form.html",Table:"91000724",task_name:"DXA"},


        "b-anthropometry-data":		    {url:"$A/modules/f/flat/tasks/anthropometry-data.html",Table:"20010833",form_module:"b-anthropometry-form"},
        "b-anthropometry-form":		    {url:"$A/modules/f/flat/tasks/anthropometry-form.html",Table:"20010833",task_name:"Anthropometry"},
        
        "b-minmod-and-bloods-data":		    {url:"$A/modules/f/flat/tasks/minmod-and-bloods-data.html",Table:"91000726",form_module:"b-minmod-and-bloods-form"},
        "b-minmod-and-bloods-form":		    {url:"$A/modules/f/flat/tasks/minmod-and-bloods-form.html",Table:"91000726",task_name:"b-minmod-and-bloods"},

        "b-food-diary-data":		    {url:"$A/modules/f/flat/tasks/food-diary-data.html",Table:"91000727",form_module:"b-food-diary-form"},
        "b-food-diary-form":		    {url:"$A/modules/f/flat/tasks/food-diary-form.html",Table:"91000727",task_name:"b-food-diary"},

        "b-24hr-bp-data":		    {url:"$A/modules/f/flat/tasks/24hr-bp-data.html",Table:"91000728",form_module:"b-24hr-bp-form"},
        "b-24hr-bp-form":		    {url:"$A/modules/f/flat/tasks/24hr-bp-form.html",Table:"91000728",task_name:"b-24hr_bp"},


        "b-ess-data":                   {url:"$A/modules/f/flat/tasks/epworth-sleepiness-scale-data.html",Table:"20010836",form_module:"b-ess-form"},
        "b-ess-form":	                {url:"$A/modules/f/flat/tasks/epworth-sleepiness-scale-form.html",Table:"20010836",task_name:"Epworth Sleepiness Scale"},
        
        "b-fosq-data":                  {url:"$A/modules/f/flat/tasks/fosq-data.html",Table:"20010838",form_module:"b-fosq-form"},
        "b-fosq-form":	                {url:"$A/modules/f/flat/tasks/fosq-form.html",Table:"20010838",task_name:"Functional Outcomes of Sleep"},

        "b-dass-data":                  {url:"$A/modules/f/flat/tasks/depression-anxiety-stress-scales-data.html",Table:"20010839",form_module:"b-dass-form"},
        "b-dass-form":	                {url:"$A/modules/f/flat/tasks/depression-anxiety-stress-scales-form.html",Table:"20010839",task_name:"dass"},
        
        "b-iwqlq-data":                 {url:"$A/modules/f/flat/tasks/iwqlq-data.html",Table:"20010841",form_module:"b-iwqlq-form"},
        "b-iwqlq-form":	                {url:"$A/modules/f/flat/tasks/iwqlq-form.html",Table:"20010841",task_name:"iwqlq"},
        
        "b-ipaq-data":                  {url:"$A/modules/f/flat/tasks/ipaq-data.html",Table:"20010843",form_module:"b-ipaq-form"},
        "b-ipaq-form":	                {url:"$A/modules/f/flat/tasks/ipaq-form.html",Table:"20010843",task_name:"ipaq"},

        "m2-visit-date-data":		    {url:"$A/modules/f/flat/tasks/visit-date-data.html",Table:"20010847",form_module:"m2-visit-date-form"},
        "m2-visit-date-form":		    {url:"$A/modules/f/flat/tasks/visit-date-form.html",Table:"20010847"},
    }
    var prefix="flat-";  for(m in modules){   $vm.module_list[prefix+m]=modules[m];   $vm.module_list[prefix+m].prefix=prefix;  }
    //-------------------------------------------------------------------------------------
})();
