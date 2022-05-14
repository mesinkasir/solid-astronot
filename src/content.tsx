import { createResource } from "solid-js";

const COVER = {
  Astronot: `https://astronot.axcora.com/img/ASTRONOTCSS.jpg`,
  Install: `https://astronot.axcora.com/img/install.jpg`,
  Deploy: `https://astronot.axcora.com/img/webapp.jpg`
};
const TITLE = {
  Astronot: `Astronot CSS`,
  Install: `Installation`,
  Deploy: `Play Layout`
};
const CONTENT = {
  Astronot: `Astronot CSS adalah sebuah tools untuk membantu membuat dan membangun situs lebih cepat dengan desain yang unik, ukuran yang mini menjadikan situs mu akan lebih cepat ketika di akses , dan dengan dukungan solid js akan membantu menjadikan website mu menjadi lebih modern, dan tentunya ini adalah open source code yang bisa kamu gunakan dan kembangkan lagi sesaui kebutuhan mu , mulai lah menggunakan astronot css dengan solid js.`,
  Install: `Cara installasinya pun cukup mudah saja , gunakan terminal dan mulai bekerja sekarang, jalankan git clone https://github.com/mesinkasir/solid-astronot.git - setelah itu install dan jalankan npm install && npm run dev, buka localhost:3000 pada web browser kamu dan mulai bekerja menggunakan astronot css feat solid js.`,
  Deploy: `Mulai online kan website mu sekarang dengan mendaftarkan ke static host seperti github,vercel,heroku ataupun firebase dan surge, sebelum nya tingkatkan ke production mode dengan menjalankan npm run build, dan setelah itu kamu bisa push source code kamu ke static hosting, atau push ke repo kamu dan integrasikan ke static hosting untuk membuat website mu menjadi online.`
};
function createDelay() {
  return new Promise((resolve) => {
    const delay = Math.random() * 420 + 160;
    setTimeout(() => resolve(delay), delay);
  });
}

const Content = (props) => {
  const [time] = createResource(createDelay);

  return (
    <div class="tab-content">
      <img src={COVER[props.page]} alt={TITLE[props.page]}/>
	  <div class="card-content">
      <h1><a href="/" class="meteor">{TITLE[props.page]}</a></h1>
      <p>{CONTENT[props.page]}</p>
	  <span class="btn-astronot"><a href="https://astronot.axcora.com" class="link">Astronot Documentation →</a></span>
    </div>
	</div>
  );
};

export default Content;
