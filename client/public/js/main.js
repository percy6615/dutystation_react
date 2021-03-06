import MapClass from "/js/map/map_class.js";
import zhdata from "./official/data_tw.js";


var dashboard = {
    notify: {
        cd: 5,
        prev: null
    },
    setting: {
        dateFormat: 'YYYY-MM-DD',
        date: null
    }
}

$(function() {
    window.addEventListener("resize", function(e) {
        dashboard.chartobj.el.resize();
    });
    var mapClass = new MapClass();

    $("#sysmap").on("click", function(e) {
        clickMenu(".map");
        mapClass.getMap().updateSize()
    });

    $("#sysalbum").on("click", function(e) {
        clickMenu(".album");
        showImages();
    });

    $("#syschart").on("click", function(e) {
        clickMenu(".chart");
        dashboard.chartobj.el.resize();
    });

    $("#sysprofile").on("click", function(e) {
        clickMenu(".profile");
    });

    $("#sysproject").on("click", function(e) {
        createprojectmodal();
        // $("#exampleModalScrollable").modal()
        var myModal = new bootstrap.Modal(document.getElementById('exampleModalScrollable'))
        myModal.show()
    });

    $(".sidebar-content  .sidebar-nav  .sidebar-item .sidebar-link").on("click", function() {
        var idname = $(this).attr("id");
        $(" .sidebar-content .sidebar-nav  .sidebar-item.active").removeClass('active')
        if (idname == "orgmanager" || idname == "permanager" || idname == "jobmanager") {
            $(" .sidebar-content .sidebar-nav  .sidebar-item .sidebar-item.active").removeClass('active')
            $(this).parent().parent().parent().addClass('active');
        }
        $(this).parent().addClass('active');
    });

    $("#orgmanager").on("click", function(e) {
        clickMenu(".org");
        $(' #s1 ').trigger("click");
        $('#s1').tab('show');
    });

    $("#permanager").on("click", function(e) {
        clickMenu(".org");
        $(' #s2 ').trigger("click");
        $('#s2').tab('show');
    });

    $("#jobmanager").on("click", function(e) {
        clickMenu(".org");
        $(' #s3 ').trigger("click");
        $('#s3').tab('show');
    });

    $("#floatLayerSetting").on("click", function(e) {
        createmaptoolmodal();
        var myModal = new bootstrap.Modal(document.getElementById('exampleModalScrollable'))
        myModal.show('toggle')
        $("#exampleModalScrollable > div input").bootstrapToggle();
    });

    $("#fullscreen").on("click", function(e) {
        var content = document.getElementById('whole');
        if ((document.fullscreen)) {
            //????????????
            var el = document,
                cfs = el.cancelFullScreen || el.webkitCancelFullScreen || el.mozCancelFullScreen || el.exitFullScreen,
                wscript;
            if (typeof cfs != "undefined" && cfs) {
                cfs.call(el);
                return;
            }
            if (typeof window.ActiveXObject != "undefined") {
                wscript = new ActiveXObject("WScript.Shell");
                if (wscript != null) {
                    wscript.SendKeys("{F11}");
                }
            }
        } else {
            //????????????
            var rfs = content.requestFullScreen || content.webkitRequestFullScreen || content.mozRequestFullScreen || content.msRequestFullScreen,
                wscript;
            if (typeof rfs != "undefined" && rfs) {
                rfs.call(content);
                return;
            }
            if (typeof window.ActiveXObject != "undefined") {
                wscript = new ActiveXObject("WScript.Shell");
                if (wscript) {
                    wscript.SendKeys("{F11}");
                }
            }
        }
    });

    $(".toggle-check-input").on('change', function() {
        var isopen = mapClass.satelliteMap();
        this.checked = isopen;
        if (this.checked) {
            $("#lb_satellite").css("color", "white");
        } else {
            $("#lb_satellite").css("color", "black");
        }
    });

    $("#online-header").on("click", function(e) {
        var clientHeight = $("#online-content").height()
        if (clientHeight > 0) {
            $("#online-content").animate({
                height: "0px",
            }, 250);
        } else {
            $("#online-content").animate({
                height: "125px",
            }, 500);
        }
    });
    $("#popup-closer").on("click", function(e) {
        mapClass.overlay.setVisible(false);
    })
    $("#disasterreport").on("click", function(e) {
        fixedElementanimate()
    });

    $("#filterdata").on("click", function(e) {
        createfiltermodal();
        // $("#exampleModalScrollable").modal()
        var myModal = new bootstrap.Modal(document.getElementById('exampleModalScrollable'))
        myModal.show()
    });

    $("#filterdataicon").on("click", function(e) {
        createfiltermodal();
        // $("#exampleModalScrollable").modal()
        var myModal = new bootstrap.Modal(document.getElementById('exampleModalScrollable'))
        myModal.show()
    });


    // https://codepen.io/kolibanuch/pen/QXveqV

    $.contextMenu({
        selector: '.map',
        callback: function(key, options) {
            // var m = "clicked: " + key;
            // window.console && console.log(m) || alert(m);
            // console.log(options)
            if (key == "refresh") {
                mapClass.getMap().updateSize()
                mapClass.overlay.setPosition(undefined);
            } else if (key == "rotate") {
                var angle = mapClass.getMap().getView().getRotation();
                mapClass.getMap().getView().setRotation(angle + Math.PI / 2)
            } else if (key == "quit") {
                mapClass.getMap().getView().setRotation(0)
            }
        },
        items: {
            "refresh": {
                name: "??????",
                icon: "fas fa-retweet"
            },
            "rotate": {
                name: "??????90???",
                icon: "fas fa-infinity"
            },
            "sep1": "---------",
            "quit": {
                name: "Quit",
                icon: function() {
                    return 'context-menu-icon context-menu-icon-quit';
                }
            }
        }
    });
    $("#syshelp").on("click", function(e) {});
    // window._map = _map
    window.mapClass = mapClass
});



