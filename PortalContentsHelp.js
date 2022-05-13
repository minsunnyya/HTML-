import React from 'react'
import { BsExclamationCircleFill} from "react-icons/bs";

const PortalContentsHelp = () => {
  return (
    <div id="str1" class="rules">
									<h4>
										<i class="icon-exclamation-sign icon-large"/>
										<BsExclamationCircleFill/>
										도움말
									</h4>
									<ul>
										<li>
											<img src="/image/sol.png"/>
											활성화된 서비스 : 아이콘 클릭 시 해당 서비스 페이지로 이동합니다.
										</li>
										<li>
											<img src="/image/dis_sol.png"/>
											비활성화된 서비스 : 활성화 필요 시 관리자에게 문의 해주시기 바랍니다.
										</li>
									</ul>
								</div>
  )
}

export default PortalContentsHelp