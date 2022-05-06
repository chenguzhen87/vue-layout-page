<template>
    <VueLayoutPage bodyBgColor="#f2f2f2">
        <template #header>
            <header class="header">header</header>
        </template>
        <div>main</div>
        <template #footer>
            <footer class="footer">footer</footer>
        </template>
    </VueLayoutPage>
</template>
<script>
// import VueLayoutPage from '../../dist/index.es'
// import '../../dist/style.css'
export default {
    // components: {
    //     VueLayoutPage
    // },
    data() {
        return {}
    }
}
</script>
<style scoped>
.header {
    display: flex;
    align-items: center;
    background-color: rgb(95, 95, 214);
    height: 64px;
    text-align: center;
    color: white;
    padding: 0 15px;

}

.footer {
    background-color: rgb(95, 95, 214);
    height: 64px;
    text-align: center;
    display: flex;
    align-items: center;
    color: white;
    padding: 0 15px;
}
</style>