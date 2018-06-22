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
                this.set_name("Top");
                this.set_classname("Top");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,100);
            }
            this.style.set_background("#0080ffff");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "0.68%", "7", null, "47", "73.54%", null, this);
            obj.set_taborder("0");
            obj.set_text("[TopFrame]");
            obj.style.set_font("25 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "11", "60", "186", "25", null, null, this);
            obj.set_taborder("1");
            obj.set_value("TopFrame 입니다.");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 100, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Top");
            		p.set_titletext("New Form");
            		p.style.set_background("#0080ffff");

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

        this.loadIncludeScript("Top.xfdl");

       
    };
}
)();
