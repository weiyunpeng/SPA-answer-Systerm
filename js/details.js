/**
 * Created by yunpeng on 2017/2/9.
 */
$(document).ready(function(){
    //初始化页面
    Details.initPage();
});
var Details = {
    checkboxNum:null,//多选题的数量
    /**
     * 绑定基础的页面内容
     */
    initPage:function(){
        var self = this;
        scrollTo(0,0);
        self.qryDate();//加载数据
        self.initTimer();//显示倒计时
        self.initEvent();
        self.showNav();
    },
    /**
     * 绑定基础的页面事件
     */
    initEvent:function(){
        var self = this;
        //下一页事件：从单选到多选页面
        $("#nextPage1").click(function() {
            $('.topicRadio').addClass('z-hide');
            $('.topicCheckbox').removeClass('z-hide');
            var get_cache_form = window.localStorage.getItem('exam_form');
            scrollTo(0,0);
        });
        //下一页事件：从多选到判断页面
        $("#nextPage2").click(function() {
            $('.topicCheckbox').addClass('z-hide');
            $('.topicTOF').removeClass('z-hide');
            var get_cache_form = window.localStorage.getItem('exam_form');
            scrollTo(0,0);
        });

        //上一页事件：从多选到单选
        $("#prevPage1").click(function() {
            $('.topicCheckbox').addClass('z-hide');
            $('.topicRadio').removeClass('z-hide');
            var get_cache_form = window.localStorage.getItem('exam_form');
            scrollTo(0,0);
        });
        //上一页事件：从判断到多选
        $("#prevPage2").click(function() {
            $('.topicTOF').addClass('z-hide');
            $('.topicCheckbox').removeClass('z-hide');
            var get_cache_form = window.localStorage.getItem('exam_form');
            scrollTo(0,0);
        });

        //确认提交
        $("#submitBtn").click(function() {
            $.confirm("", "您确定要提交吗?", function() {
                self.countScore();
            }, function() {
                //取消操作
            });
        });

        //统一接受表单变化事件
        $('#exam_form').find("input").change(function () {
            //缓存表单数据
            //var value = $.trim($(this).offsetParent().find(".weui-cell__bd").text());
            var o = {};
            var a = $('#exam_form').serializeArray();
            $.each(a, function () {
                if (o[this.name] !== undefined) {
                    if (!o[this.name].push) {
                        o[this.name] = [o[this.name]];
                    }
                    o[this.name].push(this.value || '');
                } else {
                    o[this.name] = this.value || '';
                }
            });
            console.log(JSON.stringify(o));
            window.localStorage.setItem('exam_form', JSON.stringify(o));
        });
    },
    /**
     *加载模板返回
     */
    loadTemplate: function (template_path) {
        var template_url = template_path;
        var template_body = '';
        //同步方法获取
        $.ajax({
            url: template_url,
            type: 'GET',
            data: {}, //默认从参数获取
            timeout: 30000,
            async: false,
            success: function (data) {
                template_body = data;
            },
            error: function (e) {

            }
        });
        return template_body;
    },
    /**
     *构建模板对象
     ** @param {Object} template_html 模板的html或模板文件
     */
    buildTpl: function (template_html) {
        var self = this;
        /**
         *判断传入的参数是否为路径
         */
        function isPath(template_html) {
            var flag = false;
            var length = template_html.length;//获取文档长度
            //获取最后的5个字符，来判断
            var key = template_html.substring(length - 5);
            if (key.indexOf('.html') > -1||key.indexOf('.tpl') > -1) {
                //说明最后结尾时.html的，是一个路径
                flag = true;
            }
            return flag;
        }

        if (isPath(template_html)) {
            //说明时一个路径，就调用loadTemplate去获取文件
            template_html = self.loadTemplate(template_html);
        } else {
            //说明时文件，直接可以编译文档
        }
        //生成模板对象
        var _tmp = _.template(template_html);
        return _tmp;
    },
    /**
     * 加载试题
     */
    qryDate:function(){
        var self = this;
        //获取试题数据
        var callback_data ={
            "status": 0,
            "list": {
                "radioList": [
                    {
                        "title": "1单选题单选题单选题单选题单选题单选题单选题单选题",
                        "type": "radio",
                        "answerList": [
                            [
                                "萨达打算大三的",
                                "no"
                            ],
                            [
                                "让法国人哥哥二个如果",
                                "no"
                            ],
                            [
                                "啊实打实大苏打苏打水打算大三大四的231",
                                "no"
                            ],
                            [
                                "测试测试测试测试测试测试",
                                "yes"
                            ]
                        ]
                    },
                    {
                        "title": "1单选题单选题单选题单选题单选题单选题单选题单选题",
                        "type": "radio",
                        "answerList": [
                            [
                                "萨达打算大三的",
                                "no"
                            ],
                            [
                                "让法国人哥哥二个如果",
                                "no"
                            ],
                            [
                                "啊实打实大苏打苏打水打算大三大四的231",
                                "no"
                            ],
                            [
                                "测试测试测试测试测试测试",
                                "yes"
                            ]
                        ]
                    },
                    {
                        "title": "1单选题单选题单选题单选题单选题单选题单选题单选题",
                        "type": "radio",
                        "answerList": [
                            [
                                "萨达打算大三的",
                                "no"
                            ],
                            [
                                "让法国人哥哥二个如果",
                                "no"
                            ],
                            [
                                "啊实打实大苏打苏打水打算大三大四的231",
                                "no"
                            ],
                            [
                                "测试测试测试测试测试测试",
                                "yes"
                            ]
                        ]
                    },
                    {
                        "title": "1单选题单选题单选题单选题单选题单选题单选题单选题",
                        "type": "radio",
                        "answerList": [
                            [
                                "萨达打算大三的",
                                "no"
                            ],
                            [
                                "让法国人哥哥二个如果",
                                "no"
                            ],
                            [
                                "啊实打实大苏打苏打水打算大三大四的231",
                                "no"
                            ],
                            [
                                "测试测试测试测试测试测试",
                                "yes"
                            ]
                        ]
                    },
                    {
                        "title": "1单选题单选题单选题单选题单选题单选题单选题单选题",
                        "type": "radio",
                        "answerList": [
                            [
                                "萨达打算大三的",
                                "no"
                            ],
                            [
                                "让法国人哥哥二个如果",
                                "no"
                            ],
                            [
                                "啊实打实大苏打苏打水打算大三大四的231",
                                "no"
                            ],
                            [
                                "测试测试测试测试测试测试",
                                "yes"
                            ]
                        ]
                    },
                    {
                        "title": "1单选题单选题单选题单选题单选题单选题单选题单选题",
                        "type": "radio",
                        "answerList": [
                            [
                                "萨达打算大三的",
                                "no"
                            ],
                            [
                                "让法国人哥哥二个如果",
                                "no"
                            ],
                            [
                                "啊实打实大苏打苏打水打算大三大四的231",
                                "no"
                            ],
                            [
                                "测试测试测试测试测试测试",
                                "yes"
                            ]
                        ]
                    },
                    {
                        "title": "1单选题单选题单选题单选题单选题单选题单选题单选题",
                        "type": "radio",
                        "answerList": [
                            [
                                "萨达打算大三的",
                                "no"
                            ],
                            [
                                "让法国人哥哥二个如果",
                                "no"
                            ],
                            [
                                "啊实打实大苏打苏打水打算大三大四的231",
                                "no"
                            ],
                            [
                                "测试测试测试测试测试测试",
                                "yes"
                            ]
                        ]
                    },
                    {
                        "title": "1单选题单选题单选题单选题单选题单选题单选题单选题",
                        "type": "radio",
                        "answerList": [
                            [
                                "萨达打算大三的",
                                "no"
                            ],
                            [
                                "让法国人哥哥二个如果",
                                "no"
                            ],
                            [
                                "啊实打实大苏打苏打水打算大三大四的231",
                                "no"
                            ],
                            [
                                "测试测试测试测试测试测试",
                                "yes"
                            ]
                        ]
                    },
                    {
                        "title": "1单选题单选题单选题单选题单选题单选题单选题单选题",
                        "type": "radio",
                        "answerList": [
                            [
                                "萨达打算大三的",
                                "no"
                            ],
                            [
                                "让法国人哥哥二个如果",
                                "no"
                            ],
                            [
                                "啊实打实大苏打苏打水打算大三大四的231",
                                "no"
                            ],
                            [
                                "测试测试测试测试测试测试",
                                "yes"
                            ]
                        ]
                    },
                    {
                        "title": "1单选题单选题单选题单选题单选题单选题单选题单选题",
                        "type": "radio",
                        "answerList": [
                            [
                                "萨达打算大三的",
                                "no"
                            ],
                            [
                                "让法国人哥哥二个如果",
                                "no"
                            ],
                            [
                                "啊实打实大苏打苏打水打算大三大四的231",
                                "no"
                            ],
                            [
                                "测试测试测试测试测试测试",
                                "yes"
                            ]
                        ]
                    },
                    {
                        "title": "1单选题单选题单选题单选题单选题单选题单选题单选题",
                        "type": "radio",
                        "answerList": [
                            [
                                "萨达打算大三的",
                                "no"
                            ],
                            [
                                "让法国人哥哥二个如果",
                                "no"
                            ],
                            [
                                "啊实打实大苏打苏打水打算大三大四的231",
                                "no"
                            ],
                            [
                                "测试测试测试测试测试测试",
                                "yes"
                            ]
                        ]
                    },
                    {
                        "title": "1单选题单选题单选题单选题单选题单选题单选题单选题",
                        "type": "radio",
                        "answerList": [
                            [
                                "萨达打算大三的",
                                "no"
                            ],
                            [
                                "让法国人哥哥二个如果",
                                "no"
                            ],
                            [
                                "啊实打实大苏打苏打水打算大三大四的231",
                                "no"
                            ],
                            [
                                "测试测试测试测试测试测试",
                                "yes"
                            ]
                        ]
                    },
                    {
                        "title": "1单选题单选题单选题单选题单选题单选题单选题单选题",
                        "type": "radio",
                        "answerList": [
                            [
                                "萨达打算大三的",
                                "no"
                            ],
                            [
                                "让法国人哥哥二个如果",
                                "no"
                            ],
                            [
                                "啊实打实大苏打苏打水打算大三大四的231",
                                "no"
                            ],
                            [
                                "测试测试测试测试测试测试",
                                "yes"
                            ]
                        ]
                    },
                    {
                        "title": "1单选题单选题单选题单选题单选题单选题单选题单选题",
                        "type": "radio",
                        "answerList": [
                            [
                                "萨达打算大三的",
                                "no"
                            ],
                            [
                                "让法国人哥哥二个如果",
                                "no"
                            ],
                            [
                                "啊实打实大苏打苏打水打算大三大四的231",
                                "no"
                            ],
                            [
                                "测试测试测试测试测试测试",
                                "yes"
                            ]
                        ]
                    },
                    {
                        "title": "1单选题单选题单选题单选题单选题单选题单选题单选题",
                        "type": "radio",
                        "answerList": [
                            [
                                "萨达打算大三的",
                                "no"
                            ],
                            [
                                "让法国人哥哥二个如果",
                                "no"
                            ],
                            [
                                "啊实打实大苏打苏打水打算大三大四的231",
                                "no"
                            ],
                            [
                                "测试测试测试测试测试测试",
                                "yes"
                            ]
                        ]
                    },
                    {
                        "title": "1单选题单选题单选题单选题单选题单选题单选题单选题",
                        "type": "radio",
                        "answerList": [
                            [
                                "萨达打算大三的",
                                "no"
                            ],
                            [
                                "让法国人哥哥二个如果",
                                "no"
                            ],
                            [
                                "啊实打实大苏打苏打水打算大三大四的231",
                                "no"
                            ],
                            [
                                "测试测试测试测试测试测试",
                                "yes"
                            ]
                        ]
                    },
                    {
                        "title": "1单选题单选题单选题单选题单选题单选题单选题单选题",
                        "type": "radio",
                        "answerList": [
                            [
                                "萨达打算大三的",
                                "no"
                            ],
                            [
                                "让法国人哥哥二个如果",
                                "no"
                            ],
                            [
                                "啊实打实大苏打苏打水打算大三大四的231",
                                "no"
                            ],
                            [
                                "测试测试测试测试测试测试",
                                "yes"
                            ]
                        ]
                    },
                    {
                        "title": "2单选题单选题单选题单选题单选题单选题单选题单选题",
                        "type": "radio",
                        "answerList": [
                            [
                                "萨达打算大三的",
                                "no"
                            ],
                            [
                                "让法国人哥哥二个如果",
                                "no"
                            ],
                            [
                                "啊实打实大苏打苏打水打算大三大四的231",
                                "no"
                            ]
                        ]
                    },
                    {
                        "title": "2单选题单选题单选题单选题单选题单选题单选题单选题",
                        "type": "radio",
                        "answerList": [
                            [
                                "萨达打算大三的",
                                "no"
                            ],
                            [
                                "让法国人哥哥二个如果",
                                "no"
                            ],
                            [
                                "啊实打实大苏打苏打水打算大三大四的231",
                                "no"
                            ]
                        ]
                    },
                    {
                        "title": "2单选题单选题单选题单选题单选题单选题单选题单选题",
                        "type": "radio",
                        "answerList": [
                            [
                                "萨达打算大三的",
                                "no"
                            ],
                            [
                                "让法国人哥哥二个如果",
                                "no"
                            ],
                            [
                                "啊实打实大苏打苏打水打算大三大四的231",
                                "no"
                            ]
                        ]
                    }
                ],
                "checkboxList": [
                    {
                        "title": "多选多选多选多选多选多选多选多选多选多选多选多选多选",
                        "type": "checkbox",
                        "answerList": [
                            [
                                "这是真的",
                                "yes"
                            ],
                            [
                                "这也是真的",
                                "yes"
                            ],
                            [
                                "这是假的",
                                "no"
                            ],
                            [
                                "这是真的",
                                "yes"
                            ]
                        ]
                    },
                    {
                        "title": "多选多选多选多选多选多选多选多选多选多选多选多选多选",
                        "type": "checkbox",
                        "answerList": [
                            [
                                "这是真的",
                                "yes"
                            ],
                            [
                                "这也是真的",
                                "yes"
                            ],
                            [
                                "这是假的",
                                "no"
                            ],
                            [
                                "这是真的",
                                "yes"
                            ]
                        ]
                    },
                    {
                        "title": "多选多选多选多选多选多选多选多选多选多选多选多选多选",
                        "type": "checkbox",
                        "answerList": [
                            [
                                "这是真的",
                                "yes"
                            ],
                            [
                                "这也是真的",
                                "yes"
                            ],
                            [
                                "这是假的",
                                "no"
                            ],
                            [
                                "这是真的",
                                "yes"
                            ]
                        ]
                    },
                    {
                        "title": "多选多选多选多选多选多选多选多选多选多选多选多选多选",
                        "type": "checkbox",
                        "answerList": [
                            [
                                "这是真的",
                                "yes"
                            ],
                            [
                                "这也是真的",
                                "yes"
                            ],
                            [
                                "这是假的",
                                "no"
                            ],
                            [
                                "这是真的",
                                "yes"
                            ]
                        ]
                    },
                    {
                        "title": "多选多选多选多选多选多选多选多选多选多选多选多选多选",
                        "type": "checkbox",
                        "answerList": [
                            [
                                "这是真的",
                                "yes"
                            ],
                            [
                                "这也是真的",
                                "yes"
                            ],
                            [
                                "这是假的",
                                "no"
                            ],
                            [
                                "这是真的",
                                "yes"
                            ]
                        ]
                    },
                    {
                        "title": "多选多选多选多选多选多选多选多选多选多选多选多选多选",
                        "type": "checkbox",
                        "answerList": [
                            [
                                "这是真的",
                                "yes"
                            ],
                            [
                                "这也是真的",
                                "yes"
                            ],
                            [
                                "这是假的",
                                "no"
                            ],
                            [
                                "这是真的",
                                "yes"
                            ]
                        ]
                    },
                    {
                        "title": "多选多选多选多选多选多选多选多选多选多选多选多选多选",
                        "type": "checkbox",
                        "answerList": [
                            [
                                "这是真的",
                                "yes"
                            ],
                            [
                                "这也是真的",
                                "yes"
                            ],
                            [
                                "这是假的",
                                "no"
                            ],
                            [
                                "这是真的",
                                "yes"
                            ]
                        ]
                    },
                    {
                        "title": "多选多选多选多选多选多选多选多选多选多选多选多选多选",
                        "type": "checkbox",
                        "answerList": [
                            [
                                "这是真的",
                                "yes"
                            ],
                            [
                                "这也是真的",
                                "yes"
                            ],
                            [
                                "这是假的",
                                "no"
                            ],
                            [
                                "这是真的",
                                "yes"
                            ]
                        ]
                    },
                    {
                        "title": "多选多选多选多选多选多选多选多选多选多选多选多选多选",
                        "type": "checkbox",
                        "answerList": [
                            [
                                "这是真的",
                                "yes"
                            ],
                            [
                                "这也是真的",
                                "yes"
                            ],
                            [
                                "这是假的",
                                "no"
                            ],
                            [
                                "这是真的",
                                "yes"
                            ]
                        ]
                    },
                    {
                        "title": "多选多选多选多选多选多选多选多选多选多选多选多选多选",
                        "type": "checkbox",
                        "answerList": [
                            [
                                "这是真的",
                                "yes"
                            ],
                            [
                                "这也是真的",
                                "yes"
                            ],
                            [
                                "这是假的",
                                "no"
                            ],
                            [
                                "这是真的",
                                "yes"
                            ]
                        ]
                    },
                    {
                        "title": "多选多选多选多选多选多选多选多选多选多选多选多选多选",
                        "type": "checkbox",
                        "answerList": [
                            [
                                "这是真的",
                                "yes"
                            ],
                            [
                                "这也是真的",
                                "yes"
                            ],
                            [
                                "这是假的",
                                "no"
                            ],
                            [
                                "这是真的",
                                "yes"
                            ]
                        ]
                    },
                    {
                        "title": "多选多选多选多选多选多选多选多选多选多选多选多选多选",
                        "type": "checkbox",
                        "answerList": [
                            [
                                "这是真的",
                                "yes"
                            ],
                            [
                                "这也是真的",
                                "yes"
                            ],
                            [
                                "这是假的",
                                "no"
                            ],
                            [
                                "这是真的",
                                "yes"
                            ]
                        ]
                    },
                    {
                        "title": "多选多选多选多选多选多选多选多选多选多选多选多选多选",
                        "type": "checkbox",
                        "answerList": [
                            [
                                "这是真的",
                                "yes"
                            ],
                            [
                                "这也是真的",
                                "yes"
                            ],
                            [
                                "这是假的",
                                "no"
                            ],
                            [
                                "这是真的",
                                "yes"
                            ]
                        ]
                    },
                    {
                        "title": "多选多选多选多选多选多选多选多选多选多选多选多选多选",
                        "type": "checkbox",
                        "answerList": [
                            [
                                "这是真的",
                                "yes"
                            ],
                            [
                                "这也是真的",
                                "yes"
                            ],
                            [
                                "这是假的",
                                "no"
                            ],
                            [
                                "这是真的",
                                "yes"
                            ]
                        ]
                    },
                    {
                        "title": "多选多选多选多选多选多选多选多选多选多选多选多选多选",
                        "type": "checkbox",
                        "answerList": [
                            [
                                "这是真的",
                                "yes"
                            ],
                            [
                                "这也是真的",
                                "yes"
                            ],
                            [
                                "这是假的",
                                "no"
                            ],
                            [
                                "这是真的",
                                "yes"
                            ]
                        ]
                    },
                    {
                        "title": "多选多选多选多选多选多选多选多选多选多选多选多选多选",
                        "type": "checkbox",
                        "answerList": [
                            [
                                "这是真的",
                                "yes"
                            ],
                            [
                                "这也是真的",
                                "yes"
                            ],
                            [
                                "这是假的",
                                "no"
                            ],
                            [
                                "这是真的",
                                "yes"
                            ]
                        ]
                    },
                    {
                        "title": "多选多选多选多选多选多选多选多选多选多选多选多选多选",
                        "type": "checkbox",
                        "answerList": [
                            [
                                "这是真的",
                                "yes"
                            ],
                            [
                                "这也是真的",
                                "yes"
                            ],
                            [
                                "这是假的",
                                "no"
                            ],
                            [
                                "这是真的",
                                "yes"
                            ]
                        ]
                    },
                    {
                        "title": "多选多选多选多选多选多选多选多选多选多选多选多选多选",
                        "type": "checkbox",
                        "answerList": [
                            [
                                "这是真的",
                                "yes"
                            ],
                            [
                                "这也是真的",
                                "yes"
                            ],
                            [
                                "这是假的",
                                "no"
                            ],
                            [
                                "这是真的",
                                "yes"
                            ]
                        ]
                    },
                    {
                        "title": "多选多选多选多选多选多选多选多选多选多选多选多选多选",
                        "type": "checkbox",
                        "answerList": [
                            [
                                "这是真的",
                                "yes"
                            ],
                            [
                                "这也是真的",
                                "yes"
                            ],
                            [
                                "这是假的",
                                "no"
                            ],
                            [
                                "这是真的",
                                "yes"
                            ]
                        ]
                    },
                    {
                        "title": "多选多选多选多选多选多选多选多选多选多选多选多选多选",
                        "type": "checkbox",
                        "answerList": [
                            [
                                "这是真的",
                                "yes"
                            ],
                            [
                                "这也是真的",
                                "yes"
                            ],
                            [
                                "这是假的",
                                "no"
                            ],
                            [
                                "这是真的",
                                "yes"
                            ]
                        ]
                    }
                ],
                "trueOrFalseList": [
                    {
                        "title": "1选择题选择题选择题选择题选择题选择题选择题选择题选择题选择题选择题",
                        "type": "trueOrFalse",
                        "answerList": [
                            [
                                "正确",
                                "no"
                            ],
                            [
                                "错误",
                                "yes"
                            ]
                        ]
                    },
                    {
                        "title": "2选择题选择题选择题选择题选择题选择题选择题选择题选择题选择题选择题",
                        "type": "trueOrFalse",
                        "answerList": [
                            [
                                "正确",
                                "no"
                            ],
                            [
                                "错误",
                                "yes"
                            ]
                        ]
                    },
                    {
                        "title": "3选择题选择题选择题选择题选择题选择题选择题选择题选择题选择题选择题",
                        "type": "trueOrFalse",
                        "answerList": [
                            [
                                "正确",
                                "no"
                            ],
                            [
                                "错误",
                                "yes"
                            ]
                        ]
                    },
                    {
                        "title": "4选择题选择题选择题选择题选择题选择题选择题选择题选择题选择题选择题",
                        "type": "trueOrFalse",
                        "answerList": [
                            [
                                "正确",
                                "no"
                            ],
                            [
                                "错误",
                                "yes"
                            ]
                        ]
                    },
                    {
                        "title": "5选择题选择题选择题选择题选择题选择题选择题选择题选择题选择题选择题",
                        "type": "trueOrFalse",
                        "answerList": [
                            [
                                "正确",
                                "no"
                            ],
                            [
                                "错误",
                                "yes"
                            ]
                        ]
                    },
                    {
                        "title": "6选择题选择题选择题选择题选择题选择题选择题选择题选择题选择题选择题",
                        "type": "trueOrFalse",
                        "answerList": [
                            [
                                "正确",
                                "no"
                            ],
                            [
                                "错误",
                                "yes"
                            ]
                        ]
                    },
                    {
                        "title": "7选择题选择题选择题选择题选择题选择题选择题选择题选择题选择题选择题",
                        "type": "trueOrFalse",
                        "answerList": [
                            [
                                "正确",
                                "no"
                            ],
                            [
                                "错误",
                                "yes"
                            ]
                        ]
                    },
                    {
                        "title": "8选择题选择题选择题选择题选择题选择题选择题选择题选择题选择题选择题",
                        "type": "trueOrFalse",
                        "answerList": [
                            [
                                "正确",
                                "no"
                            ],
                            [
                                "错误",
                                "yes"
                            ]
                        ]
                    },
                    {
                        "title": "9选择题选择题选择题选择题选择题选择题选择题选择题选择题选择题选择题",
                        "type": "trueOrFalse",
                        "answerList": [
                            [
                                "正确",
                                "no"
                            ],
                            [
                                "错误",
                                "yes"
                            ]
                        ]
                    },
                    {
                        "title": "10选择题选择题选择题选择题选择题选择题选择题选择题选择题选择题选择题",
                        "type": "trueOrFalse",
                        "answerList": [
                            [
                                "正确",
                                "no"
                            ],
                            [
                                "错误",
                                "yes"
                            ]
                        ]
                    }
                ]
            }
        };
        var html_tpl='template/exam_tpl.tpl';//模板中心的页面模板
        var tpl = self.buildTpl(html_tpl);//赋值到对象中
        var html = tpl(callback_data);
        $('#topicAll').html(html);
        self.checkboxNum = callback_data.list.checkboxList.length;
        var get_cache_form = window.localStorage.getItem('exam_form');
        if(get_cache_form){
        //    说明有本地缓存,为中途退出
            self.getLocal(get_cache_form);
        }
    },
    /**
     * 获取本地缓存的值
     */
    getLocal:function(data){
        var self = this;
        try {
            data = JSON.parse(data);
            $('#exam_form').find("input").each(function(i){
                var $form_ele = $(this);
                //通过获取表单元素name属性值，来获取缓存数据对应的value值
                var input_name = $form_ele.attr('name');
                //遍历json数据对象data，获取value值
                var dateValue = data[input_name];
                var input_val = $form_ele.val();
                //var input_val = $.trim($form_ele.offsetParent().find(".weui-cell__bd").text());
                console.log("dateValue=="+dateValue);
                if(dateValue){
                    if(typeof (dateValue) == "string"){
                        //单选框事件
                        if( input_val == dateValue){
                            $form_ele.attr("checked",'checked');
                        }
                    }else{
                        //复选框事件
                        for(var j = 0; j<dateValue.length;j++){
                            if( input_val == dateValue[j]){
                                $form_ele.attr("checked",'checked');
                            }
                        }
                    }
                }
            });
        } catch (e) {
            console.log(e.stack + 'JSON.parse()解析参数出错');
        }
    },
    /**
     * 显示倒计时
     */
    initTimer:function(){
        var self = this;
        var m=14;//分钟
        var s=59;//秒
        function timeCountDown(){
            if(m == 0 && s <= 0){
                $('#timer').html('0:00');
                clearInterval(timer);
                $.modal({
                    title: "温馨提示",
                    text: "您的答题时间已到，请确认提交",
                    buttons: [
                        { text: "提交", onClick: function(){ self.countScore(); } },
                    ]
                });
                return true;
            }
            if(s<10){
                $('#timer').html(m+':0'+s);
            }else{
                $('#timer').html(m+':'+s);
            }
            s--;
            if(s<0){
                s=59;
                m--;
            }
            return false;
        }
        var timer = setInterval(timeCountDown,1000);
    },
    /**
     *计算总分
     */
    countScore:function(num){
        var　self = this;
        var correct = 0;//计算正确个数
        var checkbox_arr=[];//被勾选的checkbox的值的数组
        var no_checkbox_arr=[];//没有被勾选的checkbox的值的数组
        var radio_answer = "";
        $("li").each(function(i){
            //if($(this).find('input[type="radio"]:checked').val() == undefined){}
            //获取单选框的值：单选题和判断题
            radio_answer = $(this).find('input[type="radio"]:checked').val();
            if(radio_answer){
                radio_answer = radio_answer.substring(0,3);
                if(radio_answer == "yes"){
                    correct++;
                }
            }
        });
        //获取复选框的值：多选题
        for(var j=0;j<self.checkboxNum;j++){
            var chk_value = '';
            var no_chk_value = '';
            $('input[name="checkbox'+j+'"]').each(function(j){
                if($(this).attr('checked') == 'checked'){
                    //说明被勾选,判断是否存在no，若存在no不给分
                    chk_value+=$(this).val();
                }
                if(!$(this).attr('checked') || $(this).attr('checked') == undefined){
                    //说明没有被勾选,判断是否存在yes，若存在yes不给分
                    no_chk_value+=$(this).val();
                }

            });
            checkbox_arr.push(chk_value);
            no_checkbox_arr.push(no_chk_value);
        }
        // console.log("checkbox_arr："+checkbox_arr);
        // console.log("no_checkbox_arr："+no_checkbox_arr);
        for(var k=0; k<checkbox_arr.length;k++){
            if(checkbox_arr[k].indexOf("no") < 0){
                //说明勾选的不存在no
                if(no_checkbox_arr[k].indexOf("yes") < 0) {
                    //说明没勾选不存在yes
                    correct++;
                }
            }
        }
        self.getPerScore(correct);
    },
    /**
     * 分数提交到服务器
     */
    getPerScore:function(correct){
        var self = this;
        window.localStorage.clear();
        $.toast("提交成功!获得"+correct+"分");
    },

    //**************************特效类事件************************************************
    /**
     *显示与隐藏导航标签
     */
    showNav:function(){
        var self = this;
        //绑定滚动条事件
        $(window).bind("scroll", function () {
            var sTop = parseInt($(window).scrollTop());
            if (sTop >= 10) {
                $('.event_title').addClass("leftShow");
            }
            else if (sTop == 0)  {
                $('.event_title').removeClass("leftShow");
            }
        });
    }
}