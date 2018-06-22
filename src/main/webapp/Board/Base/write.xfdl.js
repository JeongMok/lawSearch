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
                this.set_name("test");
                this.set_classname("test");
                this.set_titletext("게시판");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new LiteDBConnection("LiteDBConnection00", this);
            obj.set_busytimeout("60000");
            obj.set_preconnect("false");
            obj.set_datasource("C:/nexaro14/llocalDB.s3db");
            this.addChild(obj.name, obj);
            obj = new LiteDBStatement("InsertStatement", this);
            obj.set_ldbconnection("@LiteDBConnection00");
            this.addChild(obj.name, obj);

            
            // UI Components Initialize
            obj = new Button("Button01", "absolute", "3.81%", "281", null, "39", "85.16%", null, this);
            obj.set_taborder("2");
            obj.set_text("작성완료");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "4.79%", "33", null, "32", "83.69%", null, this);
            obj.set_taborder("3");
            obj.set_text("id");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "4.79%", "69", null, "32", "83.69%", null, this);
            obj.set_taborder("4");
            obj.set_text("title");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "4.79%", "100", null, "32", "83.69%", null, this);
            obj.set_taborder("5");
            obj.set_text("content");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "21.39%", "31", null, "30", "63.96%", null, this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "21.39%", "71", null, "30", "63.96%", null, this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "21.39%", "116", null, "132", "39.84%", null, this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("test");
            		p.set_titletext("게시판");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("write.xfdl", function() {

        this.Button01_onclick = function(obj,e)
        {	
        	var sql = "insert into Board(id, title, content, chk) values("
        				+ "'" + this.Edit00.value + "'"
        				+","
        				+ "'" + this.Edit01.value + "'"
        				+","
        				+ "'" + this.Edit02.value + "'"
        				+",'N'"
        				+ ")";
        	
        	this.LiteDBConnection00.open();
        	this.InsertStatement.set_ldbconnection(this.LiteDBConnection00);			
        	this.InsertStatement.executeUpdate(sql);	
        	this.LiteDBConnection00.close();
        	this.go("Base::test.xfdl");
        }

        this.InsertStatement_onsuccess = function(obj,e)
        {
        	alert("글이 등록되었습니다.");
        }

        this.InsertStatement_onerror = function(obj,e)
        {
        	alert('글 등록에 실패했습니다.');
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.InsertStatement.addEventHandler("onsuccess", this.InsertStatement_onsuccess, this);
            this.InsertStatement.addEventHandler("onerror", this.InsertStatement_onerror, this);
            this.addEventHandler("onload", this.test_onload, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);

        };

        this.loadIncludeScript("write.xfdl");

       
    };
}
)();
