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
                this.set_name("Form1_Pop");
                this.set_classname("Form1_Pop");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,400,400);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset01", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "3%", "182", null, "37", "65.75%", null, this);
            obj.set_taborder("1");
            obj.set_text("부모폼의 객체 접근");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "3%", "55", null, "121", "5.5%", null, this);
            obj.set_taborder("2");
            obj.set_binddataset("Dataset01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:Column0\"/><Cell col=\"1\" edittype=\"normal\" style=\"align: ;\" text=\"bind:Column1\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:Column2\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "3%", "222", null, "37", "65.75%", null, this);
            obj.set_taborder("3");
            obj.set_text("부모폼의 객체 접근\r\n(Div.Tab)");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "35%", "182", null, "37", "33.75%", null, this);
            obj.set_taborder("4");
            obj.set_text("부모폼의 객체 접근\r\n(Div.Div)");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "35%", "222", null, "37", "33.75%", null, this);
            obj.set_taborder("5");
            obj.set_text("부모폼의 함수 호출");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "3.25%", "18", null, "33", "7.75%", null, this);
            obj.set_taborder("6");
            obj.set_text("팝업창의 Grid에 bind된 데이터셋이 없을 경우\r\n상위폼의 데이터셋으로 bind가 됩니다. ");
            this.addChild(obj.name, obj);

            obj = new Button("Button07", "absolute", "3.25%", "262", null, "37", "65.75%", null, this);
            obj.set_taborder("10");
            obj.set_text("부모폼으로 값 전달");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 400, 400, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Form1_Pop");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Form2_Pop.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	alert( "this.opener.Edit00.value : [" + this.opener.Edit00.value +"]");
        }

        this.Button01_onclick = function(obj,e)
        {
        	alert( "this.opener.Div00.Tab00.tabpage1.Edit00.value : [" + this.opener.Div00.Tab00.tabpage1.Edit00.value +"]");
        }

        this.Button02_onclick = function(obj,e)
        {
        	alert( "this.opener.Div00.Div00.Edit00.value : [" + this.opener.Div00.Div00.Edit00.value +"]");
        }

        this.Button03_onclick = function(obj,e)
        {
        	this.opener.fn_test("xxx");
        }

        this.Form1_Pop_onload = function(obj,e)
        {
        	alert("부모폼에서 전달한 값 \n this.parent.mode : [" + this.parent.mode +"]");
        	this.set_titletext(this.parent.mode);
        	alert("부모폼에서 전달한 데이터셋 \n this.parent.ds : \n" + this.parent.ds.saveXML());
        	this.Dataset01.copyData(this.parent.ds);	
        }

        this.Button07_onclick = function(obj,e)
        {
        	this.close("xxxxxxxx");	
        }

        this.Button04_onclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.Form1_Pop_onload, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);
            this.Button03.addEventHandler("onclick", this.Button03_onclick, this);
            this.Button07.addEventHandler("onclick", this.Button07_onclick, this);

        };

        this.loadIncludeScript("Form2_Pop.xfdl");

       
    };
}
)();
