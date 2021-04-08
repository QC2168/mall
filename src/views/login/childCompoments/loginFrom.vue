<template>
    <div class="loginFrom">
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

        </van-cell-group>
        <div class="btn">
            <van-button @click="tologin" class="vBtn" type="primary" size="normal">登录</van-button>
            <van-button to="reqisterFrom" class="vBtn" type="primary" size="normal">注册</van-button>

        </div>
    </div>
</template>

<script>
    import { Toast } from 'vant';
    import {getLogin} from '../../../network/login'
    export default {
        name: "From",
        data(){
            return{
                info:{
                    username:'',
                    password:'',
                    phone:'',
                },
                toast:null,
            }
        },
        methods:{
            tologin(){
                //判断
                if(this.info.username.length!=0){

                    if(this.info.password.length!=0){
                        this.toast = Toast.loading({
                            duration: 0, // 持续展示 toast
                            forbidClick: true,
                            message:"登录中"
                        });
                            //post
                        getLogin(this.info.username,this.info.password).then((res)=>{
                            console.log(res);
                            if(res.id){
                                this.toast =Toast.fail({
                                    message:"登录成功!"
                                });
                                setTimeout(()=>{
                                    this.toast.clear();
                                },1000)
                            }else{
                                this.toast =Toast.fail({
                                    message:"账号密码失败!"
                                });
                                setTimeout(()=>{
                                    this.toast.clear();
                                },1000)
                            }



                        }
                        ).catch((error)=>{
                            console.log(error)
                            this.toast.message="catch:error";
                            setTimeout(()=>{
                                this.toast.clear()
                            },1000)
                        })
                    }else{
                        Toast.fail('输入密码');
                    }
                }else{
                    Toast.fail('输入用户名');
                }


            },

        }
    }
</script>

<style scoped>
    .loginFrom{

    }

    .btn{
        display: flex;
        justify-content: space-between;
        padding: 8px 22px;
    }
    .btn .vBtn {
        width:150px;
    }

</style>
