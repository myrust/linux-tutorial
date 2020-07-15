(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{618:function(t,e,s){"use strict";s.r(e);var v=s(16),i=Object(v.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"重点回顾"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重点回顾"}},[t._v("#")]),t._v(" 重点回顾")]),t._v(" "),s("ul",[s("li",[t._v("早期的服务管理使用 systemV 机制，通过  "),s("code",[t._v("/etc/init.d/*")]),t._v("、service、chkconfig、setup 等指令来管理服务的启动、关于、开机启动")]),t._v(" "),s("li",[t._v("从 CentOS 7.x 开始，采用 systemd 的机制，此机制最大功能为并行处理，并使用单一指令 systemctl 管理，开机速度加快")]),t._v(" "),s("li",[t._v("systemd 将各服务定义为 unit，细分为 service、socket、target、path、timer 等不同的类型，方便管理与维护")]),t._v(" "),s("li",[t._v("启动、关闭、重新启动的方式为："),s("code",[t._v("systemctl [start|top|restart] unit.service")])]),t._v(" "),s("li",[t._v("设置开启启动/取消开机启动的方式为："),s("code",[t._v("systemctl [enable|disable] unit.service")])]),t._v(" "),s("li",[t._v("查询系统所有启动的服务用 "),s("code",[t._v("systemctl list-units --type=service")]),t._v(" 查询所有服务（包含不启动）使用 "),s("code",[t._v("systemctl list-units-files --type=service")])]),t._v(" "),s("li",[t._v("systemd 取消了以前的 runlevel 概念（虽然还有有兼容的 target），转而使用不同的 target 操作环境。常见操作环境为 "),s("code",[t._v("multi-user.target")]),t._v(" 与 "),s("code",[t._v("graphical.target")]),t._v("。\n"),s("ul",[s("li",[t._v("不重新启动切换操作环境使用 "),s("code",[t._v("systemctl isolate unit.target")]),t._v(" 。")]),t._v(" "),s("li",[t._v("设置默认操作环境使用 "),s("code",[t._v("systemctl set-default unit.target")])])])]),t._v(" "),s("li",[t._v("systemctl 系统默认的配置文件主要在 "),s("code",[t._v("/usr/lib/systemd/system")]),t._v(" ，需要修改或添加自行设计时，则建议放在 "),s("code",[t._v("/etc/systemd/system")]),t._v(" 目录下")]),t._v(" "),s("li",[t._v("管理员应使用 "),s("code",[t._v("man systemd.unit、man systemd.service、man systemd.timer")]),t._v(" 查询 "),s("code",[t._v("/etc/systemd/system/")]),t._v(" 下配置文件的语法，并使用 "),s("code",[t._v("systemctl daemon-reload")]),t._v(" 让配置文件生效")]),t._v(" "),s("li",[t._v("除了 atd 与 crond 之外，还可以通过 systemd.timer （timers.target）的功能，来使用 systemd 的时间管理功能")]),t._v(" "),s("li",[t._v("一些不需要的服务可以关闭")])])])}),[],!1,null,null,null);e.default=i.exports}}]);