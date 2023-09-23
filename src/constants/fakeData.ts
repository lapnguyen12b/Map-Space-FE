import {
  FooterPopularBlog,
  ParkingByCityContent,
  ParkingByCityNearby,
} from "src/types";

const PARKING_BY_CITY_CONTENT: ParkingByCityContent[] = [
  {
    title: "Fergus Falls Municipal Airport - Einar Mickelson Field",
    description:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    image: "http://dummyimage.com/170x120.png/5fa2dd/ffffff",
    href: "http://chronoengine.com/justo/eu/massa/donec/dapibus.aspx?justo=at&eu=velit&massa=eu&donec=est&dapibus=congue&duis=elementum&at=in&velit=hac&eu=habitasse&est=platea&congue=dictumst&elementum=morbi&in=vestibulum&hac=velit&habitasse=id&platea=pretium&dictumst=iaculis&morbi=diam&vestibulum=erat&velit=fermentum&id=justo&pretium=nec&iaculis=condimentum&diam=neque&erat=sapien&fermentum=placerat&justo=ante&nec=nulla&condimentum=justo&neque=aliquam&sapien=quis&placerat=turpis&ante=eget&nulla=elit&justo=sodales&aliquam=scelerisque&quis=mauris&turpis=sit&eget=amet&elit=eros&sodales=suspendisse&scelerisque=accumsan&mauris=tortor&sit=quis&amet=turpis&eros=sed&suspendisse=ante&accumsan=vivamus&tortor=tortor&quis=duis&turpis=mattis",
  },
  {
    title: "28 de Noviembre Airport",
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    image: "http://dummyimage.com/170x120.png/ff4444/ffffff",
    href: "http://free.fr/mauris/viverra/diam/vitae/quam.js?mauris=nisi&sit=vulputate&amet=nonummy&eros=maecenas&suspendisse=tincidunt&accumsan=lacus&tortor=at&quis=velit&turpis=vivamus&sed=vel&ante=nulla&vivamus=eget&tortor=eros&duis=elementum&mattis=pellentesque&egestas=quisque&metus=porta&aenean=volutpat&fermentum=erat&donec=quisque&ut=erat&mauris=eros&eget=viverra&massa=eget&tempor=congue&convallis=eget&nulla=semper&neque=rutrum&libero=nulla&convallis=nunc&eget=purus&eleifend=phasellus&luctus=in&ultricies=felis&eu=donec&nibh=semper&quisque=sapien&id=a&justo=libero&sit=nam&amet=dui&sapien=proin&dignissim=leo&vestibulum=odio&vestibulum=porttitor&ante=id&ipsum=consequat&primis=in&in=consequat&faucibus=ut&orci=nulla&luctus=sed&et=accumsan&ultrices=felis&posuere=ut&cubilia=at&curae=dolor&nulla=quis&dapibus=odio&dolor=consequat&vel=varius&est=integer&donec=ac&odio=leo&justo=pellentesque&sollicitudin=ultrices&ut=mattis&suscipit=odio&a=donec&feugiat=vitae",
  },
  {
    title: "Payam International Airport",
    description:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    image: "http://dummyimage.com/170x120.png/dddddd/000000",
    href: "http://ucoz.ru/vestibulum/ac/est/lacinia/nisi/venenatis/tristique.png?dapibus=sit",
  },
];

