import React from 'react'

const PortalHeaderTop = () => {
  return (
    <div className="header">
    <div className="header_logo" id ="goto_main">
        <img src="/image/logo.png" />
    </div>

    <div className="header_nav">
        <ul className="topnav" id="myTopnav">
		<li><a href="/html/pj">My프로젝트</a>   <img src="/image/point.png"/>    </li>
		<li><a href="/html/help">HelpDesk</a>   <img src="/image//point.png"/>    </li>
					{/* <li><i className=""></i><a href="">PMS</a><img src="../../images/pt/point.png" /></li> 
					<li><a href="">TMS</a><img src="../../images/pt/point.png" /></li> 
					<li><a href="">QMS</a><img src="../../images/pt/point.png" /></li> 
					<li><a href="">ITS</a><img src="../../images/pt/point.png" /></li> 
					<li><a href="">IDASH</a><img src="../../images/pt/point.png" /></li> 
					<li><a href="">EVMS</a><img src="../../images/pt/point.png" /></li> 
					<li><a href="">BANKPMS</a><img src="../../images/pt/point.png" /></li> 
					<li><a href="">AGILE</a><img src="../../images/pt/point.png" /></li> 
            
					<li><a href="../comm/deptmgr.html">공통관리</a><img src="../../images/pt/point.png" /></li> 
					<li><a href="../sys/menumgr.html">업무관리</a><img src="../../images/pt/point.png" /></li> 
					<li><a href="../service/servadress.html">서비스관리</a><img src="../../images/pt/point.png" /></li> 
					<li><a href="../legacy/legacyprjsyncinfo.html">운영관리</a></li>  */}
            {/* <a className="icon" href="javascript:void(0);" onclick="navFun()"><i className="icon-reorder"></i></a>					 */}
        </ul>
    </div>
</div>
  )
}

export default PortalHeaderTop