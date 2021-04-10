<template>
    <div class="reqisterFrom">
        <div>
        <van-cell-group>
            <van-field label="用户名"
                       v-model="info.username"
                       left-icon="contact"
                       right-icon="question-o"
                       placeholder="请输入用户名"
                       @click-right-icon="$toast('用户名')"
            />

            <van-field type="password"
                       v-model="info.password"
                       label="密码"
                       left-icon="setting-o"
                       placeholder="请输入密码"

            />
            <van-field
                    label="邮箱"
                    v-model="info.mail"
                    left-icon="phone-o"
                    placeholder="请输入邮箱号" />
            <van-field
                    label="QQ"
                    v-model="info.qq"
                    left-icon="phone-o"
                    placeholder="请输入QQ号" />
            <van-field  label="手机号" v-model="info.phone"  left-icon="phone-o" placeholder="请输入手机号" />
        </van-cell-group>
            <div class="btn">
                <van-button @click="reqister" to="reqisterFrom" class="vBtn" type="primary" size="normal">注册</van-button>
            </div>
        <div class="btn">
            <van-button @click="$router.go(-1)" to="reqisterFrom" class="vBtn" type="primary" size="normal">返回</van-button>
        </div>
        </div>
    </div>
</template>

<script>
    import { Toast } from 'vant';
    import {getReqister} from '../../../network/login'
    export default {
        name: "reqister",
        data(){
            return{
                info:{
                    username:'',
                    password:'',
                    phone:'',
                    mail:'',
                    qq:''
                }
            }
        },
        methods:{
            reqister(){
                //判断内容
                if(this.info.username.length>=6 && this.info.password.length>=6){
                    let ph = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
                    let str = this.info.phone;
                    console.log(ph.test(str))
                    if(ph.test(str)){
                        let mail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
                        let str = this.info.mail;
                        if(mail.test(str)){
                            let qq = /[1-9]([0-9]{5,11})/;
                            let str = this.info.qq;
                            if(qq.test(str)){
                                //网络请求
                                // axios
                                getReqister(this.info.username,this.info.password,this.info.phone,this.info.mail,this.info.qq).then((res)=>{
                                    console.log(res)
                                })
                            }else{
                                Toast.fail('QQ不通过');
                            }
                        }else{
                            Toast.fail('邮箱不通过');
                        }
                    }else{
                        Toast.fail('手机号不通过');
                    }
                }else{
                    Toast.fail('账号密码长度不够');
                }



            }
        },
    }

</script>

<style scoped>
    .reqisterFrom{


    }

    .btn{
        display: flex;
        justify-content: space-between;
        padding: 8px 22px;
    }
    .btn .vBtn {
        flex: 1;
    }
</style>
