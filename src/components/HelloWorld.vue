<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <Href href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</Href>.
    </p>
    <SubTitle>Installed CLI Plugins</SubTitle>
    <List>
      <ListItem><Href href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</Href></ListItem>
      <ListItem><Href href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</Href></ListItem>
      <ListItem><Href href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest" target="_blank" rel="noopener">unit-jest</Href></ListItem>
    </List>
    <SubTitle>Essential Links</SubTitle>
    <List>
      <ListItem><Href href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</Href></ListItem>
      <ListItem><Href href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</Href></ListItem>
      <ListItem><Href href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</Href></ListItem>
      <ListItem><Href href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</Href></ListItem>
      <ListItem><Href href="https://news.vuejs.org" target="_blank" rel="noopener">News</Href></ListItem>
    </List>
    <SubTitle>Ecosystem</SubTitle>
    <List>
      <ListItem><Href href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</Href></ListItem>
      <ListItem><Href href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</Href></ListItem>
      <ListItem><Href href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</Href></ListItem>
      <ListItem><Href href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</Href></ListItem>
      <ListItem><Href href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</Href></ListItem>
    </List>
  </div>
</template>

<script>
import styled from 'vue-styled-components'

const SubTitle = styled.h3`
  margin: 40px 0 0;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li `
  display: inline-block;
  margin: 0 10px;
`
const Href = styled.a `
  color: #42b983;
`

export default {
  name: 'HelloWorld',
  components: { SubTitle, List, ListItem, Href },
  props: {
    msg: String
  }
}
</script>