const data = [
  {
    id: 1,
    title: "Kenting National Park",
    location: "Taiwan",
    googleMapsUrl: "https://www.google.co.uk/maps/place/Kenting+National+Park/@21.9483696,120.7622849,14z/data=!3m1!4b1!4m5!3m4!1s0x3471b3fadac47ca3:0xf7179fa8495df57f!8m2!3d21.9483307!4d120.7797516",
    startDate: "8 Sep, 2014",
    endDate: "15 Sep, 2014",
    description: "A national park located on the Hengchun Peninsula of Pingtung County, Taiwan, covering Hengchun, Checheng, and Manzhou Townships. It is Taiwan's oldest and the southernmost national park on the main island and well known for its tropical climate and sunshine, scenic mountain and beach.",
    imageUrl: "https://scontent-lcy1-2.xx.fbcdn.net/v/t1.18169-9/10647227_10152766814200127_619702668437785339_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=JQjHNfF_w6EAX843JRu&tn=r7LHt3aNr5u4TWXv&_nc_ht=scontent-lcy1-2.xx&oh=00_AT-j3-Duc2yIQ4FjeO4WYYVPBPtlJxafHEci_3-npcgQFA&oe=62638ECE"
  },
  {
    id: 2,
    title: "Table Mountain",
    location: "South Africa",
    googleMapsUrl: "https://www.google.co.uk/maps/place/Table+Mountain/@-33.9627454,18.374907,13z/data=!3m1!4b1!4m5!3m4!1s0x1dcc67e657e6046d:0xaf549ac0fcfa4362!8m2!3d-33.962822!4d18.4098406",
    startDate: "4 Jun, 2014",
    endDate: "11 Jun, 2014",
    description: "A flat-topped mountain forming a prominent landmark overlooking the city of Cape Town in South Africa. The main feature of Table Mountain is the level plateau approximately three kilometres (2 mi) from side to side, edged by impressive cliffs.",
    imageUrl: "https://scontent-lcy1-2.xx.fbcdn.net/v/t31.18172-8/10353410_10152523778370127_878272835098937271_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=BBfNr1kCubUAX_Sh5Ma&_nc_ht=scontent-lcy1-2.xx&oh=00_AT_3Eh_cO4RzCEwzIgnlc7HZDQJeVCu-TCJV2PlX7eJThQ&oe=6265F307"
  },
  {
    id: 3,
    title: "Bonorong Sanctuary Park",
    location: "Australia",
    googleMapsUrl: "https://www.google.co.uk/maps/place/Bonorong+Wildlife+Sanctuary/@-42.7086429,147.2536879,14z/data=!3m1!4b1!4m5!3m4!1s0xaa6e11cf7af2599d:0x30809560fff5e057!8m2!3d-42.7086758!4d147.2711546",
    startDate: "4 Mar, 2013",
    endDate: "7 Mar, 2013",
    description: "A Tasmanian sanctuary for wildlife focused on conservation. They are home to a rescue service, a wildlife hospital and a seabird rehabilitation program among other efforts like breeding programs for endangered species.",
    imageUrl: "https://scontent-lcy1-2.xx.fbcdn.net/v/t1.18169-9/75557_10151570128145127_1976813041_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=Ao-JtsMgaEkAX-exBJ4&_nc_ht=scontent-lcy1-2.xx&oh=00_AT_SL0k-hWYnLgehMiBHvySS0DfPURTNkPQBDSeiMlhE7w&oe=62637323"
  },
  {
    id: 4,
    title: "Salar de Uyuni",
    location: "Bolivia",
    googleMapsUrl: "https://www.google.co.uk/maps/place/Uyuni+Salt+Flat/@-20.1901909,-69.8307177,7z/data=!3m1!4b1!4m5!3m4!1s0x915584b325e18bd7:0xce4183a158278b6!8m2!3d-20.1337772!4d-67.4891345",
    startDate: "1 Mar, 2010",
    endDate: "30 Mar, 2010",
    description: "The world's largest salt flat, or playa, at over 10,000 square kilometres (3,900 sq mi) in area. It is in the Daniel Campos Province in Potosí in southwest Bolivia, near the crest of the Andes at an elevation of 3,656 m (11,995 ft) above sea level.",
    imageUrl: "https://scontent-lcy1-2.xx.fbcdn.net/v/t31.18172-8/280962_10150299945190127_7394375_o.jpg?_nc_cat=101&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=EhuyANu8FdsAX-q9VCH&_nc_ht=scontent-lcy1-2.xx&oh=00_AT_xnzFLWCaxX-FixBXnLEXBrhB4AJ9aHrU9PCGVR5WMAQ&oe=62665EE7"
  },
  {
    id: 5,
    title: "Copper Canyon",
    location: "Mexico",
    googleMapsUrl: "https://www.google.co.uk/maps/place/Copper+Canyon/@27.5281269,-107.7910448,13z/data=!3m1!4b1!4m5!3m4!1s0x86c0a0b137b4ef1d:0xdeb11c7deca73801!8m2!3d27.5280556!4d-107.7561111",
    startDate: "5 Feb, 2010",
    endDate: "25 Feb, 2010",
    description: "A group of six distinct canyons in the Sierra Madre Occidental in the southwestern part of the state of Chihuahua in northwestern Mexico that is 65,000 square kilometres (25,000 sq mi) in size. The walls of the canyon[1] are a copper/green color, which is the origin of the name.",
    imageUrl: "https://scontent-lcy1-2.xx.fbcdn.net/v/t1.18169-9/26071_412240410126_802996_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=IokKYLHnvK0AX9zpS3D&_nc_ht=scontent-lcy1-2.xx&oh=00_AT-eNFEhpB23wfKfOAQgXCkGoJBH32wAynprEHrelUxH_g&oe=6266DCCE"
  }
]

export default data;