<ul class="topicRadio">
    <!-- <div class="weui-cells__title event_title">单选题</div> -->
    <% var radioList = list.radioList%>
    <%if(radioList&&radioList.length){%>
    <%for(var i = 0; i < radioList.length; i++) {%>
    <li>
        <div class="div_topic">
            <h4><%=i+1%>、<%=radioList[i].title%></h4>
        </div>
        <div class="weui-cells weui-cells_checkbox">
            <%var answerList =  radioList[i].answerList%>
            <%for(var j = 0; j < answerList.length; j++) {%>
            <label class="weui-cell weui-check__label" for="x<%=i%><%=j%>">
                <div class="weui-cell__hd">
                    <input type="radio" class="weui-check" name="radioX<%=i%>" id="x<%=i%><%=j%>" value="<%=answerList[j][1]%>radioX<%=i%><%=j%>">
                    <i class="weui-icon-checked"></i>
                </div>

                <div class="weui-cell__bd">
                    <p><%=radioList[i].answerList[j][0]%></p>
                    <%if(answerList[j][1] == "yes"){%>
                        <i class="is-correct z-hide is-cor"></i>
                    <%}%>
                    <i class="is-correct z-hide is<%=[j]%>"></i>
                    <i class="isnt-correct z-hide no<%=[j]%>"></i>
                </div>
            </label>
            <%}%>
        </div>
    </li>
    <%}%>
    <%}else{%>
    <!-- 无数据 -->
    <li>无数据，请联系管理员</li>
    <%}%>
    <div class="weui-btn-area">
        <a class="weui-btn weui-btn_primary" href="javascript:" id="submitBtn">提交</a>
    </div>
</ul>

<ul class="topicCheckbox z-hide">
    <div class="weui-cells__title event_title">多选题</div>
    <% var checkboxList = list.checkboxList%>
    <%if(checkboxList&&checkboxList.length){%>
    <%for(var i = 0; i < checkboxList.length; i++) {%>
    <li>
        <div class="div_topic">
            <h4><%=i+1%>、<%=checkboxList[i].title%></h4>
        </div>
        <div class="weui-cells weui-cells_checkbox">
            <%var answerList =  checkboxList[i].answerList%>
            <%for(var j = 0; j < answerList.length; j++) {%>
            <label class="weui-cell weui-check__label" for="z<%=i%><%=j%>">
                <div class="weui-cell__hd">
                    <input type="checkbox" class="weui-check" name="checkbox<%=i%>" id="z<%=i%><%=j%>" value="<%=answerList[j][1]%>checkbox<%=i%><%=j%>">
                    <i class="weui-icon-checked"></i>
                </div>

                <div class="weui-cell__bd">
                    <p><%=checkboxList[i].answerList[j][0]%></p>
                </div>
            </label>
            <%}%>
        </div>
    </li>
    <%}%>
    <%}else{%>
    <!-- 无数据 -->
    <li>无数据，请联系管理员</li>
    <%}%>
    <div class="weui-btn-area">
        <a class="weui-btn weui-btn_primary" href="javascript:" id="prevPage1">上一页</a>
    </div>
    <div class="weui-btn-area">
        <a class="weui-btn weui-btn_primary" href="javascript:" id="nextPage2">下一页</a>
    </div>
</ul>

<ul class="topicTOF z-hide">
    <div class="weui-cells__title event_title">判断题</div>
    <% var trueOrFalseList = list.trueOrFalseList%>
    <%if(trueOrFalseList&&trueOrFalseList.length){%>
    <%for(var i = 0; i < trueOrFalseList.length; i++) {%>
    <li>
        <div class="div_topic">
            <h4><%=i+1%>、<%=trueOrFalseList[i].title%></h4>
        </div>
        <div class="weui-cells weui-cells_checkbox">
            <%var answerList =  trueOrFalseList[i].answerList%>
            <%for(var j = 0; j < answerList.length; j++) {%>
            <label class="weui-cell weui-check__label" for="y<%=i%><%=j%>">
                <div class="weui-cell__hd">
                    <input type="radio" class="weui-check" name="radioY<%=i%>" id="y<%=i%><%=j%>" value="<%=answerList[j][1]%>">
                    <i class="weui-icon-checked"></i>
                </div>

                <div class="weui-cell__bd">
                    <p><%=trueOrFalseList[i].answerList[j][0]%></p>
                </div>
            </label>
            <%}%>
        </div>
    </li>
    <%}%>
    <%}else{%>
    <!-- 无数据 -->
    <li>无数据，请联系管理员</li>
    <%}%>
    <div class="weui-btn-area">
        <a class="weui-btn weui-btn_primary" href="javascript:" id="prevPage2">上一页</a>
    </div>
    <div class="weui-btn-area">
        <a class="weui-btn weui-btn_primary" href="javascript:" id="submitBtn">提交</a>
    </div>
</ul>