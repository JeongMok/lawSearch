(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("Form2");
                this.set_classname("Form2");
                this.set_titletext("Form2");
                this._setFormPosition(0,0,1024,768);
            }
            this.style.set_background("lightblue");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "25", "81", "123", "47", null, null, this);
            obj.set_taborder("2");
            obj.set_text("팝업창 객체 접근\r\n(modeless)");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "153", "81", "123", "47", null, null, this);
            obj.set_taborder("3");
            obj.set_text("팝업창 닫기");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "25", "26", "183", "30", null, null, this);
            obj.set_taborder("4");
            obj.set_value("Form2 TEXT");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "33", "225", "251", "83", null, null, this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);
            obj = new Button("Button03", "absolute", "66", "26", "103", "32", null, null, this.Div00);
            obj.set_taborder("0");
            obj.set_text("폼 찾기");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "33", "169", "93", "32", null, null, this);
            obj.set_taborder("6");
            obj.set_text("폼 찾기");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00", "absolute", "32", "323", "249", "106", null, null, this);
            obj.set_taborder("7");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.Tab00);
            obj.set_text("tabpage1");
            this.Tab00.addChild(obj.name, obj);
            obj = new Button("Button03", "absolute", "65", "26", "104", "32", null, null, this.Tab00.tabpage1);
            obj.set_taborder("0");
            obj.set_text("폼 찾기");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "32", "463", "338", "50", null, null, this);
            obj.set_taborder("8");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"107\"/><Column size=\"106\"/><Column size=\"123\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"comp\"/><Cell col=\"1\" text=\"comp.parent\"/><Cell col=\"2\" text=\"comp.parent.Edit00\"/></Band><Band id=\"body\"><Cell expr=\"expr:comp\"/><Cell col=\"1\" expr=\"expr:comp.parent\"/><Cell col=\"2\" expr=\"expr:comp.parent.Edit00.value\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 251, 83, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.set_text("Div00");
            		p.style.set_border("1 solid #808080ff");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab00.tabpage1,
            	//-- Layout function
            	function(p) {
            		p.set_text("tabpage1");

            	}
            );
            this.Tab00.tabpage1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Form2");
            		p.set_titletext("Form2");
            		p.style.set_background("lightblue");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Form2.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	alert("application.popupframes['modeless'].form.Edit00.value : [" + application.popupframes["modeless"].form.Edit00.value + "]");
        }

        this.Button01_onclick = function(obj,e)
        {
        	application.popupframes["modeless"].form.close();
        }

        this.Button02_onclick = function(obj,e)
        {
        	alert("obj.parent : " + obj.parent);
        }

        this.Div00_Button03_onclick = function(obj,e)
        {
        	alert("obj.parent.parent : " + obj.parent.parent);
        }

        this.Tab00_tabpage1_Button03_onclick = function(obj,e)
        {
        	alert("obj.parent.parent.parent : " + obj.parent.parent.parent);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Div00.Button03.addEventHandler("onclick", this.Div00_Button03_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);
            this.Tab00.tabpage1.Button03.addEventHandler("onclick", this.Tab00_tabpage1_Button03_onclick, this);

        };

        this.loadIncludeScript("Form2.xfdl");

       
    };
}
)();
