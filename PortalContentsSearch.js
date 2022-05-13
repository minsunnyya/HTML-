import React from 'react'
import styled from 'styled-components';

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
        margin-right: 10px;
   `


const PortalContentsSearch = () => {
  return (
    <div id="border_cts">
    <div class="boardSearch row team">
        <div>
            <Search>
                <label>
               <img id="blue" src="/image/bullet_blue.png"/>
                    <span>검색 :</span>
                </label>
            </Search>
            <select id="search_type_state">
                <option value="" selected="">(All)</option>
                <option value="001">계획</option>
                <option value="003">종료</option>
                <option value="004">사전</option>
                <option value="005">실행</option>
                <option value="009">예외</option>
            </select>
            <select id="search_type">
                <option value="">(All)</option>
                <option value="001">프로젝트No.</option>
                <option value="002">프로젝트명</option>
                <option value="006">관리자명</option>
            </select>
            <input type="text" id="search_value" autocomplete="off"/>
            <button id="btn_search_list" class="btn-blue">
                <i class="icon-search"/>검색
            </button>
        </div>
        <div>
            <First>
                <label>
                <img id="blue" src="/image/bullet_blue.png"/>
                    <span id="lastPrj">마지막 접속 프로젝트 :</span>
                </label>
            </First>
            <Subcon_body2>
                <label id="last_project_name">22년-통합품질관리(PiMS)-운영</label>
            </Subcon_body2>
        </div>
        <div id="last_sol">
            <Last>
                <label>
                <img id="blue" src="/image/bullet_blue.png"/>
                    <span id="lastSol">마지막 접속 서비스 :</span>
                </label>
            </Last>
            <Subcon_body>
                <label id="last_solution">ITS</label>
            </Subcon_body>
        </div>
    </div>
    </div>
  )
}

export default PortalContentsSearch