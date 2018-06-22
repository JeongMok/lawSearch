//CSS=theme.css
    
(function() {
  return function() {
    var obj;   
    
    obj = new nexacro.Style_background("#efece9ff","","","0","0","0","0","true");
    this._addCss("MainFrame", "background", obj, ["normal"]);
    this._addCss("ChildFrame", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#656b81ff","");
    this._addCss("MainFrame", "border", obj, ["normal", "deactivate"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("MainFrame", "bordertype", obj, ["normal"]);
    this._addCss("Form", "bordertype", obj, ["normal"]);
    this._addCss("VScrollBar", "bordertype", obj, ["normal"]);
    this._addCss("VScrollBarControl", "bordertype", obj, ["normal"]);
    this._addCss("Edit", "bordertype", obj, ["normal"]);
    this._addCss("Button", "bordertype", obj, ["normal"]);
    this._addCss("Combo>#dropbutton", "bordertype", obj, ["normal", "pushed"]);
    this._addCss("ComboControl>#dropbutton", "bordertype", obj, ["normal", "pushed"]);
    this._addCss("Step", "bordertype", obj, ["normal"]);
    this._addCss("ImageViewer", "bordertype", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#prevbutton", "bordertype", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#nextbutton", "bordertype", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#yearspin>#spinupbutton", "bordertype", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#yearspin>#spindownbutton", "bordertype", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin>#spinupbutton", "bordertype", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin>#spindownbutton", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "bordertype", obj, ["normal"]);
    this._addCss("Grid", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "bordertype", obj, ["normal", "mouseover", "focused", "selected", "pushed", "readonly"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "bordertype", obj, ["normal"]);
    this._addCss("Tab>#spinupbutton", "bordertype", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "bordertype", obj, ["normal"]);
    this._addCss("StepControl", "bordertype", obj, ["normal"]);
    this._addCss("Button.btn_MDI", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDIS", "bordertype", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_WFDA_shuttleR", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WFDA_shuttleL", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_schNext", "bordertype", obj, ["normal", "selected"]);
    this._addCss("Button.btn_LOGIN_login", "bordertype", obj, ["normal", "disabled"]);
    this._addCss(".grd_MF_cal", "bordertype", obj, ["normal"]);
    this._addCss(".grd_MF_grd", "bordertype", obj, ["normal"]);
    this._addCss("Button.btn_LF_setting2", "bordertype", obj, ["normal", "focused"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("MainFrame", "color", obj, ["normal"]);
    this._addCss("TitleBarControl", "color", obj, ["normal"]);
    this._addCss("TitlebarForm", "color", obj, ["normal"]);
    this._addCss("Button.btn_module", "color", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("ListBox", "color", obj, ["selected"]);
    this._addCss("ListBoxControl", "color", obj, ["selected"]);
    this._addCss("DatePicker>#popupcalendar>#yearspin>#spinedit", "color", obj, ["normal"]);
    this._addCss("Tab", "color", obj, ["selected", "focused"]);
    this._addCss("Button.btn_WFDA_tab", "color", obj, ["selected", "focused"]);
    this._addCss("PopupMenu", "color", obj, ["mouseover", "selected", "focused"]);
    this._addCss("Button.Fav_add", "color", obj, ["mouseover", "pushed", "selected", "focused"]);
    this._addCss("Button.btn_LF", "color", obj, ["focused", "selected", "mouseover"]);
    this._addCss("Button.btn_paging", "color", obj, ["selected"]);
    this._addCss("Static.sta_POP_bg", "color", obj, ["normal"]);

    obj = new nexacro.Style_font("");
    this._addCss("MainFrame", "font", obj, ["normal"]);
    this._addCss("ChildFrame", "font", obj, ["normal"]);
    this._addCss("VScrollBar", "font", obj, ["normal"]);
    this._addCss("VScrollBar>#incbutton", "font", obj, ["normal"]);
    this._addCss("VScrollBar>#decbutton", "font", obj, ["normal"]);
    this._addCss("VScrollBar>#trackbar", "font", obj, ["normal"]);
    this._addCss("VScrollBarControl", "font", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "font", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "font", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "font", obj, ["normal"]);
    this._addCss("HScrollBar", "font", obj, ["normal"]);
    this._addCss("HScrollBar>#incbutton", "font", obj, ["normal"]);
    this._addCss("HScrollBar>#decbutton", "font", obj, ["normal"]);
    this._addCss("HScrollBar>#trackbar", "font", obj, ["normal"]);
    this._addCss("HScrollBarControl", "font", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "font", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "font", obj, ["normal"]);
    this._addCss("Div", "font", obj, ["normal"]);
    this._addCss("PopupDiv", "font", obj, ["normal"]);
    this._addCss("GroupBox", "font", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#yearspin>#spinupbutton", "font", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#yearspin>#spindownbutton", "font", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin>#spinedit", "font", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin>#spinupbutton", "font", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin>#spindownbutton", "font", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "font", obj, ["normal"]);
    this._addCss("ProgressBar", "font", obj, ["normal"]);
    this._addCss("FileDownload", "font", obj, ["normal"]);
    this._addCss("Step", "font", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("MainFrame", "icon", obj, ["normal"]);
    this._addCss("TitlebarForm", "icon", obj, ["normal"]);

    obj = new nexacro.Style_value("24");
    this._addCss("MainFrame", "menubarheight", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("MainFrame", "openstatuseffec", obj, ["normal"]);

    obj = new nexacro.Style_padding("");
    this._addCss("MainFrame", "padding", obj, ["normal"]);
    this._addCss("ChildFrame", "padding", obj, ["normal"]);
    this._addCss("VScrollBar", "padding", obj, ["normal"]);
    this._addCss("VScrollBar>#incbutton", "padding", obj, ["normal"]);
    this._addCss("VScrollBar>#decbutton", "padding", obj, ["normal"]);
    this._addCss("VScrollBar>#trackbar", "padding", obj, ["normal"]);
    this._addCss("VScrollBarControl", "padding", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "padding", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "padding", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "padding", obj, ["normal"]);
    this._addCss("HScrollBar", "padding", obj, ["normal"]);
    this._addCss("HScrollBar>#incbutton", "padding", obj, ["normal"]);
    this._addCss("HScrollBar>#decbutton", "padding", obj, ["normal"]);
    this._addCss("HScrollBar>#trackbar", "padding", obj, ["normal"]);
    this._addCss("HScrollBarControl", "padding", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "padding", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "padding", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "padding", obj, ["normal"]);
    this._addCss("Div", "padding", obj, ["normal"]);
    this._addCss("PopupDiv", "padding", obj, ["normal"]);
    this._addCss("ImageViewer", "padding", obj, ["normal"]);
    this._addCss("DatePicker", "padding", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#yearspin>#spinedit", "padding", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#yearspin>#spinupbutton", "padding", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#yearspin>#spindownbutton", "padding", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin>#spinedit", "padding", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin>#spinupbutton", "padding", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin>#spindownbutton", "padding", obj, ["normal"]);
    this._addCss("DatePickerControl", "padding", obj, ["normal"]);
    this._addCss("Calendar>#dropbutton", "padding", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "padding", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlSpin>#spinupbutton", "padding", obj, ["normal", "focused"]);
    this._addCss("Grid>#controlSpin>#spindownbutton", "padding", obj, ["normal", "focused"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "padding", obj, ["normal"]);
    this._addCss("Tab", "padding", obj, ["normal"]);
    this._addCss("Tabpage", "padding", obj, ["normal"]);
    this._addCss("ProgressBar", "padding", obj, ["normal"]);
    this._addCss("FileUpload", "padding", obj, ["normal"]);
    this._addCss(".grd_MF_grd", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("25");
    this._addCss("MainFrame", "statusbarheight", obj, ["normal"]);

    obj = new nexacro.Style_value("22");
    this._addCss("MainFrame", "titlebarheight", obj, ["normal"]);

    obj = new nexacro.Style_align("left top");
    this._addCss("ChildFrame", "align", obj, ["normal"]);
    this._addCss("TextArea", "align", obj, ["normal"]);
    this._addCss("TextAreaControl", "align", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "align", obj, ["normal"]);
    this._addCss("Static.sta_POP_bg", "align", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("ChildFrame", "border", obj, ["normal"]);
    this._addCss("Form", "border", obj, ["normal"]);
    this._addCss("VScrollBar", "border", obj, ["normal"]);
    this._addCss("VScrollBar>#trackbar", "border", obj, ["normal"]);
    this._addCss("VScrollBarControl", "border", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "border", obj, ["normal"]);
    this._addCss("HScrollBar", "border", obj, ["normal"]);
    this._addCss("HScrollBarControl", "border", obj, ["normal"]);
    this._addCss(">#resizebutton", "border", obj, ["normal"]);
    this._addCss(">#resizebuttonControl", "border", obj, ["normal"]);
    this._addCss("Static", "border", obj, ["normal"]);
    this._addCss("Button", "border", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Spin>#spinupbutton", "border", obj, ["normal", "focused", "disabled"]);
    this._addCss("Spin>#spindownbutton", "border", obj, ["disabled"]);
    this._addCss("SpinControl>#spinedit", "border", obj, ["mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("SpinControl>#spinupbutton", "border", obj, ["normal", "focused", "disabled"]);
    this._addCss("SpinControl>#spindownbutton", "border", obj, ["disabled"]);
    this._addCss("Combo>#comboedit", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("ComboControl>#comboedit", "border", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("CheckBox", "border", obj, ["normal"]);
    this._addCss("CheckBoxControl", "border", obj, ["normal"]);
    this._addCss("Div", "border", obj, ["normal"]);
    this._addCss("PopupDiv", "border", obj, ["normal"]);
    this._addCss("Step", "border", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#prevbutton", "border", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#nextbutton", "border", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#yearspin>#spinupbutton", "border", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#yearspin>#spindownbutton", "border", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin>#spinupbutton", "border", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin>#spindownbutton", "border", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "border", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Calendar>#dropbutton", "border", obj, ["mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Calendar>#spinupbutton", "border", obj, ["normal"]);
    this._addCss("Calendar>#spindownbutton", "border", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "border", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "border", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "border", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "border", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "border", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "border", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "border", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "border", obj, ["normal"]);
    this._addCss("CalendarControl>#calendaredit", "border", obj, ["normal", "mouseover", "focused", "selected", "disabled"]);
    this._addCss("Grid>#head", "border", obj, ["normal"]);
    this._addCss("Grid>#body", "border", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controlSpin>#spinedit", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled", "readonly"]);
    this._addCss("Grid>#controlcombo>#comboedit", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled", "readonly"]);
    this._addCss("Grid>#controlCheckBox", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "border", obj, ["mouseover"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "border", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "border", obj, ["normal"]);
    this._addCss("Tab", "border", obj, ["normal"]);
    this._addCss("Tab>#spinupbutton", "border", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "border", obj, ["normal"]);
    this._addCss("Menu", "border", obj, ["normal"]);
    this._addCss("FileUpload", "border", obj, ["normal"]);
    this._addCss("StepControl", "border", obj, ["normal"]);
    this._addCss("Static.sta_fav", "border", obj, ["normal"]);
    this._addCss("Button.Fav_setting", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Button.btn_LF", "border", obj, ["normal", "focused", "selected", "mouseover"]);
    this._addCss("Grid.grd_LF_menu", "border", obj, ["normal"]);
    this._addCss("Button.btn_MDI", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDIS", "border", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Form.WF_work", "border", obj, ["normal"]);
    this._addCss("Static.sta_WF_progress", "border", obj, ["normal"]);
    this._addCss("Button.btn_WFDA_shuttleR", "border", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WFDA_shuttleL", "border", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_schPrev", "border", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_schNext", "border", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WF_search", "border", obj, ["normal", "selected"]);
    this._addCss("Button.btn_WFDA_Search", "border", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WFDA_labelBP", "border", obj, ["normal"]);
    this._addCss("Calendar.cal_WF_P>#dropbutton", "border", obj, ["normal"]);
    this._addCss("Static.sta_LOGIN_bg", "border", obj, ["normal"]);
    this._addCss("Edit.edt_LOGIN_pw", "border", obj, ["normal", "disabled"]);
    this._addCss("Button.btn_LOGIN_login", "border", obj, ["normal", "disabled", "mouseover", "focused", "selected"]);
    this._addCss(".btn_MF_view", "border", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss(".btn_MF_close", "border", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss(".btn_MF_prev", "border", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss(".btn_MF_next", "border", obj, ["normal", "mouseover", "pushed", "disabled"]);
    this._addCss(".btn_MF_add", "border", obj, ["normal", "disabled", "mouseover", "pushed"]);
    this._addCss(".grd_MF_cal", "border", obj, ["normal"]);
    this._addCss(".grd_MF_cal>#body", "border", obj, ["normal", "disabled", "mouseover"]);
    this._addCss(".grd_MF_grd", "border", obj, ["normal"]);
    this._addCss("Static.sta_WF_mainImage", "border", obj, ["normal"]);
    this._addCss("Button.btn_LF_setting2", "border", obj, ["normal", "focused"]);
    this._addCss("Calendar.readonly>#dropbutton", "border", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Grid.grd_LF_SubMenu", "border", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("","0","0","true","true","true","true");
    this._addCss("ChildFrame", "bordertype", obj, ["normal"]);
    this._addCss("TitleBarControl", "bordertype", obj, ["normal"]);
    this._addCss("VScrollBar>#incbutton", "bordertype", obj, ["normal"]);
    this._addCss("VScrollBar>#decbutton", "bordertype", obj, ["normal"]);
    this._addCss("VScrollBar>#trackbar", "bordertype", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "bordertype", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "bordertype", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "bordertype", obj, ["normal"]);
    this._addCss("HScrollBar", "bordertype", obj, ["normal"]);
    this._addCss("HScrollBar>#incbutton", "bordertype", obj, ["normal"]);
    this._addCss("HScrollBar>#decbutton", "bordertype", obj, ["normal"]);
    this._addCss("HScrollBar>#trackbar", "bordertype", obj, ["normal"]);
    this._addCss("HScrollBarControl", "bordertype", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "bordertype", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "bordertype", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "bordertype", obj, ["normal"]);
    this._addCss("EditControl", "bordertype", obj, ["normal"]);
    this._addCss("TextAreaControl", "bordertype", obj, ["normal"]);
    this._addCss("MaskEdit", "bordertype", obj, ["normal"]);
    this._addCss("MaskEditControl", "bordertype", obj, ["normal"]);
    this._addCss("Spin", "bordertype", obj, ["normal"]);
    this._addCss("SpinControl", "bordertype", obj, ["normal"]);
    this._addCss("ListBox", "bordertype", obj, ["normal"]);
    this._addCss("ListBoxControl", "bordertype", obj, ["normal"]);
    this._addCss("Combo", "bordertype", obj, ["normal"]);
    this._addCss("Combo>#combolist", "bordertype", obj, ["normal"]);
    this._addCss("ComboControl", "bordertype", obj, ["normal"]);
    this._addCss("ComboControl>#combolist", "bordertype", obj, ["normal"]);
    this._addCss("Radio", "bordertype", obj, ["normal"]);
    this._addCss("RadioControl", "bordertype", obj, ["normal"]);
    this._addCss("CheckBox", "bordertype", obj, ["normal"]);
    this._addCss("CheckBoxControl", "bordertype", obj, ["normal"]);
    this._addCss("Div", "bordertype", obj, ["normal"]);
    this._addCss("PopupDiv", "bordertype", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#yearspin", "bordertype", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#yearspin>#spinedit", "bordertype", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin", "bordertype", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin>#spinedit", "bordertype", obj, ["normal"]);
    this._addCss("Calendar", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar", "bordertype", obj, ["normal"]);
    this._addCss("CalendarControl", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#body", "bordertype", obj, ["normal", "disabled"]);
    this._addCss("Grid>#summ", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#summary", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controledit", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlSpin", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#combolist", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlCheckBox", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlRadio", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#body", "bordertype", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_WF_tree>#summ", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#summary", "bordertype", obj, ["normal"]);
    this._addCss("Menu", "bordertype", obj, ["normal"]);
    this._addCss("ProgressBar", "bordertype", obj, ["normal"]);
    this._addCss("FileUpload", "bordertype", obj, ["normal"]);
    this._addCss(".grd_MF_cal>#head", "bordertype", obj, ["normal", "disabled", "mouseover"]);
    this._addCss(".grd_MF_grd>#head", "bordertype", obj, ["normal"]);
    this._addCss(".grd_MF_grd>#body", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("");
    this._addCss("ChildFrame", "color", obj, ["normal"]);
    this._addCss("VScrollBar", "color", obj, ["normal"]);
    this._addCss("VScrollBar>#incbutton", "color", obj, ["normal"]);
    this._addCss("VScrollBar>#decbutton", "color", obj, ["normal"]);
    this._addCss("VScrollBar>#trackbar", "color", obj, ["normal"]);
    this._addCss("VScrollBarControl", "color", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "color", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "color", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "color", obj, ["normal"]);
    this._addCss("HScrollBar", "color", obj, ["normal"]);
    this._addCss("HScrollBar>#incbutton", "color", obj, ["normal"]);
    this._addCss("HScrollBar>#decbutton", "color", obj, ["normal"]);
    this._addCss("HScrollBar>#trackbar", "color", obj, ["normal"]);
    this._addCss("HScrollBarControl", "color", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "color", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "color", obj, ["normal"]);
    this._addCss("ImageViewer", "color", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#yearspin>#spinupbutton", "color", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#yearspin>#spindownbutton", "color", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin", "color", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin>#spinedit", "color", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin>#spinupbutton", "color", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin>#spindownbutton", "color", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "color", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "color", obj, ["normal"]);
    this._addCss("Menu", "color", obj, ["normal"]);
    this._addCss("ProgressBar", "color", obj, ["normal"]);
    this._addCss("FileDownload", "color", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/bg_ChildFrameTi.png","repeat-x","0","0","0","0","true");
    this._addCss("TitleBarControl", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("TitleBarControl", "border", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Dotum");
    this._addCss("TitleBarControl", "font", obj, ["normal"]);
    this._addCss("Form", "font", obj, ["normal"]);
    this._addCss("Static", "font", obj, ["normal"]);
    this._addCss("Edit", "font", obj, ["normal"]);
    this._addCss("EditControl", "font", obj, ["normal"]);
    this._addCss("TextArea", "font", obj, ["normal"]);
    this._addCss("TextAreaControl", "font", obj, ["normal"]);
    this._addCss("MaskEdit", "font", obj, ["normal"]);
    this._addCss("MaskEditControl", "font", obj, ["normal"]);
    this._addCss("Button.btn_singdata", "font", obj, ["normal"]);
    this._addCss("Spin", "font", obj, ["normal"]);
    this._addCss("SpinControl", "font", obj, ["normal"]);
    this._addCss("ListBox", "font", obj, ["normal"]);
    this._addCss("ListBoxControl", "font", obj, ["normal"]);
    this._addCss("Combo", "font", obj, ["normal"]);
    this._addCss("ComboControl", "font", obj, ["normal"]);
    this._addCss("Radio", "font", obj, ["normal"]);
    this._addCss("RadioControl", "font", obj, ["normal"]);
    this._addCss("CheckBox", "font", obj, ["normal"]);
    this._addCss("CheckBoxControl", "font", obj, ["normal"]);
    this._addCss("ImageViewer", "font", obj, ["normal"]);
    this._addCss("DatePicker", "font", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#yearspin", "font", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin", "font", obj, ["normal"]);
    this._addCss("DatePickerControl", "font", obj, ["normal"]);
    this._addCss("Calendar", "font", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "font", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Calendar>#popupcalendar", "font", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "font", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "font", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "font", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "font", obj, ["normal"]);
    this._addCss("CalendarControl", "font", obj, ["normal"]);
    this._addCss("CalendarControl>#calendaredit", "font", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Grid", "font", obj, ["normal"]);
    this._addCss("Grid>#controledit", "font", obj, ["normal"]);
    this._addCss("Grid>#controlSpin", "font", obj, ["normal"]);
    this._addCss("Grid>#controlSpin>#spinupbutton", "font", obj, ["normal", "focused"]);
    this._addCss("Grid>#controlSpin>#spindownbutton", "font", obj, ["normal", "focused"]);
    this._addCss("Grid>#controltextarea", "font", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "font", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "font", obj, ["normal"]);
    this._addCss("Grid>#controlCheckBox", "font", obj, ["normal"]);
    this._addCss("Grid>#controlRadio", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "font", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree", "font", obj, ["normal"]);
    this._addCss("Tab", "font", obj, ["normal"]);
    this._addCss("Button.btn_WFDA_tab", "font", obj, ["normal", "selected", "focused"]);
    this._addCss("PopupMenu", "font", obj, ["normal"]);
    this._addCss("FileUpload", "font", obj, ["normal"]);
    this._addCss("Button.TF_Logout", "font", obj, ["normal"]);
    this._addCss("Static.User_info", "font", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_margin("0");
    this._addCss("TitleBarControl", "margin", obj, ["normal"]);

    obj = new nexacro.Style_padding("0");
    this._addCss("TitleBarControl", "padding", obj, ["normal"]);
    this._addCss("Spin", "padding", obj, ["normal"]);
    this._addCss("SpinControl", "padding", obj, ["normal"]);

    obj = new nexacro.Style_align("left middle");
    this._addCss("TitleBarControl", "align", obj, ["normal"]);
    this._addCss("TitlebarForm", "align", obj, ["normal"]);
    this._addCss("Static", "align", obj, ["normal"]);
    this._addCss("Edit", "align", obj, ["normal"]);
    this._addCss("EditControl", "align", obj, ["normal"]);
    this._addCss("ListBox", "align", obj, ["normal"]);
    this._addCss("ListBoxControl", "align", obj, ["normal"]);
    this._addCss("Combo", "align", obj, ["normal"]);
    this._addCss("Combo>#combolist", "align", obj, ["normal"]);
    this._addCss("ComboControl", "align", obj, ["normal"]);
    this._addCss("ComboControl>#combolist", "align", obj, ["normal"]);
    this._addCss("Radio", "align", obj, ["normal"]);
    this._addCss("RadioControl", "align", obj, ["normal"]);
    this._addCss("CheckBox", "align", obj, ["normal"]);
    this._addCss("CheckBoxControl", "align", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#prevbutton", "align", obj, ["normal"]);
    this._addCss("Calendar", "align", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "align", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "align", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "align", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "align", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "align", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "align", obj, ["normal"]);
    this._addCss("CalendarControl", "align", obj, ["normal"]);
    this._addCss("CalendarControl>#calendaredit", "align", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Grid>#controledit", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#comboedit", "align", obj, ["mouseover", "pushed", "selected", "focused", "disabled", "readonly"]);
    this._addCss("Grid>#controlcombo>#combolist", "align", obj, ["normal"]);
    this._addCss("Grid>#controlCheckBox", "align", obj, ["normal"]);
    this._addCss("Grid>#controlRadio", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "align", obj, ["normal"]);
    this._addCss("FileUpload", "align", obj, ["normal"]);
    this._addCss("FileDownload", "align", obj, ["normal"]);
    this._addCss("Grid.grd_LF_menu", "align", obj, ["normal"]);
    this._addCss("Button.btn_WF_MDI", "align", obj, ["normal"]);
    this._addCss("Button.btn_WF_MDIS", "align", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disable"]);
    this._addCss("Button.btn_LOGIN_login", "align", obj, ["normal", "disabled"]);
    this._addCss(".sta_Main_title", "align", obj, ["normal"]);
    this._addCss(".sta_MF_numBl", "align", obj, ["normal"]);
    this._addCss(".grd_MF_grd", "align", obj, ["normal"]);
    this._addCss("Grid.grd_LF_SubMenu", "align", obj, ["normal"]);

    obj = new nexacro.Style_value("100%");
    this._addCss("TitleBarControl", "opacity", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://Images/ico_ChileFrame.png");
    this._addCss("TitleBarControl", "icon", obj, ["normal"]);

    obj = new nexacro.Style_background("#a7a7a7ff","","","0","0","0","0","true");
    this._addCss("TitleBarControl", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://Images/Btn_ChildminN.png","","0","0","50","50","true");
    this._addCss("TitleBarControl>#minbutton", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","#808080ff","");
    this._addCss("TitleBarControl>#minbutton", "border", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "border", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "border", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "border", obj, ["normal"]);
    this._addCss("TitlebarForm", "border", obj, ["normal", "deactivate"]);
    this._addCss("Radio", "border", obj, ["normal"]);
    this._addCss("RadioControl", "border", obj, ["normal"]);
    this._addCss("Grid>#controlRadio", "border", obj, ["normal"]);
    this._addCss("Edit.edt_LOGIN_id", "border", obj, ["normal", "disabled", "mouseover", "focused"]);
    this._addCss("Edit.edt_LOGIN_pw", "border", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("TitleBarControl>#minbutton", "bordertype", obj, ["normal"]);
    this._addCss("TitleBarControl>#maxbutton", "bordertype", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "bordertype", obj, ["normal"]);
    this._addCss("TitleBarControl>#closebutton", "bordertype", obj, ["normal"]);
    this._addCss("TitlebarForm", "bordertype", obj, ["normal"]);
    this._addCss("Spin>#spinupbutton", "bordertype", obj, ["normal", "focused"]);
    this._addCss("Spin>#spindownbutton", "bordertype", obj, ["normal", "focused"]);
    this._addCss("SpinControl>#spinupbutton", "bordertype", obj, ["normal", "focused"]);
    this._addCss("SpinControl>#spindownbutton", "bordertype", obj, ["normal", "focused"]);
    this._addCss("DatePicker", "bordertype", obj, ["normal"]);
    this._addCss("DatePickerControl", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#dropbutton", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#spinupbutton", "bordertype", obj, ["normal"]);
    this._addCss("Calendar>#spindownbutton", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#head", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlSpin>#spinupbutton", "bordertype", obj, ["normal", "focused"]);
    this._addCss("Grid>#controlSpin>#spindownbutton", "bordertype", obj, ["normal", "focused"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "bordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "bordertype", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#head", "bordertype", obj, ["normal"]);
    this._addCss("Tab", "bordertype", obj, ["normal"]);
    this._addCss("Tabpage", "bordertype", obj, ["normal"]);
    this._addCss("Button.btn_WF_schPrev", "bordertype", obj, ["normal", "selected"]);

    obj = new nexacro.Style_margin("0 -16 0 0");
    this._addCss("TitleBarControl>#minbutton", "margin", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/Btn_ChildminO.png","","0","0","50","50","true");
    this._addCss("TitleBarControl>#minbutton", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_margin("0 0 0 15");
    this._addCss("TitleBarControl>#minbutton", "margin", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://Images/Btn_ChildminP.png","","0","0","50","50","true");
    this._addCss("TitleBarControl>#minbutton", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://Images/Btn_ChildmaxN.png","","0","0","50","50","true");
    this._addCss("TitleBarControl>#maxbutton", "background", obj, ["normal"]);

    obj = new nexacro.Style_margin("0 -8 0 0");
    this._addCss("TitleBarControl>#maxbutton", "margin", obj, ["normal"]);
    this._addCss("TitleBarControl>#normalbutton", "margin", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/Btn_ChildmaxO.png","","0","0","50","50","true");
    this._addCss("TitleBarControl>#maxbutton", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://Images/Btn_ChildmaxP.png","","0","0","50","50","true");
    this._addCss("TitleBarControl>#maxbutton", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://Images/Btn_ChildnorN.png","","0","0","50","50","true");
    this._addCss("TitleBarControl>#normalbutton", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/Btn_ChildnorO.png","","0","0","50","50","true");
    this._addCss("TitleBarControl>#normalbutton", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://Images/Btn_ChildnorP.png","","0","0","50","50","true");
    this._addCss("TitleBarControl>#normalbutton", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://Images/Btn_ChildcloseN.png","","0","0","50","50","true");
    this._addCss("TitleBarControl>#closebutton", "background", obj, ["normal"]);

    obj = new nexacro.Style_shadow("drop 0,5 4 #00000014");
    this._addCss("TitleBarControl>#closebutton", "shadow", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/Btn_ChildcloseO.png","","0","0","50","50","true");
    this._addCss("TitleBarControl>#closebutton", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://Images/Btn_ChildcloseP.png","","0","0","50","50","true");
    this._addCss("TitleBarControl>#closebutton", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("@gradation","","","0","0","0","0","true");
    this._addCss("TitlebarForm", "background", obj, ["normal"]);
    this._addCss("Combo>#dropbutton", "background", obj, ["mouseover", "focused", "selected", "pushed"]);
    this._addCss("ComboControl>#dropbutton", "background", obj, ["mouseover", "focused", "selected", "pushed"]);
    this._addCss("Grid>#controlbutton", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "background", obj, ["mouseover", "focused", "selected", "pushed"]);
    this._addCss("Button.btn_WFDA_tab", "background", obj, ["mouseover", "pushed"]);
    this._addCss("PopupMenu", "background", obj, ["normal"]);
    this._addCss("FileDownload", "background", obj, ["normal"]);
    this._addCss("Combo.cmb_WF_P", "background", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Calendar.cal_WF_P", "background", obj, ["mouseover", "selected", "focused"]);
    this._addCss(".sta_Main_title", "background", obj, ["normal"]);
    this._addCss(".grd_MF_cal>#head", "background", obj, ["normal", "disabled", "mouseover"]);
    this._addCss(".grd_MF_grd>#head", "background", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #7b829a 0,100 #656b81");
    this._addCss("TitlebarForm", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_font("bold 11 Dotum");
    this._addCss("TitlebarForm", "font", obj, ["normal"]);
    this._addCss("Static.LF_tit", "font", obj, ["normal", "focused"]);

    obj = new nexacro.Style_padding("5 0 0 0");
    this._addCss("TitlebarForm", "padding", obj, ["normal"]);

    obj = new nexacro.Style_background("#687685ff","","","0","0","0","0","true");
    this._addCss("TitlebarForm", "background", obj, ["deactivate"]);

    obj = new nexacro.Style_color("#a9aeb6");
    this._addCss("TitlebarForm", "color", obj, ["deactivate"]);

    obj = new nexacro.Style_align("");
    this._addCss("Form", "align", obj, ["normal"]);
    this._addCss("VScrollBar", "align", obj, ["normal"]);
    this._addCss("VScrollBar>#incbutton", "align", obj, ["normal"]);
    this._addCss("VScrollBar>#decbutton", "align", obj, ["normal"]);
    this._addCss("VScrollBar>#trackbar", "align", obj, ["normal"]);
    this._addCss("VScrollBarControl", "align", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "align", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "align", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "align", obj, ["normal"]);
    this._addCss("HScrollBar", "align", obj, ["normal"]);
    this._addCss("HScrollBar>#incbutton", "align", obj, ["normal"]);
    this._addCss("HScrollBar>#decbutton", "align", obj, ["normal"]);
    this._addCss("HScrollBar>#trackbar", "align", obj, ["normal"]);
    this._addCss("HScrollBarControl", "align", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "align", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "align", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "align", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#yearspin>#spinedit", "align", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#yearspin>#spinupbutton", "align", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#yearspin>#spindownbutton", "align", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin>#spinedit", "align", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin>#spinupbutton", "align", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin>#spindownbutton", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "align", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Form", "background", obj, ["normal"]);
    this._addCss("Edit", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("EditControl", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("TextArea", "background", obj, ["normal"]);
    this._addCss("TextAreaControl", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("MaskEdit", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("MaskEditControl", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Spin", "background", obj, ["normal"]);
    this._addCss("SpinControl", "background", obj, ["normal"]);
    this._addCss("ListBox", "background", obj, ["normal"]);
    this._addCss("ListBoxControl", "background", obj, ["normal"]);
    this._addCss("Combo", "background", obj, ["normal", "mouseover", "focused", "pushed"]);
    this._addCss("Combo>#combolist", "background", obj, ["normal"]);
    this._addCss("ComboControl", "background", obj, ["normal", "mouseover", "focused", "pushed"]);
    this._addCss("ComboControl>#combolist", "background", obj, ["normal"]);
    this._addCss("DatePicker", "background", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#yearspin", "background", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin", "background", obj, ["normal"]);
    this._addCss("DatePickerControl", "background", obj, ["normal"]);
    this._addCss("Calendar", "background", obj, ["normal"]);
    this._addCss("Calendar>#spindownbutton", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "background", obj, ["normal"]);
    this._addCss("CalendarControl", "background", obj, ["normal"]);
    this._addCss("Grid>#body", "background", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controledit", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlSpin", "background", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlSpin>#spinupbutton", "background", obj, ["normal", "focused"]);
    this._addCss("Grid>#controlSpin>#spindownbutton", "background", obj, ["normal", "focused"]);
    this._addCss("Grid>#controltextarea", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlmaskedit", "background", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcombo", "background", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcombo>#combolist", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "background", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "background", obj, ["normal", "mouseover"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "background", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#body", "background", obj, ["normal", "disabled"]);
    this._addCss("Button.btn_WFDA_tab", "background", obj, ["normal"]);
    this._addCss("Div.div_leftBg", "background", obj, ["normal"]);
    this._addCss("Static.LF_tit", "background", obj, ["normal"]);
    this._addCss("Static.WF_work_Bg", "background", obj, ["normal"]);
    this._addCss("Static.sta_WFDA_B", "background", obj, ["normal"]);
    this._addCss(".grd_MF_grd", "background", obj, ["normal"]);

    obj = new nexacro.Style_color("#46463d");
    this._addCss("Form", "color", obj, ["normal"]);

    obj = new nexacro.Style_accessibility("","true","all","","","");
    this._addCss("VScrollBar", "accessibility", obj, ["normal"]);
    this._addCss("VScrollBar>#incbutton", "accessibility", obj, ["normal"]);
    this._addCss("VScrollBar>#decbutton", "accessibility", obj, ["normal"]);
    this._addCss("VScrollBar>#trackbar", "accessibility", obj, ["normal"]);
    this._addCss("VScrollBarControl", "accessibility", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "accessibility", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "accessibility", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "accessibility", obj, ["normal"]);
    this._addCss("HScrollBar", "accessibility", obj, ["normal"]);
    this._addCss("HScrollBar>#incbutton", "accessibility", obj, ["normal"]);
    this._addCss("HScrollBar>#decbutton", "accessibility", obj, ["normal"]);
    this._addCss("HScrollBar>#trackbar", "accessibility", obj, ["normal"]);
    this._addCss("HScrollBarControl", "accessibility", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "accessibility", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "accessibility", obj, ["normal"]);
    this._addCss("Radio", "accessibility", obj, ["normal"]);
    this._addCss("RadioControl", "accessibility", obj, ["normal"]);
    this._addCss("CheckBox", "accessibility", obj, ["normal"]);
    this._addCss("CheckBoxControl", "accessibility", obj, ["normal"]);
    this._addCss("GroupBox", "accessibility", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "accessibility", obj, ["normal"]);
    this._addCss("Grid>#controlCheckBox", "accessibility", obj, ["normal"]);
    this._addCss("Grid>#controlRadio", "accessibility", obj, ["normal"]);

    obj = new nexacro.Style_background("#f6f6f6ff","","","0","0","0","0","true");
    this._addCss("VScrollBar", "background", obj, ["normal"]);
    this._addCss("VScrollBarControl", "background", obj, ["normal"]);
    this._addCss("HScrollBar", "background", obj, ["normal"]);
    this._addCss("HScrollBar>#trackbar", "background", obj, ["normal"]);
    this._addCss("HScrollBarControl", "background", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "background", obj, ["normal"]);

    obj = new nexacro.Style_value("40");
    this._addCss("VScrollBar", "barminsize", obj, ["normal"]);
    this._addCss("VScrollBarControl", "barminsize", obj, ["normal"]);
    this._addCss("HScrollBar", "barminsize", obj, ["normal"]);
    this._addCss("HScrollBarControl", "barminsize", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("VScrollBar", "baroutsize", obj, ["normal"]);
    this._addCss("VScrollBarControl", "baroutsize", obj, ["normal"]);
    this._addCss("HScrollBar", "baroutsize", obj, ["normal"]);
    this._addCss("HScrollBarControl", "baroutsize", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("VScrollBar", "cursor", obj, ["normal"]);
    this._addCss("VScrollBar>#incbutton", "cursor", obj, ["normal"]);
    this._addCss("VScrollBar>#decbutton", "cursor", obj, ["normal"]);
    this._addCss("VScrollBar>#trackbar", "cursor", obj, ["normal"]);
    this._addCss("VScrollBarControl", "cursor", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "cursor", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "cursor", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "cursor", obj, ["normal"]);
    this._addCss("HScrollBar", "cursor", obj, ["normal"]);
    this._addCss("HScrollBar>#incbutton", "cursor", obj, ["normal"]);
    this._addCss("HScrollBar>#decbutton", "cursor", obj, ["normal"]);
    this._addCss("HScrollBar>#trackbar", "cursor", obj, ["normal"]);
    this._addCss("HScrollBarControl", "cursor", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "cursor", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "cursor", obj, ["normal"]);
    this._addCss("Edit", "cursor", obj, ["normal"]);
    this._addCss("EditControl", "cursor", obj, ["normal"]);
    this._addCss("TextAreaControl", "cursor", obj, ["normal"]);
    this._addCss("MaskEdit", "cursor", obj, ["normal"]);
    this._addCss("MaskEditControl", "cursor", obj, ["normal"]);
    this._addCss("ListBox", "cursor", obj, ["normal"]);
    this._addCss("ListBoxControl", "cursor", obj, ["normal"]);
    this._addCss("Combo", "cursor", obj, ["normal"]);
    this._addCss("ComboControl", "cursor", obj, ["normal"]);
    this._addCss("CheckBox", "cursor", obj, ["normal"]);
    this._addCss("CheckBoxControl", "cursor", obj, ["normal"]);
    this._addCss("Div", "cursor", obj, ["normal"]);
    this._addCss("PopupDiv", "cursor", obj, ["normal"]);
    this._addCss("ImageViewer", "cursor", obj, ["normal"]);
    this._addCss("GroupBox", "cursor", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#yearspin>#spinedit", "cursor", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#yearspin>#spinupbutton", "cursor", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#yearspin>#spindownbutton", "cursor", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin>#spinedit", "cursor", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin>#spinupbutton", "cursor", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin>#spindownbutton", "cursor", obj, ["normal"]);
    this._addCss("Calendar", "cursor", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar", "cursor", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "cursor", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "cursor", obj, ["normal"]);
    this._addCss("CalendarControl", "cursor", obj, ["normal"]);
    this._addCss("Grid", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controledit", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlCheckBox", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlRadio", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "cursor", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree", "cursor", obj, ["normal"]);
    this._addCss("Tab", "cursor", obj, ["normal"]);
    this._addCss("Tabpage", "cursor", obj, ["normal"]);
    this._addCss("Menu", "cursor", obj, ["normal"]);
    this._addCss("ProgressBar", "cursor", obj, ["normal"]);
    this._addCss("FileUpload", "cursor", obj, ["normal"]);
    this._addCss("FileDownload", "cursor", obj, ["normal"]);
    this._addCss(".grd_MF_grd", "cursor", obj, ["normal"]);

    obj = new nexacro.Style_value("0");
    this._addCss("VScrollBar", "decbtnsize", obj, ["normal"]);
    this._addCss("VScrollBarControl", "decbtnsize", obj, ["normal"]);
    this._addCss("HScrollBar", "decbtnsize", obj, ["normal"]);
    this._addCss("HScrollBarControl", "decbtnsize", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("VScrollBar", "gradation", obj, ["normal"]);
    this._addCss("VScrollBar>#incbutton", "gradation", obj, ["normal"]);
    this._addCss("VScrollBar>#decbutton", "gradation", obj, ["normal"]);
    this._addCss("VScrollBar>#trackbar", "gradation", obj, ["normal"]);
    this._addCss("VScrollBarControl", "gradation", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "gradation", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "gradation", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "gradation", obj, ["normal"]);
    this._addCss("HScrollBar", "gradation", obj, ["normal"]);
    this._addCss("HScrollBar>#incbutton", "gradation", obj, ["normal"]);
    this._addCss("HScrollBar>#decbutton", "gradation", obj, ["normal"]);
    this._addCss("HScrollBar>#trackbar", "gradation", obj, ["normal", "mouseover"]);
    this._addCss("HScrollBarControl", "gradation", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "gradation", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "gradation", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "gradation", obj, ["normal"]);
    this._addCss("Edit", "gradation", obj, ["normal", "mouseover", "focused"]);
    this._addCss("EditControl", "gradation", obj, ["normal", "mouseover", "focused"]);
    this._addCss("TextAreaControl", "gradation", obj, ["normal", "mouseover", "focused"]);
    this._addCss("MaskEdit", "gradation", obj, ["normal", "mouseover", "focused"]);
    this._addCss("MaskEditControl", "gradation", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Spin", "gradation", obj, ["normal"]);
    this._addCss("Spin>#spinupbutton", "gradation", obj, ["normal", "focused"]);
    this._addCss("Spin>#spindownbutton", "gradation", obj, ["normal", "focused"]);
    this._addCss("SpinControl", "gradation", obj, ["normal"]);
    this._addCss("SpinControl>#spinupbutton", "gradation", obj, ["normal", "focused"]);
    this._addCss("SpinControl>#spindownbutton", "gradation", obj, ["normal", "focused"]);
    this._addCss("Combo>#combolist", "gradation", obj, ["normal"]);
    this._addCss("ComboControl>#combolist", "gradation", obj, ["normal"]);
    this._addCss("CheckBox", "gradation", obj, ["normal"]);
    this._addCss("CheckBoxControl", "gradation", obj, ["normal"]);
    this._addCss("Step", "gradation", obj, ["normal"]);
    this._addCss("ImageViewer", "gradation", obj, ["normal"]);
    this._addCss("GroupBox", "gradation", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#yearspin>#spinupbutton", "gradation", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#yearspin>#spindownbutton", "gradation", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin", "gradation", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin>#spinedit", "gradation", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin>#spinupbutton", "gradation", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin>#spindownbutton", "gradation", obj, ["normal"]);
    this._addCss("Calendar", "gradation", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "gradation", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "gradation", obj, ["normal"]);
    this._addCss("CalendarControl", "gradation", obj, ["normal"]);
    this._addCss("Grid", "gradation", obj, ["normal"]);
    this._addCss("Grid>#head", "gradation", obj, ["normal"]);
    this._addCss("Grid>#body", "gradation", obj, ["normal", "disabled"]);
    this._addCss("Grid>#summ", "gradation", obj, ["normal"]);
    this._addCss("Grid>#summary", "gradation", obj, ["normal"]);
    this._addCss("Grid>#controledit", "gradation", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlSpin", "gradation", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlSpin>#spinupbutton", "gradation", obj, ["normal", "focused"]);
    this._addCss("Grid>#controlSpin>#spindownbutton", "gradation", obj, ["normal", "focused"]);
    this._addCss("Grid>#controltextarea", "gradation", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlmaskedit", "gradation", obj, ["normal", "mouseover"]);
    this._addCss("Grid>#controlcombo", "gradation", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "gradation", obj, ["normal", "readonly"]);
    this._addCss("Grid>#controlcombo>#combolist", "gradation", obj, ["normal"]);
    this._addCss("Grid>#controlCheckBox", "gradation", obj, ["normal"]);
    this._addCss("Grid>#controlRadio", "gradation", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "gradation", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "gradation", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "gradation", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "gradation", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "gradation", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "gradation", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "gradation", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "gradation", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "gradation", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "gradation", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "gradation", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "gradation", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "gradation", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "gradation", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree", "gradation", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#head", "gradation", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#body", "gradation", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_WF_tree>#summ", "gradation", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#summary", "gradation", obj, ["normal"]);
    this._addCss("Tab", "gradation", obj, ["normal"]);
    this._addCss("Tabpage", "gradation", obj, ["normal"]);
    this._addCss("Menu", "gradation", obj, ["normal"]);
    this._addCss("ProgressBar", "gradation", obj, ["normal"]);
    this._addCss("FileUpload", "gradation", obj, ["normal"]);
    this._addCss("StepControl", "gradation", obj, ["normal"]);
    this._addCss(".grd_MF_grd>#body", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("VScrollBar", "imgoutsize", obj, ["normal"]);
    this._addCss("VScrollBarControl", "imgoutsize", obj, ["normal"]);
    this._addCss("HScrollBar", "imgoutsize", obj, ["normal"]);
    this._addCss("HScrollBarControl", "imgoutsize", obj, ["normal"]);

    obj = new nexacro.Style_value("0");
    this._addCss("VScrollBar", "incbtnsize", obj, ["normal"]);
    this._addCss("VScrollBarControl", "incbtnsize", obj, ["normal"]);
    this._addCss("HScrollBar", "incbtnsize", obj, ["normal"]);
    this._addCss("HScrollBarControl", "incbtnsize", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("VScrollBar", "opacity", obj, ["normal", "disabled"]);
    this._addCss("VScrollBar>#incbutton", "opacity", obj, ["normal"]);
    this._addCss("VScrollBar>#decbutton", "opacity", obj, ["normal"]);
    this._addCss("VScrollBar>#trackbar", "opacity", obj, ["normal"]);
    this._addCss("VScrollBarControl", "opacity", obj, ["normal", "disabled"]);
    this._addCss("VScrollBarControl>#incbutton", "opacity", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "opacity", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "opacity", obj, ["normal"]);
    this._addCss("HScrollBar", "opacity", obj, ["normal"]);
    this._addCss("HScrollBar>#incbutton", "opacity", obj, ["normal"]);
    this._addCss("HScrollBar>#decbutton", "opacity", obj, ["normal"]);
    this._addCss("HScrollBar>#trackbar", "opacity", obj, ["normal"]);
    this._addCss("HScrollBarControl", "opacity", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "opacity", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "opacity", obj, ["normal"]);
    this._addCss("Edit", "opacity", obj, ["normal"]);
    this._addCss("EditControl", "opacity", obj, ["normal"]);
    this._addCss("TextAreaControl", "opacity", obj, ["normal"]);
    this._addCss("MaskEdit", "opacity", obj, ["normal"]);
    this._addCss("MaskEditControl", "opacity", obj, ["normal"]);
    this._addCss("Spin>#spindownbutton", "opacity", obj, ["normal", "focused"]);
    this._addCss("SpinControl>#spindownbutton", "opacity", obj, ["normal", "focused"]);
    this._addCss("CheckBox", "opacity", obj, ["normal"]);
    this._addCss("CheckBoxControl", "opacity", obj, ["normal"]);
    this._addCss("Div", "opacity", obj, ["normal"]);
    this._addCss("PopupDiv", "opacity", obj, ["normal"]);
    this._addCss("Step", "opacity", obj, ["normal"]);
    this._addCss("ImageViewer", "opacity", obj, ["normal"]);
    this._addCss("GroupBox", "opacity", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#yearspin", "opacity", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#yearspin>#spinedit", "opacity", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#yearspin>#spinupbutton", "opacity", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("DatePicker>#popupcalendar>#yearspin>#spindownbutton", "opacity", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin", "opacity", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin>#spinedit", "opacity", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin>#spinupbutton", "opacity", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin>#spindownbutton", "opacity", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("Calendar", "opacity", obj, ["normal"]);
    this._addCss("Calendar>#dropbutton", "opacity", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar", "opacity", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "opacity", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "opacity", obj, ["normal"]);
    this._addCss("CalendarControl", "opacity", obj, ["normal"]);
    this._addCss("Grid", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controledit", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controlSpin", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controlSpin>#spinupbutton", "opacity", obj, ["normal", "focused"]);
    this._addCss("Grid>#controlSpin>#spindownbutton", "opacity", obj, ["normal", "focused"]);
    this._addCss("Grid>#controltextarea", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controlCheckBox", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controlRadio", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "opacity", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "opacity", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree", "opacity", obj, ["normal"]);
    this._addCss("Tab", "opacity", obj, ["normal"]);
    this._addCss("Tabpage", "opacity", obj, ["normal"]);
    this._addCss("PopupMenu", "opacity", obj, ["normal"]);
    this._addCss("Menu", "opacity", obj, ["normal"]);
    this._addCss("ProgressBar", "opacity", obj, ["normal"]);
    this._addCss("FileUpload", "opacity", obj, ["normal"]);
    this._addCss("FileDownload", "opacity", obj, ["normal"]);
    this._addCss("StepControl", "opacity", obj, ["normal"]);
    this._addCss(".grd_MF_grd", "opacity", obj, ["normal"]);

    obj = new nexacro.Style_value("11");
    this._addCss("VScrollBar", "scrollbarsize", obj, ["normal"]);
    this._addCss("VScrollBarControl", "scrollbarsize", obj, ["normal"]);
    this._addCss("HScrollBar", "scrollbarsize", obj, ["normal"]);
    this._addCss("HScrollBarControl", "scrollbarsize", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("VScrollBar", "trackbarsize", obj, ["normal"]);
    this._addCss("VScrollBarControl", "trackbarsize", obj, ["normal"]);
    this._addCss("HScrollBar", "trackbarsize", obj, ["normal"]);
    this._addCss("HScrollBarControl", "trackbarsize", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("VScrollBar>#incbutton", "background", obj, ["normal"]);
    this._addCss("VScrollBar>#decbutton", "background", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "background", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "background", obj, ["normal"]);
    this._addCss("HScrollBar>#incbutton", "background", obj, ["normal"]);
    this._addCss("HScrollBar>#decbutton", "background", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "background", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "background", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#yearspin>#spinedit", "background", obj, ["mouseover", "focused"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin>#spinedit", "background", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "background", obj, ["normal", "disabled"]);
    this._addCss("FileUpload", "background", obj, ["normal"]);
    this._addCss("Button.TF_menu", "background", obj, ["normal"]);
    this._addCss(".grd_MF_grd>#body", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("");
    this._addCss("VScrollBar>#incbutton", "border", obj, ["normal"]);
    this._addCss("VScrollBar>#decbutton", "border", obj, ["normal"]);
    this._addCss("VScrollBar>#trackbar", "border", obj, ["pushed", "focused", "selected"]);
    this._addCss("VScrollBarControl>#incbutton", "border", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "border", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "border", obj, ["pushed", "focused", "selected"]);
    this._addCss("HScrollBar>#incbutton", "border", obj, ["normal"]);
    this._addCss("HScrollBar>#decbutton", "border", obj, ["normal"]);
    this._addCss("HScrollBar>#trackbar", "border", obj, ["normal", "mouseover", "pushed"]);
    this._addCss("HScrollBarControl>#incbutton", "border", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "border", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "border", obj, ["normal", "pushed"]);
    this._addCss("Spin>#spindownbutton", "border", obj, ["normal", "focused"]);
    this._addCss("SpinControl>#spindownbutton", "border", obj, ["normal", "focused"]);
    this._addCss("DatePicker>#popupcalendar>#yearspin>#spinedit", "border", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin", "border", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin>#spinedit", "border", obj, ["normal"]);
    this._addCss("Grid>#summ", "border", obj, ["normal"]);
    this._addCss("Grid>#summary", "border", obj, ["normal"]);
    this._addCss("Grid>#controlSpin>#spinupbutton", "border", obj, ["normal", "focused"]);
    this._addCss("Grid>#controlSpin>#spindownbutton", "border", obj, ["normal", "focused"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "border", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "border", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_WF_tree", "border", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#summ", "border", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#summary", "border", obj, ["normal"]);
    this._addCss("ProgressBar", "border", obj, ["normal", "disabled"]);
    this._addCss(".grd_MF_cal>#head", "border", obj, ["normal", "disabled", "mouseover"]);
    this._addCss(".grd_MF_grd>#head", "border", obj, ["normal"]);
    this._addCss(".grd_MF_grd>#body", "border", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("VScrollBar>#incbutton", "image", obj, ["normal"]);
    this._addCss("VScrollBar>#decbutton", "image", obj, ["normal"]);
    this._addCss("VScrollBar>#trackbar", "image", obj, ["normal", "pushed", "focused", "selected"]);
    this._addCss("VScrollBarControl>#incbutton", "image", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "image", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "image", obj, ["normal", "pushed", "focused", "selected"]);
    this._addCss("HScrollBar>#incbutton", "image", obj, ["normal"]);
    this._addCss("HScrollBar>#decbutton", "image", obj, ["normal"]);
    this._addCss("HScrollBar>#trackbar", "image", obj, ["normal", "pushed"]);
    this._addCss("HScrollBarControl>#incbutton", "image", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "image", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "image", obj, ["normal"]);
    this._addCss("Button", "image", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_align("");
    this._addCss("VScrollBar>#incbutton", "imagealign", obj, ["normal"]);
    this._addCss("VScrollBar>#decbutton", "imagealign", obj, ["normal"]);
    this._addCss("VScrollBarControl>#incbutton", "imagealign", obj, ["normal"]);
    this._addCss("VScrollBarControl>#decbutton", "imagealign", obj, ["normal"]);
    this._addCss("HScrollBar>#incbutton", "imagealign", obj, ["normal"]);
    this._addCss("HScrollBar>#decbutton", "imagealign", obj, ["normal"]);
    this._addCss("HScrollBarControl>#incbutton", "imagealign", obj, ["normal"]);
    this._addCss("HScrollBarControl>#decbutton", "imagealign", obj, ["normal"]);
    this._addCss("Button", "imagealign", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#yearspin>#spinupbutton", "imagealign", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#yearspin>#spindownbutton", "imagealign", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin>#spinupbutton", "imagealign", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin>#spindownbutton", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "imagealign", obj, ["normal"]);

    obj = new nexacro.Style_background("#b6b6b6ff","","","0","0","0","0","true");
    this._addCss("VScrollBar>#trackbar", "background", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "background", obj, ["normal"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("VScrollBar>#trackbar", "imagealign", obj, ["normal"]);
    this._addCss("VScrollBarControl>#trackbar", "imagealign", obj, ["normal"]);
    this._addCss("HScrollBar>#trackbar", "imagealign", obj, ["normal"]);
    this._addCss("HScrollBarControl>#trackbar", "imagealign", obj, ["normal"]);
    this._addCss("Spin>#spinupbutton", "imagealign", obj, ["normal", "focused"]);
    this._addCss("Spin>#spindownbutton", "imagealign", obj, ["normal", "focused"]);
    this._addCss("SpinControl>#spindownbutton", "imagealign", obj, ["normal", "focused"]);
    this._addCss("DatePicker>#popupcalendar>#prevbutton", "imagealign", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#nextbutton", "imagealign", obj, ["normal"]);
    this._addCss("Calendar>#spinupbutton", "imagealign", obj, ["normal"]);
    this._addCss("Calendar>#spindownbutton", "imagealign", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "imagealign", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "imagealign", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "imagealign", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#controlSpin>#spindownbutton", "imagealign", obj, ["normal", "focused"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "imagealign", obj, ["normal"]);
    this._addCss("Tab>#spinupbutton", "imagealign", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "imagealign", obj, ["normal"]);
    this._addCss("Tab>#extrabutton", "imagealign", obj, ["normal", "focused"]);
    this._addCss("Button.btn_WFDA_Search", "imagealign", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#979797ff","","","0","0","0","0","true");
    this._addCss("VScrollBar>#trackbar", "background", obj, ["mouseover"]);
    this._addCss("VScrollBarControl>#trackbar", "background", obj, ["mouseover"]);
    this._addCss("HScrollBar>#trackbar", "background", obj, ["mouseover"]);
    this._addCss("HScrollBarControl>#trackbar", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#91aad8ff","","","0","0","0","0","true");
    this._addCss("VScrollBar>#trackbar", "background", obj, ["pushed", "focused", "selected"]);
    this._addCss("VScrollBarControl>#trackbar", "background", obj, ["pushed", "focused", "selected"]);
    this._addCss("HScrollBar>#trackbar", "background", obj, ["pushed"]);
    this._addCss("HScrollBarControl>#trackbar", "background", obj, ["pushed"]);

    obj = new nexacro.Style_padding("");
    this._addCss("VScrollBar>#trackbar", "imagepadding", obj, ["pushed", "focused", "selected"]);
    this._addCss("VScrollBarControl>#trackbar", "imagepadding", obj, ["pushed", "focused", "selected"]);
    this._addCss("HScrollBar>#trackbar", "imagepadding", obj, ["pushed"]);
    this._addCss("HScrollBarControl>#trackbar", "imagepadding", obj, ["pushed"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "imagepadding", obj, ["normal"]);

    obj = new nexacro.Style_value("50");
    this._addCss("HScrollBar", "opacity", obj, ["disabled"]);
    this._addCss("HScrollBarControl", "opacity", obj, ["disabled"]);
    this._addCss("Step", "opacity", obj, ["disabled"]);
    this._addCss("ImageViewer", "opacity", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "opacity", obj, ["disabled"]);
    this._addCss("FileDownload", "opacity", obj, ["disabled"]);
    this._addCss("StepControl", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_MDI", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_MDIS", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_MDI_spinup", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_MDI_spindn", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_MDI_screenmax", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_MDI_screenpop", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_MDI_screenH", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_MDI_screenV", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_MDI_screenclose", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_MDI_open", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_RF_quick01", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_RF_quick02", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_RF_quick03", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_RF_quick04", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_RF_quick05", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_RF_quick06", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_BF_extend", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_WF_help", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_WF_search", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_paging", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_pag_first", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_pag_prev", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_pag_next", "opacity", obj, ["disabled"]);
    this._addCss("Button.btn_pag_end", "opacity", obj, ["disabled"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss(">#resizebutton", "align", obj, ["normal"]);
    this._addCss(">#resizebuttonControl", "align", obj, ["normal"]);
    this._addCss("Button", "align", obj, ["normal"]);
    this._addCss("Combo>#dropbutton", "align", obj, ["pushed"]);
    this._addCss("ComboControl>#dropbutton", "align", obj, ["pushed"]);
    this._addCss("Div", "align", obj, ["normal"]);
    this._addCss("PopupDiv", "align", obj, ["normal"]);
    this._addCss("Step", "align", obj, ["normal"]);
    this._addCss("ImageViewer", "align", obj, ["normal"]);
    this._addCss("DatePicker", "align", obj, ["normal"]);
    this._addCss("DatePickerControl", "align", obj, ["normal"]);
    this._addCss("Grid", "align", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "align", obj, ["mouseover", "focused", "selected", "pushed", "readonly"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "align", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree", "align", obj, ["normal"]);
    this._addCss("Button.btn_WFDA_tab", "align", obj, ["normal"]);
    this._addCss("ProgressBar", "align", obj, ["normal"]);
    this._addCss("StepControl", "align", obj, ["normal"]);
    this._addCss("Button.TF_menu", "align", obj, ["normal"]);
    this._addCss("Button.Fav_setting", "align", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Static.LF_tit", "align", obj, ["normal"]);
    this._addCss("Button.btn_RF_quick01", "align", obj, ["normal"]);
    this._addCss("Button.btn_RF_quick02", "align", obj, ["normal"]);
    this._addCss("Button.btn_RF_quick03", "align", obj, ["normal"]);
    this._addCss("Button.btn_RF_quick04", "align", obj, ["normal"]);
    this._addCss("Button.btn_RF_quick05", "align", obj, ["normal"]);
    this._addCss("Button.btn_RF_quick06", "align", obj, ["normal"]);
    this._addCss("Button.btn_paging", "align", obj, ["normal"]);
    this._addCss("Static.sta_LOGIN_bg", "align", obj, ["normal"]);
    this._addCss(".sta_MF_listTitle", "align", obj, ["normal"]);
    this._addCss(".sta_MF_caltxt", "align", obj, ["normal"]);
    this._addCss(".grd_MF_cal", "align", obj, ["normal"]);
    this._addCss(".grd_MF_cal>#body", "align", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Static.sta_WF_mainImage", "align", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WFDA_resize.png","","0","0","0","0","true");
    this._addCss(">#resizebutton", "background", obj, ["normal"]);
    this._addCss(">#resizebuttonControl", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Static", "background", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("Spin>#spinupbutton", "background", obj, ["normal", "focused", "disabled"]);
    this._addCss("Spin>#spindownbutton", "background", obj, ["normal", "focused", "disabled"]);
    this._addCss("SpinControl>#spinedit", "background", obj, ["mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("SpinControl>#spinupbutton", "background", obj, ["normal", "focused", "disabled"]);
    this._addCss("SpinControl>#spindownbutton", "background", obj, ["normal", "focused", "disabled"]);
    this._addCss("Combo>#comboedit", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("ComboControl>#comboedit", "background", obj, ["normal", "mouseover", "pushed", "focused", "disabled"]);
    this._addCss("Radio", "background", obj, ["normal"]);
    this._addCss("RadioControl", "background", obj, ["normal"]);
    this._addCss("CheckBox", "background", obj, ["normal"]);
    this._addCss("CheckBoxControl", "background", obj, ["normal"]);
    this._addCss("Div", "background", obj, ["normal"]);
    this._addCss("PopupDiv", "background", obj, ["normal"]);
    this._addCss("Step", "background", obj, ["normal"]);
    this._addCss("ImageViewer", "background", obj, ["normal"]);
    this._addCss("GroupBox", "background", obj, ["normal", "disabled"]);
    this._addCss("DatePicker>#popupcalendar>#prevbutton", "background", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#nextbutton", "background", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#yearspin>#spinedit", "background", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#yearspin>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#yearspin>#spindownbutton", "background", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin>#spinedit", "background", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin>#spindownbutton", "background", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "background", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Calendar>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "background", obj, ["mouseover", "pushed"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "background", obj, ["mouseover", "pushed"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "background", obj, ["mouseover", "pushed"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "background", obj, ["mouseover", "pushed"]);
    this._addCss("CalendarControl>#calendaredit", "background", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Grid", "background", obj, ["normal"]);
    this._addCss("Grid>#controlSpin>#spinedit", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled", "readonly"]);
    this._addCss("Grid>#controlSpin>#spinupbutton", "background", obj, ["mouseover", "pushed", "disabled"]);
    this._addCss("Grid>#controlSpin>#spindownbutton", "background", obj, ["mouseover", "pushed", "disabled"]);
    this._addCss("Grid>#controlcombo>#comboedit", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled", "readonly"]);
    this._addCss("Grid>#controlCheckBox", "background", obj, ["normal"]);
    this._addCss("Grid>#controlRadio", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "background", obj, ["mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "background", obj, ["mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "background", obj, ["mouseover", "pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "background", obj, ["mouseover", "pushed"]);
    this._addCss("Grid.grd_WF_tree", "background", obj, ["normal"]);
    this._addCss("Tab", "background", obj, ["normal"]);
    this._addCss("Tabpage", "background", obj, ["normal"]);
    this._addCss("Tabpage.Tab_WF_L", "background", obj, ["normal"]);
    this._addCss("Tabpage.Tab_WF_R", "background", obj, ["normal"]);
    this._addCss("Tabpage.Tab_WF_B", "background", obj, ["normal"]);
    this._addCss("Tab>#spinupbutton", "background", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "background", obj, ["normal"]);
    this._addCss("Static.sta_WFDA_tabLine", "background", obj, ["normal"]);
    this._addCss("StepControl", "background", obj, ["normal"]);
    this._addCss("Button.TF_Logout", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Static.sta_WF_cal", "background", obj, ["normal"]);
    this._addCss("Calendar.cal_WF_P>#calendaredit", "background", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Calendar.cal_WF_P>#dropbutton", "background", obj, ["normal"]);
    this._addCss(".btn_MF_view", "background", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);
    this._addCss(".grd_MF_cal", "background", obj, ["normal"]);
    this._addCss("Button.btn_POP_close", "background", obj, ["normal", "disabled", "mouseover", "pushed", "focused", "selected"]);
    this._addCss("Combo.readonly>#dropbutton", "background", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_color("#222222");
    this._addCss("Static", "color", obj, ["normal"]);
    this._addCss("Edit", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("EditControl", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("TextArea", "color", obj, ["normal"]);
    this._addCss("TextAreaControl", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("MaskEdit", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("MaskEditControl", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Spin", "color", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "color", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("SpinControl", "color", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "color", obj, ["mouseover", "pushed", "selected", "focused"]);
    this._addCss("Combo", "color", obj, ["normal"]);
    this._addCss("Combo>#comboedit", "color", obj, ["normal"]);
    this._addCss("ComboControl", "color", obj, ["normal"]);
    this._addCss("ComboControl>#comboedit", "color", obj, ["normal"]);
    this._addCss("Radio", "color", obj, ["normal"]);
    this._addCss("CheckBox", "color", obj, ["normal"]);
    this._addCss("CheckBoxControl", "color", obj, ["normal"]);
    this._addCss("Div", "color", obj, ["normal"]);
    this._addCss("PopupDiv", "color", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#yearspin", "color", obj, ["normal"]);
    this._addCss("Calendar", "color", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "color", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("CalendarControl", "color", obj, ["normal"]);
    this._addCss("CalendarControl>#calendaredit", "color", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("Grid>#controledit", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlSpin", "color", obj, ["normal", "pushed", "focused"]);
    this._addCss("Grid>#controlSpin>#spinedit", "color", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Grid>#controltextarea", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlmaskedit", "color", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcombo", "color", obj, ["normal", "pushed", "focused"]);
    this._addCss("Grid>#controlcombo>#comboedit", "color", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Grid>#controlcalendar", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "color", obj, ["normal", "mouseover", "selected"]);

    obj = new nexacro.Style_color("#888888");
    this._addCss("Static", "color", obj, ["disabled"]);
    this._addCss("Edit", "color", obj, ["disabled"]);
    this._addCss("EditControl", "color", obj, ["disabled"]);
    this._addCss("TextArea", "color", obj, ["disabled"]);
    this._addCss("TextAreaControl", "color", obj, ["disabled"]);
    this._addCss("MaskEdit", "color", obj, ["disabled"]);
    this._addCss("MaskEditControl", "color", obj, ["disabled"]);
    this._addCss("Spin>#spinedit", "color", obj, ["disabled"]);
    this._addCss("SpinControl>#spinedit", "color", obj, ["disabled"]);
    this._addCss("ListBox", "color", obj, ["disabled"]);
    this._addCss("ListBoxControl", "color", obj, ["disabled"]);
    this._addCss("Combo>#comboedit", "color", obj, ["disabled"]);
    this._addCss("ComboControl>#comboedit", "color", obj, ["disabled"]);
    this._addCss("Radio", "color", obj, ["disabled"]);
    this._addCss("CheckBox", "color", obj, ["disabled"]);
    this._addCss("CheckBoxControl", "color", obj, ["disabled"]);
    this._addCss("Calendar", "color", obj, ["disabled"]);
    this._addCss("Calendar>#calendaredit", "color", obj, ["disabled"]);
    this._addCss("CalendarControl", "color", obj, ["disabled"]);
    this._addCss("CalendarControl>#calendaredit", "color", obj, ["disabled"]);
    this._addCss("Grid>#controledit", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlSpin>#spinedit", "color", obj, ["disabled"]);
    this._addCss("Grid>#controltextarea", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlmaskedit", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo>#comboedit", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "color", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#d8d8d8ff","");
    this._addCss("Edit", "border", obj, ["normal", "disabled"]);
    this._addCss("EditControl", "border", obj, ["normal", "disabled"]);
    this._addCss("TextArea", "border", obj, ["normal"]);
    this._addCss("TextAreaControl", "border", obj, ["normal", "disabled"]);
    this._addCss("MaskEdit", "border", obj, ["normal"]);
    this._addCss("MaskEditControl", "border", obj, ["normal"]);
    this._addCss("Spin", "border", obj, ["disabled"]);
    this._addCss("SpinControl", "border", obj, ["disabled"]);
    this._addCss("ListBox", "border", obj, ["disabled"]);
    this._addCss("ListBoxControl", "border", obj, ["disabled"]);
    this._addCss("Combo", "border", obj, ["normal", "disabled"]);
    this._addCss("ComboControl", "border", obj, ["normal", "disabled"]);
    this._addCss("Calendar", "border", obj, ["normal", "disabled"]);
    this._addCss("CalendarControl", "border", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controledit", "border", obj, ["disabled"]);
    this._addCss("Grid>#controlSpin", "border", obj, ["disabled"]);
    this._addCss("Grid>#controltextarea", "border", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo", "border", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar", "border", obj, ["normal"]);
    this._addCss("Edit.readonly", "border", obj, ["normal", "mouseover", "focused"]);
    this._addCss("MaskEdit.readonly", "border", obj, ["normal", "mouseover", "focused"]);
    this._addCss("TextArea.readonly", "border", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Spin.readonly", "border", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Combo.readonly", "border", obj, ["normal", "mouseover", "focused", "pushed", "selected"]);
    this._addCss("Calendar.readonly", "border", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);

    obj = new nexacro.Style_padding("0 5 0 5");
    this._addCss("Edit", "padding", obj, ["normal"]);
    this._addCss("EditControl", "padding", obj, ["normal"]);
    this._addCss("MaskEdit", "padding", obj, ["normal"]);
    this._addCss("MaskEditControl", "padding", obj, ["normal"]);
    this._addCss("Grid>#controledit", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "padding", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#224181ff","");
    this._addCss("Edit", "border", obj, ["mouseover", "focused"]);
    this._addCss("EditControl", "border", obj, ["mouseover", "focused"]);
    this._addCss("TextArea", "border", obj, ["mouseover", "focused"]);
    this._addCss("TextAreaControl", "border", obj, ["mouseover", "focused"]);
    this._addCss("MaskEdit", "border", obj, ["mouseover", "focused"]);
    this._addCss("MaskEditControl", "border", obj, ["mouseover", "focused"]);
    this._addCss("Spin", "border", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("SpinControl", "border", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("ListBox", "border", obj, ["mouseover", "focused", "selected"]);
    this._addCss("ListBoxControl", "border", obj, ["mouseover", "focused", "selected"]);
    this._addCss("Combo", "border", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("ComboControl", "border", obj, ["mouseover", "focused", "pushed"]);
    this._addCss("Calendar", "border", obj, ["mouseover", "selected", "focused"]);
    this._addCss("CalendarControl", "border", obj, ["mouseover", "selected", "focused"]);
    this._addCss("Grid>#controledit", "border", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlSpin", "border", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controltextarea", "border", obj, ["mouseover", "focused"]);
    this._addCss("Grid>#controlmaskedit", "border", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcombo", "border", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Grid>#controlcalendar", "border", obj, ["mouseover", "pushed"]);
    this._addCss("Combo.cmb_WF_P", "border", obj, ["mouseover", "focused", "pushed"]);

    obj = new nexacro.Style_background("#f5f5f5ff","","","0","0","0","0","true");
    this._addCss("Edit", "background", obj, ["disabled"]);
    this._addCss("EditControl", "background", obj, ["disabled"]);
    this._addCss("TextArea", "background", obj, ["disabled"]);
    this._addCss("TextAreaControl", "background", obj, ["disabled"]);
    this._addCss("MaskEdit", "background", obj, ["disabled"]);
    this._addCss("MaskEditControl", "background", obj, ["disabled"]);
    this._addCss("Spin", "background", obj, ["disabled"]);
    this._addCss("SpinControl", "background", obj, ["disabled"]);
    this._addCss("Combo", "background", obj, ["disabled"]);
    this._addCss("Combo>#dropbutton", "background", obj, ["disabled"]);
    this._addCss("ComboControl", "background", obj, ["disabled"]);
    this._addCss("ComboControl>#dropbutton", "background", obj, ["disabled"]);
    this._addCss("Calendar", "background", obj, ["disabled"]);
    this._addCss("Calendar>#calendaredit", "background", obj, ["disabled"]);
    this._addCss("CalendarControl", "background", obj, ["disabled"]);
    this._addCss("CalendarControl>#calendaredit", "background", obj, ["disabled"]);
    this._addCss("Grid>#controledit", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlSpin", "background", obj, ["disabled"]);
    this._addCss("Grid>#controltextarea", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlmaskedit", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlcombo", "background", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "background", obj, ["disabled"]);

    obj = new nexacro.Style_padding("5 5 5 5");
    this._addCss("TextArea", "padding", obj, ["normal"]);
    this._addCss("TextAreaControl", "padding", obj, ["normal"]);
    this._addCss("Step", "padding", obj, ["normal"]);
    this._addCss("StepControl", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("3");
    this._addCss("TextArea", "linespace", obj, ["normal"]);
    this._addCss("TextAreaControl", "linespace", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "linespace", obj, ["normal"]);

    obj = new nexacro.Style_align("right  middle");
    this._addCss("MaskEdit", "align", obj, ["normal"]);
    this._addCss("MaskEditControl", "align", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "align", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#cacacaff","");
    this._addCss("MaskEdit", "border", obj, ["disabled"]);
    this._addCss("MaskEditControl", "border", obj, ["disabled"]);
    this._addCss("Grid>#controlmaskedit", "border", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WF_common_N.png","stretch","5","5","0","0","true");
    this._addCss("Button", "background", obj, ["normal"]);

    obj = new nexacro.Style_color("#112e6f");
    this._addCss("Button", "color", obj, ["normal", "focused"]);

    obj = new nexacro.Style_value("hand");
    this._addCss("Button", "cursor", obj, ["normal"]);
    this._addCss("Spin", "cursor", obj, ["normal"]);
    this._addCss("Spin>#spinupbutton", "cursor", obj, ["normal", "focused"]);
    this._addCss("Spin>#spindownbutton", "cursor", obj, ["normal", "focused"]);
    this._addCss("SpinControl", "cursor", obj, ["normal"]);
    this._addCss("SpinControl>#spinupbutton", "cursor", obj, ["normal", "focused"]);
    this._addCss("SpinControl>#spindownbutton", "cursor", obj, ["normal", "focused"]);
    this._addCss("Combo>#dropbutton", "cursor", obj, ["normal"]);
    this._addCss("ComboControl>#dropbutton", "cursor", obj, ["normal"]);
    this._addCss("Step", "cursor", obj, ["normal"]);
    this._addCss("DatePicker", "cursor", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#yearspin", "cursor", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin", "cursor", obj, ["normal"]);
    this._addCss("DatePickerControl", "cursor", obj, ["normal"]);
    this._addCss("Calendar>#dropbutton", "cursor", obj, ["normal"]);
    this._addCss("Calendar>#spinupbutton", "cursor", obj, ["normal"]);
    this._addCss("Calendar>#spindownbutton", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlSpin", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlSpin>#spinupbutton", "cursor", obj, ["normal", "focused"]);
    this._addCss("Grid>#controlSpin>#spindownbutton", "cursor", obj, ["normal", "focused"]);
    this._addCss("Grid>#controlcombo", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "cursor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "cursor", obj, ["normal"]);
    this._addCss("Tab>#spinupbutton", "cursor", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "cursor", obj, ["normal"]);
    this._addCss("Tab>#extrabutton", "cursor", obj, ["normal"]);
    this._addCss("Button.btn_WFDA_tab", "cursor", obj, ["normal"]);
    this._addCss("PopupMenu", "cursor", obj, ["normal"]);
    this._addCss("StepControl", "cursor", obj, ["normal"]);
    this._addCss("Button.TF_menu", "cursor", obj, ["normal"]);
    this._addCss("Grid.grd_LF_menu", "cursor", obj, ["normal"]);
    this._addCss("Button.btn_WF_MDI", "cursor", obj, ["normal"]);
    this._addCss("Button.btn_LOGIN_login", "cursor", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_LF_SubMenu", "cursor", obj, ["normal"]);

    obj = new nexacro.Style_font("bold 9 Dotum");
    this._addCss("Button", "font", obj, ["normal"]);
    this._addCss("Step", "font", obj, ["normal"]);
    this._addCss("Menu", "font", obj, ["normal"]);
    this._addCss("Button.TF_menu", "font", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Button.Fav_add", "font", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);
    this._addCss("Button.btn_WF_MDI", "font", obj, ["normal", "mouseover", "pushed", "selected", "disable"]);
    this._addCss("Static.sta_WF_subtit", "font", obj, ["normal"]);
    this._addCss("Static.sta_WF_subtitP", "font", obj, ["normal"]);
    this._addCss("Button.btn_paging", "font", obj, ["normal", "selected"]);
    this._addCss("Edit.edt_LOGIN_id", "font", obj, ["normal", "disabled"]);
    this._addCss("Edit.edt_LOGIN_pw", "font", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_padding("0 0 0 0");
    this._addCss("Button", "padding", obj, ["normal"]);
    this._addCss("Radio", "padding", obj, ["normal"]);
    this._addCss("RadioControl", "padding", obj, ["normal"]);
    this._addCss("CheckBox", "padding", obj, ["normal"]);
    this._addCss("CheckBoxControl", "padding", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "padding", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlCheckBox", "padding", obj, ["normal"]);
    this._addCss("Grid>#controlRadio", "padding", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WF_common_P.png","stretch","5","5","0","0","true");
    this._addCss("Button", "background", obj, ["pushed"]);

    obj = new nexacro.Style_color("#1961d7");
    this._addCss("Button", "color", obj, ["pushed", "selected"]);

    obj = new nexacro.Style_font("bold 9 Dotum underline");
    this._addCss("Button", "font", obj, ["focused"]);
    this._addCss("Button.btn_module", "font", obj, ["focused"]);
    this._addCss("Button.btn_WF_MDI", "font", obj, ["focused"]);
    this._addCss("Button.btn_WF_MDIS", "font", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disable"]);
    this._addCss("Button.btn_paging", "font", obj, ["focused"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WF_common_D.png","stretch","5","5","0","0","true");
    this._addCss("Button", "background", obj, ["disabled"]);

    obj = new nexacro.Style_color("#90949e");
    this._addCss("Button", "color", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WF_module_N.png","stretch","5","5","0","0","true");
    this._addCss("Button.btn_module", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WF_module_O.png","stretch","5","5","0","0","true");
    this._addCss("Button.btn_module", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WF_module_P.png","stretch","5","5","0","0","true");
    this._addCss("Button.btn_module", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WF_module_S.png","stretch","5","5","0","0","true");
    this._addCss("Button.btn_module", "background", obj, ["selected"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WF_module_F.png","quad","0","0","0","0","true");
    this._addCss("Button.btn_module", "background", obj, ["focused"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WF_module_D.png","stretch","5","5","0","0","true");
    this._addCss("Button.btn_module", "background", obj, ["disabled"]);

    obj = new nexacro.Style_color("#f3f3f3");
    this._addCss("Button.btn_module", "color", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WF_sing_N.png","stretch","5","5","0","0","true");
    this._addCss("Button.btn_singdata", "background", obj, ["normal"]);

    obj = new nexacro.Style_color("#4d4d4d");
    this._addCss("Button.btn_singdata", "color", obj, ["normal"]);
    this._addCss("Grid>#controlbutton", "color", obj, ["normal"]);
    this._addCss("FileUpload", "color", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WF_sing_O.png","stretch","5","5","0","0","true");
    this._addCss("Button.btn_singdata", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#4d618b");
    this._addCss("Button.btn_singdata", "color", obj, ["mouseover", "pushed", "focused", "selected"]);
    this._addCss("Grid>#controlbutton", "color", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WF_sing_P.png","stretch","5","5","0","0","true");
    this._addCss("Button.btn_singdata", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WF_sing_F.png","quad","0","0","0","0","true");
    this._addCss("Button.btn_singdata", "background", obj, ["focused"]);

    obj = new nexacro.Style_font("9 Dotum underline");
    this._addCss("Button.btn_singdata", "font", obj, ["focused"]);
    this._addCss("Grid>#controlbutton", "font", obj, ["focused"]);
    this._addCss("Button.TF_Logout", "font", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WF_sing_S.png","stretch","5","5","0","0","true");
    this._addCss("Button.btn_singdata", "background", obj, ["selected"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WF_sing_D.png","stretch","5","5","0","0","true");
    this._addCss("Button.btn_singdata", "background", obj, ["disabled"]);

    obj = new nexacro.Style_color("#a3a3a3");
    this._addCss("Button.btn_singdata", "color", obj, ["disabled"]);
    this._addCss("Grid>#controlbutton", "color", obj, ["disabled"]);

    obj = new nexacro.Style_align("right middle");
    this._addCss("Spin", "align", obj, ["normal"]);
    this._addCss("Spin>#spinedit", "align", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("SpinControl", "align", obj, ["normal"]);
    this._addCss("SpinControl>#spinedit", "align", obj, ["mouseover", "pushed", "selected", "focused", "disabled"]);
    this._addCss("DatePicker>#popupcalendar>#nextbutton", "align", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#yearspin", "align", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin", "align", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "align", obj, ["normal"]);
    this._addCss("Grid>#controlSpin", "align", obj, ["normal"]);
    this._addCss("Grid>#controlSpin>#spinedit", "align", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled", "readonly"]);
    this._addCss("Grid>#controlcombo>#comboedit", "align", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "align", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#c2c2c2ff","");
    this._addCss("Spin", "border", obj, ["normal"]);
    this._addCss("SpinControl", "border", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#yearspin", "border", obj, ["normal"]);
    this._addCss("Grid>#controledit", "border", obj, ["normal"]);
    this._addCss("Grid>#controlSpin", "border", obj, ["normal"]);
    this._addCss("Grid>#controltextarea", "border", obj, ["normal"]);
    this._addCss("Grid>#controlmaskedit", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "border", obj, ["normal"]);

    obj = new nexacro.Style_value("center middle");
    this._addCss("Spin", "buttonalign", obj, ["normal"]);
    this._addCss("SpinControl", "buttonalign", obj, ["normal"]);
    this._addCss("Combo", "buttonalign", obj, ["normal"]);
    this._addCss("ComboControl", "buttonalign", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#yearspin", "buttonalign", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin", "buttonalign", obj, ["normal"]);
    this._addCss("Grid>#controlSpin", "buttonalign", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "buttonalign", obj, ["normal"]);
    this._addCss("Tab", "buttonalign", obj, ["normal"]);

    obj = new nexacro.Style_value("20");
    this._addCss("Spin", "buttonsize", obj, ["normal"]);
    this._addCss("SpinControl", "buttonsize", obj, ["normal"]);
    this._addCss("Combo", "buttonsize", obj, ["normal"]);
    this._addCss("ComboControl", "buttonsize", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#yearspin", "buttonsize", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin", "buttonsize", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#yearspin", "buttonsize", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "buttonsize", obj, ["normal", "mouseover", "focused"]);
    this._addCss("CalendarControl", "buttonsize", obj, ["normal"]);
    this._addCss("Grid>#controlSpin", "buttonsize", obj, ["normal"]);
    this._addCss("Grid>#controlcombo", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","theme://Images/bg_spinO.png","","0","0","100","50","true");
    this._addCss("Spin", "background", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("SpinControl", "background", obj, ["mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_padding("0 5 0 0");
    this._addCss("Spin>#spinedit", "padding", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://Images/btn_spinup_N.png");
    this._addCss("Spin>#spinupbutton", "image", obj, ["normal", "focused"]);
    this._addCss("SpinControl>#spinupbutton", "image", obj, ["normal", "focused"]);
    this._addCss("DatePicker>#popupcalendar>#yearspin>#spinupbutton", "image", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin>#spinupbutton", "image", obj, ["normal"]);
    this._addCss("Calendar>#spinupbutton", "image", obj, ["normal", "focused"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "image", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlSpin>#spinupbutton", "image", obj, ["normal", "focused", "readonly"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "image", obj, ["normal", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://Images/btn_spinup_O.png");
    this._addCss("Spin>#spinupbutton", "image", obj, ["mouseover"]);
    this._addCss("SpinControl>#spinupbutton", "image", obj, ["mouseover"]);
    this._addCss("DatePicker>#popupcalendar>#yearspin>#spinupbutton", "image", obj, ["mouseover"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin>#spinupbutton", "image", obj, ["mouseover"]);
    this._addCss("Calendar>#spinupbutton", "image", obj, ["mouseover"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "image", obj, ["mouseover"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "image", obj, ["mouseover"]);
    this._addCss("Grid>#controlSpin>#spinupbutton", "image", obj, ["mouseover"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "image", obj, ["mouseover"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "image", obj, ["mouseover"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("theme://Images/btn_spinup_P.png");
    this._addCss("Spin>#spinupbutton", "image", obj, ["pushed"]);
    this._addCss("SpinControl>#spinupbutton", "image", obj, ["pushed"]);
    this._addCss("DatePicker>#popupcalendar>#yearspin>#spinupbutton", "image", obj, ["pushed"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin>#spinupbutton", "image", obj, ["pushed"]);
    this._addCss("Calendar>#spinupbutton", "image", obj, ["pushed"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinupbutton", "image", obj, ["pushed"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinupbutton", "image", obj, ["pushed"]);
    this._addCss("Grid>#controlSpin>#spinupbutton", "image", obj, ["pushed"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "image", obj, ["pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "image", obj, ["pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("theme://Images/btn_spinup_D.png");
    this._addCss("Spin>#spinupbutton", "image", obj, ["disabled"]);
    this._addCss("SpinControl>#spinupbutton", "image", obj, ["disabled"]);
    this._addCss("Calendar>#spinupbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlSpin>#spinupbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("theme://Images/btn_spindn_N.png");
    this._addCss("Spin>#spindownbutton", "image", obj, ["normal", "focused"]);
    this._addCss("SpinControl>#spindownbutton", "image", obj, ["normal", "focused"]);
    this._addCss("DatePicker>#popupcalendar>#yearspin>#spindownbutton", "image", obj, ["normal"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin>#spindownbutton", "image", obj, ["normal"]);
    this._addCss("Calendar>#spindownbutton", "image", obj, ["normal", "focused"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "image", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlSpin>#spindownbutton", "image", obj, ["normal", "focused", "readonly"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "image", obj, ["normal", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://Images/btn_spindn_O.png");
    this._addCss("Spin>#spindownbutton", "image", obj, ["mouseover"]);
    this._addCss("SpinControl>#spindownbutton", "image", obj, ["mouseover"]);
    this._addCss("DatePicker>#popupcalendar>#yearspin>#spindownbutton", "image", obj, ["mouseover"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin>#spindownbutton", "image", obj, ["mouseover"]);
    this._addCss("Calendar>#spindownbutton", "image", obj, ["mouseover"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "image", obj, ["mouseover"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "image", obj, ["mouseover"]);
    this._addCss("Grid>#controlSpin>#spindownbutton", "image", obj, ["mouseover"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "image", obj, ["mouseover"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "image", obj, ["mouseover"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("theme://Images/btn_spindn_P.png");
    this._addCss("Spin>#spindownbutton", "image", obj, ["pushed"]);
    this._addCss("SpinControl>#spindownbutton", "image", obj, ["pushed"]);
    this._addCss("DatePicker>#popupcalendar>#yearspin>#spindownbutton", "image", obj, ["pushed"]);
    this._addCss("DatePicker>#popupcalendar>#monthspin>#spindownbutton", "image", obj, ["pushed"]);
    this._addCss("Calendar>#spindownbutton", "image", obj, ["pushed"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spindownbutton", "image", obj, ["pushed"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spindownbutton", "image", obj, ["pushed"]);
    this._addCss("Grid>#controlSpin>#spindownbutton", "image", obj, ["pushed"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "image", obj, ["pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "image", obj, ["pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("theme://Images/btn_spindn_D.png");
    this._addCss("Spin>#spindownbutton", "image", obj, ["disabled"]);
    this._addCss("SpinControl>#spindownbutton", "image", obj, ["disabled"]);
    this._addCss("Calendar>#spindownbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlSpin>#spindownbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#spindownbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#b2b9c8ff","");
    this._addCss("ListBox", "border", obj, ["normal"]);
    this._addCss("ListBoxControl", "border", obj, ["normal"]);

    obj = new nexacro.Style_color("#5b6271");
    this._addCss("ListBox", "color", obj, ["normal"]);
    this._addCss("ListBoxControl", "color", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("ListBox", "itembackground", obj, ["normal"]);
    this._addCss("ListBoxControl", "itembackground", obj, ["normal"]);

    obj = new nexacro.Style_border("");
    this._addCss("ListBox", "itemborder", obj, ["normal"]);
    this._addCss("ListBoxControl", "itemborder", obj, ["normal"]);
    this._addCss("Radio", "itemborder", obj, ["normal"]);
    this._addCss("Grid>#controlRadio", "itemborder", obj, ["normal"]);
    this._addCss("Menu", "itemborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("","0","0","true","true","true","true");
    this._addCss("ListBox", "itembordertype", obj, ["normal"]);
    this._addCss("ListBoxControl", "itembordertype", obj, ["normal"]);
    this._addCss("Radio", "itembordertype", obj, ["normal"]);
    this._addCss("RadioControl", "itembordertype", obj, ["normal"]);
    this._addCss("Grid>#controlRadio", "itembordertype", obj, ["normal"]);

    obj = new nexacro.Style_value("20");
    this._addCss("ListBox", "itemheight", obj, ["normal"]);
    this._addCss("ListBoxControl", "itemheight", obj, ["normal"]);
    this._addCss("FileUpload", "itemheight", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 5 0 5");
    this._addCss("ListBox", "itempadding", obj, ["normal"]);
    this._addCss("ListBoxControl", "itempadding", obj, ["normal"]);

    obj = new nexacro.Style_background("#eceff4ff","","","0","0","0","0","true");
    this._addCss("ListBox", "itembackground", obj, ["mouseover"]);
    this._addCss("ListBoxControl", "itembackground", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#224181");
    this._addCss("ListBox", "itemcolor", obj, ["mouseover"]);
    this._addCss("ListBoxControl", "itemcolor", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#6a7597ff","","","0","0","0","0","true");
    this._addCss("ListBox", "itembackground", obj, ["selected"]);
    this._addCss("ListBoxControl", "itembackground", obj, ["selected"]);

    obj = new nexacro.Style_background("#fafafaff","","","0","0","0","0","true");
    this._addCss("ListBox", "background", obj, ["disabled"]);
    this._addCss("ListBoxControl", "background", obj, ["disabled"]);

    obj = new nexacro.Style_padding("0 0 0 5");
    this._addCss("Combo>#comboedit", "padding", obj, ["normal"]);
    this._addCss("ComboControl>#comboedit", "padding", obj, ["normal"]);
    this._addCss("Calendar>#calendaredit", "padding", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("CalendarControl>#calendaredit", "padding", obj, ["normal", "mouseover", "focused", "selected"]);
    this._addCss("FileDownload", "padding", obj, ["normal"]);
    this._addCss("Static.sta_WFDA_B", "padding", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Combo>#dropbutton", "background", obj, ["normal"]);
    this._addCss("ComboControl>#dropbutton", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","0","none","","","1","solid","#ffffffff","");
    this._addCss("Combo>#dropbutton", "border", obj, ["normal"]);
    this._addCss("ComboControl>#dropbutton", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "border", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://Images/ico_combo_N.png");
    this._addCss("Combo>#dropbutton", "image", obj, ["normal"]);
    this._addCss("ComboControl>#dropbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "image", obj, ["normal", "readonly"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #f6f7f9");
    this._addCss("Combo>#dropbutton", "gradation", obj, ["mouseover", "focused", "selected"]);
    this._addCss("ComboControl>#dropbutton", "gradation", obj, ["mouseover", "focused", "selected"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "gradation", obj, ["mouseover", "focused", "selected"]);

    obj = new nexacro.Style_value("theme://Images/ico_combo_P.png");
    this._addCss("Combo>#dropbutton", "image", obj, ["mouseover", "focused", "selected", "pushed"]);
    this._addCss("ComboControl>#dropbutton", "image", obj, ["mouseover", "focused", "selected", "pushed"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "image", obj, ["mouseover", "focused", "selected", "pushed"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","0","none","","","1","solid","#c2c8d5ff","");
    this._addCss("Combo>#dropbutton", "border", obj, ["mouseover", "focused", "selected", "pushed"]);
    this._addCss("ComboControl>#dropbutton", "border", obj, ["mouseover", "focused", "selected", "pushed"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "border", obj, ["mouseover", "focused", "selected", "pushed"]);

    obj = new nexacro.Style_gradation("linear 0,0 #f6f7f9 0,100 #fdfefe");
    this._addCss("Combo>#dropbutton", "gradation", obj, ["pushed"]);
    this._addCss("ComboControl>#dropbutton", "gradation", obj, ["pushed"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "gradation", obj, ["pushed"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","0","none","","","1","solid","transparent","");
    this._addCss("Combo>#dropbutton", "border", obj, ["disabled"]);
    this._addCss("ComboControl>#dropbutton", "border", obj, ["disabled"]);
    this._addCss("Combo.readonly>#dropbutton", "border", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_value("theme://Images/ico_combo_D.png");
    this._addCss("Combo>#dropbutton", "image", obj, ["disabled"]);
    this._addCss("ComboControl>#dropbutton", "image", obj, ["disabled"]);
    this._addCss("Combo.readonly>#dropbutton", "image", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_border("1","solid","#000000ff","");
    this._addCss("Combo>#combolist", "border", obj, ["normal"]);
    this._addCss("ComboControl>#combolist", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcombo>#combolist", "border", obj, ["normal"]);

    obj = new nexacro.Style_font("underline 9 Dotum");
    this._addCss("Combo>#combolist", "font", obj, ["mouseover"]);
    this._addCss("ComboControl>#combolist", "font", obj, ["mouseover"]);
    this._addCss("Radio", "font", obj, ["mouseover", "selected", "pushed", "focused"]);
    this._addCss("CheckBox", "font", obj, ["mouseover", "selected", "focused", "pushed"]);
    this._addCss("CheckBoxControl", "font", obj, ["mouseover", "selected", "focused", "pushed"]);

    obj = new nexacro.Style_value("left middle");
    this._addCss("Radio", "buttonalign", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/radio_bg_N.png","","0","0","0","0","true");
    this._addCss("Radio", "buttonbackground", obj, ["normal"]);
    this._addCss("RadioControl", "buttonbackground", obj, ["normal"]);
    this._addCss("Grid>#controlRadio", "buttonbackground", obj, ["normal"]);

    obj = new nexacro.Style_value("0 none #808080");
    this._addCss("Radio", "buttonborder", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Radio", "buttongradation", obj, ["normal"]);
    this._addCss("RadioControl", "buttongradation", obj, ["normal"]);
    this._addCss("CheckBox", "buttongradation", obj, ["normal"]);
    this._addCss("CheckBoxControl", "buttongradation", obj, ["normal"]);
    this._addCss("Grid>#controlCheckBox", "buttongradation", obj, ["normal"]);
    this._addCss("Grid>#controlRadio", "buttongradation", obj, ["normal"]);
    this._addCss("Tab", "buttongradation", obj, ["selected", "focused", "disabled"]);
    this._addCss("FileUpload", "buttongradation", obj, ["normal"]);
    this._addCss("Step", "buttongradation", obj, ["normal"]);
    this._addCss("StepControl", "buttongradation", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://Images/radio_ico_O.png");
    this._addCss("Radio", "buttonimage", obj, ["normal"]);
    this._addCss("RadioControl", "buttonimage", obj, ["normal"]);
    this._addCss("Step", "buttonimage", obj, ["normal"]);
    this._addCss("Grid>#controlRadio", "buttonimage", obj, ["normal"]);

    obj = new nexacro.Style_value("14");
    this._addCss("Radio", "buttonsize", obj, ["normal"]);
    this._addCss("RadioControl", "buttonsize", obj, ["normal"]);
    this._addCss("CheckBox", "buttonsize", obj, ["normal"]);
    this._addCss("CheckBoxControl", "buttonsize", obj, ["normal"]);
    this._addCss("Grid>#controlCheckBox", "buttonsize", obj, ["normal"]);
    this._addCss("Grid>#controlRadio", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_accessibility("","true","all","","","");
    this._addCss("Radio", "itemaccessibility", obj, ["normal"]);
    this._addCss("RadioControl", "itemaccessibility", obj, ["normal"]);
    this._addCss("Grid>#controlRadio", "itemaccessibility", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Radio", "itembackground", obj, ["normal"]);
    this._addCss("RadioControl", "itembackground", obj, ["normal"]);
    this._addCss("Grid>#controlRadio", "itembackground", obj, ["normal"]);
    this._addCss("Menu", "itembackground", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Radio", "itemgradation", obj, ["normal"]);
    this._addCss("RadioControl", "itemgradation", obj, ["normal"]);
    this._addCss("Grid>#controlRadio", "itemgradation", obj, ["normal"]);
    this._addCss("Menu", "itemgradation", obj, ["normal"]);

    obj = new nexacro.Style_padding("");
    this._addCss("Radio", "itempadding", obj, ["normal"]);
    this._addCss("RadioControl", "itempadding", obj, ["normal"]);
    this._addCss("Grid>#controlRadio", "itempadding", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 5");
    this._addCss("Radio", "textpadding", obj, ["normal"]);
    this._addCss("RadioControl", "textpadding", obj, ["normal"]);
    this._addCss("Grid>#controlRadio", "textpadding", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/radio_bg_O.png","","0","0","0","0","true");
    this._addCss("Radio", "buttonbackground", obj, ["mouseover", "selected", "pushed", "focused"]);
    this._addCss("Grid>#controlRadio", "buttonbackground", obj, ["mouseover", "selected", "pushed"]);

    obj = new nexacro.Style_background("","theme://Images/radio_bg_D.png","","0","0","0","0","true");
    this._addCss("Radio", "buttonbackground", obj, ["disabled"]);
    this._addCss("RadioControl", "buttonbackground", obj, ["disabled"]);
    this._addCss("Grid>#controlRadio", "buttonbackground", obj, ["disabled"]);
    this._addCss("Radio.readonly", "buttonbackground", obj, ["normal", "mouseover", "selected", "pushed", "focused"]);

    obj = new nexacro.Style_value("theme://Images/radio_ico_D.png");
    this._addCss("Radio", "buttonimage", obj, ["disabled"]);
    this._addCss("RadioControl", "buttonimage", obj, ["disabled"]);
    this._addCss("Grid>#controlRadio", "buttonimage", obj, ["disabled"]);
    this._addCss("Radio.readonly", "buttonimage", obj, ["normal", "mouseover", "selected", "pushed", "focused"]);

    obj = new nexacro.Style_value("left middle");
    this._addCss("RadioControl", "buttonalign", obj, ["normal"]);
    this._addCss("Grid>#controlRadio", "buttonalign", obj, ["normal"]);

    obj = new nexacro.Style_value("0 none #222222");
    this._addCss("RadioControl", "buttonborder", obj, ["normal"]);

    obj = new nexacro.Style_color("#6e6e6e");
    this._addCss("RadioControl", "color", obj, ["normal"]);
    this._addCss("Grid>#controlCheckBox", "color", obj, ["normal"]);
    this._addCss("Grid>#controlRadio", "color", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#ffffff00","");
    this._addCss("RadioControl", "itemborder", obj, ["normal"]);

    obj = new nexacro.Style_value("left center");
    this._addCss("CheckBox", "buttonalign", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/chk_bg_N.png","","0","0","0","0","true");
    this._addCss("CheckBox", "buttonbackground", obj, ["normal"]);
    this._addCss("CheckBoxControl", "buttonbackground", obj, ["normal"]);
    this._addCss("Grid>#controlCheckBox", "buttonbackground", obj, ["normal"]);

    obj = new nexacro.Style_value("0 none #808080");
    this._addCss("CheckBox", "buttonborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("","0","0","true","true","true","true");
    this._addCss("CheckBox", "buttonbordertype", obj, ["normal"]);
    this._addCss("CheckBoxControl", "buttonbordertype", obj, ["normal"]);
    this._addCss("Grid>#controlCheckBox", "buttonbordertype", obj, ["normal"]);
    this._addCss("FileUpload", "buttonbordertype", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://Images/chk_ico_O.png");
    this._addCss("CheckBox", "buttonimage", obj, ["normal"]);
    this._addCss("CheckBoxControl", "buttonimage", obj, ["normal"]);
    this._addCss("Grid>#controlCheckBox", "buttonimage", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 2");
    this._addCss("CheckBox", "textpadding", obj, ["normal"]);
    this._addCss("CheckBoxControl", "textpadding", obj, ["normal"]);
    this._addCss("Grid>#controlCheckBox", "textpadding", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/chk_bg_O.png","","0","0","0","0","true");
    this._addCss("CheckBox", "buttonbackground", obj, ["mouseover", "selected", "focused", "pushed"]);
    this._addCss("CheckBoxControl", "buttonbackground", obj, ["mouseover", "selected", "focused", "pushed"]);
    this._addCss("Grid>#controlCheckBox", "buttonbackground", obj, ["mouseover", "selected", "focused", "pushed"]);

    obj = new nexacro.Style_background("","theme://Images/chk_bg_D.png","","0","0","0","0","true");
    this._addCss("CheckBox", "buttonbackground", obj, ["disabled"]);
    this._addCss("CheckBoxControl", "buttonbackground", obj, ["disabled"]);
    this._addCss("Grid>#controlCheckBox", "buttonbackground", obj, ["disabled"]);
    this._addCss("CheckBox.readonly", "buttonbackground", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);

    obj = new nexacro.Style_value("theme://Images/chk_ico_D.png");
    this._addCss("CheckBox", "buttonimage", obj, ["disabled"]);
    this._addCss("CheckBoxControl", "buttonimage", obj, ["disabled"]);
    this._addCss("Grid>#controlCheckBox", "buttonimage", obj, ["disabled"]);
    this._addCss("CheckBox.readonly", "buttonimage", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);

    obj = new nexacro.Style_value("left center");
    this._addCss("CheckBoxControl", "buttonalign", obj, ["normal"]);
    this._addCss("Grid>#controlCheckBox", "buttonalign", obj, ["normal"]);

    obj = new nexacro.Style_value("0 none #808080");
    this._addCss("CheckBoxControl", "buttonborder", obj, ["normal"]);
    this._addCss("Grid>#controlCheckBox", "buttonborder", obj, ["normal", "disabled"]);
    this._addCss("Grid>#controlRadio", "buttonborder", obj, ["normal"]);
    this._addCss("CheckBox.readonly", "buttonborder", obj, ["normal", "mouseover", "selected", "focused", "pushed"]);

    obj = new nexacro.Style_background("@gradation","","","0","0","0","0","true");
    this._addCss("Step", "buttonbackground", obj, ["normal"]);
    this._addCss("Tab", "buttonbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_value("1 solid #868686ff");
    this._addCss("Step", "buttonborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","7","7","true","true","true","true");
    this._addCss("Step", "buttonbordertype", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #fdfdfd 0,100 #f0f0f0");
    this._addCss("Step", "buttongradation", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 5 0 5");
    this._addCss("Step", "buttonpadding", obj, ["normal"]);
    this._addCss("StepControl", "buttonpadding", obj, ["normal"]);

    obj = new nexacro.Style_value("15");
    this._addCss("Step", "buttonsize", obj, ["normal"]);
    this._addCss("StepControl", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_color("#3f3f3f");
    this._addCss("Step", "color", obj, ["normal"]);

    obj = new nexacro.Style_border("1","dotted","#99999900","");
    this._addCss("ImageViewer", "border", obj, ["normal"]);
    this._addCss("Static.sta_map_europe", "border", obj, ["normal"]);
    this._addCss("Static.sta_map_asia", "border", obj, ["normal"]);
    this._addCss("Static.sta_map_africa", "border", obj, ["normal"]);
    this._addCss("Static.sta_map_oseania", "border", obj, ["normal"]);
    this._addCss("Static.sta_map_northamerica", "border", obj, ["normal"]);
    this._addCss("Static.sta_map_southamerica", "border", obj, ["normal"]);
    this._addCss(".btn_MF_center1", "border", obj, ["normal", "disabled", "mouseover", "pushed"]);

    obj = new nexacro.Style_border("1","dotted","#999999ff","");
    this._addCss("ImageViewer", "border", obj, ["mouseover", "focused"]);
    this._addCss("Static.User_info", "border", obj, ["focused"]);
    this._addCss(".btn_MF_prev", "border", obj, ["focused", "selected"]);
    this._addCss(".btn_MF_next", "border", obj, ["focused", "selected"]);
    this._addCss(".btn_MF_add", "border", obj, ["focused", "selected"]);
    this._addCss(".btn_MF_center1", "border", obj, ["focused", "selected"]);
    this._addCss(".btn_MF_center2", "border", obj, ["focused", "selected"]);

    obj = new nexacro.Style_border("1","solid","#9aaeddff","");
    this._addCss("GroupBox", "border", obj, ["normal"]);
    this._addCss("Edit.edt_WF_P", "border", obj, ["normal", "disabled"]);
    this._addCss("MaskEdit.mae_WF_P", "border", obj, ["normal", "disabled"]);
    this._addCss("Combo.cmb_WF_P", "border", obj, ["normal", "disabled"]);
    this._addCss("Spin.spn_WF_P", "border", obj, ["normal", "disabled"]);
    this._addCss("Calendar.cal_WF_P", "border", obj, ["normal"]);
    this._addCss("TextArea.txt_WF_P", "border", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_bordertype("round","2","2","true","true","true","true");
    this._addCss("GroupBox", "bordertype", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("#344d88");
    this._addCss("GroupBox", "color", obj, ["normal"]);
    this._addCss("Edit.edt_WF_P", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("MaskEdit.mae_WF_P", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Combo.cmb_WF_P", "color", obj, ["normal"]);
    this._addCss("Spin.spn_WF_P", "color", obj, ["normal"]);
    this._addCss("Calendar.cal_WF_P", "color", obj, ["normal", "disabled"]);
    this._addCss("TextArea.txt_WF_P", "color", obj, ["normal", "mouseover", "focused"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("GroupBox", "titlebackground", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("GroupBox", "titlegradation", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("GroupBox", "titleimage", obj, ["normal"]);

    obj = new nexacro.Style_align("");
    this._addCss("GroupBox", "titleimagealign", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("GroupBox", "titleview", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#d5d5d5ff","");
    this._addCss("GroupBox", "border", obj, ["disabled"]);

    obj = new nexacro.Style_color("#6f6f6f");
    this._addCss("GroupBox", "color", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#bdc6d6ff","");
    this._addCss("DatePicker", "border", obj, ["normal"]);
    this._addCss("DatePickerControl", "border", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "border", obj, ["normal"]);

    obj = new nexacro.Style_color("#666666");
    this._addCss("DatePicker", "color", obj, ["normal"]);
    this._addCss("DatePickerControl", "color", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "color", obj, ["normal"]);
    this._addCss("Grid.grd_LF_menu", "color", obj, ["normal"]);
    this._addCss(".grd_MF_cal", "color", obj, ["normal"]);
    this._addCss(".grd_MF_cal>#body", "color", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Grid.grd_LF_SubMenu", "color", obj, ["normal"]);

    obj = new nexacro.Style_padding("25 0 7 0");
    this._addCss("DatePicker", "ncpadding", obj, ["normal"]);

    obj = new nexacro.Style_value("yyyy.MM");
    this._addCss("DatePicker", "headerformat", obj, ["normal"]);
    this._addCss("DatePickerControl", "headerformat", obj, ["normal"]);

    obj = new nexacro.Style_value("S M T W T F S");
    this._addCss("DatePicker", "weekformat", obj, ["normal"]);
    this._addCss("DatePickerControl", "weekformat", obj, ["normal"]);

    obj = new nexacro.Style_value("30 23");
    this._addCss("DatePicker", "daysize", obj, ["normal"]);
    this._addCss("DatePickerControl", "daysize", obj, ["normal"]);
    this._addCss("Calendar", "daysize", obj, ["normal"]);
    this._addCss("CalendarControl", "daysize", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "daysize", obj, ["normal"]);

    obj = new nexacro.Style_color("#666666");
    this._addCss("DatePicker", "daycolor", obj, ["normal"]);
    this._addCss("DatePickerControl", "daycolor", obj, ["normal", "mouseover"]);
    this._addCss("Calendar", "daycolor", obj, ["normal"]);
    this._addCss("CalendarControl", "daycolor", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "daycolor", obj, ["normal", "mouseover", "pushed"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("DatePicker", "daybackground", obj, ["normal"]);
    this._addCss("DatePickerControl", "daybackground", obj, ["normal"]);
    this._addCss("Calendar", "daybackground", obj, ["normal"]);
    this._addCss("CalendarControl", "daybackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "daybackground", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("DatePicker", "daygradation", obj, ["normal"]);
    this._addCss("DatePickerControl", "daygradation", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("DatePicker", "dayborder", obj, ["normal"]);
    this._addCss("DatePickerControl", "dayborder", obj, ["normal"]);
    this._addCss("Calendar", "dayborder", obj, ["normal"]);
    this._addCss("CalendarControl", "dayborder", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "dayborder", obj, ["normal", "mouseover", "pushed", "selected"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("DatePicker", "daybordertype", obj, ["normal"]);
    this._addCss("DatePickerControl", "daybordertype", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Dotum");
    this._addCss("DatePicker", "dayfont", obj, ["normal"]);
    this._addCss("DatePickerControl", "dayfont", obj, ["normal"]);
    this._addCss("Calendar", "dayfont", obj, ["normal"]);
    this._addCss("CalendarControl", "dayfont", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "dayfont", obj, ["normal", "mouseover", "pushed", "selected"]);

    obj = new nexacro.Style_value("30");
    this._addCss("DatePicker", "headerheight", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("DatePicker", "headercolor", obj, ["normal"]);
    this._addCss("DatePickerControl", "headercolor", obj, ["normal"]);

    obj = new nexacro.Style_background("#6a7186ff","","","0","0","0","0","true");
    this._addCss("DatePicker", "headerbackground", obj, ["normal"]);
    this._addCss("DatePickerControl", "headerbackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("DatePicker", "headerborder", obj, ["normal"]);
    this._addCss("DatePickerControl", "headerborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("DatePicker", "headerbordertype", obj, ["normal"]);
    this._addCss("DatePickerControl", "headerbordertype", obj, ["normal"]);

    obj = new nexacro.Style_font("bold 10 Dotum");
    this._addCss("DatePicker", "headerfont", obj, ["normal"]);
    this._addCss("DatePickerControl", "headerfont", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("DatePicker", "bodybackground", obj, ["normal"]);
    this._addCss("DatePickerControl", "bodybackground", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("DatePicker", "bodygradation", obj, ["normal"]);
    this._addCss("DatePickerControl", "bodygradation", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","1","solid","#bdc6d6ff","","1","solid","#bdc6d6ff","","1","solid","#bdc6d6ff","");
    this._addCss("DatePicker", "bodyborder", obj, ["normal"]);
    this._addCss("DatePickerControl", "bodyborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("DatePicker", "bodybordertype", obj, ["normal"]);
    this._addCss("DatePickerControl", "bodybordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("DatePicker", "weekcolor", obj, ["normal"]);
    this._addCss("DatePickerControl", "weekcolor", obj, ["normal"]);

    obj = new nexacro.Style_background("#88a7e2ff","","","0","0","0","0","true");
    this._addCss("DatePicker", "weekbackground", obj, ["normal"]);
    this._addCss("DatePickerControl", "weekbackground", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Dotum");
    this._addCss("DatePicker", "weekfont", obj, ["normal"]);
    this._addCss("DatePickerControl", "weekfont", obj, ["normal"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("DatePicker", "todaycolor", obj, ["normal"]);
    this._addCss("DatePickerControl", "todaycolor", obj, ["normal"]);

    obj = new nexacro.Style_background("#5a6a98ff","","","0","0","0","0","true");
    this._addCss("DatePicker", "todaybackground", obj, ["normal"]);
    this._addCss("DatePickerControl", "todaybackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("DatePicker", "todayborder", obj, ["normal"]);
    this._addCss("DatePickerControl", "todayborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("DatePicker", "todaybordertype", obj, ["normal"]);
    this._addCss("DatePickerControl", "todaybordertype", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Dotum");
    this._addCss("DatePicker", "todayfont", obj, ["normal"]);
    this._addCss("DatePickerControl", "todayfont", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("DatePicker", "saturdaybackground", obj, ["normal"]);
    this._addCss("DatePickerControl", "saturdaybackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("DatePicker", "saturdayborder", obj, ["normal"]);
    this._addCss("DatePickerControl", "saturdayborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("DatePicker", "saturdaybordertype", obj, ["normal"]);
    this._addCss("DatePickerControl", "saturdaybordertype", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Dotum");
    this._addCss("DatePicker", "saturdayfont", obj, ["normal"]);
    this._addCss("DatePickerControl", "saturdayfont", obj, ["normal"]);

    obj = new nexacro.Style_color("#666666");
    this._addCss("DatePicker", "saturdaycolor", obj, ["normal"]);
    this._addCss("DatePickerControl", "saturdaycolor", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("DatePicker", "sundaybackground", obj, ["normal"]);
    this._addCss("DatePickerControl", "sundaybackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("DatePicker", "sundayborder", obj, ["normal"]);
    this._addCss("DatePickerControl", "sundayborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("DatePicker", "sundaybordertype", obj, ["normal"]);
    this._addCss("DatePickerControl", "sundaybordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#f74444");
    this._addCss("DatePicker", "sundaycolor", obj, ["normal"]);
    this._addCss("DatePickerControl", "sundaycolor", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_font("9 Dotum");
    this._addCss("DatePicker", "sundayfont", obj, ["normal"]);
    this._addCss("DatePickerControl", "sundayfont", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/bg_Cal_over.png","","0","0","0","0","true");
    this._addCss("DatePicker", "daybackground", obj, ["mouseover"]);
    this._addCss("DatePickerControl", "daybackground", obj, ["mouseover"]);
    this._addCss("Calendar", "daybackground", obj, ["mouseover", "selected", "focused"]);
    this._addCss("CalendarControl", "daybackground", obj, ["mouseover", "selected", "focused"]);
    this._addCss("Grid>#controlcalendar", "daybackground", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_background("","theme://Images/bg_Cal_over.png","","0","0","0","0","true");
    this._addCss("DatePicker", "saturdaybackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://Images/bg_Cal_over.png","","0","0","0","0","true");
    this._addCss("DatePicker", "sundaybackground", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("DatePicker", "daycolor", obj, ["selected"]);
    this._addCss("DatePickerControl", "daycolor", obj, ["pushed", "selected"]);
    this._addCss("Calendar", "daycolor", obj, ["selected"]);
    this._addCss("CalendarControl", "daycolor", obj, ["selected"]);
    this._addCss("Grid>#controlcalendar", "daycolor", obj, ["selected"]);

    obj = new nexacro.Style_background("","theme://Images/bg_Cal_click.png","","0","0","0","0","true");
    this._addCss("DatePicker", "daybackground", obj, ["selected"]);
    this._addCss("DatePickerControl", "daybackground", obj, ["pushed", "selected"]);
    this._addCss("Calendar", "daybackground", obj, ["selected"]);
    this._addCss("CalendarControl", "daybackground", obj, ["selected"]);
    this._addCss("Grid>#controlcalendar", "daybackground", obj, ["selected"]);

    obj = new nexacro.Style_background("","theme://Images/bg_Cal_click.png","","0","0","0","0","true");
    this._addCss("DatePicker", "saturdaybackground", obj, ["selected"]);

    obj = new nexacro.Style_background("","theme://Images/bg_Cal_click.png","","0","0","0","0","true");
    this._addCss("DatePicker", "sundaybackground", obj, ["selected"]);

    obj = new nexacro.Style_value("theme://Images/btn_CalPrev_N.png");
    this._addCss("DatePicker>#popupcalendar>#prevbutton", "image", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://Images/btn_CalPrev_O.png");
    this._addCss("DatePicker>#popupcalendar>#prevbutton", "image", obj, ["mouseover"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "image", obj, ["mouseover"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("theme://Images/btn_CalPrev_P.png");
    this._addCss("DatePicker>#popupcalendar>#prevbutton", "image", obj, ["pushed"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "image", obj, ["pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("30");
    this._addCss("DatePicker>#popupcalendar>#prevbutton", "opacity", obj, ["disabled"]);
    this._addCss("DatePicker>#popupcalendar>#nextbutton", "opacity", obj, ["disabled"]);
    this._addCss("Calendar>#popupcalendar>#prevbutton", "opacity", obj, ["disabled"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "opacity", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "opacity", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "opacity", obj, ["disabled"]);

    obj = new nexacro.Style_value("theme://Images/btn_CalNext_N.png");
    this._addCss("DatePicker>#popupcalendar>#nextbutton", "image", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://Images/btn_CalNext_O.png");
    this._addCss("DatePicker>#popupcalendar>#nextbutton", "image", obj, ["mouseover"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "image", obj, ["mouseover"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("theme://Images/btn_CalNext_P.png");
    this._addCss("DatePicker>#popupcalendar>#nextbutton", "image", obj, ["pushed"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "image", obj, ["pushed"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_font("bold 9 dotum");
    this._addCss("DatePicker>#popupcalendar>#yearspin>#spinedit", "font", obj, ["normal"]);

    obj = new nexacro.Style_padding("25 0 0 0");
    this._addCss("DatePickerControl", "ncpadding", obj, ["normal"]);

    obj = new nexacro.Style_value("25");
    this._addCss("DatePickerControl", "headerheight", obj, ["normal"]);

    obj = new nexacro.Style_color("#3a6ae1");
    this._addCss("DatePickerControl", "saturdaycolor", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#f2f2f2ff","","","0","0","0","0","true");
    this._addCss("DatePickerControl", "saturdaybackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#f2f2f2ff","","","0","0","0","0","true");
    this._addCss("DatePickerControl", "sundaybackground", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("DatePickerControl", "saturdaycolor", obj, ["pushed", "selected"]);

    obj = new nexacro.Style_background("#7698ecff","","","0","0","0","0","true");
    this._addCss("DatePickerControl", "saturdaybackground", obj, ["pushed", "selected"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("DatePickerControl", "sundaycolor", obj, ["pushed", "selected"]);

    obj = new nexacro.Style_background("#7698ecff","","","0","0","0","0","true");
    this._addCss("DatePickerControl", "sundaybackground", obj, ["pushed", "selected"]);

    obj = new nexacro.Style_value("23");
    this._addCss("Calendar", "buttonsize", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Calendar", "daybordertype", obj, ["normal"]);
    this._addCss("CalendarControl", "daybordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "daybordertype", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Calendar", "popupbackground", obj, ["normal"]);
    this._addCss("CalendarControl", "popupbackground", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "popupbackground", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Calendar", "popupborder", obj, ["normal"]);
    this._addCss("CalendarControl", "popupborder", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "popupborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("","0","0","true","true","true","true");
    this._addCss("Calendar", "popupbordertype", obj, ["normal"]);
    this._addCss("CalendarControl", "popupbordertype", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "popupbordertype", obj, ["normal"]);
    this._addCss("Menu", "popupbordertype", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Calendar", "popupgradation", obj, ["normal"]);
    this._addCss("CalendarControl", "popupgradation", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "popupgradation", obj, ["normal"]);

    obj = new nexacro.Style_value("212  175");
    this._addCss("Calendar", "popupsize", obj, ["normal"]);
    this._addCss("CalendarControl", "popupsize", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar", "popupsize", obj, ["normal"]);

    obj = new nexacro.Style_color("#c7c7c7");
    this._addCss("Calendar", "daycolor", obj, ["disabled"]);
    this._addCss("CalendarControl", "daycolor", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar", "daycolor", obj, ["disabled"]);
    this._addCss("Calendar.cal_WF_P", "daycolor", obj, ["disabled"]);

    obj = new nexacro.Style_background("#ebedf0ff","","","0","0","0","0","true");
    this._addCss("Calendar>#dropbutton", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","0","none","","","1","solid","#d2d2d2ff","");
    this._addCss("Calendar>#dropbutton", "border", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://Images/btn_WFDA_calendar_N.png");
    this._addCss("Calendar>#dropbutton", "image", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_align("right middle");
    this._addCss("Calendar>#dropbutton", "imagealign", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "imagealign", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://Images/btn_WFDA_calendar_O.png");
    this._addCss("Calendar>#dropbutton", "image", obj, ["mouseover", "selected"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("theme://Images/btn_WFDA_calendar_F.png");
    this._addCss("Calendar>#dropbutton", "image", obj, ["focused"]);

    obj = new nexacro.Style_value("theme://Images/btn_WFDA_calendar_P.png");
    this._addCss("Calendar>#dropbutton", "image", obj, ["pushed"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "image", obj, ["pushed"]);

    obj = new nexacro.Style_value("theme://Images/btn_WFDA_calendar_D.png");
    this._addCss("Calendar>#dropbutton", "image", obj, ["disabled"]);
    this._addCss("Grid>#controlcalendar>#dropbutton", "image", obj, ["disabled"]);
    this._addCss("Calendar.readonly>#dropbutton", "image", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_align("center bottom");
    this._addCss("Calendar>#popupcalendar", "align", obj, ["normal"]);
    this._addCss("Grid>#controlSpin>#spindownbutton", "align", obj, ["normal", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar", "align", obj, ["normal"]);

    obj = new nexacro.Style_background("#6a7186ff","","","0","0","0","0","true");
    this._addCss("Calendar>#popupcalendar>#prevbutton", "background", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#nextbutton", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "background", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "background", obj, ["normal"]);

    obj = new nexacro.Style_align("left middle");
    this._addCss("Calendar>#popupcalendar>#prevbutton", "imagealign", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#prevbutton", "imagealign", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://Images/btn_CalPrev_F.png");
    this._addCss("Calendar>#popupcalendar>#prevbutton", "image", obj, ["focused"]);

    obj = new nexacro.Style_font("9 dotum");
    this._addCss("Calendar>#popupcalendar>#nextbutton", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#nextbutton", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinupbutton", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinupbutton", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spindownbutton", "font", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spindownbutton", "font", obj, ["normal"]);
    this._addCss("Static.sta_WF_Info_Orange", "font", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://Images/btn_CalNext_F.png");
    this._addCss("Calendar>#popupcalendar>#nextbutton", "image", obj, ["focused"]);

    obj = new nexacro.Style_border("1","solid","#4e5567ff","");
    this._addCss("Calendar>#popupcalendar>#yearspin", "border", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "border", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "border", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "border", obj, ["normal"]);

    obj = new nexacro.Style_value("right middle");
    this._addCss("Calendar>#popupcalendar>#yearspin", "buttonalign", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "buttonalign", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "buttonalign", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "buttonalign", obj, ["normal"]);

    obj = new nexacro.Style_color("#3d517b");
    this._addCss("Calendar>#popupcalendar>#yearspin", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#monthspin", "color", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Calendar>#popupcalendar>#yearspin>#spinedit", "color", obj, ["normal"]);
    this._addCss("Calendar>#popupcalendar>#monthspin>#spinedit", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin>#spinedit", "color", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin>#spinedit", "color", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#3b67cfff","","1","solid","#ccd0d9ff","","1","solid","#ccd0d9ff","","1","solid","#ccd0d9ff","");
    this._addCss("Grid", "border", obj, ["normal"]);

    obj = new nexacro.Style_color("#646464");
    this._addCss("Grid", "color", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree", "color", obj, ["normal"]);

    obj = new nexacro.Style_border("");
    this._addCss("Grid", "line", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree", "line", obj, ["normal"]);
    this._addCss(".grd_MF_grd", "line", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid", "linetype", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree", "linetype", obj, ["normal"]);
    this._addCss(".grd_MF_grd", "linetype", obj, ["normal"]);

    obj = new nexacro.Style_border("");
    this._addCss("Grid", "selectline", obj, ["normal"]);
    this._addCss("Grid>#head", "selectline", obj, ["normal"]);
    this._addCss("Grid>#summ", "selectline", obj, ["normal"]);
    this._addCss("Grid>#summary", "selectline", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree", "selectline", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#head", "selectline", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#summ", "selectline", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#summary", "selectline", obj, ["normal"]);
    this._addCss(".grd_MF_cal>#head", "selectline", obj, ["normal", "disabled", "mouseover"]);
    this._addCss(".grd_MF_grd", "selectline", obj, ["normal"]);
    this._addCss(".grd_MF_grd>#head", "selectline", obj, ["normal"]);
    this._addCss(".grd_MF_grd>#body", "selectline", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid", "selectlinetype", obj, ["normal"]);
    this._addCss("Grid>#head", "selectlinetype", obj, ["normal"]);
    this._addCss("Grid>#body", "selectlinetype", obj, ["normal", "disabled"]);
    this._addCss("Grid>#summ", "selectlinetype", obj, ["normal"]);
    this._addCss("Grid>#summary", "selectlinetype", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree", "selectlinetype", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#head", "selectlinetype", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#body", "selectlinetype", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_WF_tree>#summ", "selectlinetype", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#summary", "selectlinetype", obj, ["normal"]);
    this._addCss(".grd_MF_cal>#head", "selectlinetype", obj, ["normal", "disabled", "mouseover"]);
    this._addCss(".grd_MF_grd", "selectlinetype", obj, ["normal"]);
    this._addCss(".grd_MF_grd>#head", "selectlinetype", obj, ["normal"]);
    this._addCss(".grd_MF_grd>#body", "selectlinetype", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://Images/ico_WF_treeexpand.png");
    this._addCss("Grid", "treeopenbuttonimage", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree", "treeopenbuttonimage", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://Images/ico_WF_treecollapse.png");
    this._addCss("Grid", "treeclosebuttonimage", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree", "treeclosebuttonimage", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://Images/ico_WF_treeopen.png");
    this._addCss("Grid", "treecollapseimage", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree", "treecollapseimage", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://Images/ico_WF_treehide.png");
    this._addCss("Grid", "treeexpandimage", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree", "treeexpandimage", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://Images/ico_LF_treeitem.png");
    this._addCss("Grid", "treeitemimage", obj, ["normal"]);

    obj = new nexacro.Style_line("1","dotted","#666666ff","");
    this._addCss("Grid", "treelinetype", obj, ["normal"]);

    obj = new nexacro.Style_background("#e7eaf2ff","","","0","0","0","0","true");
    this._addCss("Grid>#head", "background", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#head", "background", obj, ["normal"]);

    obj = new nexacro.Style_align("center middle");
    this._addCss("Grid>#head", "cellalign", obj, ["normal"]);
    this._addCss("Grid>#body", "cellalign", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_WF_tree>#head", "cellalign", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#body", "cellalign", obj, ["normal", "disabled"]);
    this._addCss(".grd_MF_cal>#head", "cellalign", obj, ["normal", "disabled", "mouseover"]);
    this._addCss(".grd_MF_grd>#head", "cellalign", obj, ["normal"]);

    obj = new nexacro.Style_background("#e7eaf2ff","","","0","0","0","0","true");
    this._addCss("Grid>#head", "cellbackground", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#head", "cellbackground", obj, ["normal"]);

    obj = new nexacro.Style_background("#f2f3f7ff","","","0","0","0","0","true");
    this._addCss("Grid>#head", "cellbackground2", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#head", "cellbackground2", obj, ["normal"]);

    obj = new nexacro.Style_color("#0b3ca8");
    this._addCss("Grid>#head", "cellcolor", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#head", "cellcolor", obj, ["normal"]);

    obj = new nexacro.Style_color("#585a66");
    this._addCss("Grid>#head", "cellcolor2", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#head", "cellcolor2", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Dotum");
    this._addCss("Grid>#head", "cellfont", obj, ["normal"]);
    this._addCss("Grid>#body", "cellfont", obj, ["normal", "disabled"]);
    this._addCss("Grid>#summ", "cellfont", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellfont", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#head", "cellfont", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#body", "cellfont", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_WF_tree>#summ", "cellfont", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#summary", "cellfont", obj, ["normal"]);
    this._addCss("Grid.grd_LF_menu>#body", "cellfont", obj, ["normal"]);
    this._addCss("Grid.grd_LF_SubMenu>#body", "cellfont", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Grid>#head", "cellgradation", obj, ["normal"]);
    this._addCss("Grid>#body", "cellgradation", obj, ["normal", "disabled"]);
    this._addCss("Grid>#summ", "cellgradation", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellgradation", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#head", "cellgradation", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#body", "cellgradation", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_WF_tree>#summ", "cellgradation", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#summary", "cellgradation", obj, ["normal"]);
    this._addCss(".grd_MF_cal>#head", "cellgradation", obj, ["normal", "disabled", "mouseover"]);
    this._addCss(".grd_MF_grd>#head", "cellgradation", obj, ["normal"]);
    this._addCss(".grd_MF_grd>#body", "cellgradation", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Grid>#head", "cellgradation2", obj, ["normal"]);
    this._addCss("Grid>#body", "cellgradation2", obj, ["normal", "disabled"]);
    this._addCss("Grid>#summ", "cellgradation2", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellgradation2", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#head", "cellgradation2", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#body", "cellgradation2", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_WF_tree>#summ", "cellgradation2", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#summary", "cellgradation2", obj, ["normal"]);
    this._addCss(".grd_MF_cal>#head", "cellgradation2", obj, ["normal", "disabled", "mouseover"]);
    this._addCss(".grd_MF_grd>#head", "cellgradation2", obj, ["normal"]);
    this._addCss(".grd_MF_grd>#body", "cellgradation2", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#ccd1d7ff","");
    this._addCss("Grid>#head", "cellline", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#head", "cellline", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid>#head", "celllinetype", obj, ["normal"]);
    this._addCss("Grid>#body", "celllinetype", obj, ["normal", "disabled"]);
    this._addCss("Grid>#summ", "celllinetype", obj, ["normal"]);
    this._addCss("Grid>#summary", "celllinetype", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#head", "celllinetype", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#body", "celllinetype", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_WF_tree>#summ", "celllinetype", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#summary", "celllinetype", obj, ["normal"]);
    this._addCss(".grd_MF_cal>#head", "celllinetype", obj, ["normal", "disabled", "mouseover"]);
    this._addCss(".grd_MF_grd>#head", "celllinetype", obj, ["normal"]);
    this._addCss(".grd_MF_grd>#body", "celllinetype", obj, ["normal"]);

    obj = new nexacro.Style_padding("");
    this._addCss("Grid>#head", "cellpadding", obj, ["normal"]);
    this._addCss("Grid>#summ", "cellpadding", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellpadding", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#head", "cellpadding", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#summ", "cellpadding", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#summary", "cellpadding", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid>#head", "cellheight", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid>#head", "selectbackground", obj, ["normal"]);
    this._addCss("Grid>#summ", "selectbackground", obj, ["normal"]);
    this._addCss("Grid>#summary", "selectbackground", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#head", "selectbackground", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#summ", "selectbackground", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#summary", "selectbackground", obj, ["normal"]);
    this._addCss(".grd_MF_cal>#head", "selectbackground", obj, ["normal", "disabled", "mouseover"]);
    this._addCss(".grd_MF_grd>#head", "selectbackground", obj, ["normal"]);
    this._addCss(".grd_MF_grd>#body", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_border("");
    this._addCss("Grid>#head", "selectborder", obj, ["normal"]);
    this._addCss("Grid>#summ", "selectborder", obj, ["normal"]);
    this._addCss("Grid>#summary", "selectborder", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#head", "selectborder", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#summ", "selectborder", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#summary", "selectborder", obj, ["normal"]);
    this._addCss(".grd_MF_cal>#head", "selectborder", obj, ["normal", "disabled", "mouseover"]);
    this._addCss(".grd_MF_grd>#head", "selectborder", obj, ["normal"]);
    this._addCss(".grd_MF_grd>#body", "selectborder", obj, ["normal"]);

    obj = new nexacro.Style_color("");
    this._addCss("Grid>#head", "selectcolor", obj, ["normal"]);
    this._addCss("Grid>#summ", "selectcolor", obj, ["normal"]);
    this._addCss("Grid>#summary", "selectcolor", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#head", "selectcolor", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#summ", "selectcolor", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#summary", "selectcolor", obj, ["normal"]);
    this._addCss(".grd_MF_grd>#body", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("");
    this._addCss("Grid>#head", "selectfont", obj, ["normal"]);
    this._addCss("Grid>#summ", "selectfont", obj, ["normal"]);
    this._addCss("Grid>#summary", "selectfont", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#head", "selectfont", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#summ", "selectfont", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#summary", "selectfont", obj, ["normal"]);
    this._addCss(".grd_MF_cal>#head", "selectfont", obj, ["normal", "disabled", "mouseover"]);
    this._addCss(".grd_MF_grd>#head", "selectfont", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("Grid>#head", "selectgradation", obj, ["normal"]);
    this._addCss("Grid>#body", "selectgradation", obj, ["normal", "disabled"]);
    this._addCss("Grid>#summ", "selectgradation", obj, ["normal"]);
    this._addCss("Grid>#summary", "selectgradation", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#head", "selectgradation", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#body", "selectgradation", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_WF_tree>#summ", "selectgradation", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#summary", "selectgradation", obj, ["normal"]);
    this._addCss(".grd_MF_cal>#head", "selectgradation", obj, ["normal", "disabled", "mouseover"]);
    this._addCss(".grd_MF_grd>#head", "selectgradation", obj, ["normal"]);
    this._addCss(".grd_MF_grd>#body", "selectgradation", obj, ["normal"]);

    obj = new nexacro.Style_font("bold 9 Dotum");
    this._addCss("Grid>#head", "cellfont", obj, ["focused", "selected", "mouseover"]);

    obj = new nexacro.Style_font("underline bold 9 Dotum");
    this._addCss("Grid>#head", "selectfont", obj, ["focused", "selected", "mouseover"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Grid>#body", "cellbackground", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_WF_tree>#body", "cellbackground", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_LF_menu>#body", "cellbackground", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_LF_SubMenu>#body", "cellbackground", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Grid>#body", "cellbackground2", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_WF_tree>#body", "cellbackground2", obj, ["normal", "disabled"]);
    this._addCss(".grd_MF_cal>#head", "cellbackground2", obj, ["normal", "disabled", "mouseover"]);
    this._addCss(".grd_MF_grd>#head", "cellbackground2", obj, ["normal"]);

    obj = new nexacro.Style_color("#555555");
    this._addCss("Grid>#body", "cellcolor", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_WF_tree>#body", "cellcolor", obj, ["normal", "disabled"]);
    this._addCss(".grd_MF_cal>#head", "cellcolor", obj, ["normal", "disabled", "mouseover"]);
    this._addCss(".grd_MF_grd>#body", "cellcolor", obj, ["mouseover"]);

    obj = new nexacro.Style_color("");
    this._addCss("Grid>#body", "cellcolor2", obj, ["normal", "disabled"]);
    this._addCss("Grid>#summ", "cellcolor2", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellcolor2", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#body", "cellcolor2", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_WF_tree>#summ", "cellcolor2", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#summary", "cellcolor2", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","1","solid","#ececeeff","","1","solid","#ececeeff","","0","none","","");
    this._addCss("Grid>#body", "cellline", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_WF_tree>#body", "cellline", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_padding("0 5 0 5");
    this._addCss("Grid>#body", "cellpadding", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_WF_tree>#body", "cellpadding", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("#dce6fc");
    this._addCss("Grid>#body", "selectbackground", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_WF_tree>#body", "selectbackground", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Grid>#body", "selectborder", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_LF_menu>#body", "selectborder", obj, ["normal"]);
    this._addCss(".grd_MF_cal>#body", "selectborder", obj, ["normal", "disabled", "mouseover"]);
    this._addCss("Grid.grd_LF_SubMenu>#body", "selectborder", obj, ["normal"]);

    obj = new nexacro.Style_color("#575b64");
    this._addCss("Grid>#body", "selectcolor", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_WF_tree>#body", "selectcolor", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_font("9 Dotum");
    this._addCss("Grid>#body", "selectfont", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_WF_tree>#body", "selectfont", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#cdd7ebff","");
    this._addCss("Grid>#body", "selectline", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("#f6f7faff","","","0","0","0","0","true");
    this._addCss("Grid>#body", "cellbackground", obj, ["mouseover"]);
    this._addCss("Grid.grd_WF_tree>#body", "cellbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#f6f7faff","","","0","0","0","0","true");
    this._addCss("Grid>#body", "cellbackground2", obj, ["mouseover"]);
    this._addCss("Grid.grd_WF_tree>#body", "cellbackground2", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#5f5f60");
    this._addCss("Grid>#body", "cellcolor", obj, ["mouseover"]);
    this._addCss("Grid.grd_WF_tree>#body", "cellcolor", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#ffe9cbff","","","0","0","0","0","true");
    this._addCss("Grid>#summ", "background", obj, ["normal"]);
    this._addCss("Grid>#summary", "background", obj, ["normal"]);

    obj = new nexacro.Style_align("");
    this._addCss("Grid>#summ", "cellalign", obj, ["normal"]);
    this._addCss("Grid>#summary", "cellalign", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#summ", "cellalign", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#summary", "cellalign", obj, ["normal"]);
    this._addCss(".grd_MF_grd>#body", "cellalign", obj, ["normal"]);

    obj = new nexacro.Style_background("#f9f2e9ff","","","0","0","0","0","true");
    this._addCss("Grid>#summ", "cellbackground", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#summ", "cellbackground", obj, ["normal"]);

    obj = new nexacro.Style_background("#f9f2e9ff","","","0","0","0","0","true");
    this._addCss("Grid>#summ", "cellbackground2", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#summ", "cellbackground2", obj, ["normal"]);

    obj = new nexacro.Style_color("#654725");
    this._addCss("Grid>#summ", "cellcolor", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#summ", "cellcolor", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#e6e0d9ff","","0","none","","","1","solid","#e6e0d9ff","","0","none","","");
    this._addCss("Grid>#summ", "cellline", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#summ", "cellline", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Grid>#summary", "cellbackground", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#summary", "cellbackground", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Grid>#summary", "cellbackground2", obj, ["normal"]);
    this._addCss("Grid.grd_WF_tree>#summary", "cellbackground2", obj, ["normal"]);

    obj = new nexacro.Style_color("#61401d");
    this._addCss("Grid>#summary", "cellcolor", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#ecd8bdff","","0","none","","","1","solid","#ecd8bdff","","0","none","","");
    this._addCss("Grid>#summary", "cellline", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid>#controledit", "height", obj, ["normal"]);

    obj = new nexacro.Style_background("#eceff4ff","","","0","0","0","0","true");
    this._addCss("Grid>#controlSpin", "background", obj, ["readonly"]);
    this._addCss("Grid>#controlSpin>#spinupbutton", "background", obj, ["readonly"]);
    this._addCss("Grid>#controlSpin>#spindownbutton", "background", obj, ["readonly"]);
    this._addCss("Grid>#controlcombo", "background", obj, ["readonly"]);
    this._addCss("Grid>#controlcombo>#dropbutton", "background", obj, ["readonly"]);
    this._addCss("Grid>#controlCheckBox", "background", obj, ["readonly"]);
    this._addCss("Edit.readonly", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("MaskEdit.readonly", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("TextArea.readonly", "background", obj, ["normal", "mouseover", "focused"]);
    this._addCss("Spin.readonly", "background", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Combo.readonly", "background", obj, ["normal", "mouseover", "focused", "pushed", "selected"]);
    this._addCss("Calendar.readonly", "background", obj, ["normal", "mouseover", "selected", "focused", "pushed", "disabled"]);
    this._addCss("Calendar.readonly>#dropbutton", "background", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_border("1","solid","#c2c8d5ff","");
    this._addCss("Grid>#controlSpin", "border", obj, ["readonly"]);
    this._addCss("Grid>#controlcombo", "border", obj, ["readonly"]);
    this._addCss("Grid>#controlCheckBox", "border", obj, ["readonly"]);

    obj = new nexacro.Style_padding("0 6 0 0");
    this._addCss("Grid>#controlSpin>#spinedit", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled", "readonly"]);

    obj = new nexacro.Style_color("#555c6a");
    this._addCss("Grid>#controlSpin>#spinedit", "color", obj, ["readonly"]);
    this._addCss("Grid>#controlcombo>#comboedit", "color", obj, ["readonly"]);
    this._addCss("Grid>#controlCheckBox", "color", obj, ["readonly"]);

    obj = new nexacro.Style_align("center top");
    this._addCss("Grid>#controlSpin>#spinupbutton", "align", obj, ["normal", "focused"]);
    this._addCss("Grid>#controlcalendar>#spinupbutton", "align", obj, ["normal"]);

    obj = new nexacro.Style_color("#444444");
    this._addCss("Grid>#controlSpin>#spinupbutton", "color", obj, ["normal", "focused"]);
    this._addCss("Grid>#controlSpin>#spindownbutton", "color", obj, ["normal", "focused"]);

    obj = new nexacro.Style_padding("5 6 5 6");
    this._addCss("Grid>#controltextarea", "padding", obj, ["normal"]);

    obj = new nexacro.Style_color("#3d517b");
    this._addCss("Grid>#controlmaskedit", "caretcolor", obj, ["pushed", "focused"]);

    obj = new nexacro.Style_gradation("linear 0,0 #fefefe 0,100 #f3f3f3");
    this._addCss("Grid>#controlbutton", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#afafafff","");
    this._addCss("Grid>#controlbutton", "border", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","3","3","true","true","true","true");
    this._addCss("Grid>#controlbutton", "bordertype", obj, ["normal"]);
    this._addCss("FileDownload", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_padding("2 0 2 0");
    this._addCss("Grid>#controlbutton", "padding", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #fefefe 0,100 #eaeaea");
    this._addCss("Grid>#controlbutton", "gradation", obj, ["mouseover"]);

    obj = new nexacro.Style_border("1","solid","#7186b3ff","");
    this._addCss("Grid>#controlbutton", "border", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_gradation("linear 0,0 #e0e0e0 0,100 #f9f9f9");
    this._addCss("Grid>#controlbutton", "gradation", obj, ["pushed"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #dee8f6");
    this._addCss("Grid>#controlbutton", "gradation", obj, ["selected", "focused"]);

    obj = new nexacro.Style_border("1","solid","#516884ff","");
    this._addCss("Grid>#controlbutton", "border", obj, ["selected", "focused"]);

    obj = new nexacro.Style_color("#023195");
    this._addCss("Grid>#controlbutton", "color", obj, ["selected", "focused"]);

    obj = new nexacro.Style_background("#f8f8f8ff","","","0","0","0","0","true");
    this._addCss("Grid>#controlbutton", "background", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#d9d9d9ff","");
    this._addCss("Grid>#controlbutton", "border", obj, ["disabled"]);

    obj = new nexacro.Style_padding("0 0 0 6");
    this._addCss("Grid>#controlcombo>#comboedit", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disabled", "readonly"]);
    this._addCss("Grid>#controlcalendar>#calendaredit", "padding", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","0","none","","","1","solid","#eceff4ff","");
    this._addCss("Grid>#controlcombo>#dropbutton", "border", obj, ["readonly"]);

    obj = new nexacro.Style_border("1","solid","#d8d8d8ff","");
    this._addCss("Grid>#controlcalendar", "dayborder", obj, ["disabled"]);

    obj = new nexacro.Style_value("22");
    this._addCss("Grid>#controlcalendar>#popupcalendar>#yearspin", "buttonsize", obj, ["normal"]);
    this._addCss("Grid>#controlcalendar>#popupcalendar>#monthspin", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://Images/ico_WF_item.png");
    this._addCss("Grid.grd_WF_tree", "treeitemimage", obj, ["normal"]);

    obj = new nexacro.Style_value("1 dotted #666666ff");
    this._addCss("Grid.grd_WF_tree", "treelinesize", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#3b67cfff","","1","solid","#ccd0d9ff","","1","solid","#ccd0d9ff","","1","solid","#ccd0d9ff","");
    this._addCss("Grid.grd_WF_tree>#head", "border", obj, ["normal"]);

    obj = new nexacro.Style_value("30");
    this._addCss("Grid.grd_WF_tree>#head", "cellheight", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","1","solid","#ececeeff","","1","solid","#ececeeff","","1","solid","#ececeeff","");
    this._addCss("Grid.grd_WF_tree>#body", "border", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("1","solid","#cdd7ebff","");
    this._addCss("Grid.grd_WF_tree>#body", "selectborder", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("Grid.grd_WF_tree>#body", "selectline", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("#f9f2e9ff","","","0","0","0","0","true");
    this._addCss("Grid.grd_WF_tree>#summ", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#f8eeddff","","","0","0","0","0","true");
    this._addCss("Grid.grd_WF_tree>#summary", "background", obj, ["normal"]);

    obj = new nexacro.Style_color("#5b401f");
    this._addCss("Grid.grd_WF_tree>#summary", "cellcolor", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#e6dcceff","","0","none","","","1","solid","#e6dcceff","","0","none","","");
    this._addCss("Grid.grd_WF_tree>#summary", "cellline", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Tab", "buttonbackground", obj, ["normal"]);

    obj = new nexacro.Style_value("1 solid #bcc5db");
    this._addCss("Tab", "buttonborder", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Tab", "buttonbordertype", obj, ["normal"]);
    this._addCss("Step", "buttonbordertype", obj, ["normal"]);
    this._addCss("StepControl", "buttonbordertype", obj, ["normal"]);

    obj = new nexacro.Style_padding("8 14 8 14");
    this._addCss("Tab", "buttonpadding", obj, ["normal"]);

    obj = new nexacro.Style_color("#59627a");
    this._addCss("Tab", "color", obj, ["normal"]);
    this._addCss("Button.btn_WFDA_tab", "color", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Tab", "showextrabutton", obj, ["normal"]);

    obj = new nexacro.Style_color("#153da5");
    this._addCss("Tab", "color", obj, ["mouseover"]);
    this._addCss("Button.btn_WFDA_tab", "color", obj, ["mouseover"]);

    obj = new nexacro.Style_gradation("linear 0,0 #f7f8fb 0,100 #f0f2f8");
    this._addCss("Tab", "buttongradation", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#6285d9ff","","","0","0","0","0","true");
    this._addCss("Tab", "buttonbackground", obj, ["selected", "focused"]);

    obj = new nexacro.Style_value("1 solid #3b67cf");
    this._addCss("Tab", "buttonborder", obj, ["selected", "focused"]);

    obj = new nexacro.Style_color("#949494");
    this._addCss("Tab", "color", obj, ["disabled"]);
    this._addCss("Button.btn_WFDA_tab", "color", obj, ["disabled"]);

    obj = new nexacro.Style_background("#f3f3f3ff","","","0","0","0","0","true");
    this._addCss("Tab", "buttonbackground", obj, ["disabled"]);

    obj = new nexacro.Style_value("1 solid #dfdfdf");
    this._addCss("Tab", "buttonborder", obj, ["disabled"]);

    obj = new nexacro.Style_border("2","solid","#3b67cfff","","0","none","","","0","none","","");
    this._addCss("Tabpage", "border", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","0","none","","","2","solid","#3b67cfff","");
    this._addCss("Tabpage.Tab_WF_L", "border", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","2","solid","#3b67cfff","","0","none","","","0","none","","");
    this._addCss("Tabpage.Tab_WF_R", "border", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","2","solid","#3b67cfff","","0","none","","");
    this._addCss("Tabpage.Tab_WF_B", "border", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://Images/btn_tab_spinup_N.png')");
    this._addCss("Tab>#spinupbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("0 0");
    this._addCss("Tab>#spinupbutton", "pusheddrawoffset", obj, ["normal"]);
    this._addCss("Tab>#spindownbutton", "pusheddrawoffset", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://Images/btn_tab_spinup_O.png')");
    this._addCss("Tab>#spinupbutton", "image", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://Images/btn_tab_spinup_F.png')");
    this._addCss("Tab>#spinupbutton", "image", obj, ["focused"]);

    obj = new nexacro.Style_value("URL('theme://Images/btn_tab_spinup_D.png')");
    this._addCss("Tab>#spinupbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://Images/btn_tab_spindn_N.png')");
    this._addCss("Tab>#spindownbutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://Images/btn_tab_spindn_O.png')");
    this._addCss("Tab>#spindownbutton", "image", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_value("URL('theme://Images/btn_tab_spindn_F.png')");
    this._addCss("Tab>#spindownbutton", "image", obj, ["focused"]);

    obj = new nexacro.Style_value("URL('theme://Images/btn_tab_spindn_D.png')");
    this._addCss("Tab>#spindownbutton", "image", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://Images/btn_MDItab_extra.png')");
    this._addCss("Tab>#extrabutton", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://Images/btn_MDItab_extra_F.png')");
    this._addCss("Tab>#extrabutton", "image", obj, ["focused"]);

    obj = new nexacro.Style_border("0","none","#808080ff","","0","none","#808080ff","","2","solid","#3b67cfff","","0","none","#808080ff","");
    this._addCss("Static.sta_WFDA_tabLine", "border", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#bcc5dbff","","1","solid","#bcc5dbff","","0","none","#bcc5dbff","");
    this._addCss("Button.btn_WFDA_tab", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_gradation("linear 0,0 #f7f8fb 0,100 #edf0f6");
    this._addCss("Button.btn_WFDA_tab", "gradation", obj, ["mouseover"]);

    obj = new nexacro.Style_border("1","solid","#3b67cfff","","1","solid","#3b67cfff","","0","none","","","1","solid","#3b67cfff","");
    this._addCss("Button.btn_WFDA_tab", "border", obj, ["selected", "focused"]);

    obj = new nexacro.Style_background("#6285d9ff","","","0","0","0","0","true");
    this._addCss("Button.btn_WFDA_tab", "background", obj, ["selected", "focused"]);

    obj = new nexacro.Style_color("#001e6b");
    this._addCss("Button.btn_WFDA_tab", "color", obj, ["pushed"]);

    obj = new nexacro.Style_border("1","solid","#a7b0c7ff","","1","solid","#a7b0c7ff","","0","none","","","1","solid","#a7b0c7ff","");
    this._addCss("Button.btn_WFDA_tab", "border", obj, ["pushed"]);

    obj = new nexacro.Style_gradation("linear 0,0 #c9d0e2 0,100 #d8ddeb");
    this._addCss("Button.btn_WFDA_tab", "gradation", obj, ["pushed"]);

    obj = new nexacro.Style_background("#f3f3f3ff","","","0","0","0","0","true");
    this._addCss("Button.btn_WFDA_tab", "background", obj, ["disabled"]);

    obj = new nexacro.Style_border("1","solid","#dfdfdfff","","1","solid","#dfdfdfff","","0","none","","","1","solid","#dfdfdfff","");
    this._addCss("Button.btn_WFDA_tab", "border", obj, ["disabled"]);

    obj = new nexacro.Style_gradation("linear 0,0 #677190 0,100 #5a6481");
    this._addCss("PopupMenu", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#062682ff","");
    this._addCss("PopupMenu", "border", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("round","1","1","true","true","true","true");
    this._addCss("PopupMenu", "bordertype", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("PopupMenu", "checkboximage", obj, ["normal"]);

    obj = new nexacro.Style_color("#fafbfd");
    this._addCss("PopupMenu", "color", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://Images/ico_TF_expand_N.png");
    this._addCss("PopupMenu", "expandimage", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("PopupMenu", "itembackground", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#6d7691ff","","0","none","","","1","solid","#515972ff","","0","none","","");
    this._addCss("PopupMenu", "itemborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("PopupMenu", "itembordertype", obj, ["normal"]);
    this._addCss("Menu", "itembordertype", obj, ["normal"]);

    obj = new nexacro.Style_value("27");
    this._addCss("PopupMenu", "itemheight", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 8 0 8");
    this._addCss("PopupMenu", "itempadding", obj, ["normal", "mouseover", "selected", "focused"]);

    obj = new nexacro.Style_background("#555e7aff","","","0","0","0","0","true");
    this._addCss("PopupMenu", "itembackground", obj, ["mouseover", "selected", "focused"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss("PopupMenu", "itemborder", obj, ["mouseover"]);

    obj = new nexacro.Style_value("theme://Images/ico_TF_expand_O.png");
    this._addCss("PopupMenu", "expandimage", obj, ["mouseover"]);
    this._addCss("Menu", "expandimage", obj, ["normal"]);

    obj = new nexacro.Style_font("9 dotum underline");
    this._addCss("PopupMenu", "font", obj, ["focused"]);

    obj = new nexacro.Style_color("#9ea8c7");
    this._addCss("PopupMenu", "color", obj, ["disabled"]);

    obj = new nexacro.Style_font("9 dotum strikethrough");
    this._addCss("PopupMenu", "font", obj, ["disabled"]);

    obj = new nexacro.Style_value("");
    this._addCss("Menu", "autohotkey", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/btn_TF_menu_N.png","repeat-x","0","0","0","0","true");
    this._addCss("Menu", "background", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://Images/chk_ico_O.png");
    this._addCss("Menu", "checkboximage", obj, ["normal"]);

    obj = new nexacro.Style_align("");
    this._addCss("Menu", "itemalign", obj, ["normal"]);

    obj = new nexacro.Style_font("bold 9 Dotum");
    this._addCss("Menu", "itemfont", obj, ["normal"]);

    obj = new nexacro.Style_color("#000000");
    this._addCss("Menu", "itemcolor", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 30 0 30");
    this._addCss("Menu", "itempadding", obj, ["normal"]);

    obj = new nexacro.Style_background("@gradation","","","0","0","0","0","true");
    this._addCss("Menu", "popupbackground", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #677190ff 0,100 #5a6381ff");
    this._addCss("Menu", "popupgradation", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#354267ff","");
    this._addCss("Menu", "popupborder", obj, ["normal"]);

    obj = new nexacro.Style_color("#fafbfd");
    this._addCss("Menu", "popupcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Dotum");
    this._addCss("Menu", "popupfont", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Menu", "popupitembackground", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#6d7691ff","","0","none","","","1","solid","#515972ff","","0","none","","");
    this._addCss("Menu", "popupitemborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("Menu", "popupitembordertype", obj, ["normal"]);

    obj = new nexacro.Style_value("27");
    this._addCss("Menu", "popupitemheight", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 10 0 10");
    this._addCss("Menu", "popupitempadding", obj, ["normal"]);

    obj = new nexacro.Style_padding("");
    this._addCss("Menu", "popuppadding", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/btn_TF_menu_O.png","stretch","0","0","0","0","true");
    this._addCss("Menu", "itembackground", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#0066da");
    this._addCss("Menu", "itemcolor", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_background("#555e7aff","","","0","0","0","0","true");
    this._addCss("Menu", "popupitembackground", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss("Menu", "popupcolor", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_font("underline 9 Dotum");
    this._addCss("Menu", "popupfont", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_color("#0066da");
    this._addCss("Menu", "color", obj, ["mouseover", "selected"]);

    obj = new nexacro.Style_background("","theme://Images/btn_TF_menu_P.png","stretch","0","0","0","0","true");
    this._addCss("Menu", "itembackground", obj, ["selected"]);

    obj = new nexacro.Style_font("bold underline 9 Dotum");
    this._addCss("Menu", "itemfont", obj, ["selected"]);

    obj = new nexacro.Style_color("#8e8e8e");
    this._addCss("Menu", "color", obj, ["disabled"]);

    obj = new nexacro.Style_color("#999999");
    this._addCss("Menu", "popupcolor", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://Images/img_progress_bg.png","stretch","0","0","5","5","true");
    this._addCss("ProgressBar", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("");
    this._addCss("ProgressBar", "barcolor", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("ProgressBar", "bargradation", obj, ["normal"]);

    obj = new nexacro.Style_value("image");
    this._addCss("ProgressBar", "bartype", obj, ["normal"]);

    obj = new nexacro.Style_value("forward");
    this._addCss("ProgressBar", "direction", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://Images/img_progressN_end.png')");
    this._addCss("ProgressBar", "endimage", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://Images/img_progressN.png')");
    this._addCss("ProgressBar", "progressimage", obj, ["normal"]);

    obj = new nexacro.Style_value("true");
    this._addCss("ProgressBar", "smooth", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://Images/img_progressN_start.png')");
    this._addCss("ProgressBar", "startimage", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://Images/img_progressD_end.png')");
    this._addCss("ProgressBar", "endimage", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://Images/img_progressD.png')");
    this._addCss("ProgressBar", "progressimage", obj, ["disabled"]);

    obj = new nexacro.Style_value("URL('theme://Images/img_progressD_start.png')");
    this._addCss("ProgressBar", "startimage", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WF_sing_N.png","stretch","5","5","0","0","true");
    this._addCss("FileUpload", "buttonbackground", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("FileUpload", "buttonborder", obj, ["normal"]);

    obj = new nexacro.Style_color("#4d4d4d");
    this._addCss("FileUpload", "buttoncolor", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Dotum");
    this._addCss("FileUpload", "buttonfont", obj, ["normal"]);

    obj = new nexacro.Style_padding("");
    this._addCss("FileUpload", "buttonpadding", obj, ["normal"]);

    obj = new nexacro.Style_value("60");
    this._addCss("FileUpload", "buttonsize", obj, ["normal"]);

    obj = new nexacro.Style_value("File add");
    this._addCss("FileUpload", "buttontext", obj, ["normal"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("FileUpload", "editbackground", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#d8d8d8ff","","0","none","","","1","solid","#d8d8d8ff","","1","solid","#d8d8d8ff","");
    this._addCss("FileUpload", "editborder", obj, ["normal"]);

    obj = new nexacro.Style_bordertype("normal","0","0","true","true","true","true");
    this._addCss("FileUpload", "editbordertype", obj, ["normal"]);

    obj = new nexacro.Style_color("#222222");
    this._addCss("FileUpload", "editcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Dotum");
    this._addCss("FileUpload", "editfont", obj, ["normal"]);

    obj = new nexacro.Style_gradation("");
    this._addCss("FileUpload", "editgradation", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 5 0 5");
    this._addCss("FileUpload", "editpadding", obj, ["normal"]);

    obj = new nexacro.Style_color("");
    this._addCss("FileUpload", "editselectbackground", obj, ["normal"]);

    obj = new nexacro.Style_color("");
    this._addCss("FileUpload", "editselectcolor", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WF_sing_O.png","stretch","0","0","5","5","true");
    this._addCss("FileUpload", "buttonbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WF_sing_P.png","stretch","0","0","5","5","true");
    this._addCss("FileUpload", "buttonbackground", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WF_sing_F.png","stretch","0","0","5","5","true");
    this._addCss("FileUpload", "buttonbackground", obj, ["focused"]);

    obj = new nexacro.Style_font("9 Dotum underline");
    this._addCss("FileUpload", "buttonfont", obj, ["focused"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WF_sing_D.png","stretch","0","0","5","5","true");
    this._addCss("FileUpload", "buttonbackground", obj, ["disabled"]);

    obj = new nexacro.Style_gradation("linear 0,0 #fefefe 0,100 #ecece5");
    this._addCss("FileDownload", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_blur("");
    this._addCss("FileDownload", "blur", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#999999ff","");
    this._addCss("FileDownload", "border", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("FileDownload", "linespace", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ecece5 0,100 #fefefe");
    this._addCss("FileDownload", "gradation", obj, ["pushed"]);

    obj = new nexacro.Style_value("0 1");
    this._addCss("FileDownload", "pusheddrawoffset", obj, ["pushed"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss("Step", "buttonbackground", obj, ["normal"]);

    obj = new nexacro.Style_value("0 none");
    this._addCss("Step", "buttonborder", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('Images::ico_step_N.png')");
    this._addCss("Step", "buttonimage", obj, ["normal"]);

    obj = new nexacro.Style_color("#3f3f3fb3");
    this._addCss("Step", "color", obj, ["normal"]);
    this._addCss("StepControl", "color", obj, ["normal"]);

    obj = new nexacro.Style_shadow("");
    this._addCss("Step", "shadow", obj, ["normal"]);
    this._addCss("StepControl", "shadow", obj, ["normal"]);

    obj = new nexacro.Style_background("","Images::ico_step_N.png","","0","0","50","50","true");
    this._addCss("StepControl", "buttonbackground", obj, ["normal"]);

    obj = new nexacro.Style_value("0 none");
    this._addCss("StepControl", "buttonborder", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('Images::ico_step_O.png')");
    this._addCss("StepControl", "buttonimage", obj, ["normal"]);

    obj = new nexacro.Style_font("9 bold Helvetica,Dotum");
    this._addCss("StepControl", "font", obj, ["normal"]);

    obj = new nexacro.Style_background("#efece9ff","theme://Images/bg_TF_menu.png","repeat-x","0","0","0","0","true");
    this._addCss("Form.frm_top", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","dotted","#cccccc00","");
    this._addCss("ImageViewer.imgV_TF_logo", "border", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/img_TF_logo.png","","0","0","50","50","true");
    this._addCss("ImageViewer.imgV_TF_logo", "background", obj, ["normal", "focused", "mouseover"]);

    obj = new nexacro.Style_border("1","dotted","#ccccccff","");
    this._addCss("ImageViewer.imgV_TF_logo", "border", obj, ["focused", "mouseover"]);

    obj = new nexacro.Style_padding("0 30 0 30");
    this._addCss("Button.TF_menu", "padding", obj, ["normal"]);

    obj = new nexacro.Style_color("#000000");
    this._addCss("Button.TF_menu", "color", obj, ["normal"]);
    this._addCss("Static.User_info", "color", obj, ["normal", "mouseover"]);
    this._addCss("Static.sta_WF_title", "color", obj, ["normal"]);
    this._addCss("Static.sta_WFSA_label", "color", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/btn_TF_menu_O.png","stretch","0","0","0","0","true");
    this._addCss("Button.TF_menu", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#1170dd");
    this._addCss("Button.TF_menu", "color", obj, ["mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_background("","theme://Images/btn_TF_menu_P.png","stretch","0","0","0","0","true");
    this._addCss("Button.TF_menu", "background", obj, ["pushed", "selected", "focused"]);

    obj = new nexacro.Style_background("","theme://Images/btn_TF_go_N.png","","0","0","0","0","true");
    this._addCss("Button.TF_go", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/btn_TF_go_O.png","","0","0","0","0","true");
    this._addCss("Button.TF_go", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://Images/btn_TF_go_P.png","","0","0","0","0","true");
    this._addCss("Button.TF_go", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://Images/btn_TF_go_F.png","","0","0","0","0","true");
    this._addCss("Button.TF_go", "background", obj, ["focused"]);

    obj = new nexacro.Style_background("","theme://Images/btn_TF_go_S.png","","0","0","0","0","true");
    this._addCss("Button.TF_go", "background", obj, ["selected"]);

    obj = new nexacro.Style_background("","theme://Images/btn_TF_go_D.png","","0","0","0","0","true");
    this._addCss("Button.TF_go", "background", obj, ["disabled"]);

    obj = new nexacro.Style_color("#e34b00");
    this._addCss("Button.TF_Logout", "color", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_color("#a93800");
    this._addCss("Button.TF_Logout", "color", obj, ["pushed", "focused", "selected"]);

    obj = new nexacro.Style_background("","theme://Images/ico_TF_user.png","","0","0","0","0","true");
    this._addCss("Static.User_info", "background", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_padding("1 0 0 25");
    this._addCss("Static.User_info", "padding", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_border("1","dotted","#00000000","");
    this._addCss("Static.User_info", "border", obj, ["normal", "mouseover"]);

    obj = new nexacro.Style_background("#676f88ff","","","0","0","0","0","true");
    this._addCss("Static.sta_fav", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/btn_LF_hide_N.png","","0","0","0","0","true");
    this._addCss("Button.LF_hide", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/btn_LF_hide_O.png","","0","0","0","0","true");
    this._addCss("Button.LF_hide", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://Images/btn_LF_hide_P.png","","0","0","0","0","true");
    this._addCss("Button.LF_hide", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://Images/btn_LF_hide_F.png","","0","0","0","0","true");
    this._addCss("Button.LF_hide", "background", obj, ["focused"]);

    obj = new nexacro.Style_background("","theme://Images/btn_LF_show_N.png","","0","0","0","0","true");
    this._addCss("Button.LF_show", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/btn_LF_show_O.png","","0","0","0","0","true");
    this._addCss("Button.LF_show", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://Images/btn_LF_show_P.png","","0","0","0","0","true");
    this._addCss("Button.LF_show", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://Images/btn_LF_show_F.png","","0","0","0","0","true");
    this._addCss("Button.LF_show", "background", obj, ["focused"]);

    obj = new nexacro.Style_background("","theme://Images/bg_LF_favN.png","stretch","0","0","0","0","true");
    this._addCss("Button.Fav_add", "background", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 1 0");
    this._addCss("Button.Fav_add", "padding", obj, ["normal"]);

    obj = new nexacro.Style_color("#e1e2e7");
    this._addCss("Button.Fav_add", "color", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/bg_LF_favO.png","stretch","0","0","0","0","true");
    this._addCss("Button.Fav_add", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://Images/bg_LF_favP.png","stretch","0","0","0","0","true");
    this._addCss("Button.Fav_add", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://Images/bg_LF_favS.png","stretch","0","0","0","0","true");
    this._addCss("Button.Fav_add", "background", obj, ["selected"]);

    obj = new nexacro.Style_background("","theme://Images/bg_LF_favF.png","stretch","0","0","0","0","true");
    this._addCss("Button.Fav_add", "background", obj, ["focused"]);

    obj = new nexacro.Style_background("","theme://Images/btn_LF_setting_N.png","","0","0","0","0","true");
    this._addCss("Button.Fav_setting", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/btn_LF_setting_O.png","","0","0","0","0","true");
    this._addCss("Button.Fav_setting", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://Images/btn_LF_setting_P.png","","0","0","0","0","true");
    this._addCss("Button.Fav_setting", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://Images/btn_LF_setting_S.png","","0","0","0","0","true");
    this._addCss("Button.Fav_setting", "background", obj, ["selected"]);

    obj = new nexacro.Style_background("","theme://Images/btn_LF_setting_F.png","","0","0","0","0","true");
    this._addCss("Button.Fav_setting", "background", obj, ["focused"]);

    obj = new nexacro.Style_background("","theme://Images/btn_LF_N.png","","0","0","50","50","true");
    this._addCss("Button.btn_LF", "background", obj, ["normal"]);

    obj = new nexacro.Style_font("Dotum,11,bold");
    this._addCss("Button.btn_LF", "font", obj, ["normal"]);

    obj = new nexacro.Style_color("#aab3bd");
    this._addCss("Button.btn_LF", "color", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/btn_LF_P.png","","0","0","50","50","true");
    this._addCss("Button.btn_LF", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://Images/btn_LF_F.png","","0","0","50","50","true");
    this._addCss("Button.btn_LF", "background", obj, ["focused", "selected", "mouseover"]);

    obj = new nexacro.Style_background("#efece9ff","","","0","0","0","0","true");
    this._addCss("Form.frm_left", "background", obj, ["normal"]);
    this._addCss("Form.frm_MDI", "background", obj, ["normal"]);
    this._addCss("Form.WF_work", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","1","solid","#e1dedbff","","1","solid","#e1dedbff","","0","none","","");
    this._addCss("Div.div_leftBg", "border", obj, ["normal"]);

    obj = new nexacro.Style_padding("10");
    this._addCss("Div.div_leftBg", "padding", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#e1dedbff","","1","solid","#e1dedbff","","1","solid","#ece7e3ff","","0","none","","");
    this._addCss("Static.LF_tit", "border", obj, ["normal"]);

    obj = new nexacro.Style_color("#061c5c");
    this._addCss("Static.LF_tit", "color", obj, ["normal"]);

    obj = new nexacro.Style_border("1","dotted","#666666ff","","1","dotted","#666666ff","","1","dotted","#666666ff","","0","none","","");
    this._addCss("Static.LF_tit", "border", obj, ["focused"]);

    obj = new nexacro.Style_background("#ffffffff","","","0","0","0","0","true");
    this._addCss("Grid.grd_LF_menu>#body", "cellbackground2", obj, ["normal"]);
    this._addCss("Grid.grd_LF_SubMenu>#body", "cellbackground2", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","1","solid","#ece7e3ff","","0","none","","");
    this._addCss("Grid.grd_LF_menu>#body", "cellline", obj, ["normal", "disabled"]);
    this._addCss("Grid.grd_LF_SubMenu>#body", "cellline", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("normal");
    this._addCss("Grid.grd_LF_menu>#body", "celllinetype", obj, ["normal"]);
    this._addCss("Grid.grd_LF_SubMenu>#body", "celllinetype", obj, ["normal"]);

    obj = new nexacro.Style_color("#666666");
    this._addCss("Grid.grd_LF_menu>#body", "cellcolor", obj, ["normal"]);
    this._addCss(".grd_MF_cal>#body", "cellcolor", obj, ["normal", "disabled", "mouseover"]);
    this._addCss(".grd_MF_grd>#body", "cellcolor", obj, ["normal"]);
    this._addCss("Grid.grd_LF_SubMenu>#body", "cellcolor", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 0");
    this._addCss("Grid.grd_LF_menu>#body", "cellpadding", obj, ["normal"]);
    this._addCss("Grid.grd_LF_SubMenu>#body", "cellpadding", obj, ["normal"]);

    obj = new nexacro.Style_value("#ffffff");
    this._addCss("Grid.grd_LF_menu>#body", "selectbackground", obj, ["normal"]);
    this._addCss("Grid.grd_LF_SubMenu>#body", "selectbackground", obj, ["normal"]);

    obj = new nexacro.Style_color("#092d97");
    this._addCss("Grid.grd_LF_menu>#body", "selectcolor", obj, ["normal"]);
    this._addCss("Grid.grd_LF_SubMenu>#body", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_font("bold 9 Dotum underline");
    this._addCss("Grid.grd_LF_menu>#body", "selectfont", obj, ["normal"]);
    this._addCss("Grid.grd_LF_SubMenu>#body", "selectfont", obj, ["normal"]);

    obj = new nexacro.Style_value("");
    this._addCss("Grid.grd_LF_menu>#body", "selectimage", obj, ["normal"]);
    this._addCss("Grid.grd_LF_SubMenu>#body", "selectimage", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","1","solid","#ece7e3ff","","0","none","","");
    this._addCss("Grid.grd_LF_menu>#body", "selectline", obj, ["normal"]);
    this._addCss("Grid.grd_LF_SubMenu>#body", "selectline", obj, ["normal"]);

    obj = new nexacro.Style_background("#eff1faff","","","0","0","0","0","true");
    this._addCss("Grid.grd_LF_menu>#body", "cellbackground", obj, ["mouseover"]);
    this._addCss("Grid.grd_LF_SubMenu>#body", "cellbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_color("#092d97");
    this._addCss("Grid.grd_LF_menu>#body", "cellcolor", obj, ["mouseover", "pushed"]);
    this._addCss("Grid.grd_LF_SubMenu>#body", "cellcolor", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_background("#edeffaff","","","0","0","0","0","true");
    this._addCss("Grid.grd_LF_menu>#body", "cellbackground", obj, ["pushed"]);
    this._addCss("Grid.grd_LF_SubMenu>#body", "cellbackground", obj, ["pushed"]);

    obj = new nexacro.Style_value("hand");
    this._addCss("Grid.grd_LF_menu>#body", "cellcursor", obj, ["pushed"]);
    this._addCss("Grid.grd_LF_SubMenu>#body", "cellcursor", obj, ["pushed"]);

    obj = new nexacro.Style_color("#b2b2b2");
    this._addCss("Grid.grd_LF_menu>#body", "cellcolor", obj, ["disabled"]);
    this._addCss("Grid.grd_LF_SubMenu>#body", "cellcolor", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MDItab_N.png","stretch","3","3","0","0","true");
    this._addCss("Div.div_WF_MDI", "background", obj, ["normal"]);
    this._addCss("Button.btn_MDI", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MDItab_N.png","stretch","0","0","0","0","true");
    this._addCss("Button.btn_WF_MDI_List", "background", obj, ["normal"]);
    this._addCss("Button.btn_WF_MDI", "background", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://Images/btn_MDI_list_N.png");
    this._addCss("Button.btn_WF_MDI_List", "image", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 20 0 20");
    this._addCss("Button.btn_WF_MDI_List", "padding", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MDItab_O.png","stretch","0","0","0","0","true");
    this._addCss("Button.btn_WF_MDI_List", "background", obj, ["mouseover"]);
    this._addCss("Button.btn_WF_MDI", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_value("theme://Images/btn_MDI_list_O.png");
    this._addCss("Button.btn_WF_MDI_List", "image", obj, ["mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MDItab_P.png","stretch","0","0","0","0","true");
    this._addCss("Button.btn_WF_MDI_List", "background", obj, ["pushed"]);
    this._addCss("Button.btn_WF_MDI", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MDItab_S.png","quad","0","0","0","0","true");
    this._addCss("Button.btn_WF_MDI_List", "background", obj, ["selected", "focused"]);

    obj = new nexacro.Style_padding("0 15 0 15");
    this._addCss("Button.btn_WF_MDI", "padding", obj, ["normal"]);
    this._addCss("Button.btn_WF_MDIS", "padding", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disable"]);

    obj = new nexacro.Style_color("#6d6d6c");
    this._addCss("Button.btn_WF_MDI", "color", obj, ["normal"]);

    obj = new nexacro.Style_color("#585756");
    this._addCss("Button.btn_WF_MDI", "color", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MDItab_S.png","stretch","0","0","0","0","true");
    this._addCss("Button.btn_WF_MDI", "background", obj, ["selected", "focused"]);
    this._addCss("Button.btn_WF_MDIS", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disable"]);

    obj = new nexacro.Style_color("#333333");
    this._addCss("Button.btn_WF_MDI", "color", obj, ["selected", "focused"]);
    this._addCss("Button.btn_WF_MDIS", "color", obj, ["normal", "mouseover", "pushed", "selected", "focused", "disable"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MDItab_D.png","stretch","0","0","0","0","true");
    this._addCss("Button.btn_WF_MDI", "background", obj, ["disable"]);

    obj = new nexacro.Style_color("#afaead");
    this._addCss("Button.btn_WF_MDI", "color", obj, ["disable"]);

    obj = new nexacro.Style_color("#787878");
    this._addCss("Button.btn_MDI", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDIS", "color", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_font("Dotum,9,bold");
    this._addCss("Button.btn_MDI", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDIS", "font", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_padding("0 20 0 10");
    this._addCss("Button.btn_MDI", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);
    this._addCss("Button.btn_MDIS", "padding", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MDItab_S.png","stretch","3","3","0","0","true");
    this._addCss("Button.btn_MDIS", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("#f5f4f3ff","","","0","0","0","0","true");
    this._addCss("Static.sta_MDI_bg", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#e1dedbff","");
    this._addCss("Static.sta_MDI_bg", "border", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MDItab_extra.png","","0","0","50","50","true");
    this._addCss("Button.btn_MDI_close", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MDItab_extra_F.png","","0","0","50","50","true");
    this._addCss("Button.btn_MDI_close", "background", obj, ["mouseover", "pushed", "focused", "selected"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MDI_spinup_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_spinup", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MDI_spinup_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_spinup", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MDI_spinup_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_spinup", "background", obj, ["pushed", "selected"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MDI_spinup_F.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_spinup", "background", obj, ["focused"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MDI_spindn_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_spindn", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MDI_spindn_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_spindn", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MDI_spindn_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_spindn", "background", obj, ["pushed"]);
    this._addCss("utton.btn_MDI_spindn", "background", obj, ["selected"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MDI_spindn_F.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_spindn", "background", obj, ["focused"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MDI_screenMax_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_screenmax", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MDI_screenMax_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_screenmax", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MDI_screenMax_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_screenmax", "background", obj, ["pushed", "selected"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MDI_screenMax_F.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_screenmax", "background", obj, ["focused"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MDI_screenPop_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_screenpop", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MDI_screenPop_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_screenpop", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MDI_screenPop_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_screenpop", "background", obj, ["pushed", "selected"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MDI_screenPop_F.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_screenpop", "background", obj, ["focused"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MDI_screenH_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_screenH", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MDI_screenH_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_screenH", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MDI_screenH_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_screenH", "background", obj, ["pushed", "selected"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MDI_screenH_F.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_screenH", "background", obj, ["focused"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MDI_screenV_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_screenV", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MDI_screenV_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_screenV", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MDI_screenV_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_screenV", "background", obj, ["pushed", "selected"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MDI_screenV_F.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_screenV", "background", obj, ["focused"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MDI_screenClose_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_screenclose", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MDI_screenClose_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_screenclose", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MDI_screenClose_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_screenclose", "background", obj, ["pushed", "selected"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MDI_screenClose_F.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_screenclose", "background", obj, ["focused"]);

    obj = new nexacro.Style_background("","theme://Images/arrange_FullBtn_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_max", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/arrange_FullBtn_S.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_max", "background", obj, ["mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_background("","theme://Images/arrange_FullBtn_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_max", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://Images/arrange_HorBtn_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_hor", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/arrange_HorBtn_S.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_hor", "background", obj, ["mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_background("","theme://Images/arrange_HorBtn_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_hor", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://Images/arrange_VerBtn_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_ver", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/arrange_VerBtn_S.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_ver", "background", obj, ["mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_background("","theme://Images/arrange_VerBtn_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_ver", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://Images/arrange_CasBtn_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_cascade", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/arrange_CasBtn_S.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_cascade", "background", obj, ["mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_background("","theme://Images/arrange_CasBtn_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_cascade", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://Images/arrange_CloseBtn_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_allclose", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/arrange_CloseBtn_S.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_allclose", "background", obj, ["mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_background("","theme://Images/arrange_CloseBtn_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_allclose", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MDI_open_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_open", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MDI_open_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_open", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MDI_open_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_open", "background", obj, ["pushed", "selected"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MDI_open_F.png","","0","0","0","0","true");
    this._addCss("Button.btn_MDI_open", "background", obj, ["focused"]);

    obj = new nexacro.Style_background("","theme://Images/bg_RF_quick.png","","0","0","0","0","true");
    this._addCss("Div.RF_Quick", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/btn_RF_quick01_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_RF_quick01", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/btn_RF_quick01_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_RF_quick01", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://Images/btn_RF_quick01_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_RF_quick01", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://Images/btn_RF_quick01_F.png","","0","0","0","0","true");
    this._addCss("Button.btn_RF_quick01", "background", obj, ["selected", "focused"]);

    obj = new nexacro.Style_background("","theme://Images/btn_RF_quick02_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_RF_quick02", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/btn_RF_quick02_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_RF_quick02", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://Images/btn_RF_quick02_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_RF_quick02", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://Images/btn_RF_quick02_F.png","","0","0","0","0","true");
    this._addCss("Button.btn_RF_quick02", "background", obj, ["selected", "focused"]);

    obj = new nexacro.Style_background("","theme://Images/btn_RF_quick03_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_RF_quick03", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/btn_RF_quick03_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_RF_quick03", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://Images/btn_RF_quick03_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_RF_quick03", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://Images/btn_RF_quick03_F.png","","0","0","0","0","true");
    this._addCss("Button.btn_RF_quick03", "background", obj, ["selected", "focused"]);

    obj = new nexacro.Style_background("","theme://Images/btn_RF_quick04_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_RF_quick04", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/btn_RF_quick04_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_RF_quick04", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://Images/btn_RF_quick04_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_RF_quick04", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://Images/btn_RF_quick04_F.png","","0","0","0","0","true");
    this._addCss("Button.btn_RF_quick04", "background", obj, ["selected", "focused"]);

    obj = new nexacro.Style_background("","theme://Images/btn_RF_quick05_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_RF_quick05", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/btn_RF_quick05_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_RF_quick05", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://Images/btn_RF_quick05_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_RF_quick05", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://Images/btn_RF_quick05_F.png","","0","0","0","0","true");
    this._addCss("Button.btn_RF_quick05", "background", obj, ["selected", "focused"]);

    obj = new nexacro.Style_background("","theme://Images/btn_RF_quick06_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_RF_quick06", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/btn_RF_quick06_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_RF_quick06", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://Images/btn_RF_quick06_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_RF_quick06", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://Images/btn_RF_quick06_F.png","","0","0","0","0","true");
    this._addCss("Button.btn_RF_quick06", "background", obj, ["selected", "focused"]);

    obj = new nexacro.Style_background("#efece9ff","theme://Images/bg_BF_bg.png","repeat-x","0","0","0","0","true");
    this._addCss("Form.frm_bottom", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/btn_BF_extend_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_BF_extend", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/btn_BF_extend_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_BF_extend", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://Images/btn_BF_extend_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_BF_extend", "background", obj, ["pushed", "selected"]);

    obj = new nexacro.Style_background("","theme://Images/btn_BF_extend_F.png","","0","0","0","0","true");
    this._addCss("Button.btn_BF_extend", "background", obj, ["focused"]);

    obj = new nexacro.Style_border("0","none","","","1","solid","#e1dedbff","","1","solid","#e1dedbff","","1","solid","#e1dedbff","");
    this._addCss("Form.frm_WF", "border", obj, ["normal"]);
    this._addCss("Static.WF_work_Bg", "border", obj, ["normal"]);

    obj = new nexacro.Style_color("#8d9093");
    this._addCss("Static.sta_WF_progress", "color", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/ico_progress.png","","0","0","0","50","true");
    this._addCss("Static.sta_WF_progress", "background", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 12");
    this._addCss("Static.sta_WF_progress", "padding", obj, ["normal"]);
    this._addCss("Static.sta_WFDA_labelB", "padding", obj, ["normal"]);

    obj = new nexacro.Style_font("bold 13 Dotum");
    this._addCss("Static.sta_WF_title", "font", obj, ["normal"]);

    obj = new nexacro.Style_color("#415079");
    this._addCss("Static.sta_WF_subtit", "color", obj, ["normal"]);
    this._addCss("Static.sta_WF_subtitP", "color", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/sta_WF_subtitP.png","","0","0","0","50","true");
    this._addCss("Static.sta_WF_subtitP", "background", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 13");
    this._addCss("Static.sta_WF_subtitP", "padding", obj, ["normal"]);
    this._addCss(".sta_Main_title", "padding", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/sta_WF_map.png","","0","0","50","0","true");
    this._addCss("Static.sta_WF_map", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/img_map_europe.png","","0","0","50","50","true");
    this._addCss("Static.sta_map_europe", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("1","dotted","#999999ff","");
    this._addCss("Static.sta_map_europe", "border", obj, ["mouseover", "focused"]);
    this._addCss("Static.sta_map_asia", "border", obj, ["mouseover", "focused"]);
    this._addCss("Static.sta_map_africa", "border", obj, ["mouseover", "focused"]);
    this._addCss("Static.sta_map_oseania", "border", obj, ["mouseover", "focused"]);
    this._addCss("Static.sta_map_northamerica", "border", obj, ["mouseover", "focused"]);
    this._addCss("Static.sta_map_southamerica", "border", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_background("","theme://Images/img_map_asia.png","","0","0","50","50","true");
    this._addCss("Static.sta_map_asia", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/img_map_africa.png","","0","0","50","50","true");
    this._addCss("Static.sta_map_africa", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/img_map_oseania.png","","0","0","50","50","true");
    this._addCss("Static.sta_map_oseania", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/img_map_northamerica.png","","0","0","50","50","true");
    this._addCss("Static.sta_map_northamerica", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/img_map_southamerica.png","","0","0","50","50","true");
    this._addCss("Static.sta_map_southamerica", "background", obj, ["normal"]);

    obj = new nexacro.Style_color("#f66120");
    this._addCss("Static.sta_WF_Info_Orange", "color", obj, ["normal"]);

    obj = new nexacro.Style_font("bold 14 Dotum");
    this._addCss("Static.sta_WF_cal", "font", obj, ["normal"]);

    obj = new nexacro.Style_color("#495784");
    this._addCss("Static.sta_WF_cal", "color", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WF_help_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_help", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WF_help_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_help", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WF_help_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_help", "background", obj, ["pushed", "selected"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WF_help_F.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_help", "background", obj, ["focused"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WF_shuttleR_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_WFDA_shuttleR", "background", obj, ["normal", "selected"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WF_shuttleR_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_WFDA_shuttleR", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WF_shuttleR_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_WFDA_shuttleR", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WF_shuttleR_F.png","","0","0","0","0","true");
    this._addCss("Button.btn_WFDA_shuttleR", "background", obj, ["focused"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WF_shuttleR_D.png","","0","0","0","0","true");
    this._addCss("Button.btn_WFDA_shuttleR", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WF_shuttleL_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_WFDA_shuttleL", "background", obj, ["normal", "selected"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WF_shuttleL_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_WFDA_shuttleL", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WF_shuttleL_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_WFDA_shuttleL", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WF_shuttleL_F.png","","0","0","0","0","true");
    this._addCss("Button.btn_WFDA_shuttleL", "background", obj, ["focused"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WF_shuttleL_D.png","","0","0","0","0","true");
    this._addCss("Button.btn_WFDA_shuttleL", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://Images/btn_Cal_prevN.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_schPrev", "background", obj, ["normal", "selected"]);

    obj = new nexacro.Style_background("","theme://Images/btn_Cal_prevO.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_schPrev", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://Images/btn_Cal_prevP.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_schPrev", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://Images/btn_Cal_prevF.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_schPrev", "background", obj, ["focused"]);

    obj = new nexacro.Style_background("","theme://Images/btn_Cal_prevD.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_schPrev", "background", obj, ["disabled"]);
    this._addCss("Button.btn_WF_schNext", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://Images/btn_Cal_nextN.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_schNext", "background", obj, ["normal", "selected"]);

    obj = new nexacro.Style_background("","theme://Images/btn_Cal_nextO.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_schNext", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://Images/btn_Cal_nextP.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_schNext", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://Images/btn_Cal_nextF.png","","0","0","0","0","true");
    this._addCss("Button.btn_WF_schNext", "background", obj, ["focused"]);

    obj = new nexacro.Style_border("1","solid","#e0e0e0ff","");
    this._addCss("Static.sta_WFSA_BG", "border", obj, ["normal"]);

    obj = new nexacro.Style_background("#f2f3f7ff","","","0","0","0","0","true");
    this._addCss("Static.sta_WFSA_BG", "background", obj, ["normal"]);
    this._addCss("Static.sta_WFDA_labelB", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/ico_item.png","","0","0","0","50","true");
    this._addCss("Static.sta_WFSA_label", "background", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 0 0 8");
    this._addCss("Static.sta_WFSA_label", "padding", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WFSA_search_N.png","stretch","0","0","0","0","true");
    this._addCss("Button.btn_WF_search", "background", obj, ["normal", "selected"]);

    obj = new nexacro.Style_value("theme://Images/ico_WF_search.png");
    this._addCss("Button.btn_WF_search", "image", obj, ["normal", "selected"]);

    obj = new nexacro.Style_color("transparent");
    this._addCss("Button.btn_WF_search", "color", obj, ["normal", "selected", "mouseover", "pushed", "focused", "disabled"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WFSA_search_O.png","stretch","0","0","0","0","true");
    this._addCss("Button.btn_WF_search", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WFSA_search_P.png","stretch","0","0","0","0","true");
    this._addCss("Button.btn_WF_search", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WFSA_search_F.png","quad","0","0","0","0","true");
    this._addCss("Button.btn_WF_search", "background", obj, ["focused"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WFDA_search_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_WFDA_Search", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WFDA_search_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_WFDA_Search", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WFDA_search_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_WFDA_Search", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WFDA_search_F.png","","0","0","0","0","true");
    this._addCss("Button.btn_WFDA_Search", "background", obj, ["focused"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WFDA_search_D.png","","0","0","0","0","true");
    this._addCss("Button.btn_WFDA_Search", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WFpag_BoxN.png","","0","0","0","0","true");
    this._addCss("Button.btn_paging", "background", obj, ["normal", "focused", "disabled"]);

    obj = new nexacro.Style_color("#47526b");
    this._addCss("Button.btn_paging", "color", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WFpag_BoxO.png","","0","0","0","0","true");
    this._addCss("Button.btn_paging", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WFpag_BoxP.png","","0","0","0","0","true");
    this._addCss("Button.btn_paging", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WFpag_BoxS.png","","0","0","0","0","true");
    this._addCss("Button.btn_paging", "background", obj, ["selected"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WFpag_firstN.png","","0","0","0","0","true");
    this._addCss("Button.btn_pag_first", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WFpag_firstO.png","","0","0","0","0","true");
    this._addCss("Button.btn_pag_first", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WFpag_firstP.png","","0","0","0","0","true");
    this._addCss("Button.btn_pag_first", "background", obj, ["pushed", "selected"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WFpag_firstF.png","","0","0","0","0","true");
    this._addCss("Button.btn_pag_first", "background", obj, ["focused"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WFpag_prevtN.png","","0","0","0","0","true");
    this._addCss("Button.btn_pag_prev", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WFpag_prevtO.png","","0","0","0","0","true");
    this._addCss("Button.btn_pag_prev", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WFpag_prevtP.png","","0","0","0","0","true");
    this._addCss("Button.btn_pag_prev", "background", obj, ["pushed", "selected"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WFpag_prevtF.png","","0","0","0","0","true");
    this._addCss("Button.btn_pag_prev", "background", obj, ["focused"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WFpag_NextN.png","","0","0","0","0","true");
    this._addCss("Button.btn_pag_next", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WFpag_NextO.png","","0","0","0","0","true");
    this._addCss("Button.btn_pag_next", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WFpag_NextP.png","","0","0","0","0","true");
    this._addCss("Button.btn_pag_next", "background", obj, ["pushed", "selected"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WFpag_NextF.png","","0","0","0","0","true");
    this._addCss("Button.btn_pag_next", "background", obj, ["focused"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WFpag_EndN.png","","0","0","0","0","true");
    this._addCss("Button.btn_pag_end", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WFpag_EndO.png","","0","0","0","0","true");
    this._addCss("Button.btn_pag_end", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WFpag_EndP.png","","0","0","0","0","true");
    this._addCss("Button.btn_pag_end", "background", obj, ["pushed", "selected"]);

    obj = new nexacro.Style_background("","theme://Images/btn_WFpag_EndF.png","","0","0","0","0","true");
    this._addCss("Button.btn_pag_end", "background", obj, ["focused"]);

    obj = new nexacro.Style_value("theme://Images/btn_Move_up.png");
    this._addCss("Button.btn_Move_up", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://Images/btn_Move_down.png");
    this._addCss("Button.btn_Move_down", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://Images/btn_Move_left.png");
    this._addCss("Button.btn_Move_left", "image", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://Images/btn_Move_right.png");
    this._addCss("Button.btn_Move_right", "image", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#e9eaecff","");
    this._addCss("Static.sta_WFDA_B", "border", obj, ["normal"]);

    obj = new nexacro.Style_border("1","solid","#dddfe5ff","");
    this._addCss("Static.sta_WFDA_labelB", "border", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/ico_essential.png","","0","0","0","50","true");
    this._addCss("Static.sta_WFDA_labelBP", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#f4f7feff","","","0","0","0","0","true");
    this._addCss("Edit.edt_WF_P", "background", obj, ["normal"]);
    this._addCss("MaskEdit.mae_WF_P", "background", obj, ["normal"]);
    this._addCss("Combo.cmb_WF_P", "background", obj, ["normal"]);
    this._addCss("Spin.spn_WF_P", "background", obj, ["normal"]);
    this._addCss("Calendar.cal_WF_P", "background", obj, ["normal"]);
    this._addCss("TextArea.txt_WF_P", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("#fafbffff","","","0","0","0","0","true");
    this._addCss("Edit.edt_WF_P", "background", obj, ["mouseover", "focused"]);
    this._addCss("MaskEdit.mae_WF_P", "background", obj, ["mouseover", "focused"]);
    this._addCss("TextArea.txt_WF_P", "background", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_gradation("linear 0,0 #fefeff 0,100 #f5f8fe");
    this._addCss("Combo.cmb_WF_P", "gradation", obj, ["mouseover", "focused"]);
    this._addCss("Spin.spn_WF_P", "gradation", obj, ["mouseover", "pushed", "focused"]);
    this._addCss("Calendar.cal_WF_P", "gradation", obj, ["mouseover", "selected", "focused"]);

    obj = new nexacro.Style_gradation("linear 0,0 #f5f8fe 0,100 #fefeff");
    this._addCss("Combo.cmb_WF_P", "gradation", obj, ["pushed"]);

    obj = new nexacro.Style_background("#ffffff00","","","0","0","0","0","true");
    this._addCss("Combo.cmb_WF_P>#dropbutton", "background", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","0","none","","","1","solid","#f4f7feff","");
    this._addCss("Combo.cmb_WF_P>#dropbutton", "border", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","0","none","","","1","solid","#224181ff","");
    this._addCss("Combo.cmb_WF_P>#dropbutton", "border", obj, ["mouseover", "focused", "selected", "pushed"]);

    obj = new nexacro.Style_background("@gradation","theme://Images/bg_spinO.png","","0","0","100","50","true");
    this._addCss("Spin.spn_WF_P", "background", obj, ["mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_background("","theme://Images/radioP_bg_N.png","","0","0","0","0","true");
    this._addCss("Radio.rdo_WF_P", "buttonbackground", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/radioP_bg_O.png","","0","0","0","0","true");
    this._addCss("Radio.rdo_WF_P", "buttonbackground", obj, ["mouseover", "selected", "pushed", "focused"]);

    obj = new nexacro.Style_background("","theme://Images/radioP_bg_D.png","","0","0","0","0","true");
    this._addCss("Radio.rdo_WF_P", "buttonbackground", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://Images/chkP_bg_N.png","","0","0","0","0","true");
    this._addCss("CheckBox.chk_WF_P", "buttonbackground", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/chkP_bg_O.png","","0","0","0","0","true");
    this._addCss("CheckBox.chk_WF_P", "buttonbackground", obj, ["mouseover", "selected", "focused", "pushed"]);

    obj = new nexacro.Style_background("","theme://Images/chkP_bg_D.png","","0","0","0","0","true");
    this._addCss("CheckBox.chk_WF_P", "buttonbackground", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://Images/sta_LOGIN_bg.png","","0","0","0","0","true");
    this._addCss("Static.sta_LOGIN_bg", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/edt_LOGIN_idN.png","","0","0","0","0","true");
    this._addCss("Edit.edt_LOGIN_id", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_color("#556587");
    this._addCss("Edit.edt_LOGIN_id", "color", obj, ["normal", "disabled", "mouseover", "focused"]);
    this._addCss("Edit.edt_LOGIN_pw", "color", obj, ["normal", "disabled", "mouseover", "focused"]);

    obj = new nexacro.Style_padding("0 5 0 35");
    this._addCss("Edit.edt_LOGIN_id", "padding", obj, ["normal", "disabled"]);
    this._addCss("Edit.edt_LOGIN_pw", "padding", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://Images/edt_LOGIN_idO.png","","0","0","0","0","true");
    this._addCss("Edit.edt_LOGIN_id", "background", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_background("","theme://Images/edt_LOGIN_pwN.png","","0","0","0","0","true");
    this._addCss("Edit.edt_LOGIN_pw", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://Images/edt_LOGIN_pwO.png","","0","0","0","0","true");
    this._addCss("Edit.edt_LOGIN_pw", "background", obj, ["mouseover", "focused"]);

    obj = new nexacro.Style_background("","theme://Images/btn_LOGIN_N.png","","0","0","0","0","true");
    this._addCss("Button.btn_LOGIN_login", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://Images/btn_LOGIN_O.png","","0","0","0","0","true");
    this._addCss("Button.btn_LOGIN_login", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://Images/btn_LOGIN_F.png","","0","0","0","0","true");
    this._addCss("Button.btn_LOGIN_login", "background", obj, ["focused", "selected"]);

    obj = new nexacro.Style_background("","theme://Images/btn_LOGIN_P.png","","0","0","0","0","true");
    this._addCss("Button.btn_LOGIN_login", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("#737d98ff","","","0","0","0","0","true");
    this._addCss("CheckBox.chk_LOGIN", "buttonbackground", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://Images/chk_LOGIN_btnImage.png");
    this._addCss("CheckBox.chk_LOGIN", "buttonimage", obj, ["normal"]);

    obj = new nexacro.Style_color("#b5bdce");
    this._addCss("CheckBox.chk_LOGIN", "color", obj, ["normal"]);

    obj = new nexacro.Style_font("9 Gulim");
    this._addCss("CheckBox.chk_LOGIN", "font", obj, ["normal"]);

    obj = new nexacro.Style_padding("0 2 0 5");
    this._addCss("CheckBox.chk_LOGIN", "textpadding", obj, ["normal"]);

    obj = new nexacro.Style_background("#cfd3dcff","","","0","0","0","0","true");
    this._addCss("CheckBox.chk_LOGIN", "buttonbackground", obj, ["mouseover", "selected", "focused", "pushed"]);

    obj = new nexacro.Style_font("underline 9 Gulim");
    this._addCss("CheckBox.chk_LOGIN", "font", obj, ["mouseover", "selected", "focused", "pushed"]);

    obj = new nexacro.Style_background("#475477ff","","","0","0","0","0","true");
    this._addCss("CheckBox.chk_LOGIN", "buttonbackground", obj, ["disabled"]);

    obj = new nexacro.Style_color("#687492");
    this._addCss("CheckBox.chk_LOGIN", "color", obj, ["disabled"]);

    obj = new nexacro.Style_gradation("linear 0,0 #f1f1f1 0,100 #ededed [48% #e9e9e9][51% #e1e1e1]");
    this._addCss(".sta_Main_title", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_font("dotum,9,bold");
    this._addCss(".sta_Main_title", "font", obj, ["normal"]);

    obj = new nexacro.Style_color("#264c84");
    this._addCss(".sta_Main_title", "color", obj, ["normal"]);

    obj = new nexacro.Style_color("#db5b05");
    this._addCss(".sta_MF_numBl", "color", obj, ["normal"]);

    obj = new nexacro.Style_font("Arial,14");
    this._addCss(".sta_MF_numBl", "font", obj, ["normal"]);

    obj = new nexacro.Style_color("#2e2e2eff");
    this._addCss(".sta_MF_blockTitle", "color", obj, ["normal"]);

    obj = new nexacro.Style_font("bold antialias 10 Dotum");
    this._addCss(".sta_MF_blockTitle", "font", obj, ["normal"]);

    obj = new nexacro.Style_color("#555555");
    this._addCss(".sta_MF_listTitle", "color", obj, ["normal"]);
    this._addCss(".sta_MF_caltxt", "color", obj, ["normal"]);

    obj = new nexacro.Style_font("NanumGothic,9,bold antialias");
    this._addCss(".sta_MF_listTitle", "font", obj, ["normal"]);

    obj = new nexacro.Style_font("Dotum,9");
    this._addCss(".sta_MF_caltxt", "font", obj, ["normal"]);
    this._addCss(".grd_MF_cal", "font", obj, ["normal"]);
    this._addCss(".grd_MF_cal>#body", "font", obj, ["normal", "disabled", "mouseover"]);
    this._addCss(".grd_MF_grd", "font", obj, ["normal"]);

    obj = new nexacro.Style_color("#777777");
    this._addCss(".btn_MF_view", "color", obj, ["normal", "focused", "selected", "disabled", "mouseover", "pushed"]);

    obj = new nexacro.Style_background("","img::btn_MF_close.png","","0","0","0","50","true");
    this._addCss(".btn_MF_close", "background", obj, ["normal", "mouseover", "pushed", "selected", "focused"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MF_prev.png","","0","0","50","50","true");
    this._addCss(".btn_MF_prev", "background", obj, ["normal", "focused", "selected"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MF_prev_O.png","","0","0","50","50","true");
    this._addCss(".btn_MF_prev", "background", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MF_prev_D.png","","0","0","50","50","true");
    this._addCss(".btn_MF_prev", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MF_next.png","","0","0","50","50","true");
    this._addCss(".btn_MF_next", "background", obj, ["normal", "focused", "selected"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MF_next_O.png","","0","0","50","50","true");
    this._addCss(".btn_MF_next", "background", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MF_next_D.png","","0","0","50","50","true");
    this._addCss(".btn_MF_next", "background", obj, ["disabled"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MF_cal_add.png","","0","0","50","50","true");
    this._addCss(".btn_MF_add", "background", obj, ["normal", "disabled", "focused", "selected"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MF_cal_add_O.png","","0","0","50","50","true");
    this._addCss(".btn_MF_add", "background", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://Images/btn_MF_cal_add_P.png","","0","0","50","50","true");
    this._addCss(".btn_MF_add", "background", obj, ["pushed"]);

    obj = new nexacro.Style_background("","theme://Images/div_puls_btn.png","","0","0","100","0","true");
    this._addCss(".btn_MF_center1", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://Images/div_puls_btn_O.png","","0","0","100","0","true");
    this._addCss(".btn_MF_center1", "background", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_background("","theme://Images/div_puls_btn_F.png","","0","0","100","0","true");
    this._addCss(".btn_MF_center1", "background", obj, ["focused", "selected"]);

    obj = new nexacro.Style_background("","theme://Images/div_puls_btn2.png","","0","0","50","50","true");
    this._addCss(".btn_MF_center2", "background", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_background("","theme://Images/div_puls_btn2_O.png","","0","0","50","50","true");
    this._addCss(".btn_MF_center2", "background", obj, ["mouseover", "pushed"]);

    obj = new nexacro.Style_background("","theme://Images/div_puls_btn2_F.png","","0","0","50","50","true");
    this._addCss(".btn_MF_center2", "background", obj, ["focused", "selected"]);

    obj = new nexacro.Style_line("0","none","","");
    this._addCss(".grd_MF_cal", "focusborder", obj, ["normal"]);
    this._addCss(".grd_MF_grd", "focusborder", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/grd_MF_cal_head_bg.png","","0","0","100","50","true");
    this._addCss(".grd_MF_cal>#head", "cellbackground", obj, ["normal", "disabled", "mouseover"]);

    obj = new nexacro.Style_color("#555555");
    this._addCss(".grd_MF_cal>#head", "cellcolor2", obj, ["normal", "disabled", "mouseover"]);
    this._addCss(".grd_MF_grd>#body", "cellcolor2", obj, ["mouseover"]);

    obj = new nexacro.Style_font("Dotum,9,bold");
    this._addCss(".grd_MF_cal>#head", "cellfont", obj, ["normal", "disabled", "mouseover"]);
    this._addCss(".grd_MF_cal>#body", "cellfont", obj, ["normal", "disabled", "mouseover"]);

    obj = new nexacro.Style_border("0","none","","");
    this._addCss(".grd_MF_cal>#head", "cellline", obj, ["normal", "disabled", "mouseover"]);

    obj = new nexacro.Style_padding("1 5 0 5");
    this._addCss(".grd_MF_cal>#head", "cellpadding", obj, ["normal", "disabled", "mouseover"]);
    this._addCss(".grd_MF_grd>#head", "cellpadding", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #f1f1f1ff 0,100 #edededff [47% #e9e9e9ff][52% #e1e1e1ff]");
    this._addCss(".grd_MF_cal>#head", "gradation", obj, ["normal", "disabled", "mouseover"]);

    obj = new nexacro.Style_color("#ffffff");
    this._addCss(".grd_MF_cal>#head", "selectcolor", obj, ["normal", "disabled", "mouseover"]);
    this._addCss(".grd_MF_cal>#body", "selectcolor", obj, ["normal", "disabled", "mouseover"]);

    obj = new nexacro.Style_background("#f9f9f9ff","","","0","0","0","0","true");
    this._addCss(".grd_MF_cal>#body", "background", obj, ["normal", "disabled", "mouseover"]);

    obj = new nexacro.Style_background("@gradation","","","0","0","0","0","true");
    this._addCss(".grd_MF_cal>#body", "cellbackground", obj, ["normal", "disabled", "mouseover"]);

    obj = new nexacro.Style_background("@gradation","","","0","0","0","0","true");
    this._addCss(".grd_MF_cal>#body", "cellbackground2", obj, ["normal", "disabled", "mouseover"]);

    obj = new nexacro.Style_gradation("linear 0,0 #f6f6f6 0,100 #ebebeb");
    this._addCss(".grd_MF_cal>#body", "cellgradation", obj, ["normal", "disabled", "mouseover"]);

    obj = new nexacro.Style_gradation("linear 0,0 #f6f6f6 0,100 #ebebeb");
    this._addCss(".grd_MF_cal>#body", "cellgradation2", obj, ["normal", "disabled", "mouseover"]);

    obj = new nexacro.Style_border("1","solid","#d5d5d5ff","");
    this._addCss(".grd_MF_cal>#body", "cellline", obj, ["normal", "disabled", "mouseover"]);

    obj = new nexacro.Style_value("exhor");
    this._addCss(".grd_MF_cal>#body", "celllinetype", obj, ["normal", "disabled", "mouseover"]);

    obj = new nexacro.Style_value("URL('theme://Images/grd_MF_cal_sel_bg.png') quad");
    this._addCss(".grd_MF_cal>#body", "selectbackground", obj, ["normal", "disabled", "mouseover"]);

    obj = new nexacro.Style_border("1","solid","#dcdcdcff","");
    this._addCss(".grd_MF_cal>#body", "selectline", obj, ["normal", "disabled", "mouseover"]);

    obj = new nexacro.Style_font("Dotum,9, bold");
    this._addCss(".grd_MF_cal>#body", "selectfont", obj, ["normal", "disabled", "mouseover"]);

    obj = new nexacro.Style_color("#405980");
    this._addCss(".grd_MF_grd", "color", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://Images/df_treeopen.png')");
    this._addCss(".grd_MF_grd", "treeopenbuttonimage", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://Images/df_treeclose.png')");
    this._addCss(".grd_MF_grd", "treeclosebuttonimage", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://Images/df_treecollapse.png')");
    this._addCss(".grd_MF_grd", "treecollapseimage", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://Images/df_treeexpand.png')");
    this._addCss(".grd_MF_grd", "treeexpandimage", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://Images/df_treeitem.png')");
    this._addCss(".grd_MF_grd", "treeitemimage", obj, ["normal"]);

    obj = new nexacro.Style_line("1","dotted","#a5b6b6ff","");
    this._addCss(".grd_MF_grd", "treelinetype", obj, ["normal"]);
    this._addCss(".grd_LF_SubMenu", "treelinetype", obj, ["normal"]);

    obj = new nexacro.Style_background("","","","0","0","0","0","true");
    this._addCss(".grd_MF_grd>#head", "cellbackground", obj, ["normal"]);

    obj = new nexacro.Style_color("#000000");
    this._addCss(".grd_MF_grd>#head", "cellcolor", obj, ["normal"]);

    obj = new nexacro.Style_color("#000000");
    this._addCss(".grd_MF_grd>#head", "cellcolor2", obj, ["normal"]);

    obj = new nexacro.Style_font("Dotum,9");
    this._addCss(".grd_MF_grd>#head", "cellfont", obj, ["normal"]);
    this._addCss(".grd_MF_grd>#body", "cellfont", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","1","solid","#ccccccff","","1","solid","#ccccccff","","0","none","","");
    this._addCss(".grd_MF_grd>#head", "cellline", obj, ["normal"]);

    obj = new nexacro.Style_gradation("linear 0,0 #ffffff 0,100 #e7e7e6");
    this._addCss(".grd_MF_grd>#head", "gradation", obj, ["normal"]);

    obj = new nexacro.Style_color("#000000");
    this._addCss(".grd_MF_grd>#head", "selectcolor", obj, ["normal"]);

    obj = new nexacro.Style_background("#f9f9f9ff","","","0","0","0","0","true");
    this._addCss(".grd_MF_grd>#body", "cellbackground", obj, ["normal"]);

    obj = new nexacro.Style_background("#f9f9f9ff","","","0","0","0","0","true");
    this._addCss(".grd_MF_grd>#body", "cellbackground2", obj, ["normal"]);

    obj = new nexacro.Style_color("#666666");
    this._addCss(".grd_MF_grd>#body", "cellcolor2", obj, ["normal"]);

    obj = new nexacro.Style_border("0","none","","","0","none","","","1","solid","#e0e0e0ff","","0","none","","");
    this._addCss(".grd_MF_grd>#body", "cellline", obj, ["normal"]);

    obj = new nexacro.Style_padding("1 0 0 0");
    this._addCss(".grd_MF_grd>#body", "cellpadding", obj, ["normal"]);

    obj = new nexacro.Style_font("Dotum,9");
    this._addCss(".grd_MF_grd>#body", "selectfont", obj, ["normal"]);

    obj = new nexacro.Style_background("#c9c9c9ff","","","0","0","0","0","true");
    this._addCss(".grd_MF_grd>#body", "cellbackground", obj, ["mouseover"]);

    obj = new nexacro.Style_background("#c9c9c9ff","","","0","0","0","0","true");
    this._addCss(".grd_MF_grd>#body", "cellbackground2", obj, ["mouseover"]);

    obj = new nexacro.Style_background("","theme://Images/img_WF_mainImage.png","","0","0","0","0","true");
    this._addCss("Static.sta_WF_mainImage", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/btn_LF_setting_F.png","","0","0","50","50","true");
    this._addCss("Button.btn_LF_setting2", "background", obj, ["normal", "focused"]);

    obj = new nexacro.Style_background("","theme://Images/div_LF_settingPOP.png","stretch","50","50","0","0","true");
    this._addCss("Div.div_LF_settingPOP", "background", obj, ["normal"]);

    obj = new nexacro.Style_background("","theme://Images/sta_POP_bg.png","stretch","50","50","0","0","true");
    this._addCss("Static.sta_POP_bg", "background", obj, ["normal"]);

    obj = new nexacro.Style_padding("11 0 0 12");
    this._addCss("Static.sta_POP_bg", "padding", obj, ["normal"]);

    obj = new nexacro.Style_font("bold 10 Dotum");
    this._addCss("Static.sta_POP_bg", "font", obj, ["normal"]);

    obj = new nexacro.Style_value("theme://Images/btn_POP_closeN.png");
    this._addCss("Button.btn_POP_close", "image", obj, ["normal", "disabled", "focused", "selected"]);

    obj = new nexacro.Style_border("1","dotted","#eeeeee60","");
    this._addCss("Button.btn_POP_close", "border", obj, ["normal", "disabled"]);

    obj = new nexacro.Style_value("theme://Images/btn_POP_closeO.png");
    this._addCss("Button.btn_POP_close", "image", obj, ["mouseover"]);

    obj = new nexacro.Style_value("theme://Images/btn_POP_closeP.png");
    this._addCss("Button.btn_POP_close", "image", obj, ["pushed"]);

    obj = new nexacro.Style_border("1","dotted","#eeeeeeff","");
    this._addCss("Button.btn_POP_close", "border", obj, ["focused", "selected"]);

    obj = new nexacro.Style_value("no");
    this._addCss("Combo.readonly>#dropbutton", "cursor", obj, ["normal", "mouseover", "pushed", "focused"]);
    this._addCss("Calendar.readonly>#dropbutton", "cursor", obj, ["normal", "mouseover", "pushed", "focused"]);

    obj = new nexacro.Style_background("","theme://Images/btn_LF_menuClose.png","","0","0","0","0","true");
    this._addCss(".btn_LF_menuClose", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_background("","theme://Images/btn_LF_menuOpen.png","","0","0","0","0","true");
    this._addCss(".btn_LF_menuOpen", "background", obj, ["normal", "mouseover", "pushed", "focused", "selected", "disabled"]);

    obj = new nexacro.Style_value("URL('theme://Images/ico_treeclose.png')");
    this._addCss(".grd_LF_SubMenu", "treeclosebuttonimage", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('')");
    this._addCss(".grd_LF_SubMenu", "treecollapseimage", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('')");
    this._addCss(".grd_LF_SubMenu", "treeexpandimage", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('')");
    this._addCss(".grd_LF_SubMenu", "treeitemimage", obj, ["normal"]);

    obj = new nexacro.Style_value("URL('theme://Images/ico_treeopen.png')");
    this._addCss(".grd_LF_SubMenu", "treeopenbuttonimage", obj, ["normal"]);

    obj = null;
    
//[add theme images]
  };
})();
