
import './App.css';
import './Css/Header_nav.css'
import './Css/sub_layout.css'
import './Css/navbar.css'
import './Css/sub_pages.css'
import './Css/sub_responsive.css'
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';



import './fonts/font.css';



import PortalContentsMenu from './Screen/PortalContentsMenu';
import PortalSubmenu from './Screen/PortalSubmenu';
import PortalContentsHelp from './Screen/PortalContentsHelp';
import PortalContentsFooter from './Screen/PortalContentsFooter';
import PortalContentsTbl from './Screen/PortalContentsTbl';
import PortalContentsSearch from './Screen/PortalContentsSearch';
import PortalNav from './Screen/PortalNav';
import PortalHeaderTop from './Screen/PortalHeaderTop';

//전체 구조 css 연결 
const Wrap = styled.div`
  margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    line-height: 1em;
    /* font-family: "Noto Sans KR" ,sans-serif; */
`

const Header = styled.div`
    width: 100%;
    min-width: 1200px;
    max-width: 1600px;
    height: 75px;
`

const Contents = styled.div`
    width: 100%;
    min-height: calc(100vh - 179px);
    margin: -100px 0 0 0;
    position: relative;
    overflow: hidden;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    line-height: 1em;
    /* font-family: "Noto Sans KR" ,sans-serif; */
`

const Con_div = styled.div`
    width: 100%;
    min-width: 1200px;
    /* max-width: 1600px; */
    padding-right: 10px;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    line-height: 1em;
`

const Subcon_body = styled.div`
    padding: 20px 10px 20px 237px;
    position: relative;
`




function App() {
  return (
    <>
    <PortalNav/>
    <PortalHeaderTop/>
    <Wrap>
    <Contents>
    <PortalSubmenu/>
    <Subcon_body>
    <PortalContentsMenu/>
    <PortalContentsSearch/>
    <PortalContentsTbl/>
    <PortalContentsHelp/>
    </Subcon_body>
    </Contents>
    </Wrap>
    <PortalContentsFooter/>
    </>
  );
}

export default App;