const PARKING_BY_CITY_NEARBY: ParkingByCityNearby[] = [
  {
    title: "Calbayog Airport",
    href: "http://ucoz.com/mattis.json?lacus=nulla&at=pede&velit=ullamcorper&vivamus=augue&vel=a&nulla=suscipit&eget=nulla&eros=elit&elementum=ac&pellentesque=nulla&quisque=sed&porta=vel&volutpat=enim&erat=sit&quisque=amet&erat=nunc&eros=viverra&viverra=dapibus&eget=nulla&congue=suscipit&eget=ligula&semper=in&rutrum=lacus&nulla=curabitur&nunc=at&purus=ipsum&phasellus=ac&in=tellus&felis=semper&donec=interdum&semper=mauris&sapien=ullamcorper&a=purus&libero=sit&nam=amet&dui=nulla&proin=quisque&leo=arcu&odio=libero&porttitor=rutrum&id=ac&consequat=lobortis&in=vel&consequat=dapibus",
  },
  {
    title: "Haliwen Airport",
    href: "https://dion.ne.jp/in.xml?lectus=in&in=hac&quam=habitasse&fringilla=platea&rhoncus=dictumst&mauris=maecenas&enim=ut&leo=massa&rhoncus=quis&sed=augue&vestibulum=luctus&sit=tincidunt&amet=nulla&cursus=mollis&id=molestie&turpis=lorem&integer=quisque&aliquet=ut&massa=erat&id=curabitur&lobortis=gravida&convallis=nisi&tortor=at&risus=nibh&dapibus=in&augue=hac&vel=habitasse&accumsan=platea&tellus=dictumst&nisi=aliquam&eu=augue&orci=quam&mauris=sollicitudin&lacinia=vitae&sapien=consectetuer&quis=eget&libero=rutrum&nullam=at&sit=lorem&amet=integer&turpis=tincidunt&elementum=ante&ligula=vel&vehicula=ipsum&consequat=praesent&morbi=blandit&a=lacinia&ipsum=erat&integer=vestibulum&a=sed&nibh=magna&in=at&quis=nunc&justo=commodo&maecenas=placerat&rhoncus=praesent&aliquam=blandit&lacus=nam&morbi=nulla&quis=integer&tortor=pede&id=justo&nulla=lacinia&ultrices=eget&aliquet=tincidunt&maecenas=eget&leo=tempus&odio=vel&condimentum=pede&id=morbi&luctus=porttitor&nec=lorem&molestie=id&sed=ligula&justo=suspendisse&pellentesque=ornare&viverra=consequat&pede=lectus&ac=in&diam=est&cras=risus",
  },
  {
    title: "Samos Airport",
    href: "https://webs.com/ante/nulla/justo/aliquam/quis/turpis.jsp?mattis=natoque&odio=penatibus&donec=et&vitae=magnis&nisi=dis&nam=parturient&ultrices=montes&libero=nascetur&non=ridiculus&mattis=mus&pulvinar=etiam&nulla=vel&pede=augue&ullamcorper=vestibulum&augue=rutrum&a=rutrum&suscipit=neque&nulla=aenean&elit=auctor&ac=gravida&nulla=sem&sed=praesent&vel=id&enim=massa&sit=id&amet=nisl&nunc=venenatis&viverra=lacinia&dapibus=aenean&nulla=sit&suscipit=amet&ligula=justo&in=morbi&lacus=ut&curabitur=odio&at=cras&ipsum=mi&ac=pede&tellus=malesuada&semper=in&interdum=imperdiet&mauris=et&ullamcorper=commodo&purus=vulputate&sit=justo&amet=in&nulla=blandit&quisque=ultrices&arcu=enim&libero=lorem&rutrum=ipsum&ac=dolor&lobortis=sit&vel=amet&dapibus=consectetuer&at=adipiscing&diam=elit&nam=proin&tristique=interdum&tortor=mauris&eu=non",
  },
  {
    title: "Kushiro Airport",
    href: "https://bravesites.com/dis/parturient/montes.html?dolor=hac&sit=habitasse&amet=platea&consectetuer=dictumst&adipiscing=maecenas&elit=ut&proin=massa&risus=quis&praesent=augue&lectus=luctus&vestibulum=tincidunt&quam=nulla&sapien=mollis&varius=molestie&ut=lorem&blandit=quisque&non=ut&interdum=erat&in=curabitur&ante=gravida&vestibulum=nisi&ante=at&ipsum=nibh&primis=in&in=hac&faucibus=habitasse&orci=platea&luctus=dictumst&et=aliquam&ultrices=augue&posuere=quam&cubilia=sollicitudin&curae=vitae&duis=consectetuer&faucibus=eget&accumsan=rutrum&odio=at&curabitur=lorem&convallis=integer&duis=tincidunt&consequat=ante&dui=vel&nec=ipsum&nisi=praesent&volutpat=blandit&eleifend=lacinia",
  },
  {
    title: "Cape Barren Island Airport",
    href: "http://chronoengine.com/posuere/cubilia/curae/nulla/dapibus/dolor/vel.xml?curae=posuere&donec=metus&pharetra=vitae&magna=ipsum&vestibulum=aliquam&aliquet=non&ultrices=mauris&erat=morbi&tortor=non&sollicitudin=lectus&mi=aliquam&sit=sit&amet=amet&lobortis=diam&sapien=in&sapien=magna&non=bibendum&mi=imperdiet&integer=nullam&ac=orci&neque=pede&duis=venenatis&bibendum=non&morbi=sodales&non=sed&quam=tincidunt&nec=eu&dui=felis&luctus=fusce&rutrum=posuere&nulla=felis&tellus=sed&in=lacus&sagittis=morbi&dui=sem&vel=mauris&nisl=laoreet&duis=ut&ac=rhoncus&nibh=aliquet&fusce=pulvinar&lacus=sed&purus=nisl&aliquet=nunc&at=rhoncus&feugiat=dui&non=vel&pretium=sem&quis=sed&lectus=sagittis&suspendisse=nam&potenti=congue&in=risus&eleifend=semper&quam=porta&a=volutpat&odio=quam&in=pede&hac=lobortis&habitasse=ligula&platea=sit&dictumst=amet&maecenas=eleifend&ut=pede&massa=libero&quis=quis&augue=orci&luctus=nullam&tincidunt=molestie&nulla=nibh&mollis=in&molestie=lectus",
  },
  {
    title: "Fukui Airport",
    href: "http://nasa.gov/orci/luctus/et/ultrices/posuere/cubilia/curae.json?mus=vestibulum&etiam=ante&vel=ipsum&augue=primis&vestibulum=in&rutrum=faucibus&rutrum=orci&neque=luctus&aenean=et&auctor=ultrices&gravida=posuere&sem=cubilia&praesent=curae&id=donec&massa=pharetra&id=magna&nisl=vestibulum&venenatis=aliquet&lacinia=ultrices&aenean=erat&sit=tortor&amet=sollicitudin&justo=mi&morbi=sit&ut=amet&odio=lobortis&cras=sapien",
  },
  {
    title: "Ain Arnat Airport",
    href: "http://dailymail.co.uk/nulla.png?lorem=turpis&ipsum=integer&dolor=aliquet&sit=massa&amet=id&consectetuer=lobortis&adipiscing=convallis&elit=tortor&proin=risus&interdum=dapibus&mauris=augue&non=vel&ligula=accumsan&pellentesque=tellus",
  },
  {
    title: "David Wayne Hooks Memorial Airport",
    href: "http://cpanel.net/ac/leo.jpg?et=turpis&eros=a&vestibulum=pede&ac=posuere&est=nonummy&lacinia=integer&nisi=non&venenatis=velit&tristique=donec&fusce=diam&congue=neque&diam=vestibulum&id=eget&ornare=vulputate&imperdiet=ut&sapien=ultrices&urna=vel&pretium=augue&nisl=vestibulum&ut=ante&volutpat=ipsum&sapien=primis&arcu=in&sed=faucibus&augue=orci&aliquam=luctus&erat=et&volutpat=ultrices&in=posuere&congue=cubilia&etiam=curae&justo=donec&etiam=pharetra&pretium=magna&iaculis=vestibulum&justo=aliquet&in=ultrices&hac=erat&habitasse=tortor&platea=sollicitudin&dictumst=mi&etiam=sit&faucibus=amet&cursus=lobortis&urna=sapien&ut=sapien&tellus=non&nulla=mi&ut=integer&erat=ac&id=neque&mauris=duis&vulputate=bibendum&elementum=morbi&nullam=non&varius=quam&nulla=nec&facilisi=dui&cras=luctus&non=rutrum&velit=nulla&nec=tellus&nisi=in&vulputate=sagittis&nonummy=dui&maecenas=vel&tincidunt=nisl&lacus=duis&at=ac&velit=nibh&vivamus=fusce&vel=lacus&nulla=purus&eget=aliquet&eros=at&elementum=feugiat&pellentesque=non&quisque=pretium&porta=quis&volutpat=lectus",
  },
  {
    title: "Suvarnabhumi Airport",
    href: "https://themeforest.net/lacus/at/turpis/donec/posuere/metus/vitae.html?purus=tempus&aliquet=vivamus&at=in&feugiat=felis&non=eu&pretium=sapien&quis=cursus&lectus=vestibulum&suspendisse=proin&potenti=eu&in=mi&eleifend=nulla&quam=ac&a=enim&odio=in&in=tempor&hac=turpis&habitasse=nec&platea=euismod&dictumst=scelerisque&maecenas=quam&ut=turpis&massa=adipiscing&quis=lorem&augue=vitae&luctus=mattis&tincidunt=nibh&nulla=ligula&mollis=nec&molestie=sem&lorem=duis&quisque=aliquam&ut=convallis&erat=nunc&curabitur=proin&gravida=at&nisi=turpis&at=a&nibh=pede&in=posuere&hac=nonummy&habitasse=integer&platea=non&dictumst=velit&aliquam=donec&augue=diam&quam=neque&sollicitudin=vestibulum&vitae=eget&consectetuer=vulputate&eget=ut&rutrum=ultrices&at=vel&lorem=augue&integer=vestibulum&tincidunt=ante&ante=ipsum&vel=primis&ipsum=in&praesent=faucibus&blandit=orci&lacinia=luctus&erat=et&vestibulum=ultrices&sed=posuere&magna=cubilia&at=curae&nunc=donec&commodo=pharetra&placerat=magna&praesent=vestibulum&blandit=aliquet&nam=ultrices&nulla=erat&integer=tortor&pede=sollicitudin&justo=mi&lacinia=sit&eget=amet&tincidunt=lobortis&eget=sapien&tempus=sapien&vel=non&pede=mi&morbi=integer&porttitor=ac&lorem=neque&id=duis&ligula=bibendum&suspendisse=morbi&ornare=non&consequat=quam&lectus=nec&in=dui&est=luctus&risus=rutrum&auctor=nulla&sed=tellus",
  },
  {
    title: "Pinto Martins International Airport",
    href: "https://w3.org/a/ipsum.xml?turpis=quis&adipiscing=justo&lorem=maecenas&vitae=rhoncus&mattis=aliquam&nibh=lacus&ligula=morbi&nec=quis&sem=tortor&duis=id&aliquam=nulla&convallis=ultrices&nunc=aliquet&proin=maecenas&at=leo&turpis=odio&a=condimentum&pede=id&posuere=luctus&nonummy=nec&integer=molestie&non=sed&velit=justo&donec=pellentesque&diam=viverra&neque=pede&vestibulum=ac&eget=diam&vulputate=cras&ut=pellentesque&ultrices=volutpat&vel=dui&augue=maecenas&vestibulum=tristique&ante=est&ipsum=et&primis=tempus&in=semper&faucibus=est&orci=quam&luctus=pharetra&et=magna&ultrices=ac&posuere=consequat&cubilia=metus&curae=sapien&donec=ut&pharetra=nunc&magna=vestibulum&vestibulum=ante&aliquet=ipsum&ultrices=primis&erat=in&tortor=faucibus&sollicitudin=orci",
  },
];

