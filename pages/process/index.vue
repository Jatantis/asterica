<template>
<!--ALL BOX-->
  <div class="page_box" v-bind:class="{ 'section-5_brif_act': isBrifActive }">

<!--BRIEF-->
    <Brief v-if="isBrifActive"/>
<!--BRIEF END-->
<!--FIRST SECTION-->
    <div class="page_slide_box page_start_slide_box">
      <!--TITLE-->
      <div class="page_slide_box_group">
          <h1 ref="title" class="page_slide_box_title cst_page_title">
            {{ pageTitle }}
          </h1>
          <p class="page_slide_box_desc">
              <span class="text_bg_cst" ref="textBg"></span>
              <span ref="desc" class="text-with-bg__content">
                {{ pageDescription }}
              </span>
              <br/>
              <br/>
              <span class="text_bg_cst2" ref="textBg2"></span>
              <span ref="desc2" class="text-with-bg__content">
                {{ pageDescriptionSecond }}
              </span>
          </p>
      </div>
      <!--SLIDER-->
      <div class="page_slide_box_group">
       <div class="page_slide_box_slider" ref="slider">
         <!--SLIDER CONTENT-->
         <transition-group
              style="display: none; justify-content: center; align-items: center; position: relative; min-height: 8em;"
              mode="out-in"
              v-on:enter="enterManager"
              v-on:leave="leaveManager">
            <img v-for="(processImage, i) in processImages" :key="i" class="page_slide_box_slider_image" v-show="manager==i" :src="processImage.url" />
          </transition-group>
          <span style="display: none;" ref="bg" key="bg" class="transition_slider_background"></span>
          <!--SLIDER CONTROLS-->
          <div ref="controls" class="slide_box_control">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="asterica_link cst_arrow_btn_left" width="34" height="16" viewBox="0 0 34 16" fill="none" v-on:click="manager==0?manager:sliderBtnAct('left')">
                  <rect width="34" height="16" fill="url(#pattern0)"/>
                  <defs>
                  <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink:href="#image0" transform="scale(0.0294118 0.0625)"/>
                  </pattern>
                  <image id="image0" width="34" height="16" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAQCAYAAABz9a1kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYxNkMzOUE3MkY2NzExRTlBODY0RTM4OTA4NTVGRjVDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYxNkMzOUE4MkY2NzExRTlBODY0RTM4OTA4NTVGRjVDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjE2QzM5QTUyRjY3MTFFOUE4NjRFMzg5MDg1NUZGNUMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjE2QzM5QTYyRjY3MTFFOUE4NjRFMzg5MDg1NUZGNUMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4wSS07AAAAjklEQVR42mJgwAL+//9vB8QfgNidYaAA0HInIP4GxEeAmHegHbEPiLkGyhF+QPxjMDjiFxBvAmLOgXADI9DiYCC9HIhvAnEyEP8aAHd8ADnkG5DByTCw4DvIIaFAxtKBDhFsaYRrQMMG6pifA5prBlU5gsUxJ4GYb6AdQ/e6BpRrGAYDYGIYJGDQOAQgwADKHJrnErT03AAAAABJRU5ErkJggg=="/>
                  </defs>
              </svg>
               <span class="slide_box_controls_number">
                 <span class="slide_controls_big" v-for="(processImage, i) in processImages" v-show="manager==i">0{{ i+1 }}</span>
                 <span class="slide_controls_small">/04</span>
               </span>
               <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="34" height="16" viewBox="0 0 34 16" fill="none" class="asterica_link cst_arrow_btn_right" v-on:click="manager==3?manager:sliderBtnAct('right')">
                  <rect width="34" height="16" transform="matrix(-1 0 0 1 34 0)" fill="url(#pattern0)"/>
                  <defs>
                  <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink:href="#image0" transform="scale(0.0294118 0.0625)"/>
                  </pattern>
                  <image id="image0" width="34" height="16" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAQCAYAAABz9a1kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYxNkMzOUE3MkY2NzExRTlBODY0RTM4OTA4NTVGRjVDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYxNkMzOUE4MkY2NzExRTlBODY0RTM4OTA4NTVGRjVDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjE2QzM5QTUyRjY3MTFFOUE4NjRFMzg5MDg1NUZGNUMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjE2QzM5QTYyRjY3MTFFOUE4NjRFMzg5MDg1NUZGNUMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4wSS07AAAAjklEQVR42mJgwAL+//9vB8QfgNidYaAA0HInIP4GxEeAmHegHbEPiLkGyhF+QPxjMDjiFxBvAmLOgXADI9DiYCC9HIhvAnEyEP8aAHd8ADnkG5DByTCw4DvIIaFAxtKBDhFsaYRrQMMG6pifA5prBlU5gsUxJ4GYb6AdQ/e6BpRrGAYDYGIYJGDQOAQgwADKHJrnErT03AAAAABJRU5ErkJggg=="/>
                  </defs>
                </svg>

         </div>
       </div>
       </div>
       <!--VIDEO-->
      <video class="section__video js-parallax-element process_video_bg" muted loop playsinline>
           <source src="@/assets/video/process_1920.mp4" type='video/mp4'>
      </video>
    </div>
<!--FIRST SECTION END-->
<!--SECOND SECTION-->
    <div class="page_slide_box page_ad_slide_box" ref="second_sec">
      <!--TITLE-->
      <h2 ref="secondTitle" class="page_slide_box_title cst_page_title">
        {{ secondTitle }}
      </h2>
      <!--DESC-->
      <p ref="secondDesc" class="page_slide_box_desc page_slide_box_desc_second">
        {{ secondDescription }}
      </p>
      <!--TABS-->
      <div ref="tabs" class="page_slide_box_tab">
         <!--TAB LINK-->
         <span class="page_box_tab_link" v-on:click="changeTab(1)" v-bind:class="{ 'page_box_tab_link_act': activeTab == 1 }">
            {{ tabFirst.title }}
         </span>
         <span class="page_box_tab_link page_box_tab_link_other" v-on:click="changeTab(2)" v-bind:class="{ 'page_box_tab_link_act': activeTab == 2 }">
            {{ tabSecond.title }}
         </span>
         <span class="tab_underline_animation" v-bind:class="{ 'tab_underline_animation_first': activeTab == 1 }"></span>
         <!--FIRST TAB-->
         <div class="page_slide_box_tab_first">
           <div class="page_tab_hidden_content" v-show="activeTab == 1">
               <p ref="tabContent" class="page_tab_desc">
                 {{ tabFirst.text }}
               </p>
               <h4 class="cst_tab_title" ref="tabTitle">{{ tabFirst.subTitle }}</h4>
               <p ref="tabContent2" class="page_tab_desc page_tab_another_desc">{{ tabFirst.subDesc }}</p>
               <div class="page_tab_ad_group">
                  <div ref="firsTab" class="page_tab_item">
                    <span>{{ tabFirst.listFirst.title }}</span>
                    <ul>
                        <li v-for="item in tabFirst.listFirst.item">{{ item.text }}</li>
                    </ul>
                  </div>
                  <div ref="secondTab" class="page_tab_item">
                    <span>{{ tabFirst.listSecond.title }}</span>
                    <ul>
                        <li v-for="item in tabFirst.listSecond.item">{{ item.text }}</li>
                    </ul>
                  </div>
               </div>
           </div>
         </div>
         <!--SECOND TAB-->
         <div class="page_slide_box_tab_first">
          <div class="page_tab_hidden_content" style="display: none"  v-show="activeTab == 2">
              <p class="page_tab_desc">
                {{ tabSecond.text }}
              </p>
              <h4 class="cst_tab_title" >{{ tabSecond.subTitle }}</h4>
              <p class="page_tab_desc page_tab_another_desc">{{ tabSecond.subDesc }}</p>
              <div class="page_tab_ad_group">
                 <div class="page_tab_item">
                   <span>{{ tabSecond.listFirst.title }}</span>
                   <ul>
                       <li v-for="item in tabSecond.listFirst.item">{{ item.text }}</li>
                   </ul>
                 </div>
                 <div class="page_tab_item">
                   <span>{{ tabSecond.listSecond.title }}</span>
                   <ul>
                       <li v-for="item in tabSecond.listSecond.item">{{ item.text }}</li>
                   </ul>
                 </div>
              </div>
          </div></div>
      </div>
    </div>
