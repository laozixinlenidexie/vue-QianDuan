<template>
  <Header></Header>
<!--  路由出口-->
  <router-view></router-view>
  <div v-show="$route.meta.show">
    <Footer/>
  </div>

</template>


<script>
//引入
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default {


  components:{

    Header,
    Footer,
  }

}
</script>
<style>

</style>
