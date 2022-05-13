import React from 'react'

const PortalSubmenu = () => {
  return (
      <>
    <>
    <button class="sub_menu_popup" >
    <i class="icon-reorder"/>
</button>
</>
<div class="subcon_menu">
    <div>
        <ul>
            <li class="menu_head" id="left_menu_title">My프로젝트</li>
            <li class="subcon_body_title_sub_" id="left_menu_title_eng">MY PROJECT</li>
        </ul>
    </div>
    <>
    <ul class="subcon_ul1">
        <li class="menu_out on">
            <a href="/html/pj/projectlist.html">My프로젝트</a>
        </li>
        <li class="menu_out">
            <a href="/html/pj/userteammgr.html">프로젝트팀원</a>
        </li>
        <li class="menu_out">
            <a href="/html/pj/alarmmgr.html">알람관리</a>
        </li>
    </ul>
    </>
    </div>
    </>
   
  )
}

export default PortalSubmenu