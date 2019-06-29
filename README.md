# kaleidoscope 🙇‍
🤗🦑😋👨‍💻🐞🌸🐍 🦎 🦖

```
Coding makes me calm. 
Coding makes me calm. 
Coding makes me calm. 
Coding makes me calm. 
Coding makes me calm.
```

> 在一个独具慧眼的人看来，人生最壮丽的场景莫过于智慧与那欲超越他的现实之间持续不断的较量。  

## What?
这个仓库是在学习总结过程中的一个汇总，主要是自己回顾之用。

[目录]

## How？
在 issue 新建主题，内容包含主题研究解释等详细细节。主题相关的代码部分在本仓库或者通过 submodule 的方式关联到主仓库。

### git submodules 介绍

#### 1.添加
`git submodule add`  
`git@github.com:yuanyazhen/DOM-diff.git`  
`git status`  
```bash
On branch master
Your branch is up to date with 'origin/master'.

Changes to be committed:
	modified:   .gitmodules
	new file:   DOM-diff
```
`git add .`  
`git commit -i "XX"`  
`git push`  
#### 2.更新
进入在主仓库的子目录下 或者 子模块的其他目录，修改文件，并提交
`cd mini-mvvm`  
`git add XX`  
`git ci -m "fix"`  
`git push`  

将子仓库的更新同步到主仓库（本地 和 远程）
- 方式一：如果是在主仓库的目录下更新了子仓库  
`cd 主仓库`  
`git status`  
`git diff`  
`git add XX`  
`git commit -m 'update submodule'`  
`git push`  
- 方式二：如果是在子模块的其他目录  
`cd 主仓库`  
`git submodule foreach git pull`  
`git status`  
```bash
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
	modified:   mini-mvvm (new commits)

no changes added to commit
```
`git diff`
```bash
diff --git a/mini-mvvm b/mini-mvvm
index e058240..59a286f 160000
--- a/mini-mvvm
+++ b/mini-mvvm
@@ -1 +1 @@
-Subproject commit e058240c7b4c61c8c785be6036e68baf2757b3e6
+Subproject commit 59a286f0b669bca47e623cf78511e6df83e29ffa
```
`git add .`  
`git commit -m 'update submodule'`  
`git push`  

#### 3.删除

#### 4.下载
clone Submodule有两种方式 一种是采用递归的方式clone整个项目，一种是clone父项目，再更新子项目。

- 采用递归参数 --recursive    
`git clone git@github.com:jjz/project.git --recursive`
- 第二种方法先clone父项目，再初始化Submodule  
`git clone git@github.com:jjz/pod-project.git`  
`cd pod-project`  
`git submodule init`  
`git submodule update`  

> 参考：
> [使用Git Submodule管理子模块](https://segmentfault.com/a/1190000003076028)

