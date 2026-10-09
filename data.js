/* 이력 데이터 — 여기만 고치면 사이트가 바뀝니다.
   type: work | talk | writing | teaching | jury | award
   sel:1 = 대표 항목 · '최근' 칸은 발표(talk) 중 날짜가 가장 늦은 3건이 자동으로 뜹니다
*/
const D = [
/* ---------- WORKS ---------- */
{type:"work",y:"2025–",sel:1,cat:"produce direct",t_en:"Palace Immersive Goong",t_ko:"이머시브 궁",r_en:"Writer, Director, Producer",r_ko:"시나리오·연출·프로듀서",m_en:"6-person free-roam LBE VR, 41 min · SIGGRAPH 2025 Immersive Pavilion Best in Show · NewImages 2026 XR Competition · Laval Virtual Awards 2026 Finalist",m_ko:"6인 프리로밍 LBE VR, 41분 · SIGGRAPH 2025 이머시브 파빌리온 Best in Show · 뉴이미지 2026 XR 경쟁 · 라발 버추얼 어워드 2026 파이널리스트",c:"KR FR US"},
{type:"work",y:"2026",cat:"curate",t_en:"The Forgotten War",t_ko:"잃어버린 전쟁",r_en:"Exhibition Operations",r_ko:"전시운영",m_en:"ACC × SXSW 2026 official selection",m_ko:"ACC · SXSW 2026 공식 초청",c:"US"},
{type:"work",y:"2025",cat:"curate ai",t_en:"G-Sound 30: AI Music Creation Competition & Exhibition",t_ko:"금천 지사운드30: 인공지능 음악창작 공모전·전시",r_en:"Program Director, competition to exhibition",r_ko:"총괄 기획(공모전–전시)",m_en:"Exhibition “G-Sound 30: Play Ground,” Gasan Publik, Sep 2025 · Organized by Geumcheon-gu and Geumcheon Culture Foundation · Co-hosted by Geumcheon Culture Foundation and Giioii",m_ko:"전시 《G-Sound 30: Play Ground》, 가산퍼블릭, 2025. 9. · 주최 금천구청·금천문화재단 · 주관 금천문화재단·기어이",c:"KR",url:"https://gsound30.framer.website/"},
{type:"work",y:"2025",cat:"curate ai",t_en:"Art Tech for Life Hackathon",t_ko:"아트테크포라이프 해커톤",r_en:"Program Director",r_ko:"기획·운영 디렉터",m_en:"Art × tech creators' hackathon · Seongnam Cultural Foundation × Dankook University",m_ko:"예술기술 창작자 창제작 해커톤 · 성남문화재단 × 단국대학교",c:"KR"},
{type:"work",y:"2024",sel:1,cat:"produce direct",t_en:"Slit AR",t_ko:"슬릿 AR",r_en:"Director, Producer",r_ko:"감독·프로듀서",m_en:"LBE immersive AR: visitors follow traces of Slit, a creature living in a hidden dimension beside us, through the streets of Jangchung-dong · PARADISE ART LAB Festival 2024",m_ko:"우리 곁 ‘숨은 차원’에 사는 존재 슬릿의 흔적을 따라 장충동을 걷는 LBE 이머시브 AR · 파라다이스 아트랩 페스티벌 2024",c:"KR",url:"https://palfestival2024.com/giioiistudio/"},
{type:"work",y:"2024",sel:1,cat:"produce",t_en:"Shall We Stick Together AR",t_ko:"Shall We Stick Together AR",r_en:"Producer",r_ko:"프로듀서",m_en:"IDFA DocLab Forum · NewImages · Beyond the Frame",m_ko:"IDFA DocLab 포럼 · 뉴이미지 · 비욘더프레임",c:"NL FR JP"},
{type:"work",y:"2024",cat:"curate",t_en:"Beyond the Boundaries",t_ko:"비욘드 더 바운더리스",r_en:"Chief Curator",r_ko:"총괄기획",m_en:"XR exhibition for the opening of K-Culture Museum, Incheon Airport",m_ko:"인천공항 K-컬처뮤지엄 개관 XR 기획전",c:"KR"},
{type:"work",y:"2024",sel:1,cat:"produce ai",t_en:"Nuville Bucheon",t_ko:"누빌부천",r_en:"Producer",r_ko:"프로듀서",m_en:"Cyberpunk AR walking game where an AI guide gives players their missions across the city",m_ko:"AI가 참가자에게 미션을 지시하는 도시형 사이버펑크 AR 워킹게임",c:"KR"},
{type:"work",y:"2023",sel:1,cat:"produce ai",t_en:"Anima",t_ko:"애니마",r_en:"Producer",r_ko:"프로듀서",m_en:"Participatory drawing turned into motion: an AI-driven motion-capture music video · AI Content Festival 2024",m_ko:"참여형 드로잉이 움직임이 되는 AI 기반 모션캡처 뮤직비디오 · AI콘텐츠 페스티벌 2024 선정",c:"KR"},
{type:"work",y:"2023",sel:1,cat:"produce",t_en:"Find WiiLii: The Gate-Crasher",t_ko:"파인드 위리",r_en:"Executive Producer",r_ko:"총괄 프로듀서",m_en:"90-min VR immersive theatre · Cannes XR 2020 Development Showcase · SXSW 2023 XR Experience Competition · BIFAN",m_ko:"90분 VR 이머시브 씨어터 · 칸 XR 2020 디벨롭먼트 쇼케이스 · SXSW 2023 XR 경쟁 · 부천국제판타스틱영화제",c:"FR US"},
{type:"work",y:"2022",sel:1,cat:"produce",t_en:"Ihyangjeong: Carving with Memories",t_ko:"기억으로 지은 집: 이향정",r_en:"Lead Producer",r_ko:"책임 프로듀서",m_en:"17-min VR documentary animation · IDFA DocLab Forum 2020 · SXSW 2022 XR Competition · IDFA DocLab · FilmGate Miami · DocEdge · BIFAN",m_ko:"17분 VR 다큐 애니메이션 · IDFA 독랩 포럼 2020 · SXSW 2022 XR 경쟁 · IDFA DocLab · 필름게이트 마이애미 · 독엣지 · 부천",c:"US NL"},
{type:"work",y:"2019",cat:"curate",t_en:"Spheres",t_ko:"스피어스",r_en:"Korean Localization & Distribution",r_ko:"로컬라이제이션·배급",m_en:"VR series produced by Darren Aronofsky · Best VR, Venice Film Festival",m_ko:"대런 애로노프스키 제작 VR · 베니스영화제 Best VR",c:"KR"},
{type:"work",y:"2021–22",sel:1,cat:"produce",t_en:"Missing Pictures",t_ko:"미싱 픽처스",r_en:"Executive Producer",r_ko:"총괄 프로듀서",m_en:"VR documentary series · Tribeca Immersive 2022 · VR Awards Finalist · Best VR, Ji.hlava & Luxembourg 2023",m_ko:"VR 다큐멘터리 시리즈 · 트라이베카 이머시브 2022 · VR 어워드 파이널리스트 · 이흘라바·룩셈부르크 2023 Best VR",c:"US CZ LU"},
{type:"work",y:"2022",cat:"produce",t_en:"Synchronous Senses",t_ko:"동시감각",r_en:"Producer",r_ko:"프로듀서",m_en:"VR performance · Korea National Contemporary Dance Company, SPAF, Arko Arts Theater",m_ko:"VR 융합공연 · 국립현대무용단, 서울국제공연예술제, 아르코예술극장",c:"KR"},
{type:"work",y:"2022",cat:"produce",t_en:"The Lost Face 1895 — Metaverse Musical",t_ko:"잃어버린 얼굴 1895 메타버스 뮤지컬",r_en:"Executive Producer",r_ko:"총괄 프로듀서",m_en:"Seoul Performing Arts Company × SKT ifland · Metaverse Innovation Award 2022",m_ko:"서울예술단 × SKT 이프랜드 · 메타버스 이노베이션 어워드 2022",c:"KR"},
{type:"work",y:"2022",cat:"produce",t_en:"Post-Music Theatre: Poem / Body",t_ko:"포스트음악극 시 / 몸",r_en:"Producer",r_ko:"프로듀서",m_en:"Cho Eunhee · SPAF, Daehakro Arts Theater; Oil Tank Culture Park",m_ko:"조은희 · 서울국제공연예술제 대학로예술극장; 문화비축기지",c:"KR"},
{type:"work",y:"2022",cat:"produce",t_en:"Choreo-graphy: This is not a Church",t_ko:"코레오-그래피 공유회",r_en:"Exhibition Producer",r_ko:"전시 프로듀서",m_en:"Art Project BORA",m_ko:"아트프로젝트보라",c:"KR"},
{type:"work",y:"2021–23",cat:"produce",t_en:"Virtual Strange",t_ko:"가상이상",r_en:"Lead Producer",r_ko:"책임 프로듀서",m_en:"XR project series, Sinchon Culture Plant",m_ko:"신촌문화발전소 XR 프로젝트",c:"KR"},
{type:"work",y:"2021",cat:"produce",t_en:"Beodeul-eun VR",t_ko:"버들은 VR",r_en:"Lead Producer",r_ko:"책임 프로듀서",m_en:"360° VR animation made in Quill · BIFAN Beyond Reality 2021",m_ko:"Quill 360 VR 애니메이션 · 부천국제판타스틱영화제 Beyond Reality 2021",c:"KR"},
{type:"work",y:"2021",cat:"curate",t_en:"Pado — Webtoon & Web Novel Special Exhibition",t_ko:"파동 — 웹툰웹소설 특별전",r_en:"Curator",r_ko:"전시기획",m_en:"Seoul International Book Fair 2021",m_ko:"서울국제도서전 2021",c:"KR"},
{type:"work",y:"2020",cat:"produce",t_en:"Two Eyes",t_ko:"두 개의 눈",r_en:"Producer",r_ko:"프로듀서",m_en:"Multidisciplinary performance, Asia Culture Center",m_ko:"융복합공연, 국립아시아문화전당",c:"KR"},
{type:"work",y:"2020",cat:"produce",t_en:"Sound Map Project in Multiple Spaces",t_ko:"다중 공간에서의 사운드맵 프로젝트",r_en:"Producer",r_ko:"프로듀서",m_en:"Cho Eunhee · Seoul Foundation for Arts and Culture",m_ko:"조은희 · 서울문화재단 지원",c:"KR"},
{type:"work",y:"2017",cat:"produce",t_en:"Cosmic Moment",t_ko:"코스믹 모먼트",r_en:"Producer",r_ko:"프로듀서",m_en:"ScreenX brand film · KLIK! Animation Festival, Branded Film Competition",m_ko:"ScreenX 브랜드필름 · KLIK! 애니메이션 페스티벌 브랜디드필름 경쟁",c:"NL"},
{type:"work",y:"2012–19",cat:"produce screenx",t_en:"ScreenX",t_ko:"스크린엑스",r_en:"Founding Member, Global Launch, Head of Team",r_ko:"창립 멤버 · 글로벌 런칭 · 부장",m_en:"World's first 270° multi-projection cinema format (Edison Award) · global launch in 7 countries · 22 ScreenX feature releases, 2.2M admissions",m_ko:"세계 최초 270° 다면상영 포맷(에디슨 어워드) · 7개국 글로벌 진출 · ScreenX 장편 22편 개봉, 누적 220만 관객",c:"KR"},
/* ScreenX era detail — shown only under the ScreenX filter (cat "sx") */
{type:"work",y:"2016",cat:"sx screenx",t_en:"BIGBANG MADE",t_ko:"빅뱅 메이드",r_en:"Investment & Planning",r_ko:"투자기획",m_en:"First ScreenX music documentary and a box-office hit for the format · CJ CGV Value Gold Award 2016 (team)",m_ko:"ScreenX 최초의 뮤직 다큐멘터리이자 포맷의 흥행 성공작 · CJ CGV 가치실천 금상 2016(팀 수상)",c:"KR"},
{type:"work",y:"2013",cat:"sx screenx",t_en:"The X",t_ko:"더 엑스",r_en:"Publicity (credited)",r_ko:"홍보 참여(크레딧)",m_en:"Short film made for ScreenX, dir. Kim Jee-woon, starring Kang Dong-won · BIFF 2013 Gala Presentation",m_ko:"김지운 감독, 강동원 주연 ScreenX 단편 · 부산국제영화제 2013 갈라 프레젠테이션",c:"KR"},
{type:"work",y:"2015–18",cat:"sx screenx",t_en:"ScreenX Feature Slate",t_ko:"ScreenX 장편 라인업",r_en:"Investment & Planning",r_ko:"투자기획",m_en:"22 releases, 2.2M admissions · Train to Busan, Pirates of the Caribbean: Dead Men Tell No Tales, Kingsman: The Golden Circle, The Great Wall, King Arthur, The Battleship Island, Psychokinesis, Himalaya, The Priests, Mojin: The Lost Legend",m_ko:"누적 22편 개봉, 220만 관객 · 부산행, 캐리비안의 해적5, 킹스맨: 골든 서클, 그레이트 월, 킹 아서, 군함도, 염력, 히말라야, 검은 사제들, 모진(중국)",c:"KR CN US"},
{type:"work",y:"2015–18",cat:"sx screenx",t_en:"Alternative Content & Animation",t_ko:"얼터너티브 콘텐츠·애니메이션",r_en:"Investment & Planning",r_ko:"투자기획",m_en:"SECHSKIES: Eighteen · Odisseo · Princess Aya · Underdog (ScreenX) · Dino King 2 (ScreenX) · Pororo: Dinosaur Island Adventure (ScreenX)",m_ko:"젝스키스 에이틴 · 오디세오 · 프린세스 아야 · 언더독(ScreenX) · 점박이2(ScreenX) · 뽀로로 공룡섬 대모험(ScreenX)",c:"KR"},
{type:"work",y:"2015–17",cat:"sx screenx",t_en:"ScreenX Global Launches",t_ko:"ScreenX 글로벌 런칭",r_en:"Project Manager",r_ko:"PM",m_en:"CinemaCon showcase, Las Vegas (2015) · Bangkok (2015) · Beijing (2016) · Tokyo Odaiba (2017) · partnerships and business development in 7 countries",m_ko:"라스베이거스 시네마콘 쇼케이스(2015) · 방콕(2015) · 베이징(2016) · 도쿄 오다이바(2017) · 7개국 제휴·사업개발",c:"US TH CN JP"},
{type:"work",y:"2016",cat:"sx screenx",t_en:"MFBTY “Sweet Dream” — ScreenX Music Video",t_ko:"MFBTY ‘Sweet Dream’ ScreenX 뮤직비디오",r_en:"Producer",r_ko:"프로듀서",m_en:"Tiger JK × Yoon Mirae",m_ko:"타이거JK × 윤미래",c:"KR"},
{type:"work",y:"2016–17",cat:"sx screenx",t_en:"ScreenX Festival",t_ko:"스크린엑스 페스티벌",r_en:"Project Manager",r_ko:"PM",m_en:"ScreenX shorts also programmed at BIFAN 2016–17",m_ko:"부천국제판타스틱영화제 ScreenX 단편 상영(2016–17)",c:"KR"},
{type:"work",y:"2014–17",cat:"sx screenx",t_en:"ScreenX Bridge & Sky Gallery",t_ko:"스크린엑스 브리지 · 스카이 갤러리",r_en:"Project Manager",r_ko:"PM",m_en:"Korea's first tunnel-type projection-mapping space",m_ko:"국내 최초 터널형 프로젝션 매핑 공간",c:"KR"},
{type:"work",y:"2013–18",cat:"sx screenx",t_en:"ScreenX Brand Films & Advertising",t_ko:"ScreenX 브랜드필름·광고",r_en:"Lead / Executive Producer, PM",r_ko:"프로듀서·총괄 프로듀서·PM",m_en:"PUMA Forever Faster · KIA Cinema · Hyundai Live Brilliant · 50+ ScreenX ads for Red Bull, Audi, McDonald's, JTBC",m_ko:"PUMA Forever Faster · 기아시네마 · 현대 Live Brilliant · 레드불, 아우디, 맥도날드, JTBC 등 ScreenX 광고 50편 이상",c:"KR"},

/* ---------- TALKS ---------- */
{type:"talk",d:"2026-10-23",sel:1,f:"speaker",t_en:"Creation and Cultural Diversity in the Age of AI",t_ko:"AI 시대의 창제작과 문화다양성",r_en:"Speaker",r_ko:"발제",m_en:"Cultural Diversity Conference 2026, KACES",m_ko:"2026 문화다양성 컨퍼런스, 한국문화예술교육진흥원",c:"KR"},
{type:"talk",d:"2026-10",sel:1,f:"speaker moderator",t_en:"Futura Canvas 2026",t_ko:"퓨추라 캔버스 2026",r_en:"Speaker & Moderator",r_ko:"연사·모더레이터",m_en:"International conference",m_ko:"국제 컨퍼런스",c:"KR"},
{type:"talk",d:"2026-09-30",f:"speaker",t_en:"AI-based Content Production",t_ko:"AI 기반 콘텐츠 제작",r_en:"Speaker",r_ko:"발표",m_en:"Jeonbuk Content Forum 2026",m_ko:"전북콘텐츠포럼 2026",c:"KR"},
{type:"talk",d:"2026-08-15",f:"speaker",t_en:"XREAL XR Conference",t_ko:"XREAL XR 컨퍼런스",r_en:"Speaker",r_ko:"연사",m_en:"Seoul Business Agency",m_ko:"서울산업진흥원",c:"KR"},
{type:"talk",d:"2026-05-20",f:"lecture",t_en:"Palace Immersive Goong",t_ko:"이머시브 궁",r_en:"Guest Lecture",r_ko:"특강",m_en:"Dept. of Digital Heritage, Korea National University of Cultural Heritage",m_ko:"한국전통문화대학교 디지털헤리티지학과",c:"KR"},
{type:"talk",d:"2026-04-29",f:"lecture",t_en:"Art Business Challenge 10",t_ko:"아트비즈니스 챌린지 10기",r_en:"Guest Lecture",r_ko:"특강",m_en:"Korea Arts Management Service",m_ko:"예술경영지원센터",c:"KR"},
{type:"talk",d:"2026-04",sel:1,f:"moderator",t_en:"K-Immersive",t_ko:"K-Immersive",r_en:"Moderator",r_ko:"모더레이터",m_en:"NewImages Festival, Paris",m_ko:"뉴이미지 페스티벌, 파리",c:"FR"},
{type:"talk",d:"2026-04",f:"lecture",t_en:"Visual Design Department",t_ko:"시각디자인과",r_en:"Guest Lecture",r_ko:"특강",m_en:"Soongeui Women's College",m_ko:"숭의여자대학교",c:"KR"},
{type:"talk",d:"2025-12",sel:1,f:"speaker",t_en:"Art Korea Lab Pavilion",t_ko:"아트코리아랩 공동관",r_en:"Presenter",r_ko:"발표",m_en:"SIGGRAPH Asia 2025, Hong Kong",m_ko:"시그라프 아시아 2025, 홍콩",c:"HK"},
{type:"talk",d:"2025-11-28",f:"speaker",t_en:"Reconfiguring Creation: Questions for Art in the Age of AI",t_ko:"창작의 재구성: AI 시대, 예술의 질문들",r_en:"Speaker",r_ko:"발표",m_en:"Cultural Policy Seminar, Incheon Foundation for Arts & Culture",m_ko:"인천문화재단 문화정책 세미나",c:"KR"},
{type:"talk",d:"2025-11-12",f:"moderator",t_en:"The Global Evolution of K-Art through AI",t_ko:"AI로 찾는 K-아트의 글로벌 진화",r_en:"Moderator",r_ko:"모더레이터",m_en:"Art Korea Lab Festival 2025",m_ko:"아트코리아랩 페스티벌 2025",c:"KR"},
{type:"talk",d:"2025-07",f:"speaker",t_en:"Art-Tech Forum",t_ko:"아트테크 포럼",r_en:"Speaker",r_ko:"발표",m_en:"Modulabs",m_ko:"모두의연구소",c:"KR"},
{type:"talk",d:"2024-11-21",f:"moderator",t_en:"Arts Enterprise: Policy and Cases",t_ko:"예술기업 정책과 사례",r_en:"Roundtable",r_ko:"라운드테이블",m_en:"Korean Association of Arts Management, joint conference",m_ko:"한국예술경영학회 하반기 공동학술대회",c:"KR"},
{type:"talk",d:"2024-09",f:"moderator",t_en:"Art × Tech: Where Audience Education Begins",t_ko:"예술X기술, 감상자 교육의 출발점",r_en:"Roundtable",r_ko:"라운드테이블",m_en:"Art Lab Festival",m_ko:"아트랩페스티벌",c:"KR"},
{type:"talk",d:"2024-07-03",f:"lecture",t_en:"New Immersive Art in the Age of AI",t_ko:"AI 시대 새로운 이머시브 예술",r_en:"Guest Lecture",r_ko:"특강",m_en:"Sungkyul University",m_ko:"성결대학교",c:"KR"},
{type:"talk",d:"2024-03",f:"lecture",t_en:"Starting a Business with Art",t_ko:"예술로 창업하기",r_en:"Guest Lecture",r_ko:"특강",m_en:"Korea Arts Management Service",m_ko:"예술경영지원센터",c:"KR"},
{type:"talk",d:"2023-12-01",f:"speaker",t_en:"Performance × Tech: Performing Arts Expanded by Digital Technology and AI",t_ko:"공연X테크, 디지털기술과 AI로 확장되는 공연예술",r_en:"Speaker",r_ko:"발표",m_en:"Forum X, Unfold X 2023",m_ko:"언폴드엑스 포럼엑스 2023",c:"KR"},
{type:"talk",d:"2023-10-27",f:"moderator",t_en:"Arts Industry, Collaboration 4.0: Beyond Genre",t_ko:"예술산업, 콜라보레이션 4.0 장르를 넘어서",r_en:"Speaker & Moderator",r_ko:"발제·모더레이터",m_en:"Art Korea Lab Opening Festival",m_ko:"아트코리아랩 개관 페스티벌",c:"KR"},
{type:"talk",d:"2023-07",f:"lecture",t_en:"Digital Storytelling with the Metaverse and the Virtual",t_ko:"메타버스와 가상을 활용한 디지털 스토리텔링",r_en:"Guest Lecture",r_ko:"특강",m_en:"Sogang University",m_ko:"서강대학교",c:"KR"},
{type:"talk",d:"2023-06-08",f:"lecture",t_en:"New Directions in the Age of Spatial Computing and AI",t_ko:"공간컴퓨팅과 AI 시대를 맞은 새로운 경향",r_en:"Guest Lecture",r_ko:"특강",m_en:"Sungkyul University",m_ko:"성결대학교",c:"KR"},
{type:"talk",d:"2023-03-21",f:"lecture",t_en:"Professional Training Program",t_ko:"ACC 전문인 교육",r_en:"Guest Lecture",r_ko:"특강",m_en:"Asia Culture Center",m_ko:"국립아시아문화전당",c:"KR"},
{type:"talk",d:"2022-10",f:"lecture",t_en:"The Metaverse and Arts Education",t_ko:"메타버스와 문화예술교육",r_en:"Lecture",r_ko:"강연",m_en:"Creative Arts Education Lab, Jeju Foundation for Arts & Culture",m_ko:"제주문화예술재단 창의예술교육랩",c:"KR"},
{type:"talk",d:"2022-09-16",sel:1,f:"lecture",t_en:"Over the Real World: A Conversation with Giioii",t_ko:"Over the Real World: 기어이와의 대화",r_en:"Guest Lecture",r_ko:"특강",m_en:"Cinema Studies, New York University",m_ko:"뉴욕대학교 시네마스터디즈",c:"US"},
{type:"talk",d:"2022-08-31",f:"lecture",t_en:"Designing Virtual Experiences with XR and VR",t_ko:"XR·VR을 활용한 가상경험 기획",r_en:"Lecture",r_ko:"강연",m_en:"Arts Management Academy, KAMS",m_ko:"예술경영지원센터 예술경영 아카데미",c:"KR"},
{type:"talk",d:"2022-06-24",f:"speaker",t_en:"Stories and Worlds that Create New Experiences",t_ko:"새로운 경험 가치를 선사하는 이야기와 세계관",r_en:"Speaker",r_ko:"발표",m_en:"Metaverse Content Forum 2022, KOCCA",m_ko:"한국콘텐츠진흥원 메타버스 콘텐츠 포럼",c:"KR"},
{type:"talk",d:"2022-06-20",f:"speaker",t_en:"Hybrid Performance in a 5G MEC Virtual Studio",t_ko:"5G MEC 기반 가상스튜디오 융합 공연 제작",r_en:"Speaker",r_ko:"오픈세미나",m_en:"New Tech Content Lab, KOCCA × Sungkyul University",m_ko:"한국콘텐츠진흥원·성결대학교 신기술 기반 콘텐츠랩",c:"KR"},
{type:"talk",d:"2022-06-17",f:"speaker",t_en:"Metaverse Cases and Strategies for the Arts",t_ko:"문화예술의 메타버스 사례 및 기획전략",r_en:"Speaker",r_ko:"발표",m_en:"Gangneung Dawn Forum",m_ko:"강릉문화원 강릉 새벽포럼",c:"KR"},
{type:"talk",d:"2022-05-27",sel:1,f:"speaker",t_en:"Deep Dive: Next Mobility",t_ko:"Deep Dive: Next Mobility",r_en:"Speaker",r_ko:"발표",m_en:"APAM — Australian Performing Arts Market",m_ko:"호주공연예술마켓 APAM",c:"AU"},
{type:"talk",d:"2022-05",f:"lecture",t_en:"Multidisciplinary Arts Education: Present and Future",t_ko:"사례 중심의 융복합형 문화예술 교육의 현재와 미래",r_en:"Lecture",r_ko:"강연",m_en:"Korea Culture & Arts Centers Association",m_ko:"한국문화예술회관연합회",c:"KR"},
{type:"talk",d:"2022-03-07",f:"lecture",t_en:"Metaverse and the Arts",t_ko:"메타버스 문화예술",r_en:"Guest Lecture",r_ko:"특강",m_en:"Korea Craft & Design Foundation",m_ko:"한국공예디자인문화진흥원",c:"KR"},
{type:"talk",d:"2021-12-22",f:"speaker",t_en:"Science, Technology and Art",t_ko:"과학기술과 예술",r_en:"Symposium Speaker",r_ko:"심포지엄 발표",m_en:"National Theater Company of Korea",m_ko:"국립극단",c:"KR"},
{type:"talk",d:"2021-11-17",f:"lecture",t_en:"Art and Technology Colloquium: Metaverse and the Arts",t_ko:"예술과 기술 콜로키움: 메타버스와 문화예술",r_en:"Lecture",r_ko:"특강",m_en:"Arts Council Korea",m_ko:"한국문화예술위원회",c:"KR"},
{type:"talk",d:"2021-11-04",f:"speaker",t_en:"Culture, Sports and Tourism Statistics Conference",t_ko:"문화체육관광 통계 발전 학술회의",r_en:"Invited Lecture",r_ko:"초청강연",m_en:"Korea Culture & Tourism Institute",m_ko:"한국문화관광연구원",c:"KR"},
{type:"talk",d:"2021-10",sel:1,f:"moderator",t_en:"In Conversation with Sarah Ellis, Royal Shakespeare Company",t_ko:"로열셰익스피어컴퍼니 사라 엘리스와의 대화",r_en:"Moderator",r_ko:"모더레이터",m_en:"PAMS — Seoul Performing Arts Market, Next Mobility",m_ko:"서울아트마켓 2021 넥스트모빌리티",c:"KR"},
{type:"talk",d:"2021-10",f:"moderator",t_en:"Performance Moved into the Metaverse and VR",t_ko:"메타버스, 가상현실로 이동한 공연",r_en:"Moderator",r_ko:"모더레이터",m_en:"PAMS — Seoul Performing Arts Market, Next Mobility",m_ko:"서울아트마켓 2021 넥스트모빌리티",c:"KR"},
{type:"talk",d:"2021",f:"lecture",t_en:"The Metaverse for Artists and Creators",t_ko:"예술가와 창작자를 위한 메타버스",r_en:"Lecture",r_ko:"강연",m_en:"Art Change Up, Arts Council Korea",m_ko:"한국문화예술위원회 아트체인지업",c:"KR"},
{type:"talk",d:"2021-07",f:"speaker",t_en:"Culture and Strategy in the Metaverse Era",t_ko:"메타버스 시대의 문화와 전략",r_en:"Speaker",r_ko:"발표",m_en:"Hello Act, Gyeonggi Content Agency",m_ko:"경기콘텐츠진흥원 문화기술 세미나 Hello Act",c:"KR"},
{type:"talk",d:"2021-05",f:"speaker",t_en:"VR/XR Content Meets the Arts",t_ko:"예술과 만난 VR/XR 콘텐츠",r_en:"Speaker",r_ko:"발표",m_en:"Art & Tech Lab, Samilro Changgo Theater",m_ko:"서울문화재단 삼일로창고극장 아트앤테크랩",c:"KR"},
{type:"talk",d:"2020",f:"speaker",t_en:"Arts Cases Using Online Media",t_ko:"온라인 미디어를 활용한 문화예술 사례",r_en:"Speaker",r_ko:"발표",m_en:"Creative Morning, Gyeonggi Cultural Foundation",m_ko:"경기문화재단 크리에이티브 모닝",c:"KR"},
{type:"talk",d:"2019",sel:1,f:"moderator",t_en:"VR International Conference",t_ko:"VR 국제 컨퍼런스",r_en:"Moderator",r_ko:"모더레이터",m_en:"Bucheon International Fantastic Film Festival (BIFAN)",m_ko:"부천국제판타스틱영화제",c:"KR"},
{type:"talk",d:"2018",f:"speaker",t_en:"ScreenX as an Immersive Content Platform: Now and Next",t_ko:"이머시브 콘텐츠 플랫폼 스크린엑스의 현재 그리고 미래",r_en:"Speaker",r_ko:"발표",m_en:"VR EXPO",m_ko:"VR EXPO",c:"KR"},
{type:"talk",d:"2017",f:"speaker",t_en:"Cultural Industries in the Post-Digital Era",t_ko:"포스트디지털 시대의 문화산업",r_en:"Speaker",r_ko:"발표",m_en:"Dada Open Seminar, KOCCA",m_ko:"한국콘텐츠진흥원 다다오픈세미나",c:"KR"},
{type:"talk",d:"2012",f:"speaker",t_en:"Social Arts",t_ko:"Social Arts",r_en:"Speaker",r_ko:"발제",m_en:"Exhibition seminar, Savina Museum of Contemporary Art",m_ko:"사비나미술관 전시 세미나",c:"KR"},
{type:"talk",d:"2011",f:"speaker",t_en:"Creative Management: Knowledge Management Learned from Art",t_ko:"창조경영: 예술에서 배우는 지식경영",r_en:"Speaker",r_ko:"발표",m_en:"KAIST Knowledge Management Forum",m_ko:"KAIST 지식경영 포럼",c:"KR"},
{type:"talk",d:"2003–12",f:"lecture",t_en:"Guest Lectures in Arts Management",t_ko:"예술경영 특강",r_en:"Guest Lecture",r_ko:"특강",m_en:"Sookmyung Women's, Myongji, Sungkyunkwan and Chugye universities · KAMS Arts Management Academy · Seongnam Arts Center Cultural Policy Forum",m_ko:"숙명여대, 명지대, 성균관대, 추계예대 · 예술경영지원센터 예술경영아카데미 · 성남아트센터 문화정책포럼",c:"KR"},

/* ---------- WRITING ---------- */
{type:"writing",y:"2026",t_en:"Developing Palace Immersive Goong as Location-Based VR",t_ko:"이머시브 궁 LBE 개발",r_en:"Paper",r_ko:"논문 발표",m_en:"HCI Korea 2026",m_ko:"HCI Korea 2026 학술대회",c:"KR"},
{type:"writing",y:"2025",t_en:"Palace Immersive Goong",t_ko:"Palace Immersive Goong",r_en:"Paper",r_ko:"논문 발표",m_en:"ACM SIGGRAPH 2025, Immersive Pavilion",m_ko:"ACM SIGGRAPH 2025 이머시브 파빌리온",c:"CA"},
{type:"writing",y:"2023",t_en:"Art Rides the Metaverse",t_ko:"예술, 메타버스를 타다",r_en:"Book Chapter",r_ko:"공저",m_en:"Arts Education Series, K-Arts Research Institute",m_ko:"한국예술연구소 예술교육 총서",c:"KR"},
{type:"writing",y:"2023",t_en:"Digital Technology and AI",t_ko:"디지털기술과 AI",r_en:"Essay",r_ko:"기고",m_en:"2023 Arts Education Report, KACES",m_ko:"한국문화예술교육진흥원 2023 문화예술교육리포트",c:"KR"},
{type:"writing",y:"2022",t_en:"Musical Experience Extended by the Metaverse: Case Studies",t_ko:"메타버스로 확장된 음악적 경험: 사례 중심으로",r_en:"Paper",r_ko:"논문 발표",m_en:"Korean Society for Western Music Theory",m_ko:"한국서양음악이론학회 학술대회",c:"KR"},
{type:"writing",y:"2021",t_en:"Performance and the Metaverse",t_ko:"공연과 메타버스",r_en:"Paper",r_ko:"논문 발표",m_en:"Korean Association for Cultural Economics, Fall Conference",m_ko:"한국문화경제학회 추계학술대회",c:"KR"},
{type:"writing",y:"2021",t_en:"Arts and Human-Centered Design in the Metaverse Era",t_ko:"메타버스 시대의 문화예술과 인간중심 디자인",r_en:"Paper",r_ko:"논문 발표",m_en:"Korean Society of Design History",m_ko:"한국디자인사학회",c:"KR"},
{type:"writing",y:"2021–",t_en:"ixi.media",t_ko:"아이엑스아이 ixi.media",r_en:"Editorial Board, Contributor",r_ko:"운영진·필진",m_en:"XR and immersive content magazine",m_ko:"XR 실감콘텐츠 매거진",c:"KR"},
{type:"writing",y:"2012",t_en:"Design and Implementation of a Web-based Co-creation System for Broadcast Program Formats",t_ko:"웹 기반 방송프로그램 포맷 공동창작시스템의 설계 및 구현",r_en:"Journal Article (KCI)",r_ko:"학술지 논문(KCI)",m_en:"Journal of the Korea Contents Association",m_ko:"한국콘텐츠학회논문지",c:"KR"},
{type:"writing",y:"2012",t_en:"Social Media Use and Marketing Strategies of Arts Organizations",t_ko:"문화예술단체의 소셜미디어 활용 현황 및 마케팅 전략",r_en:"Paper",r_ko:"논문 발표",m_en:"Korea Association of Arts Management conference",m_ko:"한국문화예술경영학회 학술대회",c:"KR"},
{type:"writing",y:"2011",t_en:"How Social Media Changes the Arts Ecosystem",t_ko:"소셜미디어를 통한 예술생태계 변화",r_en:"Paper",r_ko:"논문 발표",m_en:"Korea Knowledge Management Society conference",m_ko:"한국지식경영학회 학술대회",c:"KR"},
{type:"writing",y:"2010",t_en:"Social Media Strategies of International Arts Organizations: A Case Analysis",t_ko:"해외 문화예술단체의 소셜미디어 전략 및 활용사례 분석",r_en:"MA Thesis",r_ko:"석사학위 논문",m_en:"Korea National University of Arts",m_ko:"한국예술종합학교",c:"KR"},

/* ---------- WORKSHOPS & MENTORING (type teaching; f = workshop | mentor | uni) ---------- */
{type:"teaching",y:"2026",f:"mentor",t_en:"FuturaCanvas Global Distribution Workshop",t_ko:"퓨추라캔버스 글로벌 유통 워크숍",r_en:"Co-Mentor",r_ko:"공동 멘토",m_en:"Taking immersive works to international festivals and venues",m_ko:"몰입형 작품의 해외 페스티벌·베뉴 진출",c:"KR"},
{type:"teaching",y:"2026",f:"mentor",t_en:"APE CAMP",t_ko:"APE CAMP",r_en:"Mentor",r_ko:"멘토",m_en:"Art & technology convergence, Arts Council Korea",m_ko:"예술기술융합, 한국문화예술위원회",c:"KR"},
{type:"teaching",y:"2025",f:"workshop",t_en:"Art Tech for Life Hackathon",t_ko:"아트테크포라이프 해커톤",r_en:"Program Director",r_ko:"기획·운영 디렉터",m_en:"Creators prototype art × tech works in teams · Seongnam Cultural Foundation × Dankook University",m_ko:"창작자 팀이 예술기술 작품을 프로토타이핑 · 성남문화재단 × 단국대학교",c:"KR"},
{type:"teaching",y:"2025",f:"workshop",t_en:"New Content Academy — Virtual Visualization",t_ko:"뉴콘텐츠아카데미 가상시각화 과정",r_en:"Facilitator",r_ko:"퍼실리테이터",m_en:"Korea Creative Content Agency (KOCCA)",m_ko:"한국콘텐츠진흥원",c:"KR"},
{type:"teaching",y:"2025",f:"workshop",t_en:"VR Drawing Workshops",t_ko:"VR 드로잉 교육",r_en:"Workshop Lead",r_ko:"교육 진행",m_en:"Korean Film Archive",m_ko:"한국영상자료원",c:"KR"},
{type:"teaching",y:"2023–24",f:"mentor",t_en:"Art Korea Lab, XR & Metaverse Lab",t_ko:"아트코리아랩 XR·메타버스랩",r_en:"Future Mentor",r_ko:"퓨처멘토",m_en:"Korea Arts Management Service",m_ko:"예술경영지원센터",c:"KR"},
{type:"teaching",y:"2023",f:"workshop",t_en:"Arts & Tech Workshops for Teachers",t_ko:"예술꽃 씨앗학교·예술로 탐구생활 기술융합 워크숍",r_en:"Workshop Lead",r_ko:"워크숍 진행",m_en:"Digital tools for arts educators · KACES · Sejong Office of Education",m_ko:"예술교육자를 위한 디지털 도구 활용 · 한국문화예술교육진흥원 · 세종시교육청",c:"KR"},
{type:"teaching",y:"2021",f:"mentor",t_en:"Dance × Technology Creative Lab",t_ko:"무용기술 창작랩",r_en:"Facilitator, Tech Mentor",r_ko:"퍼실리테이터·기술멘토",m_en:"Korea National Contemporary Dance Company",m_ko:"국립현대무용단",c:"KR"},
{type:"teaching",y:"2021",f:"workshop",t_en:"Virtual Ball — Tech-integrated Arts Education",t_ko:"가상무도회 — 기술입은 문화예술교육",r_en:"Program Director",r_ko:"총괄기획",m_en:"KoCACA × Anyang Cultural Foundation",m_ko:"한국문화예술회관연합회 · 안양문화예술재단",c:"KR"},
{type:"teaching",y:"2025–",f:"uni",t_en:"Dankook University",t_ko:"단국대학교",r_en:"Visiting Professor",r_ko:"초빙교수",m_en:"Global K-Culture Convergence Talent Program",m_ko:"글로벌 K-컬처 선도융합인재양성사업단",c:"KR"},
{type:"teaching",y:"2020–",f:"uni",t_en:"Korea National University of Arts (K-Arts)",t_ko:"한국예술종합학교",r_en:"Lecturer",r_ko:"출강",m_en:"Arts Management, Schools of Drama and Dance (BA/MA)",m_ko:"연극원·무용원 예술경영전공 학사·석사",c:"KR"},
{type:"teaching",y:"2023–24",f:"uni",t_en:"Kyonggi University",t_ko:"경기대학교",r_en:"Adjunct Professor",r_ko:"겸임교수",m_en:"Convergence Content",m_ko:"융합콘텐츠전공",c:"KR"},
{type:"teaching",y:"2011–12",f:"uni",t_en:"Korea National University of Arts (K-Arts)",t_ko:"한국예술종합학교",r_en:"Lecturer",r_ko:"출강",m_en:"Arts Management",m_ko:"예술경영전공",c:"KR"},

/* ---------- JURIES, ADVISORY & RESEARCH (f = advisory | jury | research) ---------- */
{type:"jury",f:"advisory",y:"2026–27",t_en:"Content Business Advisory Board",t_ko:"콘텐츠 비즈니스 자문위원",r_en:"Advisor",r_ko:"자문위원",m_en:"Overseas Expansion Center, KOCCA",m_ko:"한국콘텐츠진흥원 콘텐츠 해외진출센터",c:"KR"},
{type:"jury",f:"jury",y:"2026",t_en:"AI × Art Creation Project Support",t_ko:"AI-예술 창제작 프로젝트 지원",r_en:"Juror",r_ko:"심사위원",m_en:"Korea Arts Management Service",m_ko:"예술경영지원센터",c:"KR"},
{type:"jury",f:"jury",y:"2026",t_en:"NEXT:ON 2026 — Media Art Content Competition",t_ko:"2026 미디어아트 콘텐츠 공모전 「NEXT:ON 2026」",r_en:"Juror",r_ko:"심사위원",m_en:"Incheon Technopark",m_ko:"인천테크노파크",c:"KR"},
{type:"jury",f:"jury",y:"2024",t_en:"Unfold X",t_ko:"언폴드엑스",r_en:"Juror",r_ko:"심사평가위원",m_en:"Seoul Foundation for Arts and Culture",m_ko:"서울문화재단",c:"KR"},
{type:"jury",f:"advisory",y:"2022",t_en:"Metaverse Expert Committee",t_ko:"메타버스 전문위원",r_en:"Committee Member",r_ko:"전문위원",m_en:"KOCCA",m_ko:"한국콘텐츠진흥원",c:"KR"},
{type:"jury",f:"advisory",y:"2021–22",t_en:"PAMS — Seoul Performing Arts Market",t_ko:"서울아트마켓 PAMS",r_en:"Connector",r_ko:"커넥터",m_en:"Korea Arts Management Service",m_ko:"예술경영지원센터",c:"KR"},
{type:"jury",f:"advisory",y:"2021",t_en:"Culture Technology Expert Committee",t_ko:"문화기술 전문위원",r_en:"Committee Member",r_ko:"전문위원",m_en:"Gyeonggi Content Agency",m_ko:"경기콘텐츠진흥원",c:"KR"},
{type:"jury",f:"jury",y:"2020",t_en:"Online Media Arts Support Program",t_ko:"온라인미디어 예술활동 지원사업",r_en:"Evaluator, Advisory Panel",r_ko:"평가위원·자문단",m_en:"Gyeonggi Cultural Foundation",m_ko:"경기문화재단",c:"KR"},
{type:"jury",f:"research",y:"2020",t_en:"Immersive Content Master Plan for a Tourism Hub City",t_ko:"관광거점도시 실감콘텐츠 사업 기본계획 수립",r_en:"Principal Researcher",r_ko:"책임연구원",m_en:"Gangneung City",m_ko:"강릉시",c:"KR"},
{type:"jury",f:"research",y:"2020",t_en:"Online Arts Education Trend Report",t_ko:"온라인 문화예술교육 동향리포트",r_en:"Co-researcher",r_ko:"공동연구원",m_en:"KACES",m_ko:"한국문화예술교육진흥원",c:"KR"},
{type:"jury",f:"research",y:"2018",t_en:"Immersive Content Planning: Korean and International Cases",t_ko:"실감형 문화강국 프로젝트 콘텐츠 기획 국내외 사례연구",r_en:"Researcher",r_ko:"연구",m_en:"KOCCA",m_ko:"한국콘텐츠진흥원",c:"KR"},
{type:"jury",f:"research",y:"2016–18",t_en:"Multi-projection System and Content Development",t_ko:"다면상영 시스템 및 콘텐츠 개발",r_en:"Principal Investigator",r_ko:"책임연구원",m_en:"National VR flagship project, Ministry of Science, ICT and Future Planning",m_ko:"미래창조과학부 가상현실 5대 선도 프로젝트",c:"KR"},
{type:"jury",f:"research",y:"2009",t_en:"Music Industry Trend Analysis 2009",t_ko:"2009 음악산업 동향분석",r_en:"Principal Researcher",r_ko:"책임연구원",m_en:"KOCCA",m_ko:"한국콘텐츠진흥원",c:"KR"},

/* ---------- AWARDS ---------- */
{type:"award",y:"2026",t_en:"Creative Award — New Idea",t_ko:"Creative Award — New Idea상",r_en:"Palace Immersive Goong",r_ko:"이머시브 궁",m_en:"HCI Korea 2026",m_ko:"HCI Korea 2026",c:"KR"},
{type:"award",y:"2026",t_en:"Laval Virtual Awards — Entertainment, Finalist",t_ko:"라발 버추얼 어워드 엔터테인먼트 부문 파이널리스트",r_en:"Palace Immersive Goong",r_ko:"이머시브 궁",m_en:"",m_ko:"",c:"FR"},
{type:"award",y:"2025",t_en:"Best in Show, Immersive Pavilion",t_ko:"이머시브 파빌리온 Best in Show",r_en:"Palace Immersive Goong",r_ko:"이머시브 궁",m_en:"ACM SIGGRAPH 2025",m_ko:"ACM SIGGRAPH 2025",c:"CA"},
{type:"award",y:"2025",t_en:"Arts Management Award — Minister's Prize",t_ko:"예술경영대상 문화체육관광부 장관상",r_en:"Giioii Inc. (company)",r_ko:"기어이 주식회사(기관 수상)",m_en:"Ministry of Culture, Sports and Tourism",m_ko:"문화체육관광부",c:"KR"},
{type:"award",y:"2023",t_en:"Best VR — Ji.hlava IDFF; Luxembourg",t_ko:"Best VR — 이흘라바 영화제, 룩셈부르크",r_en:"Missing Pictures",r_ko:"미싱 픽처스",m_en:"",m_ko:"",c:"CZ LU"},
{type:"award",y:"2022",t_en:"Metaverse Innovation Award — Jury Chair's Prize",t_ko:"메타버스 이노베이션 어워드 심사위원장상",r_en:"The Lost Face 1895",r_ko:"잃어버린 얼굴 1895",m_en:"Ministry of Science and ICT",m_ko:"과학기술정보통신부",c:"KR"},
{type:"award",y:"2022",t_en:"VR Awards — VR Film of the Year, Finalist",t_ko:"VR 어워드 올해의 VR 필름 파이널리스트",r_en:"Missing Pictures",r_ko:"미싱 픽처스",m_en:"",m_ko:"",c:"GB"},
{type:"award",y:"2016–17",t_en:"CGV Mentoring Award, Top Prize · Self-Leader Mentoring, Top Group",t_ko:"CGV 멘토링 최우수상 · 셀프리더 멘토링 최우수그룹",r_en:"",r_ko:"",m_en:"CJ CGV",m_ko:"CJ CGV",c:"KR"},
{type:"award",y:"2014–17",t_en:"CGV Next-Generation Leader · CJ Group EDGE Program",t_ko:"CGV 차세대 리더 · CJ그룹 EDGE 멘토링",r_en:"Selected",r_ko:"선발",m_en:"CJ CGV · CJ Group",m_ko:"CJ CGV · CJ그룹",c:"KR"},
{type:"award",y:"2016",t_en:"CJ CGV Value Gold Award",t_ko:"CJ CGV 가치실천 금상",r_en:"BIGBANG MADE (team)",r_ko:"빅뱅 메이드(팀 수상)",m_en:"",m_ko:"",c:"KR"},
{type:"award",y:"2016",t_en:"CJ CGV Performance Silver Award",t_ko:"CJ CGV 성과창출 은상",r_en:"ScreenX",r_ko:"스크린엑스",m_en:"",m_ko:"",c:"KR"},
{type:"award",y:"2012",t_en:"CGV Award — Grand Prize",t_ko:"CGV 어워드 대상",r_en:"ScreenX launch",r_ko:"ScreenX 첫 런칭",m_en:"",m_ko:"",c:"KR"},
{type:"award",y:"2010",t_en:"Arts Policy Proposal Competition — Excellence Award",t_ko:"미래를 바꿀 예술정책 공모 우수상",r_en:"",r_ko:"",m_en:"Arts Council Korea",m_ko:"한국문화예술위원회",c:"KR"}
];