const FOOTER_POPULAR_BLOGS: FooterPopularBlog[] = [
  {
    title:
      "at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in",
    href: "http://miitbeian.gov.cn/sapien/sapien/non.aspx?nulla=cubilia&facilisi=curae&cras=mauris&non=viverra&velit=diam&nec=vitae&nisi=quam&vulputate=suspendisse&nonummy=potenti&maecenas=nullam&tincidunt=porttitor&lacus=lacus&at=at&velit=turpis&vivamus=donec&vel=posuere&nulla=metus&eget=vitae&eros=ipsum&elementum=aliquam&pellentesque=non&quisque=mauris&porta=morbi&volutpat=non&erat=lectus&quisque=aliquam&erat=sit&eros=amet&viverra=diam&eget=in&congue=magna&eget=bibendum&semper=imperdiet&rutrum=nullam&nulla=orci&nunc=pede&purus=venenatis&phasellus=non&in=sodales&felis=sed&donec=tincidunt&semper=eu&sapien=felis&a=fusce&libero=posuere&nam=felis&dui=sed&proin=lacus&leo=morbi&odio=sem&porttitor=mauris&id=laoreet&consequat=ut&in=rhoncus&consequat=aliquet&ut=pulvinar&nulla=sed&sed=nisl&accumsan=nunc&felis=rhoncus&ut=dui&at=vel&dolor=sem&quis=sed&odio=sagittis&consequat=nam&varius=congue&integer=risus&ac=semper&leo=porta&pellentesque=volutpat&ultrices=quam&mattis=pede&odio=lobortis&donec=ligula&vitae=sit&nisi=amet&nam=eleifend",
  },
  {
    title:
      "tellus semper interdum mauris ullamcorper purus sit amet nulla quisque",
    href: "http://japanpost.jp/luctus/tincidunt/nulla/mollis.jpg?eget=nisl&eleifend=nunc&luctus=rhoncus&ultricies=dui&eu=vel&nibh=sem&quisque=sed&id=sagittis&justo=nam&sit=congue&amet=risus&sapien=semper&dignissim=porta&vestibulum=volutpat&vestibulum=quam&ante=pede&ipsum=lobortis&primis=ligula&in=sit&faucibus=amet&orci=eleifend&luctus=pede&et=libero&ultrices=quis&posuere=orci&cubilia=nullam&curae=molestie&nulla=nibh&dapibus=in&dolor=lectus&vel=pellentesque&est=at&donec=nulla&odio=suspendisse&justo=potenti&sollicitudin=cras&ut=in&suscipit=purus&a=eu&feugiat=magna&et=vulputate&eros=luctus&vestibulum=cum&ac=sociis&est=natoque&lacinia=penatibus&nisi=et&venenatis=magnis&tristique=dis&fusce=parturient&congue=montes&diam=nascetur&id=ridiculus&ornare=mus&imperdiet=vivamus&sapien=vestibulum&urna=sagittis&pretium=sapien&nisl=cum&ut=sociis&volutpat=natoque&sapien=penatibus&arcu=et&sed=magnis&augue=dis&aliquam=parturient&erat=montes&volutpat=nascetur&in=ridiculus&congue=mus&etiam=etiam&justo=vel&etiam=augue&pretium=vestibulum&iaculis=rutrum&justo=rutrum&in=neque&hac=aenean&habitasse=auctor&platea=gravida&dictumst=sem&etiam=praesent&faucibus=id&cursus=massa",
  },
  {
    title:
      "orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt",
    href: "http://hostgator.com/tristique.aspx?rutrum=amet&nulla=cursus&tellus=id&in=turpis&sagittis=integer&dui=aliquet&vel=massa&nisl=id&duis=lobortis&ac=convallis&nibh=tortor&fusce=risus&lacus=dapibus&purus=augue&aliquet=vel&at=accumsan&feugiat=tellus&non=nisi&pretium=eu&quis=orci&lectus=mauris&suspendisse=lacinia&potenti=sapien&in=quis&eleifend=libero&quam=nullam&a=sit&odio=amet&in=turpis&hac=elementum&habitasse=ligula&platea=vehicula&dictumst=consequat&maecenas=morbi&ut=a&massa=ipsum&quis=integer&augue=a&luctus=nibh&tincidunt=in&nulla=quis&mollis=justo&molestie=maecenas&lorem=rhoncus&quisque=aliquam&ut=lacus&erat=morbi&curabitur=quis&gravida=tortor&nisi=id&at=nulla&nibh=ultrices&in=aliquet&hac=maecenas&habitasse=leo&platea=odio&dictumst=condimentum&aliquam=id&augue=luctus&quam=nec&sollicitudin=molestie&vitae=sed&consectetuer=justo&eget=pellentesque&rutrum=viverra&at=pede&lorem=ac&integer=diam&tincidunt=cras&ante=pellentesque&vel=volutpat&ipsum=dui&praesent=maecenas&blandit=tristique&lacinia=est&erat=et&vestibulum=tempus&sed=semper&magna=est&at=quam&nunc=pharetra&commodo=magna&placerat=ac&praesent=consequat&blandit=metus",
  },
];

