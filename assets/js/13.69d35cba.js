(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{483:function(t,s,n){t.exports=n.p+"assets/img/image-20191103130427710.3673088f.png"},484:function(t,s,n){t.exports=n.p+"assets/img/image-20191103131556988.c2d67e41.png"},485:function(t,s,n){t.exports=n.p+"assets/img/image-20191103131840227.969aae3f.png"},536:function(t,s,n){"use strict";n.r(s);var a=n(16),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vi-的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vi-的使用"}},[t._v("#")]),t._v(" vi 的使用")]),t._v(" "),a("p",[t._v("基本上 vi 共分为三种模式：一般指令模式、编辑模式、指令列命令模式")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("一般指令模式（command mode）")]),t._v(" "),a("p",[t._v("以 vi 打开一个文件就直接进入一般指令模式了（默认模式，也简称一般模式）。")]),t._v(" "),a("p",[t._v("在该模式中，可以使用「上下左右」按键移动光标，可以使用「删除字符」或「删除整列」来处理文件内容，也可以使用「复制、粘贴」")])]),t._v(" "),a("li",[a("p",[t._v("编辑模式（insert mode）")]),t._v(" "),a("p",[t._v("在一般模式中可以进行删除、复制、粘贴等动作，但是无法编辑文件内容。")]),t._v(" "),a("p",[t._v("需要按下「i、I、o、O、a、A、r、R」等任意按键后才会进入编辑模式，通常会在左下方出现 INSERT 或 REPLACE 的字样，可以通过 esc 按键退出编辑模式，回到一般指令模式")])]),t._v(" "),a("li",[a("p",[t._v("指令列命令模式（commadn-line mode）")]),t._v(" "),a("p",[t._v("在一般模式中，输入「:、/、?」任意字符，则光标会移动到最底下的一列。")]),t._v(" "),a("p",[t._v("在这个模式中，可以提供你搜索、读取、存盘、大量取代字符、离开 vi、显示行号等功能")])])]),t._v(" "),a("p",[t._v("简单说，可以将这三个模式想象成下面的图标来表示")]),t._v(" "),a("p",[a("img",{attrs:{src:n(483),alt:"image-20191103130427710"}})]),t._v(" "),a("p",[t._v("注意这里互换，编辑模式不能直接换到指令列模式！")]),t._v(" "),a("h2",{attrs:{id:"简易执行范例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简易执行范例"}},[t._v("#")]),t._v(" 简易执行范例")]),t._v(" "),a("p",[t._v("建立一个名为 welcome.txt 的文件")]),t._v(" "),a("ol",[a("li",[t._v("进入一般指令模式")])]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mrcode@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" welcome.txt\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("![image-20191103131112645](./assets/image-20191103131112645.png)\n\n如果开启的文件是一个已存在的，则左下角的 New File 则会变成 readonly 字样\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[t._v("按下 i 进入编辑模式")]),t._v(" "),a("p",[a("img",{attrs:{src:n(484),alt:"image-20191103131556988"}})])]),t._v(" "),a("li",[a("p",[t._v("按下 esc 按钮回到一般指令模式")])]),t._v(" "),a("li",[a("p",[t._v("进入指令列模式，文件存储并离开 vi 环境")]),t._v(" "),a("p",[a("img",{attrs:{src:n(485),alt:"image-20191103131840227"}})])])]),t._v(" "),a("p",[t._v("此时 welcome.txt 就已经建立起来了，需要注意的是，如果文件权限不对，例如为 -r--r--r-- 时，那么可能无法写入，可以使用强制写入方式（:wq!），前提是："),a("em",[t._v("你的权限可以改变该文件的权限时")])]),t._v(" "),a("h2",{attrs:{id:"按键说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#按键说明"}},[t._v("#")]),t._v(" 按键说明")]),t._v(" "),a("h3",{attrs:{id:"第一部分：一般指令模式可用的按钮说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一部分：一般指令模式可用的按钮说明"}},[t._v("#")]),t._v(" 第一部分：一般指令模式可用的按钮说明")]),t._v(" "),a("p",[t._v("移动光标的方法")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("按键")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("h 或 左箭头 ←")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("光标向左移动一个字符")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("j 或 下箭头 ↓")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("光标向下移动一个字符")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("k 或 向上箭头 ↑")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("光标向上移动一个字符")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("i 或 右箭头 →")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("光标向右移动一个字符")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("特别说明")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("hjki 在键盘上是排列在一起 的，适合移动光标，移动多个的话可以加上数值再按方向键，比如 30↓ ，向下移动 30 行（注意是一般指令模式下）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ctrl + f")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("常用")]),t._v("；向下移动一页，相当于 Page Down 按键")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ctrl + b")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("常用")]),t._v("；向上移动一页")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ctrl + d")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("向下移动半页")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ctrl + u")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("向上移动半页")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("光标移动到非空格符的下一列")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("光标移动到非空格符的上一列")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("n<space>")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("n 表示数字，如按下 20 ，再按空格键，光标会向右移动 n 个字符")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("0 或功能键 Home")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("常用")]),t._v("；移动到这一行的最前面字自字符处")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("$")]),t._v("或功能键 End")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("常用")]),t._v("；移动到这一行的后面字符处")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("H")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("光标移动到这个屏幕的最上方那一行的第一个字符")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("M")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("光标移动到这个屏幕的中央那一行的第一个字符")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("L")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("光标移动到这个屏幕的最下方那一行的第一个字符")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("G")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("常用")]),t._v("；移动到这个文件的最后一行")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("nG")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("n  为数字，移动到这个文件的第 n 行。可配合 "),a("code",[t._v(":set nu")]),t._v(" 显示行号，再移动到具体的行")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("gg")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("常用")]),t._v("；移动到这个文件的第一行，相当于 1G 的功能")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("n<Enter>")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("常用")]),t._v("；n 为数字，光标向下移动 n 行")])])])]),t._v(" "),a("p",[t._v("搜索与取代")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("按键")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("/word")]),t._v(" "),a("td",[a("strong",[t._v("常用")]),t._v("；向光标之下寻找一个名称为 word 的字符串")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("?word")]),t._v(" "),a("td",[t._v("向光标之上寻找 word")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("n")]),t._v(" "),a("td",[t._v("n 为键盘的 n 按键。代表「重复前一个搜索动作」比如找到多个搜索结果的时候，可以按 n 来跳到下一个下一个")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("N")]),t._v(" "),a("td",[t._v("大写的 N 按键，与 n 相反")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("说明")]),t._v(" "),a("td",[t._v("使用 /word 配合 n 或 N 是非常方便的，可以让你重复的找到一些你搜寻的关键词")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v(":n1，n2s/word1/word2/g")])]),t._v(" "),a("td",[a("strong",[t._v("常用")]),t._v("；n1 与 n2 为数值。在第 n1 与 n2 列之间查找 word1 这个字符串，并将该字符串替换为 word2；比如："),a("code",[t._v(":100,200s/mrcode/MRCODE/g")]),t._v(" 就是在 100 到 200 列之间寻找 mrcode 并替换成大写的")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("1,$s/word1/word2/g")])]),t._v(" "),a("td",[a("strong",[t._v("常用")]),t._v("；从第一行到最后一行，将 word1 替换成 word2")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("1,$s/word1/word2/gc")])]),t._v(" "),a("td",[a("strong",[t._v("常用")]),t._v("；从第一行到最后一行，将 word1 替换为 word2，在替换前，显示字符让用户确认（confirm）是否需要替换")])])])]),t._v(" "),a("p",[t._v("删除、复制、粘贴")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("按键")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("x,X")]),t._v(" "),a("td",[a("strong",[t._v("常用")]),t._v("；在一行字当中，x 为向后删除一个字符（相当于 del 按键），X 向前删除一个字符")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("nx")]),t._v(" "),a("td",[t._v("n 为数值，连续向后删除 n 个字符")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("dd")]),t._v(" "),a("td",[a("strong",[t._v("常用")]),t._v("；删除光标所在列（这一行文本）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ndd")]),t._v(" "),a("td",[a("strong",[t._v("常用")]),t._v("；删除光标所在的向下 n 行，例如 20dd 则是删除 20 行")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("d1G")]),t._v(" "),a("td",[t._v("删除光标所在到第一行的所有数据")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("dG")]),t._v(" "),a("td",[t._v("删除光标所在到最后一行的所有数据")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("d$")]),t._v(" "),a("td",[t._v("删除光标所在处，到该行最后一个字符")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("d0")]),t._v(" "),a("td",[t._v("删除光标所在处，到该行最前面一个字符，这个 0 就是数值 0")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("yy")]),t._v(" "),a("td",[a("strong",[t._v("常用")]),t._v("；复制光标所在处的行")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("nyy")]),t._v(" "),a("td",[a("strong",[t._v("常用")]),t._v("；n 为数值，复制光标所在的向下 n 行")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("y1G")]),t._v(" "),a("td",[t._v("复制光标所在处到第一行的所有数据")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("yG")]),t._v(" "),a("td",[t._v("复制光标所在处到最后一行的所有数据")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("y0")]),t._v(" "),a("td",[t._v("复制光标所在处那个字符到该行第一个字符的数据")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("y$")]),t._v(" "),a("td",[t._v("复制光标所在处那个字符到该行最后一个字符的数据")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("p,P")]),t._v(" "),a("td",[a("strong",[t._v("常用")]),t._v("；p 为将以复制的数据在光标的下一行粘贴上，P 则为贴在光标的上一行。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("J")]),t._v(" "),a("td",[t._v("将光标所在行与下一行的数据结合成同一行")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("c")]),t._v(" "),a("td",[t._v("重复删除多个数据，例如向下删除 10 行，10cj")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("u")]),t._v(" "),a("td",[a("strong",[t._v("常用")]),t._v("；复原前一个动作")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ctrl + r")]),t._v(" "),a("td",[a("strong",[t._v("常用")]),t._v("；重做上一个动作")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("说明")]),t._v(" "),a("td",[t._v("u 与 ctrl + r 是很常用的执行，一个是复原，一个是重做一次")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v(".")]),t._v(" "),a("td",[a("strong",[t._v("常用")]),t._v("；小数点，重复前一个动作。例如先要重复删除、重复粘贴等，按下小数点就可以了")])])])]),t._v(" "),a("h3",{attrs:{id:"第二部分：一般指令模式切换到编辑模式可用的按键说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二部分：一般指令模式切换到编辑模式可用的按键说明"}},[t._v("#")]),t._v(" 第二部分：一般指令模式切换到编辑模式可用的按键说明")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("按键")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("i,I")]),t._v(" "),a("td",[a("strong",[t._v("常用")]),t._v("；进入插入模式（insert mode）：i 从当前光标所在处插入，I 从当前所在行的第一个非空格符号处插入")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("a,A")]),t._v(" "),a("td",[a("strong",[t._v("常用")]),t._v("；进入插入模式，a 从当前光标所在的下一个字符开始插入，A 从光标所在行的最后一个字符处开始插入")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("o,O")]),t._v(" "),a("td",[a("strong",[t._v("常用")]),t._v("；进入插入模式，o 从当前光标所在的下一行插入新行，O 从光标所在处的上一行插入新的行")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("r,R")]),t._v(" "),a("td",[a("strong",[t._v("常用")]),t._v("；进入取代模式（Replace mode）：r 只会取代光标所在的那个字符一次；R 会一直取代光标所在的文字，直到按下 ESC 为止")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("说明")]),t._v(" "),a("td",[t._v("上面这些按键中，在 vi 画面左下角会出现  ---INSERT--- 或 ---REPLACE--- 的字样。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Esc")]),t._v(" "),a("td",[a("strong",[t._v("常用")]),t._v("；退出编辑模式，回到一般指令模式中")])])])]),t._v(" "),a("h3",{attrs:{id:"第三部分：一般指令模式切换到指令模式的可用按钮说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三部分：一般指令模式切换到指令模式的可用按钮说明"}},[t._v("#")]),t._v(" 第三部分：一般指令模式切换到指令模式的可用按钮说明")]),t._v(" "),a("p",[t._v("指令列模式的存储、离开等指令")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("按键")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v(":w")]),t._v(" "),a("td",[a("strong",[t._v("常用")]),t._v("；将编辑的数据写入硬盘文件中")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v(":w!")]),t._v(" "),a("td",[t._v("若文件属性为「只读」时，强制写入该文件。不过，到底能不能写入，还是跟你对该文件的文件权限有关")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v(":q")]),t._v(" "),a("td",[a("strong",[t._v("常用")]),t._v("；离开 vi")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v(":q!")]),t._v(" "),a("td",[t._v("不想存储，强制离开")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("说明")]),t._v(" "),a("td",[t._v("！惊叹号在 vi 中，常常具有「强制」的意思")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v(":wq")]),t._v(" "),a("td",[a("strong",[t._v("常用")]),t._v("；存储后离开，后面加 ！则表示强制存储后离开")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ZZ")]),t._v(" "),a("td",[t._v("若文件没有改动，则不存储离开，若文件已经被改动过，则存储后离开")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v(":w[filename]")]),t._v(" "),a("td",[t._v("将编辑的数据存成另一个文件，类似另存为")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v(":r[rilename]")]),t._v(" "),a("td",[t._v("在编辑的数据中，读取另一个文件的数据。即将 filename 文件内容加到光标所在处后面")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v(":n1,n2 w [filename]")]),t._v(" "),a("td",[t._v("将 n1 到 n2 的内容存储成 filename 这个文件。（n 说的是行数把？）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v(":! command")]),t._v(" "),a("td",[t._v("暂时离开 vi 到指令模式下执行 comman 的显示结果！例如 「:!  ls  /home」即可再 vi 中查看 /home 下以 ls输出的文件信息；这个笔者感觉很常用，在编辑中往往会忘记路径啥的，通过这个就可以查看了")])])])]),t._v(" "),a("p",[t._v("vi 环境的变更")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("按键")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v(":set nu")]),t._v(" "),a("td",[t._v("在每一行最前面显示行号")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v(":set nonu")]),t._v(" "),a("td",[t._v("取消行号")])])])]),t._v(" "),a("p",[t._v("特别注意，在 vi 中 「数字」是很有意义的，数字通常代表重复做几次的意思，也有可能是代表去到第几个什么什么的意思。")]),t._v(" "),a("p",[t._v("比如：要删除 50 行，使用 「50dd」；向下移动 20 行，使用 「20j」或「20↓」")]),t._v(" "),a("p",[t._v("会上面这些指令就已经很厉害了，因为常用到的指令也只有不到一半，除了上面列举到常用的之外，其他的都不用死记硬背，用到再查询即可")]),t._v(" "),a("h2",{attrs:{id:"一个案例练习"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一个案例练习"}},[t._v("#")]),t._v(" 一个案例练习")]),t._v(" "),a("p",[t._v("http://linux.vbird.org/linux_basic/0310vi/man_db.conf 可以使用这个文件来测试")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mrcode@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /tmp/\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mrcode@study tmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" vitest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" vitest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开启文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mrcode@study vitest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" man_db.conf\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 按 i 进入插入模式，把上面网址里面的内容复制，然后粘贴到这里")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 按 Esc 键，回到一般指令模式，并输入「:wq」保存并退出")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 由于该虚拟机还没有网络，不知道怎么下载文件，上面间接的完成了下载的功能，下面开始练习")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置行号")]),t._v("\n:set nu\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 温馨提示，上面的文件其实比书上的的多一行，就是头尾的 # 少一行，下面的第 43,59 才能看到 as")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 移动到第 43 行，然后向右移动 59 个字符，找到小括号里面的单词")]),t._v("\n「43G」跳转到第 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("43")]),t._v(" 行，\t\t\t「59→」 可以看到光标跳转到了第 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("59")]),t._v(" 个字符后面，能看到 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"(as 开头的文案"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 移动到第 1 行，并且向下搜索「gzip」字符，请问在第几行？")]),t._v("\n「gg」或则 「1G」跳转到第一行，「/gzip」向下搜索，回车后，会定位到 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("93,23")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将 29 到 41 行之间的「小写 man 字符串」改为「大写 MAN 字符串」，并且一个一个挑选是否需要修改")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果在挑选过程中一直按 y，结果会在最后一列出现改变了几个 man ？")]),t._v("\n「:29,41s/man/MAN/gc」会高亮被选中的 man，并且在最下面出现提示是否要替换。这里一直按 y\n最后会提示：13 substitutions on "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v(" lines ，改变了 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v(" 个；\n注意的是：高亮是所有的都高亮，但是替换只是在指定的行之间\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改之后，突然反悔了，要全部复原，有哪些方法？")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(". 简单的方法可以一直按 u 一个一个的撤销刚刚的替换\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(". 使用强制不存储离开 「:q"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("」，之后再读取一次文件\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 复制 66 到 71 这 6 行的内容，（含有 MANDB_MAP），并且贴到最后一行之后")]),t._v("\n先跳转到 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("66")]),t._v(" 行 「66G」，再向下复制 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" 行 「6yy」，此时会在指令列中显示 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" lines yanked\n再跳转到最后一行「G」光标会定位到第 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("132")]),t._v(" 行，使用「p」粘贴到当前光标所在的下一行上\n注意：粘贴多行的话，先会粘贴第一行，然后在指令列显示有 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" 行需要粘贴，需要手动按下回车键确认粘贴，一次回车粘贴一行。粘贴 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" 行后，光标会定位到第 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("138")]),t._v(" 行\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 113 行到 128 行之间的开头为 # 号的批注数据不要了，要如何删除?")]),t._v("\n先跳转到第 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("113")]),t._v(" 行：「113G」\n再输入 「16dd」删除，其实这里为什么是 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(" 而不是 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),t._v(" - "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("113")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v("，这里面的包含头不包含尾而来的，要注意这个是否包不包含当前一行，在上面的文档中有些描述可能就不太准确\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将整个文件另存为 man.test.config；上面删除 16 行之后，只剩下 116 行了，待会对比两个文件")]),t._v("\n使用指令 「:w man.test.config」\n会在指令列提示："),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"man.test.config"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("New"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 116L, 4862C written\n如果使用 「:wq"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" man.test.config」 则你没有机会看到上述的提示，另存后就强制退出当前文件了\n\n特别注意：使用 :w man.test.config 指令后，可以直接强制退出当前的文件，因为当前还在 man_db.config 中，强制退出的话，刚才删除的操作等都不会写到 man_db.config 文件中去，而另存里面的文件却保存了刚刚删除等操作后的数据\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 去到第 25 行，并删除 15 个字符，结果出现的第一个单字是什么？")]),t._v("\n「25G」然后「15x」看到留下的字符串是「_to MANPATH mapping」,下划线是光标所在处\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在第一行新增一行，该内容输入 「I am a student...」")]),t._v("\n「gg」，再按「O」大写的 o 会在光标所在处的上一行插入新行\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 存储后离开")]),t._v("\n:wq\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br"),a("span",{staticClass:"line-number"},[t._v("42")]),a("br"),a("span",{staticClass:"line-number"},[t._v("43")]),a("br"),a("span",{staticClass:"line-number"},[t._v("44")]),a("br"),a("span",{staticClass:"line-number"},[t._v("45")]),a("br"),a("span",{staticClass:"line-number"},[t._v("46")]),a("br"),a("span",{staticClass:"line-number"},[t._v("47")]),a("br"),a("span",{staticClass:"line-number"},[t._v("48")]),a("br"),a("span",{staticClass:"line-number"},[t._v("49")]),a("br"),a("span",{staticClass:"line-number"},[t._v("50")]),a("br"),a("span",{staticClass:"line-number"},[t._v("51")]),a("br"),a("span",{staticClass:"line-number"},[t._v("52")]),a("br")])]),a("p",[t._v("上面的练习部分比如删除字符等，与书上的部分内容对不上，我想可能是因为整个文件内容就对不上的原因")]),t._v(" "),a("h2",{attrs:{id:"vim-的暂存档、救援恢复与开启时的警告讯息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vim-的暂存档、救援恢复与开启时的警告讯息"}},[t._v("#")]),t._v(" vim 的暂存档、救援恢复与开启时的警告讯息")]),t._v(" "),a("p",[t._v("在你编辑过程中，突然宕机等情况下，在你还诶呦保存的时候，可能就想要是能恢复下刚刚未保存的数据就好了")]),t._v(" "),a("p",[t._v("那么 vim 就提供了这样的功能，是通过暂存档来实现的。在使用 vim 编辑时，会在被编辑的文件目录下，再建立一个名为 "),a("code",[t._v(".filename.swp")]),t._v(" 的文件，编辑的数据会被存在该文件中。")]),t._v(" "),a("p",[t._v("来测试这个恢复功能（注：下面的部分指令，现在还未讲解，后续讲解后，再回头来这里练习下）")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mrcode@study vitest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /tmp/vitest/\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mrcode@study vitest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" man_db.conf\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用 vim 进入文件后，然后按 ctrl + z 组合键，会退出来，并提示下面的信息")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 该组合键的作用是吧 vim man_db.conf 丢到背景去执行（后续在 16 章程序管理中会讲解）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("+  Stopped                 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" man_db.conf\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 找到 .swp 的文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mrcode@study vitest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" -al\ntotal "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("48")]),t._v("\ndrwxrwxr-x.  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" mrcode mrcode    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("96")]),t._v(" Oct "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("29")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v(":27 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\ndrwxrwxrwt. "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("54")]),t._v(" root   root    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4096")]),t._v(" Oct "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("29")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v(":26 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n-rw-rw-r--.  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" mrcode mrcode  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4862")]),t._v(" Oct "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("29")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":13 man_db.conf\n-rw-r--r--.  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" mrcode mrcode "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16384")]),t._v(" Oct "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("29")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v(":27 .man_db.conf.swp\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 仿真断线停止 vim 工作")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 现在可以暂时理解为宕机了")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mrcode@study vitest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("kill")]),t._v(" -9 %1\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("+  Stopped                 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" man_db.conf\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# swp 文件还存在")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mrcode@study vitest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" -al .man_db.conf.swp\n-rw-r--r--. "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" mrcode mrcode "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16384")]),t._v(" Oct "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("29")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v(":27 .man_db.conf.swp\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("+  Killed                  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" man_db.conf\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 再次进入该文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mrcode@study vitest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" man_db.conf\nE325: ATTENTION\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 错误代码")]),t._v("\nFound a swap "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" by the name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".man_db.conf.swp"')]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 有暂存当的存在，并显示相关信息")]),t._v("\n          owned by: mrcode   dated: Tue Oct "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("29")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v(":27:34 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" name: /tmp/vitest/man_db.conf  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这个暂存当实际属于哪个文件")]),t._v("\n          modified: no\n         user name: mrcode   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("host")]),t._v(" name: study.centos.mrcode\n        process ID: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2259")]),t._v("\nWhile opening "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"man_db.conf"')]),t._v("\n             dated: Tue Oct "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("29")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":13:28 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 下面说明可能发生这个错误的两个主要原因与解决方案")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Another program may be editing the same file.  If this is the case,\n    be careful not to end up with two different instances of the same\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" when making changes.  Quit, or "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("continue")]),t._v(" with caution.\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" An edit session "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" this "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" crashed.\n    If this is the case, use "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('":recover"')]),t._v(" or "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vim -r man_db.conf"')]),t._v("\n    to recover the changes "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("see "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('":help recovery"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n    If you did this already, delete the swap "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".man_db.conf.swp"')]),t._v("\n    to avoid this message.\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 下面说明你可以进行的动作")]),t._v("\nSwap "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".man_db.conf.swp"')]),t._v(" already exists"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("O"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("pen Read-Only, "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("E"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("dit anyway, "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("R"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("ecover, "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("D"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("elete it, "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("uit, "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("bort:\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br"),a("span",{staticClass:"line-number"},[t._v("42")]),a("br"),a("span",{staticClass:"line-number"},[t._v("43")]),a("br"),a("span",{staticClass:"line-number"},[t._v("44")]),a("br"),a("span",{staticClass:"line-number"},[t._v("45")]),a("br"),a("span",{staticClass:"line-number"},[t._v("46")]),a("br"),a("span",{staticClass:"line-number"},[t._v("47")]),a("br"),a("span",{staticClass:"line-number"},[t._v("48")]),a("br"),a("span",{staticClass:"line-number"},[t._v("49")]),a("br"),a("span",{staticClass:"line-number"},[t._v("50")]),a("br")])]),a("p",[t._v("上面翻译成中文有如下的主要信息：由于暂存文件的存在，vim 会主动判断你的这个文件可能有些问题，上面列出的两个主要原因与解决方案翻译如下：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("可能有其他人或程序同时在编辑这个文件")]),t._v(" "),a("ul",[a("li",[t._v("找到另外那个程序或人员，请他将该 vim 的工作结束，然后你再继续处理")]),t._v(" "),a("li",[t._v("如果只是想要看该文件的内容并不会有任何修改编辑的行为，那么可以选择开启成为只读文件（O），就是那个 [o] pen Read-Only 选项")])])]),t._v(" "),a("li",[a("p",[t._v("在前一个 vim 环境中，可能因为某些不知名的原因导致 vim 中断（crashed）")]),t._v(" "),a("p",[t._v("这就是常见的不正常结束 vim 产生的后果。解决方案依据不同的情况不同，常见的处理方法为：")]),t._v(" "),a("ul",[a("li",[t._v("如果之前的 vim 处理动作尚未存储，此时应该按下 R （使用 (R)ecover 选项），此时 vim 会载入 .man_db.conf.swp 的内容，让你自己来决定要不要存储！不过需要你离开 vim 后手动删除 .man_db.conf.swp 文件，避免下次打开还出现这样的警告")]),t._v(" "),a("li",[t._v("如果你确定这个暂存文件是没有用的，可以直接按下 D（(D)elete it）删除它")])])])]),t._v(" "),a("p",[t._v("下面是出现的 6 个选项的说明：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("[O]pen Read-Only")]),t._v("：以只读方式打开。不能编辑")]),t._v(" "),a("li",[a("code",[t._v("(E)dit anyway")]),t._v("：以正常方式打开文件，不会载入暂存文件中的内容。不过很容易出现两个使用者互相改变对方的文件等问题。不推荐（如果是多人编辑的情况下）")]),t._v(" "),a("li",[a("code",[t._v("(R)ecover")]),t._v("：加载暂存文件的内容，用在恢复之前未保存的内容，恢复之后记得手动删除暂存文件")]),t._v(" "),a("li",[a("code",[t._v("(D)elete it")]),t._v("：确定暂存文件是无用的，删除它")]),t._v(" "),a("li",[a("code",[t._v("(Q)uit")]),t._v("：离开 vim，不会进行任何动作")]),t._v(" "),a("li",[a("code",[t._v("(A)bort")]),t._v("：忽略这个编辑行为，感觉上与 quit 非常类似。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);