import React from 'react';
import {Typography} from 'antd';
import './Price.css';
import {Card} from "./components";

const image1_1 = require('./src/1/7a932bdbff8c3505ba0cd026a3e840ca.jpeg');
const image1_2 = require('./src/1/88fd7ccd7c91beb30facb220251e7160.jpeg');
const image1_3 = require('./src/1/326b60046da9ccc7af88ab178aa7f165.jpeg');
const image1_4 = require('./src/1/873d873be051c8182572ed7af0a7901f.jpeg');
const image1_5 = require('./src/1/a7ecc9f4fa6fc7fefe887940bbfc2900.jpeg');
const image1_6 = require('./src/1/ab0660984a87f4b99bd46a4bf73d3585.jpeg');
const image1_7 = require('./src/1/ca135c355a01469a7a2a4269df15840f.jpeg');
const image1_8 = require('./src/1/7a932bdbff8c3505ba0cd026a3e840ca.jpeg');
const image1_9 = require('./src/1/ff4b03d1f811b2667e30fddcd2d1fbfe.jpeg');
const image1_10 = require('./src/1/db8195d33fce3d3ee48afe255e288eab.jpeg');
const images1 = [image1_1,image1_2,image1_3,image1_4,image1_5,image1_6,image1_7,image1_8,image1_9, image1_10];

const images2 = [image1_1,image1_2,image1_3,image1_4,image1_5,image1_6,image1_7,image1_8,image1_9, image1_10];

const image3_1 = require('./src/3/0bd52eb61c07783421c97a147692615f.jpeg');
const image3_2 = require('./src/3/0ec15d62fd00e0c279b959e0d2e85df5.jpeg');
const image3_3 = require('./src/3/2d16a957fdf16ae4288b56841b3ddbcf.jpeg');
const image3_4 = require('./src/3/8a527c24e78ea019f7a1c9edef0b0524.jpeg');
const image3_5 = require('./src/3/26a029c3f93c064427e2aabe696b7902.jpeg');
const image3_6 = require('./src/3/912b618a6a0cb7692faf693f2a670636.jpeg');
const image3_7 = require('./src/3/322797ae7e604b8c783ead96800f8c11.jpeg');
const image3_8 = require('./src/3/cfdde9b6481ef5a3930641acea755265.jpeg');
const images3 = [image3_1,image3_2,image3_3,image3_4,image3_5,image3_6,image3_7,image3_8];

const image4_1 = require('./src/4/0a56d8aaecd633580f546433409a544b.jpeg');
const image4_2 = require('./src/4/6b7567ce70fbda83ecaa9b1797b3d184.jpeg');
const image4_3 = require('./src/4/8e5bd7bbc86eeaf3cabe0fc34ef94689.jpeg');
const image4_4 = require('./src/4/74e0e5902224a79a17bafcf3654b465e.jpeg');
const image4_5 = require('./src/4/2340d64c99d3436271953addc094bb54.jpeg');
const image4_6 = require('./src/4/29659f363338e153625d7fc05b2fdb65.jpeg');
const image4_7 = require('./src/4/abe75574f004177fb89733e3d4f711fa.jpeg');
const image4_8 = require('./src/4/c54ad7a4bba6f3b50d36c3141f3301bb.jpeg');
const images4 = [image4_1,image4_2,image4_3,image4_4,image4_5,image4_6,image4_7,image4_8];

const image5_1 = require('./src/5/3a72b5fc83832a02ebd27b42c3903f1b.jpeg');
const image5_2 = require('./src/5/3f6ffb13fd7c9d047fb8729fff5e01cc.jpeg');
const image5_3 = require('./src/5/4ac23dabdc7e097ec427d7bccd69265e.jpeg');
const image5_4 = require('./src/5/6dddd0fdbc129adc4a0e9c271bc86718.jpeg');
const image5_5 = require('./src/5/144c995a9dff88869c0251cd127ef48b.jpeg');
const image5_6 = require('./src/5/459d7cccd48dbcb398ba18baa54a4066.jpeg');
const image5_7 = require('./src/5/7651b17fb63ef9b839474d7d9276b6b9.jpeg');
const image5_8 = require('./src/5/4651991a04cc1247acc23ef2c6e7b21f.jpeg');
const image5_9 = require('./src/5/e600d82000412c449cbc8a16eea41ba5.jpeg');
const images5 = [image5_1,image5_2,image5_3,image5_4,image5_5,image5_6,image5_7,image5_8,image5_9];

