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
                this.set_name("Left");
                this.set_classname("Left");
                this.set_titletext("New Form");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,190,768);
            }
            this.style.set_background("lightblue");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "3", "7", "279", "47", null, null, this);
            obj.set_taborder("0");
            obj.set_text("[LeftFrame]");
            obj.style.set_font("25 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "14", "76", "167", "25", null, null, this);
            obj.set_taborder("1");
            obj.set_value("LeftFrame 입니다.");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 190, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Left");
            		p.set_titletext("New Form");
            		p.style.set_background("lightblue");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("Left.xfdl");

       
    };
}
)();
