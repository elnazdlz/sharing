<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<script>

export default {
  name: 'App'

}
</script>

<style lang="scss">

* {
  font-family: iranyekan ,roboto ,Arial !important;
  margin: 0;
  padding: 0;
}
html {
  height: 100%;
  width: 100%;
}

body {
  height: 100%;
  width: 100%;
}

#app {
  height: 100vh;
  width: 100vw;
   margin: 0px;
   padding: 0px;
  display: grid;
  grid-template-rows: 7vh 93vh;
  overflow: hidden;
}

 .el-dropdown-link {
            cursor: pointer;
            color: #68BD0A;
        }

        .el-icon-arrow-down {
            font-size: 14px;
        }

        .el-dropdown-menu {
          direction: rtl;
            .el-dropdown-menu__item {
                list-style: none;
                line-height: 36px;
                padding: 0 20px;
                margin: 0;
                font-size: 10px !important;
                color: #606266;
                cursor: pointer;
                outline: 0;
            }
        }

        .el-dialog{
          direction: rtl;
    background-color: #f7f7f7 !important;
    .el-icon-close{
       display: none;
    }

     .el-radio.is-bordered.is-checked {
                                border-color: #68BD0A !important;
                            }
                            .el-radio__input.is-checked+.el-radio__label {
                                color: #68BD0A !important;
                            }

                            .el-radio__input.is-checked .el-radio__inner {
                                border-color: #68BD0A !important;
                                background: #68BD0A !important;
                            }

}

</style>

