<template>
  <div class="bg-footer px-4 bottom-0 pt-14">
    <div class="space-y-12 lg:flex lg:mx-24 items-center">
      <div class="justify-center">
        <div class="flex p-6 items-center space-x-2">
          <Logo />
          <h6 class="">Sambung Rasa</h6>
        </div>
        <p>
          Sambung Rasa merupakan sebuah platform untuk mengumpulkan donasi bagi
          masyarakat yang membutuhkan.
        </p>
      </div>
      <div class="space-y-6">
        <div class="">
          <h6>Tentang Kami</h6>
          <ul>
            <li>Sekilas Sambung Rasa</li>
            <li>Berita</li>
            <li>Mitra Sambung Rasa</li>
            <li>Syarat & Ketentuan Layanan</li>
            <li>Kebijakan Privasi</li>
          </ul>
        </div>

        <div>
          <h6>Program</h6>
          <ul class="space-y-2">
            <li>Kategori 1</li>
            <li>Kategori 2</li>
            <li>Kategori 3</li>
            <li>Kategori 4</li>
            <li>Kategori 5</li>
          </ul>
        </div>

        <div class="space-y-2 w-2/3">
          <h6>Kontak Kami</h6>
          <div class="flex space-x-2">
            <Email />
            <p>hello@sambungrasa.id</p>
          </div>
          <div class="flex space-x-2">
            <Phone />
            <p>+62 81234567890</p>
          </div>
          <div class="flex space-x-2">
            <Maps />
            <p>
              Jl. Ir. H. Juanda Kelurahan No.203B, Dago, Kecamatan Coblong, Kota
              Bandung, Jawa Barat 40135
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="px-14 py-10 text-center font-normal text-base inset-y-0">
      © 2021 Sambung Rasa. Hak Cipta dilindungi Undang-Undang
    </div>
  </div>
</template>

<script>
import Email from "@/assets/icons/Email.vue";
import Maps from "@/assets/icons/Maps.vue";
import Phone from "@/assets/icons/Phone.vue";
import Logo from "@/assets/icons/Logo.vue";
export default {
  components: { Email, Maps, Phone, Logo },
};
</script>
