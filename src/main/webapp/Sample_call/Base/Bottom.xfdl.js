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
                this.set_name("Bottom");
                this.set_classname("Bottom");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,100);
            }
            this.style.set_background("#0080ffff");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "6", "7", "264", "47", null, null, this);
            obj.set_taborder("0");
            obj.set_text("[BottomFrame]");
            obj.style.set_font("25 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "12", "56", "168", "25", null, null, this);
            obj.set_taborder("1");
            obj.set_value("BottomFrame 입니다.");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 100, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Bottom");
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

        this.loadIncludeScript("Bottom.xfdl");

       
    };
}
)();