const EXP = [
 {y:"2020–",t_en:"Giioii Inc.",t_ko:"기어이 주식회사",r_en:"Founder & CEO, Creative Director, Producer",r_ko:"대표·크리에이티브 디렉터·프로듀서"},
 {y:"2019–20",t_en:"Citylights VR, Los Angeles",t_ko:"Citylights VR, 로스앤젤레스",r_en:"Global Business Consultant",r_ko:"글로벌 비즈니스 컨설턴트"},
 {y:"2012–19",t_en:"CJ CGV ScreenX Studio",t_ko:"CJ CGV 스크린엑스 스튜디오",r_en:"Founding Member · led global launch · Head of Team",r_ko:"창립 멤버 · 글로벌 런칭 · 부장"},
 {y:"2010–11",t_en:"Hyundai Research Institute",t_ko:"현대경제연구원",r_en:"Planning Office",r_ko:"기획실"},
 {y:"2008–10",t_en:"Ubiquitous Art & Technology Lab, K-Arts",t_ko:"한국예술종합학교 유비쿼터스 아트앤테크놀로지랩",r_en:"Researcher",r_ko:"연구원"},
 {y:"2008–10",t_en:"Tacit Group",t_ko:"테싯그룹",r_en:"Planning & Communications",r_ko:"기획·홍보"},
 {y:"2006–08",t_en:"Nstory",t_ko:"엔스토리",r_en:"Content planning",r_ko:"콘텐츠 기획"},
 {y:"2004–06",t_en:"Korea Creative Content Agency (KOCCA) · Korea Pavilion, Brand Licensing London 2005",t_ko:"한국콘텐츠진흥원 · 영국 Brand Licensing 2005 한국관",r_en:"Global Marketing Associate",r_ko:"글로벌 마케팅"},
 {y:"2002–04",t_en:"KISTI · Ahn Graphics",t_ko:"한국과학기술정보연구원 · 안그라픽스",r_en:"Research and publishing",r_ko:"연구·출판"}
];
const EDU = [
 {y:"2026",t_en:"KAIST Graduate School of Culture Technology",t_ko:"KAIST 문화기술대학원",r_en:"Micro-degree, CT × AI",r_ko:"CT×AI 마이크로디그리"},
 {y:"2019",t_en:"UCLA Extension",t_ko:"UCLA",r_en:"Certificate, Entertainment Business Management",r_ko:"엔터테인먼트 비즈니스 매니지먼트 수료"},
 {y:"2010",t_en:"Korea National University of Arts (K-Arts)",t_ko:"한국예술종합학교",r_en:"MA, Arts Management",r_ko:"예술경영 전문사(석사)"},
 {y:"2002",t_en:"Hankuk University of Foreign Studies",t_ko:"한국외국어대학교",r_en:"BA, German",r_ko:"독일어과 학사"}
];
const ORGS_KO = "심사·평가·자문 기관: 예술경영지원센터, 한국문화예술위원회, 한국콘텐츠진흥원, 한국전파진흥협회, 한국문화예술교육진흥원, 경기문화재단, 경기콘텐츠진흥원, 전주문화재단, 서울남산국악당, 아트센터나비, 파라다이스아트랩, 한국소프트웨어저작권협회, 한국사립미술관협회, ACTGROUND, 강릉시, 한국예술종합학교, 서강대학교, 경기대학교 외";
const ORGS_EN = "Also served as juror, evaluator or advisor for: Korea Arts Management Service, Arts Council Korea, KOCCA, Korea Radio Promotion Association, KACES, Gyeonggi Cultural Foundation, Gyeonggi Content Agency, Jeonju Cultural Foundation, Seoul Namsan Gugakdang, Art Center Nabi, PARADISE ART LAB, Korea Software Copyright Committee, Korea Private Museum Association, ACTGROUND, Gangneung City, K-Arts, Sogang University and Kyonggi University.";

