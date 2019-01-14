# vue-styled-components-example

vue-styled-components example based on Vue-CLI 3

## Project setup
#### Create Vue Project using Vue-CLI 3
```
vue create vue-styled-components-example
cd vue-styled-components-example
```
#### Add vue-styled-components
```
yarn add vue-styled-components
```
## Usage
### Basic

#### Vue component with template
```
// ./src/components/PageTitle.vue
<script>
import styled from 'vue-styled-components'

const PageTitle = styled.h1`
  font-size: 30px;
  color: blue;
`
export default {
  name: 'page-title-template',
  components: { PageTitle }
}
</script>
<template>
  <page-title><slot/></page-template>
</template>
```

#### Vue component with JSX
```
// ./src/components/PageTitleJSX.vue
<script>
import styled from 'vue-styled-components'

const PageTitle = styled.h1`
  font-size: 30px;
  color: blue;
`
export default {
  name: 'page-title-jsx',
  render() {
    return (
      <PageTitle>{ this.$slots.default }</PageTitle>
    )
  }
}
</script>
```

#### Vue component with JS
```
// ./src/components/PageTitleJS.vue
import styled from 'vue-styled-components'

const PageTitle = styled.h1`
  font-size: 30px;
  color: blue;
`
export default PageTitle
```

### Using Props

#### Vue component with template
```
// ./src/components/PageTitle.vue
<script>
import styled, {css} from 'vue-styled-components'

const PageTitle = styled('h1', {alert: Boolean})`
  font-size: 30px;
  color: blue;
  ${props => props.alert && css `
      color: red;
      padding: 20px;
      background-color: yellow;
  `}
`
export default {
  name: 'page-title-template',
  components: { PageTitle },
  props: {
    alert: Boolean
  }
}
</script>
<template>
  <page-title :alert="alert"><slot/></page-template>
</template>
```

#### Vue component with JSX
```
// ./src/components/PageTitleJSX.vue
<script>
import styled, {css} from 'vue-styled-components'

const PageTitle = styled('h1', {alert: Boolean})`
  font-size: 30px;
  color: blue;
  ${props => props.alert && css `
      color: red;
      padding: 20px;
      background-color: yellow;
  `}
`
export default {
  name: 'page-title-jsx',
  props: {
    alert: Boolean
  }
  render() {
    return (
      <PageTitle alert={this.alert}>{ this.$slots.default }</PageTitle>
    )
  }
}
</script>
```

#### Vue component with JS
```
// ./src/components/PageTitleJS.vue
import styled, {css} from 'vue-styled-components'

const PageTitle = styled('h1', {alert: Boolean})`
  font-size: 30px;
  color: blue;
  ${props => props.alert && css `
      color: red;
      padding: 20px;
      background-color: yellow;
  `}
`
export default PageTitle
```
