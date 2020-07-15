(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{673:function(s,a,t){"use strict";t.r(a);var n=t(16),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"重点回顾"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重点回顾"}},[s._v("#")]),s._v(" 重点回顾")]),s._v(" "),t("ul",[t("li",[s._v("一个可以被挂载的数据通常称为「文件系统 filesystem」而不是分区槽（partition）")]),s._v(" "),t("li",[s._v("基本上 Linux 的传统文件系统位 Ext2，该文件系统内的信息主要有：\n"),t("ul",[t("li",[s._v("superblock：记录此 filesystem 的整体信息，包括 inode、block 的总量、使用量、剩余量，以及文件系统的格式与相关信息")]),s._v(" "),t("li",[s._v("inode：记录文件的属性，一个文件占用一个 inode，同时记录此文件的数据所在的 block 号码")]),s._v(" "),t("li",[s._v("block：实际记录文件的内容，若文件太大时，会占用多个 block")])])]),s._v(" "),t("li",[s._v("Ext2 文件系统的数据存取为索引式文件系统（indexed allocation）")]),s._v(" "),t("li",[s._v("需要碎片整理的原因就是文件写入的 block 太过于离散了，此时文件读取的效能变得很差。可以通过碎片整理将同一个文件所属的 blocks 整理在一起")]),s._v(" "),t("li",[s._v("Ext 文件系统主要有：boot sector、superblock、inode bitmap、inode table、data block 等 6 大部分")]),s._v(" "),t("li",[s._v("data block 是用来放置文件内容数据的地方，在 ext2 文件系统中所支持的 block 大小有 1k、2k、4k 三种")]),s._v(" "),t("li",[s._v("inode 记录文件的属性、权限等数据，其他重要项目为：每个 inode 大小均为固定，有 128、256bytes 两种基本容量。每个文件都仅会占用一个 inode。因此文件系统能够建立的文件数量与 inode 的数量有关")]),s._v(" "),t("li",[s._v("文件的 block 在记录文件的实际数据，目录的 block 则在记录该目录下文件名与其 inode 号码的对照表")]),s._v(" "),t("li",[s._v("日志文件系统（journal）会多出一块记录区，随时记载文件系统的主要活动，可加快系统复原时间")]),s._v(" "),t("li",[s._v("Linux 文件系统位增加效能，会让主存储器作为大量的磁盘告诉缓存")]),s._v(" "),t("li",[s._v("实体链接只是多了一个文件名对该 inode 号码的连接")]),s._v(" "),t("li",[s._v("符号链接就类似 windows 的快捷方式功能")]),s._v(" "),t("li",[s._v("磁盘的使用必须经过：分区、格式化与挂载，分别惯用的指令为：gdisk、mkfs、mount 三个指令")]),s._v(" "),t("li",[s._v("分区时，应使用 parted 检查分区表格式，再判断使用 fdisk 或 gdisk 来分区，或直接使用 parted 分区")]),s._v(" "),t("li",[s._v("为了考虑效能，xfs 文件系统格式化时，可以考虑加上 agcount、su、sw、extsize 等参数")]),s._v(" "),t("li",[s._v("如果磁盘以无未分区的容量，可以考虑使用大型文件取代磁盘装置的处理方式，通过 dd 与格式化功能")]),s._v(" "),t("li",[s._v("开机自动挂载可参考 /etc/fstab 的设置，设置完后务必使用 mount -a 测试语法正确性")])]),s._v(" "),t("h2",{attrs:{id:"卸载挂载的分区练习"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#卸载挂载的分区练习"}},[s._v("#")]),s._v(" 卸载挂载的分区练习")]),s._v(" "),t("p",[s._v("将本章挂载的几个挂载点全部卸载。并删除这些分区，回复到原本刚安装时的状态；")]),s._v(" "),t("ul",[t("li",[s._v("目标：了解到删除分区槽需要注意的各项信息")]),s._v(" "),t("li",[s._v("前提：本章各项示例都有做过，才会拥有 /dev/sda4 ~ /dev/sda7 的分区出现")]),s._v(" "),t("li",[s._v("需求：熟悉 gdisk、parated、umount、sapoff 等指令")])]),s._v(" "),t("ol",[t("li",[t("p",[s._v("使用 free、swapon -s、mount 等指令查询要被处理的文件系统不可以被使用，如果有被使用则必须使用 umount 卸载文件系统。如果是 swap，则需要使用 swapon -s 找出被使用的分区槽再用 swapoff 卸载")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# umount /data/ext4 /data/xfs /data/file /data/win")]),s._v("\numount: /data/ext4：未挂载\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# swapoff /dev/sda6 /tmp/swap")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("观察 /etc/fstab 将相关的配置删除或注释掉")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" /etc/fstab\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将相关的都注释掉了")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# UUID="edfa7161-5847-4935-80e1-6e081be9ab77" /data/xfs xfs defaults 0 0')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /srv/loopdev /data/file xfs defaults 0 0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# UUID="89727d5b-a222-4878-be50-19bbb61cabb0" swap swap defaults 0 0')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /tmp/swap swap swap defaults 0 0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# UUID="72BE-0556" /data/win vfat defaults 0 0')]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("使用 gdisk 删除，也可以使用 parted 来删除")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# parted /dev/sda rm 7")]),s._v("\n信息: You may need to update /etc/fstab.\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# parted /dev/sda rm 6")]),s._v("\n信息: You may need to update /etc/fstab.\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# parted /dev/sda rm 5")]),s._v("\n信息: You may need to update /etc/fstab.\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# parted /dev/sda rm 4")]),s._v("\n信息: You may need to update /etc/fstab.\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 刷新分区表")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# partprobe                                                 ")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 确认下，确实只剩下三个了")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# parted /dev/sda print")]),s._v("\nModel: ATA VBOX HARDDISK "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("scsi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nDisk /dev/sda: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("43")]),s._v(".8GB\nSector size "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("logical/physical"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": 512B/512B\nPartition Table: gpt\nDisk Flags: pmbr_boot\n\nNumber  Start   End     Size    File system  Name  标志\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("      1049kB  3146kB  2097kB                     bios_grub\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("      3146kB  1077MB  1074MB  xfs\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("      1077MB  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("33")]),s._v(".3GB  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(".2GB                     lvm\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将相关文件删除")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rm /tmp/swap /srv/loopdev")]),s._v("\nrm：是否删除普通文件 "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/tmp/swap"')]),s._v("？y\nrm：是否删除普通文件 "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/srv/loopdev"')]),s._v("？y\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br")])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);