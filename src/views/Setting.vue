<template>
    <div class="full-content pa-5">
        <v-form
                ref="form"
                class="form"
                v-model="valid"
                lazy-validation
        >
            <v-card class="pa-6 mb-5" flat >
                <v-card-title>Basic Settings</v-card-title>
                <v-radio-group
                        label="size"
                        v-model="form.size"
                >
                    <v-radio
                            label="small"
                            value="small"
                    ></v-radio>
                    <v-radio
                            label="medium"
                            value="medium"
                    ></v-radio>
                </v-radio-group>
                <v-text-field
                        v-model="form.name"
                        :counter="10"
                        :rules="rules.name"
                        label="Name"
                        required
                >
                </v-text-field>

                <v-text-field
                        v-model="form.email"
                        :rules="rules.email"
                        label="E-mail"
                        required
                ></v-text-field>

                <v-select
                        v-model="form.select"
                        :items="items"
                        :rules="rules.select"
                        label="Item"
                        required
                ></v-select>

                <v-checkbox
                        v-model="form.checkbox"
                        :rules="rules.checkbox"
                        label="Do you agree?"
                        required
                ></v-checkbox>
            </v-card>

            <v-btn
                    :disabled="!valid"
                    color="success"
                    class="mr-4"
                    @click="validate"
            >
                {{i18n('btn.save')}}
            </v-btn>

            <v-btn
                    color="error"
                    class="mr-4"
                    @click="reset"
            >
                {{i18n('btn.clear')}}
            </v-btn>
        </v-form>
    </div>
</template>

<script>
    export default {
        name: "Setting",
        data: () => ({
            valid: true,
            form: {
                name: '',
                email: '',
                select: null,
                checkbox: false,
                size: 'small'
            },
            items: [
                'Item 1',
                'Item 2',
                'Item 3',
                'Item 4',
            ],
        }),
        computed: {
            rules() {
                return {
                    name: [
                        v => !!v || this.i18n('valid.required'),
                        v => (v && v.length <= 10) || this.i18n('valid.maxLength', {maxLength:10}),
                    ],
                    email: [
                        v => !!v || this.i18n('valid.required'),
                        v => /.+@.+\..+/.test(v) || this.i18n('valid.pattern'),
                    ],
                    select: [v => !!v || this.i18n('valid.required')],
                    checkbox: [v => !!v || this.i18n('valid.required')]
                }
            },
        },

        methods: {
            i18n(key, params) {
                return this.$i18n ? this.$i18n.t(key, params) : '';
            },
            validate() {
                this.$refs.form.validate()
            },
            reset() {
                this.$refs.form.reset()
            },
        },
    }
</script>

<style scoped>
.form {
    max-width: 500px;
}
</style>
