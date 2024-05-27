import React from "react";
import "../img/asrama.jpg";

function Component3() {
  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-success">SMK TI BAZMA</h1>
      <h1 className="mb-5 text-success">Islamic Boarding School</h1>
      <p className="mb-3" style={{ textAlign: "justify" }}>
        Sekolah Menengah Kejuruan Teknologi Informasi Bazma (SMK TI BAZMA)
        merupakan sekolah unggulan berasrama yang diperuntukkan bagi anak-anak
        tidak mampu. Pembangunan sekolah, baik fasilitas maupun operasional
        didanai dari hasil pengelolaan wakaf dan sumber dana sosial kemanusiaan
        lainnya yang diamanahkan oleh masyarakat.
      </p>
      <p className="mb-5" style={{ textAlign: "justify" }}>
        SMK TI BAZMA menyelenggarakan program pembelajaran yang ditempuh selama
        4 tahun dengan siswa-siswa yang berasal dari berbagai daerah di seluruh
        Indonesia. SMK TI Bazma menyelenggarakan pendidikan dengan jurusan SIJA
        (Sistem Informatika, Jaringan & Aplikasi) dengan kombinasi kurikulum
        berbasis asrama.
      </p>
      <button type="button" class="btn btn-primary">
        Selengkapnya
      </button>
      <hr className="my-5" />
      <h1 className="mb-5">Sambutan Kepala Sekolah</h1>
      <div className="row">
        <div className="col-4">
          <div class="card">
            <img
              src="https://sekolah.smktibazma.sch.id/./template/assets/img/pakdahlan.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <p class="card-text text-center">Ahmad Dahlan, S.Ag.</p>
            </div>
          </div>
        </div>
        <div className="col my-auto">
          <p className="mb-3" style={{ textAlign: "justify" }}>
            Sekolah Menengah Kejuruan Teknologi Informasi Bazma (SMK TI BAZMA)
            merupakan sekolah unggulan berasrama yang diperuntukkan bagi
            anak-anak tidak mampu. Pembangunan sekolah, baik fasilitas maupun
            operasional didanai dari hasil pengelolaan wakaf dan sumber dana
            sosial kemanusiaan lainnya yang diamanahkan oleh masyarakat.
          </p>
          <p style={{ textAlign: "justify" }}>
            SMK TI BAZMA menyelenggarakan program pembelajaran yang ditempuh
            selama 4 tahun dengan siswa-siswa yang berasal dari berbagai daerah
            di seluruh Indonesia. SMK TI Bazma menyelenggarakan pendidikan
            dengan jurusan SIJA (Sistem Informatika, Jaringan & Aplikasi) dengan
            kombinasi kurikulum berbasis asrama.
          </p>
        </div>
        <hr className="my-5" />
        <h1 className="mb-5">Fasilitas Sekolah</h1>
        <p className="mb-5" style={{ textAlign: "justify" }}>
          Sekolah Menengah Kejuruan Teknologi Informasi Bazma (SMK TI BAZMA)
          merupakan sekolah unggulan berasrama yang diperuntukkan bagi anak-anak
          tidak mampu. Pembangunan sekolah, baik fasilitas maupun operasional
          didanai dari hasil pengelolaan wakaf dan sumber dana sosial
          kemanusiaan lainnya yang diamanahkan oleh masyarakat.
        </p>
        <div className="row">
          <div className="col-3">
            <div class="card">
              <img
                src="https://sekolah.smktibazma.sch.id/template/assets/img/examples/kelas.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title text-center">Card title</h5>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div class="card">
              <img
                src="https://sekolah.smktibazma.sch.id/template/assets/img/examples/masjid.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title text-center">Card title</h5>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div class="card">
              <img
                src="	https://sekolah.smktibazma.sch.id/template/assets/img/examples/asrama.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title text-center">Card title</h5>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div class="card">
              <img
                src="https://sekolah.smktibazma.sch.id/template/assets/img/examples/lapangan.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title text-center">Card title</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component3;