var isSelectedCountries = new Map();
var tempCountries = new Set();
var maptoolDic = {};

function selectaction(isSelectedCountries, setCity) {
    var cityselect = document.getElementById("city");
    var countryselect = document.getElementById("country");
    var tempCountries = new Set();
    if (isSelectedCountries.has(setCity)) {
        tempCountries = isSelectedCountries.get(setCity);
    }
    var cityNum = getCityNum(setCity);
    if (cityNum != -1) {
        $("#country").empty();
        for (var i = 0; i < zhdata['districts'][cityNum][0].length; i++) {
            var area = zhdata["districts"][cityNum][0][i];
            var isSelected = false;
            for (var s of tempCountries) {
                if (area == s) {
                    isSelected = true;
                    break;
                }
            }
            if (isSelected) {
                countryselect.add(new Option(area, area, true, true), i);
            } else {
                countryselect.add(new Option(area, area), i);
            }
        }
    }
    initareapane(isSelectedCountries);
}

function getCityNum(setCity) {
    for (var i = 0; i < zhdata["counties"].length; i++) {
        if (setCity == zhdata["counties"][i]) {
            return i;
        }
    }
    return -1;
}

function initCity(isSelectedCountries) {
    var cityselect = document.getElementById("city");
    for (var i = 0; i < zhdata["counties"].length; i++) {
        cityselect.add(new Option(zhdata["counties"][i], zhdata["counties"][i]), i);
        if (!isSelectedCountries.has(zhdata["counties"][i])) {
            isSelectedCountries.set(zhdata["counties"][i], new Set())
        }
    }
}

function initareapane(isSelectedCountries) {
    $("#areapane").empty();
    for (var i = 0; i < zhdata["counties"].length; i++) {
        if (isSelectedCountries.has(zhdata["counties"][i])) {
            tempCountries = isSelectedCountries.get(zhdata["counties"][i]);
            if (tempCountries.size > 0) {
                $("<a>", {
                    class: "list-group-item-heading list-group-item-action list-group-item-primary",
                    href: "#",
                    text: zhdata["counties"][i],
                }).appendTo("#areapane")
                for (var t of tempCountries) {
                    $("<a>", {
                        class: "list-group-item list-group-item-action",
                        href: "#",
                        text: t,
                    }).appendTo("#areapane")
                }
            }
        }
    }
}

