<template>
  <div class="">
    <!-- Navbar -->
    <header class="">
      <div
        class="flex justify-between items-center mx-auto px-7 py-4 md:px-14 lg:px-24 w-full border-b border-gray-300"
      >
        <div class="text-lg">
          <div class="flex justify-center items-center">
            <Logo />
            <span class="pl-3 text-base font-extrabold"
              >Sambung <br />
              Rasa</span
            >
            <!-- <div class="flex-col px-2 leading-tight pb-2">
              <p>Sambung</p>
              <p>Rasa</p>
            </div> -->
          </div>
        </div>

        <div class="hidden lg:flex md:hidden space-x-12 items-center">
          <a href="#program" class="text-selected-text">Program</a>
          <a href="#tentang">Tentang Kami</a>
          <a href="#mitra">Mitra</a>
          <a href="#berita">Berita</a>
          <div class="flex space-x-7">
            <button
              class="rounded p-8 border py-4 border-green-500 text-green-500"
            >
              Masuk
            </button>
            <button class="rounded p-8 border py-4 bg-green-500 text-white">
              Daftar
            </button>
          </div>
        </div>
        <div class="md:hidden">
          <svg
            width="26"
            height="18"
            viewBox="0 0 26 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z"
              fill="white"
            />
          </svg>
        </div>
        <Menu class="lg:hidden" />
      </div>
    </header>
    <!-- Hero -->
    <div class="relative z-10">
      <div class="bg-black w-full h-full z-0 opacity-30 absolute"></div>

      <div
        class="absolute text-white justify-center items-center text-center min-w-full pt-60 space-y-6"
      >
        <h2 class="text-white font-extrabold text-4xl">
          Menjalin Asa untuk <span class="text-green-500">Semua</span>
        </h2>
        <p>Ulurkan tangan Anda untuk membantu sesama.</p>
        <button class="bg-white text-green-500 px-6 py-3 rounded" onclick>
          Mulai Berdonasi
        </button>
      </div>
      <img
        src="../../assets/Hero.png"
        class="object-cover z-0 w-screen lg:bg-fill"
        style="height: 560px"
      />
    </div>
    <!-- Info Card -->
    <div class="px-4 z-20 relative w-full">
      <div
        class="flex flex-col px-8 rounded-xl bg-white -mt-12 shadow-2xl lg:mx-24"
      >
        <div
          class="py-14 space-y-12 lg:flex lg:flex-row lg:justify-around lg:items-center"
        >
          <div
            class="border-b-2 flex justify-between lg:border-0 lg:border-r-2"
          >
            <Program />
            <div class="flex flex-col">
              <h5 class="text-right lg:text-left">9</h5>
              <p>Program</p>
            </div>
          </div>
          <div
            class="border-b-2 pb-6 flex justify-between lg:border-0 lg:border-r-2"
          >
            <Dompet />
            <div class="flex flex-col">
              <h5 class="text-right lg:text-left">Rp94.232.453</h5>
              <p>Donasi Terkumpul</p>
            </div>
          </div>
          <div class="flex justify-between">
            <Donatur />
            <div class="flex flex-col">
              <h5 class="text-right lg:text-left">53</h5>
              <p>Donatur</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Ilustrasi /info -->
    <img
      src="../../assets/illustrations-sambung-rasa.png"
      alt=""
      class="m-auto pt-24 py-14"
    />
    <div class="mx-4">
      <h3 class="mr-20 leading-relaxed">Sekilas Mengenai Sambung Rasa</h3>
      <div class="line"></div>
      <p class="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam in
        modi, omnis consequuntur perferendis quisquam similique fugiat excepturi
        officiis impedit ad et, adipisci molestiae corrupti error architecto
        odio! Laborum tempora sed modi deserunt, harum est accusantium. Sequi
        iure culpa accusamus vitae! Eveniet aliquid quia asperiores deleniti?
        Officia animi assumenda vel.
      </p>
      <div class="flex justify-between mb-20 mt-10">
        <button
          class="text-green-500 font-black flex justify-center items-start"
        >
          Baca Selengkapnya
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
        <img src="../../assets/dots.png" class="relative -right-5" alt="dots" />
      </div>
    </div>

    <!-- Program Pilihan -->
    <div class="w-full container px-4 mb-14">
      <div class="flex flex-col items-center">
        <h3>Program Pilihan</h3>
        <div class="line"></div>
      </div>
      <div class="flex flex-col space-y-6 lg:flex lg:flex-row">
        <div
          class="flex bg-white shadow-xl p-3 rounded-lg border border-gray-100 lg:flex-col"
        >
          <img src="../../assets/program-pilihan.png" class="rounded-md" />
          <div class="flex flex-col"></div>
          <div class="flex-col px-2">
            <p class="font-extrabold text-sm">
              Sumur Wakaf Afrika untuk Minum Ribuan Orang
            </p>
            <span class="text-sm">Sambung Rasa</span>
            <div class="flex flex-row">
              <div class="bg-green-400 w-28 h-1 rounded-full mt-2 mb-6"></div>
              <div
                class="bg-green-200 w-full h-1 rounded-full mt-2 mb-6///"
              ></div>
            </div>
            <div class="flex justify-between">
              <div class="flex flex-col">
                <span class="text-sm">Terkumpul</span>
                <span class="text-sm font-bold">Rp 5.160.000</span>
              </div>
              <div class="flex flex-col">
                <span class="text-sm">Sisa hari </span>
                <span class="text-sm font-bold text-right">4</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex bg-white shadow-xl p-3 rounded-lg border-gray-100 lg:flex-col"
        >
          <img src="../../assets/program-pilihan.png" class="rounded-md" />
          <div class="flex flex-col"></div>
          <div class="flex-col px-2">
            <p class="font-extrabold text-sm">
              Sumur Wakaf Afrika untuk Minum Ribuan Orang
            </p>
            <span class="text-sm">Sambung Rasa</span>
            <div class="flex flex-row">
              <div class="bg-green-400 w-28 h-1 rounded-full mt-2 mb-6"></div>
              <div
                class="bg-green-200 w-full h-1 rounded-full mt-2 mb-6///"
              ></div>
            </div>
            <div class="flex justify-between">
              <div class="flex flex-col">
                <span class="text-sm">Terkumpul</span>
                <span class="text-sm font-bold">Rp 5.160.000</span>
              </div>
              <div class="flex flex-col">
                <span class="text-sm">Sisa hari </span>
                <span class="text-sm font-bold text-right">4</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex bg-white shadow-xl p-3 rounded-lg border-gray-100 lg:flex-col"
        >
          <img src="../../assets/program-pilihan.png" class="rounded-md" />
          <div class="flex flex-col"></div>
          <div class="flex-col px-2">
            <p class="font-extrabold text-sm">
              Sumur Wakaf Afrika untuk Minum Ribuan Orang
            </p>
            <span class="text-sm">Sambung Rasa</span>
            <div class="flex flex-row">
              <div class="bg-green-400 w-28 h-1 rounded-full mt-2 mb-6"></div>
              <div
                class="bg-green-200 w-full h-1 rounded-full mt-2 mb-6///"
              ></div>
            </div>
            <div class="flex justify-between">
              <div class="flex flex-col">
                <span class="text-sm">Terkumpul</span>
                <span class="text-sm font-bold">Rp 5.160.000</span>
              </div>
              <div class="flex flex-col">
                <span class="text-sm">Sisa hari </span>
                <span class="text-sm font-bold text-right">4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="rounded p-8 mx-auto mt-10 border py-2 border-green-500 text-green-500 flex justify-center"
      >
        Lihat Program Lainnya
      </button>
    </div>
    <!-- Do’a dari Sahabat Rasa -->
    <div class="w-full h-full container">
      <div class="relative">
        <div
          class="bg-green-50 bg-fill mr-40 p-4 pt-24 pb-40 rounded-tr-3xl rounded-br-3xl"
        >
          <h3>Do’a dari Sahabat Rasa</h3>
          <div class="line"></div>
          <div class="flex flex-ro"></div>
          <div
            class="border bg-white border-gray-100 rounded-md -mr-28 pr-2 pb-4"
          >
            <div class="p-4 flex">
              <img
                src="../../assets/avatar-2.png"
                alt=""
                class="rounded-full w-14 h-14"
              />
              <div class="flex flex-col pl-4">
                <div class="flex items-bottom justify-between">
                  <span class="font-bold">Wackle Moo</span>
                </div>
                <div class="text-sm text-green-500">
                  <span>Sumur Wakaf Afrika untuk Minum Ribuan...</span>
                </div>
              </div>
            </div>
            <div class="pl-4">
              “Air di sumut melimpah untuk semua yg membutuhkan dan menjadi
              pahala yang mengalir untuk kami sekeluarga”
            </div>
          </div>
          <div class="mt-12 flex items-center justify-between">
            <div class="flex space-x-3">
              <div class="w-12 h-4 bg-green-500 bg-fill rounded-full"></div>
              <div class="w-4 bg-gray-300 bg-fill rounded-full"></div>
              <div class="w-4 bg-gray-300 bg-fill rounded-full"></div>
              <div class="w-4 bg-gray-300 bg-fill rounded-full"></div>
            </div>
            <div class="flex flex-row right-0 absolute">
              <div class="flex space-x-4 mx-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-14 rounded-full border-2 border-green-500 text-green-500 bg-white p-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-14 rounded-full border-2 border-green-500 text-white bg-green-500 p-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Partner Kami -->
    <div>
      <PartnerKami />
    </div>
    <!-- Footer -->
    <footer class="bg-footer container">
      <div class="flex px-7 py-12">
        <Logo />
        <span class="pl-3 text-base font-extrabold"
          >Sambung <br />
          Rasa</span
        >
      </div>
      <div class="flex flex-col mx-4 space-y-5">
        <div class="flex flex-col space-y-1 leading-relaxed">
          <h6 class="">Tentang Kami</h6>
          <span>Sekilas Sambung Rasa</span>
          <span>Berita</span>
          <span>Mitra Sambung Rasa</span>
          <span>Syarat & Ketentuan Layanan</span>
          <span>Kebijakan Privasi</span>
        </div>
        <div class="flex flex-col space-y-1">
          <h6>Program</h6>
          <span>Kategori 1</span>
          <span>Kategori 2</span>
          <span>Kategori 3</span>
          <span>Kategori 4</span>
          <span>Kategori 5</span>
        </div>
        <div class="flex flex-col space-y-1">
          <h6>Kontak kami</h6>
          <div class="flex space-x-2">
            <Email class="text-green-500" />
            <p>hello@sambungrasa.id</p>
          </div>
          <div class="flex space-x-2">
            <Phone class="text-green-500" />
            <p>+62 81234567890</p>
          </div>
          <div class="flex space-x-2">
            <Maps class="text-green-500" />
            <p>
              Jl. Ir. H. Juanda Kelurahan No.203B, Dago, Kecamatan Coblong, Kota
              Bandung, Jawa Barat 40135
            </p>
          </div>
        </div>
      </div>
      <div class="px-10 py-10 text-center font-normal text-base inset-y-0">
        © 2021 Sambung Rasa. Hak Cipta dilindungi Undang-Undang
      </div>
    </footer>
  </div>
</template>

<script>
import Logo from '@/assets/icons/Logo'
import Menu from '@/assets/icons/Menu'
import Program from '@/assets/icons/Program'
import Dompet from '@/assets/icons/Dompet'
import Donatur from '@/assets/icons/Donatur'
import PartnerKami from '@/components/PartnerKami'
import Email from '@/assets/icons/Email.vue'
import Maps from '@/assets/icons/Maps.vue'
import Phone from '@/assets/icons/Phone.vue'
// import Footer from '@/components/Footer'

export default {
  components: {
    // Footer,
    Email,
    Maps,
    Phone,
    Logo,
    Menu,
    Program,
    Dompet,
    Donatur,
    PartnerKami,
  },
}
</script>
