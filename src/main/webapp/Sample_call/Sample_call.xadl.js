(function()
{
    return function()
    {
        // Theme, Component URI Setting
        this._theme_uri = "./_theme_/";
        this._globalvar_uri = "globalvars.xml";
        this.loadTypedefition = function()
        {
            // this._addService(prefixid, type, url, cachelevel, codepage, language, version, communication);
            this._addService("default_typedef.xml", "Base", "form", "./Base/", "", null, "", "0", "0");

            this._component_uri = (this._arg_compurl ? this._arg_compurl : "./nexacro14lib/component/");
            // load components
            var registerclass = [
            		{"id":"Div", "classname":"nexacro.Div", "type":"JavaScript"},
            		{"id":"Button", "classname":"nexacro.Button", "type":"JavaScript"},
            		{"id":"PopupDiv", "classname":"nexacro.PopupDiv", "type":"JavaScript"},
            		{"id":"Combo", "classname":"nexacro.Combo", "type":"JavaScript"},
            		{"id":"CheckBox", "classname":"nexacro.CheckBox", "type":"JavaScript"},
            		{"id":"ListBox", "classname":"nexacro.ListBox", "type":"JavaScript"},
            		{"id":"Edit", "classname":"nexacro.Edit", "type":"JavaScript"},
            		{"id":"MaskEdit", "classname":"nexacro.MaskEdit", "type":"JavaScript"},
            		{"id":"TextArea", "classname":"nexacro.TextArea", "type":"JavaScript"},
            		{"id":"Menu", "classname":"nexacro.Menu", "type":"JavaScript"},
            		{"id":"Tab", "classname":"nexacro.Tab", "type":"JavaScript"},
            		{"id":"ImageViewer", "classname":"nexacro.ImageViewer", "type":"JavaScript"},
            		{"id":"Radio", "classname":"nexacro.Radio", "type":"JavaScript"},
            		{"id":"Calendar", "classname":"nexacro.Calendar", "type":"JavaScript"},
            		{"id":"Static", "classname":"nexacro.Static", "type":"JavaScript"},
            		{"id":"Grid", "classname":"nexacro.Grid", "type":"JavaScript"},
            		{"id":"Spin", "classname":"nexacro.Spin", "type":"JavaScript"},
            		{"id":"PopupMenu", "classname":"nexacro.PopupMenu", "type":"JavaScript"},
            		{"id":"GroupBox", "classname":"nexacro.GroupBox", "type":"JavaScript"},
            		{"id":"ProgressBar", "classname":"nexacro.ProgressBar", "type":"JavaScript"},
            		{"id":"Plugin", "classname":"nexacro.Plugin", "type":"JavaScript"},
            		{"id":"Dataset", "classname":"nexacro.NormalDataset", "type":"JavaScript"}
            ];
            this._addClasses(registerclass);
        };
        
        this.on_loadGlobalVariables = function()
        {
            // global variable
            this._addVariable("gv_var1", "gv_var1 value", false);

            // global image

            // global dataset
            var obj = null;
            obj = new Dataset("gv_Ds", this);
            obj._setContents("<ColumnInfo><Column id=\"Col0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Col0\">gv_test</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            obj = null;


            

        };
        
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("UserGrid");
            this.set_version("");
            this.set_tracemode("");
            this.set_themeid("style13.xtheme");

            if (this._is_attach_childframe)
            	return;

            // frame
            var mainframe = this.createMainFrame("mainframe", "absolute", "0", "0", "1027", "800", null, null, this);
            mainframe.set_resizable("false");
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("true");
            mainframe.set_titletext("Main");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;

            // tray
            var tray = null;

        };
        

        
        this.mainframe_createBodyFrame = function()
        {
            var frame0 = new VFrameSet("VFrameSet0", "absolute", null, null, null, null, null, null, this);
            this.addChild(frame0.name, frame0);
            this.frame = frame0;
            frame0.set_separatesize("100,*,100");

            
            var frame1 = new ChildFrame("TopFrame", "absolute", null, null, null, null, null, null, "Base::Top.xfdl", frame0);
            frame0.addChild(frame1.name, frame1);
            frame1.set_formurl("Base::Top.xfdl");
            frame1.set_dragmovetype("none");
            frame1.set_showtitlebar("false");
            var frame2 = new HFrameSet("HFrameSet0", "absolute", null, null, null, null, null, null, frame0);
            frame0.addChild(frame2.name, frame2);
            frame2.set_separatesize("200,*");

            
            var frame3 = new ChildFrame("LeftFrame", "absolute", null, null, null, null, null, null, "Base::Left.xfdl", frame2);
            frame2.addChild(frame3.name, frame3);
            frame3.set_formurl("Base::Left.xfdl");
            frame3.set_dragmovetype("none");
            frame3.set_showtitlebar("false");
            var frame4 = new FrameSet("WorkFrameSet", "absolute", null, null, null, null, null, null, frame2);
            frame2.addChild(frame4.name, frame4);
            frame4.style.set_background("gray");

            
            var frame5 = new ChildFrame("ChildFrame0", "absolute", "0", "0", "410", "700", null, null, "Base::Form1.xfdl", frame4);
            frame4.addChild(frame5.name, frame5);
            frame5.set_formurl("Base::Form1.xfdl");
            frame5.style.set_border("1 solid black");

            var frame6 = new ChildFrame("ChildFrame1", "absolute", "410", "0", "420", "700", null, null, "Base::Form2.xfdl", frame4);
            frame4.addChild(frame6.name, frame6);
            frame6.set_formurl("Base::Form2.xfdl");
            frame6.style.set_border("1 solid black");

            var frame7 = new ChildFrame("BottomFrame", "absolute", null, null, null, null, null, null, "Base::Bottom.xfdl", frame0);
            frame0.addChild(frame7.name, frame7);
            frame7.set_formurl("Base::Bottom.xfdl");
            frame7.set_dragmovetype("none");
            frame7.set_showtitlebar("false");

        };
        
        this.on_initEvent = function()
        {

        };
        
        // screeninfo
        this.loadScreenInfo = function()
        {

        }
        
        // script Compiler

        this.checkLicense("");
        this.loadTypedefition();
        this.loadScreenInfo();
        this.loadTheme("style13.xtheme");


        this.loadIncludeScript("Sample_call.xadl");
    };
}
)();
