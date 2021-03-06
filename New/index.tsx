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
                    ???????????? :{" "}
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
                      <span id="top_login_name">?????????</span>??? ???????????????
                    </div>
                    <button className="btn_userinfo" alt="???????????????" />
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
                        My ????????????
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        ???????????? ??????
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">????????????</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </a>
                <li>
                  <a href="/html/pj">My????????????</a>{" "}
                  <img src="/image/pt/point.png" />{" "}
                </li>
                <li>
                  <a href="/html/pt">???????????????</a>{" "}
                  <img src="/image/pt/point.png" />{" "}
                </li>
                <li>
                  <a href="/html/sys/portal">??????????????????</a>{" "}
                  <img src="/image/pt/point.png" />{" "}
                </li>
                <li>
                  <a href="/html/sys/system">???????????????</a>{" "}
                  <img src="/image/pt/point.png" />{" "}
                </li>
                <li>
                  <a href="/html/sys/legacy">????????????</a>{" "}
                  <img src="/image/pt/point.png" />{" "}
                </li>
                <li>
                  <a href="/html/sys/service">???????????????</a>{" "}
                  <img src="/image/pt/point.png" />{" "}
                </li>
                <li>
                  <a href="/html/api">API?????????</a>{" "}
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
                    My????????????
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
                  <a href="/html/pj/projectlist.html">My????????????</a>
                </li>
                <li className="menu_out">
                  <a href="/html/pj/userteammgr.html">??????????????????</a>
                </li>
                <li className="menu_out">
                  <a href="/html/pj/alarmmgr.html">????????????</a>
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
                  <a href="/html/pj">My????????????</a>{" "}
                  <i className="icon-angle-right" />{" "}
                  <a href="/html/pj/projectlist.html">My????????????</a>
                </li>
                <li className="subcon_body_title" id="menu_title">
                  My????????????
                </li>
                <li className="subcon_body_title_sub" id="menu_title_desc">
                  PiMS Portal ???????????? My???????????? ??????????????????.
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
                    &nbsp; ?????? ?????? ??????
                  </button>
                  <button
                    className="btn-wg"
                    onclick="openGuidePopUp_sys(); return false;"
                  >
                    <i className="icon-sitemap" /> ?????????
                  </button>
                  <button
                    className="btn-wg"
                    onclick="openGuidePopUp(); return false;"
                  >
                    <i className="icon-map-marker" /> Process
                  </button>
                </div>
                {/* ?????? ?????? ?????? ????????? */}
                <div
                  id="accessMenuLog"
                  className="modal_recent"
                  style={{ display: "none" }}
                >
                  <div className="modal_recent_content">
                    <div className="list">
                      <h3>
                        <i className="icon-time" /> ?????? ?????? ??????
                      </h3>{" "}
                      <div className="recent_header">
                        <ul>
                          <li>????????????</li>{" "}
                          <li>
                            <span className="deco_bar left" />
                            ?????? ??????
                            <span className="deco_bar right" />
                          </li>{" "}
                          <li>?????????</li>
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
                        <i className="icon-list-ol" /> ??? ?????? ??????
                      </h3>{" "}
                      <div className="recent_header">
                        <ul>
                          <li>????????????</li>{" "}
                          <li>
                            <span className="deco_bar left" />
                            ?????? ??????
                            <span className="deco_bar right" />
                          </li>{" "}
                          <li>?????? ??????</li>
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
                    title="???????????? ?????? ????????????."
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
                          <BsSearch className="" /> ??????
                        </Form.Label>

                        <Form>
                          <Row className="mb-3" id="searchrow">
                            <Form.Group as={Col} controlId="formGridEmail">
                              <Form.Label>??????</Form.Label>
                              <Form.Select
                                className="selectbox"
                                id="state"
                                placeholder="???????????? ??????????????????"
                              >
                                <option>(ALL)</option>
                                <option value="001">??????</option>
                                <option value="003">??????</option>
                                <option value="004">??????</option>
                                <option value="005">??????</option>
                                <option value="009">??????</option>
                              </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                              <Form.Label>?????? ??????</Form.Label>
                              <Form.Select id="selectbox">
                                <option value="">(ALL)</option>
                                <option value="001">????????????No.</option>
                                <option value="002">???????????????</option>
                                <option value="006">????????????</option>
                              </Form.Select>
                            </Form.Group>
                          </Row>
                        </Form>

                        <InputGroup className="mb-3" id="inputsearch">
                          <FormControl
                            aria-label="Example text with button addon"
                            aria-describedby="basic-addon1"
                            placeholder="???????????? ??????????????????"
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
                              &nbsp;????????? ?????? ???????????? :
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
                              &nbsp;22???-??????????????????(PiMS)-??????
                            </Form.Label>
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="formGroupPassword"
                          >
                            <Form.Label>
                              <img id="blue" src="/image/bullet_blue.png" />
                              &nbsp;????????? ?????? ????????? :
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
                      <i className="icon-table" /> ????????????{" "}
                      <span id="total_cnt">34</span>???
                    </li>
                  </ul>
                  <ul className="float-r">
                    <li id="btnyear">
                      <select id="year" name="year">
                        <option value="ALL">(ALL)</option>
                        <option value={2022}>2022???</option>
                        <option value={2021}>2021???</option>
                        <option value={2020}>2020???</option>
                      </select>
                    </li>

                    <li id="btnyear2">
                      <Button id="btnExcelDownload" variant="light">
                        ?????? ????????????
                      </Button>{" "}
                    </li>
                    <li>
                      <Dropdown>
                        <Dropdown.Toggle id="btnExcelDownload">
                          ????????????
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            <BsFileEarmarkExcel /> ?????? ?????????
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            <BsFileEarmarkExcel /> ?????? ????????????
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            <BsFillPersonPlusFill /> ????????? ????????????
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            <BsPencilSquare />
                            &nbsp;??????
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>
                    <li>
                      <select id="paging" name="paging">
                        <option value={10}>10???</option>
                        <option value={25}>25???</option>
                        <option value={50}>50???</option>
                        <option value={75}>75???</option>
                        <option value={100}>100???</option>
                        <option value={500}>500???</option>
                        <option value={1000}>1000???</option>
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
                      <Column field="new_order" header="??????" sortable></Column>
                      <Column
                        field="project_name"
                        header="???????????????"
                        sortable
                      ></Column>
                      <Column
                        field="start_dt"
                        header="?????????"
                        sortable
                      ></Column>
                      <Column field="end_dt" header="?????????" sortable></Column>
                      <Column field="psc" header="??????" sortable></Column>
                      <Column
                        field="project_manager"
                        header="?????????"
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

                {/* ???????????? */}
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
                        &nbsp;?????????
                      </Badge>{" "}
                      <br />
                    </Card.Title>
                    <Card.Text>
                      <img src="/image/sol.png" />
                      ???????????? ????????? : ????????? ?????? ??? ?????? ????????? ????????????
                      ???????????????.
                    </Card.Text>
                    <Card.Text>
                      <img src="/image/dis_sol.png" />
                      ??????????????? ????????? : ????????? ?????? ??? ??????????????? ??????
                      ???????????? ????????????.
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
                    ????????? ????????? ????????? ???????????? 343??????9 ?????????????????????
                    SK???????????? C&amp;C
                  </li>
                  <li id="tel_info">
                    ???????????? : 02-6400-2495???|???FAX : 02-6400-1111???|???E-mail :
                    nexcorepms@skcc.com
                  </li>
                  <li id="copyright">
                    Copyright??? 2020 SK???????????? C&amp;C LTD ALL RIGHTS RESERVED
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
