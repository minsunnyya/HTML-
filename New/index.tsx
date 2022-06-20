import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import {
  BsFillQuestionCircleFill,
  BsList,
  BsFileEarmarkExcel,
  BsFillPersonPlusFill,
  BsPencilSquare,
} from "react-icons/bs";
import { useEffect, useContext, useState } from "react";
import {
  Card,
  Form,
  Row,
  Col,
  FormControl,
  InputGroup,
  Button,
  Badge,
  Offcanvas,
  Dropdown,
} from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { usePortalDispatch, usePortalSelector } from "@/redux/hooks";
import { useKeycloak } from "@react-keycloak/ssr";
import { GetContext } from "@/contexts/get";
import { getMyProject } from "@/redux/myProject/myProject";

const New = () => {
  const { keycloak, initialized } = useKeycloak();
  const { menu } = usePortalSelector(({ menu }) => menu);
  const userInfo = usePortalSelector((state) => state.user.userInfo);
  const dispatch = usePortalDispatch();
  const { addCurentPageData } = useContext(GetContext);
  const [show, setShow] = useState(false);

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
                {/* /.boardSearch */}
                <>
                  <Card className="searchcard" style={{ marginBottom: "10px" }}>
                    <Card.Body>
                      <>
                        <Form.Label id="labelsearch">
                          <BsSearch className="" /> 검색
                        </Form.Label>

                        <Form>
                          <Row className="mb-3" id="searchrow">
                            <Form.Group as={Col} controlId="formGridEmail">
                              <Form.Label>상태</Form.Label>
                              <Form.Select
                                className="selectbox"
                                id="state"
                                placeholder="검색어를 입력해주세요"
                              >
                                <option>(ALL)</option>
                                <option value="001">계획</option>
                                <option value="003">종료</option>
                                <option value="004">사전</option>
                                <option value="005">실행</option>
                                <option value="009">예외</option>
                              </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                              <Form.Label>상세 조회</Form.Label>
                              <Form.Select id="selectbox">
                                <option value="">(ALL)</option>
                                <option value="001">프로젝트No.</option>
                                <option value="002">프로젝트명</option>
                                <option value="006">관리자명</option>
                              </Form.Select>
                            </Form.Group>
                          </Row>
                        </Form>

                        <InputGroup className="mb-3" id="inputsearch">
                          <FormControl
                            aria-label="Example text with button addon"
                            aria-describedby="basic-addon1"
                            placeholder="검색어를 입력해주세요"
                          />
                          <Button
                            style={{
                              backgroundColor: "#679ce6",
                              color: "white",
                            }}
                            variant="outline-secondary"
                            id="searchcontents"
                            className="searchcontents"
                          >
                            <BsSearch />
                          </Button>
                        </InputGroup>
                        <InputGroup id="recent_prj" className="mb-3">
                          <Form.Group
                            className="mb-3"
                            controlId="formGroupPassword"
                            id="lastproject"
                          >
                            <Form.Label>
                              <img id="blue" src="/image/bullet_blue.png" />
                              &nbsp;마지막 접속 프로젝트 :
                            </Form.Label>
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            id="searchrowname"
                            controlId="formGroupPassword"
                          >
                            <Form.Label
                              style={{
                                marginRight: "20px",
                              }}
                              className="contentsLabel"
                            >
                              {" "}
                              &nbsp;22년-통합품질관리(PiMS)-운영
                            </Form.Label>
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="formGroupPassword"
                          >
                            <Form.Label>
                              <img id="blue" src="/image/bullet_blue.png" />
                              &nbsp;마지막 접속 서비스 :
                            </Form.Label>
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="formGroupPassword"
                          >
                            <Form.Label className="contentsLabel">
                              &nbsp;ITS
                            </Form.Label>
                          </Form.Group>
                        </InputGroup>
                      </>
                    </Card.Body>
                  </Card>
                </>

                <div className="boardInfo">
                  <ul className="float-l">
                    <li>
                      <i className="icon-table" /> 프로젝트{" "}
                      <span id="total_cnt">34</span>건
                    </li>
                  </ul>
                  <ul className="float-r">
                    <li id="btnyear">
                      <select id="year" name="year">
                        <option value="ALL">(ALL)</option>
                        <option value={2022}>2022년</option>
                        <option value={2021}>2021년</option>
                        <option value={2020}>2020년</option>
                      </select>
                    </li>

                    <li id="btnyear2">
                      <Button id="btnExcelDownload" variant="light">
                        엑셀 다운로드
                      </Button>{" "}
                    </li>
                    <li>
                      <Dropdown>
                        <Dropdown.Toggle id="btnExcelDownload">
                          부가기능
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            <BsFileEarmarkExcel /> 엑셀 업로드
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            <BsFileEarmarkExcel /> 엑셀 다운로드
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            <BsFillPersonPlusFill /> 사용자 가져오기
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            <BsPencilSquare />
                            &nbsp;등록
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>
                    <li>
                      <select id="paging" name="paging">
                        <option value={10}>10개</option>
                        <option value={25}>25개</option>
                        <option value={50}>50개</option>
                        <option value={75}>75개</option>
                        <option value={100}>100개</option>
                        <option value={500}>500개</option>
                        <option value={1000}>1000개</option>
                      </select>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="card">
                    <DataTable
                      // value={products}
                      responsiveLayout="scroll"
                      // loading={fetchProjectLoading}
                    >
                      <Column field="new_order" header="번호" sortable></Column>
                      <Column
                        field="project_name"
                        header="프로젝트명"
                        sortable
                      ></Column>
                      <Column
                        field="start_dt"
                        header="시작일"
                        sortable
                      ></Column>
                      <Column field="end_dt" header="종료일" sortable></Column>
                      <Column field="psc" header="상태" sortable></Column>
                      <Column
                        field="project_manager"
                        header="관리자"
                        sortable
                      ></Column>
                      <Column
                        field="sol_its"
                        header="ITS"
                        // body={serviceBodyTemplate}
                        sortable
                      ></Column>
                      <Column
                        field="sol_pms"
                        header="PMS"
                        // body={serviceBodyTemplate}
                        sortable
                      ></Column>
                      <Column
                        field="sol_tms"
                        header="TMS"
                        // body={serviceBodyTemplate}
                        sortable
                      ></Column>
                      <Column
                        field="sol_agile"
                        header="AGILE"
                        // body={serviceBodyTemplate}
                        sortable
                      ></Column>
                      <Column
                        field="sol_qms"
                        header="QMS"
                        // body={serviceBodyTemplate}
                        sortable
                      ></Column>
                      <Column
                        field="sol_rpa"
                        header="RPA"
                        // body={serviceBodyTemplate}
                        sortable
                      ></Column>
                    </DataTable>
                  </div>
                </div>

                {/* 주의사항 */}
                <div
                  id="str1"
                  className="rules"
                  style={{ visiblity: "none" }}
                ></div>
                <Card className="cardhelp">
                  <Card.Body>
                    <Card.Title>
                      <Badge id="badgehelp">
                        <BsFillQuestionCircleFill className="BsFillQuestionCircleFill" />
                        &nbsp;도움말
                      </Badge>{" "}
                      <br />
                    </Card.Title>
                    <Card.Text>
                      <img src="/image/sol.png" />
                      활성화된 서비스 : 아이콘 클릭 시 해당 서비스 페이지로
                      이동합니다.
                    </Card.Text>
                    <Card.Text>
                      <img src="/image/dis_sol.png" />
                      비활성화된 서비스 : 활성화 필요 시 관리자에게 문의
                      해주시기 바랍니다.
                    </Card.Text>
                  </Card.Body>
                </Card>
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

export default New;
