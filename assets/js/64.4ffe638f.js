(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{689:function(s,t,a){"use strict";a.r(t);var n=a(16),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"正确关机的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正确关机的方法"}},[s._v("#")]),s._v(" 正确关机的方法")]),s._v(" "),a("p",[s._v("在 linux 下由于支持多终端机，还有就是程序或服务都是后台运行，如果直接采取按下电源来关机时，\n则其他的人的数据可能就此中断。")]),s._v(" "),a("p",[s._v("另外，若不正常关机，则可能造成文件系统的损坏（因为来不及将数据回写到文件中，所以有些服务的文件就会有问题）")]),s._v(" "),a("p",[s._v("所以正常情况下，要关机时需要注意：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("观察系统的使用状态")]),s._v(" "),a("ul",[a("li",[s._v("who：查看目前有谁在线")]),s._v(" "),a("li",[a("code",[s._v("netstat -a")]),s._v("：查看网络的联机状态")]),s._v(" "),a("li",[a("code",[s._v("ps -aux")]),s._v("：查看后台运行的程序")])]),s._v(" "),a("p",[s._v("这些指令可以让你稍微了解主机目前使用状态，可以判定是否可以关机了，后续会继续讲解这些指令")])]),s._v(" "),a("li",[a("p",[s._v("通知在线使用者关机的时刻")]),s._v(" "),a("p",[s._v("可以使用 shutdown 指令来达到：给在线的使用者一些时间来结束他们的工作")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sudo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" password "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" mrcode:\nShutdown scheduled "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Sat "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-10-05 03:43:32 CST, use "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'shutdown -c'")]),s._v(" to cancel.\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$\nBroadcast message from root@study.centos.mrcode "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Sat "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-10-05 03:42:32 CST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n\nThe system is going down "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" power-off at Sat "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-10-05 03:43:32 CST"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("指令命令之后，进行了一个广播消息，并告知在某个具体的时间进行关机")])]),s._v(" "),a("li",[a("p",[s._v("正确的关机指令使用")]),s._v(" "),a("p",[s._v("例如 shutdown 与 reboot 两个指令")])])]),s._v(" "),a("h2",{attrs:{id:"关机重启相关指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关机重启相关指令"}},[s._v("#")]),s._v(" 关机重启相关指令")]),s._v(" "),a("ul",[a("li",[s._v("将数据同步写入硬盘：sync")]),s._v(" "),a("li",[s._v("惯用的关机指令：shutdown")]),s._v(" "),a("li",[s._v("重启，关机：reboot、halt、poweroff")])]),s._v(" "),a("h3",{attrs:{id:"数据同步写入磁盘：sync"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据同步写入磁盘：sync"}},[s._v("#")]),s._v(" 数据同步写入磁盘：sync")]),s._v(" "),a("p",[s._v("利用缓存来加快数据的读取速度，所以有将内存中的数据强制写入磁盘这么一说，\nreboot、halt、poweroff 指令会自动调用 sync 指令")]),s._v(" "),a("h3",{attrs:{id:"惯用的关机指令-shutdown"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#惯用的关机指令-shutdown"}},[s._v("#")]),s._v(" 惯用的关机指令 shutdown")]),s._v(" "),a("p",[s._v("该指令必须使用 root 身份才能执行。")]),s._v(" "),a("p",[s._v("该命令会通知系统内的各个程序（processes）、服务等进行关闭，shutdown 可以达成以下工作：")]),s._v(" "),a("ul",[a("li",[s._v("可以自由选择关机模式：关机或重启")]),s._v(" "),a("li",[s._v("可以设定关机时间：立刻、未来的一个时间")]),s._v(" "),a("li",[s._v("可以自定义关机信息：在关机前，将设置的信息广播给在线的 user")]),s._v(" "),a("li",[s._v("可以仅发出警告信息：有时候可能需要测试、或则明确告知使用者的场景下，就可以使用该功能，但是可以不关机")])]),s._v(" "),a("p",[s._v("语法如下")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/sbin/shutdown [-krhc] [时间 [警告信息]]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("k：不要真的关机，只发送警告信息")]),s._v(" "),a("li",[s._v("r：在将系统的服务停掉之后就重新启动（常用)")]),s._v(" "),a("li",[s._v("h：将系统的服务停掉之后，立即关机（常用）")]),s._v(" "),a("li",[s._v("c：取消已经在进行的 shutdown 指令内容")]),s._v(" "),a("li",[s._v("时间：指定系统关机的时间，若没有时间，则默认 1 分钟后自动进行")])]),s._v(" "),a("p",[s._v("注意：老版本系统时间是必须加的，而新版本没有时间则默认了一个时间")]),s._v(" "),a("p",[s._v("下面来测试下")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 立刻关机，now 相当于 0 的状态")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),s._v(" -h now\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 系统在今天的 20:25 分关机，若在 20：27 分才下单此指令，则隔天关机")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),s._v(" -h "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":25\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 十分钟后关机")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),s._v(" -h +10\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 立刻重启")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),s._v(" -r now\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 30 分钟后重启，并显示后面信息给所有在线的使用者")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),s._v(" -r +30 "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'要关机了'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 只发送信息，而不关机，笔者实测这个没有看到效果，上面的都有效果")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),s._v(" -k noew "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'吓唬你的'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h3",{attrs:{id:"reboot、halt、poweroff"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reboot、halt、poweroff"}},[s._v("#")]),s._v(" reboot、halt、poweroff")]),s._v(" "),a("p",[s._v("这三个指令可以进行重新启动与关机的任务，这三个指令调用的函数库都差不多（都是调用 systemctl 这个重要的管理命令），\n使用 man reboot，会同时显示着三个指令给你看")]),s._v(" "),a("p",[s._v("一般只用记住 reboot、poweroff 指令就行了，而鸟哥一般重启时会使用以下的指令")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("reboot")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("reboot：重启")]),s._v(" "),a("li",[s._v("halt：系统停止，屏幕可能会保留系统已经停止的信息；实测就是只显示一句话，像卡死了一样")]),s._v(" "),a("li",[s._v("poweroff：系统关机")])]),s._v(" "),a("p",[s._v("更多的选项功能，请务必使用 man 去查询")]),s._v(" "),a("h3",{attrs:{id:"实际使用管理工具-systemctl-关机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实际使用管理工具-systemctl-关机"}},[s._v("#")]),s._v(" 实际使用管理工具 systemctl 关机")]),s._v(" "),a("p",[s._v("该工具很复杂，目前只需要了解有关关机的部分即可，后续章节会讲到")]),s._v(" "),a("p",[s._v("halt、poweroff、reboot、shutdown 等等都是调用 systemctl 指令的。下面是有关关机的语法")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("systemctl [指令]\n\nhalt ：系统停止，屏幕显示一句话，假死的样子\npoweroff：进入关机模式\nreboot：直接重新启动\nsuspend：进入休眠模式\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);