<!--SECOND SECTION END-->
<!--THIRD SECTION-->
    <div class="page_slide_box page_slide_box_engine">
       <!--FW CONTENT-->
       <div class="page_slide_box_fw" ref="slideBoxFw">
         <div class="page_slide_box_fw_item" v-for="item in fwContent">
            <span class="fw_item_number" ref="slideBoxFwItem">{{ item.number }}</span>
            <span class="fw_item_text" ref="slideBoxFwText">{{ item.text }}</span>
         </div>
       </div>
       <!--TEXT BOX-->
       <div class="page_slide_box_fw_content">
           <h2 ref="thirdTitle" class="page_slide_box_title">
             {{ techBox.title }}
           </h2>
           <p ref="thirdDesc" class="page_slide_box_desc">
             {{ techBox.subTitle }}
           </p>
           <h4 class="cst_third_item" ref="cstItems">{{ techBox.techTitle }}</h4>
           <span class="cst_third_item" ref="cstItems2">{{ techBox.techItem }}</span>
           <span class="cst_third_item" ref="cstItems3">{{ techBox.techItemSecond }}</span>

           <div class="fw_img_box">
             <img v-for="(techImage,i) in techBox.techImages" ref="photoItem" :src="techImage.url" />
           </div>
       </div>
    </div>
<!--THIRD SECTION-->
<!--FOURTH SECTION-->
    <div class="page_slide_box page_slide_algorithm">
      <!--FOURTH SECTION TITLE-->
      <h2 ref="fourTitle" class="page_slide_box_title">
        {{ alghorithmBox.title }}
      </h2>
      <p ref="fourDesc" class="page_slide_box_desc">
        {{ alghorithmBox.desc }}
      </p>
     <!--FOURTH SECTION TAB-->
     <div class="alghoritm_second_group">
         <!--TAB LINK-->
         <span class="page_box_tab_link" v-on:click="changeTabSecond(1)" v-bind:class="{ 'page_box_tab_link_act': activeTab == 1 }">
            {{ tabFirst.title }}
         </span>
         <span class="page_box_tab_link page_box_tab_link_other" v-on:click="changeTabSecond(2)" v-bind:class="{ 'page_box_tab_link_act': activeTab == 2 }">
            {{ tabSecond.title }}
         </span>
         <span class="tab_underline_animation" v-bind:class="{ 'tab_underline_animation_first': activeTab == 1 }"></span>
      <!--TAB FIRST-->
         <div ref="tabs2" class="page_slide_box_tab_first">
            <div class="page_tab_hidden_content" v-show="activeTab == 1">
              <div class="other_tab_ctx">
                {{ alghorithmBox.tabSecond.title }}
                <br/>
                {{ alghorithmBox.tabSecond.desc }}
                <br/>
                {{ alghorithmBox.tabSecond.text }}
              </div>
              <div class="chart_group">
                <!--CHART-->
                 <div class="other_tab_chart other_tab_chart_scrum">
                     <div v-for="chartDown in chartsDown" class="other_tab_chart_frame" v-bind:class="{ 'playChart': playChart == true }">
                        <svg xmlns="http://www.w3.org/2000/svg" width="302" height="58" viewBox="0 0 302 58" fill="none">
                            <rect x="0.5" y="0.5" width="301" height="57" stroke="white"/>
                        </svg>
                        <span class="tab_chart_text">{{ chartDown.text }}</span>
                     </div>
                     <div v-bind:class="{ 'playChart': playChart == true }" class="chart-arrow-lines">
                        <svg xmlns="http://www.w3.org/2000/svg" width="318" height="491" viewBox="0 0 318 491" fill="none">
                            <line x1="31" y1="101.5" x2="101" y2="101.5" stroke="white"/>
                            <path d="M108 102L100.5 106.33L100.5 97.6699L108 102Z" fill="white"/>
                            <line x1="31" y1="4.5" x2="51" y2="4.5" stroke="white"/>
                            <path d="M58 5L50.5 9.33013L50.5 0.669872L58 5Z" fill="white"/>
                            <line x1="31" y1="197.5" x2="151" y2="197.5" stroke="white"/>
                            <path d="M158 198L150.5 202.33L150.5 193.67L158 198Z" fill="white"/>
                            <line x1="31" y1="389.5" x2="261" y2="389.5" stroke="white"/>
                            <path d="M268 390L260.5 394.33L260.5 385.67L268 390Z" fill="white"/>
                            <line x1="31" y1="485.5" x2="311" y2="485.5" stroke="white"/>
                            <path d="M318 486L310.5 490.33L310.5 481.67L318 486Z" fill="white"/>
                            <line x1="31" y1="293.5" x2="201" y2="293.5" stroke="white"/>
                            <path d="M208 294L200.5 298.33L200.5 289.67L208 294Z" fill="white"/>
                            <line x1="31.5" y1="5" x2="31.5" y2="102" stroke="white"/>
                            <line x1="31.5" y1="197" x2="31.5" y2="294" stroke="white"/>
                            <line x1="31.5" y1="389" x2="31.5" y2="486" stroke="white"/>
                            <line x1="1" y1="437.5" x2="31" y2="437.5" stroke="white"/>
                            <line x1="0.5" y1="438" x2="0.499983" y2="53" stroke="white"/>
                            <line x1="1" y1="245.5" x2="31" y2="245.5" stroke="white"/>
                            <line x1="1" y1="53.5" x2="31" y2="53.5" stroke="white"/>
                        </svg>
                     </div>
                 </div>
                <!--CHART RIGHT TEXT-->
                 <div ref="rightText" class="other_tab_text">
                     <div class="page_tab_item">
                          <span>{{ alghorithmBox.tabSecond.subTitle }}</span>
                          <ul>
                              <li v-for="chartDownTextItem in chartDownTextItems">{{ chartDownTextItem.text }}</li>
                          </ul>
                       </div>
                  </div>
              </div>
            </div>
         </div>
     <!--TAB SECOND-->
          <div class="page_slide_box_tab_first">
             <div class="page_tab_hidden_content" v-show="activeTab == 2">
                <div class="other_tab_ctx">
                  {{ alghorithmBox.tabSecond.title }}
                  <br/>
                  {{ alghorithmBox.tabSecond.desc }}
                  <br/>
                  {{ alghorithmBox.tabSecond.text }}
                </div>
                <div class="chart_group">
                  <!--CHART-->
                   <div class="other_tab_chart">
                       <div v-for="chartDown in chartsDown" class="other_tab_chart_frame" v-bind:class="{ 'playChart': playChart == true }">
                         <svg xmlns="http://www.w3.org/2000/svg" width="302" height="131" viewBox="0 0 302 131" fill="none">
                             <path d="M301.5 0.5H0.5V57.5H301.5V0.5Z" stroke="white"/>
                             <path d="M0.500003 58L0.5 126" stroke="white"/>
                             <path d="M0 125.5H20" stroke="white"/>
                             <path d="M27 126L19.5 130.33V121.67L27 126Z" fill="white"/>
                          </svg>
                          <span class="tab_chart_text">{{ chartDown.text }}</span>
                       </div>
                   </div>
                  <!--CHART RIGHT TEXT-->
                   <div class="other_tab_text">
                       <div class="page_tab_item">
                            <span>{{ alghorithmBox.tabSecond.subTitle }}</span>
                            <ul>
                                <li v-for="chartDownTextItem in chartDownTextItems">{{ chartDownTextItem.text }}</li>
                            </ul>
                         </div>
                    </div>
                </div>
             </div>
          </div>
       </div>
    </div>