const BIO_EN = [
 "Rene Hyewon Lee calls herself a boundary dweller. For twenty years she has worked in the space between art and technology, and between Korea and the international scene, taking each new technology and asking what kind of story it is suited to. Her studio's name, Giioii, comes from that question: a story that technology fits.",
 "She believes in the power of story, and she looks for creativity inside technology itself. Her works give the audience a role and make them the protagonist: in <i>Palace Immersive Goong</i>, six visitors walk into a 1902 court banquet that never took place; in <i>Nuville Bucheon</i>, an AI guide sends players across the city on missions; in <i>Anima</i>, participants' drawings become motion through AI and motion capture. <i>Palace Immersive Goong</i> received Best in Show at the SIGGRAPH 2025 Immersive Pavilion.",
 "Works she has produced have been officially selected more than 30 times at international festivals including SXSW, Tribeca, IDFA DocLab and NewImages. Earlier, as a founding member of CJ CGV ScreenX, she led the 270° multi-projection format through its global launch, and at KOCCA she worked in global marketing.",
 "She continues to develop and produce new work at Giioii, testing AI and other emerging tools as creative material. Alongside her own productions, she designs workshops and hackathons where artists make new tools their own, and mentors creators heading to international markets. She teaches at Korea National University of Arts and is a visiting professor at Dankook University."
];
const BIO_KO = [
 "이혜원은 스스로를 ‘경계인’이라 부른다. 지난 20년간 예술과 기술 사이, 한국과 해외 현장 사이에서 일하며, 새로운 기술이 나올 때마다 그 기술에 어울리는 이야기가 무엇인지 물어 왔다. 그가 이끄는 스튜디오 ‘기어이’의 이름도 ‘기술이 어울리는 이야기’에서 왔다.",
 "그는 이야기의 힘을 믿고, 기술 안에서 새로운 창의성을 발견한다. 그의 작업은 관객에게 역할을 주고 이야기의 주인공으로 만든다. 〈이머시브 궁〉에서는 여섯 명의 관객이 1902년 열리지 못한 궁중 연회 안을 걷고, 〈누빌부천〉에서는 AI가 참가자에게 미션을 내리며 도시를 움직이게 하고, 〈애니마〉에서는 참여자의 드로잉이 AI와 모션캡처를 거쳐 움직임이 된다. 〈이머시브 궁〉은 SIGGRAPH 2025 이머시브 파빌리온 Best in Show를 받았다.",
 "그가 프로듀싱한 작품들은 SXSW, 트라이베카, IDFA DocLab, 뉴이미지 등 국제 페스티벌에 30회 이상 공식 초청됐다. 앞서 CJ CGV ScreenX 창립 멤버로 270° 다면상영 포맷의 글로벌 런칭을 이끌었고, 한국콘텐츠진흥원에서 글로벌 마케팅을 맡았다.",
 "지금도 기어이에서 새로운 작품을 기획·제작하며, AI를 비롯한 새로운 기술을 창작의 재료로 실험하고 있다. 자신의 작업과 함께 창작자들이 새로운 도구를 자기 언어로 만들도록 돕는 워크숍과 해커톤을 설계하고, 해외 시장으로 향하는 창작자를 멘토링한다. 한국예술종합학교에 출강하며 단국대학교 초빙교수로 재직 중이다."
];


