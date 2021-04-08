export default {
    addToCart(context,payload){
        return new Promise((resolve, reject)=>{
            let flag =false;
            let index =null;
            for(var i=0;i<context.state.Products.length;i++){
                if(context.state.Products[i].iid===payload.iid) {
                    flag=true;
                    index=i;
                }
            }
            if(flag){
                context.commit("superposition",index);
                resolve("superposition")
            }else{
                context.commit("Add",payload);
                resolve("Add")
            }

        })

    }
}