const image6_1 = require('./src/6/9de5b9ec30dd44e6027f77f5effdeb64.jpeg');
const image6_2 = require('./src/6/34a340046c4678996fa9c49441be6ad1.jpeg');
const image6_3 = require('./src/6/61dffd6b3531cf5024f9c265bab7f180.jpeg');
const image6_4 = require('./src/6/88d4fd81a4c8a3748e04f7e7ff9de4d9.jpeg');
const image6_5 = require('./src/6/452bbcd8000b1debb36b5291747ff793.jpeg');
const image6_6 = require('./src/6/b8fb4618b622c5188e61b2ba7c34dfa3.jpeg');
const image6_7 = require('./src/6/d86b215dbbf11ab724242f8345659318.jpeg');
const image6_8 = require('./src/6/e62c1c61a0db71a4c912688d25f88fb9.jpeg');
const image6_9 = require('./src/6/f30cf2ed4e11889d466cd58491e0b2b6.jpeg');
const images6 = [image6_1,image6_2,image6_3,image6_4,image6_5,image6_6,image6_7,image6_8,image6_9];

const images7 = [image5_1,image5_2,image5_3,image5_4,image5_5,image5_6,image5_7,image5_8,image5_9];

const image8_1 = require('./src/8/0e18d53dec31b02eef27b1beb981e297.jpeg');
const image8_2 = require('./src/8/0139b83cf7655adce8e3a2d3806ebd7d.jpeg');
const image8_3 = require('./src/8/823c2ee9377084a2f3fe442e354c0c3d.jpeg');
const image8_4 = require('./src/8/850f5638f61c9784959c455c34ae7530.jpeg');
const image8_5 = require('./src/8/49421c95a0fa127ed7d187a379a1318e.jpeg');
const image8_6 = require('./src/8/ac6f50dff5a047fead9f28247c1e6aaf.jpeg');
const image8_7 = require('./src/8/b0fdc1f8e21f3818482c5d614839d1ae.jpeg');
const image8_8 = require('./src/8/c1b18478e188c37bf10efdd0f99b6d86.jpeg');
const image8_9 = require('./src/8/cc909bf2808a8953deceaa575c20e970.jpeg');
const image8_10 = require('./src/8/cc482424498631d3e1449c2f7304247e.jpeg');
const image8_11 = require('./src/8/d2cd61c2a673e4d1d39e235a75d047e8.jpeg');
const image8_12 = require('./src/8/efac827ce83fc9c2309beab68e363c7e.jpeg');
const images8 = [image8_1,image8_2,image8_3,image8_4,image8_5,image8_6,image8_7,image8_8,image8_9, image8_10, image8_11, image8_12];

const image9_1 = require('./src/9/0c6c37aa4cc89b404dfe566b6debc1fe.jpeg');
const image9_2 = require('./src/9/2b5197599f8ad02139a257fcd2e221b5.jpeg');
const image9_3 = require('./src/9/5cb7f831c25af360761827564a0e42cd.jpeg');
const image9_4 = require('./src/9/16d454c096eb64139d4c89933a43e2f3.jpeg');
const image9_5 = require('./src/9/20fb108a6a4879f40c7b64de39b5daf8.jpeg');
const image9_6 = require('./src/9/90cf89cd5420ccec265624fea03079cc.jpeg');
const image9_7 = require('./src/9/3618f0f9ae4ed0eaee1db19c142380ff.jpeg');
const image9_8 = require('./src/9/ae092a36802d0c52a6ea68355652b339.jpeg');
const image9_9 = require('./src/9/b44bf84a4cbaa4c3f61d60a215352e5f.jpeg');
const images9 = [image9_1,image9_2,image9_3,image9_4,image9_5,image9_6,image9_7,image9_8,image9_9];

const image11_1 = require('./src/11/3ce5484c9eee0cfafe760ddbc01c52c6.jpeg');
const image11_2 = require('./src/11/4da6587a5675593e1be8752f66ac891d.jpeg');
const image11_3 = require('./src/11/818948675e196867fcc5541fadc5a603.jpeg');
const image11_4 = require('./src/11/818948675e196867fcc5541fadc5a603.jpeg');
const image11_5 = require('./src/11/b0eadb0911693b5432a6d32b5ae7ccca.jpeg');
const image11_6 = require('./src/11/c72569b3f5a5827dc43d63d857729a26.jpeg');
const images11 = [image11_1,image11_2,image11_3,image11_4,image11_5,image11_6];

