<template>
    <wrap>
        <template slot="props">
            <el-form ref="form" :model="form" label-position="top">
                <el-form-item label="标题">
                    <el-input v-model="form.title"></el-input>
                </el-form-item>
                <el-form-item label="偏移量">
                    <el-row :gutter="10">
                        <el-col :span="6"
                            ><el-input
                                v-model="form.top"
                                placeholder="上"
                            ></el-input
                        ></el-col>
                        <el-col :span="6"
                            ><el-input
                                v-model="form.left"
                                placeholder="左"
                            ></el-input
                        ></el-col>
                        <el-col :span="6"
                            ><el-input
                                v-model="form.right"
                                placeholder="右"
                            ></el-input
                        ></el-col>
                        <el-col :span="6"
                            ><el-input
                                v-model="form.bottom"
                                placeholder="下"
                            ></el-input
                        ></el-col>
                    </el-row>
                </el-form-item>
                <el-form-item label="宽度">
                    <el-input v-model="form.width"></el-input>
                </el-form-item>
                <el-form-item label="是否显示关闭按钮">
                    <el-switch v-model="form.showClose"></el-switch>
                </el-form-item>
            </el-form>
            <el-button @click="dialogVisible = !dialogVisible">{{
                dialogVisible ? "关闭对话框" : "打开对话框"
            }}</el-button>
        </template>

        <template slot="component">
            <gd-dialog :visible.sync="dialogVisible" v-bind="form">
                这是弹框内容
                <div slot="footer">
                    <el-button @click="cancel">取消</el-button>
                    <el-button @click="confirm">确认</el-button>
                </div>
            </gd-dialog>
        </template>
    </wrap>
</template>

<script>
import wrap from "../wrap.vue";
export default {
    components: {
        wrap,
    },
    data() {
        return {
            dialogVisible: false,
            form: {
                title: "对话框",
                top: "30%",
                left: "30%",
                right: "",
                bottom: "",
                width: "50%",
                showClose: true,
            },
        };
    },
    methods: {
        cancel() {
            this.dialogVisible = false;
        },
        confirm() {
            this.dialogVisible = false;
        },
    },
};
</script>