const FOOTER_NAVIGATION: FooterPopularBlog[] = [
  {
    title: "Gleason Inc",
    href: "http://examiner.com/nulla/nunc/purus/phasellus/in/felis/donec.json?nascetur=at&ridiculus=nunc&mus=commodo&etiam=placerat&vel=praesent&augue=blandit&vestibulum=nam&rutrum=nulla&rutrum=integer&neque=pede&aenean=justo&auctor=lacinia&gravida=eget&sem=tincidunt&praesent=eget&id=tempus&massa=vel&id=pede&nisl=morbi&venenatis=porttitor&lacinia=lorem&aenean=id&sit=ligula&amet=suspendisse&justo=ornare&morbi=consequat&ut=lectus",
  },
  {
    title: "Marks-Larson",
    href: "http://amazonaws.com/sit/amet/nunc/viverra/dapibus/nulla/suscipit.js?ut=augue&suscipit=vestibulum&a=ante&feugiat=ipsum&et=primis&eros=in&vestibulum=faucibus&ac=orci&est=luctus&lacinia=et&nisi=ultrices&venenatis=posuere&tristique=cubilia&fusce=curae&congue=donec&diam=pharetra&id=magna&ornare=vestibulum&imperdiet=aliquet&sapien=ultrices&urna=erat&pretium=tortor&nisl=sollicitudin&ut=mi&volutpat=sit&sapien=amet&arcu=lobortis&sed=sapien&augue=sapien&aliquam=non&erat=mi&volutpat=integer&in=ac&congue=neque&etiam=duis&justo=bibendum&etiam=morbi&pretium=non&iaculis=quam&justo=nec&in=dui&hac=luctus&habitasse=rutrum&platea=nulla&dictumst=tellus&etiam=in&faucibus=sagittis&cursus=dui&urna=vel&ut=nisl&tellus=duis&nulla=ac&ut=nibh&erat=fusce&id=lacus&mauris=purus&vulputate=aliquet&elementum=at&nullam=feugiat&varius=non&nulla=pretium&facilisi=quis&cras=lectus&non=suspendisse&velit=potenti&nec=in&nisi=eleifend&vulputate=quam&nonummy=a&maecenas=odio&tincidunt=in&lacus=hac&at=habitasse&velit=platea&vivamus=dictumst&vel=maecenas&nulla=ut&eget=massa&eros=quis&elementum=augue&pellentesque=luctus&quisque=tincidunt&porta=nulla&volutpat=mollis",
  },
  {
    title: "Marquardt-Shields",
    href: "http://nba.com/in/quam/fringilla.png?vel=hac&accumsan=habitasse&tellus=platea&nisi=dictumst&eu=maecenas&orci=ut&mauris=massa&lacinia=quis&sapien=augue&quis=luctus&libero=tincidunt&nullam=nulla&sit=mollis&amet=molestie&turpis=lorem&elementum=quisque&ligula=ut&vehicula=erat&consequat=curabitur&morbi=gravida&a=nisi&ipsum=at",
  },
  {
    title: "Kilback LLC",
    href: "https://paginegialle.it/pede/posuere/nonummy/integer/non/velit.png?nunc=eu&viverra=interdum&dapibus=eu&nulla=tincidunt&suscipit=in&ligula=leo&in=maecenas&lacus=pulvinar&curabitur=lobortis&at=est&ipsum=phasellus&ac=sit",
  },
  {
    title: "Bernier LLC",
    href: "https://t.co/posuere/metus/vitae/ipsum/aliquam/non.aspx?morbi=orci&quis=luctus&tortor=et&id=ultrices&nulla=posuere&ultrices=cubilia&aliquet=curae&maecenas=nulla&leo=dapibus&odio=dolor&condimentum=vel&id=est&luctus=donec&nec=odio&molestie=justo&sed=sollicitudin&justo=ut",
  },
  {
    title: "Trantow, Prosacco and Macejkovic",
    href: "http://163.com/pharetra.html?maecenas=luctus&ut=et&massa=ultrices&quis=posuere&augue=cubilia&luctus=curae&tincidunt=mauris&nulla=viverra&mollis=diam&molestie=vitae&lorem=quam&quisque=suspendisse&ut=potenti&erat=nullam&curabitur=porttitor&gravida=lacus&nisi=at&at=turpis&nibh=donec&in=posuere&hac=metus&habitasse=vitae&platea=ipsum&dictumst=aliquam&aliquam=non&augue=mauris&quam=morbi&sollicitudin=non&vitae=lectus&consectetuer=aliquam&eget=sit&rutrum=amet&at=diam&lorem=in&integer=magna&tincidunt=bibendum&ante=imperdiet&vel=nullam&ipsum=orci&praesent=pede&blandit=venenatis&lacinia=non&erat=sodales&vestibulum=sed&sed=tincidunt&magna=eu&at=felis&nunc=fusce",
  },
  {
    title: "Monahan, Greenholt and Kautzer",
    href: "https://so-net.ne.jp/ipsum.aspx?erat=vulputate&eros=nonummy&viverra=maecenas&eget=tincidunt&congue=lacus&eget=at&semper=velit&rutrum=vivamus&nulla=vel&nunc=nulla&purus=eget&phasellus=eros&in=elementum&felis=pellentesque&donec=quisque&semper=porta&sapien=volutpat&a=erat&libero=quisque&nam=erat&dui=eros&proin=viverra&leo=eget&odio=congue&porttitor=eget",
  },
  {
    title: "Anderson, Wolff and Stracke",
    href: "https://google.nl/odio/condimentum/id/luctus/nec/molestie/sed.html?nec=quis&condimentum=orci&neque=nullam&sapien=molestie&placerat=nibh&ante=in&nulla=lectus&justo=pellentesque&aliquam=at&quis=nulla&turpis=suspendisse&eget=potenti&elit=cras&sodales=in&scelerisque=purus&mauris=eu&sit=magna&amet=vulputate&eros=luctus&suspendisse=cum&accumsan=sociis&tortor=natoque&quis=penatibus&turpis=et&sed=magnis&ante=dis&vivamus=parturient&tortor=montes&duis=nascetur&mattis=ridiculus&egestas=mus&metus=vivamus&aenean=vestibulum&fermentum=sagittis&donec=sapien&ut=cum&mauris=sociis&eget=natoque&massa=penatibus&tempor=et&convallis=magnis&nulla=dis&neque=parturient&libero=montes&convallis=nascetur&eget=ridiculus&eleifend=mus&luctus=etiam&ultricies=vel&eu=augue&nibh=vestibulum&quisque=rutrum&id=rutrum&justo=neque&sit=aenean&amet=auctor&sapien=gravida&dignissim=sem&vestibulum=praesent&vestibulum=id&ante=massa&ipsum=id&primis=nisl&in=venenatis&faucibus=lacinia&orci=aenean&luctus=sit&et=amet&ultrices=justo&posuere=morbi&cubilia=ut&curae=odio&nulla=cras",
  },
  {
    title: "Gislason-Will",
    href: "https://economist.com/pede/lobortis/ligula/sit/amet/eleifend.aspx?vestibulum=justo&sed=in&magna=hac&at=habitasse&nunc=platea&commodo=dictumst&placerat=etiam&praesent=faucibus&blandit=cursus&nam=urna&nulla=ut&integer=tellus&pede=nulla&justo=ut&lacinia=erat&eget=id&tincidunt=mauris&eget=vulputate&tempus=elementum&vel=nullam&pede=varius&morbi=nulla&porttitor=facilisi&lorem=cras&id=non&ligula=velit&suspendisse=nec&ornare=nisi&consequat=vulputate&lectus=nonummy&in=maecenas&est=tincidunt",
  },
  {
    title: "Smith, McCullough and Okuneva",
    href: "http://smugmug.com/venenatis/lacinia/aenean/sit/amet/justo.jpg?justo=est&maecenas=et&rhoncus=tempus&aliquam=semper&lacus=est&morbi=quam&quis=pharetra&tortor=magna&id=ac&nulla=consequat&ultrices=metus&aliquet=sapien&maecenas=ut&leo=nunc&odio=vestibulum&condimentum=ante&id=ipsum&luctus=primis&nec=in&molestie=faucibus&sed=orci&justo=luctus&pellentesque=et&viverra=ultrices&pede=posuere&ac=cubilia&diam=curae&cras=mauris&pellentesque=viverra&volutpat=diam&dui=vitae&maecenas=quam&tristique=suspendisse&est=potenti&et=nullam&tempus=porttitor&semper=lacus&est=at&quam=turpis&pharetra=donec&magna=posuere&ac=metus&consequat=vitae&metus=ipsum&sapien=aliquam&ut=non&nunc=mauris&vestibulum=morbi&ante=non&ipsum=lectus&primis=aliquam&in=sit&faucibus=amet&orci=diam&luctus=in&et=magna&ultrices=bibendum&posuere=imperdiet&cubilia=nullam&curae=orci&mauris=pede&viverra=venenatis&diam=non&vitae=sodales&quam=sed&suspendisse=tincidunt&potenti=eu&nullam=felis&porttitor=fusce&lacus=posuere&at=felis&turpis=sed&donec=lacus&posuere=morbi&metus=sem&vitae=mauris&ipsum=laoreet&aliquam=ut&non=rhoncus&mauris=aliquet&morbi=pulvinar&non=sed&lectus=nisl&aliquam=nunc",
  },
];

export {
  PARKING_BY_CITY_CONTENT,
  PARKING_BY_CITY_NEARBY,
  FOOTER_POPULAR_BLOGS,
  FOOTER_NAVIGATION,
};
