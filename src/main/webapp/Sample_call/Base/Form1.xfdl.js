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
                this.set_name("Form1");
                this.set_classname("Form1");
                this.set_titletext("Form1");
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
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">투비소프트</Col><Col id=\"Column1\">서울시 강남구 삼성동</Col><Col id=\"Column2\">1588-7895</Col><Col id=\"Column3\">Nexacro</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset01", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">A</Col><Col id=\"Column1\">B</Col><Col id=\"Column2\">C</Col><Col id=\"Column3\">D</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "2.15%", "19", null, "31", "70.61%", null, this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "23", "52", "362", "50", null, null, this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" style=\"align:left middle;\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "22", "270", "179", "37", null, null, this);
            obj.set_taborder("2");
            obj.set_text("팝업창 호출 (modeless)");
            obj.style.set_padding("0 0 0 3");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "214", "270", "163", "37", null, null, this);
            obj.set_taborder("3");
            obj.set_text("팝업창 호출 (modal)");
            obj.style.set_padding("0 0 0 3");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "23", "9", "183", "30", null, null, this);
            obj.set_taborder("4");
            obj.set_value("Form1 TEXT");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "21", "120", "359", "126", null, null, this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);
            obj = new Tab("Tab00", "absolute", "9", "6", "196", "99", null, null, this.Div00);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.style.set_border("1 solid #808080ff");
            this.Div00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.Div00.Tab00);
            obj.set_text("tabpage1");
            this.Div00.Tab00.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "10", "7", "107", "25", null, null, this.Div00.Tab00.tabpage1);
            obj.set_taborder("0");
            obj.set_value("tabpage TEXT");
            this.Div00.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "213", "36", "128", "69", null, null, this.Div00);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.style.set_border("1 solid #808080ff");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "7", "6", "109", "23", null, null, this.Div00.Div00);
            obj.set_taborder("0");
            obj.set_value("Div TEXT");
            this.Div00.Div00.addChild(obj.name, obj);

            obj = new Button("Button05", "absolute", "214", "355", "164", "37", null, null, this);
            obj.set_taborder("6");
            obj.set_text("글로벌 데이터셋 접근");
            obj.style.set_padding("0 0 0 3");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Button("Button06", "absolute", "214", "397", "164", "37", null, null, this);
            obj.set_taborder("7");
            obj.set_text("글로벌 변수 접근");
            obj.style.set_padding("0 0 0 3");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "22", "355", "180", "37", null, null, this);
            obj.set_taborder("8");
            obj.set_text("LeftFrame의 객체 접근");
            obj.style.set_padding("0 0 0 3");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "22", "397", "180", "37", null, null, this);
            obj.set_taborder("9");
            obj.set_text("TopFrame의 객체 접근");
            obj.style.set_padding("0 0 0 3");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "22", "440", "180", "37", null, null, this);
            obj.set_taborder("10");
            obj.set_text("BottomFrame의 객체 접근");
            obj.style.set_padding("0 0 0 3");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Button("Button07", "absolute", "214", "440", "164", "37", null, null, this);
            obj.set_taborder("11");
            obj.set_text("다른폼의 객체 접근");
            obj.style.set_padding("0 0 0 3");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Button("Button08", "absolute", "22", "312", "179", "37", null, null, this);
            obj.set_taborder("12");
            obj.set_text("팝업창 호출 (modalwindow)\r\n:html5 미지원");
            obj.set_wordwrap("char");
            obj.style.set_padding("0 0 0 3");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Button("Button09", "absolute", "214", "312", "163", "37", null, null, this);
            obj.set_taborder("13");
            obj.set_text("팝업창 호출(modalsync)\r\n:html5 미지원");
            obj.style.set_padding("0 0 0 3");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Div00.Tab00.tabpage1,
            	//-- Layout function
            	function(p) {
            		p.set_text("tabpage1");

            	}
            );
            this.Div00.Tab00.tabpage1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 128, 69, this.Div00.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_text("Div00");
            		p.style.set_border("1 solid #808080ff");

            	}
            );
            this.Div00.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 359, 126, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.set_text("Div00");
            		p.style.set_border("1 solid #808080ff");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Form1");
            		p.set_titletext("Form1");
            		p.style.set_background("lightblue");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Form1.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {                                                                               
        	application.open("modeless", "Base::Form1_Pop.xfdl", this.getOwnerFrame(), {mode:'modeless',ds:this.Dataset01}, "showtitlebar=true", 400, 200);
        }

        this.Button01_onclick = function(obj,e)
        {
        	var popWin = new ChildFrame;
        	popWin.init("Pop1", "absolute", 0, 0, 400, 400, 0, 0, "Base::Form2_Pop.xfdl");
        	popWin.set_openalign("center middle"); //추가
        	
            popWin.showModal(this.getOwnerFrame(), {mode:'modal',ds:this.Dataset01}, this, "fn_pop_callback");	
        }

        this.Button08_onclick = function(obj,e)
        {
        	if( system.navigatorname != "nexacro") {
        		alert("지원되지 않습니다.");
        		return;
        	}	
        	
        	//showModalWindow 호출 이전에 열려있는 화면은 모두 사용 불가능 상태가 됩니다.
        	var popWin = new ChildFrame;
        	popWin.init("Pop3", "absolute", 0, 0, 400, 400, 0, 0, "Base::Form1_Pop.xfdl");
        	popWin.set_openalign("center middle"); //추가
        	var varRet = system.showModalWindow(popWin, "modeless2", this.getOwnerFrame(), {mode:'showModalWindow',ds:this.Dataset01}, this);	
        	alert("팝업창의 return 값 : " + varRet);
        }

        this.Button09_onclick = function(obj,e)
        {
        	if( system.navigatorname != "nexacro") {
        		alert("지원되지 않습니다.");
        		return;
        	}	
        	
        	var popWin = new ChildFrame;
        	popWin.init("Pop2", "absolute", 0, 0, 400, 400, 0, 0, "Base::Form2_Pop.xfdl");
        	popWin.set_openalign("center middle"); //추가
        	var varRet = system.showModalSync(popWin, "modal2",  this.getOwnerFrame(), {mode:'showModalSync',ds:this.Dataset01}, this);
        	alert(varRet);
        	if(varRet){
        		alert("팝업창 종료 성공");
        	} else {
        		alert("팝업창 종료 실패");
        	}	
        }

        this.Button02_onclick = function(obj,e)
        {
        	alert("application.mainframe.VFrameSet0.TopFrame.form.Edit00.text : [" + application.mainframe.VFrameSet0.TopFrame.form.Edit00.text +"]");	
        }

        this.Button03_onclick = function(obj,e)
        {
        	alert("application.mainframe.VFrameSet0.BottomFrame.form.Edit00.text : [" + application.mainframe.VFrameSet0.BottomFrame.form.Edit00.text +"]");
        }

        this.Button04_onclick = function(obj,e)
        {
        	alert("application.mainframe.VFrameSet0.HFrameSet0.LeftFrame.form.Edit00.text : [" + application.mainframe.VFrameSet0.HFrameSet0.LeftFrame.form.Edit00.text +"]");
        	//alert(application.all[0].all[0].all[1].all[0].form.Edit00.value);
        	//alert(application.all["mainframe"].all["VFrameSet0"].all["HFrameSet0"].all["LeftFrame"].form.Edit00.value);
        }

        this.Button05_onclick = function(obj,e)
        {
        	alert("application.gv_Ds.saveXML() :\n" + application.gv_Ds.saveXML());
        }

        this.Button06_onclick = function(obj,e)
        {
        	alert("application.gv_var1 : [" + application.gv_var1 +"]");
        }

        this.Button07_onclick = function(obj,e)
        {
        	alert("application.mainframe.VFrameSet0.HFrameSet0.WorkFrameSet.ChildFrame1.form.Edit00.value : [" + application.mainframe.VFrameSet0.HFrameSet0.WorkFrameSet.ChildFrame1.form.Edit00.value +"]");
        }

        this.fn_test = function(arg)
        {
        	alert("Func Call > " + arg);
        }

        this.fn_test1 = function(strVal,objDs)
        {
        	trace(strVal);
        	trace(objDs.saveXML());
        }

        this.fn_pop_callback = function(strID,Variant)
        {
        	if( Variant != undefined )
        	 alert("fn_pop_callback : " + Variant);
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button05.addEventHandler("onclick", this.Button05_onclick, this);
            this.Button06.addEventHandler("onclick", this.Button06_onclick, this);
            this.Button04.addEventHandler("onclick", this.Button04_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);
            this.Button03.addEventHandler("onclick", this.Button03_onclick, this);
            this.Button07.addEventHandler("onclick", this.Button07_onclick, this);
            this.Button08.addEventHandler("onclick", this.Button08_onclick, this);
            this.Button09.addEventHandler("onclick", this.Button09_onclick, this);

        };

        this.loadIncludeScript("Form1.xfdl");

       
    };
}
)();
