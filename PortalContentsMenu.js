import React from 'react'
import { BsExclamationCircleFill,BsFillCaretDownFill,BsFillDiagram3Fill,BsGeoAltFill,BsChevronRight} from "react-icons/bs";

const PortalContentsMenu = () => {
  return (
    <>
      <>
                <ul>
					<li class="subcon_body_title_sub subcon_body_top" id="menu_nav">
						<a href="/">Home</a>
						<BsChevronRight/>
						<i class="icon-angle-right"/>
						<a href="/html/pj">My프로젝트</a>
						<BsChevronRight/>
						<a href="/html/pj/projectlist.html">My프로젝트</a>
					</li>
					<li class="subcon_body_title" id="menu_title">My프로젝트</li>
					<li class="subcon_body_title_sub_con" id="menu_title_desc">PiMS Portal 서비스의 My프로젝트 페이지입니다.</li>
				</ul>
                </>

				<div class="wrap_useSite">
					<div class="useSite" id="useSite">
						<div class="svc_its">
							<a href="https://pims.skcc.com:9082/its">ITS</a>
						</div>
						<div class="svc_pms">
							<a href="https://pims.skcc.com:9083/pms">PMS</a>
						</div>
						<div class="svc_tms">
							<a href="https://pims.skcc.com:9084/tms">TMS</a>
						</div>
						<div class="svc_qms">
							<a href="https://qms.skcc.com:443/qms">QMS</a>
						</div>
						<div class="svc_agile">
							<a href="https://pims.skcc.com:9086/agile">AGILE</a>
						</div>
						<div class="svc_rpa">
							<a href="https://rpa.skcc.com:/">RPA</a>
						</div>
						<div class="svc_portal">
							<a href="https://pims.skcc.com:/">PORTAL</a>
						</div>
					</div>

					<div class="process_popup">
						<button id="btn_recently">
							<BsFillCaretDownFill/>
							&nbsp; 최근 접속 화면
						</button>
						<button class="btn-wg" onclick="openGuidePopUp_sys(); return false;">
							<BsFillDiagram3Fill/>
							구조도
						</button>
						<button class="btn-wg" onclick="openGuidePopUp(); return false;">
							<BsGeoAltFill/>
							Process
						</button>
					</div>
               
                    </div>
                    </>
                    
  )
}

export default PortalContentsMenu