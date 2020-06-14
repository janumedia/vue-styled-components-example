<script>
import styled, {css} from 'vue-styled-components'

const PageTitle = styled('h1', {alert:Boolean})`
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
    <page-title :alert="alert"><slot/></page-title>
</template>