/* ---------- PRESS & INTERVIEWS (원문 제목 그대로, 최신순) ---------- */
const PRESS = [
 {d:"2025-10-10",t:"이야기 속으로 접속, 이혜원 기어이 대표 [인터뷰]",o_en:"DEN Magazine",o_ko:"덴 매거진",q_en:"On giving the audience a role and making them the protagonist",q_ko:"관객에게 역할을 부여해 이야기의 주인공으로",url:"https://www.theden.co.kr/news/articleView.html?idxno=4035"},
 {d:"2023-08-24",t:"가상과 현실의 리얼리티를 연결하다: ‘기어이’ 인터뷰",o_en:"iimedia Newsletter No. 32",o_ko:"아이아이미디어 뉴스레터 32호",q_en:"On content grounded in storytelling rather than technology",q_ko:"기술보다 스토리텔링이 기반이 되는 콘텐츠",url:"https://maily.so/iimedia/posts/3jrkdv76o51"},
 {d:"2023-02-03",t:"[아티(ATI) 기업탐방] 기어이",o_en:"ArtMore, Korea Arts Management Service",o_ko:"아트모아, 예술경영지원센터",q_en:"On the studio's name: a story that technology fits",q_ko:"기술이 어울리는 이야기",url:"https://artmore.kr/sub/comJob/com_visit_view.do?bbs_detail_idx=555"}
];