const image12_1 = require('./src/12/7a77c83c82787d4025e949250aa8928c.jpeg');
const image12_2 = require('./src/12/8f1254ac114ce0aedf2224d428ff93da.jpeg');
const image12_3 = require('./src/12/34bdd090e8e4b88b79fe58907342b9d8.jpeg');
const image12_4 = require('./src/12/57d09fefc814da7c0a456ec87a869e94.jpeg');
const image12_5 = require('./src/12/95b5130e93bb3fc444289aab04841ef2.jpeg');
const image12_6 = require('./src/12/367a1b145433e940df3bd7158eae159a.jpeg');
const image12_7 = require('./src/12/9769e5b3b73bfc26104729e1b38bd2fd.jpeg');
const image12_8 = require('./src/12/ba74356f0aa57520dbe5987d1d286bf5.jpeg');
const image12_9 = require('./src/12/c2ecdf7d0eb4afc2d4f375ccfa043c8f.jpeg');
const images12 = [image12_1,image12_2,image12_3,image12_4,image12_5,image12_6,image12_7,image12_8,image12_9];

const image13_1 = require('./src/13/6cbddd49544d1fa41a995466c2d4ad1d.jpeg');
const image13_2 = require('./src/13/72bc365841d940134dc635b0c43962b6.jpeg');
const image13_3 = require('./src/13/99d8a8f145238135dc220a68f6076eb6.jpeg');
const image13_4 = require('./src/13/680a6d60722915d0a9038aad954610f1.jpeg');
const image13_5 = require('./src/13/905bb64f6b3f198191477b776848de6a.jpeg');
const image13_6 = require('./src/13/326627ef36c68d0f299731463cbb1471.jpeg');
const image13_7 = require('./src/13/387996f4674f4f246929c92e5e91c449.jpeg');
const image13_8 = require('./src/13/b7176fde5277e0e9d811c783b1e714da.jpeg');
const image13_9 = require('./src/13/c832180fdcc6912669199d0c3aa578c8.jpeg');
const image13_10 = require('./src/13/fbc60bc3c2258122719f72ed0061d586.jpeg');
const images13 = [image13_1,image13_2,image13_3,image13_4,image13_5,image13_6,image13_7,image13_8,image13_9, image13_10];

const image14_1 = require('./src/14/9d89c4bb967e7b88756940eecc0ea4b9.jpeg');
const image14_2 = require('./src/14/359d650383476ef6aedfbacb60488748.jpeg');
const image14_3 = require('./src/14/24382a756081717e96b471ff43dcba7b.jpeg');
const image14_4 = require('./src/14/516333d7947afe53d0775fd1ffb3c664.jpeg');
const image14_5 = require('./src/14/953361e15401d4a3a26fe860fa719bf2.jpeg');
const image14_6 = require('./src/14/bb3e4e7bb00308f49d9348e3a31a1984.jpeg');
const image14_7 = require('./src/14/d9f1b48ea42e427433d46d87cc6fbbca.jpeg');
const images14 = [image14_1,image14_2,image14_3,image14_4,image14_5,image14_6,image14_7];

const images15 = [image4_1,image4_2,image4_3,image4_4,image4_5,image4_6,image4_7,image4_8];

