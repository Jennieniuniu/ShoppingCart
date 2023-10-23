import React from 'react'


function Sider() {
  return (
    <div class="w-44 h-80 mx-10 my-20 px-14  rounded-xl ring-2 ring-offset-2 bg-blue-200 float-left">
        <ul class="py-10">
         <li>
           <h1 class='font-bold'>旅游好物</h1>
         </li>
         <li>
           <a href="https://www.ctrip.com/">洗护物品</a>
         </li>
         <li>
           <a href="https://www.ctrip.com/">防晒物品</a>
         </li>
         <li>
            <a href="https://www.ctrip.com/">便携小物</a>
          </li>
        </ul>
          <ul class="py-10">
          <li>
            <h1 class='font-bold'>其他</h1>
         </li>
          <li>
            <a href="https://www.ctrip.com/">旅游指南</a>
          </li>
          <li>
            <a href="https://www.ctrip.com/">出行预订</a>
          </li>
              </ul>
    </div>
  )
}

export default Sider