<!--FOURTH SECTION END-->
<!--CONTACT SECTION-->
    <div class="page_slide_box page_slide_contacts">
      <!--CONTACT SECTION TITLE-->
      <h2 class="page_slide_box_title">
        {{ contactBox.title }}
      </h2>
      <p class="page_slide_box_desc">
        {{ contactBox.desc }}
      </p>
      <!--CONTACT SECTION CONTENT-->
     <div class="contacts_box_group">
        <!--CONTACT SECTION SLIDER-->
        <div class="page_slide_box_slider">
            <transition-group
                 style="display: flex; justify-content: center; align-items: center;"
                 mode="out-in"
                 :enter="enterManager"
                 :leave="leaveManager" appear>
               <img class="page_slide_box_slider_image" v-show="manager==0" key="first" src="/img/manager.png" />
               <img class="page_slide_box_slider_image" v-show="manager==1" key="second" src="/img/manager.png" />
               <img class="page_slide_box_slider_image" v-show="manager==2" key="third" src="/img/manager.png" />
             </transition-group>
            <!--SLIDER CONTROLS-->
            <div class="slide_box_control">
                 <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="asterica_link" width="34" height="16" viewBox="0 0 34 16" fill="none" v-on:click="manager==0?manager:manager--">
                     <rect width="34" height="16" fill="url(#pattern0)"/>
                     <defs>
                     <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                     <use xlink:href="#image0" transform="scale(0.0294118 0.0625)"/>
                     </pattern>
                     <image id="image0" width="34" height="16" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAQCAYAAABz9a1kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYxNkMzOUE3MkY2NzExRTlBODY0RTM4OTA4NTVGRjVDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYxNkMzOUE4MkY2NzExRTlBODY0RTM4OTA4NTVGRjVDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjE2QzM5QTUyRjY3MTFFOUE4NjRFMzg5MDg1NUZGNUMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjE2QzM5QTYyRjY3MTFFOUE4NjRFMzg5MDg1NUZGNUMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4wSS07AAAAjklEQVR42mJgwAL+//9vB8QfgNidYaAA0HInIP4GxEeAmHegHbEPiLkGyhF+QPxjMDjiFxBvAmLOgXADI9DiYCC9HIhvAnEyEP8aAHd8ADnkG5DByTCw4DvIIaFAxtKBDhFsaYRrQMMG6pifA5prBlU5gsUxJ4GYb6AdQ/e6BpRrGAYDYGIYJGDQOAQgwADKHJrnErT03AAAAABJRU5ErkJggg=="/>
                     </defs>
                 </svg>
                  <span class="slide_box_controls_number">
                    <span class="slide_controls_big" v-show="manager==0" >01</span>
                    <span class="slide_controls_big" v-show="manager==1" >02</span>
                    <span class="slide_controls_big" v-show="manager==2" >03</span>
                    <span class="slide_controls_small">/03</span>
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="34" height="16" viewBox="0 0 34 16" fill="none" class="asterica_link" v-on:click="manager==2?manager:manager++">
                     <rect width="34" height="16" transform="matrix(-1 0 0 1 34 0)" fill="url(#pattern0)"/>
                     <defs>
                     <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                     <use xlink:href="#image0" transform="scale(0.0294118 0.0625)"/>
                     </pattern>
                     <image id="image0" width="34" height="16" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAQCAYAAABz9a1kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYxNkMzOUE3MkY2NzExRTlBODY0RTM4OTA4NTVGRjVDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYxNkMzOUE4MkY2NzExRTlBODY0RTM4OTA4NTVGRjVDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjE2QzM5QTUyRjY3MTFFOUE4NjRFMzg5MDg1NUZGNUMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjE2QzM5QTYyRjY3MTFFOUE4NjRFMzg5MDg1NUZGNUMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4wSS07AAAAjklEQVR42mJgwAL+//9vB8QfgNidYaAA0HInIP4GxEeAmHegHbEPiLkGyhF+QPxjMDjiFxBvAmLOgXADI9DiYCC9HIhvAnEyEP8aAHd8ADnkG5DByTCw4DvIIaFAxtKBDhFsaYRrQMMG6pifA5prBlU5gsUxJ4GYb6AdQ/e6BpRrGAYDYGIYJGDQOAQgwADKHJrnErT03AAAAABJRU5ErkJggg=="/>
                     </defs>
                   </svg>

            </div>
          </div>
        <!--CONTACT SECTION -->
       <div class="page_slide_box_group">
         <p class="page_slide_box_сontact_desc">
           Оставьте заявку и после получения наши менеджеры обсудят с вами особенности проекта: его цели, сроки, бюджеты, а также расскажут какую методологию выбрать и ответят на ваши вопросы.
           <br/>
           <br/>
           Результат: письмо на ваш e-mail со всеми договоренностями и предварительной сметой
         </p>
         <button class="brief_section5_btn button_white-transparent button button_size_normal button_with-icon button_with-icon-right btn_cst_color" @click.prevent="enableBrif">
             <span style="background-color: #fff;" class="button__background"></span>
             <span class="button__text lang-decrypt" >ЗАПОЛНИТЬ БРИФ</span>
             <svg class="button__icon button__arrow" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82 32">
                 <path d="M66.887 0.481c-0.722-0.722-1.684-0.722-2.406 0s-0.722 1.684 0 2.165l11.789 11.789h-74.586c-0.962 0-1.684 0.722-1.684 1.684 0 0.722 0.722 1.444 1.684 1.444h74.586l-11.549 11.549c-0.722 0.722-0.722 1.684 0 2.406s1.684 0.722 2.406 0l14.436-14.436c0.722-0.722 0.722-1.684 0-2.165l-14.677-14.436z"></path>
             </svg>

         </button>
        </div>
      </div>


    </div>