export const data = [
  {
    id: '1',
    name: 'ASUS TUF Gaming GeForce RTX 3080 Ti OC Edition 12GB GDDR6X',
    date: '2021',
    interface: 'PCI Express x16 4.0',
    processor: 'GeForce RTX 3080 Ti',
    power: '850 Vt',
    image: images1[0],
    images: images1,
    cuda: '10 240',
    lhr: true,
    frequency: "1 370 MGz",
  },
  {
    id: '2',
    name: 'ASUS TUF Gaming GeForce RTX 3080 Ti 12GB GDDR6X',
    date: '2021',
    interface: 'PCI Express x16 4.0',
    processor: 'GeForce RTX 3080 Ti',
    power: '850 Vt',
    cuda: '10 240',
    lhr: true,
    frequency: "1 370 MGz",
    image: images2[1],
    images: images2,
  },
  {
    id: '3',
    name: 'Gigabyte GeForce RTX 3060 Ti Gaming OC 8G (rev. 2.0)',
    date: '2020',
    interface: 'PCI Express x16 4.0',
    processor: 'GeForce RTX 3060 Ti',
    power: '600 Vt',
    cuda: '4 864',
    lhr: true,
    frequency: "1 410 MGz",
    image: images3[0],
    images: images3,
  },
  {
    id: '4',
    name: 'Gigabyte GeForce RTX 3050 Gaming OC 8G GV-N3050GAMING OC-8GD',
    date: '2022',
    interface: 'PCI Express x8 4.0',
    processor: 'GeForce RTX 3050',
    power: '450 Vt',
    cuda: '2 560',
    lhr: true,
    frequency: "1 550 MGz",
    image: images4[0],
    images: images4,
  },
  {
    id: '5',
    name: 'Gigabyte GeForce RTX 3080 Ti Gaming OC 12GB GDDR6X GV-N308TGAMING OC-12GD',
    date: '2021',
    interface: 'PCI Express x16 4.0',
    processor: 'GeForce RTX 3080 Ti',
    power: '750 Vt',
    cuda: '10 240',
    lhr: true,
    frequency: "1 370 MGz",
    image: images5[1],
    images: images5,
  },
  {
    id: '6',
    name: 'Gigabyte GeForce RTX 3070 Ti Gaming OC 8GB GDDR6X GV-N307TGAMING OC-8GD',
    date: '2021',
    interface: 'PCI Express x16 4.0',
    processor: 'GeForce RTX 3070 Ti',
    cuda: '6 144',
    power: '750 Vt',
    lhr: true,
    frequency: "1 580 MGz",
    image: images6[0],
    images: images6,
  },
  {
    id: '8',
    name: 'ASUS ROG Strix GeForce RTX 3090 OC 24GB GDDR6X',
    date: '2020',
    interface: 'PCI Express x16 4.0',
    processor: 'GeForce RTX 3090',
    power: '850 Vt',
    cuda: '10 496',
    lhr: false,
    frequency: "1 400 MGz",
    image: images8[0],
    images: images8,
  },
  {
    id: '9',
    name: 'Gigabyte Aorus GeForce RTX 3070 Ti Master 8G GDDR6X GV-N307TAORUS M-8GD',
    date: '2021',
    interface: 'PCI Express x16 4.0',
    processor: 'GeForce RTX 3070 Ti',
    power: '850 Vt',
    cuda: '6 144',
    lhr: true,
    frequency: "1 580 MGz",
    image: images9[1],
    images: images9,
  },
  {
    id: '11',
    name: 'MSI GeForce RTX 3080 Ti Gaming X Trio 12G GDDR6X',
    date: '2021',
    interface: 'PCI Express x16 4.0',
    processor: 'GeForce RTX 3080 Ti',
    lhr: true,
    frequency: "1 370 MGz",
    cuda: '10 240',
    power: '750 Vt',
    image: images11[4],
    images: images11,
  },
  {
    id: '12',
    name: 'Gigabyte Aorus GeForce RTX 3060 Elite 12GB GDDR6 (rev. 2.0)',
    date: '2021',
    interface: 'PCI Express x16 4.0',
    processor: 'GeForce RTX 3060',
    lhr: true,
    frequency: "1 320 MGz",
    cuda: '3 584',
    power: '650 Vt',
    image: images12[2],
    images: images12,
  },
  {
    id: '13',
    name: 'ASUS TUF Gaming GeForce RTX 3070 Ti OC 8GB GDDR6X',
    date: '2021',
    interface: 'PCI Express x16 4.0',
    processor: 'GeForce RTX 3070 Ti',
    lhr: true,
    frequency: "1 580 MGz",
    cuda: '6 144',
    power: '750 Vt',
    image: images13[0],
    images: images13,
  },
  {
    id: '14',
    name: 'MSI GeForce RTX 3070 Ti Ventus 3X 8G OC GDDR6X',
    date: '2021',
    interface: 'PCI Express x16 4.0',
    processor: 'GeForce RTX 3070 Ti',
    lhr: true,
    frequency: "1 580 MGz",
    cuda: '6 144',
    power: '750 Vt',
    image: images14[0],
    images: images14,
  },
  {
    id: '15',
    name: 'Gigabyte GeForce RTX 3070 Gaming OC 8G GDDR6 (rev. 2.0)',
    date: '2021',
    interface: 'PCI Express x16 4.0',
    processor: 'GeForce RTX 3070',
    lhr: true,
    frequency: "1 500 MGz",
    cuda: '5 888',
    power: '650 Vt',
    image: images15[7],
    images: images15,
  },
  {
    id: '16',
    name: 'ASUS TUF Gaming GeForce RTX 3080 Ti OC Edition 12GB GDDR6X',
    date: '2021',
    interface: 'PCI Express x16 4.0',
    processor: 'GeForce RTX 3080 Ti',
    power: '850 Vt',
    image: images1[0],
    images: images1,
    cuda: '10 240',
    lhr: true,
    frequency: "1 370 MGz",
  },
  {
    id: '17',
    name: 'ASUS TUF Gaming GeForce RTX 3080 Ti 12GB GDDR6X',
    date: '2021',
    interface: 'PCI Express x16 4.0',
    processor: 'GeForce RTX 3080 Ti',
    power: '850 Vt',
    cuda: '10 240',
    lhr: true,
    frequency: "1 370 MGz",
    image: images2[1],
    images: images2,
  },
  {
    id: '18',
    name: 'Gigabyte GeForce RTX 3060 Ti Gaming OC 8G (rev. 2.0)',
    date: '2020',
    interface: 'PCI Express x16 4.0',
    processor: 'GeForce RTX 3060 Ti',
    power: '600 Vt',
    cuda: '4 864',
    lhr: true,
    frequency: "1 410 MGz",
    image: images3[0],
    images: images3,
  },
  {
    id: '20',
    name: 'Gigabyte GeForce RTX 3080 Ti Gaming OC 12GB GDDR6X GV-N308TGAMING OC-12GD',
    date: '2021',
    interface: 'PCI Express x16 4.0',
    processor: 'GeForce RTX 3080 Ti',
    power: '750 Vt',
    cuda: '10 240',
    lhr: true,
    frequency: "1 370 MGz",
    image: images5[1],
    images: images5,
  },
  {
    id: '22',
    name: 'Gigabyte GeForce RTX 3080 Gaming OC 10GB GDDR6X (rev. 2.0)',
    date: '2021',
    interface: 'PCI Express x16 4.0',
    processor: 'GeForce RTX 3080',
    power: '750 Vt',
    cuda: '8 704',
    lhr: true,
    frequency: "1 440 MGz",
    image: images7[2],
    images: images7,
  },
  {
    id: '23',
    name: 'ASUS ROG Strix GeForce RTX 3090 OC 24GB GDDR6X',
    date: '2020',
    interface: 'PCI Express x16 4.0',
    processor: 'GeForce RTX 3090',
    power: '850 Vt',
    cuda: '10 496',
    lhr: false,
    frequency: "1 400 MGz",
    image: images8[0],
    images: images8,
  },
  {
    id: '24',
    name: 'Gigabyte Aorus GeForce RTX 3070 Ti Master 8G GDDR6X GV-N307TAORUS M-8GD',
    date: '2021',
    interface: 'PCI Express x16 4.0',
    processor: 'GeForce RTX 3070 Ti',
    power: '850 Vt',
    cuda: '6 144',
    lhr: true,
    frequency: "1 580 MGz",
    image: images9[1],
    images: images9,
  },
  {
    id: '26',
    name: 'MSI GeForce RTX 3080 Ti Gaming X Trio 12G GDDR6X',
    date: '2021',
    interface: 'PCI Express x16 4.0',
    processor: 'GeForce RTX 3080 Ti',
    lhr: true,
    frequency: "1 370 MGz",
    cuda: '10 240',
    power: '750 Vt',
    image: images11[4],
    images: images11,
  },
  {
    id: '27',
    name: 'Gigabyte Aorus GeForce RTX 3060 Elite 12GB GDDR6 (rev. 2.0)',
    date: '2021',
    interface: 'PCI Express x16 4.0',
    processor: 'GeForce RTX 3060',
    lhr: true,
    frequency: "1 320 MGz",
    cuda: '3 584',
    power: '650 Vt',
    image: images12[2],
    images: images12,
  },
  {
    id: '28',
    name: 'ASUS TUF Gaming GeForce RTX 3070 Ti OC 8GB GDDR6X',
    date: '2021',
    interface: 'PCI Express x16 4.0',
    processor: 'GeForce RTX 3070 Ti',
    lhr: true,
    frequency: "1 580 MGz",
    cuda: '6 144',
    power: '750 Vt',
    image: images13[0],
    images: images13,
  },
  {
    id: '29',
    name: 'MSI GeForce RTX 3070 Ti Ventus 3X 8G OC GDDR6X',
    date: '2021',
    interface: 'PCI Express x16 4.0',
    processor: 'GeForce RTX 3070 Ti',
    lhr: true,
    frequency: "1 580 MGz",
    cuda: '6 144',
    power: '750 Vt',
    image: images14[0],
    images: images14,
  },
  {
    id: '30',
    name: 'Gigabyte Aorus GeForce RTX 3070 Ti Master 8G GDDR6X GV-N307TAORUS M-8GD',
    date: '2021',
    interface: 'PCI Express x16 4.0',
    processor: 'GeForce RTX 3070 Ti',
    power: '850 Vt',
    cuda: '6 144',
    lhr: true,
    frequency: "1 580 MGz",
    image: images9[6],
    images: images9,
  },
]

const Price = () => {
  return (
    <div className="price">
      <Typography.Title>Catalog</Typography.Title>
      <div className="price__item-block">
        {data.map(item => (
          <Card data={item} />
        ))}
      </div>
    </div>
  );
}

export default Price;
