<template>
  <div>
    <h1>Vue-Styled-Components Example</h1>
    <page-title>Title</page-title>
    <page-title alert>Alert</page-title>
    <Button>Button</Button>&nbsp;
    <Button primary>Primary Button</Button>&nbsp;
    <Button disabled>Disabled Button</Button><br><br>
    <ButtonJSX>Button JSX</ButtonJSX>&nbsp;
    <ButtonJSX primary>Button JSX Primary</ButtonJSX>&nbsp;
    <ButtonJSX disabled>Button JSX Disabled</ButtonJSX><br><br>
    <ButtonJS>ButtonJS</ButtonJS>&nbsp;
    <ButtonJS primary>ButtonJS Primary</ButtonJS>&nbsp;
    <ButtonJS disabled>ButtonJS Disabled</ButtonJS>
  </div>
</template>
<script>
import PageTitle from '@/components/core/PageTitle'

import Button from '@/components/core/Button'
import ButtonJSX from '@/components/core/ButtonJSX'
import ButtonJS from '@/components/core/ButtonJS'

export default {
  components:{
    PageTitle,
    Button, 
    ButtonJSX, 
    ButtonJS
  }
};
</script>


