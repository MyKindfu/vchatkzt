
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/login/login","pages/summary/purchase/purchase","pages/summary/summary","pages/approval/approval","pages/index/index","pages/my/my","pages/flowApprove/flowApprove","pages/edit/edit","pages/setting/setting","pages/safe/safe"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8","background":"#efeff4"},"tabBar":{"color":"#666","selectedColor":"#00254A","borderStyle":"white","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","iconPath":"static/image/app.png","selectedIconPath":"static/image/appselected.png","text":"应用"},{"pagePath":"pages/my/my","iconPath":"static/image/my.png","selectedIconPath":"static/image/myseclcted.png","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"srm","compilerVersion":"2.9.8","entryPagePath":"pages/login/login","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/login/login","meta":{"isQuit":true},"window":{"navigationBarTitleText":"登录","navigationBarBackgroundColor":"#4985e1","navigationBarTextStyle":"white"}},{"path":"/pages/summary/purchase/purchase","meta":{},"window":{"navigationBarTitleText":"采购审批","navigationBarBackgroundColor":"#4985e1","navigationBarTextStyle":"white","enablePullDownRefresh":false}},{"path":"/pages/summary/summary","meta":{},"window":{"navigationBarTitleText":"计划审批","navigationBarBackgroundColor":"#4985e1","navigationBarTextStyle":"white","enablePullDownRefresh":false}},{"path":"/pages/approval/approval","meta":{},"window":{"navigationBarTitleText":"审批","navigationBarBackgroundColor":"#4985e1","navigationBarTextStyle":"white"}},{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"应用","navigationBarBackgroundColor":"#4985e1","navigationBarTextStyle":"white"}},{"path":"/pages/my/my","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"个人中心","navigationBarBackgroundColor":"#4985e1","navigationBarTextStyle":"white"}},{"path":"/pages/flowApprove/flowApprove","meta":{},"window":{"navigationBarTitleText":"审批","navigationBarBackgroundColor":"#4985e1","navigationBarTextStyle":"white","enablePullDownRefresh":false}},{"path":"/pages/edit/edit","meta":{},"window":{"navigationBarTitleText":"修改密码","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#4985e1","navigationBarTextStyle":"white"}},{"path":"/pages/setting/setting","meta":{},"window":{"navigationBarTitleText":"设置","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#4985e1","navigationBarTextStyle":"white"}},{"path":"/pages/safe/safe","meta":{},"window":{"navigationBarTitleText":"账户安全","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#4985e1","navigationBarTextStyle":"white"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