function createfiltermodal() {
    if ($("#exampleModalScrollable > div").find(".modal-content").length > 0) {
        $("#exampleModalScrollable > div").empty();
    }
    var header = $("<div>", {
            class: "modal-header"
        }).append($("<h3>", {
            class: "modal-title",
            id: "exampleModalScrollableTitle",
            text: "????????????"
        }))
        .append($("<button>", {
            class: "close",
            "data-bs-dismiss": "modal",
            "aria-label": "Close",
            html: ' <span aria-hidden="true">&times;</span>'
        }));
    var body = $("<div>", {
            class: "modal-body"
        }).append($("<h6>", {
            style: "color:gray",
            text: "????????????"
        })).append($("<div>", {
            id: "reportrange",
            style: "background: #fff; cursor: pointer; padding: 5px 10px; border: 1px solid #ccc; width: 100%;margin-left:10px;",
            html: '<i class="fa fa-calendar"></i>&nbsp; <span></span> <i class="fa fa-caret-down"></i>'
        })).append("<hr></hr>")
        .append($("<h6>", {
            style: "color:gray",
            text: "??????"
        })).append($("<span>", {
            style: "font-size: 12px;color:dimgray;margin-left:10px;",
            html: '??????: <select id="city" style="font-size:13px"></select>'
        })).append($("<span>", {
            style: "font-size: 12px;color:dimgray;margin-left:10px;",
            html: ' ??????: <select id="country" multiple="multiple" style="padding:5px;height: 50px;font-size:13px"></select>'
        })).append("</br>")
        .append($("<h7>", {
            style: "font-size: 12px;color:dimgray;margin-left:10px;",
            text: "???????????????:"
        })).append($("<div>", {
            id: "areapane",
            class: "list-group scrollbar-style",
            style: "margin-top: 5px; overflow: auto;max-height:150px;border-style:double;margin-left:10px;"
        }));
    var foot = $("<div>", {
        class: "modal-footer"
    }).append($("<button>", {
        class: "btn btn-secondary",
        "data-bs-dismiss": "modal",
        id: "modalreportcancel",
        text: "??????",
    })).append($("<button>", {
        class: "btn btn-primary",
        id: "modalreportconfirm",
        text: "??????",
    }))
    var content = $("<div>", {
        class: "modal-content"
    }).append(header).append(body).append(foot);
    $("#exampleModalScrollable > div").append(content);

    var start = moment().subtract(7, 'days');
    var end = moment();
    createcalendar(start, end, start, end);

    initCity(isSelectedCountries);
    selectaction(isSelectedCountries, "?????????");

    var lastSelected = $('#city option:selected').val();
    $('#city').multiselect({
        onChange: function(option, checked, select) {
            var countryselect = document.getElementById("country");
            if (isSelectedCountries.has(lastSelected)) {
                var tempCountries = new Set();
                for (var s of countryselect.options) {
                    if (s.selected) {
                        tempCountries.add(s.value);
                    }
                }
                isSelectedCountries.set(lastSelected, tempCountries);
            }
            lastSelected = $('#city').val()
            selectaction(isSelectedCountries, $('#city').val())
            $("#country").multiselect('rebuild');
        }
    });

    $('#country').multiselect({
        numberDisplayed: 2,
        onChange: function(option, checked, select) {
            // alert('Changed option ' + $(option).val() + '.');
            // console.log($(option))
            if (isSelectedCountries.has($('#city').val())) {
                var tempCountries = isSelectedCountries.get($('#city').val());
                if (checked) {
                    tempCountries.add($(option).val());
                } else {
                    tempCountries.delete($(option).val())
                }
            }

            initareapane(isSelectedCountries)
        }
    });

    $("#modalreportcancel").on("click", function(e) {
        //TODO

    });

    $("#modalreportconfirm").on("click", function(e) {
        //TODO
    });


}

