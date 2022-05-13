import React from 'react'
import styled from 'styled-components';
import { BsExclamationCircleFill,BsFillCaretDownFill,BsFillDiagram3Fill,BsGeoAltFill,BsChevronRight} from "react-icons/bs";



const Last = styled.div`
	display: flow-root;
    position: relative;
    left: 570px;
	`	

const First = styled.div`
	display: flow-root;
    position: relative;
    left: 290px;
	`

const Subcon_body = styled.div`
   
   color: #cc0fb4;
    font-size: 14px;
    font-weight: bold;
    position: relative;
    top: 7px;
    left: 580px !important;
	
`
const Subcon_body2 = styled.div`
   
	color: #cc0fb4;
    font-size: 14px;
    font-weight: bold;
    position: relative;
    top: 7px;
	left: 300px;
	
`



const Search = styled.div`
	  position: relative;
    top: 5px;
    
   `




const PortalContents = () => {
  return (

    <div id="wrap" >

	<div id="modal_userinfo">
		<div class="modal_content">
			<h2>
				<i class="icon-user"></i> 사용자 정보
			</h2>
			<table class="table_userinfo">
				<tr>
					<td>이름</td>
					<td><input id="modal_name" type="text" readonly/></td>
				</tr>
				<tr>
					<td>회사명</td>
					<td><input id="modal_co" type="text" readonly/></td>
				</tr>
				<tr>
					<td>서비스명</td>
					<td><input id="modal_spname" type="text" readonly/></td>
				</tr>
			</table>

			<table id="sevice_select" class="sevice_area">
					<tr>
						<td><h3>서비스 선택</h3></td>
						<td id="svc_selector"/><select><option>서비스 01</option></select>
					</tr>
			</table>

			<div class="modal_bottom">

				<button type="button" class="btn-bluedark" id="modal_reset_password_btn">비밀번호 초기화</button>
				<button type="button" class="btn-gray3" id="modal_userinfo_close_btn">닫기</button>
			</div>
		</div>
		<div class="modal_layer"></div>
	</div>

    <div include-html="/html/layouts/header.html" class="header"></div>

	<div class="contents">
		<div class="con_div">
			<button class="sub_menu_popup"><i class="icon-reorder"></i></button>
            <div class="subcon_menu">
				<div>
					<ul>
						<li class="menu_head" id="left_menu_title">My프로젝트</li>
						<li class="subcon_body_title_sub_" id="left_menu_title_eng">MY PROJECT</li>
					</ul>
				</div>

				<ul class="subcon_ul1"><li class="menu_out on"><a href="/html/pj/projectlist.html">My프로젝트</a></li><li class="menu_out"><a href="/html/pj/userteammgr.html">프로젝트팀원</a></li><li class="menu_out"><a href="/html/pj/alarmmgr.html">알람관리</a></li></ul>
			</div>
            <div class="subcon_body">
				<ul>
					<li class="subcon_body_title_sub subcon_body_top" id="menu_nav"><a href="/">Home</a><BsChevronRight /> <i class="icon-angle-right"></i> <a href="/html/pj">My프로젝트</a> <BsChevronRight /> <a href="/html/pj/projectlist.html">My프로젝트</a></li>
					<li class="subcon_body_title" id="menu_title">My프로젝트</li>
					<li class="subcon_body_title_sub_con" id="menu_title_desc">PiMS Portal 서비스의 My프로젝트 페이지입니다.</li>
				</ul>
                	<div class="wrap_useSite">
                        
				
                    <div class="useSite" id="useSite">

                    <div class="svc_its"><a href="https://pims.skcc.com:9082/its">ITS</a></div>
                    <div class="svc_pms"><a href="https://pims.skcc.com:9083/pms">PMS</a></div>
                    <div class="svc_tms"><a href="https://pims.skcc.com:9084/tms">TMS</a></div>
                    <div class="svc_qms"><a href="https://qms.skcc.com:443/qms">QMS</a></div>
                    <div class="svc_agile"><a href="https://pims.skcc.com:9086/agile">AGILE</a></div>
                    <div class="svc_rpa"><a href="https://rpa.skcc.com:/">RPA</a></div>
                    <div class="svc_portal"><a href="https://pims.skcc.com:/">PORTAL</a></div></div>

                    <div class="process_popup">
						<button id="btn_recently"><BsFillCaretDownFill/>&nbsp; 최근 접속 화면</button>
						<button class="btn-wg" onclick="openGuidePopUp_sys(); return false;"><BsFillDiagram3Fill/> 구조도</button>
						<button class="btn-wg" onclick="openGuidePopUp(); return false;"><BsGeoAltFill/> Process</button>
					</div>

					{/* <div id="accessMenuLog" class="modal_recent" ><div class="modal_recent_content"><div class="list"><h3><i class="icon-time"></i> 최근 접속 화면</h3> <div class="recent_header"><ul><li>서비스명</li> <li><span class="deco_bar left"></span>접속 화면<span class="deco_bar right"></span></li> <li>접속일</li></ul></div> <div class="recent_content"><ul><li><span></span></li> <li><span class="deco_bar left"></span> <a href=""></a> <span class="deco_bar right"></span></li> <li></li></ul></div></div> <div class="list"><h3><i class="icon-list-ol"></i> 주 사용 화면</h3> <div class="recent_header"><ul><li>서비스명</li> <li><span class="deco_bar left"></span>접속 화면<span class="deco_bar right"></span></li> <li>접속 횟수</li></ul></div> <div class="recent_content"><ul><li><span></span></li> <li><span class="deco_bar left"></span> <a href=""></a> <span class="deco_bar right"></span></li> <li></li></ul></div></div></div> <span title="클릭하면 창이 닫힙니다." class="modal_recent_close"><i class="icon-remove"></i></span></div>

				</div> */}
                   
                  
					{/* <script type="text/javascript">
							function openGuidePopUp() {
								var w = (screen.width-1000)/2;
								var h = (screen.height-550)/2;

								window.open(context + 'html/quick_info/html/portal_process_01.html', '_blank', 'directories=no,menubar=no,toolbar=no,status=no,location=no,width=1005,height=550,scrollbars=no,resizable=no,top=' + h + ',left=' + w);
							}
							function openGuidePopUp_sys() {
								var w = (screen.width-1000)/2;
								var h = (screen.height-700)/2;

								window.open(context + 'html/quick_info/html/portal_sys_01.html', '_blank', 'directories=no,menubar=no,toolbar=no,status=no,location=no,width=1215,height=700,scrollbars=no,resizable=no,top=' + h + ',left=' + w);
							}

					</script>					 */}


            
                    {/* <div class="modal_recent"  id="accessMenuLog"> */}
                    {/* <div class="modal_recent" style="display:none" id="accessMenuLog"> */}
					  {/* <div class="modal_recent_content">
					    <div class="list">
					    	<h3><i class="icon-time"></i> 최근 접속 화면</h3>
						    <div class="recent_header">
							    <ul>
							    	<li>서비스명</li>
							    	<li><span class="deco_bar left"></span>접속 화면<span class="deco_bar right"></span></li>
							    	<li>접속일</li>
							    </ul>
						    </div>

                            <div class="recent_content" v-for="item in recentlyMenu" v-cloak>
							    <ul>
							    	<li></li>
							    	<li>
								    	</li>
							    	<li></li>
							    </ul>
						    </div> */}

{/* <div class="list">
							<h3><i class="icon-list-ol"></i> 주 사용 화면</h3>
						    <div class="recent_header">
							    <ul>
							    	<li>서비스명</li>
							    	<li><span class="deco_bar left"></span>접속 화면<span class="deco_bar right"></span></li>
							    	<li>접속 횟수</li>					    	
							    </ul>
						    </div> */}
						    {/* <div class="recent_content" v-for="item in mainlyMenu" v-cloak>
							    <ul>
							    	<li><span>{{item.service_cd}}</span></li>
							    	<li>
								    	<span class="deco_bar left"></span>
								    	<a v-bind:href="item.menu_url">{{item.menu_name}}</a>
								    	<span class="deco_bar right"></span></li>
							    	<li>{{item.access_count}}</li>
							    </ul>
						    </div> */}
						  </div>					  
					  {/* </div>
				  	  <span class="modal_recent_close" title="클릭하면 창이 닫힙니다."><i class="icon-remove"></i></span>
					</div> */}


                    <div id="border_cts">







                    <div class="boardSearch row team">
						<div>
						<Search><label><img src="/image/bullet_blue.png" /><span>검색 :</span></label></Search>
		                    <select id="search_type_state"><option value="" selected="">(All)</option><option value="001">계획</option><option value="003">종료</option><option value="004">사전</option><option value="005">실행</option><option value="009">예외</option></select>
	                        <select id="search_type">
	                            <option value="">(All)</option>
	                            <option value="001">프로젝트No.</option>
	                            <option value="002">프로젝트명</option>
	                            <option value="006">관리자명</option>
	                        </select>
	                        <input type="text" id="search_value" autocomplete="off" />
	                        <button id="btn_search_list" class="btn-blue"><i class="icon-search"></i> 검색</button>
                            </div>
                            <div>
	                       <First><label>
	                       <img src="/image/bullet_blue.png" /><span id="lastPrj" >마지막 접속 프로젝트 :</span></label></First>
						   <Subcon_body2><label id="last_project_name" >22년-통합품질관리(PiMS)-운영</label></Subcon_body2>
		                   </div>

		                   <div id="last_sol">
						   <Last> <label> <img src="/image/bullet_blue.png" /><span id="lastSol" >마지막 접속 서비스 :</span></label></Last>
						  <Subcon_body><label id="last_solution">ITS</label></Subcon_body>
		               	   </div>
					</div>


{/* <div class="boardSearch row team">
						<div>
		                    <label><span>검색 :</span></label>
		                    <select id="search_type_state"><option value="" selected="">(All)</option><option value="001">계획</option><option value="003">종료</option><option value="004">사전</option><option value="005">실행</option><option value="009">예외</option></select>
	                        <select id="search_type">
	                            <option value="">(All)</option>
	                            <option value="001">프로젝트No.</option>
	                            <option value="002">프로젝트명</option>
	                            <option value="006">관리자명</option>
	                        </select>
	                        <input type="text" id="search_value" autocomplete="off">
	                        <button id="btn_search_list" class="btn-blue"><i class="icon-search"></i> 검색</button>
	                       </div>
	                       <div>
	                        <label><span id="lastPrj" style="font-size: 14px;line-height:2;">마지막 접속 프로젝트 :</span></label>
		                	<label id="last_project_name" style="color: #cc0fb4; font-size: 14px; font-weight: bold;">22년-통합품질관리(PiMS)-운영</label>
		                   </div>
		                   <div id="last_sol">
		                	<label><span id="lastSol" style="font-size: 14px;line-height:2;">마지막 접속 서비스 :</span></label>
		                	<label id="last_solution" style="color: #cc0fb4; font-size: 14px; font-weight: bold;">ITS</label>
		               	   </div>
					</div> */}








                           
                           <div class="boardInfo">
						<ul class="float-l">
							<li>
								<i class="icon-table"></i> 프로젝트 <span id="total_cnt">0</span>건
							</li>
						</ul>
						<ul class="float-r">
							<li id="btnyear">
								{/* <select id="year" name="year" style="height:28px; width:70px"></select> */}
								<select id="year" name="year"></select>
							</li>
							<li id="btnyear2"><div id="btnExcelDownload" class="btn-dark float-r">엑셀 다운로드</div></li>
							<li>
								{/* <select id="paging" name="paging" style="height:28px; width:70px"> */}
								<select id="paging" name="paging">
									<option value="10">10개</option>
									<option value="25">25개</option>
									<option value="50">50개</option>
									<option value="75">75개</option>
									<option value="100">100개</option>
									<option value="500">500개</option>
									<option value="1000">1000개</option>
								</select>
							</li>
						</ul>
					</div> 

					{/* <div id="grdpms01" style="min-height: 350px;"></div> */}
					<div id="grdpms01"></div>
					<div id="pgr01" class="paging"></div>
					{/* <div id="grdpms02" style="display: none;"></div> */}
					<div id="grdpms02"></div>
				</div>

                <div id="str1" class="rules">
						<h4>
							<i class="icon-exclamation-sign icon-large"></i><BsExclamationCircleFill/>도움말
						</h4>
						<ul>
						<li><img src="/image/sol.png" /> 활성화된 서비스 : 아이콘 클릭 시 해당 서비스 페이지로 이동합니다.</li>
							<li><img src="/image/dis_sol.png"/> 비활성화된 서비스 : 활성화 필요 시 관리자에게 문의 해주시기 바랍니다.</li>
						</ul>
					</div>
</div>
</div>
	                       <div> 

                           <div class="footer">
	<div class="footer_div">
	
    <div class="footer"><div class="footer">
	<div class="footer_div">
	
		<div class="footer-detail">
			<ul>
				<li id="adress">경기도 성남시 분당구 성남대로 343번길9 에스케이유타워 SK주식회사 C&amp;C</li>
				<li id="tel_info">대표전화 : 02-6400-2495　|　FAX : 02-6400-1111　|　E-mail : nexcorepms@skcc.com</li>
				<li id="copyright">Copyright⒞ 2020 SK주식회사 C&amp;C LTD ALL RIGHTS RESERVED Powerd by PiMS</li>
			</ul>
		</div>
		<div class="footer-logo">
			<img src="/image/footer_logo.png" class="footer_logo" />
		</div>				

	</div>
</div></div>
	                      

				</div>
                </div>
                </div>
</div>
</div>
 
 

 






  )
}

export default PortalContents