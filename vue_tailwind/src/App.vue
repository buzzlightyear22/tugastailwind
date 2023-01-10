<script >
export default{
  data(){
    return{ 
      list_skripsi : [],
    }
  },
  methods:{
     
    async ambildata(){
      const response =  await fetch("http://localhost:8200/getlist");
      const data = await response.json();
      this.list_skripsi = data.judul_skripsi;
      console.log(this.list_skripsi[0]);
    },
  },
};
</script>

<template>
  <body class="text-center mx-4 space-y-2">
     <div class="content-center"> 
        <h1 class="text-green-600 text-5xl font-bold"> 
          LIST SKRIPSI 
         </h1> 
        <table class="table-fixed border-separate flex flex-col justify-center items-center">
         <thead>
           <tr>
            <th class="border border-green-500">NIM</th>
            <th class="bg-blue-500 border border-green-500 text-white">NAMA MAHASISWA</th>
            <th class="border border-green-500">JUDUL SKRIPSI</th>
           </tr>
        </thead>
        <tbody>
           <tr v-for="item in list_skripsi">
            <td class="border border-green-500">{{item.nim}}</td>
             <td class="bg-blue-500 border border-green-500 text-white">{{item.nama}}</td>
            <td class="border border-green-500">{{item.judul}}</td>
          </tr>
        </tbody>
        </table>
    </div> 
    <div>
      <button class="rounded-xl p-2 bg-green-500 text-white" @click="ambildata()">Ambil data</button>
    </div>
  </body>  
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
