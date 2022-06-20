import React, { useState, useEffect, useContext } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import { Button } from "primereact/button";
import { SplitButton } from "primereact/splitbutton";
import { Avatar } from "primereact/avatar";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import {
  BsFillQuestionCircleFill,
  BsList,
  BsFileEarmarkExcel,
  BsFillPersonPlusFill,
  BsPencilSquare,
} from "react-icons/bs";
import {
  Card,
  Form,
  Row,
  Col,
  FormControl,
  InputGroup,
  Badge,
  Offcanvas,
  Dropdown,
  Nav,
} from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { usePortalDispatch, usePortalSelector } from "@/redux/hooks";
import { useKeycloak } from "@react-keycloak/ssr";
import { GetContext } from "@/contexts/get";
import { getMyProject } from "@/redux/myProject/myProject";

const Apiguide = () => {
  const { keycloak, initialized } = useKeycloak();
  const { menu } = usePortalSelector(({ menu }) => menu);
  const userInfo = usePortalSelector((state) => state.user.userInfo);
  const dispatch = usePortalDispatch();
  const { addCurentPageData } = useContext(GetContext);
  const [show, setShow] = useState(false);
  const [activeIndex1, setActiveIndex1] = useState(1);
  const [activeIndex2, setActiveIndex2] = useState(0);
  const scrollableTabs = Array.from({ length: 50 }, (_, i) => ({
    title: `Tab ${i + 1}`,
    content: `Tab ${i + 1} Content`,
  }));
  const tabHeaderIIITemplate = (options) => {
    const items = [
      { label: "Update", icon: "pi pi-refresh" },
      { label: "Delete", icon: "pi pi-times" },
      { label: "Upload", icon: "pi pi-upload" },
    ];

    return (
      <SplitButton
        label="Header III"
        icon="pi pi-plus"
        onClick={options.onClick}
        className="px-2"
        model={items}
      ></SplitButton>
    );
  };

  const tabHeaderIITemplate = (options) => {
    return (
      <div
        className="flex align-items-center px-3"
        style={{ cursor: "pointer" }}
        onClick={options.onClick}
      >
        <Avatar
          image="images/avatar/amyelsner.png"
          onImageError={(e) =>
            (e.target.src =
              "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
          }
          shape="circle"
          className="mx-2"
        />
        Amy Elsner
      </div>
    );
  };

  const tabHeaderITemplate = (options) => {
    return (
      <button
        type="button"
        onClick={options.onClick}
        className={options.className}
      >
        <i className="pi pi-prime mr-2" />
        {options.titleElement}
      </button>
    );
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getPath = (props) => {
    for (let i = 0; i < menu.list.length; i++) {
      if (menu.list[i].etc1 === props) {
        return menu.list[i];
      }
    }
  };
  useEffect(() => {
    if (keycloak?.authenticated && keycloak?.token) {
      dispatch(
        getMyProject({
          token: keycloak?.token,
          params: {
            sp_uid: userInfo.serviceUid,
            user_id: userInfo.loginId,
            gc_chk: userInfo.groupCode,
            page_startnum: "1",
          },
        })
      );
    }
  }, [keycloak?.authenticated]);
  useEffect(() => {
    addCurentPageData(getPath(window.location.pathname));
  }, []);

  return (
    <>
      <div className="top_nav_area">
        <div className="top_nav_area">
          <div className="hd_top">
            <div className="hd_top_sub">
              <div className="top_left_area">
                <div className="service-name1">
                  <div>
                    서비스명 :{" "}
                    <span id="top_svc_name" className="blue">
                      PiMS
                    </span>
                  </div>
                </div>
              </div>
              <div className="userinfo_txt">
                <ul>
                  <li className="top_modal" id="modal_userinfo_open_btn">
                    <div>
                      <i className="icon-user" />{" "}
                      <i
                        className="icon-asterisk"
                        style={{ display: "none" }}
                      />{" "}
                      <span id="top_login_name">관리자</span>님 안녕하세요
                    </div>
                    <button className="btn_userinfo" alt="사용자정보" />
                  </li>
                  <li>
                    <button className="btn-gray2 small" id="btnLogout">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            {/* /.hd_top_sub */}
          </div>
          {/* /.hd_top */}
        </div>
        {/* /.top_nav_area */}
      </div>
      <div className="topbar" />
      <div id="wrap">
        {/* /#modal_userinfo */}
        <div className="header">
          {" "}
          <div className="header">
            <div className="header_logo" id="goto_main">
              <img src="/image/pt/logo.png" />
            </div>
            <div className="header_nav">
              <ul className="topnav" id="myTopnav">
                <a
                  className="icon"
                  href="javascript:void(0);"
                  onclick="navFun()"
                >
                  <Dropdown
                    style={{ color: "black", backgroundColor: "white" }}
                  >
                    <Dropdown.Toggle
                      style={{
                        color: "black",
                        backgroundColor: "white",
                        borderColor: "transparent",
                      }}
                    >
                      <BsList
                        style={{ color: "black", backgroundColor: "white" }}
                      />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        My 프로젝트
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        프로젝트 팀원
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">알람관리</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </a>
                <li>
                  <a href="/html/pj">My프로젝트</a>{" "}
                  <img src="/image/pt/point.png" />{" "}
                </li>
                <li>
                  <a href="/html/pt">서비스관리</a>{" "}
                  <img src="/image/pt/point.png" />{" "}
                </li>
                <li>
                  <a href="/html/sys/portal">서비스별포탈</a>{" "}
                  <img src="/image/pt/point.png" />{" "}
                </li>
                <li>
                  <a href="/html/sys/system">시스템설정</a>{" "}
                  <img src="/image/pt/point.png" />{" "}
                </li>
                <li>
                  <a href="/html/sys/legacy">운영관리</a>{" "}
                  <img src="/image/pt/point.png" />{" "}
                </li>
                <li>
                  <a href="/html/sys/service">서비스설정</a>{" "}
                  <img src="/image/pt/point.png" />{" "}
                </li>
                <li>
                  <a href="/html/api">API가이드</a>{" "}
                  <img src="/image/pt/point.png" />{" "}
                </li>
                <li>
                  <a href="/html/help">HelpDesk</a>{" "}
                  <img src="/image/pt/point.png" />{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="contents">
          <div className="con_div">
            <button className="sub_menu_popup">
              <BsList />
            </button>
            {/* left area s */}
            <div className="subcon_menu">
              <div>
                <ul>
                  <li className="menu_head" id="left_menu_title">
                    My프로젝트
                  </li>
                  <li
                    className="subcon_body_title_sub"
                    id="left_menu_title_eng"
                  >
                    MY PROJECT
                  </li>
                </ul>
              </div>
              <ul className="subcon_ul1">
                <li className="menu_out on">
                  <a href="/html/pj/projectlist.html">My프로젝트</a>
                </li>
                <li className="menu_out">
                  <a href="/html/pj/userteammgr.html">프로젝트팀원</a>
                </li>
                <li className="menu_out">
                  <a href="/html/pj/alarmmgr.html">알람관리</a>
                </li>
              </ul>
            </div>
            {/* left area e */}
            <div className="subcon_body">
              <ul>
                <li
                  className="subcon_body_title_sub subcon_body_top"
                  id="menu_nav"
                >
                  <a href="/">Home</a> <i className="icon-angle-right" />{" "}
                  <a href="/html/pj">My프로젝트</a>{" "}
                  <i className="icon-angle-right" />{" "}
                  <a href="/html/pj/projectlist.html">My프로젝트</a>
                </li>
                <li className="subcon_body_title" id="menu_title">
                  My프로젝트
                </li>
                <li className="subcon_body_title_sub" id="menu_title_desc">
                  PiMS Portal 서비스의 My프로젝트 페이지입니다.
                </li>
              </ul>
              <div className="wrap_useSite">
                <div className="useSite" id="useSite">
                  <div className="svc_tms">
                    <a href="http://localhost:8304/tms">TMS</a>
                  </div>
                  <div className="svc_tms">
                    <a href="http://localhost:8304/tms">TMS</a>
                  </div>
                  <div className="svc_tms">
                    <a href="http://localhost:8304/tms">TMS</a>
                  </div>
                  <div className="svc_tms">
                    <a href="http://localhost:8304/tms">TMS</a>
                  </div>
                  <div className="svc_tms">
                    <a href="http://localhost:8304/tms">TMS</a>
                  </div>
                  <div className="svc_tms">
                    <a href="http://localhost:8304/tms">TMS</a>
                  </div>
                  <div className="svc_tms">
                    <a href="http://localhost:8304/tms">TMS</a>
                  </div>
                </div>
                <div className="process_popup">
                  <button id="btn_recently">
                    <i className="icon-sort-down" />
                    &nbsp; 최근 접속 화면
                  </button>
                  <button
                    className="btn-wg"
                    onclick="openGuidePopUp_sys(); return false;"
                  >
                    <i className="icon-sitemap" /> 구조도
                  </button>
                  <button
                    className="btn-wg"
                    onclick="openGuidePopUp(); return false;"
                  >
                    <i className="icon-map-marker" /> Process
                  </button>
                </div>
                {/* 최근 접속 화면 모달창 */}
                <div
                  id="accessMenuLog"
                  className="modal_recent"
                  style={{ display: "none" }}
                >
                  <div className="modal_recent_content">
                    <div className="list">
                      <h3>
                        <i className="icon-time" /> 최근 접속 화면
                      </h3>{" "}
                      <div className="recent_header">
                        <ul>
                          <li>서비스명</li>{" "}
                          <li>
                            <span className="deco_bar left" />
                            접속 화면
                            <span className="deco_bar right" />
                          </li>{" "}
                          <li>접속일</li>
                        </ul>
                      </div>{" "}
                      <div className="recent_content">
                        <ul>
                          <li>
                            <span />
                          </li>{" "}
                          <li>
                            <span className="deco_bar left" /> <a href="" />{" "}
                            <span className="deco_bar right" />
                          </li>{" "}
                          <li />
                        </ul>
                      </div>
                    </div>{" "}
                    <div className="list">
                      <h3>
                        <i className="icon-list-ol" /> 주 사용 화면
                      </h3>{" "}
                      <div className="recent_header">
                        <ul>
                          <li>서비스명</li>{" "}
                          <li>
                            <span className="deco_bar left" />
                            접속 화면
                            <span className="deco_bar right" />
                          </li>{" "}
                          <li>접속 횟수</li>
                        </ul>
                      </div>{" "}
                      <div className="recent_content">
                        <ul>
                          <li>
                            <span />
                          </li>{" "}
                          <li>
                            <span className="deco_bar left" /> <a href="" />{" "}
                            <span className="deco_bar right" />
                          </li>{" "}
                          <li />
                        </ul>
                      </div>
                    </div>
                  </div>{" "}
                  <span
                    title="클릭하면 창이 닫힙니다."
                    className="modal_recent_close"
                  >
                    <i className="icon-remove" />
                  </span>
                </div>
                {/* /.modal_recent */}
              </div>
              <div id="border_cts">
                <div className="card">
                  <TabView
                    activeIndex={activeIndex1}
                    onTabChange={(e) => setActiveIndex1(e.index)}
                  >
                    <TabPanel header="Portal">
                      <h2>API 호출</h2>
                      <p>
                        REST API에서 API의 호출은 API의 URI 주소를 입력
                        파라미터와 함께 HTTP 요청하는 것으로 처리됩니다. 하나의
                        API는 하나의 웹 URI 주소와 대응됩니다. 다음은 PiMS에서
                        제공하는 API의 URI 맵 입니다.
                      </p>
                      <div className="card">
                        <DataTable
                          // value={products}
                          responsiveLayout="scroll"
                          // loading={fetchProjectLoading}
                        >
                          <Column field="function" header="기능구분"></Column>
                          <Column field="api" header="API명"></Column>
                          <Column field="url" header="URL"></Column>
                          <Column field="http" header="HTTP Method"></Column>
                        </DataTable>
                      </div>
                    </TabPanel>
                    <TabPanel header="ITS">
                      <h2>API 호출</h2>
                      <p>
                        REST API에서 API의 호출은 API의 URI 주소를 입력
                        파라미터와 함께 HTTP 요청하는 것으로 처리됩니다. 하나의
                        API는 하나의 웹 URI 주소와 대응됩니다. 다음은 PiMS에서
                        제공하는 API의 URI 맵 입니다.
                      </p>
                      <div className="card">
                        <DataTable
                          // value={products}
                          responsiveLayout="scroll"
                          // loading={fetchProjectLoading}
                        >
                          <Column field="function" header="기능구분"></Column>
                          <Column field="api" header="API명"></Column>
                          <Column field="url" header="URL"></Column>
                          <Column field="http" header="HTTP Method"></Column>
                        </DataTable>
                      </div>
                    </TabPanel>
                    <TabPanel header="PMS">
                      <h2>API 호출</h2>
                      <p>
                        REST API에서 API의 호출은 API의 URI 주소를 입력
                        파라미터와 함께 HTTP 요청하는 것으로 처리됩니다. 하나의
                        API는 하나의 웹 URI 주소와 대응됩니다. 다음은 PiMS에서
                        제공하는 API의 URI 맵 입니다.
                      </p>
                      <div className="card">
                        <DataTable
                          // value={products}
                          responsiveLayout="scroll"
                          // loading={fetchProjectLoading}
                        >
                          <Column field="function" header="기능구분"></Column>
                          <Column field="api" header="API명"></Column>
                          <Column field="url" header="URL"></Column>
                          <Column field="http" header="HTTP Method"></Column>
                        </DataTable>
                      </div>
                    </TabPanel>
                    <TabPanel header="Agile">
                      <h2>API 호출</h2>
                      <p>
                        REST API에서 API의 호출은 API의 URI 주소를 입력
                        파라미터와 함께 HTTP 요청하는 것으로 처리됩니다. 하나의
                        API는 하나의 웹 URI 주소와 대응됩니다. 다음은 PiMS에서
                        제공하는 API의 URI 맵 입니다.
                      </p>
                      <div className="card">
                        <DataTable
                          // value={products}
                          responsiveLayout="scroll"
                          // loading={fetchProjectLoading}
                        >
                          <Column field="function" header="기능구분"></Column>
                          <Column field="api" header="API명"></Column>
                          <Column field="url" header="URL"></Column>
                          <Column field="http" header="HTTP Method"></Column>
                        </DataTable>
                      </div>
                    </TabPanel>
                    <TabPanel header="TMS">
                      <h2>API 호출</h2>
                      <p>
                        REST API에서 API의 호출은 API의 URI 주소를 입력
                        파라미터와 함께 HTTP 요청하는 것으로 처리됩니다. 하나의
                        API는 하나의 웹 URI 주소와 대응됩니다. 다음은 PiMS에서
                        제공하는 API의 URI 맵 입니다.
                      </p>
                      <div className="card">
                        <DataTable
                          // value={products}
                          responsiveLayout="scroll"
                          // loading={fetchProjectLoading}
                        >
                          <Column field="function" header="기능구분"></Column>
                          <Column field="api" header="API명"></Column>
                          <Column field="url" header="URL"></Column>
                          <Column field="http" header="HTTP Method"></Column>
                        </DataTable>
                      </div>
                    </TabPanel>
                    <TabPanel header="QMS">
                      <h2>API 호출</h2>
                      <p>
                        REST API에서 API의 호출은 API의 URI 주소를 입력
                        파라미터와 함께 HTTP 요청하는 것으로 처리됩니다. 하나의
                        API는 하나의 웹 URI 주소와 대응됩니다. 다음은 PiMS에서
                        제공하는 API의 URI 맵 입니다.
                      </p>
                      <div className="card">
                        <DataTable
                          // value={products}
                          responsiveLayout="scroll"
                          // loading={fetchProjectLoading}
                        >
                          <Column field="function" header="기능구분"></Column>
                          <Column field="api" header="API명"></Column>
                          <Column field="url" header="URL"></Column>
                          <Column field="http" header="HTTP Method"></Column>
                        </DataTable>
                      </div>
                    </TabPanel>
                  </TabView>
                </div>
                {/* 주의사항 */}
              </div>
            </div>
          </div>
          {/* /.contents */}
        </div>

        <div className="footer">
          <div className="footer">
            <div className="footer_div">
              <div className="footer-detail">
                <ul>
                  <li id="adress">
                    경기도 성남시 분당구 성남대로 343번길9 에스케이유타워
                    SK주식회사 C&amp;C
                  </li>
                  <li id="tel_info">
                    대표전화 : 02-6400-2495　|　FAX : 02-6400-1111　|　E-mail :
                    nexcorepms@skcc.com
                  </li>
                  <li id="copyright">
                    Copyright⒞ 2020 SK주식회사 C&amp;C LTD ALL RIGHTS RESERVED
                    Powerd by PiMS
                  </li>
                </ul>
              </div>
              <div className="footer-logo">
                <img src="/image/pt/footer_logo.png" className="footer_logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apiguide;