<!--CONTACT SECTION END-->
    <img class="displaceBg" src="@/assets/img/menu/2.jpg" ref="displace"/>

  </div>
<!--ALL BOX END-->
</template>

<script>
if (process.browser) {
 const PIXI = require('pixi.js')
}
import Brief from "@/components/Brief";
import VanillaTilt from "vanilla-tilt";
import baffle from 'baffle';
export default{
   components: {Brief},
   data(){
     return{
       renderer: null,
       displacementSprite: null,
       displacementFilter: null,
       blurFilter: null,
       image: null,
       image2: null,
       image3: null,
       image4: null,
       manager: 0,
       playChart: false,
       slideTimeOut: true,
       activeTab: 1,
       pageTitle: 'НАШИ ПРОЦЕССЫ',
       pageDescription: 'Фокусируемся на дизайне и пользовательских сценариях взаимодействия с сайтом, обеспечиваем коммуникации между бизнесом и его потребителем, работаем на стыке дизайна, технологий и психологии.',
       pageDescriptionSecond: 'В комплексе с бизнес-аналитикой делаем психологический анализ аудитории, выделяя триггеры и поведенческие паттерны для эмоционального контакта с пользователем',
       processImages: [
         { url: '/img/process/process.jpg'},
         { url: '/img/process/process1.jpg'},
         { url: '/img/process/process2.jpg'},
         { url: '/img/process/process3.jpg'},
       ],
       secondTitle: 'МЕТОДОЛОГИИ',
       secondDescription: 'Выбираем одну их 2х методологий разработки, подходяющую именно вашему проекту:',
       tabFirst: {
         title: 'SCRUM',
         text: 'Подход впервые описали Хиротака Такэути и Икудзиро Нонака в статье The New Product Development Game(Harvard Business Review, январь-февраль 1986). Они отметили, что проекты, над которыми работают небольшие команды из специалистов различного профиля, обычно систематически производят лучшие результаты, и объяснили это как «подход регби».В 1991 году ДеГрейс и Шталь в книге «Нечестивые проблемы, праведные решения» ссылались на этот подход, как на SCRUM (толкотня; схватка вокруг мяча (в регби)), спортивный термин, приведенный в статье Такэути и Нонакой. Кен Швабер в начале 1990-х использовал подход, который привел SCRUM в его компанию. Впервые методология SCRUM была представлена на общее обозрение задокументированным, четко сформированным и описанным совместно Швабером и Джефом Сазерлендом на OOPSLA’95 в Остине. Швабер и Сазерленд на протяжении следующих лет работали вместе, чтобы обработать и описать весь их опыт и лучшие практические образцы для индустрии в одно целое, в ту методологию, что известна сегодня как SCRUM.',
         subTitle: 'Принципы',
         subDesc: 'Scrum-подход делит рабочий процесс на равные спринты – обычно это периоды от недели до месяца, в зависимости от проекта и команды. Перед спринтом формулируются задачи на данный спринт, в конце – обсуждаются результаты, а команда начинает новый спринт. Спринты очень удобно сравнивать между собой, что позволяет управлять эффективностью работы.',
         listFirst: {
           title: 'Преимущества:',
           item: [
             { text: 'Гибкость, возможность существенно изменить scope работ, возможность работы над непонятными на старте историями.'},
             { text: 'Более быстрая доставка нового функционала продукта за счёт отсутствия выделенной фазы тестирования*, вовлечённость тестировщика в работу над качеством продукта в режиме реального времени.'},
             { text: 'Возможность быстрого перехода к разработке, коммуникация со всеми членами команды и получение обратной связи от специалистов в разных сферах (дизайнеров, архитекторов, тестировщиков и пр.) на самых ранних этапах.'}
           ]
         },
         listSecond: {
           title: 'Недостатки:',
           item: [
             { text: ' Отсутствие контроля (кроме общекомандного) и/или его сложность, невозможность спрогнозировать заранее результат, невозможность гарантировать точные даты поставки (даты уточняются по результатам каждого спринта), необходимость вовлечения каждого члена команды в работу других ввиду общекомандной ответственности.'},
             { text: 'Отсутствие документации как класса, знание продукта присутствует только у команды, что приводит к незаменимости ключевых людей в команде, невозможность определить «узкие» места до начала разработки.'}
           ]
         }
        },
        tabSecond: {
          title: 'WATERFALL',
          text: 'Хотя популярность модели Водопада за последние годы ослабела, природа последовательного процесса, используемого в методе водопада, интуитивно ближе разработчикам, и потому доминирует в IT.',
          subTitle: 'Принципы',
          subDesc: 'Следуя каскадной модели, разработка переходит от одной стадии к другой строго последовательно. Сначала полностью завершается один этап, затем другой. Тем самым, каскадная модель подразумевает, что переход от одной фазы разработки к другой происходит только после полного и успешного завершения предыдущей фазы, и что переходов назад либо вперёд или перекрытия фаз — не происходит.',
          listFirst: {
            title: 'Преимущества:',
            item: [
              { text: 'Понятная и чёткая схема рабочего процесса'},
              { text: 'Возможность просчёта точного количества затраченных на проект ресурсов'},
              { text: 'Не требует затрат по налаживанию коммуникаций между всеми членами команды.'}
            ]
          },
          listSecond: {
            title: 'Недостатки:',
            item: [
              { text: 'Переход к новому этапу -только после успешного завершения предыдущего'},
              { text: 'Невозможность внесения изменений заказчиком до окончания разработки продукта'},
              { text: 'В случае нехватки ресурсов страдает качество проекта из-за сокращения этапа тестирования.'}
            ]
          }
         },
       fwContent: [
         { number: '1', text: 'Глубокая предпроектная работа, бизнес-аналитика и проектирование' },
         { number: '2', text: 'Гибкая поэтапная разработка, экономим ваше время и деньги' },
         { number: '3', text: 'Эмоциональный дизайн - транслируем нужную эмоцию пользователю' },
       ],
       techBox: {
         title: 'ИНСТРУМЕНТЫ',
         subTitle: 'ИСПОЛЬЗУЕМ В РАБОТЕ ТОЛЬКО СОВРЕМЕННЫЙ, НО УЖЕ ПРОВЕРЕННЫЙ В БОЮ ИНСТРУМЕНТАРИЙ',
         techTitle: 'Стек технологий:',
         techItem: 'React Redux, 1С Bitrix, Symphony Laravel, Git, MySQL, Gulp, Webpack,',
         techItemSecond: 'WebGl, UX/UI, Motion дизайн, Adobe, 3D графика, Figma, Brand дизайн',
         techImages: [
           { url: '/img/process/figma.png' },
           { url: '/img/process/node.png' },
           { url: '/img/process/vue.png' },
           { url: '/img/process/laravel.png' },
           { url: '/img/process/webpack.png' },
           { url: '/img/process/react.png' },
         ]
       },
       alghorithmBox: {
         title: 'АЛГОРИТМ РАБОТЫ',
         desc: 'Формируем схему работы в зависимости от выбранной методолгии:',
         tabSecond: {
           title: '"Как падает вода"- эта ассоциация и дала название методологии',
           desc: 'Важно! Принцип методологии:',
           text: 'Этапы ведутся последовательно друг за другом, возрат на шаг назад, на предыдущий этап не допустим. На выходе получаете готовый продукт. Каждый этап по завершению согласовываем с вами.',
           subTitle: 'Методология waterfall подходит при разработке:',
         }
       },
       chartsDown: [
         { text: 'Бизнес-аналитика' },
         { text: 'Проектирование' },
         { text: 'Дизайн' },
         { text: 'Frontend + Backend' },
         { text: 'Тестирование' },
         { text: 'Релиз' }
       ],
       chartDownTextItems: [
         { text: 'Промо - сайтов средней сложности'},
         { text: 'Интернет - магазина средней сложности'},
         { text: 'Брендинга'},
         { text: 'Корпоративного сайта средней сложности'}
       ],
       contactBox: {
          title: 'СТАРТ',
          desc: 'Знакомьтесь, это наши менеджеры'
       }
     }
   },
   computed: {
       isBrifActive() {
         return this.$store.state.appState.brif;
       },
       preloader() {
         return this.$store.state.preloader;
       }
   },
   watch: {
     preloader(val){
       this.enterStartSectionAnimation()
     }
   },
   methods: {
     initPixi(){
           //PIXI CREATE
       var size = [this.$refs.slider.clientWidth, this.$refs.slider.clientHeight];
       var ratio = size[0] / size[1];
           this.renderer = new PIXI.Application({width: size[0], height: size[1], transparent: true, antialias: true});
           this.renderer.renderer.autoResize = true;
           this.renderer.view.classList += 'pixiSlider'
           this.$refs.slider.appendChild(this.renderer.view);
       var ratio = Math.min(size[0] / this.renderer.renderer.width, size[1] / this.renderer.renderer.height);
           this.renderer.stage.scale.set(ratio,ratio);
           this.renderer.stage.position.set(size[0]/60, size[1]/60);
           //IMG FIRST
       var texture = PIXI.Texture.fromImage('/img/process/process.jpg');
           this.image = new PIXI.Sprite(texture);
           this.image.scale.set(0.3)
           this.image.alpha = 1
           //IMG SEC
       var texture2 = PIXI.Texture.fromImage('/img/process/process1.jpg');
           this.image2 = new PIXI.Sprite(texture2);
           this.image2.scale.set(0.3)
           this.image2.alpha = 0
           //IMG THIRD
       var texture3 = PIXI.Texture.fromImage('/img/process/process2.jpg');
           this.image3 = new PIXI.Sprite(texture3);
           this.image3.scale.set(0.3)
           this.image3.alpha = 0
           //IMG FO
       var texture4 = PIXI.Texture.fromImage('/img/process/process3.jpg');
           this.image4 = new PIXI.Sprite(texture4);
           this.image4.scale.set(0.3)
           this.image4.alpha = 0
           //BLUR
           this.blurFilter = new PIXI.filters.BlurFilter();
           this.blurFilter.blur = 0
           //DISPLACE IMG
           this.displacementSprite = PIXI.Sprite.fromImage(this.$refs.displace.getAttribute('src'));
	         this.displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
           this.displacementSprite.scale.set(100)
           this.displacementFilter = new PIXI.filters.DisplacementFilter(this.displacementSprite);
           this.displacementFilter.scale.set(1)
           //ADD TO CONTAINER
           this.renderer.stage.filters = [this.displacementFilter, this.blurFilter];
           this.renderer.stage.addChild(this.displacementSprite);
           this.renderer.stage.addChild(this.image);
           this.renderer.stage.addChild(this.image2);
           this.renderer.stage.addChild(this.image3);
           this.renderer.stage.addChild(this.image4);
     },
     animate(){
         this.renderer.render();
         requestAnimationFrame(this.animate);
     },
     translatePixiScene(val){
         var allImgs = [this.image, this.image2, this.image3, this.image4]
         var tl = new TimelineMax()
             tl.to(this.displacementFilter.scale,0.75,{x: 2000,y:2000,ease: Expo.easeIn})
             tl.set(this.displacementFilter.scale,{x: -2000,y:-2000})
             tl.to(this.blurFilter,0.4,{blur: 1,ease: Expo.easeIn},0)
             tl.to(allImgs,0.35,{alpha: 0},0.45)
             tl.to(this.displacementFilter.scale,0.5,{x: 1,y:1,ease: Expo.easeOut},0.75)
             tl.to(this.blurFilter,0.25,{blur: 0,ease: Expo.easeIn},0.8)
             tl.fromTo(allImgs[val],0.45,{alpha: 0},{alpha: 1, onComplete: ()=> this.slideTimeOut=!this.slideTimeOut},0.8)
     },
     scrollTo(e){
       console.log(e.target)
     },
     sliderBtnAct(val){
        if(this.slideTimeOut){
          val=='left'?this.manager--:this.manager++
        }
     },
     enableBrif() {
         this.$store.commit('enableBrif');
         document.body.classList.add('--overflow-hidden');
     },
     disableBrif() {
         document.body.classList.remove('--overflow-hidden');
         this.$store.commit('disableBrif');
     },
     enterManager(){
         this.translatePixiScene(this.manager)
     },
     leaveManager(el,done){
         this.slideTimeOut=!this.slideTimeOut
     },
     enterStartSectionAnimation(){
       var title = this.$refs.title
       var desc = this.$refs.desc
       var desc2 = this.$refs.desc2
       var textBg = this.$refs.textBg
       var textBg2 = this.$refs.textBg2
       var controls = this.$refs.controls
       var tl = new TimelineMax()
           tl.fromTo(this.blurFilter,0.4,{blur: 5},{blur: 0,ease: Expo.easeIn, onComplete: ()=> this.addDecrypyt(title,500)})
           tl.fromTo(title,0.45,{ opacity: 0},{ opacity: 1, ease: Sine.easeInOut})
           tl.staggerFromTo([textBg, textBg2],0.65,{scaleX: 0, transformOrigin: 'left'},{opacity: 1,scaleX: 1,ease: Sine.easeInOut},0.15)
           tl.fromTo([desc,desc2],0.25,{ opacity: 0},{ opacity: 1, ease: Sine.easeInOut},1.7)
           tl.staggerFromTo([textBg, textBg2],0.45,{scaleX: 1, transformOrigin: 'right'},{scaleX: 0, ease: Sine.easeInOut},0.15)
           tl.fromTo(controls,0.25,{opacity:0},{opacity:1, ease: Sine.easeInOut})
     },
     addDecrypyt(el,duration){
       let b = baffle(el, {
          characters: 'ᛡ•°',
       });
          b.start()
           .reveal(duration)
     },
     pinContainerScene () {
           /*PINED EL*/
           var title = this.$refs.secondTitle
           var desc = this.$refs.secondDesc
           var tabs = this.$refs.tabs
           var tabTitle = this.$refs.tabTitle
           var tabContent = this.$refs.tabContent
           var tabContent2 = this.$refs.tabContent2
           var first = this.$refs.firsTab
           var second = this.$refs.secondTab
           /*PINED TL*/
           var tl = new TimelineMax()
               tl.fromTo(title,0.15,{opacity: 0},{opacity: 1, ease: Sine.easeInOut})
               tl.fromTo(desc,0.45,{opacity: 0},{opacity: 1, ease: Sine.easeInOut})
               tl.fromTo(tabs,0.45,{opacity: 0},{opacity: 1, ease: Sine.easeInOut, onComplete: ()=> this.addDecrypyt(tabContent,500)})
               tl.fromTo(tabContent,0.35,{y: 50, opacity: 0},{y: 0, opacity: 1, ease: Sine.easeInOut, onComplete: ()=> this.addDecrypyt(tabContent2,500)})
               tl.fromTo(tabTitle,0.15,{opacity: 0},{opacity: 1, ease: Sine.easeInOut})
               tl.fromTo(tabContent2,0.35,{y: 50, opacity: 0},{y: 0, opacity: 1, ease: Sine.easeInOut})
               tl.staggerFromTo([first,second],0.45,{opacity: 0, y: 200},{y: 0,opacity: 1, ease: Circ.easeOut},0.15)
           /*PINED SCENE*/
           var scene = new this.$scrollmagic.Scene({
             triggerElement: '.page_ad_slide_box',
             triggerHook: 'onEnter',
             offset: 500
           })
           .on('enter',()=>{
              this.addDecrypyt(title,500)
           })
           .setTween(tl)
               this.$ksvuescr.$emit('addScene', 'pinContainerScene', scene)
     },
     pinContainerSecondScene () {
           /*PINED EL*/
           var title = this.$refs.thirdTitle
           var desc = this.$refs.thirdDesc
           var img = this.$refs.photoItem
           var fw = this.$refs.slideBoxFw
           var fwItem = this.$refs.slideBoxFwItem
           var fwText = this.$refs.slideBoxFwText
           var cst = this.$refs.cstItems
           var cst2 = this.$refs.cstItems2
           var cst3 = this.$refs.cstItems3
           /*PINED TL*/
           var tl = new TimelineMax()
               tl.fromTo(fw,0.45,{width: 0, opacity: 0},{width: '100%', opacity: 1, ease: Sine.easeInOut})
               tl.staggerFromTo(fwItem,0.45,{opacity: 0},{opacity: 1, ease: Sine.easeInOut},0.15)
               tl.fromTo(fwText,0.45,{y:50, opacity: 0},{ y: 0, opacity: 1, ease: Sine.easeInOut, onComplete: ()=> this.addDecrypyt(title,800)},0.45)
               tl.fromTo(title,0.15,{opacity: 0},{ opacity: 1, ease: Sine.easeInOut})
               tl.fromTo(desc,0.45,{opacity: 0},{opacity: 1, ease: Sine.easeInOut})
               tl.staggerFromTo([cst,cst2,cst3],0.45,{opacity: 0},{opacity: 1, ease: Sine.easeInOut},0.15,0.95)
               tl.staggerFromTo(img,0.25,{rotationZ: 45, scale: 0.6, opacity: 0},{opacity: 1, rotationZ: 0, scale: 1, ease: Back.easeOut.config(1.7)},0.15,0.95)
          /*PINED SCENE*/
           var scene = new this.$scrollmagic.Scene({
             triggerElement: '.page_slide_box_fw',
             triggerHook: 'onEnter',
             offset: 300
           })
           .setTween(tl)
               this.$ksvuescr.$emit('addScene', 'pinContainerSecondScene', scene)
     },
     pinContainerThirdScene () {
            /*PINED EL*/
             var title = this.$refs.fourTitle
             var desc = this.$refs.fourDesc
             var text = document.querySelector('.other_tab_ctx')
             var tab = this.$refs.tabs2
             var rightText = this.$refs.rightText
             /*PINED TL*/
             var tl = new TimelineMax()
                 tl.fromTo(title,0.45,{opacity: 0},{opacity: 1, ease: Sine.easeInOut})
                 tl.fromTo(tab,0.45,{opacity: 0},{opacity: 1, ease: Sine.easeInOut, onComplete: ()=> this.addDecrypyt(text,500)})
                 tl.fromTo(desc,0.45,{opacity: 0},{opacity: 1, ease: Sine.easeInOut})
                 tl.fromTo(rightText,0.45,{y: 100, opacity: 0},{y: 0, opacity: 1, ease: Sine.easeInOut})
             /*PINED SCENE*/
             var scene = new this.$scrollmagic.Scene({
               triggerElement: '.page_slide_algorithm',
               triggerHook: 'onEnter',
               offset: 250
             })
             .on('enter',()=>{
                this.playChart=!this.playChart
                this.addDecrypyt(title,500)
             })
             .on('leave',()=>{
                this.playChart=!this.playChart
             })
             .setTween(tl)
                 this.$ksvuescr.$emit('addScene', 'pinContainerThirdScene', scene)
     },
     changeTab(val){
       if(this.activeTab!=val){
         this.slideTimeOut==true?changeTab(this):null;
       }
       var oldVal = val
       function changeTab(ctx){
           ctx.slideTimeOut=!ctx.slideTimeOut
           var tabContent = document.querySelectorAll('.page_tab_desc')
           var tabContent2 = document.querySelectorAll('.page_tab_another_desc')
           var tabTitle = document.querySelectorAll('.cst_tab_title')
               ctx.activeTab = val
               tabContent.forEach((el)=>{
                   ctx.addDecrypyt(el,500)
               })
               tabContent2.forEach((el)=>{
                   ctx.addDecrypyt(el,500)
               })
               tabTitle.forEach((el)=>{
                   ctx.addDecrypyt(el,500)
               })
               setTimeout(()=>{
                 ctx.slideTimeOut=!ctx.slideTimeOut
               },600)
        }
     },
     changeTabSecond(val){
       if(this.activeTab!=val){
         this.slideTimeOut==true?changeTab(this):null;
       }
       var oldVal = val
       function changeTab(ctx){
           ctx.activeTab = val
           ctx.slideTimeOut=!ctx.slideTimeOut
           ctx.playChart=!ctx.playChart
           var tabContent = document.querySelectorAll('.other_tab_ctx')
           tabContent.forEach((el)=>{
             ctx.addDecrypyt(el,500)
           })
           TweenMax.from('.page_tab_item',0.45,{y:50,opacity:0, onComplete: ()=> {
             ctx.playChart=!ctx.playChart
             ctx.slideTimeOut=!ctx.slideTimeOut
           }})
        }
     }
   },
   mounted () {
     if(process.client){
       this.pinContainerScene()
       this.pinContainerSecondScene()
       this.pinContainerThirdScene()
       this.initPixi()
       VanillaTilt.init(this.$refs.slider, {
          max: 5,
          transition:true,
          speed: 100
        });
       this.animate();
       document.addEventListener('scroll', this.scrollTo, true);
         window.addEventListener('resize', (e) => {
           var size = [this.$refs.slider.clientWidth, this.$refs.slider.clientHeight];
           var ratio = Math.min(size[0] / this.renderer.renderer.width, size[1] / this.renderer.renderer.height);
               this.renderer.stage.position.set(size[0]/60, size[1]/60);
               this.renderer.stage.scale.set(ratio,ratio);
               this.renderer.renderer.resize(size[0], size[1])
         });
     }
   }
}
</script>

