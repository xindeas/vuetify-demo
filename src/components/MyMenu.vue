<template>
    <v-list
            dense
            dark
            class="primary lighten-1"
    >
        <MyMenuItem v-for="(item, index) in menu" :key="index" :menu="item"></MyMenuItem>
    </v-list>
</template>

<script>

    import MyMenuItem from "@/components/MyMenuItem";

    export default {
        name: "MyMenu",
        components: {MyMenuItem},
        data() {
            return {
                menu: [
                    {
                        label: 'menu.home',
                        icon: 'mdi-home',
                        key: '/'
                    },
                    {
                        label: 'menu.test',
                        icon: 'mdi-database-settings',
                        children: [
                            {
                                label: 'menu.test1',
                                key: '/1'
                            },
                        ]
                    },
                    {
                        label: 'menu.setting',
                        icon: 'mdi-cog',
                        key: '/Setting'
                    },
                ],
            }
        },
        computed: {},
        methods: {
            backHome() {
                this.$router.push('/')
            }
        },
    }
</script>

<style scoped>
</style>
