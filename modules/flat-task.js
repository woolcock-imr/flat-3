(function(){
    var modules={
        "file-notes-data":		        {url:"$A/modules/f/flat/tasks/file-notes-data.html",Table:"20010822",form_module:"file-notes-form"},
        "file-notes-form":		        {url:"$A/modules/f/flat/tasks/file-notes-form.html",Table:"20010822"},
        
        "adverse-event-data":		    {url:"$A/modules/f/flat/tasks/adverse-event-data.html",Table:"20010824",form_module:"adverse-event-form"},
        "adverse-event-form":		    {url:"$A/modules/f/flat/tasks/adverse-event-form.html",Table:"20010824"},
        
        "concomitant-medication-data":	{url:"$A/modules/f/flat/tasks/concomitant-medication-data.html",Table:"20010826",form_module:"concomitant-medication-form"},
        "concomitant-medication-form":	{url:"$A/modules/f/flat/tasks/concomitant-medication-form.html",Table:"20010826"},
        
        "s-visit-date-data":		    {url:"$A/modules/f/flat/tasks/visit-date-data.html",Table:"20010827",form_module:"s-visit-date-form"},
        "s-visit-date-form":		    {url:"$A/modules/f/flat/tasks/visit-date-form.html",Table:"20010827"},
        
        "s-anthropometry-data":		    {url:"$A/modules/f/flat/tasks/anthropometry-data.html",Table:"20010829",form_module:"s-anthropometry-form"},
        "s-anthropometry-form":		    {url:"$A/modules/f/flat/tasks/anthropometry-form.html",Table:"20010829",task_name:"Anthropometry"},
        
        "s-ess-data":                   {url:"$A/modules/f/flat/tasks/epworth-sleepiness-scale-data.html",Table:"20010831",form_module:"s-ess-form"},
        "s-ess-form":	                {url:"$A/modules/f/flat/tasks/epworth-sleepiness-scale-form.html",Table:"20010831",task_name:"Epworth Sleepiness Scale"},

        "b-visit-date-data":		    {url:"$A/modules/f/flat/tasks/visit-date-data.html",Table:"20010832",form_module:"b-visit-date-form"},
        "b-visit-date-form":		    {url:"$A/modules/f/flat/tasks/visit-date-form.html",Table:"20010832"},

        "b-anthropometry-data":		    {url:"$A/modules/f/flat/tasks/anthropometry-data.html",Table:"20010833",form_module:"b-anthropometry-form"},
        "b-anthropometry-form":		    {url:"$A/modules/f/flat/tasks/anthropometry-form.html",Table:"20010833",task_name:"Anthropometry"},
        
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


        
        /*

        "s-isi-data":		            {url:"$A/modules/f/flat/tasks/insomnia-severity-index-data.html",Table:"91000633",form_module:"s-isi-form"},
        "s-isi-form":		            {url:"$A/modules/f/flat/tasks/insomnia-severity-index-form.html",Table:"91000633",task_name:"Insomnia severity index"},

        "s-actigraphy-data":		    {url:"$A/modules/f/flat/tasks/actigraphy-data.html",Table:"91000634",form_module:"s-actigraphy-form"},
        "s-actigraphy-form":		    {url:"$A/modules/f/flat/tasks/actigraphy-form.html",Table:"91000634"},
        
        "p1-ksd-data":		            {url:"$A/modules/f/flat/tasks/file-upload-data.html",Table:"91000638",form_module:"p1-ksd-form"},
        "p1-ksd-form":		            {url:"$A/modules/f/flat/tasks/file-upload-form.html",Table:"91000638"},
        "p1-actigraphy-data":		    {url:"$A/modules/f/flat/tasks/actigraphy-data.html",Table:"91000639",form_module:"p1-actigraphy-form"},
        "p1-actigraphy-form":		    {url:"$A/modules/f/flat/tasks/actigraphy-form.html",Table:"91000639"},
        "p2-ksd-data":		            {url:"$A/modules/f/flat/tasks/karolinska-sleepiness-scale-data.html",Table:"91000640",form_module:"p2-ksd-form"},
        "p2-ksd-form":		            {url:"$A/modules/f/flat/tasks/karolinska-sleepiness-scale-form.html",Table:"91000640"},
        "p2-actigraphy-data":		    {url:"$A/modules/f/flat/tasks/actigraphy-data.html",Table:"91000641",form_module:"p2-actigraphy-form"},
        "p2-actigraphy-form":		    {url:"$A/modules/f/flat/tasks/actigraphy-form.html",Table:"91000641"},
        
        "t1-visit-date-data":		    {url:"$A/modules/f/flat/tasks/visit-date-data.html",Table:"91000642",form_module:"t1-visit-date-form"},
        "t1-visit-date-form":		    {url:"$A/modules/f/flat/tasks/visit-date-form.html",Table:"91000642"},
        "t2-visit-date-data":		    {url:"$A/modules/f/flat/tasks/visit-date-data.html",Table:"91000643",form_module:"t2-visit-date-form"},
        "t2-visit-date-form":		    {url:"$A/modules/f/flat/tasks/visit-date-form.html",Table:"91000643"},
        
        "t1-sds-data":                  {url:"$A/modules/f/flat/tasks/salivary-drug-screen-data.html",Table:"91000644",form_module:"t1-sds-form"},
        "t1-sds-form":	                {url:"$A/modules/f/flat/tasks/salivary-drug-screen-form.html",Table:"91000644"},
        "t2-sds-data":	                {url:"$A/modules/f/flat/tasks/salivary-drug-screen-data.html",Table:"91000645",form_module:"t2-sds-form"},
        "t2-sds-form":	                {url:"$A/modules/f/flat/tasks/salivary-drug-screen-form.html",Table:"91000645"},
      
        "t1-isi-data":                  {url:"$A/modules/f/flat/tasks/insomnia-severity-index-data.html",Table:"91000647",form_module:"t1-isi-form"},
        "t1-isi-form":	                {url:"$A/modules/f/flat/tasks/insomnia-severity-index-form.html",Table:"91000647"},
        "t2-isi-data":	                {url:"$A/modules/f/flat/tasks/insomnia-severity-index-data.html",Table:"91000648",form_module:"t2-isi-form"},
        "t2-isi-form":	                {url:"$A/modules/f/flat/tasks/insomnia-severity-index-form.html",Table:"91000648"},
        
        "t1-dass-data":                 {url:"$A/modules/f/flat/tasks/depression-anxiety-stress-scales-data.html",Table:"91000649",form_module:"t1-dass-form"},
        "t1-dass-form":	                {url:"$A/modules/f/flat/tasks/depression-anxiety-stress-scales-form.html",Table:"91000649",task_name:"dass"},
        "t2-dass-data":	                {url:"$A/modules/f/flat/tasks/depression-anxiety-stress-scales-data.html",Table:"91000650",form_module:"t2-dass-form"},
        "t2-dass-form":	                {url:"$A/modules/f/flat/tasks/depression-anxiety-stress-scales-form.html",Table:"91000650",task_name:"dass"},
        
        "t1-psqi-data":                 {url:"$A/modules/f/flat/tasks/pittsburgh-sleep-quality-index-data.html",Table:"91000651",form_module:"t1-psqi-form"},
        "t1-psqi-form":	                {url:"$A/modules/f/flat/tasks/pittsburgh-sleep-quality-index-form.html",Table:"91000651",task_name:"Pittsburgh Sleep Quality Index"},
        "t2-psqi-data":	                {url:"$A/modules/f/flat/tasks/pittsburgh-sleep-quality-index-data.html",Table:"91000652",form_module:"t2-psqi-form"},
        "t2-psqi-form":	                {url:"$A/modules/f/flat/tasks/pittsburgh-sleep-quality-index-form.html",Table:"91000652",task_name:"Pittsburgh Sleep Quality Index"},
        
        "t1-ess-data":                  {url:"$A/modules/f/flat/tasks/epworth-sleepiness-scale-data.html",Table:"91000653",form_module:"t1-ess-form"},
        "t1-ess-form":	                {url:"$A/modules/f/flat/tasks/epworth-sleepiness-scale-form.html",Table:"91000653",task_name:"Epworth Sleepiness Scale"},
        "t2-ess-data":	                {url:"$A/modules/f/flat/tasks/epworth-sleepiness-scale-data.html",Table:"91000654",form_module:"t2-ess-form"},
        "t2-ess-form":	                {url:"$A/modules/f/flat/tasks/epworth-sleepiness-scale-form.html",Table:"91000654",task_name:"Epworth Sleepiness Scale"},

        "s-iecc-data":	                {url:"$A/modules/f/flat/tasks/inclusion-and-exclusion-criteria-checklist-data.html",Table:"91000655",form_module:"s-iecc-form"},
        "s-iecc-form":	                {url:"$A/modules/f/flat/tasks/inclusion-and-exclusion-criteria-checklist-form.html",Table:"91000655"},
        
        "demographics-data":	        {url:"$A/modules/f/flat/tasks/demographics-data.html",Table:"91000656",form_module:"demographics-form"},
        "demographics-form":	        {url:"$A/modules/f/flat/tasks/demographics-form.html",Table:"91000656"},
        
        "s-ecg-upload-data":	        {url:"$A/modules/f/flat/tasks/ecg-report-upload-data.html",Table:"91000657",form_module:"s-ecg-upload-form"},
        "s-ecg-upload-form":	        {url:"$A/modules/f/flat/tasks/ecg-report-upload-form.html",Table:"91000657"},
        "s-brain-mri-upload-data":	    {url:"$A/modules/f/flat/tasks/brain-mri-report-upload-data.html",Table:"91000658",form_module:"s-brain-mri-upload-form"},
        "s-brain-mri-upload-form":	    {url:"$A/modules/f/flat/tasks/brain-mri-report-upload-form.html",Table:"91000658"},
        "blood-upload-data":	        {url:"$A/modules/f/flat/tasks/blood-analysis-upload-data.html",Table:"91000659",form_module:"blood-upload-form"},
        "blood-upload-form":	        {url:"$A/modules/f/flat/tasks/blood-analysis-upload-form.html",Table:"91000659"},
        
        "word-pairs-set1-evening":	    {url:"$A/modules/f/flat/word-pairs/set1-evening.html"},
        "word-pairs-set2-evening":	    {url:"$A/modules/f/flat/word-pairs/set2-evening.html"},
        "word-pairs-set1-morning":	    {url:"$A/modules/f/flat/word-pairs/set1-morning.html"},
        "word-pairs-set2-morning":	    {url:"$A/modules/f/flat/word-pairs/set2-morning.html"},
        
        "t1-ft6-data":	                {url:"$A/modules/f/flat/tasks/finger-tapping-6-data.html",Table:"91000660",form_module:"t1-ft6-form",quest_module:"t1-ft6-quest"},
        "t1-ft6-form":	                {url:"$A/modules/f/flat/tasks/finger-tapping-6-form.html",Table:"91000660"},
        "t1-ft6-quest":	                {url:"$A/modules/f/flat/tasks/finger-tapping-6-quest.html",Table:"91000660",task_name:"ft"},
        
        "t2-ft6-data":	                {url:"$A/modules/f/flat/tasks/finger-tapping-6-data.html",Table:"91000661",form_module:"t2-ft6-form",quest_module:"t1-ft6-quest"},
        "t2-ft6-form":	                {url:"$A/modules/f/flat/tasks/finger-tapping-6-form.html",Table:"91000661"},
        "t2-ft6-quest":	                {url:"$A/modules/f/flat/tasks/finger-tapping-6-quest.html",Table:"91000661",task_name:"ft"},
        
        "t1-stroop-text-data":	        {url:"$A/modules/f/flat/tasks/stroop-text-data.html",Table:"91000662",form_module:"t1-stroop-text-form",quest_module:"t1-stroop-text-quest"},
        "t1-stroop-text-form":	        {url:"$A/modules/f/flat/tasks/stroop-text-form.html",Table:"91000662"},
        "t1-stroop-text-quest":	        {url:"$A/modules/f/flat/tasks/stroop-text-quest.html",Table:"91000662",task_name:"Stroop text"},
        
        "t2-stroop-text-data":	        {url:"$A/modules/f/flat/tasks/stroop-text-data.html",Table:"91000663",form_module:"t2-stroop-text-form",quest_module:"t1-stroop-text-quest"},
        "t2-stroop-text-form":	        {url:"$A/modules/f/flat/tasks/stroop-text-form.html",Table:"91000663"},
        "t2-stroop-text-quest":	        {url:"$A/modules/f/flat/tasks/stroop-text-quest.html",Table:"91000663",task_name:"Stroop text"},
        
        "t1-stroop-color-data":	        {url:"$A/modules/f/flat/tasks/stroop-color-data.html",Table:"91000664",form_module:"t1-stroop-color-form",quest_module:"t1-stroop-color-quest"},
        "t1-stroop-color-form":	        {url:"$A/modules/f/flat/tasks/stroop-color-form.html",Table:"91000664"},
        "t1-stroop-color-quest":	    {url:"$A/modules/f/flat/tasks/stroop-color-quest.html",Table:"91000664",task_name:"Stroop color"},
        
        "t2-stroop-color-data":	        {url:"$A/modules/f/flat/tasks/stroop-color-data.html",Table:"91000665",form_module:"t2-stroop-color-form",quest_module:"t1-stroop-color-quest"},
        "t2-stroop-color-form":	        {url:"$A/modules/f/flat/tasks/stroop-color-form.html",Table:"91000665"},
        "t2-stroop-color-quest":	    {url:"$A/modules/f/flat/tasks/stroop-color-quest.html",Table:"91000665",task_name:"Stroop color"},
        
        "t1-nback1-data":	            {url:"$A/modules/f/flat/tasks/nback1-data.html",Table:"91000666",form_module:"t1-nback1-form",quest_module:"t1-nback1-quest"},
        "t1-nback1-form":	            {url:"$A/modules/f/flat/tasks/nback1-form.html",Table:"91000666"},
        "t1-nback1-quest":	            {url:"$A/modules/f/flat/tasks/nback1-quest.html",Table:"91000666",task_name:"1-back"},
        "t2-nback1-data":	            {url:"$A/modules/f/flat/tasks/nback1-data.html",Table:"91000667",form_module:"t2-nback1-form",quest_module:"t2-nback1-quest"},
        "t2-nback1-form":	            {url:"$A/modules/f/flat/tasks/nback1-form.html",Table:"91000667"},
        "t2-nback1-quest":	            {url:"$A/modules/f/flat/tasks/nback1-quest.html",Table:"91000667",task_name:"1-back"},
        
        "t1-nback2-data":	            {url:"$A/modules/f/flat/tasks/nback2-data.html",Table:"91000668",form_module:"t1-nback2-form",quest_module:"t1-nback2-quest"},
        "t1-nback2-form":	            {url:"$A/modules/f/flat/tasks/nback2-form.html",Table:"91000668"},
        "t1-nback2-quest":	            {url:"$A/modules/f/flat/tasks/nback2-quest.html",Table:"91000668",task_name:"2-back"},
        "t2-nback2-data":	            {url:"$A/modules/f/flat/tasks/nback2-data.html",Table:"91000669",form_module:"t2-nback2-form",quest_module:"t2-nback2-quest"},
        "t2-nback2-form":	            {url:"$A/modules/f/flat/tasks/nback2-form.html",Table:"91000669"},
        "t2-nback2-quest":	            {url:"$A/modules/f/flat/tasks/nback2-quest.html",Table:"91000669",task_name:"2-back"},
        
        "t1-dsdu-data":		            {url:"$A/modules/f/flat/tasks/file-upload-data.html",Table:"91000670",form_module:"t1-dsdu-form"},
        "t1-dsdu-form":		            {url:"$A/modules/f/flat/tasks/file-upload-form.html",Table:"91000670"},
        "t2-dsdu-data":		            {url:"$A/modules/f/flat/tasks/file-upload-data.html",Table:"91000671",form_module:"t2-dsdu-form"},
        "t2-dsdu-form":		            {url:"$A/modules/f/flat/tasks/file-upload-form.html",Table:"91000671"},

        "t1-lseq-data":		            {url:"$A/modules/f/flat/tasks/lseq-data.html",Table:"91000673",form_module:"t1-lseq-form"},
        "t1-lseq-form":		            {url:"$A/modules/f/flat/tasks/lseq-form.html",Table:"91000673",task_name:"lseq"},
        "t2-lseq-data":		            {url:"$A/modules/f/flat/tasks/lseq-data.html",Table:"91000674",form_module:"t2-lseq-form"},
        "t2-lseq-form":		            {url:"$A/modules/f/flat/tasks/lseq-form.html",Table:"91000674",task_name:"lseq"},
        
        "t1-disrs-data":		        {url:"$A/modules/f/flat/tasks/disrs-data.html",Table:"91000675",form_module:"t1-disrs-form"},
        "t1-disrs-form":		        {url:"$A/modules/f/flat/tasks/disrs-form.html",Table:"91000675",task_name:"disrs"},
        "t2-disrs-data":		        {url:"$A/modules/f/flat/tasks/disrs-data.html",Table:"91000676",form_module:"t2-disrs-form"},
        "t2-disrs-form":		        {url:"$A/modules/f/flat/tasks/disrs-form.html",Table:"91000676",task_name:"disrs"},

        "medical-history-data":		    {url:"$A/modules/f/flat/tasks/file-upload-data.html",Table:"91000677",form_module:"medical-history-form"},
        "medical-history-form":		    {url:"$A/modules/f/flat/tasks/file-upload-form.html",Table:"91000677"},
        
        "s-urinary-drug-screen-data":		{url:"$A/modules/f/flat/tasks/urinary-drug-screen-data.html",Table:"91000679",form_module:"s-urinary-drug-screen-form"},
        "s-urinary-drug-screen-form":		{url:"$A/modules/f/flat/tasks/urinary-drug-screen-form.html",Table:"91000679"},


        "t1-kss-data":		        {url:"$A/modules/f/flat/tasks/karolinska-sleepiness-scale-data.html",Table:"91000680",form_module:"t1-kss-form"},
        "t1-kss-form":		        {url:"$A/modules/f/flat/tasks/karolinska-sleepiness-scale-form.html",Table:"91000680",task_name:"Karolinska Sleepiness Scale"},
        "t2-kss-data":		        {url:"$A/modules/f/flat/tasks/karolinska-sleepiness-scale-data.html",Table:"91000681",form_module:"t2-kss-form"},
        "t2-kss-form":		        {url:"$A/modules/f/flat/tasks/karolinska-sleepiness-scale-form.html",Table:"91000681",task_name:"Karolinska Sleepiness Scale"},
        */

    }
    var prefix="flat-";
    for(m in modules){
        $vm.module_list[prefix+m]=modules[m];
        $vm.module_list[prefix+m].prefix=prefix;
    }
})();
