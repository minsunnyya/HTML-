import React from 'react'
import { Table } from 'react-bootstrap'

const PortalContentsTbl = () => {
  return (
<>

<div class="boardInfo">
            <ul class="float-l">
                <li>
                    <i class="icon-table"/>프로젝트
                    <span id="total_cnt">0</span>
                    건
                </li>
            </ul>
            <ul class="float-r">
                <li id="btnyear">{/*
                    <select id="year" name="year" style="height:28px; width:70px"/>*/}
                    <select id="year" name="year"/>
                </li>
                <li id="btnyear2">
                    <div id="btnExcelDownload" class="btn-dark float-r">엑셀 다운로드</div>
                </li>
                <li>{/*
                    <select id="paging" name="paging" style="height:28px; width:70px">*/}
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
            {/*
            <div id="grdpms01" style="min-height: 350px;"/>*/}
            <div id="grdpms01"/>
            <div id="pgr01" class="paging"/>
            {/*
            <div id="grdpms02" style="display: none;"/>*/}
            <div id="grdpms02"/>
       

<>
    {/* <Table striped bordered hover size="sm">
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td colSpan={2}>Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </Table> */}
  </>
  </>
  )
}

export default PortalContentsTbl