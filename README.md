# 项目说明
 ## 1.原创在线音乐播放器V1.1
### 效果展示
- [点我预览](https://a724877192.github.io/BackMoon/%E9%9F%B3%E4%B9%90%E6%92%AD%E6%94%BE%E5%99%A8/player.html)
(建议使用chorme打开)
### 功能介绍
- 音乐风格频道展示与切换 （V1.1）
- 歌曲歌手基本信息展示
- 播放/暂停控制
- 随机播放下一首歌曲
- 进度控制
- 歌词展示
- 音量控制
- 较简约的UI
- 动画渐变效果
### BUG与日后的改进

- 暂时未加入节流与防抖动，过高频率获取歌曲会产生控制台404错误，但对网页逻辑与展示基本无影响，但一定会抽空解决
- 由于豆瓣大部分歌曲的歌词没有时间坐标前缀，因此放弃了滚动歌词、歌词定位的实现，在日后改进时可以试试使用其他成熟的API进行歌词获取
- 在日后会进一步完善功能，将会支持上一首回跳（有时候碰到喜欢的歌可不小心手滑点过了，比较懊恼，加上会改善用户体验）
- 将慢慢减少全局变量的个数，减少函数耦合性，日后将采用订阅发布的模式进行消息的传递

****


## 2.基于TCP\IP协议的原创JAVA客户端服务端多线程传输程序
### 功能介绍
#### 服务器端
- 支持单线程/双线程启动模式
- 可随时监控服务器的CPU使用率和当前线程数
- 随时更新的服务器日志面板，记录时间、客户信息、行为以及各式各样的异常信息输出
- 外连数据库（储存用户账户和密码）
- 客户端断开连接异常处理

#### 客户端
- 一套注册登陆界面，一套用户使用面板（登陆成功才能使用）
- 用户可在获取服务器文件之前请求发送服务器硬盘文件表，以选择具体想要下载的文件
- 圆形进度条提供文件传输进度
  
### 软件效果展示
![image](http://m.qpic.cn/psb?/V10SJozt3XGS0C/PKQnJpudY1Ca8P9f*vtXGGhT9PkKtrCGwF8pdNZ9G*g!/b/dDIBAAAAAAAA&bo=awKqAQAAAAADB.A!&rf=viewer_4)

![image](http://m.qpic.cn/psb?/V10SJozt3XGS0C/5t8se0ArkezFV8Yk9Py4udn*N4rNz25dGShOugxcRhw!/b/dEABAAAAAAAA&bo=AwJ4AQAAAAADB1o!&rf=viewer_4)
![image](http://m.qpic.cn/psb?/V10SJozt3XGS0C/lxB0djblS1pfuwJ30PpvEALOwAldfffx*fsfvT5Oo30!/b/dDEBAAAAAAAA&bo=IwKdAQAAAAADF48!&rf=viewer_4)
![image](http://m.qpic.cn/psb?/V10SJozt3XGS0C/nfyldtIYYi65WvKrcKzFHeqRQAaXsaYAsfvv2wOzywo!/b/dDABAAAAAAAA&bo=cwJ3AQAAAAADJwU!&rf=viewer_4)
![image](http://m.qpic.cn/psb?/V10SJozt3XGS0C/cH58KL02U19buKBnGJ7DMwseWZmS*8LB*rdrtZSlcDE!/b/dAgBAAAAAAAA&bo=1QIGAgAAAAADN8E!&rf=viewer_4)
![image](http://m.qpic.cn/psb?/V10SJozt3XGS0C/WJd8m3vdfGoX7vhZXlG3aCg.TkHBPHcys7SeUA41Wxo!/b/dAgBAAAAAAAA&bo=PQLpAQAAAAADJ9U!&rf=viewer_4)
### 开发时遇到的几个问题:
- 客户端porcesbar进度条（非线程安全）在文件传输时不动，在传输完成后才显示100%进度   解决办法：将传输文件流的while循环（通过缓冲数组分批传送）外new一个thread，保持和界面的异步执行，可以满足实时刷新的要求。
- 服务器端服务器日志和CPU使用率刷新不及时，与1是同样的问题，同样的解决方案，不过对于要可能处理N多请求开N多线程的服务器来说这可能是一种不好的选择，有待改进（改为非阻塞，节省线程）。
- 各种异常处理不准确，刚开始是想到一个解决一个，发现后面异常处理不准确，对应某个事件发生的情况返回的异常信息不对应，所以又手写了一个大概的出错类型，try语句的嵌套结构等解决了这个问题。
- 在用jdbc连接数据库时出现了驱动加载不了的情况，后面发现是先用了getConnection方法后面才定义的driver...比较低级的错误，半天没发现。
在为文件传输预估时间时发现预估时间在文件较大的时候与实际时间查别还是比较大，实在无法作传送时间参考，时间短时虽然准确却没什么意义，于是...还是删去了该功能。 
