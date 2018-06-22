package searchlaw.lawmapper.vo;


/**
 * 법령 검색 위한 VO
 * 
 * @author Son GaYeon
 * @since 11.04.2018
 * @version 0.1
 * @see
 * 
 * 검색을 위한 DefaultVO 상속
 */

public class LawInfoVO extends PageableVO {
	
	//T_LAWLIST
	private String lawId; // varchar2 (50 byte)	PK, NotNull	
	private String lawNo; // varchar2 (50 byte)
	private String nowHistoryCode; // varchar2 (50 byte)
	private String lawName; // varchar2 (200 byte)
	private String createDate; // varchar2 (50 byte)
	private String createNo; // varchar2 (50 byte)
	private String isModify; // varchar2 (50 byte)
	private String careDept; // varchar2 (100 byte)
	private String lawClassName; // varchar2 (50 byte)
	private String actDate; // varchar2 (50 byte)
	private String isSelf; // varchar2 (50 byte)
	private String detailLink; // varchar2 (200 byte)

	//T_LAWBASEINFO
	private String cateNo; // varchar2 (50 byte)
	private String isShow; // varchar2 (50 byte)
	private String modifyText; // clob	
	private String modifyReason; // clob
	
	//T_LAWSUBTEXT
	private String subKey;
	private String showDate;
	private String showNo;
	private String mainText;
	
	//T_LAWARTICLE
	private String articleKey;
	private String articleNo;
	private String name;
	private String beforeMove;
	private String afterMove;
	
	//T_LAWITEM
	private String cate;
	private String itemNo;
	private String itemText;
	private String higherItemNo;

	private String userId;

	
	public String getLawId() {
		return lawId;
	}

	public void setLawId(String lawId) {
		this.lawId = lawId;
	}

	public String getLawNo() {
		return lawNo;
	}

	public void setLawNo(String lawNo) {
		this.lawNo = lawNo;
	}

	public String getNowHistoryCode() {
		return nowHistoryCode;
	}

	public void setNowHistoryCode(String nowHistoryCode) {
		this.nowHistoryCode = nowHistoryCode;
	}

	public String getLawName() {
		return lawName;
	}

	public void setLawName(String lawName) {
		this.lawName = lawName;
	}

	public String getCreateDate() {
		return createDate;
	}

	public void setCreateDate(String createDate) {
		this.createDate = createDate;
	}

	public String getCreateNo() {
		return createNo;
	}

	public void setCreateNo(String createNo) {
		this.createNo = createNo;
	}

	public String getIsModify() {
		return isModify;
	}

	public void setIsModify(String isModify) {
		this.isModify = isModify;
	}

	public String getCareDept() {
		return careDept;
	}

	public void setCareDept(String careDept) {
		this.careDept = careDept;
	}

	public String getLawClassName() {
		return lawClassName;
	}

	public void setLawClassName(String lawClassName) {
		this.lawClassName = lawClassName;
	}

	public String getActDate() {
		return actDate;
	}

	public void setActDate(String actDate) {
		this.actDate = actDate;
	}

	public String getIsSelf() {
		return isSelf;
	}

	public void setIsSelf(String isSelf) {
		this.isSelf = isSelf;
	}

	public String getDetailLink() {
		return detailLink;
	}

	public void setDetailLink(String detailLink) {
		this.detailLink = detailLink;
	}

	public String getCateNo() {
		return cateNo;
	}

	public void setCateNo(String cateNo) {
		this.cateNo = cateNo;
	}

	public String getIsShow() {
		return isShow;
	}

	public void setIsShow(String isShow) {
		this.isShow = isShow;
	}

	public String getModifyText() {
		return modifyText;
	}

	public void setModifyText(String modifyText) {
		this.modifyText = modifyText;
	}

	public String getModifyReason() {
		return modifyReason;
	}

	public void setModifyReason(String modifyReason) {
		this.modifyReason = modifyReason;
	}

	public String getSubKey() {
		return subKey;
	}

	public void setSubKey(String subKey) {
		this.subKey = subKey;
	}

	public String getShowDate() {
		return showDate;
	}

	public void setShowDate(String showDate) {
		this.showDate = showDate;
	}

	public String getShowNo() {
		return showNo;
	}

	public void setShowNo(String showNo) {
		this.showNo = showNo;
	}

	public String getMainText() {
		return mainText;
	}

	public void setMainText(String mainText) {
		this.mainText = mainText;
	}

	public String getArticleKey() {
		return articleKey;
	}

	public void setArticleKey(String articleKey) {
		this.articleKey = articleKey;
	}

	public String getArticleNo() {
		return articleNo;
	}

	public void setArticleNo(String articleNo) {
		this.articleNo = articleNo;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getBeforeMove() {
		return beforeMove;
	}

	public void setBeforeMove(String beforeMove) {
		this.beforeMove = beforeMove;
	}

	public String getAfterMove() {
		return afterMove;
	}

	public void setAfterMove(String afterMove) {
		this.afterMove = afterMove;
	}

	public String getCate() {
		return cate;
	}

	public void setCate(String cate) {
		this.cate = cate;
	}

	public String getItemNo() {
		return itemNo;
	}

	public void setItemNo(String itemNo) {
		this.itemNo = itemNo;
	}

	public String getItemText() {
		return itemText;
	}

	public void setItemText(String itemText) {
		this.itemText = itemText;
	}

	public String getHigherItemNo() {
		return higherItemNo;
	}

	public void setHigherItemNo(String higherItemNo) {
		this.higherItemNo = higherItemNo;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

}