function createcalendar(start, end, mindate, maxdate) {

    function cb(start, end) {
        $('#reportrange span').html(start.format('YYYY/MM/DD ') + ' - ' + end.format('YYYY/MM/DD '));
    }
    var reportrange = $("#reportrange").daterangepicker({
        "alwaysShowCalendars": true,
        opens: "left",
        timePicker: true,
        startDate: start,
        endDate: end,
        cancelButtonClasses: "btn-danger",
        // ranges: {
        //     "??????": [moment(), moment()],
        //     "?????? 7 ???": [moment().subtract(6, "days"), moment()],
        //     "??????": [moment().startOf("month"), moment().endOf("month")],
        //     "?????????": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
        // },
        locale: {
            format: "YYYY-MM-DD hh:mm A",
            separator: " ~ ",
            applyLabel: "??????",
            cancelLabel: "??????",
            fromLabel: "????????????",
            toLabel: "????????????",
            customRangeLabel: "??????????????????",
            daysOfWeek: ["???", "???", "???", "???", "???", "???", "???"],
            monthNames: ["1???", "2???", "3???", "4???", "5???", "6???",
                "7???", "8???", "9???", "10???", "11???", "12???"
            ],
            firstDay: 1
        }
    }, cb);

    var daterange = reportrange.data('daterangepicker');
    daterange.setMinDate = function(minDate) {
        if (typeof minDate === 'string')
            this.minDate = moment(minDate, this.locale.format);

        if (typeof minDate === 'object')
            this.minDate = moment(minDate);

        if (!this.timePicker)
            this.minDate = this.minDate.startOf('day');

        if (this.timePicker && this.timePickerIncrement)
            this.minDate.minute(Math.round(this.minDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);

        if (this.minDate && this.startDate.isBefore(this.minDate)) {
            this.startDate = this.minDate.clone();
            if (this.timePicker && this.timePickerIncrement)
                this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
        }

        if (!this.isShowing)
            this.updateElement();

        this.updateMonthsInView();
    }

    daterange.setMaxDate = function(maxDate) {
        if (typeof maxDate === 'string')
            this.maxDate = moment(maxDate, this.locale.format);

        if (typeof maxDate === 'object')
            this.maxDate = moment(maxDate);

        if (!this.timePicker)
            this.maxDate = this.maxDate.startOf('day');

        if (this.timePicker && this.timePickerIncrement)
            this.maxDate.minute(Math.round(this.maxDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);

        if (this.maxDate && this.startDate.isAfter(this.maxDate)) {
            this.startDate = this.maxDate.clone();
            if (this.timePicker && this.timePickerIncrement)
                this.startDate.minute(Math.floor(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
        }

        if (!this.isShowing)
            this.updateElement();

        this.updateMonthsInView();
    }

    $("#reportrange").on("cancel.daterangepicker", function(ev, picker) {
        $('#reportrange span').html("");
    });
    $('#reportrange').on('apply.daterangepicker', function(ev, picker) {
        // console.log(picker.startDate.format('YYYY-MM-DD hh:mm A'));
        // console.log(picker.endDate.format('YYYY-MM-DD hh:mm A'));
        cb(picker.startDate, picker.endDate);
    });

    daterange.setMinDate(mindate);
    daterange.setMaxDate(maxdate);
    cb(start, end);
}

function createprojectmodal() {

    if ($("#exampleModalScrollable > div").find(".modal-content").length > 0) {
        $("#exampleModalScrollable > div").empty();
    }
    var header = $("<div>", {
            class: "modal-header"
        }).append($("<h3>", {
            class: "modal-title",
            id: "exampleModalScrollableTitle",
            text: "????????????"
        }))
        .append($("<button>", {
            class: "close",
            "data-bs-dismiss": "modal",
            "aria-label": "Close",
            html: ' <span aria-hidden="true">&times;</span>'
        }));

    var body = $("<div>", {
        class: "modal-body"
    });

    var foot = $("<div>", {
        class: "modal-footer"
    }).append($("<button>", {
        class: "btn btn-secondary",
        "data-bs-dismiss": "modal",
        id: "modalreportcancel",
        text: "??????",
    })).append($("<button>", {
        class: "btn btn-primary",
        id: "modalreportconfirm",
        text: "??????",
    }));

    var content = $("<div>", {
        class: "modal-content"
    }).append(header).append(body).append(foot);

    $("#exampleModalScrollable > div").append(content);

    $("#modalreportcancel").on("click", function(e) {
        //TODO
    });

    $("#modalreportconfirm").on("click", function(e) {
        //TODO
    });
}

function fixedElementanimate() {
    var position = $('.fixedElement').position();
    var percentLeft = position.left / $(window).width() * 100;
    var percentTop = position.top / $(window).height() * 100;

    if (percentTop > 60) {
        $(".fixedElement").animate({
            top: "20%",
        }, 250);
    } else {
        $(".fixedElement").animate({
            top: "100%",
        }, 100);
    }
}

function createmaptoolmodal() {
    if ($("#exampleModalScrollable > div").find(".modal-content").length > 0) {
        $("#exampleModalScrollable > div").empty();
    }
    var jsondata = [
        { "vistual": true, "header": "??????", "icon": "static/icon/weather-forecast.png", "body": [{ "name": "??????????????????", "num": 1, "id": "one_day_rain" }, { "name": "???????????????", "num": 2, "id": "radar_echo" }] },
        { "vistual": true, "header": "??????", "icon": "static/icon/flow.png", "body": [{ "name": "?????????", "num": 1, "id": "water_level_setting" }, { "name": "?????????", "num": 2, "id": "rain_level_setting" }] },
        { "vistual": true, "header": "CCTV", "icon": "static/icon/cctv.png", "body": [{ "name": "?????????", "num": 1, "id": "cctv_wra_setting" }, { "name": "????????????", "num": 2, "id": "cctv_road_setting" }] },
        { "vistual": true, "header": "??????", "icon": "static/icon/meeting.png", "body": [{ "name": "??????????????????", "num": 1, "id": "community_setting" }, { "name": "??????????????????", "num": 2, "id": "police_station_setting" }] },
        { "vistual": true, "header": "??????", "icon": "static/icon/promotional.png", "body": [{ "name": "????????????", "num": 1, "id": "social_welfare_setting" }, { "name": "????????????", "num": 2, "id": "prevent_place_setting" }] }
    ];
    var header = $("<div>", {
            class: "modal-header"
        }).append($("<h3>", {
            class: "modal-title",
            id: "exampleModalScrollableTitle",
            text: "????????????"
        }))
        .append($("<button>", {
            class: "close",
            "data-bs-dismiss": "modal",
            "aria-label": "Close",
            html: ' <span aria-hidden="true">&times;</span>'
        }));

    var body = $("<div>", {
        class: "modal-body"
    });
    var foot = $("<div>", {
        class: "modal-footer"
    }).append($("<button>", {
        class: "btn btn-primary",
        id: "modalreportconfirm",
        "data-bs-dismiss": "modal",
        text: "??????",
    }));
    body.append(maptool(jsondata));
    var content = $("<div>", {
        class: "modal-content"
    }).append(header).append(body).append(foot);

    $("#exampleModalScrollable > div").append(content);

    $("#modalreportconfirm").on("click", function(e) {
        //TODO
        // var elements = $("#exampleModalScrollable > div input");
        // console.log(elements)
        // for (var i = 0; i < elements.length; i++) {

        //     maptoolDic[elements[i]["id"]] = elements[i]["checked"];
        // }
        console.log(123)
    });
    $("#exampleModalScrollable > div input").change(function(e) {
        var idn = $(this).attr("id");
        maptoolDic[idn] = $(this).prop('checked');
        if (idn == "one_day_rain") {

        } else if ("radar_echo") {

        } else if ("water_level_setting") {

        } else if ("rain_level_setting") {

        } else if ("cctv_wra_setting") {

        } else if ("cctv_road_setting") {

        } else if ("community_setting") {

        } else if ("police_station_setting") {

        } else if ("social_welfare_setting") {

        } else if ("prevent_place_setting") {

        }
    });

}

function maptool(jsondata) {
    var element = $("<div>", { class: "container-fluid bd-example-row" });

    for (var i = 0; i < jsondata.length; i++) {
        if (jsondata[i]["vistual"]) {
            element.append(subheadermaptool(jsondata[i]["header"], jsondata[i]['icon']));
            if (jsondata[i]["body"].length > 0) {
                element.append($("<hr>", {
                    style: "margin:5px;"
                }))
                for (var j = 0; j < jsondata[i]["body"].length; j++) {
                    element.append(subbodymaptool(jsondata[i]["body"][j]["name"], jsondata[i]["body"][j]["id"]));

                }
            }
        }
    }
    return element;
}

function subheadermaptool(headername, icon) {
    var element = $("<div>", {
        class: "row",
        style: "margin-bottom:5px;"
    });
    element.append($("<div>", {
        class: "col-md-1",
        html: "<img src=" + icon + ">"
    }));
    return element.append($("<div>", {
        class: "col-md-3",
        style: "font-size: 18px; font-weight:bold",
        text: headername
    }));
}

function subbodymaptool(layername, layerid) {

    var element = $("<div>", {
        class: "row",
        style: "margin-bottom:5px"
    });
    var ch = undefined;
    if (maptoolDic.hasOwnProperty(layerid) && maptoolDic[layerid]) {
        ch = "checked";
    }
    return element.append($("<div>", {
        class: "col-md-4",
        style: "font-size: 16px; text-align: end; padding:0px",
        text: layername
    })).append($("<div>", {
        class: "col-md-1"
    })).append($("<div>", {
        class: "col-md-5",
        style: "padding-right: 0px; padding-left: 0px; margin-left: 10px;"
    }).append($("<label>", {
        class: "switch"
    }).append($("<input>", {
        id: layerid,
        type: "checkbox",
        "data-toggle": "toggle",
        "data-width": "50",
        "data-size": "xs",
        "checked": ch
    })).append($("<span>", {
        class: "slider round"
    }))));

}

function clickMenu(type) {
    if ($(type).is(":hidden")) {
        $("main > div").css("display", "none");
        $(type).fadeIn();
        $(type).fadeIn("slow");
        $(type).fadeIn("10000");
        $(type).css("display", "block");
    }

}

dashboard.chartobj = {
    el: echarts.init(document.getElementById('echart_demo')),
    optfn: function opt(legendData, xAxisData, seriesData) {
        return {
            title: {
                x: 'center',
                y: 'top',
                padding: 10,
                text: '???' + xAxisData.length + '?????????????????????',
                //subtext: 'Rainbow bar example',
                textStyle: {
                    fontSize: 36
                }
            },
            tooltip: {
                trigger: 'axis', // axis, item
                textStyle: {
                    align: 'left',
                    baseline: 'middle'
                }
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                x: 'right',
                y: 'center',
                itemSize: 24,
                itemGap: 18,
                feature: {
                    mark: {
                        show: true
                    },
                    dataView: {
                        show: false,
                        readOnly: true
                    },
                    magicType: {
                        show: true,
                        type: ['line', 'stack']
                    },
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
            legend: {
                type: 'scroll',
                orient: 'horizontal', // vertical horizontal
                padding: [60, 30],
                data: legendData //labelsTypeArr

            },
            grid: {
                y: 150
            },
            textStyle: {
                fontSize: 24
            },
            calculable: true,
            dataZoom: {
                type: 'slider',
                show: true,
                dataBackgroundColor: "red"
            },
            xAxis: [{
                type: 'category',
                data: xAxisData //result.rangeDate
            }],
            yAxis: {
                type: 'value',
                name: '??????',
                minInterval: 1,
                min: 0,
                max: function max(val) {
                    return val.max + 2;
                }
            },
            series: seriesData //seriesArr
        };
    }
};

// ???????????????????????????????????????????????????
// var option = dashboard.chartobj.optfn(dashboard.labelsTypeArr, result.rangeDate, seriesArr);
var option = {
    dataset: {
        source: [
            ['score', 'amount', 'product'],
            [89.3, 58212, 'Matcha Latte'],
            [57.1, 78254, 'Milk Tea'],
            [74.4, 41032, 'Cheese Cocoa'],
            [50.1, 12755, 'Cheese Brownie'],
            [89.7, 20145, 'Matcha Cocoa'],
            [68.1, 79146, 'Tea'],
            [19.6, 91852, 'Orange Juice'],
            [10.6, 101852, 'Lemon Juice'],
            [32.7, 20112, 'Walnut Brownie']
        ]
    },
    xAxis: {},
    yAxis: { type: 'category' },
    series: [{
        type: 'bar',
        encode: {
            // ??? "amount" ???????????? X ??????
            x: 'amount',
            // ??? "product" ???????????? Y ??????
            y: 'product'
        }
    }]
};
dashboard.chartobj.el.setOption(option);


var missionTable = function(id, json) {
    return $(id).DataTable({
        data: json,
        destroy: true, //????????????
        processing: true,
        deferRender: true, //?????????????????????????????????????????????????????????Datatables????????????
        order: [
            [0, 'desc']
        ], //td:1 ??????
        //"order": [], //?????????
        searching: false, //????????????
        stateSave: false, //????????????
        paging: true, //????????????
        //pagingType: 'full_numbers', //????????????????????????
        fixedHeader: true, //????????????
        autoWidth: true, //???????????????
        //responsive: true, //????????????
        scrollX: true,
        pageLength: 10, //????????????
        columnDefs: [
            //{searchable: false,orderable: false,targets: 0},
            {
                className: "text-center",
                targets: "_all",
                //render: isEmpty  //longdata make dom heavy
            },
            {
                visible: false,
                targets: [-1, -2, -3, -4, -5]
            }
            //{ responsivePriority: 6, targets: -1 }
        ],
        responsive: {
            "details": {
                display: $.fn.dataTable.Responsive.display.modal({
                    header: function(row) {
                        //var data = row.data();
                        return '??????';
                    }
                }),
                renderer: function(api, rowIdx, columns) {
                    var data = $.map(columns, function(col, i) {
                        return Boolean(col.data) ?
                            '<tr data-dt-row="' + col.rowIndex + '" data-dt-column="' + col.columnIndex + '">' +
                            '<td>' + col.title + ':' + '</td>' + '<td>' + col.data + '</td>' + '</tr>' :
                            false;
                    }).join('');

                    return data ?
                        $('<table class="dtr-details table table-dark table-sm table-striped table-bordered table-hover" width="100%" />').append(data) : false;
                }
            }
        },
        drawCallback: function(settings) {
            //console.log(id, 'drawCallback')
            $(id).parents("div.dataTables_wrapper").css("width", "100%")
            $(id).addClass("collapsed")
        },
        initComplete: function(settings, json) {
            //console.log(id, 'initComplete')
            //var api = new $.fn.dataTable.Api( settings );
            setTimeout(function() {
                //api.$("td").parents('table').not("collapsed").addClass("collapsed")
                //api.$("td").parents('table').parents('div.dataTables_wrapper').css("width", "100%")
                $(id).parents("div.dataTables_wrapper").css("width", "100%")
                $(id).addClass("collapsed")
            }, 200);
        },
        columns: [{
                title: "????????????",
                data: "show_id",
            },
            {
                title: "????????????",
                data: "reportUnit",
            },
            {
                title: "????????????",
                data: "address",
            },
            {
                title: "????????????",
                data: "type",
                render: disasterType
            },
            {
                title: "????????????",
                data: "type",
                render: disasterSubType
            },

            {
                title: "????????????",
                data: "createTime",
                render: convertTimeStamp
            },
            {
                title: "????????????",
                data: "reportTimes",
            },

            {
                title: "????????????",
                data: "casualties",
            },
            {
                title: "????????????",
                data: "description",
            },
            {
                title: "????????????",
                data: "handleSituation",
            },
            {
                title: "????????????",
                render: dtRowBtnMapInfo
            },
            {
                title: "????????????",
                data: "beforeFileID",
                render: dtRowDrawImage,
            },
            {
                title: "????????????",
                data: "afterFileID",
                render: dtRowDrawImage,
            }
        ],
        language: {
            "processing": "?????????...",
            "loadingRecords": "?????????...",
            "lengthMenu": "?????? _MENU_ ?????????",
            "zeroRecords": "?????????????????????",
            "info": "????????? _START_ ??? _END_ ??????????????? _TOTAL_ ???",
            "infoEmpty": "????????? 0 ??? 0 ??????????????? 0 ???",
            "infoFiltered": "(??? _MAX_ ??????????????????)",
            "infoPostFix": "",
            "search": "??????:",
            "paginate": {
                "first": "?????????",
                "previous": "?????????",
                "next": "?????????",
                "last": "????????????"
            },
            "aria": {
                "sortAscending": ": ????????????",
                "sortDescending": ": ????????????"
            }
        }
    });
}

var options = [];

$('.scrollbar-style a ').on('click', function(event) {

    var $target = $(event.currentTarget),
        val = $target.attr('data-value'),
        $inp = $target.find('input'),
        idx;

    if ((idx = options.indexOf(val)) > -1) {
        options.splice(idx, 1);
        setTimeout(function() {
            $inp.prop('checked', false)
        }, 0);
    } else {
        options.push(val);
        setTimeout(function() {
            $inp.prop('checked', true)
        }, 0);
    }

    $(event.target).blur();

    return false;
});

$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
    if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');


    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
        $('.dropdown-submenu .show').removeClass("show");
    });


    return false;
});
