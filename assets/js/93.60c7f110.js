(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{655:function(_,v,s){"use strict";s.r(v);var t=s(16),e=Object(t.a)({},(function(){var _=this,v=_.$createElement,s=_._self._c||v;return s("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[s("h1",{attrs:{id:"本章习题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本章习题"}},[_._v("#")]),_._v(" 本章习题")]),_._v(" "),s("p",[_._v("情景模拟题 1：由于 "),s("code",[_._v("~/.bash_history")]),_._v(" 仅能记录指令，我想要在每次注销时都记录时间，并将后续的指令 50 笔记录下来，要怎么做？")]),_._v(" "),s("ul",[s("li",[_._v("目标：了解 history，并通过数据流重导向的方式记录历史命令")]),_._v(" "),s("li",[_._v("前提：需要了解本章的数据流重导向，以及了解 bash 的各个环境配置文件信息")])]),_._v(" "),s("p",[_._v("这里其实很简单，并不是要记录每条指令执行的时间，而是每次注销时的时间")]),_._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[_._v("# 退出的钩子在 ~./bash_logout")]),_._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("[")]),_._v("mrcode@study tmp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("]")]),_._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[_._v("vi")]),_._v(" ~/.bash_logout \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[_._v("# 先把当前时间写入到文件第一行")]),_._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[_._v("date")]),_._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[_._v(">")]),_._v(" ~/.myhistory \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[_._v("# 再将最新 50 条指令追加写入到文件")]),_._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[_._v("history")]),_._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[_._v("50")]),_._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[_._v(">>")]),_._v(" ~/.myhistory\n"),s("span",{pre:!0,attrs:{class:"token function"}},[_._v("clear")]),_._v("\n\n")])]),_._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[_._v("1")]),s("br"),s("span",{staticClass:"line-number"},[_._v("2")]),s("br"),s("span",{staticClass:"line-number"},[_._v("3")]),s("br"),s("span",{staticClass:"line-number"},[_._v("4")]),s("br"),s("span",{staticClass:"line-number"},[_._v("5")]),s("br"),s("span",{staticClass:"line-number"},[_._v("6")]),s("br"),s("span",{staticClass:"line-number"},[_._v("7")]),s("br"),s("span",{staticClass:"line-number"},[_._v("8")]),s("br")])]),s("p",[_._v("简答题：")]),_._v(" "),s("ul",[s("li",[s("p",[_._v("在 Linux 上可以找到那些 shell（举出三个）？那个文件记录可用的 shell？而 Linux 预设的 shell 是？")]),_._v(" "),s("ol",[s("li",[_._v("/bin/bash、/bin/tcsh、/bin/csh")]),_._v(" "),s("li",[_._v("/etc/shells")]),_._v(" "),s("li",[_._v("/bin/bash")])])]),_._v(" "),s("li",[s("p",[_._v("你输入一串指令之后，发现前面写的一长串数据是错误的，你想要删除游标所在处到最前面的指令串内容，应该如何处理？")]),_._v(" "),s("p",[_._v("使用 ctrl + u 删除")])]),_._v(" "),s("li",[s("p",[_._v("在 shell 环境下，有个提示字符（prompt），可用修改吗？要修改什么？默认的提示字符内容是？")]),_._v(" "),s("p",[_._v("可用修改的，修改 PS1 变量，默认内容为 "),s("code",[_._v("[\\u@\\h \\W]\\$")])])]),_._v(" "),s("li",[s("p",[_._v("如何显示 HOME 这个变量")]),_._v(" "),s("p",[s("code",[_._v("echo ${HOME}")])])]),_._v(" "),s("li",[s("p",[_._v("如何得知目前的所有变量与环境变量的设置？")]),_._v(" "),s("p",[_._v("环境变量用 env 或 export ，使用 set 查看所有的环境变量")])]),_._v(" "),s("li",[s("p",[_._v("是否可以设置一个变量名称为 3myhome?")]),_._v(" "),s("p",[_._v("不可以，变量名不可以以数值作为开头")])]),_._v(" "),s("li",[s("p",[_._v("在这样的练习中 "),s("code",[_._v("A=B 且 B=C")]),_._v("，若下达 "),s("code",[_._v("unset $A")]),_._v(" 则取消的变量是 A 还是 B？")]),_._v(" "),s("p",[_._v("被取消的是 B，因为 unset $A 相当于 unset B，所以取消的是 B，A 会继续存在")])]),_._v(" "),s("li",[s("p",[_._v("如何取消变量与命令别名的内容？")]),_._v(" "),s("p",[_._v("使用 unset 及 unalias")])]),_._v(" "),s("li",[s("p",[_._v("如何设置一个变量名称为 name 内容为 It's my name?")]),_._v(" "),s("p",[s("code",[_._v('name="it\'s my name"')]),_._v(" 或 "),s("code",[_._v("name=it\\‘s\\my\\name")])])]),_._v(" "),s("li",[s("p",[_._v("bash 环境配置文件主要分为哪两种类型的读取？分别读取哪些重要文件？")]),_._v(" "),s("ul",[s("li",[_._v("login shell：主要读取 /etc/profile 以及 "),s("code",[_._v("~/.bash_profile")])]),_._v(" "),s("li",[_._v("Non-login shell：主要读取 "),s("code",[_._v("~/.bashrc")])])])]),_._v(" "),s("li",[s("p",[_._v("CentOS 7.x 的 man page 的路径配置文件名？")]),_._v(" "),s("p",[_._v("/etc/man_db.conf")])]),_._v(" "),s("li",[s("p",[_._v("说明  "),s("code",[_._v('’、"、')]),_._v("与 `在变量定义中的用途")]),_._v(" "),s("ul",[s("li",[s("code",[_._v("'")]),_._v("：表示普通字符串")]),_._v(" "),s("li",[s("code",[_._v('"')]),_._v("：具有变量上下文属性")]),_._v(" "),s("li",[_._v("`：被包裹的指令可以先被执行")])])]),_._v(" "),s("li",[s("p",[_._v("跳脱符号 "),s("code",[_._v("\\")]),_._v("有什么特殊用途")]),_._v(" "),s("p",[_._v("可以用来跳过特殊字符，例如 Enter、$ 等，使其成为一般字符")])]),_._v(" "),s("li",[s("p",[_._v("连续命令中，"),s("code",[_._v(";、$$、||")]),_._v(" 有何不同？")]),_._v(" "),s("ul",[s("li",[s("code",[_._v(";")]),_._v("：分别让两个 command 连续执行，不考虑 command1 的输出状态")]),_._v(" "),s("li",[s("code",[_._v("$$")]),_._v("：前一个指令必须没有错误信息，回传值为 0，则 command2 才会执行")]),_._v(" "),s("li",[s("code",[_._v("||")]),_._v("：前一个指令必须有错误信息，与 && 相反")])])]),_._v(" "),s("li",[s("p",[_._v("如何将 last 的结果中，独立出账户，并且印出曾经登录过的账户？")]),_._v(" "),s("p",[_._v("​\t"),s("code",[_._v("last | cut -d ' ' -f 1 | sort | uniq")])])]),_._v(" "),s("li",[s("p",[_._v("请问 "),s("code",[_._v("fool && foo2 | foo3 > foo4")]),_._v(" 这个指令串中， foo1、foo2、foo3、foo4 是指令还是文件？整个指令的意义是？")]),_._v(" "),s("ul",[s("li",[_._v("Foo1、foo2、foo3 是指令，foo4 是文件")]),_._v(" "),s("li",[_._v("若 foo1 执行错误时，则该指令串结束")]),_._v(" "),s("li",[_._v("若 foo1 执行成功实，则执行 foo2 | foo3 > foo4,其中\n"),s("ul",[s("li",[_._v("foo2 的 stdout 结果传给 foo3 处理")]),_._v(" "),s("li",[_._v("Foo3 将来自 foo2 的 stdout 当成 stdin，处理完成后，将数据流重导向 foo4 这个装置/文件")])])])])]),_._v(" "),s("li",[s("p",[_._v("如何秀出在 /bin 下任何以 a 开头的文件名详细资料")]),_._v(" "),s("p",[s("code",[_._v("ls -ld /bin/a*")])])]),_._v(" "),s("li",[s("p",[_._v("如何秀出 /bin 下，文件名为 4 个字符的文件")]),_._v(" "),s("p",[s("code",[_._v("ls -ld /bin/????")])])]),_._v(" "),s("li",[s("p",[_._v("如何秀出 /bin 下，文件名开头不是 a-d 的文件")]),_._v(" "),s("p",[s("code",[_._v("ls -ld /etc/[^a-d]*")])])]),_._v(" "),s("li",[s("p",[_._v("想要让终端机接口的登录提示字符修改成我自己喜好的模样，需要修改哪个文件？")]),_._v(" "),s("p",[s("code",[_._v("/etc/issue")])])]),_._v(" "),s("li",[s("p",[_._v("接上题，如果我是想要使用者登录后，才显示欢迎信息，需要修改哪个文件？")]),_._v(" "),s("p",[s("code",[_._v("/etc/motd")])])])])])}),[],!1,null,null,null);v.default=e.exports}}]);