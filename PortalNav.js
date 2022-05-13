import React from 'react'
import { BsFillPersonFill } from "react-icons/bs";
// import { Navbar,Container,Nav } from 'react-bootstrap'

const PortalNav = () => {
  return (





	
      <div>
    <div className="top_nav_area">
	<div className="hd_top">
		<div className="hd_top_sub">
			<div className="top_left_area">
				<div className="service-name1">
					<div>
						서비스명 : <span id="top_svc_name" className="blue">PiMS</span>
					</div>
				</div>
				<ul className="tap-family">
				</ul>
			</div>


			<div class="userinfo_txt">
				<ul>
					<li class="top_modal" id="modal_userinfo_open_btn">
						<div>
							<i class="icon-user"></i> <i class="icon-asterisk" ></i> <span id="top_login_name"><BsFillPersonFill/>pms</span>님 안녕하세요
						</div>
						<button class="btn_userinfo" alt="사용자정보"></button>
					</li>
					<li><button class="btn-gray2 small" id="btnLogout">Logout</button></li>
				</ul>
			</div>


			{/* <div className="userinfo_txt">
        
				<ul>
					<li className="top_modal" id="modal_userinfo_open_btn">
						<div>
							{/* <i className="icon-user"></i> <span id="top_login_name">로그인을 해주세요</span> */}
							{/* <i className="icon-user"></i> <span id="top_login_name">000님 안녕하세요</span>
						</div>
					</li> */}
          {/* <Button variant="light">Light</Button>{' '} */}
					{/* <li><button className="btn-gray2 small" id="btnLogout">Logout</button>  */}
                    {/* <button class="btn-gray2 small" id="btnLogin">Login</button> */}
                    {/* </li>
				</ul>
			</div> */} 
		</div>
	</div>
</div>
<div className="topbar"></div>

{/* <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    
      <Nav className="me-auto">
        
      </Nav>
  </Container>
</Navbar> */}

</div>


  )
}

export default PortalNav