<style>
html, body {
    overflow-y: visible !important;
  }
.displaceBg{
  display: none
}
.page_box{
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: "Bebas Neue";
  color: #fff;
  font-size: calc(100vw/20);
  background: url('/img/process/process_bg.png');
  background-size: 35%;
  background-color: #0c0c0c;
  background-blend-mode: darken;
  background-attachment: fixed;
}
.page_slide_box{
  display: flex;
  min-height: 100vh;
  font-size: 0.5em;
  padding-left: 4em;
  padding-right: 4em;
}
.page_slide_box_group{
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  perspective: 500px;
}
.process_video_bg{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  height: 100vh !important;
  object-fit: cover;
}
.tab_underline_animation:after{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 20%;
}
/*FIRST*/
.page_start_slide_box{
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding-top: 8em;
}
.page_slide_box_title{
  font-size: 2.7em;
  text-align: center;
  margin: 0;
    font-family: "Bebas Neue";
}
.cst_page_title{
  line-height: 1em;
  height: 1em;
  overflow: hidden;
}
.page_slide_box_desc{
  font-size: 0.45em;
  font-family: "Gosha Sans";
  display: inline-block;
  position: relative;
  padding-left: 4%;
  padding-right: 4%;
}
.page_slide_box_desc .text-with-bg__content{
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAFCAYAAACEhIafAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAASSURBVHgBY2BgYPjPBCQY0AgAFWgBCDyEHKIAAAAASUVORK5CYII=');
  background-repeat: repeat-x;
  background-position: 50% 75%;
  display: inline
}
.cst_arrow_btn_left:hover{
  animation: infiniteTranslate 0.75s ease-in-out alternate infinite;
  transform: translateX(0%);
}
.cst_arrow_btn_right:hover{
  animation: infiniteTranslateLeft 0.75s ease-in-out alternate infinite;
  transform: translateX(0%);
}
@keyframes infiniteTranslate {
  to{
    transform: translateX(-30%);
  }
}
@keyframes infiniteTranslateLeft {
  to{
    transform: translateX(30%);
  }
}
.pixiSlider{
  position: absolute;
  top: 2%;
  left: 11%;
  z-index: 1
}
.page_slide_box_slider{
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Heathergreen';
  transform-style: preserve-3d;
  transform:perspective(1000px);
    height: 10em;
}
.slide_box_control {
  display: flex;
  justify-content: space-between;
  width: 40%;
  align-items: center;
  transform: translateZ(40px);
    margin-top: 49%;
    margin-left: 13%;
}
.transition_slider_background{
  position: absolute;
  z-index: 1;
  transform:scaleX(0);
  width: 75%;
  background: #000;
  transform-origin: right;
  height: 8em;
  top: 0;
}
.slide_box_controls_number {
  font-size: 1.5em;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 20%;
  letter-spacing: 0.08em;
}
.slide_controls_small {
   font-weight: normal;
   font-size: 0.65em;
}
.page_slide_box_slider_image {
    width: 75%;
}
/*TWO*/
.page_ad_slide_box{
  flex-direction: column;
  padding-top: 4em;
  padding-left: 7em;
  padding-right: 7em;
  min-height: auto;
}
.page_ad_slide_box .page_slide_box_title{
  font-size: 2.2em;
  width: fit-content;
}
.page_ad_slide_box .page_slide_box_desc{
  padding: 0;
  width: fit-content;
  width: 50%;
}
.page_slide_box_desc_second{
  font-size: 0.55em;
    width: 45%;
}
.page_slide_box_tab {
  font-family: "Gosha Sans";
  padding-top: 1.3em;
}
.page_box_tab_link{
  font-size: 0.7em
}
.page_slide_box_tab {
  display: flex;
}
.page_tab_desc {
  margin-top: 3.3em;
  font-size: 0.44em;
}
.page_tab_another_desc{
  margin-top: 1em;
}
.page_tab_hidden_content h4{
  font-size: 0.6em;
  margin-bottom: 0;
  margin-top: 3em;
}
.page_tab_hidden_content {
  padding-top: 0.8em;
}
.page_tab_ad_group {
  display: flex;
  margin-top: 1.8em;
  perspective: 500px;
  justify-content: space-between;
}
.page_tab_item {
  color: #FFE7E7;
  font-size: 0.6em;
  width: 45%;
}
.page_tab_item ul{
  list-style-type: none;
}
.page_tab_item ul li{
  font-size: 0.8em;
  position: relative;
  padding: 2%
}
.page_tab_item ul li:nth-child(1)::before{
  content: '1';
  position: absolute;
  left: -1.7em;
  top: 25%;
  border-radius: 50%;
  border: solid #fff 0.07em;
  width: 1.3em;
  height: 1.3em;
  line-height: 1.2em;
  text-align: center;
}
.page_tab_item ul li:nth-child(2)::before{
  content: '2';
  position: absolute;
  left: -1.7em;
  top: 25%;
  border-radius: 50%;
  border: solid #fff 0.07em;
  width: 1.3em;
  height: 1.3em;
  line-height: 1.2em;
  text-align: center;
}
.page_tab_item ul li:nth-child(3)::before{
  content: '3';
  position: absolute;
  left: -1.7em;
  top: 25%;
  border-radius: 50%;
  border: solid #fff 0.07em;
  width: 1.3em;
  height: 1.3em;
  line-height: 1.2em;
  text-align: center;
}
.page_tab_item ul li:nth-child(4)::before{
  content: '4';
  position: absolute;
  left: -1.7em;
  top: 25%;
  border-radius: 50%;
  border: solid #fff 0.07em;
  width: 1.3em;
  height: 1.3em;
  line-height: 1.2em;
  text-align: center;
}
.page_box_tab_link {
  position: absolute;
  left: 18.5%;
}
.page_box_tab_link_other {
  margin-left: 6em;
}
.tab_underline_animation {
    width: 40.3%;
    position: absolute;
    height: 0.05em;
    background: #fff;
    margin-top: 1em;
    z-index: 0;
    left: 41.45%;
    transition: 0.25s ease-in
}
.tab_underline_animation:after {
    content: '';
    position: absolute;
    top: 0;
    left: -59.55%;
    background: #fff;
    width: 24%;
    height: 100%;
    transition: 0.25s ease-in
}
.tab_underline_animation_first:after {
  opacity: 0;
}
.tab_underline_animation_first{
    width: 55%;
    left: 26.7%;
}
/* .page_box_tab_link:after{
  position: absolute;
  width: 140%;
  content: '';
  left: -18.7%;
  height: 0.1em;
  background: #0c0c0c;
  z-index: 1;
  top: 123%;
  opacity: 0;
  transition: 0.25s ease-in
} */
.page_box_tab_link_other:after{
   left: -19.2%;
}
.page_box_tab_link::before{
   position: absolute;
   width: 140%;
   height: 200%;
   left: -19.85%;
   top: -77%;
   content: '';
   border: solid #fff 0.05em;
   border-bottom-color: transparent;
   opacity: 0;
   transition: 0.25s ease-in
}
.page_box_tab_link_act:after{
  opacity: 1
}
.page_box_tab_link_act:before{
  opacity: 1
}
/*THREE*/
.page_slide_box_engine{
  margin-top: 10%;
  padding-left: 7em;
  padding-right: 7em;
  min-height: unset !important;
  margin-bottom: 2em;
}
.chart_group {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.other_tab_ctx {
  font-size: 0.45em;
  margin-top: 4em;
}
.page_slide_box_fw{
  position: absolute;
  width: 100%;
  left: 0;
  background: #091830;
  display: flex;
  padding: 2%;
  padding-bottom: 3%;
}
.page_slide_box_fw_item {
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.fw_item_number {
  font-family: 'Heathergreen';
  -webkit-text-stroke-color: #fff;
  font-size: 3.4em;
  -webkit-text-stroke-width: 1px;
  -webkit-text-fill-color: transparent;
  line-height: 0.9em;
}
.fw_item_text {
  font-size: 0.45em;
  font-family: "Gosha Sans";
  width: 45%;
  padding-left: 1em;
}
.page_slide_box_fw_content {
  margin-top: 8em;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.page_slide_box_fw_content .page_slide_box_title{
  font-size: 2em;
}
.page_slide_box_fw_content .page_slide_box_desc {
  padding: 0;
  font-size: 0.55em;
  width: 55%;
  text-align: unset;
}
.page_slide_box_fw_content h4{
  margin-bottom: 0.8em;
  margin-top: 1em;
  font-family: "Gosha Sans";
  font-size: 0.65em;
}
.page_slide_box_fw_content span{
  margin: 0;
  line-height: 2em;
  font-family: "Gosha Sans";
  font-size: 0.45em;
}
.fw_img_box {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.fw_img_box img {
  margin-left: 10%;
  width: 8%;
  margin-right: 10%;
  margin-top: 7%;
  filter: grayscale(1);
  transition: 0.25s ease-in
}
.fw_img_box img:hover{
 filter: grayscale(0);
}
.page_slide_algorithm {
  flex-direction: column;
  margin-top: 2.5em;
  padding-left: 7em;
  padding-right: 7em;
  min-height: auto;
  margin-bottom: 2em;
}
.page_slide_algorithm h2{
  font-size: 2em;
  text-align: left;
}
.page_slide_algorithm .page_slide_box_desc{
  padding: 0;
  width: 45%;
  text-align: unset;
  font-size: 0.55em;
}
.chart-arrow-lines {
  position: absolute;
  height: 59%;
  left: -30%;
  top: 23%;
  width: 100%;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  transition: 1.55s ease-in-out 0.5s;
  opacity: 0;
}
.chart-arrow-lines svg{
  height: 100%;
  width: 100%;
}
/*contacts*/
.page_slide_contacts {
  flex-direction: column;
  padding-top: 1em;
  padding-bottom: 5em;
  min-height: auto;
}
.contacts_box_group {
  display: flex;
}
.page_slide_contacts .page_slide_box_title{
  text-align: left;
  margin-left: 1.2em;
}
.page_slide_contacts .page_slide_box_desc{
   padding: 0;
   margin-left: 7.5em;
}
.contacts_box_group .page_slide_box_slider_image{
  width: 60%
}
.page_slide_box_сontact_desc{
  font-size: 0.45em;
  font-family: "Gosha Sans";
  display: inline-block;
  text-align: justify;
  padding-left: 4%;
  padding-right: 4%;
}
.page_slide_contacts .brief_section5_btn{
  display: block !important
}
.alghoritm_second_group {
  margin-top: 1em;
  font-family: 'Gosha sans';
}
.other_tab_chart_frame {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  transition: 1.55s ease-in-out;
  opacity: 0;
}
.playChart{
  stroke-dashoffset: 0;
  opacity: 1;
}
.tab_chart_text {
  position: absolute;
  white-space: nowrap;
  font-size: 0.5em;
  margin-top: -1.5em;
}
.other_tab_chart_frame svg {
  width: 6em;
  height: 3.6em;
}
.other_tab_chart_frame:nth-child(2){
  margin-left: 1.1em;
  margin-top: -1.8em;
}
.other_tab_chart_frame:nth-child(3){
  margin-left: 2.2em;
  margin-top: -1.8em;
}
.other_tab_chart_frame:nth-child(4){
  margin-left: 3.3em;
  margin-top: -1.8em;
}
.other_tab_chart_frame:nth-child(5){
  margin-left: 4.4em;
  margin-top: -1.8em;
}
.other_tab_chart_frame:nth-child(6){
  margin-left: 5.5em;
  margin-top: -1.8em;
}
.other_tab_chart{
  position: relative;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: 7%;
  padding: 4%;
  padding-top: 6%;
}
.other_tab_text{
  width: 50%
}
.other_tab_text .page_tab_item{
  width: 100%;
}
.other_tab_chart_scrum .tab_chart_text{
  margin-top: 0em;
}
.contacts_box_group .page_slide_box_group{
  justify-content: flex-start;
}
.text_bg_cst {
    width: 33em;
    height: 50%;
    position: absolute;
    top: 0;
    left: 0;
    background: #000;
    opacity: 0;
    z-index: 2
}
.text_bg_cst2{
    width: 33em;
    height: 50%;
    position: absolute;
    opacity: 0;
    top: 53%;
    left: 0;
    background: #000;
    z-index: 2
}
</style>
