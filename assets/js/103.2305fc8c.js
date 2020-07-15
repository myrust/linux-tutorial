(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{644:function(s,a,t){"use strict";t.r(a);var n=t(16),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"简单的-shell-script-练习"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简单的-shell-script-练习"}},[s._v("#")]),s._v(" 简单的 Shell Script 练习")]),s._v(" "),t("p",[s._v("本章 范例中，实现的方式很多，建议先自行编写，再参考例子，才能加深概念")]),s._v(" "),t("h2",{attrs:{id:"简单范例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简单范例"}},[s._v("#")]),s._v(" 简单范例")]),s._v(" "),t("p",[s._v("本小节范例在很多脚本程序中都会用到，而且简单")]),s._v(" "),t("h3",{attrs:{id:"对谈式脚本：变量类容由用户决定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对谈式脚本：变量类容由用户决定"}},[s._v("#")]),s._v(" 对谈式脚本：变量类容由用户决定")]),s._v(" "),t("p",[s._v("在很多场景中，需要用户输入一些内容，让程序可以顺利运行。比如，安装软件时，让用户选择安装目录；")]),s._v(" "),t("p",[t("a",{attrs:{href:"../10/02.mdl#read"}},[s._v("BASH 中的变量读取指令 read")]),s._v(" ，那么以 read 指令的用途实现：")]),s._v(" "),t("ol",[t("li",[s._v("用户输入 first name")]),s._v(" "),t("li",[s._v("用户输入 last name")]),s._v(" "),t("li",[s._v("最后在屏幕上显示：You full name is：xxx")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" read.sh\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" -p "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'first name: '")]),s._v(" firstName\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" -p "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'last name: '")]),s._v(" lastName\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"You full name: '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${firstName}")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${lastName}")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 增加执行权限")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" a+x read.sh\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ ./read.sh \nfirst name: zhu\nlast name: mrcode\nYou full name: zhumrcode\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("下面是书上的程序")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" showname.sh\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Program：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#\t用户输入姓名，程序显示出输入的姓名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# History：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#\t2020/01/19\tmrcode\tfirst release")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" -p "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Please input you first name: "')]),s._v(" firstname\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提示使用者输入")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" -p "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Please input you last name: "')]),s._v(" lastname\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提示使用者输入")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -e 开启反斜杠转移的特殊字符显示，比如下面的 \\n 换行显示")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e “"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("n Your full name is: "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${firstname}")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${lastname}")]),s._v("”\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 结果由屏幕输出\t")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行结果")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ ./showname.sh \nPlease input you first name: zhu\nPlease input you last name: mrcode\n\n Your full name is: zhumrcode\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("笔者小结：可以看到上面这个脚本，增加了一个良好的习惯，就是脚本说明等信息")]),s._v(" "),t("h3",{attrs:{id:"随日期变化：利用-date-进行文件的建立"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#随日期变化：利用-date-进行文件的建立"}},[s._v("#")]),s._v(" 随日期变化：利用 date 进行文件的建立")]),s._v(" "),t("p",[s._v("考虑一个场景，每天备份 MySql 的数据文件，备份文件名以当天日期命名，如 "),t("code",[s._v("backup.2020-01-19.data")]),s._v(".")]),s._v(" "),t("p",[s._v("重点是 "),t("code",[s._v("2020-01-19")]),s._v(" 是怎么来的？范例需求如下：")]),s._v(" "),t("ol",[t("li",[s._v("用户输入一个文件名前缀")]),s._v(" "),t("li",[s._v("创建出以日期为名的三个空文件（通过 touch 指令），生成 前天、昨天、今天 日期，及格式为：filename_2020-01-19")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" create_3_filename.sh\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Program: ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#       用户输入文件名前缀，生成前天、昨天、今天的三个空文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# History：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#       2020/01/19      mrcode          first release")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"将使用 ‘touch’ 命令创建 3 个文件"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" -p "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"请输入文件名："')]),s._v(" fileuser\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 容错，使用变量功能判定与赋值默认值")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("filename")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${fileuser"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":-")]),s._v('"filename"}')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# date 命令的使用")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("date1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" --date"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2 days ago'")]),s._v(" +%Y-%m-%d"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 两天前的日期，并格式化显示")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("date2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" --date"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1 days ago'")]),s._v(" +%Y-%m-%d"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\t\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("date3")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +%Y-%m-%d"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("file1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${filename}")]),s._v("_"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${date1}")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("file2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${filename}")]),s._v("_"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${date2}")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("file3")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${filename}")]),s._v("_"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${date3}")]),s._v('"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在这里其实可以直接拼接文件名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${file1}")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${file2}")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${file3}")]),s._v('"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br")])]),t("p",[s._v("这里使用了变量的赋值相关功能，详参考："),t("RouterLink",{attrs:{to:"/tutorial-basis/10/02.html#变量的测试与内容替换"}},[s._v("变量功能")])],1),s._v(" "),t("p",[s._v("运行测试")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ ./create_3_filename.sh \n将使用 ‘touch’ 命令创建 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" 个文件\n请输入文件名：mrcode\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ ll\n总用量 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v("\n-rwxrwxr-x. "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" mrcode mrcode "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("677")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("月  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":15 create_3_filename.sh\n-rwxrwxr-x. "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" mrcode mrcode "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("239")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("月  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":25 hello.sh\n-rw-rw-r--. "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" mrcode mrcode   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("月  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":15 mrcode_2020-01-17\n-rw-rw-r--. "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" mrcode mrcode   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("月  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":15 mrcode_2020-01-18\n-rw-rw-r--. "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" mrcode mrcode   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("月  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":15 mrcode_2020-01-19\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 一次正常输入文件名，一次直接按 enter 按键完成输入，查看是否达到默认赋值等功能")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h3",{attrs:{id:"数值运算：简单的加减乘除"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数值运算：简单的加减乘除"}},[s._v("#")]),s._v(" 数值运算：简单的加减乘除")]),s._v(" "),t("p",[s._v("在变量功能课程中讲解到，需要使用 "),t("RouterLink",{attrs:{to:"/tutorial-basis/10/02.html#declare-、-typeset"}},[s._v("declare")]),s._v(" 来定义变量为正数才能进行计算，此外，也可以利用 "),t("code",[s._v("$((计算表达式))")]),s._v(" 来进行数值运算，可惜的是，bashe shell 预设仅支持整数数据。")],1),s._v(" "),t("p",[s._v("范例需求：")]),s._v(" "),t("ol",[t("li",[s._v("要求用户输入两个变量")]),s._v(" "),t("li",[s._v("将两个变量相乘后输出到屏幕")])]),s._v(" "),t("p",[s._v("下面是笔者自己写的")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Program:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#       用户输入 2 个整数；输出相乘后的结果")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# History：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#       2020/01/19      mrcode          first release")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" -p "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'请输入第一个整数：'")]),s._v(" intUser1\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" -p "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'请输入第二个整数：'")]),s._v(" intUser2\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("declare")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("int1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${intUser1}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("declare")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("int2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${intUser2}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${int1}")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${int2}")]),s._v(" = "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$((")]),s._v("int1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("int2"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("))")])]),s._v('"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("测试输出")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ ./multiplying.sh \n请输入第一个整数：2\n请输入第二个整数：3\n\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("其实用下面这样的方式来定义和输出")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" -p "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'请输入第一个整数：'")]),s._v(" intUser1\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" -p "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'请输入第二个整数：'")]),s._v(" intUser2\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("total")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$((")]),s._v("${intUser1}"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("${intUser2}"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("))")])]),s._v("\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用 $((运算内容)) 方式计算")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# declare -i total=${intUser1}*${intUser2}\t\t# 还可以使用此种方式")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${intUser1}")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${intUser2}")]),s._v(" = "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${total}")]),s._v('"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("建议用 "),t("code",[s._v("var = $((计算内容))")]),s._v(" 方式来计算，此种方式简单。比如")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 取余数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$((")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("))")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 对于小数，可以使用 bc 指令来协助")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$((")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("))")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3/2"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bc")]),s._v(" -l\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.50000000000000000000")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"数值运算：通过-bc-计算-pi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数值运算：通过-bc-计算-pi"}},[s._v("#")]),s._v(" 数值运算：通过 bc 计算 pi")]),s._v(" "),t("p",[s._v("bc 提供了一个计算 pi 的公式： "),t("code",[s._v('pi=$(echo "scale=10; 4*a(1)" | bc -l)')]),s._v("，此计算公式可以通过 "),t("code",[s._v("man bc | grep 'pi'")]),s._v(" 定位到相关文档。这里的 scale 是计算 pi 的精度，越高则利用到的 cpu 资源越多，计算时间越长。")]),s._v(" "),t("p",[s._v("好了，了解到怎么启用 pi 计算，这里要求用户输入 scale 进行计算 pi 值，并输出显示")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" cal_pi.sh\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Program：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#\t用户输入 scale 的值，程序计算出 scale 精度的 pi 值，并显示")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# History：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#\t2020/01/19\t\tmrcode\t\tfirst release")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# PATH 常规赋值")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" -p "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'请输入 scale 的值（10~10000）？'")]),s._v(" checking\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("num")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${checking"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":-")]),s._v('"10"}')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("开始计算 pi 的值'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scale='),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${num}")]),s._v('; 4*a(1)"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bc")]),s._v(" -l\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("p",[s._v("测试输出")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ ./cal_pi.sh \n请输入 scale 的值（10~10000）？20\n\n开始计算 pi 的值\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.14159265358979323844")]),s._v("\n\nreal\t0m0.002s\nuser\t0m0.000s\nsys\t0m0.001s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h2",{attrs:{id:"script-的执行方式差异（source、sh-script、-script）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#script-的执行方式差异（source、sh-script、-script）"}},[s._v("#")]),s._v(" script 的执行方式差异（source、sh script、./script）")]),s._v(" "),t("p",[s._v("不同的方式执行执行会造成不一样的结果，尤其影响 bash 的环境很大。")]),s._v(" "),t("h3",{attrs:{id:"利用直接执行的方式来执行-script：在子程序中执行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#利用直接执行的方式来执行-script：在子程序中执行"}},[s._v("#")]),s._v(" 利用直接执行的方式来执行 script：在子程序中执行")]),s._v(" "),t("p",[t("RouterLink",{attrs:{to:"/tutorial-basis/12/01.html#第一支-script-的编写与执行"}},[s._v("直接指令下达")]),s._v(" 或者是利用 bash（sh）来运行脚本时，都会使用一个新的 bash 环境来执行脚本的指令。也就是说这种方式执行是在子程序的 bash 内执行的。在第十章 BASH 内谈到 "),t("RouterLink",{attrs:{to:"/tutorial-basis/10/02.html"}},[t("code",[s._v("export")]),s._v(" 自定义变量转成环境变量")]),s._v(" 的功能时，重点在于：当子程序完成后，子程序内的各项变量或动作将会结束儿不会传回到父程序中。")],1),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行上面范例的姓名打印")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ ./showname.sh \nPlease input you first name: m\nPlease input you last name: q\n\n Your full name is: mq\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#  echo -e "\\n Your full name is: ${firstname}${lastname}" 打印出来了信息')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${fristname}")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${lastname}")]),s._v("\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 但是在父程序中却没有信息")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"利用-source-来执行脚本：在父程序中执行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#利用-source-来执行脚本：在父程序中执行"}},[s._v("#")]),s._v(" 利用 source 来执行脚本：在父程序中执行")]),s._v(" "),t("p",[s._v("同样的测试代码，使用 source 就不一样了")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" showname.sh \nPlease input you first name: m\nPlease input you last name: q\n\n Your full name is: mq\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${firstname}")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${lastname}")]),s._v("\nmq\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在父程序中还能获取到")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);