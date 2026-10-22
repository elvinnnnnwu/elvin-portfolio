import {personalExperiments} from './personal-experiments';
import {marketProjects} from './market-projects';
import {extraProjects} from './extra-projects';
export type Category = '品牌与视觉'|'网站与体验'|'产品与系统'|'影像与内容'|'个人创作'|'研究与策略';
export interface Project {
  id:string; name:string; en:string; category:Category; personal?:boolean;
  year:string; subtitle:string; intro:string; cover:string; coverKind?:'photo'|'portrait'|'contain'|'chat'|'workflow'|'menu'|'editorial';
  videos?:{src:string;poster:string;title:string;note:string}[];
  audios?:{src:string;title:string;note:string}[];
  showcases?:{title:string;description:string;images:{image:string;caption:string}[]}[];
  tags:string[]; status:string; scope:string; challenge:string; approach:{title:string;text:string}[];
  outcomes:string[]; gallery:{image:string;caption:string}[]; note?:string;
}
export const categories:Category[]=['品牌与视觉','网站与体验','产品与系统','影像与内容','个人创作','研究与策略'];
const baseProjects:Project[]=[
 {
  id:'apex-space',name:'APEX SPACE',en:'A brand, built from the inside out.',category:'品牌与视觉',year:'2026',
  subtitle:'让品牌主张，成为可感知的空间体验。',cover:'apex-cover',tags:['品牌策略','视觉体系','空间应用'],status:'品牌提案与手册已交付',scope:'品牌平台、视觉识别、应用体系与官网概念',
  intro:'围绕精品办公体验，建立从品牌主张、视觉语言到空间触点的完整表达，让一个品牌在纸面、屏幕与真实场景中保持一致。',
  challenge:'办公空间品牌的识别，既来自一个名字，也来自每一次接触。如何把品牌承诺转化为一套清晰、可延展的表达，是这次创作的起点。',
  approach:[{title:'先确立品牌内核',text:'从使命、愿景、价值观与品牌特质出发，形成 WORK AT YOUR APEX. 的品牌承诺，并建立中英文表达。'},{title:'把识别延展到触点',text:'围绕既有正式标识，统一色彩、版式与应用方式，延展至纸品、制服、会员用品、社交媒体及空间导视。'},{title:'让体系便于继续使用',text:'将策略、规范和应用整合为可离线浏览的品牌手册，分类整理标识与应用资产，形成可继续编辑的交付。'}],
  outcomes:['完整品牌平台与视觉应用体系','离线品牌手册与官网概念页','按用途整理的标识及应用资产'],
  gallery:[{image:'apex-reception',caption:'空间中的品牌识别应用提案'},{image:'apex-kit',caption:'纸品与办公触点应用提案'},{image:'apex-brand',caption:'品牌基础规范与视觉语言'},{image:'apex-social',caption:'社交媒体场景与品牌语气'}],note:'空间与物料图为应用提案，包含 AI 场景创作；官网为概念展示。'
 },
 {
  id:'sijing',name:'肆境空间设计',en:'Space, translated into a digital experience.',category:'网站与体验',year:'2026',subtitle:'把空间的质感，延续到每一次浏览。',cover:'sijing-live',tags:['网站策划','体验设计','内容管理'],status:'已上线 · 官网持续运营',scope:'官网结构、项目叙事、前端体验与内容管理',
  intro:'以真实空间案例为中心，组织项目、设计理念、团队与资讯，让访客既能感受作品，也能理解作品背后的方法。',
  challenge:'空间作品往往有丰富照片，却缺少一条清晰的阅读路径。同时，官网还需要支持长期内容更新，才能持续承担品牌与业务表达。',
  approach:[{title:'让作品形成叙事',text:'围绕首页、独立项目详情、设计理念、关于与资讯组织阅读路径，把摄影素材转化为有顺序的项目体验。'},{title:'统一图片与排版规则',text:'为作品封面、头图和图库建立不同比例与裁切规范，兼顾图片质感和桌面、手机端的可读性。'},{title:'把更新交回运营',text:'建立文章与图片的后台维护流程，补充独立资讯页、发布反馈、部署、备份与恢复说明。'}],
  outcomes:['独立页面与案例图库','可维护的资讯与图片后台','前后端源码及部署材料'],gallery:[{image:'sijing-project-live',caption:'实际线上项目详情：上海大悦中心二期，独立图库与项目叙事'},{image:'sijing-live',caption:'实际线上首页：品牌、15项目画廊与资讯入口'},{image:'sijing-detail',caption:'空间摄影是官网内容组织的核心素材'},{image:'sijing',caption:'首页视觉方向使用项目实景，保留材质与光线'}],note:'此处展示官网策划与数字体验工作，空间照片为项目素材；2026年10月20日已核对线上首页、项目详情和资讯，后台写入未在生产提交。'
 },
 {
  id:'summer',name:'Summer IP',en:'A character. A world of possibilities.',category:'个人创作',personal:true,year:'2026',subtitle:'让一个角色，生长为持续创作的内容 IP。',cover:'summer-office-0',coverKind:'portrait',tags:['角色设定','系列内容','AI 创作'],status:'角色资产与系列内容已交付',scope:'角色世界、视觉资产、科普图文、表情与内容流程',
  intro:'如果小狗替主人上一天班，会发生什么？以金白色边牧Summer为主角，从一个有趣的假设出发，把角色、故事短片、小狗课堂与系列图文连接成持续生长的个人内容IP。AI帮助实现画面与声音，创意、情绪与角色判断贯穿始终。',
  challenge:'一次可爱的画面容易出现，一个长期成立的角色更需要一致性。角色外形、性格、内容语气和系列结构，要能够在不同主题中延续。',
  approach:[{title:'建立可持续的角色基础',text:'整理三视图、成年体型、金白毛色与老师等职业造型，让每次创作都有清晰的角色依据。'},{title:'让内容拥有系列感',text:'以科普、行为观察、生活方式和宠物 AI 等主题展开选题研究，把复杂信息转化为分镜、图组与简洁表达。'},{title:'把创作变成完整交付',text:'结合 AI 场景创作与本地排版，保留独立图片、可编辑文件、发布文案、首评与上传顺序，便于持续更新。'}],
  videos:[{src:'videos/summer-office.mp4',poster:'summer-office-0',title:'小狗替主人上班 · 人类实习日记01',note:'约41秒 · 有配音 · 分镜预演版 · 点击播放'}],showcases:[{title:'让小狗进入人类的日常',description:'从出门、通勤到开会与回家，把职场喜剧落到陪伴的情绪。以下为现有短片画面。',images:[{"image": "summer-office-0", "caption": "出发｜今天，我替你去"}, {"image": "summer-office-3", "caption": "到岗｜原来花花是领导"}, {"image": "summer-office-4", "caption": "开会｜零食预算取消"}, {"image": "summer-office-7", "caption": "回家｜主人回来时，需要一个我"}]},{title:'从故事短片，延伸到六页图文',description:'新十期中的宠物AI主题，以同一角色和完整分页讲述一个议题。这里保留六页实际发布图，点击可看原图。',images:[{"image": "summer-ai-carousel-1", "caption": "宠物AI图文 / 第1页"}, {"image": "summer-ai-carousel-2", "caption": "宠物AI图文 / 第2页"}, {"image": "summer-ai-carousel-3", "caption": "宠物AI图文 / 第3页"}, {"image": "summer-ai-carousel-4", "caption": "宠物AI图文 / 第4页"}, {"image": "summer-ai-carousel-5", "caption": "宠物AI图文 / 第5页"}, {"image": "summer-ai-carousel-6", "caption": "宠物AI图文 / 第6页"}]}],outcomes:['角色三视图与可复用视觉资产','10 期、60 页系列图文交付','静态表情及多种内容形式探索'],gallery:[{image:'summer-turnaround',caption:'角色身份母版：正面、侧面与背面三视图'},{image:'summer-teacher',caption:'Summer 老师：角色职业造型'},{image:'summer-series',caption:'十期系列内容封面，体现同一角色的主题延展'},{image:'summer-sticker',caption:'成年 Summer 的日常表情创作'}],note:'画面包含AI创作。上班短片为既有分镜预演版，以AI视觉分镜、配音及镜头合成呈现故事；不将其写成已经完成逐镜AI动态生成的正式版。图文为实际交付成品，未推定平台发布或传播成绩。'
 },
 {
  id:'mengxiaoxi',name:'梦小犀',en:'From a question to a clearer decision.',category:'产品与系统',year:'2026',subtitle:'把复杂选址需求，组织成清晰的咨询路径。',cover:'mxx-live',coverKind:'contain',tags:['AI 产品','知识组织','对话体验'],status:'线上入口运行 · 持续迭代',scope:'业务需求、咨询流程、知识维护与前后台迭代',
  intro:'从办公选址的真实问题出发，连接需求理解、项目知识、咨询引导与客户服务入口，探索更自然、更可维护的数字顾问体验。',
  challenge:'客户常常在对话中修改人数、预算、区域和需求。咨询体验既要连贯，也要守住业务事实：项目资料、报价与预约权限都有各自来源。',
  approach:[{title:'从用户意图设计路径',text:'围绕城市、人数、预算和办公需求组织提问与下一步，让多轮沟通中的变化能够被保存和理解。'},{title:'让知识可维护、有依据',text:'把项目事实、共性权益与项目差异拆开，提供运营资料收集和批量维护方式，让内容来源可以追溯。'},{title:'持续检验真实行为',text:'跨城市、跨项目检查咨询链路，迭代上下文、模型格式兼容和知识路由；把本地测试与生产验收分别记录。'}],
  outcomes:['客户咨询与服务路径设计','前后台与批量知识维护流程','持续迭代的部署包与回归记录'],gallery:[{image:'mxx-live',caption:'2026年10月20日线上首页：真实项目入口与顾问角色'},{image:'mxx-compare',caption:'本地验证界面：公开项目资料比较，不含真实客户聊天'},{image:'mxx-mobile',caption:'手机测试场景：需求变更后的连续对话'},{image:'mxx-admin',caption:'本地知识管理界面：分页、草稿与发布状态'}],note:'线上首页及项目资料已核对；最新v0.6.7升级包为本地交付，真实模型、库存、报价和预约以生产接入为准。'
 },
 {
  id:'owner-h5',name:'业主合作 H5',en:'A clearer story for a shared opportunity.',category:'网站与体验',year:'2026',subtitle:'让空间价值，成为清楚可理解的合作语言。',cover:'owner-product',coverKind:'contain',tags:['业务表达','H5 体验','合作转化'],status:'v17 页面与技术交付已完成',scope:'内容结构、场景视觉、合作意向与移动体验',
  intro:'围绕业主合作场景，把品牌、运营能力、服务模式和合作意向串联为一条紧凑的阅读路径，让空间与业务价值更容易被理解。',challenge:'合作沟通需要同时传达品牌质感、运营能力和下一步行动。页面还必须适应手机阅读，避免信息过多导致主线被淹没。',
  approach:[{title:'按沟通顺序组织内容',text:'用首屏、品牌、能力、模式和合作意向逐步展开，把读者关心的问题放在对应位置。'},{title:'用真实场景承接品牌',text:'以大堂、会议室、休息区等空间素材建立视觉节奏，调整蒙版、对比和图片体积。'},{title:'让体验可交接',text:'保留表单校验与接入方案，记录背景图、移动布局、弹窗和技术上架检查。'}],outcomes:['完整移动端合作展示页面','统一场景视觉与留资入口','版本记录与技术接入说明'],gallery:[{image:'owner-product',caption:'v17正式H5成品首屏：实际移动页面，非单张空间图片'},{image:'owner',caption:'大堂场景作为合作页面的首屏视觉'}],note:'此处为案例介绍，不收集合作信息；生产表单与通知链路需按部署结果验收。'
 },
 {
  id:'workorder',name:'客户服务工单系统',en:'Turn a service request into a complete journey.',category:'产品与系统',year:'2026',subtitle:'让每一次服务请求，都有清晰的去向。',cover:'work-home',coverKind:'contain',tags:['业务流程','权限体系','服务体验'],status:'V10.15 本地技术交付完成',scope:'客户报修、派单处理、留痕、权限与统计',
  intro:'把客户提交、运营派单、员工处理和结果反馈组织成完整服务链路，在持续迭代中完善附件、权限、通知与真实统计。',challenge:'一个工单同时关联客户、项目、运营和处理人员。设计需要让每个角色知道当前状态、自己可以做什么，以及处理过程如何被追溯。',
  approach:[{title:'先把流程收敛清楚',text:'围绕待受理、已派单、处理中与已完成组织状态，连接各角色的操作与客户反馈。'},{title:'在真实使用中补齐细节',text:'迭代手机登录、照片上传、附件预览、节点留痕、账号分权与回收站，减少流程中的断点。'},{title:'让分析有实际依据',text:'逐项完善统计口径、计算、明细和导出，区分可确认数据与未知信息。'}],outcomes:['客户与员工的完整服务流程','多角色权限与操作留痕','分析、明细与技术交付记录'],gallery:[{image:'work-home',caption:'客户端首页：清晰的服务入口，空白演示界面'},{image:'work-form',caption:'手机报修表单：项目、位置、问题与照片'},{image:'work-analysis',caption:'报修分析验证界面：隔离测试数据，非生产经营指标'}],note:'封面为不含业务数据的流程示意。V10.15 为本地技术交付状态，生产升级需另行验收。'
 },
 {
  id:'asset-platform',name:'办公资产管理平台',en:'Make the movement of things understandable.',category:'产品与系统',year:'2026',subtitle:'把物品的流转，变成有据可循的业务。',cover:'asset-product',coverKind:'contain',tags:['产品设计','资产流程','协同规则'],status:'V4.1.1 本机评审版已交付',scope:'物料、交接、调拨、审批、处置与现场备查',
  intro:'围绕办公资产从建档到交接、调拨和处置的全过程，把实际业务规则转化为明确的角色、单据和操作顺序。',challenge:'资产主档、规格差异、套装损耗与现场备查各有业务含义。若概念和记账边界混在一起，系统会把操作复杂性传递给使用者。',
  approach:[{title:'建立清楚的业务对象',text:'区分物品种类编码、默认规格、项目明细与现场备查，明确哪些行为会影响库存。'},{title:'让协作规则进入流程',text:'围绕发起、审批、接收和签收明确角色，设置防重复处理及签收锁定，减少责任模糊。'},{title:'把反馈变成可检验修改',text:'按产品反馈在原平台增量调整，以独立演示库与流程回归核验，再交付同事讨论用预览。'}],outcomes:['资产与备查资料的分层流程','交接、调拨、处置及权限规则','完整本机评审系统与离线预览'],gallery:[{image:'asset-product',caption:'V4.1.1真实评审界面：跨项目调拨、随单照片与审批留痕，演示数据'},{image:'asset-document',caption:'真实导出单据：电子签收与物品明细，测试环境非真实库存'}],note:'图为真实成品的隔离演示界面。V4.1.1 供本机评审；跨网络共享与生产上线尚未验收。'
 },
 {
  id:'member-benefits',name:'会员福利与社群',en:'Give everyday connection a place to happen.',category:'网站与体验',year:'2026',subtitle:'让活动、连接与好礼，拥有统一入口。',cover:'member-product',coverKind:'contain',tags:['会员体验','品牌联动','运营产品'],status:'v6 页面与部署材料已交付',scope:'会员首页、活动详情、品牌权益与运营端',
  intro:'将会员活动、品牌联动和运营维护放进统一体验，用清晰的内容层级，让客户发现值得参与的连接，也让运营能够持续更新。',challenge:'活动、权益、报名和到期状态需要保持一致。产品既要有品牌感，也要能够清楚传达适用范围、时间与下一步。',
  approach:[{title:'围绕会员的阅读路径',text:'从活动发现到详情、报名与品牌权益，建立各自独立且相互连接的页面。'},{title:'把运营需求放进结构',text:'组织项目绑定、活动分类、发布下线、截止状态与图片规范，减少长期维护成本。'},{title:'保留正式接入路径',text:'将本地演示数据层与 API 模式区分，交付服务端参考与名额处理方案。'}],outcomes:['会员活动与品牌联动页面','项目运营与内容维护流程','演示、接口接入及部署说明'],gallery:[{image:'member-product',caption:'v6成品首页：会员活动、连接与好礼，演示内容'},{image:'member-detail',caption:'v6真实品牌详情页：权益、范围、有效期与使用方式，演示内容'},{image:'member-flower',caption:'生活方式活动素材与会员内容场景'},{image:'member',caption:'沿用既有品牌色与空间图像语言'}],note:'演示版使用本地存储；正式报名、实时名额及权限需由服务端承接。'
 },
 {
  id:'brand-films',name:'高格品牌影像',en:'A space, a scene, a reason to care.',category:'影像与内容',year:'2026',subtitle:'把空间场景，转化为有节奏的品牌表达。',cover:'ads-story',coverKind:'contain',tags:['创意策划','分镜叙事','动态视觉'],status:'多期信息流作品已交付',scope:'场景洞察、文案、分镜、剪辑与多规格交付',
  intro:'从会客、开工、搬迁等客户场景切入，把空间实拍、动态素材与简洁文案组织成适合手机观看的品牌内容。',challenge:'短时间内要让观众理解空间能解决什么问题。每一段画面、每一句文案和每一次转场，都需要服务同一个表达。',
  approach:[{title:'从具体场景写创意',text:'围绕客户今天会客、团队明天开工等真实语境，提炼能够迅速理解的信息。'},{title:'用分镜控制节奏',text:'把动态空间、信息区、封面与尾页统一规划，核验文字层级、镜头差异与手机安全区。'},{title:'让内容适合实际发布',text:'按用途准备不同版本、封面和故事板，保留音乐来源、可编辑材料与交付说明。'}],outcomes:['场景驱动的系列信息流内容','分镜、封面与成片配套交付','持续复用的品牌影像工作方法'],gallery:[{image:'ads-story',caption:'客户到访内容的关键帧故事板'}],note:'本案例展示代表性分镜与制作方法，未将交付状态外推为平台发布或投放效果。'
 },
 {
  id:'location-maps',name:'城市与空间区位图',en:'Complex geography. A clear visual language.',category:'品牌与视觉',year:'2026',subtitle:'把城市里的复杂关系，讲得一目了然。',cover:'map',coverKind:'contain',tags:['信息设计','地图表达','矢量系统'],status:'七城市 v2 成套交付',scope:'区位信息、交通关系、图形规范与可编辑输出',
  intro:'以统一视觉母版组织不同城市的空间与交通信息，让项目位置、换乘关系和区域联系在同一套表达中保持清晰。',challenge:'每个城市的交通条件和空间分布不同。图形系统需要保持一致，同时准确处理在建线路、公交、双城区等差异。',
  approach:[{title:'先厘清关系再画图',text:'核对项目位置与交通联系，明确主要线路和阅读顺序，保留需要说明的运行状态。'},{title:'建立统一视觉语法',text:'沿用既有母版，统一高格红定位图标、文字层级与空间关系，兼容不同城市结构。'},{title:'为后续维护保留源文件',text:'交付 AI、SVG、PNG 与离线总览，便于销售查看和后续更新。'}],outcomes:['七城市、十一项目的区位表达','可编辑矢量及高清展示图','离线总览与版本说明'],gallery:[{image:'map',caption:'苏州空间分布：以清晰的视觉层级组织交通与项目'}],note:'交通和项目信息反映交付时点，实际出行及当前项目状态需另行核实。'
 },
 {
  id:'birdie-buddy',name:'Birdie Buddy',en:'Make room for a few good swings.',category:'个人创作',personal:true,year:'2026',subtitle:'把轻装挥杆，做成一种生活方式。',cover:'birdie',coverKind:'portrait',tags:['个人品牌','生活方式','内容创作'],status:'品牌应用与内容已交付',scope:'品牌应用、产品场景、社交内容与影像',
  intro:'从下班去练习场的生活场景出发，围绕深绿小球包、轻装装备和朋友间的挥杆时光，建立自然、有辨识度的品牌内容。',challenge:'产品的结构、品牌识别和生活方式要同时成立。创作既要让人愿意看，也要保留产品比例和实际用途。',
  approach:[{title:'从生活方式寻找表达',text:'用下班开练、轻装出门与朋友见面等具体场景，建立轻松而明确的内容主线。'},{title:'让产品保持可信',text:'锁定正式标识与圆筒小球包结构，检查肩带、提手、球杆比例等画面细节。'},{title:'形成多种内容形式',text:'延展小红书图组、信息流影像与挥杆实验室内容，保留原图、发布文案和可编辑材料。'}],outcomes:['统一品牌应用与产品场景','系列图文与影像内容','可持续迭代的个人品牌实践'],gallery:[{image:'birdie-detail',caption:'轻装装备：围绕小球包结构与使用场景组织画面'},{image:'birdie',caption:'下班直接去练习场：生活方式主题内容'}],note:'场景图包含 AI 创作；本案例呈现品牌与内容实践，不作商业销售成绩声明。'
 },
 {
  id:'gomates',name:'鸽们 GOMATES',en:'Friendship, with an identity of its own.',category:'个人创作',personal:true,year:'2026',subtitle:'把朋友之间的默契，变成一个品牌。',cover:'gomates',coverKind:'contain',tags:['品牌实验','吉祥物','周边设计'],status:'VI 草案与应用探索',scope:'品牌概念、标识方向、吉祥物与球衣周边',
  intro:'从篮球、朋友和共同语言出发，探索 GOMATES 的品牌世界，用标识、吉祥物、球衣与周边，承载属于一群人的身份感。',challenge:'个人品牌实验的魅力来自真实关系，视觉表达需要把这种共同语言凝聚起来，并能够延展到不同物品。',
  approach:[{title:'把共同语言变成品牌',text:'围绕 GOMATES 与 NO-SHOW CLUB 建立品牌架构、性格与口号层次。'},{title:'建立识别与角色',text:'探索字标、盾章与鸽子吉祥物，锁定角色母版，以黑、暖白和橙组织应用。'},{title:'让概念落到物品上',text:'延展球衣、装备包、篮球、帽子与其他周边，检查同一识别在不同材质中的表现。'}],outcomes:['品牌概念与视觉手册草案','锁定吉祥物及球衣应用方向','周边与生活场景创作'],gallery:[{image:'gomates-merch',caption:'品牌识别延展至日常装备与周边'},{image:'gomates',caption:'球衣系统应用探索'}],note:'当前为品牌实验与草案评审阶段；图片为概念与应用示意，包含 AI 创作。'
 },
 {
  id:'life-menu',name:'生活点菜工具',en:'Small needs. Thoughtful solutions.',category:'个人创作',personal:true,year:'2026',subtitle:'把日常的小需求，做成顺手的小产品。',cover:'menu-product-home',coverKind:'contain',tags:['生活产品','交互设计','网页实现'],status:'静态网页应用已实现',scope:'分类点菜、订单整理、菜单维护与日常协作',
  intro:'从每天吃什么、怎么表达和怎么安排这些小问题出发，把点菜、随机选择、菜单管理与家务记录做成手机优先的小工具。',challenge:'生活工具需要足够轻：打开就能理解，几步就能完成，功能多一点也不应该让日常使用变复杂。',
  approach:[{title:'围绕实际动作组织功能',text:'把挑选、加入、整理和复制订单串起来，让主要操作顺着日常习惯发生。'},{title:'给选择增加一点趣味',text:'用随机点菜与转盘辅助决定，同时保留自己管理菜单的自由。'},{title:'用轻量技术实现',text:'以静态网页和浏览器本地存储承接日常使用，适配手机并保留继续扩展的空间。'}],outcomes:['可直接使用的手机网页工具','菜单、订单与随机选择体验','轻量的个人产品实践'],gallery:[{image:'menu-product-home',caption:'实际点菜界面：分类菜单、数量与订单入口，默认演示内容'},{image:'menu-product-chores',caption:'实际家务板块：完成状态、筛选、分工与清单，默认演示内容'}],note:'图为真实成品的默认演示页面。数据存储在当前浏览器，不提供真实跨设备订单或家务自动同步。'
 }
];

export const projects:Project[]=[extraProjects.find(p=>p.id==='tibet-album')!,...baseProjects,...extraProjects.filter(p=>p.id!=='tibet-album'),...marketProjects,...personalExperiments];
