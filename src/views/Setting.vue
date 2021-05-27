<template>
    <div class="full-content pa-5">
        <v-form
                ref="form"
                class="form"
                v-model="valid"
                lazy-validation
        >
            <v-card class="pa-6 mb-5" flat >
                <v-card-title>{{i18n('modules.setting.title')}}</v-card-title>
                <v-radio-group
                        :rules="rules.sex"
                        :label="i18n('modules.setting.sex')"
                        v-model="form.sex"
                >
                    <v-radio
                            :label="i18n('modules.setting.sexs.male')"
                            value="male"
                    ></v-radio>
                    <v-radio
                            :label="i18n('modules.setting.sexs.female')"
                            value="female"
                    ></v-radio>
                </v-radio-group>
                <v-text-field
                        v-model="form.name"
                        :counter="10"
                        :rules="rules.name"
                        :label="i18n('modules.setting.name')"
                        required
                >
                </v-text-field>

                <v-text-field
                        v-model="form.email"
                        :rules="rules.email"
                        :label="i18n('modules.setting.email')"
                        required
                ></v-text-field>

                <v-select
                        v-model="form.hobby"
                        :items="hobbys"
                        :rules="rules.hobby"
                        :label="i18n('modules.setting.hobby')"
                        required
                ></v-select>

                <v-checkbox
                        v-model="form.isAgree"
                        :rules="rules.isAgree"
                        :label="i18n('modules.setting.isAgree')"
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
                hobby: null,
                isAgree: false,
                sex: ''
            },
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
                    hobby: [v => !!v || this.i18n('valid.required')],
                    sex: [v => !!v || this.i18n('valid.required')],
                    isAgree: [v => !!v || this.i18n('valid.required')]
                }
            },
            hobbys() {
                return [
                    this.i18n('modules.setting.hobbys.football'),
                    this.i18n('modules.setting.hobbys.tennis'),
                    this.i18n('modules.setting.hobbys.tableTennis'),
                ];
            }
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
