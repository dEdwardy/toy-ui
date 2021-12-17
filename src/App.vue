<template>
  <div class="toy-doc">
    <aside>
      <ul style="padding:0">
        <li 
          v-for="(link, index) in data.links"
          :key="index"
        >
          <router-link style="padding:8px 12px;display:block" :to="link.path">{{ link.name }}</router-link>
        </li>
      </ul>

    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import ComponentList from '../packages/list.json';
import { reactive } from 'vue'
console.log(ComponentList)
const data = reactive({
  links: ComponentList.map(item => ({
    path: `/components/${item.compName}`,
    name: item.compZhName
  }))
})
</script>

<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
}
.toy-doc {
  display: flex;
  min-height: 100vh;
  aside {
    width: 200px;
    border-right: 1px solid #ccc;
    // ul li {
    //   list-style: none;
    //   a {
    //     text-decoration: none;
    //   }
    // }
  }
  main {
    width: 100%;
    flex: 1;
    padding: 15px;
  }
}
</style>