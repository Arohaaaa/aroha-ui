<template>
    <div>
        <el-row :gutter="30">
            <el-col :xs="24" :span="6">
                <slot name="props"></slot>
            </el-col>
            <el-col :xs="24" :span="18">
                <el-card class="component-wrap">
                    <slot name="component"></slot>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
